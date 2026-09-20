'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowPathIcon,
  BoltIcon,
  BugAntIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  CommandLineIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

interface RescueDemoProps {
  locale: string;
}

type Mode = 'native' | 'engineered';
type SimStatus = 'idle' | 'running' | 'failed' | 'retrying' | 'recovered';

interface LogEntry {
  timestamp: string;
  type: 'info' | 'error' | 'warning' | 'success';
  message: string;
}

export default function RescueDemo({ locale }: RescueDemoProps) {
  const isZh = locale === 'zh';

  const [mode, setMode] = useState<Mode>('engineered');
  const [status, setStatus] = useState<SimStatus>('idle');
  const [retryCount, setRetryCount] = useState<number>(0);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [slackAlertVisible, setSlackAlertVisible] = useState<boolean>(false);

  const resetSimulation = () => {
    setStatus('idle');
    setRetryCount(0);
    setLogs([]);
    setSlackAlertVisible(false);
  };

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    resetSimulation();
  };

  const runSimulation = () => {
    resetSimulation();
    setStatus('running');

    const now = '02:14:02';
    const initLogs: LogEntry[] = [
      {
        timestamp: `${now}.104`,
        type: 'info',
        message: isZh
          ? '[Webhook 接收] 监听到 Stripe 结算成功事件: customer="alex@northstar.co", amount=$2,400.00'
          : '[Webhook Received] Stripe charge.successful: customer="alex@northstar.co", amount=$2,400.00',
      },
      {
        timestamp: `${now}.342`,
        type: 'info',
        message: isZh
          ? '[步骤 1/3] POST api.hubspot.com/v3/crm/contacts (同步创建交易与联系人)...'
          : '[Step 1/3] POST api.hubspot.com/v3/crm/contacts (Syncing lead & deal)...',
      },
    ];
    setLogs(initLogs);

    if (mode === 'native') {
      // Native Zapier/Make flow: 503 causes silent crash
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          {
            timestamp: '02:14:03.118',
            type: 'error',
            message: isZh
              ? '[HTTP 503 异常] HubSpot CRM 响应 Service Unavailable (临时网关限流抖动)'
              : '[HTTP 503 Error] HubSpot CRM returned Service Unavailable (Transient Rate Limit Spike)',
          },
          {
            timestamp: '02:14:03.120',
            type: 'error',
            message: isZh
              ? '[执行中断] Zapier / Make 默认单次尝试失败，工作流静默挂起 (FAILED_SILENT)。未发送任何告警！'
              : '[Execution Halted] Native trigger failed. Scenario terminated with zero retry. No alert dispatched!',
          },
          {
            timestamp: '02:14:03.125',
            type: 'error',
            message: isZh
              ? '[灾难后果] 后续 QuickBooks 账单生成与 Slack 认领全部跳过。价值 $2,400 的客户线索彻底丢失！'
              : '[Critical Impact] QuickBooks invoice and team alert bypassed. $2,400 enterprise lead silently lost!',
          },
        ]);
        setStatus('failed');
      }, 1200);
    } else {
      // FlowRescue Engineered flow: DLQ + Exponential Retries + Recovery + Slack Audit
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          {
            timestamp: '02:14:03.118',
            type: 'warning',
            message: isZh
              ? '[HTTP 503 拦截] 捕获 HubSpot CRM 503 抖动。已触发 FlowRescue 死信队列 (DLQ) 熔断机制'
              : '[HTTP 503 Intercepted] Caught HubSpot 503 jitter. FlowRescue Dead-Letter Queue (DLQ) engaged',
          },
          {
            timestamp: '02:14:03.122',
            type: 'info',
            message: isZh
              ? '[智能退避] 启动带抖动指数退避 (Exponential Jitter Backoff)... 等待 2.0s'
              : '[Exponential Backoff] Scheduling Retry #1 in 2.0s with randomized jitter...',
          },
        ]);
        setStatus('retrying');
        setRetryCount(1);
      }, 1000);

      // Retry 1: still 503
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          {
            timestamp: '02:14:05.140',
            type: 'warning',
            message: isZh
              ? '[重试 #1 失败] HubSpot 依然处于 503 恢复期。死信队列自动提升退避阶梯至 4.5s...'
              : '[Retry #1 Failed] HubSpot still recovering (HTTP 503). Increasing backoff delay to 4.5s...',
          },
        ]);
        setRetryCount(2);
      }, 2400);

      // Retry 2: 200 OK!
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          {
            timestamp: '02:14:09.650',
            type: 'success',
            message: isZh
              ? '[重试 #2 成功] HTTP 200 OK! HubSpot CRM 联系人及 $2,400 交易成功入库 (Deal ID: #DL-8902)'
              : '[Retry #2 Success] HTTP 200 OK! Lead and $2,400 deal synced into HubSpot (Deal ID: #DL-8902)',
          },
          {
            timestamp: '02:14:10.120',
            type: 'info',
            message: isZh
              ? '[步骤 2/3] POST quickbooks.api.intuit.com/v3 (自动开具发票 #INV-4921) -> HTTP 200 OK'
              : '[Step 2/3] POST quickbooks.api.intuit.com/v3 (Generated Invoice #INV-4921) -> HTTP 200 OK',
          },
          {
            timestamp: '02:14:10.450',
            type: 'success',
            message: isZh
              ? '[步骤 3/3] 推送自愈审计卡片至 Slack #ops-alerts，管线 100% 自愈恢复完成！'
              : '[Step 3/3] Dispatched self-heal audit card to Slack #ops-alerts. Pipeline 100% recovered!',
          },
        ]);
        setStatus('recovered');
        setSlackAlertVisible(true);
      }, 4200);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm md:p-8">
      {/* Header with Mode Toggle */}
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {isZh
                ? '实机生产环境模拟器 (02:14 AM 场景)'
                : 'Interactive Production Simulator (02:14 AM Incident)'}
            </span>
          </div>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            {isZh
              ? '模拟突发 API 503 抖动：原生崩溃 vs FlowRescue 自愈'
              : 'Trigger Intermittent 503 Spike: Native Crash vs FlowRescue Self-Heal'}
          </h3>
        </div>

        {/* Mode Switcher */}
        <div className="inline-flex rounded-xl border border-slate-200/60 bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => handleModeChange('native')}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
              mode === 'native'
                ? 'bg-white text-rose-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isZh ? '❌ 传统原生 Zapier / Make' : '❌ Native Zapier / Make'}
          </button>
          <button
            type="button"
            onClick={() => handleModeChange('engineered')}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
              mode === 'engineered'
                ? 'bg-[#0071e3] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isZh
              ? '🛡️ FlowRescue 自愈加固架构'
              : '🛡️ FlowRescue Self-Healing Pipeline'}
          </button>
        </div>
      </div>

      {/* Simulator Pipeline Visualizer */}
      <div className="mt-6">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {isZh ? '自动化数据流拓扑路径' : 'Automation Pipeline Topology'}
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          {/* Step 1 */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5">
            <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
              <span>Step 01 • Webhook</span>
              <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                200 OK
              </span>
            </div>
            <div className="text-sm font-bold text-slate-900">
              Stripe Payment
            </div>
            <div className="mt-1 font-mono text-xs text-slate-500">
              $2,400.00 Enterprise Deal
            </div>
          </div>

          {/* Step 2 (Vulnerable point) */}
          <div
            className={`rounded-xl border p-3.5 transition-all ${
              status === 'failed'
                ? 'border-rose-300 bg-rose-50/80'
                : status === 'retrying'
                ? 'animate-pulse border-amber-300 bg-amber-50/80'
                : status === 'recovered'
                ? 'border-emerald-300 bg-emerald-50/80'
                : 'border-slate-200 bg-slate-50/70'
            }`}
          >
            <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
              <span>Step 02 • CRM Sync</span>
              {status === 'failed' && (
                <span className="rounded bg-rose-200 px-1.5 py-0.5 text-[10px] font-bold text-rose-800">
                  503 HALTED
                </span>
              )}
              {status === 'retrying' && (
                <span className="rounded bg-amber-200 px-1.5 py-0.5 text-[10px] font-bold text-amber-800">
                  DLQ RETRY #{retryCount}
                </span>
              )}
              {status === 'recovered' && (
                <span className="rounded bg-emerald-200 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">
                  HEALED (200)
                </span>
              )}
              {status === 'idle' && (
                <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
                  HubSpot API
                </span>
              )}
            </div>
            <div className="text-sm font-bold text-slate-900">HubSpot CRM</div>
            <div className="mt-1 font-mono text-xs text-slate-500">
              {status === 'failed'
                ? isZh
                  ? '静默中断，无重试'
                  : 'Silent fail, 0 retries'
                : status === 'recovered'
                ? isZh
                  ? '退避重试成功入库'
                  : 'Synced after 2 retries'
                : 'POST /crm/v3/contacts'}
            </div>
          </div>

          {/* Step 3 */}
          <div
            className={`rounded-xl border p-3.5 transition-all ${
              status === 'failed'
                ? 'border-slate-200 bg-slate-100/50 opacity-50'
                : status === 'recovered'
                ? 'border-emerald-300 bg-emerald-50/80'
                : 'border-slate-200 bg-slate-50/70'
            }`}
          >
            <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
              <span>Step 03 • Invoicing</span>
              {status === 'failed' ? (
                <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
                  {isZh ? '被跳过' : 'Skipped'}
                </span>
              ) : status === 'recovered' ? (
                <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                  200 OK
                </span>
              ) : (
                <span className="text-[10px] text-slate-400">QuickBooks</span>
              )}
            </div>
            <div className="text-sm font-bold text-slate-900">QuickBooks</div>
            <div className="mt-1 font-mono text-xs text-slate-500">
              {status === 'recovered' ? 'Invoice #INV-4921' : 'Create Invoice'}
            </div>
          </div>

          {/* Step 4 */}
          <div
            className={`rounded-xl border p-3.5 transition-all ${
              status === 'failed'
                ? 'border-slate-200 bg-slate-100/50 opacity-50'
                : status === 'recovered'
                ? 'border-blue-300 bg-blue-50/80'
                : 'border-slate-200 bg-slate-50/70'
            }`}
          >
            <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
              <span>Step 04 • Alerting</span>
              {status === 'failed' ? (
                <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[10px] font-bold text-rose-700">
                  {isZh ? '无告警发出' : 'Silent (0 Alerts)'}
                </span>
              ) : status === 'recovered' ? (
                <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-semibold text-[#0071e3]">
                  Slack Pushed
                </span>
              ) : (
                <span className="text-[10px] text-slate-400">#ops-alerts</span>
              )}
            </div>
            <div className="text-sm font-bold text-slate-900">
              Slack Dispatch
            </div>
            <div className="mt-1 font-mono text-xs text-slate-500">
              {status === 'recovered'
                ? isZh
                  ? '自愈审计卡片已投递'
                  : 'Recovery Digest sent'
                : '#ops-notifications'}
            </div>
          </div>
        </div>
      </div>

      {/* Action Control Button */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200/80 bg-slate-50/90 p-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={runSimulation}
            disabled={status === 'running' || status === 'retrying'}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-sm transition-all ${
              status === 'running' || status === 'retrying'
                ? 'cursor-not-allowed bg-slate-300 text-slate-500'
                : mode === 'native'
                ? 'bg-rose-600 text-white hover:bg-rose-700'
                : 'bg-[#0071e3] text-white hover:bg-[#0077ed]'
            }`}
          >
            <BoltIcon className="h-4 w-4" />
            {isZh
              ? '模拟 02:14 AM 突发 503 异常'
              : 'Simulate 02:14 AM 503 Incident'}
          </button>

          {status !== 'idle' && (
            <button
              type="button"
              onClick={resetSimulation}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50"
            >
              <ArrowPathIcon className="h-3.5 w-3.5" />
              {isZh ? '重置演练' : 'Reset'}
            </button>
          )}
        </div>

        <div className="text-xs text-slate-500">
          {mode === 'native' ? (
            <span className="font-medium text-rose-600">
              {isZh
                ? '⚠️ 当前为原生配置：遭遇 503 将静默截断，无告警与重试'
                : '⚠️ Native mode: 503 will halt silently with zero retries'}
            </span>
          ) : (
            <span className="font-medium text-emerald-700">
              {isZh
                ? '🛡️ FlowRescue 架构：死信队列拦截 + 指数退避 + Slack 审计'
                : '🛡️ FlowRescue mode: DLQ interception + Jitter backoff + Slack digest'}
            </span>
          )}
        </div>
      </div>

      {/* Terminal Logs & Slack Card Output */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Real-time event execution log */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between rounded-t-xl border border-b-0 border-slate-800 bg-slate-900 px-4 py-2.5 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="ml-2 font-mono text-[11px] text-slate-300">
                pipeline-engine.log
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-500">
              {status === 'idle'
                ? 'READY'
                : status === 'running' || status === 'retrying'
                ? 'PROCESSING...'
                : status === 'failed'
                ? 'TERMINATED (SILENT)'
                : '100% RECOVERED'}
            </span>
          </div>

          <div className="h-64 overflow-y-auto rounded-b-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-200">
            {logs.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center text-slate-500">
                <CommandLineIcon className="mb-2 h-8 w-8 stroke-1" />
                <p>
                  {isZh
                    ? '点击上方按钮，模拟 02:14 AM 第三方 API 突发抖动事件'
                    : 'Click button above to simulate 02:14 AM transient API spike'}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {logs.map((log, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="mt-0.5 shrink-0 text-[10px] text-slate-500">
                      {log.timestamp}
                    </span>
                    <span
                      className={`break-all ${
                        log.type === 'error'
                          ? 'font-semibold text-rose-400'
                          : log.type === 'warning'
                          ? 'text-amber-400'
                          : log.type === 'success'
                          ? 'font-semibold text-emerald-400'
                          : 'text-slate-300'
                      }`}
                    >
                      {log.message}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Live Business Consequence Card */}
        <div className="flex flex-col justify-between lg:col-span-5">
          {mode === 'native' ? (
            <div
              className={`h-full rounded-xl border p-5 transition-all ${
                status === 'failed'
                  ? 'border-rose-300 bg-rose-50/70 text-rose-900'
                  : 'border-slate-200 bg-slate-50/80 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 font-bold">
                <XCircleIcon className="h-5 w-5 text-rose-600" />
                <span>
                  {isZh
                    ? '原生无代码配置的隐形代价'
                    : 'Hidden Cost of Default Zapier/Make'}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {isZh
                  ? 'Zapier / Make 默认不提供带抖动指数退避机制。一旦在凌晨 2 点遇到第三方短暂维护或 503 限流，流程立刻被永久挂起。'
                  : 'Native Zapier/Make lack exponential backoff with jitter. A brief 2 AM 503 timeout halts the run permanently without alerting.'}
              </p>

              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">
                    {isZh ? '直接丢单损失' : 'Direct Revenue Lost'}
                  </span>
                  <span className="font-mono font-bold text-rose-600">
                    {status === 'failed' ? '$2,400.00 (LOST)' : '$0'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">
                    {isZh ? '团队发现时间' : 'Time to Detection'}
                  </span>
                  <span className="font-semibold text-slate-800">
                    {status === 'failed'
                      ? isZh
                        ? '3~5 天后（客户发邮件投诉）'
                        : '3~5 Days (Customer Complaint)'
                      : '--'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">
                    {isZh ? '平台任务浪费' : 'Wasted Platform Tasks'}
                  </span>
                  <span className="text-slate-800">
                    {status === 'failed'
                      ? isZh
                        ? '扣除 1 次失败额度'
                        : '1 Billable Failed Task'
                      : '--'}
                  </span>
                </div>
              </div>

              {status === 'failed' && (
                <div className="mt-4 rounded-lg border border-rose-200 bg-white p-3 text-xs font-medium text-rose-800">
                  {isZh
                    ? '💡 这正是为什么超过 78% 的海外中小企业即使付着高昂的 Zapier 订阅，仍然频繁遭遇客户漏单！'
                    : '💡 Why 78% of SMBs paying high Zapier bills still suffer from lost enterprise leads!'}
                </div>
              )}
            </div>
          ) : (
            <div className="flex h-full flex-col justify-between rounded-xl border border-blue-200 bg-blue-50/40 p-5">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <ShieldCheckIcon className="h-5 w-5 text-[#0071e3]" />
                    <span>
                      {isZh
                        ? 'FlowRescue 实时自愈审计'
                        : 'FlowRescue Self-Heal Audit'}
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                    {isZh ? '零丢单保障' : 'Zero Lead Loss'}
                  </span>
                </div>

                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-blue-100 pb-1.5">
                    <span className="text-slate-500">
                      {isZh ? '挽回资金金额' : 'Protected Revenue'}
                    </span>
                    <span className="font-mono font-bold text-emerald-600">
                      {status === 'recovered' ? '+$2,400.00' : '$2,400.00'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-blue-100 pb-1.5">
                    <span className="text-slate-500">
                      {isZh ? '系统恢复用时' : 'Auto-Recovery Time'}
                    </span>
                    <span className="font-mono font-semibold text-slate-800">
                      {status === 'recovered'
                        ? '6.5 秒 (2 次智能退避)'
                        : '0.0s'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-blue-100 pb-1.5">
                    <span className="text-slate-500">
                      {isZh ? '人工干预需求' : 'Manual Ops Required'}
                    </span>
                    <span className="font-bold text-emerald-700">
                      0 人工操作 (100% 自动闭环)
                    </span>
                  </div>
                </div>

                {/* Simulated Slack Webhook card */}
                {slackAlertVisible && (
                  <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3.5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 items-center justify-center rounded bg-[#4A154B] text-[10px] font-bold text-white">
                        #
                      </div>
                      <span className="text-[11px] font-bold text-slate-800">
                        Slack #ops-alerts • 02:14 AM
                      </span>
                    </div>
                    <div className="mt-2 border-l-2 border-emerald-500 pl-2.5 text-[11px] leading-relaxed text-slate-600">
                      <p className="font-semibold text-slate-800">
                        {isZh
                          ? '✅ [自愈成功] HubSpot 503 抖动已自动修复'
                          : '✅ [Auto-Healed] HubSpot 503 spike recovered'}
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-500">
                        Order: #ORD-8921 • Customer: alex@northstar.co ($2,400)
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Retries: 2 (Backoff: 2.0s, 4.5s) • Next step: QuickBooks
                        Invoice #INV-4921 generated.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {!slackAlertVisible && (
                <div className="mt-4 text-center text-[11px] italic text-slate-500">
                  {isZh
                    ? '自愈成功后，系统将在 Slack 发送详细审计报告，团队早晨上班可随时查看。'
                    : 'Upon self-healing, a structured audit digest is dispatched to Slack without waking you up.'}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
