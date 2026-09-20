'use client';

import React, { useState } from 'react';
import {
  ArrowPathIcon,
  CheckCircleIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  DocumentDuplicateIcon,
  GlobeAltIcon,
  SparklesIcon,
  TruckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

interface ExtractorDemoProps {
  locale: string;
}

type PortalKey = 'apex' | 'intermodal';

interface PortalData {
  portalName: string;
  portalYear: string;
  url: string;
  bol: string;
  booking: string;
  status: string;
  statusRaw: string;
  origin: string;
  destination: string;
  vessel: string;
  container: string;
  weight: string;
  charges: string;
  eta: string;
}

const PORTALS: Record<PortalKey, PortalData> = {
  apex: {
    portalName: 'Apex Freightways Tracking Portal (Classic ASP v3.2)',
    portalYear: 'circa 2003',
    url: 'https://internal-web.apex-freight-legacy.net/tracking/asp/query.asp?bol=APX-849204-E',
    bol: 'APX-849204-E',
    booking: 'MAWB-023-99410291',
    status: 'CUSTOMS_HOLD',
    statusRaw: 'HOLD - PENDING CBP 7501 CLEARED (LONG BEACH PIER T)',
    origin: 'Ningbo (CNNGB)',
    destination: 'Chicago BNSF Logistics Hub (ORD)',
    vessel: 'EVER FORTUNE v.089W / Evergreen',
    container: 'TGHU-9283419 (40ft High Cube)',
    weight: '19,420 kg (42,813 lbs) / 68.2 CBM',
    charges: 'Demurrage Fee Incurred: $450.00 (Free time expired 09/22)',
    eta: 'Sep 24, 2026 - 16:30 CDT',
  },
  intermodal: {
    portalName: 'Pacific Rail & Intermodal Gateway (Legacy EDI WebUI)',
    portalYear: 'circa 1999',
    url: 'https://gateway.pacific-rail-intermodal.com/cgi-bin/edi_report.pl?unit=PR-771029',
    bol: 'PR-771029-X',
    booking: 'BNSF-INTERMODAL-99214',
    status: 'IN_TRANSIT',
    statusRaw: 'DEP TRAIN 124A - PASSED OGDEN UT - ETA FINAL RAMP ON TIME',
    origin: 'Tacoma Marine Ramp (WA)',
    destination: 'Dallas Intermodal Terminal (TX)',
    vessel: 'Union Pacific Intermodal Unit #9942',
    container: 'PACU-1049281 (53ft Domestic)',
    weight: '34,120 lbs (15,476 kg)',
    charges: 'Standard Ramp Storage: $0.00 (2 Days Remaining)',
    eta: 'Sep 26, 2026 - 08:00 CDT',
  },
};

export default function ExtractorDemo({ locale }: ExtractorDemoProps) {
  const isZh = locale === 'zh';
  const [selectedPortal, setSelectedPortal] = useState<PortalKey>('apex');
  const [isExtracting, setIsExtracting] = useState(false);
  const [isSynced, setIsSynced] = useState(false);
  const [activeTab, setActiveTab] = useState<'fields' | 'json'>('fields');
  const [copied, setCopied] = useState(false);

  const data = PORTALS[selectedPortal];

  const handleExtract = () => {
    setIsExtracting(true);
    setIsSynced(false);
    setTimeout(() => {
      setIsExtracting(false);
      setIsSynced(true);
    }, 1100);
  };

  const handlePortalChange = (key: PortalKey) => {
    setSelectedPortal(key);
    setIsSynced(false);
    setIsExtracting(false);
  };

  const copyPayload = () => {
    const payload = JSON.stringify(
      {
        bol_number: data.bol,
        carrier_booking: data.booking,
        normalized_status: data.status,
        origin: data.origin,
        destination: data.destination,
        container_id: data.container.split(' ')[0],
        weight_lbs: data.weight.includes('42,813') ? 42813 : 34120,
        accessorial_alerts: data.charges.includes('$450.00')
          ? { demurrage_usd: 450.0, flag: 'IMMEDIATE_ACTION' }
          : { demurrage_usd: 0.0, flag: 'CLEAR' },
        estimated_arrival_utc: '2026-09-24T21:30:00Z',
        ingested_via: 'PortalBridge Chrome Extension v2.4',
      },
      null,
      2,
    );
    navigator.clipboard.writeText(payload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      {/* Demo Controls Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <TruckIcon className="h-4 w-4" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {isZh
              ? '选择测试老旧承运商门户：'
              : 'Select Simulated Legacy Portal:'}
          </span>
          <div className="flex gap-1.5">
            <button
              onClick={() => handlePortalChange('apex')}
              className={`rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                selectedPortal === 'apex'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Apex Freightways (ASP 2003)
            </button>
            <button
              onClick={() => handlePortalChange('intermodal')}
              className={`rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                selectedPortal === 'intermodal'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Pacific Rail (EDI 1999)
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
          <span>
            {isZh
              ? '浏览器扩展已注入当前会话'
              : 'Extension Injected in Active Tab'}
          </span>
        </div>
      </div>

      {/* Main Dual-View Workspace */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column: Simulated Archaic Legacy Carrier Portal (7 cols) */}
        <div className="rounded-xl border border-amber-200/80 bg-stone-50 p-4 shadow-inner lg:col-span-7">
          {/* Legacy Browser Address Bar */}
          <div className="mb-3 flex items-center gap-2 rounded-md border border-stone-200 bg-stone-100 px-3 py-1.5 font-mono text-[11px] text-stone-600">
            <GlobeAltIcon className="h-3.5 w-3.5 text-stone-400" />
            <span className="truncate">{data.url}</span>
            <span className="ml-auto rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-800">
              {data.portalYear}
            </span>
          </div>

          {/* Legacy Portal Header & System Warning */}
          <div className="mb-4 border-b border-stone-300 pb-2">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-sm font-bold text-stone-800">
                {data.portalName}
              </h4>
              <span className="font-mono text-[11px] text-stone-500">
                HTTP/1.1 NO-API
              </span>
            </div>
            <p className="mt-1 font-mono text-[10px] text-stone-500">
              ** INTERNAL DISPATCH QUERY ONLY. RIGHT CLICK DISABLED. SESSION
              TIMEOUT 15 MIN. **
            </p>
          </div>

          {/* Archaic Dense Table Layout */}
          <div className="space-y-2.5 font-mono text-xs">
            <div
              className={`rounded border p-2 transition-all ${
                isExtracting
                  ? 'border-blue-400 bg-blue-50/70 ring-2 ring-blue-300'
                  : 'border-stone-200 bg-white'
              }`}
            >
              <div className="flex justify-between text-[11px] text-stone-500">
                <span>BILL OF LADING (BOL):</span>
                <span className="font-bold text-stone-900">{data.bol}</span>
              </div>
              <div className="mt-1 flex justify-between text-[11px] text-stone-500">
                <span>CARRIER BOOKING REF:</span>
                <span className="text-stone-800">{data.booking}</span>
              </div>
            </div>

            <div
              className={`rounded border p-2 transition-all ${
                isExtracting
                  ? 'border-blue-400 bg-blue-50/70 ring-2 ring-blue-300'
                  : 'border-stone-200 bg-white'
              }`}
            >
              <span className="block text-[10px] text-stone-500">
                RAW STATUS DISPATCH LOG:
              </span>
              <span className="font-bold text-amber-800">{data.statusRaw}</span>
            </div>

            <div
              className={`grid grid-cols-2 gap-2 rounded border p-2 transition-all ${
                isExtracting
                  ? 'border-blue-400 bg-blue-50/70 ring-2 ring-blue-300'
                  : 'border-stone-200 bg-white'
              }`}
            >
              <div>
                <span className="block text-[10px] text-stone-500">
                  ORIGIN PORT:
                </span>
                <span className="text-stone-800">{data.origin}</span>
              </div>
              <div>
                <span className="block text-[10px] text-stone-500">
                  DESTINATION RAMP:
                </span>
                <span className="text-stone-800">{data.destination}</span>
              </div>
            </div>

            <div
              className={`grid grid-cols-2 gap-2 rounded border p-2 transition-all ${
                isExtracting
                  ? 'border-blue-400 bg-blue-50/70 ring-2 ring-blue-300'
                  : 'border-stone-200 bg-white'
              }`}
            >
              <div>
                <span className="block text-[10px] text-stone-500">
                  EQUIPMENT / CONTAINER:
                </span>
                <span className="text-stone-800">{data.container}</span>
              </div>
              <div>
                <span className="block text-[10px] text-stone-500">
                  TOTAL WEIGHT & VOL:
                </span>
                <span className="text-stone-800">{data.weight}</span>
              </div>
            </div>

            <div
              className={`rounded border p-2 transition-all ${
                isExtracting
                  ? 'border-blue-400 bg-blue-50/70 ring-2 ring-blue-300'
                  : data.charges.includes('$450')
                  ? 'border-rose-200 bg-rose-50/50'
                  : 'border-stone-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-stone-600">
                  ACCESSORIAL CHARGES / DEMURRAGE:
                </span>
                {data.charges.includes('$450') && (
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-rose-600">
                    <ExclamationTriangleIcon className="h-3 w-3" />
                    {isZh ? '有滞港费' : 'Demurrage Alert'}
                  </span>
                )}
              </div>
              <span className="text-stone-800">{data.charges}</span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-stone-500">
            <span>
              {isZh
                ? '⚠️ 传统做法：操作员需手动逐项复制 8 个字段并切换至 CRM'
                : '⚠️ Traditional: Operator spends 12 mins manually copying 8 fields into CRM'}
            </span>
          </div>
        </div>

        {/* Right Column: PortalBridge Chrome Extension Overlay (5 cols) */}
        <div className="flex flex-col rounded-xl border border-blue-200 bg-white p-5 shadow-lg lg:col-span-5">
          {/* Extension Header */}
          <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                <CubeTransparentIcon className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">
                  PortalBridge Extension
                </h5>
                <span className="text-[10px] text-slate-400">
                  v2.4.0 • Target: Internal CRM
                </span>
              </div>
            </div>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
              Ready
            </span>
          </div>

          {/* Action Button */}
          <button
            onClick={handleExtract}
            disabled={isExtracting}
            className={`group relative flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-all ${
              isExtracting
                ? 'cursor-wait bg-blue-400 text-white'
                : 'bg-blue-600 text-white shadow-md hover:bg-blue-700 active:scale-[0.99]'
            }`}
          >
            {isExtracting ? (
              <>
                <ArrowPathIcon className="h-4 w-4 animate-spin" />
                <span>
                  {isZh
                    ? '正在解析 DOM 并同步至 CRM...'
                    : 'Scraping DOM & Pushing to CRM...'}
                </span>
              </>
            ) : isSynced ? (
              <>
                <CheckCircleIcon className="h-4 w-4 text-emerald-300" />
                <span>
                  {isZh
                    ? '已成功同步至 CRM (点击重新提取)'
                    : 'Synced to CRM (Click to Re-extract)'}
                </span>
              </>
            ) : (
              <>
                <SparklesIcon className="h-4 w-4 text-blue-200" />
                <span>
                  {isZh
                    ? '⚡ 一键提取并同步至 CRM / TMS'
                    : '⚡ 1-Click Extract & Push to CRM / TMS'}
                </span>
              </>
            )}
          </button>

          {/* Sync Feedback Status */}
          {isSynced && (
            <div className="mt-3 flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircleIcon className="h-4 w-4 text-emerald-600" />
                {isZh
                  ? '已写入 Salesforce / TMS (耗时 1.1s)'
                  : 'Written to Salesforce / TMS in 1.1s'}
              </span>
              <span className="rounded bg-emerald-200/60 px-1.5 py-0.5 text-[10px] font-bold text-emerald-900">
                200 OK
              </span>
            </div>
          )}

          {/* Extracted Data Inspector / JSON Tabs */}
          <div className="mt-4 flex-1">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-[11px] font-medium text-slate-500">
                {isZh ? '清洗后的规范数据' : 'Normalized Data View'}
              </span>
              <div className="flex gap-2 text-[11px]">
                <button
                  onClick={() => setActiveTab('fields')}
                  className={`font-medium ${
                    activeTab === 'fields'
                      ? 'text-blue-600 underline'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {isZh ? '字段视图' : 'Fields'}
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={() => setActiveTab('json')}
                  className={`font-medium ${
                    activeTab === 'json'
                      ? 'text-blue-600 underline'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  JSON Payload
                </button>
              </div>
            </div>

            {activeTab === 'fields' ? (
              <div className="mt-2.5 space-y-2 text-xs">
                <div className="flex items-center justify-between rounded-md bg-slate-50 px-2.5 py-1.5">
                  <span className="text-slate-500">BOL</span>
                  <span className="font-semibold text-slate-800">
                    {data.bol}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-slate-50 px-2.5 py-1.5">
                  <span className="text-slate-500">
                    {isZh ? '映射 CRM 阶段' : 'Mapped Stage'}
                  </span>
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                    {data.status}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-slate-50 px-2.5 py-1.5">
                  <span className="text-slate-500">
                    {isZh ? '集装箱号' : 'Container'}
                  </span>
                  <span className="font-mono text-slate-800">
                    {data.container.split(' ')[0]}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-slate-50 px-2.5 py-1.5">
                  <span className="text-slate-500">
                    {isZh ? '费用预警' : 'Fee Flag'}
                  </span>
                  <span
                    className={`font-medium ${
                      data.charges.includes('$450')
                        ? 'font-bold text-rose-600'
                        : 'text-slate-600'
                    }`}
                  >
                    {data.charges.includes('$450')
                      ? '$450.00 (Demurrage)'
                      : '$0.00'}
                  </span>
                </div>
              </div>
            ) : (
              <div className="relative mt-2.5">
                <pre className="max-h-[160px] overflow-auto rounded-lg bg-slate-900 p-2.5 font-mono text-[10px] leading-relaxed text-slate-200">
                  {JSON.stringify(
                    {
                      bol_number: data.bol,
                      carrier_booking: data.booking,
                      normalized_status: data.status,
                      origin: data.origin,
                      destination: data.destination,
                      container_id: data.container.split(' ')[0],
                      weight_lbs: data.weight.includes('42,813')
                        ? 42813
                        : 34120,
                      accessorial_alerts: data.charges.includes('$450.00')
                        ? {
                            demurrage_usd: 450.0,
                            flag: 'IMMEDIATE_ACTION',
                          }
                        : { demurrage_usd: 0.0, flag: 'CLEAR' },
                      estimated_arrival_utc: '2026-09-24T21:30:00Z',
                      ingested_via: 'PortalBridge Chrome Extension v2.4',
                    },
                    null,
                    2,
                  )}
                </pre>
                <button
                  onClick={copyPayload}
                  className="absolute right-2 top-2 rounded bg-slate-800 px-2 py-1 text-[10px] text-slate-300 hover:bg-slate-700 hover:text-white"
                >
                  <span className="flex items-center gap-1">
                    <DocumentDuplicateIcon className="h-3 w-3" />
                    {copied
                      ? isZh
                        ? '已复制'
                        : 'Copied'
                      : isZh
                      ? '复制'
                      : 'Copy'}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Bottom Footnote */}
          <div className="mt-4 border-t border-slate-100 pt-2.5 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <CommandLineIcon className="h-3.5 w-3.5 text-blue-500" />
              {isZh
                ? '纯代码 DOM 逆向，100% 确定性，零 AI 幻觉，零服务器转存隐私'
                : '100% Deterministic DOM parsing. Zero AI hallucination, zero server caching.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
