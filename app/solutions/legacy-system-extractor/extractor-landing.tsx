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
  CommandLineIcon,
  LockClosedIcon,
  DocumentCheckIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SiteChrome from '@/app/ui/site-chrome';
import ExtractorDemo from './extractor-demo';

interface ExtractorLandingProps {
  locale: string;
}

export default function ExtractorLanding({ locale }: ExtractorLandingProps) {
  const isZh = locale === 'zh';

  const t = {
    back: isZh ? '返回所有方案' : 'Back to Studio Solutions',
    badge: isZh
      ? '垂直方案深度规格 • PORTALBRIDGE'
      : 'VERTICAL SOLUTION SPECIFICATION • PORTALBRIDGE',
    eyebrow: isZh
      ? '面向美国货代经纪（Freight Brokers）、3PL 与传统分销商的浏览器数据工程'
      : 'Bespoke Browser Data Engineering for US Freight Brokers & Distributors',
    heroTitle: isZh
      ? '彻底终结无 API 老旧承运商门户的手动复制粘贴'
      : 'Eliminate 15+ Hours of Manual Copy-Pasting from Prehistoric Carrier Portals',
    heroLede: isZh
      ? '专为处理老旧航运、铁路与仓储门户打造的定制 Chrome 扩展。直接在操作员已认证的浏览器会话中逆向提取提单数据，自动清洗归一化，直推内部 CRM/TMS——100% 确定性，零 AI 幻觉，零外部接口等待。'
      : 'Bespoke Chrome Extensions purpose-built for US Freight Brokers and 3PLs. Reverse-extract shipment data directly from authenticated browser sessions, normalize fields, and push clean JSON straight to your CRM/TMS — 100% deterministic, zero AI hallucination, zero carrier API delays.',
    ctaPrimary: isZh
      ? '预约 15 分钟技术评估'
      : 'Schedule a 15-Min Scoping Call',
    ctaSecondary: isZh
      ? '申请 1 个门户免费实测演示'
      : 'Request 1-Portal Free Proof of Concept',
    mailSubject: isZh
      ? '咨询 PortalBridge 老旧门户 Chrome 扩展自动化'
      : '[PortalBridge Inquiry] Request 1-Portal Free Proof of Concept',

    trustBadges: [
      {
        icon: CommandLineIcon,
        text: isZh
          ? '100% 确定性解析（绝无大模型幻觉）'
          : '100% Deterministic (Zero AI Hallucination)',
      },
      {
        icon: ClockIcon,
        text: isZh
          ? '单人每周挽回 15+ 小时机械录入工时'
          : '15+ Hours Saved per Operator / Week',
      },
      {
        icon: LockClosedIcon,
        text: isZh
          ? '操作员本地浏览器沙箱运行（零隐私转存）'
          : 'Local Browser Sandboxing (Zero Data Retention)',
      },
      {
        icon: DocumentCheckIcon,
        text: isZh
          ? '100% 客户独占扩展源码与适配器'
          : '100% Client Code & Rule Ownership',
      },
    ],

    demoTitle: isZh
      ? '实机交互演示：体验史前老系统一键提取入库'
      : 'Interactive System Demo: 1-Click Extraction from Legacy Portals',
    demoSubtitle: isZh
      ? '无需任何口头承诺，请在下方点击选择不同年代的老系统，点击右侧扩展的“一键提取”按钮，查看字段精准高亮与毫秒级 CRM 写入：'
      : 'Experience the workflow first-hand. Select a simulated legacy portal below and click "Extract & Push" to watch deterministic DOM extraction and 200 OK webhook sync in real-time:',

    diffSectionTitle: isZh
      ? '为什么传统自动化方案在老旧门户面前通通失效？'
      : 'Why Generic Automation Tools Fail on Archaic Portals',
    diffSectionSubtitle: isZh
      ? '大量承运商与供应商系统建于 2000 年前后，既无开放 API，又充斥着验证码与动态超时。常规手段根本无法落地。'
      : 'Most carrier and freight portals were architected decades ago with no APIs, anti-bot CAPTCHAs, and session expirations. Here is why standard approaches break down:',

    diffPoints: [
      {
        title: isZh
          ? '为什么 Zapier / Make 做不到？'
          : 'Why Zapier / Make Cannot Help',
        problem: isZh
          ? '无代码平台依赖标准开放 API 或 Webhook。但 80% 的区域承运商根本没有 API，且受制于账号登录、MFA 与会话超时。'
          : 'No-code tools require public APIs or webhooks. 80% of legacy portals have zero APIs, blocking Zapier behind complex logins, CAPTCHAs, and session timeouts.',
        solution: isZh
          ? 'PortalBridge 直接作为 Chrome 扩展注入，运行在操作员本就已经认证通过的浏览器标签页内，天然越过所有认证壁垒。'
          : 'PortalBridge injects directly into the operator’s authenticated browser session. No API credentials required, effortlessly bypassing login walls.',
      },
      {
        title: isZh
          ? '为什么大型 RPA（UiPath）是维护灾难？'
          : 'Why Enterprise RPA (UiPath) is an Overkill Nightmare',
        problem: isZh
          ? '单年软件授权费高达 $15,000~$30,000，且前端只要变更一个 CSS 类名或微调像素，整个脆弱的桌面录制链路就会崩溃。'
          : 'Desktop RPA costs $15k-$30k/yr in licenses and breaks fragile visual selectors every time a carrier tweaks a single HTML element or font size.',
        solution: isZh
          ? '我们基于底层抽象语法树与健壮选择器（Resilient Selectors）打造轻量插件，配合 DOM 变动预警，成本仅为 RPA 的 1/10。'
          : 'We engineer lightweight extensions using resilient CSS/XPath fallback selectors with automated drift detection at a fraction of the cost.',
      },
      {
        title: isZh
          ? '为什么不能用通用 AI 替代？'
          : 'Why Generic AI (LLMs) Cannot Solve It',
        problem: isZh
          ? '大模型在面对复杂的运费明细与集装箱号时存在幻觉风险，把 $450 的滞港费看漏一次就会给货代造成数千美元损失。'
          : 'LLM multimodal scrapers are slow, expensive, and hallucinate numeric IDs, decimal places, and demurrage penalties where precision is non-negotiable.',
        solution: isZh
          ? '纯代码 DOM 逆向与正则数学类型校验，字段提取 100% 确定性，从根本上杜绝任何幻觉与数值错漏。'
          : '100% deterministic TypeScript DOM parsing. Rigid schema validation ensures every single character and currency symbol is mathematically accurate.',
      },
    ],

    roiTitle: isZh
      ? '直接算账：货代团队的人力与运营经济学'
      : 'Cold Hard Numbers: Freight Labor Economics & ROI',
    roiSubtitle: isZh
      ? '把昂贵的物流调度员与操作员从机械的“CTRL+C / CTRL+V”中解放出来，大幅缩短订单周转周期。'
      : 'Free your operations team from mindless copy-pasting so they can move more freight and handle exceptions.',

    roiTableHeaders: isZh
      ? ['对比维度', '传统人工跨系统复制粘贴', 'PortalBridge 浏览器扩展工程']
      : [
          'Metric',
          'Manual Operator Copy-Pasting',
          'PortalBridge Extension System',
        ],

    roiRows: isZh
      ? [
          {
            metric: '单人每周数据搬运耗时',
            traditional: '15 ~ 18 小时 / 周 (占全职工作 40%)',
            medidraft: '45 分钟 / 周 (每次 1 键同步)',
          },
          {
            metric: '操作员单人人力成本支出',
            traditional: '约 $1,320 ~ $1,580 / 月 (按 $22/hr 计算)',
            medidraft: '包含在固定月度维护中 (~$60/人分摊)',
          },
          {
            metric: '提单号/装箱号手工错录率',
            traditional: '4% ~ 8% (长时间疲劳录入无法避免)',
            medidraft: '0% (确定性 DOM 逆向提取)',
          },
          {
            metric: '滞港费 (Demurrage) 漏报风险',
            traditional: '偶发漏看，单次引发 $300~$1,000 额外罚单',
            medidraft: '规则级毫秒标红高亮，直推财务告警',
          },
          {
            metric: '5 人操作团队月度净收益',
            traditional: '纯损耗 ~$7,000 / 月 纯机械人力',
            medidraft: '每月净省超 $5,200+ 纯人力成本',
          },
        ]
      : [
          {
            metric: 'Weekly Data Entry per Operator',
            traditional: '15 – 18 Hours / Week (40% of payroll)',
            medidraft: '45 Minutes / Week (1-click sync)',
          },
          {
            metric: 'Junior Operator Labor Burn',
            traditional: '~$1,320 – $1,580 / mo (@ $22/hr rate)',
            medidraft: 'Covered under flat retainer (~$60/seat)',
          },
          {
            metric: 'BOL / Container Typo Rate',
            traditional: '4% – 8% due to manual copy fatigue',
            medidraft: '0% (Deterministic DOM parsing)',
          },
          {
            metric: 'Missed Demurrage Fee Risk',
            traditional: 'Missed fees trigger $300–$1,000 penalties',
            medidraft: 'Instant rule-based red flag alert to billing',
          },
          {
            metric: '5-Person Ops Team Net Savings',
            traditional: 'Baseline payroll drag ~$7,000/mo',
            medidraft: 'Net $5,200+ cash saved every month',
          },
        ],

    complianceTitle: isZh
      ? '企业级安全标准：零隐私存储与本地沙箱运行'
      : 'Enterprise Security: Zero Data Retention & Local Sandboxing',
    complianceText: isZh
      ? '我们深知货代运单与客户价格属于商业核心机密。PortalBridge 扩展代码 100% 运行在操作员本机的 Chrome 沙箱内，提取的数据通过受保护的内网 Webhook 直推您的 CRM/TMS，绝不经过任何第三方服务器中转与存储。'
      : 'We recognize that shipment rates and customer lists are core commercial secrets. PortalBridge executes 100% within your operator’s local browser sandbox. Scraped payloads push directly to your internal CRM/TMS via encrypted webhooks — zero third-party cloud caching or data retention.',

    roadmapTitle: isZh
      ? '清晰轻量的 3 步落地路径'
      : 'Transparent 3-Step Engagement Model',

    steps: isZh
      ? [
          {
            step: '01',
            price: '免费 / 24小时内交付',
            title: '1 个老旧门户免费实测演示 (Proof of Concept)',
            desc: '零风险启动：发给我们 1 个让团队最痛苦的老旧门户网址与截图。我们将在 24 小时内交付一段 60 秒录屏演示，向您展示点击插件瞬间提取数据并写入 CRM 的实测效果。',
          },
          {
            step: '02',
            price: '$1,000 一次性工程定制',
            title: '专属扩展开发与 CRM/TMS 接口直连 (Setup & Deploy)',
            desc: '深度逆向目标门户的 DOM 结构，编写防变更的容错解析器，打通与 Salesforce、HubSpot 或自研 TMS 的双向字段映射，并在团队电脑一键分发安装。',
          },
          {
            step: '03',
            price: '$299 / 月 (按门户托管)',
            title: 'DOM 规则变动监控与 SLA 运行保障 (Ongoing Retainer)',
            desc: '老旧门户一旦前端升级或改版，我们将在 4 小时内紧急更新解析规则并云端静默热推，确保您的数据自动化链路永不中断。提供专属 Slack/Teams 沟通通道。',
          },
        ]
      : [
          {
            step: '01',
            price: 'Free / 24h Turnaround',
            title: '1-Portal Free Proof of Concept',
            desc: 'Zero risk to start: send us 1 carrier URL and sample screen. Within 24 hours, we return a 60-second video demonstrating 1-click extraction and CRM push.',
          },
          {
            step: '02',
            price: '$1,000 One-time Setup',
            title: 'Custom Extension Build & CRM/TMS Connector',
            desc: 'Bespoke reverse-engineering of target carrier DOMs, field schema normalization, direct Salesforce/HubSpot/TMS webhook adapters, and simple 1-click team deployment.',
          },
          {
            step: '03',
            price: '$299 / Month per Portal',
            title: 'DOM Drift Monitoring & SLA Maintenance',
            desc: 'Whenever a carrier updates their portal HTML, we patch the extractor rules within 4 hours and push silent updates. Includes dedicated Slack/Teams priority support.',
          },
        ],

    bottomCtaTitle: isZh
      ? '准备好每月为团队省下 60+ 小时机械复制了吗？'
      : 'Ready to Eliminate 60+ Hours of Copy-Pasting Every Month?',
    bottomCtaSubtitle: isZh
      ? '发来一个最让操作员头疼的无 API 承运商门户，或预约一次 15 分钟的技术可行性沟通。我们将用确定性的工程为您的团队降本增效。'
      : 'Send us your most frustrating, prehistoric carrier portal URL or book a 15-min call. We’ll show you deterministic browser automation that pays for itself in week one.',
  };

  return (
    <>
      <SiteChrome />
      <main className="min-h-screen bg-[#f5f5f7] px-4 py-8 text-[#1d1d1f] md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumbs & Badge */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900"
            >
              <ArrowLeftIcon className="h-3.5 w-3.5" />
              <span>{t.back}</span>
            </Link>
            <span className="rounded-full border border-blue-200/60 bg-blue-50/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-700">
              {t.badge}
            </span>
          </div>

          {/* Hero Section */}
          <section className="mb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
              {t.eyebrow}
            </p>
            <h1
              className={`${lusitana.className} mb-5 text-3xl font-bold tracking-tight text-[#1d1d1f] md:text-5xl lg:text-6xl`}
            >
              {t.heroTitle}
            </h1>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-[#6e6e73] md:text-lg">
              {t.heroLede}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                  t.mailSubject,
                )}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                  t.mailSubject,
                )}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#1d1d1f] shadow-sm transition-all hover:bg-slate-50"
              >
                <span>{t.ctaSecondary}</span>
                <ArrowUpRightIcon className="h-4 w-4 text-slate-400" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {t.trustBadges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl border border-[#e5e5ea] bg-white p-3 shadow-sm"
                  >
                    <IconComponent className="h-4 w-4 flex-shrink-0 text-[#0071e3]" />
                    <span className="text-xs font-medium text-slate-700">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Interactive Live Demo */}
          <section className="mb-16">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Live Prototype
              </span>
              <h2
                className={`${lusitana.className} mt-1 text-2xl font-bold text-[#1d1d1f] md:text-3xl`}
              >
                {t.demoTitle}
              </h2>
              <p className="mt-1 text-sm text-[#6e6e73]">{t.demoSubtitle}</p>
            </div>

            <ExtractorDemo locale={locale} />
          </section>

          {/* Why Generic Automation Breaks (Comparison) */}
          <section className="mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Technical Architecture
            </span>
            <h2
              className={`${lusitana.className} mt-1 text-2xl font-bold text-[#1d1d1f] md:text-3xl`}
            >
              {t.diffSectionTitle}
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-[#6e6e73]">
              {t.diffSectionSubtitle}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {t.diffPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="mb-2 font-mono text-xs font-bold text-blue-600">
                    0{idx + 1}
                  </span>
                  <h3 className="mb-4 text-base font-bold text-[#1d1d1f]">
                    {point.title}
                  </h3>

                  {/* Problem */}
                  <div className="mb-4 rounded-xl border border-rose-100 bg-rose-50/50 p-3.5">
                    <div className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase text-rose-700">
                      <XMarkIcon className="h-3.5 w-3.5" />
                      <span>{isZh ? '传统方案痛点' : 'Legacy Limitation'}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-600">
                      {point.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mt-auto rounded-xl border border-emerald-100 bg-emerald-50/50 p-3.5">
                    <div className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase text-emerald-700">
                      <CheckIcon className="h-3.5 w-3.5" />
                      <span>
                        {isZh
                          ? 'PortalBridge 工程解法'
                          : 'PortalBridge Solution'}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-700">
                      {point.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hard Numbers: ROI Table */}
          <section className="mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Measurable Financial ROI
            </span>
            <h2
              className={`${lusitana.className} mt-1 text-2xl font-bold text-[#1d1d1f] md:text-3xl`}
            >
              {t.roiTitle}
            </h2>
            <p className="mt-1 text-sm text-[#6e6e73]">{t.roiSubtitle}</p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80">
                    <th className="p-4 font-bold text-slate-900">
                      {t.roiTableHeaders[0]}
                    </th>
                    <th className="p-4 font-bold text-slate-600">
                      {t.roiTableHeaders[1]}
                    </th>
                    <th className="p-4 font-bold text-[#0071e3]">
                      {t.roiTableHeaders[2]}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {t.roiRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}
                    >
                      <td className="p-4 font-semibold text-slate-900">
                        {row.metric}
                      </td>
                      <td className="p-4 text-slate-600">{row.traditional}</td>
                      <td className="p-4 font-bold text-[#0071e3]">
                        {row.medidraft}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Security Banner */}
          <section className="mb-16 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/50 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {t.complianceTitle}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 md:text-sm">
                  {t.complianceText}
                </p>
              </div>
            </div>
          </section>

          {/* 3-Step Engagement Model */}
          <section className="mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              How We Engage
            </span>
            <h2
              className={`${lusitana.className} mt-1 text-2xl font-bold text-[#1d1d1f] md:text-3xl`}
            >
              {t.roadmapTitle}
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {t.steps.map((s, idx) => (
                <div
                  key={idx}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-blue-600">
                      {s.step}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
                      {s.price}
                    </span>
                  </div>
                  <h3 className="mb-2 text-sm font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Conversion Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Pilot Scoping
                </span>
                <h2
                  className={`${lusitana.className} mt-1 text-2xl font-bold text-[#1d1d1f] md:text-3xl`}
                >
                  {t.bottomCtaTitle}
                </h2>
                <p className="mt-2 text-sm text-[#6e6e73]">
                  {t.bottomCtaSubtitle}
                </p>
              </div>

              <div className="flex w-full flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:w-auto">
                <a
                  href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                    t.mailSubject,
                  )}`}
                  className="flex items-center gap-2 rounded-xl bg-[#0071e3] px-6 py-3.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-blue-600"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  <span>hello@guoxuzhi.email</span>
                </a>
                <span className="mt-2.5 text-[11px] text-slate-500">
                  ⚡{' '}
                  {isZh
                    ? '24 小时内专人反馈 1 个门户录屏可行性方案'
                    : '24h response with 1-portal video proof-of-concept'}
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer page-grid">
        <span>© 2026 GXZ / PortalBridge Engineering</span>
        <Link className="text-link" href="/solutions">
          {t.back} <ArrowUpRightIcon aria-hidden="true" />
        </Link>
      </footer>
    </>
  );
}
