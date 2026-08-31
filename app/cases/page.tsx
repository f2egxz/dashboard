import Link from 'next/link';
import { ArrowUpRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SiteChrome from '@/app/ui/site-chrome';
import { copy, getLocale } from '@/app/lib/i18n';

export async function generateMetadata() { const locale = getLocale(); const text = copy[locale]; return { title: text.navCases, description: text.demoIntro, alternates: { canonical: `/${locale}/cases` } }; }

export default function CasesPage() {
  const text = copy[getLocale()];
  return <><SiteChrome /><main className="detail-main page-grid"><div className="detail-intro"><p className="eyebrow">{text.casesEyebrow} / CASES</p><h1 className={`${lusitana.className} detail-title`}>{text.casesTitle}</h1><p className="detail-lede">{text.demoIntro}</p></div><section className="case-detail"><div className="case-detail-head"><span className="case-tag">{text.caseTag}</span><span className="quiet-label">{text.synthetic}</span></div><h2 className={`${lusitana.className}`}>{text.caseTitle}</h2><div className="case-flow-grid"><div><span>{text.caseInput}</span><strong>{text.caseInputValue}</strong></div><div><span>{text.caseProcess}</span><strong>{text.caseProcessValue}</strong></div><div><span>{text.caseOutput}</span><strong>{text.caseOutputValue}</strong></div></div><div className="case-demo-log">{text.caseRows.map((row) => <div key={row.time}><span>{row.time}</span><strong>{row.title}</strong><em className={row.time === '10:31' ? 'case-alert' : ''}>{row.meta}</em></div>)}<div className="case-result"><span>OUTPUT</span><strong>{text.output}</strong><CheckIcon aria-hidden="true" /></div></div></section><div className="detail-cta"><p>{text.nextBody}</p><a className="button button-dark" href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(text.mailSubject)}`}>{text.demoCta} <ArrowUpRightIcon aria-hidden="true" /></a></div></main><footer className="footer page-grid"><span>© 2026 GXZ / Workflow Studio</span><Link className="text-link" href="/#contact">{text.contact} <ArrowUpRightIcon aria-hidden="true" /></Link></footer></>;
}
