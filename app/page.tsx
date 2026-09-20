import Link from 'next/link';
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  CheckIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SiteChrome from '@/app/ui/site-chrome';
import { getLocale, copy, getSolutions } from '@/app/lib/i18n';
import { getCaseStudies } from '@/app/lib/cases';

export default function Page() {
  const text = copy[getLocale()];
  const solutions = getSolutions(getLocale());
  const caseStudies = getCaseStudies(getLocale());
  const workflowRows = text.flow.map((row, index) => ({
    ...row,
    tone: ['ink', 'orange', 'blue'][index],
  }));
  return (
    <>
      <SiteChrome />
      <main>
        <section className="hero-shell page-grid">
          <div className="hero-copy">
            <p className="eyebrow">{text.heroEyebrow}</p>
            <h1 className={`${lusitana.className} hero-title`}>
              {text.heroTitle}
            </h1>
            <p className="hero-lede">{text.heroLede}</p>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                  text.mailSubject,
                )}`}
              >
                {text.heroCta} <ArrowUpRightIcon aria-hidden="true" />
              </a>
              <Link className="text-link" href="/solutions">
                {text.heroBrowse} <ArrowDownIcon aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-note">
              <span className="status-dot" aria-hidden="true" />
              {text.heroNote}
            </div>
          </div>
          <div className="flow-board" aria-label={text.flowAria}>
            <div className="flow-board-top">
              <span>{text.flowTitle}</span>
              <span className="flow-id">{text.flowId}</span>
            </div>
            <div className="flow-track">
              {workflowRows.map((row, index) => (
                <div className="flow-row" key={row.label}>
                  <div className={`flow-node flow-node-${row.tone}`}>
                    <span className="flow-index">0{index + 1}</span>
                    <span className="flow-label">{row.label}</span>
                    <strong>{row.value}</strong>
                  </div>
                  {index < workflowRows.length - 1 ? (
                    <div className="flow-line" aria-hidden="true" />
                  ) : null}
                </div>
              ))}
            </div>
            <div className="flow-board-foot">
              <span>{text.flowFootA}</span>
              <span>{text.flowFootB}</span>
            </div>
          </div>
        </section>

        <section className="statement-band">
          <div className="page-grid statement-grid">
            <h2 className={`${lusitana.className} section-title`}>
              {text.statementTitle}
            </h2>
            <div className="statement-body">
              <p>{text.statementBody}</p>
              <div className="check-list">
                {text.checks.map((item) => (
                  <span key={item}>
                    <CheckIcon aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section page-grid" id="solutions">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">{text.solutionsEyebrow}</p>
              <h2 className={`${lusitana.className} section-title`}>
                {text.solutionsTitle}
              </h2>
            </div>
            <Link className="text-link" href="/solutions">
              {text.allSolutions} <ArrowUpRightIcon aria-hidden="true" />
            </Link>
          </div>
          <div className="solution-list">
            {solutions.map((solution, index) => {
              const isInteractive =
                solution.slug === 'specialized-doc-diff' ||
                solution.slug === 'legacy-system-extractor' ||
                solution.slug === 'agency-whitelabel-dev' ||
                solution.slug === 'automation-rescue';
              return (
                <Link
                  className="solution-row group"
                  href={`/solutions/${solution.slug}`}
                  key={solution.slug}
                >
                  <span className="solution-number">0{index + 1}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="transition-colors group-hover:text-[#0071e3]">
                        {solution.title}
                      </h3>
                      {isInteractive && (
                        <span className="inline-flex items-center rounded-full border border-blue-200/60 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-[#0071e3]">
                          {getLocale() === 'zh'
                            ? '可运行实机演示'
                            : 'Interactive Prototype'}
                        </span>
                      )}
                    </div>
                    <p>{solution.summary}</p>
                  </div>
                  <ArrowUpRightIcon className="row-arrow" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </section>

        <section className="section section-dark" id="process">
          <div className="page-grid process-grid">
            <div>
              <p className="eyebrow eyebrow-light">{text.processEyebrow}</p>
              <h2
                className={`${lusitana.className} section-title section-title-light`}
              >
                {text.processTitle}
              </h2>
            </div>
            <div className="process-steps">
              {text.process.map((step, index) => (
                <div className="process-step" key={step.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-grid" id="cases">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">{text.casesEyebrow}</p>
              <h2 className={`${lusitana.className} section-title`}>
                {text.casesTitle}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="quiet-label">{text.synthetic}</span>
              <Link className="text-link hidden sm:inline-flex" href="/cases">
                {getLocale() === 'zh'
                  ? '查看全部 4 篇手记'
                  : 'View all 4 Field Notes'}{' '}
                <ArrowUpRightIcon aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-blue-200/60 bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-[#0071e3]">
                      {study.tag}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      {study.client.location}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#0071e3]">
                    {study.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                    {study.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <div className="flex items-baseline justify-between">
                    <div className="text-xs font-medium text-slate-500">
                      {study.results.primaryLabel}
                    </div>
                    <div className="font-mono text-xl font-extrabold text-[#0071e3]">
                      {study.results.primaryMetric}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs">
                    <Link
                      href={`/solutions/${study.solutionSlug}`}
                      className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-[#0071e3]"
                    >
                      <span>
                        {getLocale() === 'zh' ? '交互演示' : 'Prototype'}
                      </span>
                      <ArrowUpRightIcon className="h-3 w-3" />
                    </Link>
                    <Link
                      href="/cases"
                      className="inline-flex items-center gap-1 font-bold text-[#0071e3] hover:underline"
                    >
                      <span>
                        {getLocale() === 'zh' ? '阅读战报' : 'Read Field Note'}
                      </span>
                      <ArrowUpRightIcon className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link className="button button-outline" href="/cases">
              {getLocale() === 'zh'
                ? '查看全部 4 篇交付手记'
                : 'View All 4 Field Notes'}{' '}
              <ArrowUpRightIcon aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div className="page-grid contact-grid">
            <div>
              <p className="eyebrow">{text.nextEyebrow}</p>
              <h2 className={`${lusitana.className} section-title`}>
                {text.nextTitle}
              </h2>
            </div>
            <div className="contact-action">
              <p>{text.nextBody}</p>
              <a
                className="button button-dark"
                href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                  text.mailSubject,
                )}`}
              >
                <EnvelopeIcon aria-hidden="true" /> hello@guoxuzhi.email
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer page-grid">
        <span>© 2026 GXZ / Workflow Studio</span>
        <span>{text.footer}</span>
      </footer>
    </>
  );
}
