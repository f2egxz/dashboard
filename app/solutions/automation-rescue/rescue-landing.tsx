import React from 'react';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckIcon,
  XMarkIcon,
  EnvelopeIcon,
  LockClosedIcon,
  SparklesIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CommandLineIcon,
  BoltIcon,
  ArrowPathIcon,
  BugAntIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SiteChrome from '@/app/ui/site-chrome';
import RescueDemo from './rescue-demo';

interface RescueLandingProps {
  locale: string;
}

export default function RescueLanding({ locale }: RescueLandingProps) {
  const isZh = locale === 'zh';

  const t = {
    back: isZh ? '返回所有方案' : 'Back to Studio Solutions',
    badge: isZh
      ? '垂直方案深度规格 • FLOWRESCUE ENGINEERING'
      : 'VERTICAL SOLUTION SPECIFICATION • FLOWRESCUE ENGINEERING',
    eyebrow: isZh
      ? '面向重度依赖 Zapier、Make 与 n8n 的海外出海与 SMB 企业的生产级自愈工程'
      : 'Production-Grade Resiliency & Disaster Recovery for Zapier, Make & n8n Workflows',
    heroTitle: isZh
      ? '告别凌晨两点 Zapier 与 Make 的静默报错，彻底杜绝业务丢单与漏单'
      : 'Stop Losing Leads to 2 AM Silent Failures in Zapier & Make Automation Pipelines',
    heroLede: isZh
      ? '海外中小企业将最核心的客户线索、Stripe 交易与 CRM 流水线托付给无代码自动化，却常因第三方 API 瞬时抖动在深夜静默中断，几天后被客户投诉才发现。FlowRescue 为脆弱的点击式工作流注入后端工程级架构——死信队列兜底、指数退避重试、定制代码逃生舱与毫秒级 Slack 告警。100% 在您自有账号内配置，不转存任何数据。'
      : 'Modern SMBs run critical sales pipelines, Stripe checkouts, and CRM sync on Zapier & Make—only to suffer silent breakdowns when third-party APIs jitter at 2 AM. FlowRescue upgrades fragile click-and-drop automations into battle-tested engineering pipelines with dead-letter queues, exponential backoff, custom code escape hatches, and instant Slack alerts. 100% executed inside your own tenant.',
    ctaPrimary: isZh
      ? '预约 15 分钟故障排查沟通'
      : 'Schedule a 15-Min Pipeline Audit',
    ctaSecondary: isZh
      ? '申请 1 条核心工作流免费风险诊断'
      : 'Request 1 Free Workflow Vulnerability Scan',
    mailSubject: isZh
      ? '咨询 FlowRescue 无代码容灾与工程加固'
      : '[FlowRescue Inquiry] Automation Disaster Recovery & Hardening',

    trustBadges: [
      {
        icon: ShieldCheckIcon,
        text: isZh
          ? '零静默丢单保障 (Zero Lead Loss)'
          : 'Zero Silent Lead Loss Guarantee',
      },
      {
        icon: LockClosedIcon,
        text: isZh
          ? '100% 客户自有环境运行 • 零数据中转'
          : '100% In-Tenant Execution • Zero-Data Retention',
      },
      {
        icon: SparklesIcon,
        text: isZh
          ? '降低 60%+ 平台昂贵 Task 阶梯计费'
          : 'Cut Zapier/Make Task Bills by 60%+',
      },
      {
        icon: CheckCircleIcon,
        text: isZh
          ? '死信队列自愈 + 毫秒级 Slack 告警'
          : 'Dead-Letter Queue & Instant Slack Alerts',
      },
    ],

    demoTitle: isZh
      ? '实机生产环境模拟器：02:14 AM 突发故障演练'
      : 'Interactive Production Simulator: 02:14 AM Incident Exercise',
    demoSubtitle: isZh
      ? '亲手触发一次真实的 API 503 瞬时抖动，直观对比原生配置的静默死机 vs FlowRescue 架构的毫秒自愈：'
      : 'Simulate a realistic 503 API spike to compare native silent death vs. FlowRescue automated self-healing in real time:',

    diffSectionTitle: isZh
      ? '为什么普通无代码自动化一定会崩溃？'
      : 'Why Out-of-the-Box No-Code Pipelines Inevitably Break',
    diffSectionSubtitle: isZh
      ? 'Zapier 与 Make 极大降低了连接门槛，但在高并发、异常网络波动与复杂业务逻辑面前，原生的无代码架构存在先天的工程短板。'
      : 'Zapier and Make make connecting apps effortless, but lack the resilience primitives required for mission-critical business revenue pipelines.',

    diffPoints: [
      {
        num: '01',
        title: isZh
          ? '静默失败陷阱 (The Silent Failure Trap)'
          : 'The Silent Failure Trap',
        problem: isZh
          ? '第三方 API 结构微调、网络 100ms 抖动或偶发 503 限流，Zapier/Make 默认直接终止任务。没有重试、没有告警，直到 4 天后客户退款投诉，才发现重要线索早已丢失。'
          : 'A 100ms network timeout or 503 rate-limit halts your Zap instantly. Zero retries, zero alerts. You only discover the failure days later when an angry client asks why their order was never fulfilled.',
        solution: isZh
          ? 'FlowRescue 方案：注入带抖动指数退避 (Exponential Jitter Backoff) 与死信队列 (DLQ)。遇瞬时异常自动在 2s、8s 阶梯重试自愈；即使彻底不可用也会安全暂存并推送到 Slack 运维频道。'
          : 'FlowRescue Engineering: We inject Dead-Letter Queues (DLQ) and exponential backoff with jitter. Transient spikes self-heal in seconds; unresolvable payloads are safely isolated and escalated to Slack.',
      },
      {
        num: '02',
        title: isZh
          ? '平台性能天花板与高昂阶梯计费'
          : 'Platform Performance Ceilings & Bill Shock',
        problem: isZh
          ? '面对多行表格处理或批量同步，原生配置常通过多层嵌套循环实现，每处理 100 条数据就烧掉数百个 Task，不仅频繁触发 Zapier 30 秒超时墙，还导致月度账单从 $49 暴涨至 $599+。'
          : 'Looping through bulk CRM contacts using native steps burns hundreds of tasks per batch, hits Zapier’s rigid 30s timeout wall, and causes monthly subscription bills to skyrocket from $49 to $599+.',
        solution: isZh
          ? 'FlowRescue 方案：定制轻量代码逃生舱 (Custom Python / Node.js Escape Hatches) 或无服务器 Micro-Worker。在云函数中完成高强度数据清洗与批量操作，单次 Task 即可完成原有 50 个 Step 的工作，提速 10 倍，成本暴降 60%。'
          : 'FlowRescue Engineering: We deploy custom lightweight code escape hatches or serverless micro-workers. Single-step execution replaces 50 fragile loops, speeds execution by 10x, and slashes task bills by 60%.',
      },
      {
        num: '03',
        title: isZh
          ? '缺乏版本控制与团队配置漂移'
          : 'Zero Version Control & Configuration Drift',
        problem: isZh
          ? '团队内多位成员在 Zapier 后台随手调整过滤器与映射，缺乏 Git 版本追踪与回滚能力。一旦某一步被误改，排查往往需要在上千条晦涩的历史运行日志中肉眼检索。'
          : 'Multiple team members edit steps in the web UI with zero change tracking or rollback. When something breaks, your team spends hours manually digging through cryptic web log pagination.',
        solution: isZh
          ? 'FlowRescue 方案：工作流规范化与代码化 (Workflow-as-Code)。提供结构化 JSON 备份、变更审计清单，以及统一接入 Datadog / BetterStack / Slack 的自动化健康度监控看板。'
          : 'FlowRescue Engineering: We bring software engineering discipline to your no-code stack. Exported JSON versioning, changelog tracking, and unified health dashboards connected to Datadog or Slack.',
      },
    ],

    roiTitle: isZh
      ? '算硬账：容灾改造的商业投资回报 (Financial ROI)'
      : 'Clear Math: Commercial ROI of Automation Hardening',
    roiSubtitle: isZh
      ? '这不是一笔 IT 成本，而是一张保护月现金流、降低平台杂费的商业保单：'
      : 'Not an IT expense, but an insurance policy that protects revenue and slashes SaaS overhead:',

    roiRows: [
      {
        metric: isZh ? '高价值线索与订单丢失' : 'High-Value Lead & Deal Loss',
        before: isZh
          ? '每月偶发 2~5 单静默丢失 (损失 $2,500 ~ $8,000)'
          : '2-5 deals silently dropped monthly ($2,500 - $8,000 lost)',
        after: isZh
          ? '0 丢单 (死信队列 100% 拦截与自愈)'
          : 'Zero drops (100% intercepted by DLQ & healed)',
        impact: isZh
          ? '每月挽回 $2,500+ 现金收入'
          : 'Protects $2,500+/mo in revenue',
      },
      {
        metric: isZh
          ? 'Zapier / Make 月度 Task 账单'
          : 'Monthly Platform Task Usage',
        before: isZh
          ? '多层循环低效运行，每月 $450+ 昂贵任务阶梯费'
          : '$450+/mo on high-tier task quotas due to inefficient loops',
        after: isZh
          ? '代码逃生舱聚合批处理，月账单降至 $140'
          : '$140/mo (aggregated batch execution reduces task burns)',
        impact: isZh
          ? '每月固定节约 $310 (年省 $3,700+)'
          : 'Saves $310/mo ($3,720+/year saved)',
      },
      {
        metric: isZh
          ? '紧急救火与运维工时'
          : 'Emergency Firefighting & CEO Time',
        before: isZh
          ? '创始人或运营每月耗费 12+ 小时翻查日志排错'
          : '12+ hours/mo spent manually digging logs and reconciling CRM',
        after: isZh
          ? '0 小时手工介入，自动化审计摘要直达 Slack'
          : '0 hours required; structured Slack summary delivered each morning',
        impact: isZh
          ? '释放核心精力，消除夜间运维焦虑'
          : 'Frees up executive focus, eliminates 2 AM panic',
      },
      {
        metric: isZh ? '客户满意度与响应延迟' : 'Customer Trust & Response SLA',
        before: isZh
          ? '丢单后 48 小时经客户投诉才知晓，口碑受损'
          : 'Failures discovered 48h later via client complaints',
        after: isZh
          ? '99.9% 交易在 10 秒内确认，异常毫秒级预警'
          : '99.9% processed within 10s, sub-second alerts',
        impact: isZh
          ? '保护品牌声誉与客户终身价值 (LTV)'
          : 'Preserves brand reputation & customer retention',
      },
    ],

    securityTitle: isZh
      ? '100% 客户自有账户内执行 • 零数据中转承诺'
      : '100% In-Tenant Execution • Zero-Data Retention Security Guarantee',
    securityDesc: isZh
      ? '我们深刻理解客户订单与 CRM 数据的敏感性。FlowRescue 不架设任何中间代理服务器，所有的死信队列、重试逻辑、云函数与告警路由均直接部署在您自有的 Zapier、Make、AWS Lambda 或 Cloudflare 账号内。我们遵循最小权限原则，改造完成后立即交接凭证，您的数据永远不离开您的自有云资产。'
      : 'We treat customer and financial data with enterprise-grade paranoia. FlowRescue never operates intermediary proxy servers. All DLQs, retry logic, cloud functions, and Slack webhooks are deployed directly inside YOUR own Zapier, Make, AWS, or Cloudflare accounts under least-privilege access. Your business data never touches external infrastructure.',

    pricingTitle: isZh
      ? '透明轻量的 3 步落地路径'
      : 'Transparent 3-Step Engagement Model',
    pricingSubtitle: isZh
      ? '无需漫长的咨询周期。我们以明确的交付物和一口价，24 小时内为您排查隐患并完成工程加固：'
      : 'No vague consulting hours. We deliver deterministic engineering outcomes at fixed pricing:',

    pricingPlans: [
      {
        tier: isZh ? '阶段 1 • 免费诊断' : 'Phase 1 • Free Audit',
        name: isZh
          ? '核心工作流架构审计'
          : 'Single-Workflow Vulnerability Audit',
        price: '$0',
        period: isZh ? '24 小时交付' : '24h Turnaround',
        popular: false,
        desc: isZh
          ? '针对您最关键的 1 条收入工作流（如 Stripe 结算或销售线索流），提供专业的工程审计诊断。'
          : 'A surgical engineering inspection of your most critical revenue pipeline (e.g. Stripe checkout or CRM lead ingest).',
        features: [
          isZh
            ? '排查潜在的单点崩溃与静默失败隐患'
            : 'Pinpoint silent failure risks & unhandled API errors',
          isZh
            ? '评估 30s 超时与多循环 Task 浪费'
            : 'Identify 30s timeout bottlenecks & task waste',
          isZh
            ? '出具 1 页可执行的拓扑重构改进建议'
            : '1-page actionable topology remediation report',
        ],
        ctaText: isZh ? '申请免费审计' : 'Claim Free Audit',
        ctaHref: `mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
          isZh
            ? '申请免费 1 条工作流架构审计 (FlowRescue)'
            : '[FlowRescue] Request Free 1-Workflow Audit',
        )}`,
      },
      {
        tier: isZh ? '阶段 2 • 工程加固' : 'Phase 2 • Hardening',
        name: isZh
          ? '生产级容灾与自愈改造'
          : 'Production Hardening & DLQ Setup',
        price: '$800 - $1,500',
        period: isZh ? '一次性固定交付' : 'One-Time Fixed Price',
        popular: true,
        desc: isZh
          ? '对核心工作流进行彻底的工程化重构，注入死信队列、指数退避重试与轻量代码逃生舱。'
          : 'Complete architectural retrofit: inject dead-letter queues, exponential retry mechanisms, and custom code escape hatches.',
        features: [
          isZh
            ? '死信队列 (DLQ) 兜底与自愈熔断机制'
            : 'Dead-Letter Queue (DLQ) setup & circuit breakers',
          isZh
            ? '带抖动指数退避重试 (Exponential Backoff)'
            : 'Jitter-enabled exponential backoff retries',
          isZh
            ? '定制云函数逃生舱 (批量聚合，砍掉 60% Tasks)'
            : 'Custom serverless worker (slashes tasks by 60%)',
          isZh
            ? '实时 Slack #ops-alerts 监控与审计卡片'
            : 'Real-time Slack alerting with structured cards',
          isZh
            ? '7 天上线观察期与零停机迁移保障'
            : '7-day warranty & zero-downtime migration',
        ],
        ctaText: isZh ? '预约工程加固' : 'Book Engineering Hardening',
        ctaHref: `mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
          isZh
            ? '预约 FlowRescue 生产级工程加固项目'
            : '[FlowRescue] Book Production Pipeline Hardening',
        )}`,
      },
      {
        tier: isZh ? '阶段 3 • 运行守护' : 'Phase 3 • Retainer',
        name: isZh ? '全天候自动化守护 Retainer' : '24/7 Automation Run-Keeper',
        price: '$199 - $349',
        period: isZh ? '/ 月' : '/ Month',
        popular: false,
        desc: isZh
          ? '无需专职 DevOps。持续监控第三方 API 协议变动，提供紧急故障救火与月度优化。'
          : 'Your on-demand DevOps engineering team. We monitor third-party API changes, handle breaking updates, and optimize costs.',
        features: [
          isZh
            ? '第三方 API 变动主动适配与版本升级'
            : 'Proactive maintenance for upstream API changes',
          isZh
            ? '突发异常 2 小时紧急响应救援 (SLA)'
            : '2-hour emergency response SLA for pipeline outages',
          isZh
            ? '月度平台 Task 费用体检与压缩调优'
            : 'Monthly task consumption & cost audit',
          isZh
            ? '专属 Slack 共享运维协助频道'
            : 'Dedicated Slack Connect channel with our engineers',
        ],
        ctaText: isZh ? '咨询守护服务' : 'Inquire Run-Keeper',
        ctaHref: `mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
          isZh
            ? '咨询 FlowRescue 运行守护 Retainer'
            : '[FlowRescue] Inquire 24/7 Run-Keeper Retainer',
        )}`,
      },
    ],

    bottomCtaTitle: isZh
      ? '别等下一次重大订单在凌晨静默丢失才开始行动'
      : 'Don’t Wait for Another 2 AM Silent Failure to Burn Client Trust',
    bottomCtaSubtitle: isZh
      ? '只需 15 分钟技术沟通，让我们为您排查潜在的丢单隐患，锁定每月数百美元的平台费用节约空间。'
      : 'Schedule a 15-minute diagnostic call to uncover hidden failure points in your Zapier/Make automations and unlock instant cost savings.',
  };

  return (
    <>
      <SiteChrome />
      <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
        {/* Navigation Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors hover:text-[#0071e3]"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            {t.back}
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#0071e3]">
              {t.badge}
            </div>
            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              {t.eyebrow}
            </div>
            <h1
              className={`mt-3 text-3xl font-extrabold tracking-tight text-[#1d1d1f] sm:text-5xl sm:leading-tight ${lusitana.className}`}
            >
              {t.heroTitle}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.heroLede}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                  t.mailSubject,
                )}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed]"
              >
                <EnvelopeIcon className="h-4 w-4" />
                {t.ctaPrimary}
              </a>
              <a
                href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                  isZh
                    ? '申请 1 条核心工作流免费风险诊断'
                    : '[FlowRescue] Request 1 Free Workflow Audit',
                )}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:bg-slate-50"
              >
                <DocumentMagnifyingGlassIcon className="h-4 w-4 text-slate-500" />
                {t.ctaSecondary}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {t.trustBadges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/80 px-3.5 py-2.5 shadow-sm backdrop-blur-sm"
                  >
                    <IconComponent className="h-4 w-4 shrink-0 text-[#0071e3]" />
                    <span className="text-xs font-semibold text-slate-800">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE SIMULATION DEMO */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {t.demoTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{t.demoSubtitle}</p>
          </div>

          <RescueDemo locale={locale} />
        </section>

        {/* 3-COLUMN ARCHITECTURE COMPARISON */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {t.diffSectionTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {t.diffSectionSubtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {t.diffPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-slate-300"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-[#0071e3]">
                    {point.num}
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {point.title}
                  </h3>

                  <div className="mt-4 rounded-xl border border-rose-100 bg-rose-50/70 p-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
                      <XMarkIcon className="h-4 w-4 text-rose-600" />
                      <span>
                        {isZh ? '原生无代码缺陷' : 'Native Platform Flaw'}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-700">
                      {point.problem}
                    </p>
                  </div>

                  <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0071e3]">
                      <CheckIcon className="h-4 w-4 text-[#0071e3]" />
                      <span>
                        {isZh
                          ? 'FlowRescue 工程加固'
                          : 'FlowRescue Engineering'}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-700">
                      {point.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FINANCIAL ROI TABLE */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {t.roiTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{t.roiSubtitle}</p>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <th className="py-3.5 pr-4">
                      {isZh ? '商业指标维度' : 'Business Metric'}
                    </th>
                    <th className="px-4 py-3.5">
                      {isZh ? '改造前原生配置' : 'Before FlowRescue'}
                    </th>
                    <th className="px-4 py-3.5 text-[#0071e3]">
                      {isZh
                        ? 'FlowRescue 工程加固后'
                        : 'With FlowRescue Hardening'}
                    </th>
                    <th className="py-3.5 pl-4 text-right text-emerald-600">
                      {isZh ? '净经济价值' : 'Net Financial Value'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {t.roiRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="transition-colors hover:bg-slate-50/60"
                    >
                      <td className="py-4 pr-4 font-semibold text-slate-900">
                        {row.metric}
                      </td>
                      <td className="px-4 py-4 text-xs text-slate-500">
                        {row.before}
                      </td>
                      <td className="px-4 py-4 text-xs font-medium text-slate-900">
                        {row.after}
                      </td>
                      <td className="py-4 pl-4 text-right font-mono text-xs font-bold text-emerald-600">
                        {row.impact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ZERO-ACCESS SECURITY GUARANTEE */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="shrink-0 rounded-xl bg-[#0071e3] p-3 text-white">
                <LockClosedIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {t.securityTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {t.securityDesc}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <CheckCircleIcon className="h-4 w-4" />
                    {isZh ? '零外部中间人代理' : 'No External Proxy Servers'}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-700">
                    <CheckCircleIcon className="h-4 w-4" />
                    {isZh
                      ? '交付后即时注销临时密钥'
                      : 'Immediate Credential Revocation'}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-700">
                    <CheckCircleIcon className="h-4 w-4" />
                    {isZh
                      ? '签署双向商业保密协议 (NDA)'
                      : 'Strict Mutual NDA Protected'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-STEP PRICING SECTION */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {t.pricingTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {t.pricingSubtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {t.pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-2xl border p-7 shadow-sm transition-all ${
                  plan.popular
                    ? 'border-[#0071e3] bg-white shadow-md ring-2 ring-[#0071e3]/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0071e3] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {isZh ? '最推荐的工程加固' : 'Most Popular Choice'}
                  </span>
                )}

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0071e3]">
                    {plan.tier}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {plan.period}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {plan.desc}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <div className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isZh ? '交付规格包含' : 'Included Deliverables'}
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#0071e3]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={plan.ctaHref}
                    className={`block w-full rounded-xl py-3 text-center text-xs font-bold shadow-sm transition-all ${
                      plan.popular
                        ? 'bg-[#0071e3] text-white hover:bg-[#0077ed]'
                        : 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM STRONG CTA */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-center text-white sm:p-12">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
                {t.bottomCtaTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {t.bottomCtaSubtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                    t.mailSubject,
                  )}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed]"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  {t.ctaPrimary}
                </a>
                <a
                  href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                    isZh
                      ? '发送工作流截图申请免费诊断'
                      : '[FlowRescue] Send Workflow Screenshot for Audit',
                  )}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-8 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-700"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer page-grid border-t border-slate-200 bg-white">
          <span>© 2026 GXZ / Workflow Studio</span>
          <Link className="text-link" href="/solutions">
            {isZh ? '浏览全部 4 大方案' : 'View All 4 Studio Solutions'}{' '}
            <ArrowUpRightIcon aria-hidden="true" />
          </Link>
        </footer>
      </main>
    </>
  );
}
