import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SiteChrome from '@/app/ui/site-chrome';
import { getLocale, copy, getSolutions } from '@/app/lib/i18n';

export async function generateMetadata() {
  const locale = getLocale();
  const text = copy[locale];
  return {
    title: text.navSolutions,
    description: text.solutionsIntroBody,
    alternates: { canonical: `/${locale}/solutions` },
  };
}

export default function SolutionsPage() {
  const text = copy[getLocale()];
  const solutions = getSolutions(getLocale());
  return (
    <>
      <SiteChrome />
      <main className="detail-main page-grid">
        <div className="detail-intro">
          <p className="eyebrow">{text.solutionsIntroEyebrow}</p>
          <h1 className={`${lusitana.className} detail-title`}>
            {text.solutionsIntroTitle}
          </h1>
          <p className="detail-lede">{text.solutionsIntroBody}</p>
        </div>
        <div className="solution-list solution-list-detail">
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
                    <h2 className="transition-colors group-hover:text-[#0071e3]">
                      {solution.title}
                    </h2>
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
      </main>
      <footer className="footer page-grid">
        <span>© 2026 GXZ / Workflow Studio</span>
        <Link className="text-link" href="/#contact">
          {text.heroCta} <ArrowUpRightIcon aria-hidden="true" />
        </Link>
      </footer>
    </>
  );
}
