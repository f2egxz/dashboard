'use client';

import React, { useState } from 'react';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentMagnifyingGlassIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

interface InteractiveDemoProps {
  locale: string;
}

export default function InteractiveDemo({ locale }: InteractiveDemoProps) {
  const isZh = locale === 'zh';
  const [activeIdx, setActiveIdx] = useState(0);

  const sentences = [
    {
      id: 1,
      text: isZh
        ? '在针对 8 项具有里程碑意义的临床试验汇总 Meta 分析中，GLP-1 受体激动剂使主要心血管不良事件（MACE）的相对风险显著降低了 14%。'
        : 'In a pooled meta-analysis across 8 landmark cardiovascular outcome trials, GLP-1 receptor agonists demonstrated a 14% relative risk reduction in major adverse cardiovascular events (MACE).',
      status: 'verified',
      confidence: '99.4% Match',
      badge: isZh ? '100% 原始文献对齐' : '100% Evidence Aligned',
      badgeTone: 'green',
      sourceSnippet: isZh
        ? '“对 8 项 CVOT 试验的系统评价表明，GLP-1 RA 显著降低了 2 型糖尿病患者的 MACE 发生率（HR 0.86, 95% CI 0.79–0.94; p<0.0001）。”'
        : '"A meta-analysis of eight CVOTs showed GLP-1 RAs significantly reduced MACE by 14% (HR 0.86, 95% CI 0.79–0.94; p<0.0001) in patients with type 2 diabetes."',
      sourceJournal: 'The Lancet Diabetes & Endocrinology',
      doi: '10.1016/S2213-8587(21)00203-5',
      pmid: 'PMC8492014',
      analysisTitle: isZh
        ? '主要终点指标严格一致'
        : 'Primary Endpoint Fully Validated',
      analysisDetail: isZh
        ? '文稿中的 14% 相对风险降低（RRR）与原始文献 HR 0.86（1 - 0.86 = 14%）数据完全吻合，纳入研究样本量（8 项 CVOT）准确无误。'
        : 'The 14% relative risk reduction accurately maps to the published Hazard Ratio of 0.86 (1 - 0.86 = 14%) across all 8 analyzed CVOT cohorts.',
    },
    {
      id: 2,
      text: isZh
        ? '对基线 eGFR < 60 mL/min/1.73m² 肾功能不全亚组的专项分析显示，复合肾脏结局恶化速度减缓了 22%（p = 0.002）。'
        : 'In prespecified subgroup analyses of patients with baseline eGFR < 60 mL/min/1.73m², renal composite secondary outcomes demonstrated a 22% slowing in decline (p = 0.002).',
      status: 'verified',
      confidence: '96.2% Match',
      badge: isZh ? '亚组条件校验通过' : 'Subgroup Verified',
      badgeTone: 'green',
      sourceSnippet: isZh
        ? '“在慢性肾脏病亚组（eGFR 30 至 <60 mL/min）中，复合肾病事件发生率显著下降（HR 0.78, 95% CI 0.67–0.90; p=0.002）。”'
        : '"In the chronic kidney disease cohort (eGFR 30 to <60), composite renal progression outcomes decreased significantly (HR 0.78; 95% CI 0.67-0.90; p=0.002)."',
      sourceJournal: 'New England Journal of Medicine (NEJM)',
      doi: '10.1056/NEJMoa2100456',
      pmid: 'PMID: 34186022',
      analysisTitle: isZh
        ? '亚组边界与统计值吻合'
        : 'Subgroup Bounds & P-value Matched',
      analysisDetail: isZh
        ? '经对齐，HR 0.78 对应 22% 减缓效应，p 值 (0.002) 与基线截断值 (<60) 无偏倚。已自动补充 95% CI 引用建议。'
        : 'Matched HR 0.78 matches the 22% protective threshold. p-value (0.002) and eGFR cutoff (<60) are verified against the published clinical appendix.',
    },
    {
      id: 3,
      text: isZh
        ? '每周一次的皮下注射滴定方案，能够确保老年用药群体彻底根除胃肠道不良反应。'
        : 'Weekly subcutaneous dose titration guarantees complete eradication of gastrointestinal adverse events across older adult patient cohorts.',
      status: 'warning',
      confidence: 'Alert',
      badge: isZh ? '⚠️ FDA/合规夸大警示' : '⚠️ Overclaim / FDA Warning',
      badgeTone: 'amber',
      sourceSnippet: isZh
        ? '“在老年治疗组（≥65 岁）中，尽管滴定延缓了不适，但仍有 18.4% 的受试者报告了轻至中度暂时性恶心与腹泻（安慰剂组为 8.2%）。”'
        : '"In older adults (>=65 years), mild-to-moderate transient nausea was still reported in 18.4% of titrated subjects vs 8.2% with placebo."',
      sourceJournal: 'Journal of Clinical Endocrinology & Metabolism',
      doi: '10.1210/clinem/dgab482',
      pmid: 'NCT-04821890',
      analysisTitle: isZh
        ? '检测到绝对化夸大用语（违规风险）'
        : 'Absolute Efficacy Claim Detected (Compliance Violation)',
      analysisDetail: isZh
        ? '命中 FDA-OPDP 宣传监管黑名单词汇【“彻底根除 / 确保”】。真实临床数据显示治疗组仍有 18.4% 恶心发生率。建议将“彻底根除”替换为“显著减轻”。'
        : 'Offending token "guarantees complete eradication" violates FDA OPDP guidelines and contradictions clinical trial safety data (18.4% adverse rate reported). Suggest replacing with "is associated with lower incidence of".',
    },
  ];

  const current = sentences[activeIdx];

  return (
    <div className="demo-suite-card">
      {/* Top Header Bar */}
      <div className="demo-suite-header">
        <div className="demo-suite-file">
          <DocumentMagnifyingGlassIcon className="h-5 w-5 text-blue-600" />
          <span className="font-mono text-xs font-semibold text-slate-800">
            manuscript_draft_glp1_cvd_review_v2.docx
          </span>
        </div>
        <div className="demo-suite-meta">
          <span className="demo-status-pill green">
            <CheckCircleIcon className="mr-1 inline h-3.5 w-3.5" />2 Verified
            Citations
          </span>
          <span className="demo-status-pill amber">
            <ExclamationTriangleIcon className="mr-1 inline h-3.5 w-3.5" />1
            Regulatory Flag
          </span>
        </div>
      </div>

      {/* Dual Pane Layout */}
      <div className="demo-grid">
        {/* Left Column: Draft Manuscript */}
        <div className="demo-col demo-draft-col">
          <div className="demo-col-header">
            <span className="demo-col-label">
              {isZh
                ? '文稿草案与改写区（点击句子查看溯源）'
                : 'Manuscript Draft Editor (Click sentence to inspect)'}
            </span>
            <span className="demo-hint-badge">
              <SparklesIcon className="h-3.5 w-3.5" />
              Interactive Diff
            </span>
          </div>

          <div className="demo-sentences-container">
            {sentences.map((sentence, idx) => {
              const isActive = activeIdx === idx;
              const isAlert = sentence.status === 'warning';
              return (
                <button
                  key={sentence.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`demo-sentence-btn ${isActive ? 'active' : ''} ${
                    isAlert ? 'is-alert' : ''
                  }`}
                  type="button"
                >
                  <div className="demo-sentence-top">
                    <span className="demo-sentence-num">
                      Sentence 0{sentence.id}
                    </span>
                    <span className={`demo-tag-pill ${sentence.badgeTone}`}>
                      {sentence.badge}
                    </span>
                  </div>
                  <p className="demo-sentence-text">{sentence.text}</p>
                </button>
              );
            })}
          </div>

          <div className="demo-draft-footer">
            <span className="text-xs text-slate-500">
              {isZh
                ? '💡 底层基于 Lexical AST 抽象语法树，实现句子粒度切分与实时状态标记。'
                : '💡 Lexical AST parsing enables real-time tokenization and sentence-level bidirectional linking.'}
            </span>
          </div>
        </div>

        {/* Right Column: Evidence & Compliance Inspector */}
        <div className="demo-col demo-inspector-col">
          <div className="demo-col-header">
            <span className="demo-col-label">
              {isZh
                ? '证据链与合规校验窗口'
                : 'Verified Evidence & Regulatory Inspector'}
            </span>
            <span className={`demo-confidence-badge ${current.badgeTone}`}>
              {current.confidence}
            </span>
          </div>

          <div className="demo-inspector-body">
            {/* Journal Source Card */}
            <div className="demo-source-card">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Primary Literature Anchor
                </span>
                <span className="flex items-center gap-1 font-mono text-xs text-slate-500">
                  {current.pmid}
                  <ArrowTopRightOnSquareIcon className="h-3 w-3 text-slate-400" />
                </span>
              </div>
              <div className="mb-2 text-xs font-semibold text-slate-900">
                {current.sourceJournal}
              </div>
              <blockquote className="demo-source-quote font-serif text-sm italic text-slate-700">
                {current.sourceSnippet}
              </blockquote>
              <div className="mt-2 font-mono text-[11px] text-slate-500">
                DOI: {current.doi}
              </div>
            </div>

            {/* Analysis Card */}
            <div
              className={`demo-analysis-card ${
                current.status === 'warning' ? 'alert' : 'pass'
              }`}
            >
              <div className="mb-1.5 flex items-center gap-2 text-sm font-semibold">
                {current.status === 'warning' ? (
                  <>
                    <ExclamationTriangleIcon className="h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span className="text-amber-900">
                      {current.analysisTitle}
                    </span>
                  </>
                ) : (
                  <>
                    <ShieldCheckIcon className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span className="text-emerald-900">
                      {current.analysisTitle}
                    </span>
                  </>
                )}
              </div>
              <p
                className={`text-xs leading-relaxed ${
                  current.status === 'warning'
                    ? 'text-amber-800'
                    : 'text-emerald-800'
                }`}
              >
                {current.analysisDetail}
              </p>
            </div>

            {/* Compliance Protocol Guarantee */}
            <div className="demo-safe-guarantee">
              <span className="status-dot green" />
              <span>
                {isZh
                  ? '严格非敏感公开文献库检索 • 零患者隐私（Non-PHI）安全港'
                  : 'Queried against open bio-literature indexes • 100% Non-PHI scope'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
