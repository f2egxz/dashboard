import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SiteChrome from '@/app/ui/site-chrome';
import { getLocale, copy, getSolutions } from '@/app/lib/i18n';

export async function generateMetadata() { const locale = getLocale(); const text = copy[locale]; return { title: text.navSolutions, description: text.solutionsIntroBody, alternates: { canonical: `/${locale}/solutions` } }; }

export default function SolutionsPage() {
  const text = copy[getLocale()]; const solutions = getSolutions(getLocale());
  return <><SiteChrome /><main className="detail-main page-grid"><div className="detail-intro"><p className="eyebrow">{text.solutionsIntroEyebrow}</p><h1 className={`${lusitana.className} detail-title`}>{text.solutionsIntroTitle}</h1><p className="detail-lede">{text.solutionsIntroBody}</p></div><div className="solution-list solution-list-detail">{solutions.map((solution, index) => <Link className="solution-row" href={`/solutions/${solution.slug}`} key={solution.slug}><span className="solution-number">0{index + 1}</span><div><h2>{solution.title}</h2><p>{solution.summary}</p></div><ArrowUpRightIcon className="row-arrow" aria-hidden="true" /></Link>)}</div></main><footer className="footer page-grid"><span>© 2026 GXZ / Workflow Studio</span><Link className="text-link" href="/#contact">{text.heroCta} <ArrowUpRightIcon aria-hidden="true" /></Link></footer></>;
}
