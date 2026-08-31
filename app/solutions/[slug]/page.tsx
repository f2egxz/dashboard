import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SiteChrome from '@/app/ui/site-chrome';
import { copy, getLocale, getSolutions } from '@/app/lib/i18n';

export function generateStaticParams() { return getSolutions('zh').map((solution) => ({ slug: solution.slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const locale = getLocale();
  const solution = getSolutions(locale).find((item) => item.slug === params.slug);
  return solution ? { title: solution.title, description: solution.summary, alternates: { canonical: `/${locale}/solutions/${params.slug}` } } : {};
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const locale = getLocale(); const text = copy[locale]; const solution = getSolutions(locale).find((item) => item.slug === params.slug);
  if (!solution) notFound();
  return <><SiteChrome /><main className="detail-main"><section className="page-grid solution-hero"><div><Link className="back-link" href="/solutions">{text.backSolutions}</Link><p className="eyebrow">{text.navSolutions} / {solution.title}</p><h1 className={`${lusitana.className} detail-title`}>{solution.title}</h1><p className="detail-lede">{solution.summary}</p></div><div className="problem-stamp"><span>{text.detailProblemLabel}</span><p>{solution.problem}</p></div></section><section className="page-grid solution-detail-grid"><div><h2 className={`${lusitana.className} detail-section-title`}>{text.detailWorth}</h2><p className="detail-copy">{solution.fit}</p><h2 className={`${lusitana.className} detail-section-title detail-section-spaced`}>{text.detailHow}</h2><div className="detail-list">{solution.approach.map((item) => <div key={item}><CheckIcon aria-hidden="true" /><span>{item}</span></div>)}</div></div><aside className="output-panel"><span className="eyebrow">{text.detailOutputEyebrow}</span><h2 className={`${lusitana.className}`}>{text.detailOutputTitle}</h2><ul>{solution.output.map((item) => <li key={item}>{item}</li>)}</ul><a className="button button-dark" href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(text.mailSubject)}`}><span>{text.detailCta}</span><ArrowUpRightIcon aria-hidden="true" /></a></aside></section></main><footer className="footer page-grid"><span>© 2026 GXZ / Workflow Studio</span><Link className="text-link" href="/#contact">{text.home} <ArrowUpRightIcon aria-hidden="true" /></Link></footer></>;
}
