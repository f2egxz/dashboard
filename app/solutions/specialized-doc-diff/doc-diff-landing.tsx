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
  DocumentCheckIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SiteChrome from '@/app/ui/site-chrome';
import InteractiveDemo from './interactive-demo';

interface DocDiffLandingProps {
  locale: string;
}

export default function DocDiffLanding({ locale }: DocDiffLandingProps) {
  const isZh = locale === 'zh';

  const t = {
    back: isZh ? '返回所有方案' : 'Back to Studio Solutions',
    badge: isZh
      ? '垂直方案深度规格 • MEDIDRAFT AI'
      : 'VERTICAL SOLUTION SPECIFICATION • MEDIDRAFT AI',
    eyebrow: isZh
      ? '面向医学传播机构（MedComms）与资深科研团队的内容工程系统'
      : 'Bespoke Content Engineering for Medical Communications & Scientific Publishing',
    heroTitle: isZh
      ? '句子级文献精准溯源与合规比对工作台'
      : 'Sentence-Level Citation Tracing & Compliance Diffing for Medical Comms',
    heroLede: isZh
      ? '彻底解决通用大模型在医学写作中的虚构引用与用语夸大风险。我们基于底层富文本工程（Lexical），打造具备 PubMed 文献精准锚定、FDA 宣传合规预审与零患者隐私负担的专业级双栏工作台。'
      : 'Eliminate hallucination risks and tedious manual PubMed cross-checking. We engineer custom dual-pane Lexical workspaces that deterministic-map drafts to primary evidence, flag regulatory overclaims, and keep your workflow 100% Non-PHI compliant.',
    ctaPrimary: isZh
      ? '预约 15 分钟技术演示'
      : 'Schedule a 15-Min Scoping Call',
    ctaSecondary: isZh
      ? '申请 1 页样稿免费实测'
      : 'Request a 1-Page Free Pilot Diff',
    mailSubject: isZh
      ? '咨询 MediDraft 医学文献溯源与合规系统'
      : '[MediDraft Inquiry] Request a 1-Page Pilot Verification',

    trustBadges: [
      {
        icon: LockClosedIcon,
        text: isZh
          ? '100% 非敏感公开文献（零 HIPAA 负担）'
          : '100% Non-PHI Safe Harbor',
      },
      {
        icon: ShieldCheckIcon,
        text: isZh
          ? '确定性文献匹配（绝无虚构 DOI）'
          : 'Deterministic Evidence Grounding',
      },
      {
        icon: ClockIcon,
        text: isZh
          ? '单篇复核耗时从 4 小时压缩至 25 分钟'
          : '4-Hour Review Cut to 25 Minutes',
      },
      {
        icon: DocumentCheckIcon,
        text: isZh
          ? '100% 客户独占源码与规则库'
          : '100% Client Code & Rule Ownership',
      },
    ],

    demoTitle: isZh
      ? '实机交互演示：体验句子级文献溯源与合规拦截'
      : 'Interactive System Demo: Sentence-Level Evidence & Compliance',
    demoSubtitle: isZh
      ? '无需任何口头承诺，请在下方直接点击左侧文稿句子，查看右侧文献切片联动与 FDA 违规规则拦截：'
      : 'Click any sentence on the left to observe deterministic PubMed excerpt alignment and FDA regulatory alerts in action:',

    diffSectionTitle: isZh
      ? '为什么通用 AI 无法满足医学传播的交付标准？'
      : 'Why Generic AI (ChatGPT) Fails Medical Communications Standards',
    diffSectionSubtitle: isZh
      ? '医学公关与学术发表绝非普通文案。通用大语言模型（LLM）天生缺乏对证据链可信度与法规红线的确定性把控。'
      : 'Medical communications cannot afford hallucinated references or non-compliant marketing claims. Here is how specialized engineering changes the equation:',

    diffPoints: [
      {
        title: isZh
          ? '拒绝“虚构引文”（No Hallucinated Citations）'
          : 'No Hallucinated Citations',
        problem: isZh
          ? 'ChatGPT 经常生成看似合乎逻辑但实际上根本不存在的 DOI、期刊卷号和研究结论。'
          : 'Standard LLMs frequently invent plausible-sounding citations, fabricated DOIs, and nonexistent trial endpoints.',
        solution: isZh
          ? 'MediDraft 严格将文稿切片接入 PubMed / CrossRef 实体验证，仅返回 100% 吻合的原始数据支持。'
          : 'MediDraft deterministic-matches drafted sentences against indexed PubMed/PMC data layers with strict verification.',
      },
      {
        title: isZh
          ? '内置 FDA / GPP 宣传合规黑名单'
          : 'Built-in FDA / GPP Promotional Guardrails',
        problem: isZh
          ? '通用模型常用“彻底根除”、“保证疗效”等绝对化宣传词，直接触碰 FDA 监管红线，导致稿件被客户法务退修。'
          : 'Generic models generate absolute promotional claims ("guarantees zero side effects") that trigger FDA regulatory penalties.',
        solution: isZh
          ? '集成医药传播合规规则库，在编辑界面中实时高亮标红风险词，并自动给出合规替换建议。'
          : 'Embedded regulatory rules highlight high-risk promotional tokens in real time and recommend compliant phrasing.',
      },
      {
        title: isZh
          ? '专为资深医学撰稿人定制的双栏编辑流'
          : 'Editor-First Dual-Pane Lexical Architecture',
        problem: isZh
          ? '在 Word 与 PubMed、数十篇 PDF 之间来回切换比对，一名资深编辑每天仅能校对 1–2 篇长文，极度疲劳。'
          : 'Editors waste hours Alt-Tabbing between Word docs, PDFs, and PubMed. Fatigue leads to missed discrepancies.',
        solution: isZh
          ? '打造基于 Lexical 的现代双栏工作台，点击句子即时跳转对应文献段落，将机械核查变为即时确认。'
          : 'A modern dual-pane Lexical workspace allows 1-click verification directly anchored to verified journal paragraphs.',
      },
    ],

    roiTitle: isZh
      ? '直接算账：量化成本与投资回报'
      : 'Cold Hard Numbers: Labor Economics & ROI',
    roiSubtitle: isZh
      ? '把昂贵的资深医学编辑从“机械性检索出处”中解放出来，专注于高价值学术洞察与战略叙事。'
      : 'Free your high-cost senior medical writers from mechanical citation hunting so they can focus on high-margin strategic deliverables.',

    roiTable: {
      headers: isZh
        ? ['对比维度', '传统纯人工复核', 'MediDraft 辅助工作台']
        : [
            'Metric',
            'Traditional Manual Review',
            'MediDraft Engineering System',
          ],
      rows: isZh
        ? [
            [
              '单篇平均核查耗时',
              '4–6 小时 / 篇（逐字翻找）',
              '25 分钟 / 篇（自动化高亮定位）',
            ],
            [
              '高薪撰稿人复核成本',
              '约 $550–$750 / 篇（按 $130/hr 计）',
              '约 $45–$60 / 篇（节省 ~90% 工时）',
            ],
            [
              '首轮交付周期',
              '3–5 个工作日',
              '当天完成，可达 24 小时内加急交付',
            ],
            [
              '客户法务退修率',
              '疲劳漏看：约 8%–15% 违规被退',
              '实时黑名单预检：退修率接近 0%',
            ],
            ['小团队月度净省', '—', '每月净省 $4,500 – $9,000+ 纯人力薪酬'],
          ]
        : [
            [
              'Average Verification Time',
              '4–6 Hours / Manuscript',
              '25 Minutes / Manuscript (1-click match)',
            ],
            [
              'Senior Writer Labor Cost',
              '~$550–$750 / Paper (@ $130/hr)',
              '~$45–$60 / Paper (~90% time saved)',
            ],
            [
              'Standard Turnaround',
              '3–5 Business Days',
              'Same-Day / Under 24h expedited capacity',
            ],
            [
              'Legal / Compliance Rejection',
              '8%–15% due to fatigue',
              'Near 0% with automated rule pre-checks',
            ],
            [
              'Net Monthly Team Savings',
              'Baseline payroll burn',
              'Net $4,500 – $9,000+ saved per writing unit',
            ],
          ],
    },

    complianceTitle: isZh
      ? '严守非敏感公开数据红线：100% 规避 HIPAA 法律风险'
      : 'Strict Non-PHI Scope: Zero HIPAA Liability Overhead',
    complianceBody: isZh
      ? '我们深知海外医药客户对数据隐私与合规的严苛要求。MediDraft 明确划定业务边界：专为公开学术论文、预印本、药企对外 PR 稿件、CME 继续医学教育材料设计。我们绝不接触、存储或索取真实患者个人健康信息（PHI），无需复杂的 BAA 协议即可轻装合规落地。'
      : 'We understand the rigorous compliance standards of US pharmaceutical clients. MediDraft operates under a strict Non-PHI scope: designed strictly for published biomedical literature, academic preprints, medical PR, and CME courseware. We never ingest or store Protected Health Information (PHI), avoiding burdensome BAA friction while maintaining enterprise data security.',

    processTitle: isZh
      ? '清晰轻量的 3 步合作路径'
      : 'Transparent 3-Step Engagement Model',
    steps: [
      {
        num: '01',
        title: isZh
          ? '1 页样稿免费实测（Free Pilot Proof of Concept）'
          : '1-Page Free Pilot Proof of Concept',
        body: isZh
          ? '零风险开始：发送你们最近一篇公开发布的文稿（或脱敏公开论文）。我们将在 24 小时内交付一个可交互的双栏高亮比对原型，让团队实际体验效果。'
          : 'Zero commitment: send 1 page of a recent public draft or manuscript. Within 24 hours, we return an interactive dual-pane diff link for your team to test firsthand.',
        cost: isZh ? '免费 / 24小时内交付' : 'Free / 24h Turnaround',
      },
      {
        num: '02',
        title: isZh
          ? '定制规则与私有工作台部署（Custom Workspace Setup）'
          : 'Custom Rule & Workspace Setup',
        body: isZh
          ? '根据你们团队专注的治疗领域（如肿瘤、心血管、罕见病）、目标期刊格式要求（AMA/ICMJE）以及特定合规黑名单词库，完成定制化工作流与私有部署。'
          : 'Tailored to your specific therapeutic areas (oncology, CVD, rare diseases), target journal formatting (AMA, ICMJE), and custom promotional blacklists. Deployed to your private environment.',
        cost: isZh ? '$1,500 一次性工程设置费' : '$1,500 One-time Setup',
      },
      {
        num: '03',
        title: isZh
          ? '月度运行保障与规则迭代（Ongoing SLA Retainer）'
          : 'Ongoing Retainer & Engineering SLA',
        body: isZh
          ? '专属工程后盾支持：包含关键故障 4 小时响应、新治疗领域数据库接入、定期更新 FDA OPDP 监管词库，并提供专属 Slack/Teams 沟通通道。'
          : 'On-demand engineering wing: 4-hour critical response SLA, database updates for new therapeutic areas, ongoing FDA guideline updates, and a dedicated team channel.',
        cost: isZh ? '$800 – $1,200 / 月' : '$800 – $1,200 / Month',
      },
    ],

    finalCtaTitle: isZh
      ? '准备好把资深撰稿团队从机械比对中解放出来了吗？'
      : 'Ready to Eliminate 90% of Citation Cross-Checking?',
    finalCtaBody: isZh
      ? '发来一个近期公开的文稿段落，或预约一次 15 分钟的技术架构沟通。我们将以确定性的工程质量为你们的团队降本增效。'
      : 'Bring a public manuscript sample or book a 15-minute scoping call. Let us show your agency how deterministic content engineering elevates your margins.',
  };

  return (
    <>
      <SiteChrome />
      <main className="doc-landing-shell">
        {/* Top Breadcrumb & Product Specification Banner */}
        <div className="page-grid doc-landing-topbar">
          <Link href="/solutions" className="doc-back-link">
            <ArrowLeftIcon className="h-4 w-4" />
            <span>{t.back}</span>
          </Link>
          <span className="doc-spec-pill">{t.badge}</span>
        </div>

        {/* Hero Section */}
        <section className="page-grid doc-hero">
          <div className="doc-hero-content">
            <p className="eyebrow eyebrow-accent">{t.eyebrow}</p>
            <h1 className={`${lusitana.className} doc-hero-title`}>
              {t.heroTitle}
            </h1>
            <p className="doc-hero-lede">{t.heroLede}</p>

            <div className="doc-hero-actions">
              <a
                className="button button-dark"
                href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                  t.mailSubject,
                )}`}
              >
                <span>{t.ctaPrimary}</span>
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a className="button button-outline" href="#demo">
                <span>{t.ctaSecondary}</span>
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="doc-trust-grid">
              {t.trustBadges.map((badge, i) => {
                const IconComponent = badge.icon;
                return (
                  <div key={i} className="doc-trust-badge">
                    <IconComponent className="h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="page-grid doc-section" id="demo">
          <div className="doc-section-header">
            <div>
              <p className="eyebrow">
                {isZh ? '可运行实机' : 'LIVE SYSTEM DEMO'}
              </p>
              <h2 className={`${lusitana.className} doc-section-title`}>
                {t.demoTitle}
              </h2>
            </div>
            <p className="doc-section-intro">{t.demoSubtitle}</p>
          </div>

          <div className="doc-demo-wrapper">
            <InteractiveDemo locale={locale} />
          </div>
        </section>

        {/* The Critical Difference (Generic AI vs MediDraft) */}
        <section className="page-grid doc-section">
          <div className="doc-section-header">
            <div>
              <p className="eyebrow">
                {isZh ? '技术架构差异' : 'WHY SPECIALIZATION MATTERS'}
              </p>
              <h2 className={`${lusitana.className} doc-section-title`}>
                {t.diffSectionTitle}
              </h2>
            </div>
            <p className="doc-section-intro">{t.diffSectionSubtitle}</p>
          </div>

          <div className="doc-diff-grid">
            {t.diffPoints.map((point, idx) => (
              <div key={idx} className="doc-diff-card">
                <div className="doc-diff-card-num">0{idx + 1}</div>
                <h3 className={`${lusitana.className} doc-diff-card-title`}>
                  {point.title}
                </h3>
                <div className="doc-diff-comparison">
                  <div className="doc-diff-row problem">
                    <div className="doc-diff-badge problem">
                      <XMarkIcon className="h-3.5 w-3.5" />
                      <span>{isZh ? '通用 ChatGPT' : 'Generic LLMs'}</span>
                    </div>
                    <p>{point.problem}</p>
                  </div>
                  <div className="doc-diff-row solution">
                    <div className="doc-diff-badge solution">
                      <CheckIcon className="h-3.5 w-3.5" />
                      <span>
                        {isZh ? 'MediDraft 工程系统' : 'MediDraft Custom'}
                      </span>
                    </div>
                    <p>{point.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ROI & Labor Economics */}
        <section className="page-grid doc-section">
          <div className="doc-section-header">
            <div>
              <p className="eyebrow">
                {isZh ? '投入产出测算' : 'MEASURABLE FINANCIAL ROI'}
              </p>
              <h2 className={`${lusitana.className} doc-section-title`}>
                {t.roiTitle}
              </h2>
            </div>
            <p className="doc-section-intro">{t.roiSubtitle}</p>
          </div>

          <div className="doc-roi-container">
            <div className="doc-roi-table-wrap">
              <table className="doc-roi-table">
                <thead>
                  <tr>
                    {t.roiTable.headers.map((head, i) => (
                      <th key={i}>{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.roiTable.rows.map((row, i) => (
                    <tr key={i}>
                      <td className="font-semibold text-slate-900">{row[0]}</td>
                      <td className="text-slate-600">{row[1]}</td>
                      <td className="font-semibold text-blue-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Compliance Safe Harbor Card */}
        <section className="page-grid doc-section">
          <div className="doc-compliance-banner">
            <div className="doc-compliance-icon">
              <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
            </div>
            <div className="doc-compliance-text">
              <h3
                className={`${lusitana.className} mb-2 text-xl font-bold text-slate-900`}
              >
                {t.complianceTitle}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {t.complianceBody}
              </p>
            </div>
          </div>
        </section>

        {/* 3-Step Engagement Model */}
        <section className="page-grid doc-section">
          <div className="doc-section-header">
            <div>
              <p className="eyebrow">{isZh ? '合作流程' : 'HOW WE ENGAGE'}</p>
              <h2 className={`${lusitana.className} doc-section-title`}>
                {t.processTitle}
              </h2>
            </div>
          </div>

          <div className="doc-steps-grid">
            {t.steps.map((step, idx) => (
              <div key={idx} className="doc-step-card">
                <div className="doc-step-top">
                  <span className="doc-step-num">{step.num}</span>
                  <span className="doc-step-cost">{step.cost}</span>
                </div>
                <h3 className={`${lusitana.className} doc-step-title`}>
                  {step.title}
                </h3>
                <p className="doc-step-body">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Band */}
        <section className="doc-cta-band">
          <div className="page-grid doc-cta-grid">
            <div>
              <p className="eyebrow">
                {isZh ? '开始验证' : 'PILOT VERIFICATION'}
              </p>
              <h2 className={`${lusitana.className} doc-cta-title`}>
                {t.finalCtaTitle}
              </h2>
              <p className="doc-cta-body">{t.finalCtaBody}</p>
            </div>
            <div className="doc-cta-box">
              <a
                className="button button-dark"
                href={`mailto:hello@guoxuzhi.email?subject=${encodeURIComponent(
                  t.mailSubject,
                )}`}
              >
                <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                <span>hello@guoxuzhi.email</span>
              </a>
              <span className="doc-cta-note">
                {isZh
                  ? '⚡️ 24 小时内专人响应并反馈 1 页样稿比对方案'
                  : '⚡️ 24h response with customized sample diff preview'}
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer page-grid">
        <span>© 2026 GXZ / MediDraft Engineering</span>
        <Link className="text-link" href="/solutions">
          {t.back} <ArrowUpRightIcon aria-hidden="true" />
        </Link>
      </footer>
    </>
  );
}
