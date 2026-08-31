import Link from 'next/link';
import { ArrowDownIcon, ArrowUpRightIcon, CheckIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SiteChrome from '@/app/ui/site-chrome';
import { getLocale, copy, getSolutions } from '@/app/lib/i18n';

export default function Page() {
  const text = copy[getLocale()];
  const solutions = getSolutions(getLocale());
  const workflowRows = text.flow.map((row, index) => ({ ...row, tone: ['ink', 'orange', 'blue'][index] }));
  return (
    <>
      <SiteChrome />
      <main>
        <section className="hero-shell page-grid">
          <div className="hero-copy">
            <p className="eyebrow">{text.heroEyebrow}</p>
            <h1 className={`${lusitana.className} hero-title`}>{text.heroTitle}</h1>
            <p className="hero-lede">{text.heroLede}</p>
            <div className="hero-actions">
              <a className="button button-dark" href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(text.mailSubject)}`}>{text.heroCta} <ArrowUpRightIcon aria-hidden="true" /></a>
              <Link className="text-link" href="/solutions">{text.heroBrowse} <ArrowDownIcon aria-hidden="true" /></Link>
            </div>
            <div className="hero-note"><span className="status-dot" aria-hidden="true" />{text.heroNote}</div>
          </div>
          <div className="flow-board" aria-label={text.flowAria}>
            <div className="flow-board-top"><span>{text.flowTitle}</span><span className="flow-id">{text.flowId}</span></div>
            <div className="flow-track">
              {workflowRows.map((row, index) => (
                <div className="flow-row" key={row.label}>
                  <div className={`flow-node flow-node-${row.tone}`}><span className="flow-index">0{index + 1}</span><span className="flow-label">{row.label}</span><strong>{row.value}</strong></div>
                  {index < workflowRows.length - 1 ? <div className="flow-line" aria-hidden="true" /> : null}
                </div>
              ))}
            </div>
            <div className="flow-board-foot"><span>{text.flowFootA}</span><span>{text.flowFootB}</span></div>
          </div>
        </section>

        <section className="statement-band"><div className="page-grid statement-grid"><h2 className={`${lusitana.className} section-title`}>{text.statementTitle}</h2><div className="statement-body"><p>{text.statementBody}</p><div className="check-list">{text.checks.map((item) => <span key={item}><CheckIcon aria-hidden="true" />{item}</span>)}</div></div></div></section>

        <section className="section page-grid" id="solutions"><div className="section-heading-row"><div><p className="eyebrow">{text.solutionsEyebrow}</p><h2 className={`${lusitana.className} section-title`}>{text.solutionsTitle}</h2></div><Link className="text-link" href="/solutions">{text.allSolutions} <ArrowUpRightIcon aria-hidden="true" /></Link></div><div className="solution-list">{solutions.map((solution, index) => <Link className="solution-row" href={`/solutions/${solution.slug}`} key={solution.slug}><span className="solution-number">0{index + 1}</span><div><h3>{solution.title}</h3><p>{solution.summary}</p></div><ArrowUpRightIcon className="row-arrow" aria-hidden="true" /></Link>)}</div></section>

        <section className="section section-dark" id="process"><div className="page-grid process-grid"><div><p className="eyebrow eyebrow-light">{text.processEyebrow}</p><h2 className={`${lusitana.className} section-title section-title-light`}>{text.processTitle}</h2></div><div className="process-steps">{text.process.map((step,index) => <div className="process-step" key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></div>)}</div></div></section>

        <section className="section page-grid" id="cases"><div className="section-heading-row"><div><p className="eyebrow">{text.casesEyebrow}</p><h2 className={`${lusitana.className} section-title`}>{text.casesTitle}</h2></div><span className="quiet-label">{text.synthetic}</span></div><div className="case-feature"><div className="case-copy"><span className="case-tag">{text.caseTag}</span><h3 className={`${lusitana.className}`}>{text.caseTitle}</h3><p>{text.caseBody}</p><Link className="button button-outline" href="/cases">{text.caseCta} <ArrowUpRightIcon aria-hidden="true" /></Link></div><div className="case-visual" aria-label={text.caseAria}><div className="case-visual-bar"><span className="mini-dot mini-dot-orange" /><span className="mini-dot mini-dot-blue" /><span className="mini-dot mini-dot-ink" /><span>{text.caseFile}</span></div>{text.caseRows.map((row) => <div className="case-log" key={row.time}><span>{row.time}</span><strong>{row.title}</strong><em className={row.time === '10:31' ? 'case-alert' : ''}>{row.meta}</em></div>)}<div className="case-result"><span>OUTPUT</span><strong>{text.output}</strong><CheckIcon aria-hidden="true" /></div></div></div></section>

        <section className="contact-band" id="contact"><div className="page-grid contact-grid"><div><p className="eyebrow">{text.nextEyebrow}</p><h2 className={`${lusitana.className} section-title`}>{text.nextTitle}</h2></div><div className="contact-action"><p>{text.nextBody}</p><a className="button button-dark" href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(text.mailSubject)}`}><EnvelopeIcon aria-hidden="true" /> hello@guoxuzhi.email</a></div></div></section>
      </main>
      <footer className="footer page-grid"><span>© 2026 GXZ / Workflow Studio</span><span>{text.footer}</span></footer>
    </>
  );
}
