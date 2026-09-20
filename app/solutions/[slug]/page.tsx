import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SiteChrome from '@/app/ui/site-chrome';
import { copy, getLocale, getSolutions } from '@/app/lib/i18n';
import DocDiffLanding from '../specialized-doc-diff/doc-diff-landing';
import ExtractorLanding from '../legacy-system-extractor/extractor-landing';
import AgencyLanding from '../agency-whitelabel-dev/agency-landing';
import RescueLanding from '../automation-rescue/rescue-landing';

export function generateStaticParams() {
  return getSolutions('zh').map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const locale = getLocale();
  if (params.slug === 'specialized-doc-diff') {
    const isZh = locale === 'zh';
    return {
      title: isZh
        ? 'MediDraft AI | 句子级医学文献溯源与合规比对工作台'
        : 'MediDraft AI | Sentence-Level Citation Tracing & Compliance Diffing for Medical Comms',
      description: isZh
        ? '面向医学传播机构与科研团队的内容工程系统，拒绝通用 AI 幻觉与虚构引文，内置 FDA 宣传合规预审与零患者隐私负担。'
        : 'Purpose-built for Medical Communications and scientific publishers. Eliminate hallucinated citations, flag FDA overclaims, and keep workflows 100% Non-PHI compliant.',
      alternates: { canonical: `/${locale}/solutions/${params.slug}` },
    };
  }

  if (params.slug === 'legacy-system-extractor') {
    const isZh = locale === 'zh';
    return {
      title: isZh
        ? 'PortalBridge | 无 API 老旧承运商与供应商系统 Chrome 扩展自动化'
        : 'PortalBridge | Bespoke Chrome Extensions for Prehistoric Carrier Portals',
      description: isZh
        ? '专为美国货代经纪（Freight Brokers）与分销商打造的浏览器数据工程。一键逆向提取提单数据并直推 CRM/TMS，100% 确定性，零 AI 幻觉。'
        : 'Bespoke Chrome Extensions purpose-built for US Freight Brokers and 3PLs. Reverse-extract shipment data from legacy portals into CRM/TMS with 100% deterministic accuracy.',
      alternates: { canonical: `/${locale}/solutions/${params.slug}` },
    };
  }

  if (params.slug === 'agency-whitelabel-dev') {
    const isZh = locale === 'zh';
    return {
      title: isZh
        ? 'AgencyGhost | 欧美设计与营销代理商的隐形白标技术工程后盾'
        : 'AgencyGhost | Silent White-Label Engineering for US Design & Marketing Agencies',
      description: isZh
        ? '无需雇佣年薪 $160k 的全职研发。专为欧美代理商打造的隐形白标后盾，Figma 快速转为生产级 Next.js 应用，留存 65%+ 超额利润。'
        : 'Scale your agency’s engineering revenue without hiring a $160k developer. Silent Next.js white-label engineering under your brand and NDA.',
      alternates: { canonical: `/${locale}/solutions/${params.slug}` },
    };
  }

  if (params.slug === 'automation-rescue') {
    const isZh = locale === 'zh';
    return {
      title: isZh
        ? 'FlowRescue | 生产级 No-code 自动化容灾加固与自愈工程'
        : 'FlowRescue | Production-Grade Resilience & Disaster Recovery for Zapier and Make',
      description: isZh
        ? '告别凌晨两点 Zapier 与 Make 的静默报错与丢单。注入死信队列、指数退避重试、定制代码逃生舱与毫秒级 Slack 告警，100% 在您自有租户内运行。'
        : 'Stop losing leads to 2 AM silent failures in Zapier & Make. Inject dead-letter queues, exponential retries, custom code escape hatches, and instant Slack alerts.',
      alternates: { canonical: `/${locale}/solutions/${params.slug}` },
    };
  }

  const solution = getSolutions(locale).find(
    (item) => item.slug === params.slug,
  );
  return solution
    ? {
        title: solution.title,
        description: solution.summary,
        alternates: { canonical: `/${locale}/solutions/${params.slug}` },
      }
    : {};
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const locale = getLocale();

  // If this is specialized-doc-diff, render the dedicated vertical product landing page
  if (params.slug === 'specialized-doc-diff') {
    return <DocDiffLanding locale={locale} />;
  }

  // If this is legacy-system-extractor, render the dedicated PortalBridge product landing page
  if (params.slug === 'legacy-system-extractor') {
    return <ExtractorLanding locale={locale} />;
  }

  // If this is agency-whitelabel-dev, render the dedicated AgencyGhost product landing page
  if (params.slug === 'agency-whitelabel-dev') {
    return <AgencyLanding locale={locale} />;
  }

  // If this is automation-rescue, render the dedicated FlowRescue product landing page
  if (params.slug === 'automation-rescue') {
    return <RescueLanding locale={locale} />;
  }

  const text = copy[locale];
  const solution = getSolutions(locale).find(
    (item) => item.slug === params.slug,
  );
  if (!solution) notFound();

  return (
    <>
      <SiteChrome />
      <main className="detail-main">
        <section className="page-grid solution-hero">
          <div>
            <Link className="back-link" href="/solutions">
              {text.backSolutions}
            </Link>
            <p className="eyebrow">
              {text.navSolutions} / {solution.title}
            </p>
            <h1 className={`${lusitana.className} detail-title`}>
              {solution.title}
            </h1>
            <p className="detail-lede">{solution.summary}</p>
          </div>
          <div className="problem-stamp">
            <span>{text.detailProblemLabel}</span>
            <p>{solution.problem}</p>
          </div>
        </section>
        <section className="page-grid solution-detail-grid">
          <div>
            <h2 className={`${lusitana.className} detail-section-title`}>
              {text.detailWorth}
            </h2>
            <p className="detail-copy">{solution.fit}</p>
            <h2
              className={`${lusitana.className} detail-section-title detail-section-spaced`}
            >
              {text.detailHow}
            </h2>
            <div className="detail-list">
              {solution.approach.map((item) => (
                <div key={item}>
                  <CheckIcon aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="output-panel">
            <span className="eyebrow">{text.detailOutputEyebrow}</span>
            <h2 className={`${lusitana.className}`}>
              {text.detailOutputTitle}
            </h2>
            <ul>
              {solution.output.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="button button-dark"
              href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                text.mailSubject,
              )}`}
            >
              <span>{text.detailCta}</span>
              <ArrowUpRightIcon aria-hidden="true" />
            </a>
          </aside>
        </section>
      </main>
      <footer className="footer page-grid">
        <span>© 2026 GXZ / Workflow Studio</span>
        <Link className="text-link" href="/#contact">
          {text.home} <ArrowUpRightIcon aria-hidden="true" />
        </Link>
      </footer>
    </>
  );
}
