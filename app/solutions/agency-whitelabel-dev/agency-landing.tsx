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
  EyeSlashIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SiteChrome from '@/app/ui/site-chrome';
import AgencyDemo from './agency-demo';

interface AgencyLandingProps {
  locale: string;
}

export default function AgencyLanding({ locale }: AgencyLandingProps) {
  const isZh = locale === 'zh';

  const t = {
    back: isZh ? '返回所有方案' : 'Back to Studio Solutions',
    badge: isZh
      ? '垂直方案深度规格 • AGENCYGHOST'
      : 'VERTICAL SOLUTION SPECIFICATION • AGENCYGHOST',
    eyebrow: isZh
      ? '面向欧美设计、SEO 与数字营销代理商（Agencies）的隐形技术工程后盾'
      : 'Silent White-Label Engineering Backbone for US Design & Marketing Agencies',
    heroTitle: isZh
      ? '无需雇佣年薪 $160,000 的全职研发，为您的代理商解锁高毛利技术交付'
      : 'Scale Your Agency’s Engineering Revenue Without Hiring a $160k In-House Developer',
    heroLede: isZh
      ? '专为欧美精品设计、SEO 与营销代理商打造的隐形技术工程团队。严格遵循 NDA 与白标协作规范，将 Figma 设计稿与复杂 API 需求迅速化为生产级 Next.js 应用——完全以您的品牌名义交付，为您留存 65%+ 超额利润空间。'
      : 'The silent white-label engineering partner behind boutique US design & marketing agencies. We turn Figma designs and complex API requirements into production Next.js apps under your brand and strict mutual NDA — delivered in days, capturing 65%+ gross margins for your agency.',
    ctaPrimary: isZh
      ? '预约 15 分钟白标合作沟通'
      : 'Schedule a 15-Min Scoping Call',
    ctaSecondary: isZh
      ? '发送 1 个项目 Figma 免费技术评估'
      : 'Send 1 Figma File for Free Tech Review',
    mailSubject: isZh
      ? '咨询 AgencyGhost 代理商白标技术外包合作'
      : '[AgencyGhost Inquiry] White-Label Engineering Partnership',

    trustBadges: [
      {
        icon: EyeSlashIcon,
        text: isZh
          ? '100% 严格白标与双向保密协议 (NDA)'
          : '100% Strict White-Label & Mutual NDA',
      },
      {
        icon: SparklesIcon,
        text: isZh
          ? '65%+ 代理商超额留存毛利率'
          : '65%+ Agency Gross Profit Retained',
      },
      {
        icon: ClockIcon,
        text: isZh
          ? '24 小时即插即用 • 4 小时异步时区重合'
          : 'Instant 24h Onboarding • 4h Timezone Overlap',
      },
      {
        icon: DocumentCheckIcon,
        text: isZh
          ? '代码与知识产权 100% 归属贵司'
          : '100% Client Code & IP Ownership',
      },
    ],

    demoTitle: isZh
      ? '业务算账与管线模拟：测算您的代理商超额净收益'
      : 'Interactive Simulation: Agency Margin Arbitrage & Workflow',
    demoSubtitle: isZh
      ? '调节下方的项目数量与报价时薪，查看相较于自建全职研发能为您省下多少固定支出，并了解隐形白标的完整交付闭环：'
      : 'Adjust project count and billing rate below to observe net margin arbitrage vs. hiring in-house, and explore our silent delivery pipeline:',

    diffSectionTitle: isZh
      ? '为什么传统开发途径让代理商进退两难？'
      : 'Why Standard Hiring & Freelancers Break Down for Agencies',
    diffSectionSubtitle: isZh
      ? '代理商的订单往往呈现周期性波动（Lumpy Revenue），既养不起昂贵的本地团队，又承受不起离岸散工烂尾的口碑风险。'
      : 'Agency client volume is lumpy. Hiring full-time creates immense fixed payroll stress, while freelance platforms risk shoddy code and missed client deadlines.',

    diffPoints: [
      {
        title: isZh
          ? '为什么不雇佣美国本地全职研发？'
          : 'Why In-House US Developers Bleed Margins',
        problem: isZh
          ? '高级工程师年薪 $160,000+ 加上福利与税收，每月固定死成本超 $15,000。在项目淡季，昂贵的研发资源闲置直接吞噬代理商一整年的利润。'
          : 'Senior US devs cost $160k+ plus benefits ($15k+/mo fixed overhead). In slow sales quarters, idle payroll incinerates agency cash reserves.',
        solution: isZh
          ? 'AgencyGhost 采用按月车道（Retainer）或按项目弹性外包，随接单量即插即用，彻底消除固定薪酬压力。'
          : 'AgencyGhost provides on-demand engineering lanes or fixed sprints. Scale capacity up or pause when pipelines slow down — zero payroll drag.',
      },
      {
        title: isZh
          ? '为什么在 Upwork 找散工是信誉豪赌？'
          : 'Why Upwork / Offshore Roulette Destroys Trust',
        problem: isZh
          ? '自由职业者经常在临近上线时失联、代码充斥技术债务，更危险的是擅自在个人作品集泄露客户信息，严重违反 NDA 损害代理商声誉。'
          : 'Freelancers ghost before launch, deliver spaghetti code, and frequently leak client confidential projects on public portfolios, violating NDAs.',
        solution: isZh
          ? '我们与贵司签署具有法律效力的双向保密协议，所有提交均使用贵司 GitHub 组织账号，严禁任何对外宣发与私自联系客户。'
          : 'We sign strict mutual NDAs and non-competes. All git commits belong to your GitHub org. We remain 100% invisible behind your agency brand.',
      },
      {
        title: isZh
          ? '为什么无代码（Webflow）无法支撑复杂需求？'
          : 'Why No-Code (Webflow/Framer) Hits a Hard Ceiling',
        problem: isZh
          ? '当高客单客户提出定制客户门户（Client Portal）、多权限会员体系、自研算法计算器或复杂 CRM 深度同步时，无代码工具束手无策。'
          : 'When clients demand custom authenticated portals, multi-tier permissions, dynamic calculations, or deep ERP/CRM webhooks, no-code falls flat.',
        solution: isZh
          ? '提供生产级现代全栈工程（Next.js 14、TypeScript、Tailwind、Postgres、API Webhook），助您的代理商自信拿下大额技术预算。'
          : 'Full production-grade engineering (Next.js 14, TypeScript, Tailwind, Node, Postgres). Enable your agency to confidently pitch $20k-$50k builds.',
      },
    ],

    roiTitle: isZh
      ? '直接算账：代理商技术交付经济学'
      : 'Cold Hard Numbers: Agency Economics & Margin Arbitrage',
    roiSubtitle: isZh
      ? '把昂贵且充满不确定性的工程交付，变成确定、稳定且毛利高达 65%+ 的代理商核心利润中心。'
      : 'Transform engineering from a risky cost center into your agency’s most lucrative 65%+ gross margin profit engine.',

    roiTableHeaders: isZh
      ? [
          '对比维度',
          '自建本地全职研发',
          'Upwork / 离岸散工拼盘',
          'AgencyGhost 白标专属工程',
        ]
      : [
          'Metric',
          'In-House Senior US Hire',
          'Upwork / Offshore Freelancers',
          'AgencyGhost White-Label Engine',
        ],

    roiRows: isZh
      ? [
          {
            metric: '月度固定财务支出',
            traditional: '$14,000 ~ $16,000 / 月 (固定工资+社保)',
            freelance: '不可控 ($4k~$8k 隐性返工与沟通)',
            agencyghost: '固定 $2,800 / 月 (或单项目 $1,500 封顶)',
          },
          {
            metric: '对外按 $140/hr 报价留存毛利',
            traditional: '仅约 20% ~ 30% (高额管理折损)',
            freelance: '无法预测 (经常因工期拖延倒贴)',
            agencyghost: '稳定 65% ~ 75% 纯留存净毛利',
          },
          {
            metric: '招聘与团队磨合周期',
            traditional: '招聘面试与试用耗时 6 ~ 8 周',
            freelance: '每次新项目都要重新筛选试错',
            agencyghost: '24 小时即插即用，立即可接入项目',
          },
          {
            metric: '代码质量与交付确定性',
            traditional: '取决于个人，但存在离职断档风险',
            freelance: '缺乏工程规范，高概率需要重构',
            agencyghost: '生产级 TypeScript/Next.js 零代码债务',
          },
          {
            metric: '业务淡季防御力',
            traditional: '极差 (淡季依然必须按月足额发薪)',
            freelance: '需不断重复沟通与信任建立',
            agencyghost: '按需随业务量灵活扩容或无痛暂停',
          },
        ]
      : [
          {
            metric: 'Monthly Fixed Overhead',
            traditional: '$14,000 – $16,000 / mo (payroll + tax)',
            freelance: 'Unpredictable ($4k–$8k with rework drag)',
            agencyghost: 'Flat $2,800 / mo (or $1,500 fixed sprint)',
          },
          {
            metric: 'Gross Margin on $140/hr Bill Rate',
            traditional: '20% – 30% after internal overhead',
            freelance: 'Unpredictable (burned by scope creep)',
            agencyghost: 'Predictable 65% – 75% Gross Margin',
          },
          {
            metric: 'Onboarding & Ramp-Up Time',
            traditional: '6 – 8 weeks hiring & recruiting cycle',
            freelance: 'Constant trial-and-error cycle',
            agencyghost: 'Zero ramp-up; ready in 24 hours',
          },
          {
            metric: 'Code Architecture & QA Standards',
            traditional: 'Dependent on single dev; key-person risk',
            freelance: 'Fragile junior code debt needing rewrite',
            agencyghost: 'Production TypeScript/Next.js 14 baseline',
          },
          {
            metric: 'Off-Peak Business Resilience',
            traditional: 'High risk (payroll burn during slow months)',
            freelance: 'Repeated onboarding friction',
            agencyghost: 'Scale lanes up or pause with zero friction',
          },
        ],

    complianceTitle: isZh
      ? '铁壁承诺：100% 隐形白标与知识产权完全转让'
      : 'Ironclad Guarantee: 100% White-Label & Full IP Assignment',
    complianceText: isZh
      ? '我们严格遵守 B2B 代理商合作操守：1. 签署受法律保护的双向保密协议（Mutual NDA）与不竞争条款；2. 绝不以任何形式直接接触贵司终端客户；3. 所有代码与 PR 均提交至贵司自己的 GitHub/GitLab 仓库；4. 交付后所有知识产权 100% 无条件归属于贵司。我们是您背后最安心的隐形底牌。'
      : 'We honor strict agency ethics: 1. Legally binding Mutual NDA and non-compete before touching any spec; 2. Strict zero direct client outreach without your explicit written approval; 3. All commits pushed directly under your team’s GitHub/GitLab organization; 4. 100% IP rights transferred to your agency upon delivery. We stay invisible behind your brand.',

    roadmapTitle: isZh
      ? '清晰轻量的 3 步白标合作模式'
      : 'Transparent 3-Step Engagement Model',

    steps: isZh
      ? [
          {
            step: '01',
            price: '免费 / 24小时内交付',
            title: '1 个项目免费架构评估与工期拆解 (Architecture Review)',
            desc: '零风险验证：发送 1 个客户的 Figma 设计稿或需求清单。我们将在 24 小时内免费为您拆解出精准的技术选型、工期排期与固定报价，助您胸有成竹地向客户做提案。',
          },
          {
            step: '02',
            price: '$1,500 - $2,500 固定报价',
            title: '单项目试跑 Pilot (Single Build Sprint)',
            desc: '先以一个轻量定制应用或客户门户试跑，检验我们的代码质量、时区协同响应与交付速度。里程碑式验收付款，满意后再确立长期合作。',
          },
          {
            step: '03',
            price: '$2,800 / 月 专属工程车道',
            title: '月度专属高级全栈车道 (Dedicated Engineering Retainer)',
            desc: '为您的代理商锁定一条专属的高级全栈开发通道，每月包含 50 小时深度交付与即时技术支持。直接拉入您的 Slack / Linear 工作群，随叫随到。',
          },
        ]
      : [
          {
            step: '01',
            price: 'Free / 24h Turnaround',
            title: 'Free 1-Build Architecture Review',
            desc: 'Zero risk: send us 1 client Figma link or project scope. Within 24 hours, we return a detailed technical specification, milestone roadmap, and fixed-price estimate for your client proposal.',
          },
          {
            step: '02',
            price: '$1,500 – $2,500 Fixed Price',
            title: 'Single Project Pilot Sprint',
            desc: 'Test our code quality, communication, and turnaround speed on a single custom build or client portal. Pay upon milestone acceptance before committing to a retainer.',
          },
          {
            step: '03',
            price: '$2,800 / Month Dedicated Lane',
            title: 'Monthly Dedicated Engineering Retainer',
            desc: 'Lock in a dedicated senior full-stack engineering lane (50 hrs/mo) embedded directly in your agency’s Slack/Linear. On-demand delivery with 4-hour timezone overlap SLA.',
          },
        ],

    bottomCtaTitle: isZh
      ? '本月有需要交付的客户 Web 或系统需求吗？'
      : 'Got a Client Web Build or Portal Request to Deliver This Month?',
    bottomCtaSubtitle: isZh
      ? '发来一份客户的 Figma 设计稿或需求痛点，或预约一次 15 分钟的技术沟通。让我们成为您代理商最强劲的隐形利润引擎。'
      : 'Send over a Figma link or client scope doc. We’ll return a production-grade execution plan and fixed-price breakdown within 24 hours.',
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

          {/* Interactive Live Demo: Calculator & Pipeline */}
          <section className="mb-16">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Interactive Simulator
              </span>
              <h2
                className={`${lusitana.className} mt-1 text-2xl font-bold text-[#1d1d1f] md:text-3xl`}
              >
                {t.demoTitle}
              </h2>
              <p className="mt-1 text-sm text-[#6e6e73]">{t.demoSubtitle}</p>
            </div>

            <AgencyDemo locale={locale} />
          </section>

          {/* Why Generic Hiring & Freelancers Break Down */}
          <section className="mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Agency Bottleneck Solutions
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
                      <span>{isZh ? '传统模式痛点' : 'Industry Trap'}</span>
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
                        {isZh ? 'AgencyGhost 白标解法' : 'AgencyGhost Solution'}
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
              Agency Economics
            </span>
            <h2
              className={`${lusitana.className} mt-1 text-2xl font-bold text-[#1d1d1f] md:text-3xl`}
            >
              {t.roiTitle}
            </h2>
            <p className="mt-1 text-sm text-[#6e6e73]">{t.roiSubtitle}</p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80">
                    <th className="p-4 font-bold text-slate-900">
                      {t.roiTableHeaders[0]}
                    </th>
                    <th className="p-4 font-bold text-slate-600">
                      {t.roiTableHeaders[1]}
                    </th>
                    <th className="p-4 font-bold text-slate-600">
                      {t.roiTableHeaders[2]}
                    </th>
                    <th className="p-4 font-bold text-[#0071e3]">
                      {t.roiTableHeaders[3]}
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
                      <td className="p-4 text-slate-500">{row.freelance}</td>
                      <td className="p-4 font-bold text-[#0071e3]">
                        {row.agencyghost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Security & White-Label Guarantee Banner */}
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
              Partnership Roadmap
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
                  White-Label Partnership
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
                    ? '24 小时内专人反馈 Figma 免费架构评估与工期报价'
                    : '24h turnaround on free Figma architecture review & pricing'}
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer page-grid">
        <span>© 2026 GXZ / AgencyGhost Engineering</span>
        <Link className="text-link" href="/solutions">
          {t.back} <ArrowUpRightIcon aria-hidden="true" />
        </Link>
      </footer>
    </>
  );
}
