'use client';

import React, { useState } from 'react';
import {
  ArrowTrendingUpIcon,
  CalculatorIcon,
  CheckCircleIcon,
  CommandLineIcon,
  EyeSlashIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

interface AgencyDemoProps {
  locale: string;
}

export default function AgencyDemo({ locale }: AgencyDemoProps) {
  const isZh = locale === 'zh';

  // Calculator states
  const [projectCount, setProjectCount] = useState<number>(2);
  const [clientHourlyRate, setClientHourlyRate] = useState<number>(140);
  const [hoursPerProject, setHoursPerProject] = useState<number>(50);
  const [activePipelineStep, setActivePipelineStep] = useState<number>(1);

  // Derived financials
  const monthlyDevHours = projectCount * hoursPerProject;
  const monthlyClientRevenue = monthlyDevHours * clientHourlyRate;

  // In-house US Dev cost ($160k/yr = ~$13,333/mo base + $2,500 benefits = ~$15,800/mo)
  const inHouseCost = 15800;

  // AgencyGhost Cost ($2,800/mo for dedicated lane, or ~$1,400 per sprint)
  const agencyGhostCost =
    projectCount <= 2 ? 2800 : 2800 + (projectCount - 2) * 1200;

  const agencyGrossProfit = Math.max(0, monthlyClientRevenue - agencyGhostCost);
  const agencyMarginPercent = Math.round(
    (agencyGrossProfit / monthlyClientRevenue) * 100,
  );
  const annualProfitRetained = agencyGrossProfit * 12;

  const pipelineSteps = [
    {
      step: 1,
      name: isZh ? '1. 需求与 Figma 交接' : '1. Figma & Spec Handover',
      icon: PaintBrushIcon,
      badge: isZh ? '您的代理商团队' : 'Your Agency Team',
      details: isZh
        ? '您向客户赢得项目后，只需将 Figma 设计稿、需求文档或 API 凭证推送到专为贵司建立的 Slack / Linear 频道。'
        : 'After winning the client, drop Figma files, user stories, and third-party API credentials into your dedicated Slack or Linear channel.',
      artifact: 'figma.com/file/client-portal-v2 • Slack #dev-delivery',
    },
    {
      step: 2,
      name: isZh ? '2. 隐形全栈工程构建' : '2. Silent Engineering Sprint',
      icon: CommandLineIcon,
      badge: isZh ? 'AgencyGhost 隐形后盾' : 'AgencyGhost Behind Scenes',
      details: isZh
        ? '我们直接使用贵司 GitHub / GitLab 组织账号编写高质量 Next.js 14、TypeScript 与 Tailwind 代码，每日提交 PR，4 小时异步重合时区协同。'
        : 'We push production Next.js 14, TypeScript & Tailwind directly under YOUR GitHub organization with clean PRs. Zero direct client contact.',
      artifact: 'github.com/your-agency/client-portal • PR #14 merged',
    },
    {
      step: 3,
      name: isZh ? '3. 100% 白标客户交付' : '3. 100% White-Label Handoff',
      icon: RocketLaunchIcon,
      badge: isZh ? '直接向终端客户汇报' : 'Presented to End Client',
      details: isZh
        ? '部署至挂在贵司域名下的白标 Vercel 预览地址。终端客户只知道这是您团队的高效产出，荣誉与客户关系 100% 归属于您。'
        : 'Deployed to your white-labeled preview domain (preview.youragency.com). The client credits your team 100%, strengthening your agency retention.',
      artifact: 'preview.youragency.com/client-demo • 200 OK Live',
    },
  ];

  return (
    <div className="my-8 space-y-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <CalculatorIcon className="h-4 w-4" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
            {isZh
              ? '代理商利润套利计算器与交付管线模拟'
              : 'Agency Margin Arbitrage & White-Label Delivery Simulator'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <EyeSlashIcon className="h-4 w-4 text-emerald-600" />
          <span>
            {isZh
              ? '严格 100% 白标与互签 NDA 保护'
              : '100% White-Label & Strict Mutual NDA'}
          </span>
        </div>
      </div>

      {/* Part 1: Interactive Profit Arbitrage Calculator */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Sliders Input Panel (5 cols) */}
        <div className="space-y-5 rounded-xl border border-slate-200 bg-slate-50/60 p-5 lg:col-span-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
            {isZh ? '调节您的代理商业务参数' : 'Adjust Your Agency Parameters'}
          </h4>

          {/* Slider 1: Monthly Projects */}
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-600">
                {isZh
                  ? '每月需交付的 Web/应用项目数'
                  : 'Monthly Web / App Projects'}
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono font-bold text-blue-600 shadow-sm">
                {projectCount} {isZh ? '个' : 'builds'}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              value={projectCount}
              onChange={(e) => setProjectCount(Number(e.target.value))}
              className="mt-2 w-full accent-blue-600"
            />
            <div className="mt-1 flex justify-between text-[10px] text-slate-400">
              <span>1 {isZh ? '个' : 'proj'}</span>
              <span>3 {isZh ? '个' : 'proj'}</span>
              <span>5 {isZh ? '个' : 'proj'}</span>
            </div>
          </div>

          {/* Slider 2: Client Hourly Rate */}
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-600">
                {isZh
                  ? '向终端客户的报价时薪 (USD)'
                  : 'Client Billing Rate ($/hr)'}
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono font-bold text-blue-600 shadow-sm">
                ${clientHourlyRate}/hr
              </span>
            </div>
            <input
              type="range"
              min={100}
              max={200}
              step={10}
              value={clientHourlyRate}
              onChange={(e) => setClientHourlyRate(Number(e.target.value))}
              className="mt-2 w-full accent-blue-600"
            />
            <div className="mt-1 flex justify-between text-[10px] text-slate-400">
              <span>$100/hr</span>
              <span>$150/hr</span>
              <span>$200/hr</span>
            </div>
          </div>

          {/* Slider 3: Dev Hours per Project */}
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-600">
                {isZh ? '单项目平均工程工作量' : 'Average Scope per Build'}
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono font-bold text-blue-600 shadow-sm">
                {hoursPerProject} hrs (~{Math.round(hoursPerProject / 8)}{' '}
                {isZh ? '天' : 'days'})
              </span>
            </div>
            <input
              type="range"
              min={30}
              max={80}
              step={5}
              value={hoursPerProject}
              onChange={(e) => setHoursPerProject(Number(e.target.value))}
              className="mt-2 w-full accent-blue-600"
            />
            <div className="mt-1 flex justify-between text-[10px] text-slate-400">
              <span>30 hrs (轻量)</span>
              <span>50 hrs (标准)</span>
              <span>80 hrs (复杂系统)</span>
            </div>
          </div>

          <div className="rounded-lg border border-blue-100 bg-blue-50/70 p-3 text-[11px] text-slate-600">
            <span className="font-semibold text-blue-900">
              {isZh
                ? '💡 代理商业务模型说明：'
                : '💡 Agency Economics Insight:'}
            </span>{' '}
            {isZh
              ? '代理商的优势在于客户信任与创意包装；我们的优势在于资深工程落地。二者结合即可释放最大化毛利。'
              : 'Your strength is design and client relationships; our strength is deep engineering. Combining them captures maximum margin.'}
          </div>
        </div>

        {/* Results Comparison Dashboard (7 cols) */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-7">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {isZh ? '每月财务收益测算' : 'Monthly Financial Projection'}
            </span>
            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs text-slate-500">
                  {isZh ? '代理商向客户开票总额' : 'Client Invoicing Volume'}
                </span>
                <div className="font-mono text-2xl font-bold text-slate-900">
                  ${monthlyClientRevenue.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400">
                    {' '}
                    / {isZh ? '月' : 'mo'}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-500">
                  {isZh ? '代理商留存净毛利' : 'Retained Agency Gross Profit'}
                </span>
                <div className="font-mono text-2xl font-bold text-[#0071e3]">
                  +${agencyGrossProfit.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400">
                    {' '}
                    / {isZh ? '月' : 'mo'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Arbitrage Bar Chart / Comparison */}
          <div className="my-5 space-y-3">
            {/* Scenario A: Full-time US Hire */}
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700">
                  {isZh
                    ? '自建美国全职研发 ($160k 年薪+社保)'
                    : 'In-House US Senior Developer ($160k/yr)'}
                </span>
                <span className="font-mono font-bold text-rose-600">
                  -${inHouseCost.toLocaleString()} / mo (固定死成本)
                </span>
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[11px] text-slate-500">
                <span>
                  {monthlyClientRevenue > inHouseCost
                    ? `${isZh ? '扣除后留存毛利：' : 'Agency Net:'} $${(
                        monthlyClientRevenue - inHouseCost
                      ).toLocaleString()} / mo`
                    : `${
                        isZh ? '业务淡季净亏损：' : 'Net Burn in Off-Peak:'
                      } -$${(
                        inHouseCost - monthlyClientRevenue
                      ).toLocaleString()} / mo`}
                </span>
                <span className="font-medium text-rose-500">
                  {isZh ? '存在业务淡季闲置风险' : 'High Downtime Risk'}
                </span>
              </div>
            </div>

            {/* Scenario B: AgencyGhost White-Label Retainer */}
            <div className="rounded-lg border-2 border-blue-500/80 bg-blue-50/40 p-3.5 shadow-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-bold text-slate-900">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                  {isZh
                    ? 'AgencyGhost 白标工程交付'
                    : 'AgencyGhost White-Label Retainer'}
                </span>
                <span className="font-mono font-bold text-blue-700">
                  -${agencyGhostCost.toLocaleString()} / mo (按需弹性)
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
                    {agencyMarginPercent}%{' '}
                    {isZh ? '超额毛利率' : 'Gross Margin'}
                  </span>
                  <span className="text-xs font-semibold text-slate-700">
                    {isZh ? '年度净留存利润：' : 'Annual Net Retained:'}{' '}
                    <strong className="font-mono text-emerald-700">
                      +${annualProfitRetained.toLocaleString()}
                    </strong>
                  </span>
                </div>
                <span className="text-[11px] font-medium text-blue-600">
                  {isZh
                    ? '无雇佣开销 • 零淡季负担'
                    : 'Zero Payroll • Pure Upside'}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <ArrowTrendingUpIcon className="h-4 w-4 text-emerald-600" />
              {isZh
                ? '借助白标工程杠杆，贵司可立刻向已有客户加售高客单 Web/Portal 开发，无需等待漫长的招聘周期。'
                : 'Instantly upsell high-ticket Web & Portal engineering to your existing design/SEO retainer clients.'}
            </span>
          </div>
        </div>
      </div>

      {/* Part 2: White-Label Delivery Pipeline Simulator */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/40 p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              {isZh
                ? '隐形交付管线：客户为何完全无感知？'
                : 'Invisible Delivery Pipeline: How It Works Under Your Brand'}
            </h4>
            <p className="mt-0.5 text-xs text-slate-500">
              {isZh
                ? '点击步骤查看从需求到交付的完整闭环：'
                : 'Click through the stages to observe our 100% white-label workflow:'}
            </p>
          </div>
          <div className="flex gap-1.5">
            {pipelineSteps.map((s) => (
              <button
                key={s.step}
                onClick={() => setActivePipelineStep(s.step)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  activePipelineStep === s.step
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {isZh ? `步骤 0${s.step}` : `Step 0${s.step}`}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Step Display Card */}
        {(() => {
          const step = pipelineSteps[activePipelineStep - 1];
          const StepIcon = step.icon;
          return (
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-100 pb-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <StepIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">
                      {step.name}
                    </h5>
                    <span className="text-xs font-medium text-blue-600">
                      {step.badge}
                    </span>
                  </div>
                </div>
                <div className="rounded-md bg-slate-100 px-3 py-1 font-mono text-[11px] text-slate-600">
                  {step.artifact}
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 md:text-sm">
                {step.details}
              </p>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
