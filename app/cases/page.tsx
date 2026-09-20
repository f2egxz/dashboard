import React from 'react';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  BuildingOffice2Icon,
  CommandLineIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  EnvelopeIcon,
  DocumentMagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SiteChrome from '@/app/ui/site-chrome';
import { copy, getLocale } from '@/app/lib/i18n';
import { getCaseStudies } from '@/app/lib/cases';

export async function generateMetadata() {
  const locale = getLocale();
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? '商业实战交付手记与 ROI 战报 | GXZ Workflow Studio'
      : 'Engineering Field Notes & Commercial ROI Case Studies | GXZ Workflow Studio',
    description: isZh
      ? '真实商业环境中的工程交付战报。记录我们如何攻克无 API 货代老系统、代理商白标研发、Zapier 凌晨容灾与医学文献溯源。'
      : 'De-identified commercial case studies detailing how we solved non-API legacy portals, white-label engineering, 2 AM Zapier DLQs, and medical citation diffing.',
    alternates: { canonical: `/${locale}/cases` },
  };
}

export default function CasesPage() {
  const locale = getLocale();
  const text = copy[locale];
  const isZh = locale === 'zh';
  const caseStudies = getCaseStudies(locale);

  const t = {
    back: isZh ? '返回首页' : 'Back to Home',
    eyebrow: isZh
      ? '工程交付实战手记 • FIELD NOTES & DE-RISKED CASE STUDIES'
      : 'ENGINEERING FIELD NOTES & DE-RISKED CASE STUDIES',
    pageTitle: isZh
      ? '真实环境中的工程交付，经得起推敲的商业回报'
      : 'Real-World Engineering Field Notes, Quantified Commercial ROI',
    pageLede: isZh
      ? '所有案例均严格遵循商业保密协议（NDA）进行技术细节脱敏。记录我们如何深入具体垂直行业，攻克无 API 老旧系统、代码白标协作、无代码静默容灾与医学文献溯源等棘手卡点，帮助企业消除高额试错损耗，释放核心业务生产力。'
      : 'All field notes are de-identified under strict mutual NDAs. These case studies document how we engineer pragmatic solutions for legacy portals, white-label agency partnerships, no-code disaster recovery, and medical compliance diffing—delivering high-margin economic certainty.',

    macroMetrics: [
      {
        value: '100%',
        label: isZh
          ? '代码与知识产权完全归属客户'
          : 'Client Code & IP Ownership',
      },
      {
        value: '0 丢单',
        label: isZh
          ? '生产级流水线容灾自愈保障'
          : 'Silent Pipeline Failure Rate',
      },
      {
        value: '65%+',
        label: isZh
          ? '代理商白标技术交付留存毛利'
          : 'Avg. Retained Gross Margin',
      },
      {
        value: '10x+',
        label: isZh ? '关键手工业务流程耗时提速' : 'Operational Velocity Gain',
      },
    ],

    challengeLabel: isZh ? '面临挑战与隐形损耗' : 'The Bleeding-Neck Challenge',
    solutionLabel: isZh
      ? '工程解法与落地架构'
      : 'Engineering Architecture & Intervention',
    lossLabel: isZh ? '直接财务损耗' : 'Direct Financial Loss',
    actionsLabel: isZh ? '关键实施动作' : 'Key Engineering Actions',
    resultsLabel: isZh ? '交付成效与量化 ROI' : 'Measurable Business ROI',
    techLabel: isZh ? '涉及技术栈' : 'Technology Stack',
    solutionCtaText: isZh
      ? '体验对应实机交互原型'
      : 'Explore Interactive Prototype',
    clientProfileLabel: isZh ? '客户背景画像' : 'Client Profile',

    bottomTitle: isZh
      ? '您的业务中是否也存在看似“无法自动化”的低效泥潭？'
      : 'Does your team face an operational bottleneck that feels impossible to automate?',
    bottomSubtitle: isZh
      ? '把背景、现有流程和最让团队头疼的环节告诉我们。我们将在 24 小时内为您拆解可行性，并提供一份免费的架构诊断报告。'
      : 'Tell us your workflow pain point. We will analyze the failure modes and deliver an actionable technical feasibility breakdown within 24 hours.',
    bottomCtaPrimary: isZh
      ? '预约 15 分钟技术评估沟通'
      : 'Schedule a 15-Min Scoping Call',
    bottomCtaSecondary: isZh
      ? '提交 1 个工作流免费评估'
      : 'Submit 1 Workflow for Free Review',
    bottomMailSubject: isZh
      ? '咨询工作流工程改造合作'
      : '[Workflow Studio] Inquire Engineering Delivery',
  };

  return (
    <>
      <SiteChrome />
      <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
        {/* Navigation Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors hover:text-[#0071e3]"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            {t.back}
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#0071e3]">
              {t.eyebrow}
            </div>
            <h1
              className={`mt-4 text-3xl font-extrabold tracking-tight text-[#1d1d1f] sm:text-5xl sm:leading-tight ${lusitana.className}`}
            >
              {t.pageTitle}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.pageLede}
            </p>

            {/* Macro Stats Bar */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {t.macroMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="font-mono text-2xl font-black tracking-tight text-[#0071e3] sm:text-3xl">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs font-medium leading-snug text-slate-600">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 DETAILED CASE STUDY CARDS */}
        <section className="mx-auto max-w-7xl space-y-12 px-4 py-8 pb-20 sm:px-6 lg:px-8">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all hover:border-slate-300 sm:p-10"
            >
              {/* Header: Tag + Solution Link + Case Index */}
              <div className="flex flex-col justify-between gap-3 border-b border-slate-100 pb-6 md:flex-row md:items-center">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full border border-blue-200/60 bg-blue-50 px-3 py-1 text-xs font-bold text-[#0071e3]">
                    {study.tag}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    CASE NOTE #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <Link
                  href={`/solutions/${study.solutionSlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
                >
                  <span>
                    {t.solutionCtaText} ({study.solutionTitle})
                  </span>
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Title & One-line Summary */}
              <div className="mt-6">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {study.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {study.summary}
                </p>
              </div>

              {/* Client Profile Pill Box */}
              <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <BuildingOffice2Icon className="h-4 w-4 text-[#0071e3]" />
                  <span>{t.clientProfileLabel}</span>
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs text-slate-700 sm:grid-cols-3">
                  <div>
                    <span className="font-medium text-slate-400">
                      {isZh ? '客户主体：' : 'Client: '}
                    </span>
                    <strong className="text-slate-800">
                      {study.client.name}
                    </strong>
                  </div>
                  <div>
                    <span className="font-medium text-slate-400">
                      {isZh ? '团队与地域：' : 'Location & Desk: '}
                    </span>
                    <span>
                      {study.client.location} ({study.client.teamSize})
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-slate-400">
                      {isZh ? '业务负荷：' : 'Workload: '}
                    </span>
                    <span>{study.client.summary}</span>
                  </div>
                </div>
              </div>

              {/* Problem vs Solution 2-Column Split */}
              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Left Column: Challenge */}
                <div className="flex flex-col justify-between rounded-xl border border-rose-100 bg-rose-50/40 p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
                      <ClockIcon className="h-4 w-4 text-rose-600" />
                      <span>{t.challengeLabel}</span>
                    </div>
                    <h3 className="mt-2 text-base font-bold text-slate-900">
                      {study.challenge.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-700">
                      {study.challenge.desc}
                    </p>
                  </div>
                  <div className="mt-5 rounded-lg border border-rose-200 bg-white/90 p-3.5 text-xs text-rose-900">
                    <span className="font-bold text-rose-700">
                      ⚠️ {t.lossLabel}：
                    </span>
                    <span className="ml-1 font-medium text-slate-800">
                      {study.challenge.financialLoss}
                    </span>
                  </div>
                </div>

                {/* Right Column: Engineering Solution */}
                <div className="flex flex-col justify-between rounded-xl border border-blue-100 bg-blue-50/40 p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0071e3]">
                      <CommandLineIcon className="h-4 w-4 text-[#0071e3]" />
                      <span>{t.solutionLabel}</span>
                    </div>
                    <h3 className="mt-2 text-base font-bold text-slate-900">
                      {study.solution.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-700">
                      {study.solution.desc}
                    </p>

                    <div className="mt-4 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {t.actionsLabel}
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {study.solution.keyActions.map((action, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#0071e3]" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap items-center gap-1.5 border-t border-blue-100/80 pt-3">
                    <span className="mr-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {t.techLabel}:
                    </span>
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-slate-200/60 bg-white/90 px-2 py-0.5 font-mono text-[10px] text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantified Business ROI & Results Bar */}
              <div className="mt-8 rounded-xl border border-emerald-100 bg-emerald-50/30 p-6">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <ArrowTrendingUpIcon className="h-4 w-4 text-emerald-600" />
                  <span>{t.resultsLabel}</span>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                  {/* Primary highlight */}
                  <div className="rounded-xl border border-emerald-200 bg-white p-4 shadow-sm">
                    <div className="text-xs font-semibold text-emerald-700">
                      {study.results.primaryLabel}
                    </div>
                    <div className="mt-1 font-mono text-2xl font-black text-slate-900">
                      {study.results.primaryMetric}
                    </div>
                  </div>

                  {/* 3 Secondary metrics */}
                  {study.results.secondaryMetrics.map((sec, sIdx) => (
                    <div
                      key={sIdx}
                      className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
                    >
                      <div className="text-xs font-semibold text-slate-500">
                        {sec.label}
                      </div>
                      <div className="mt-1 font-mono text-lg font-bold text-slate-800">
                        {sec.value}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs font-medium text-slate-600">
                  {study.results.summary}
                </p>
              </div>

              {/* Testimonial Quote */}
              <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50/80 p-5 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <ChatBubbleLeftRightIcon className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                  <div>
                    <p className="font-serif text-sm italic leading-relaxed text-slate-800">
                      “{study.testimonial.quote}”
                    </p>
                    <div className="mt-2 font-semibold text-slate-900">
                      {study.testimonial.author} •{' '}
                      <span className="font-normal text-slate-500">
                        {study.testimonial.role} ({study.testimonial.location})
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 flex justify-end">
                <Link
                  href={`/solutions/${study.solutionSlug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-slate-800"
                >
                  <span>
                    {isZh
                      ? `深入查看 ${study.solutionTitle} 完整解决方案与交互模拟`
                      : `View Full ${study.solutionTitle} Solution & Interactive Demo`}
                  </span>
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* BOTTOM STRONG CTA */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-center text-white sm:p-12">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
                {t.bottomTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {t.bottomSubtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                    t.bottomMailSubject,
                  )}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071e3] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed]"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  {t.bottomCtaPrimary}
                </a>
                <a
                  href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                    isZh
                      ? '提交 1 个工作流申请免费可行性评估'
                      : '[Workflow Studio] Request Free Feasibility Audit',
                  )}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-8 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-700"
                >
                  <DocumentMagnifyingGlassIcon className="h-4 w-4 text-slate-400" />
                  {t.bottomCtaSecondary}
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
