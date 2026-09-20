import { headers } from 'next/headers';
import { solutions as sourceSolutions, Solution } from './solutions';

export type Locale = 'zh' | 'en' | 'de' | 'ja' | 'es';

export const locales: Locale[] = ['zh', 'en', 'de', 'ja', 'es'];

type FlowRow = { label: string; value: string };
type ProcessStep = { title: string; body: string };
type CaseRow = { time: string; title: string; meta: string };

export type Copy = {
  brandAria: string;
  navSolutions: string;
  navCases: string;
  navContact: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLede: string;
  heroCta: string;
  heroBrowse: string;
  heroNote: string;
  flowAria: string;
  flowTitle: string;
  flowId: string;
  flow: FlowRow[];
  flowFootA: string;
  flowFootB: string;
  statementTitle: string;
  statementBody: string;
  checks: string[];
  solutionsEyebrow: string;
  solutionsTitle: string;
  allSolutions: string;
  processEyebrow: string;
  processTitle: string;
  process: ProcessStep[];
  casesEyebrow: string;
  casesTitle: string;
  synthetic: string;
  caseTag: string;
  caseTitle: string;
  caseBody: string;
  caseCta: string;
  caseAria: string;
  caseFile: string;
  caseRows: CaseRow[];
  output: string;
  nextEyebrow: string;
  nextTitle: string;
  nextBody: string;
  footer: string;
  mailSubject: string;
  solutionsIntroEyebrow: string;
  solutionsIntroTitle: string;
  solutionsIntroBody: string;
  backSolutions: string;
  detailProblemLabel: string;
  detailWorth: string;
  detailHow: string;
  detailOutputEyebrow: string;
  detailOutputTitle: string;
  detailCta: string;
  home: string;
  caseInput: string;
  caseProcess: string;
  caseOutput: string;
  caseInputValue: string;
  caseProcessValue: string;
  caseOutputValue: string;
  demoIntro: string;
  demoCta: string;
  contact: string;
};

const zh: Copy = {
  brandAria: 'GXZ 工作流工作室首页',
  navSolutions: '解决方案',
  navCases: '案例',
  navContact: '聊聊你的问题',
  heroEyebrow: '面向小团队的 AI 工作流与前端交付',
  heroTitle: '把麻烦流程，做成能用的工具。',
  heroLede:
    '你不需要再买一个庞大的系统。把一个具体、重复、值得解决的问题交给我，我会把它梳理成可运行的工作流或前端工具。',
  heroCta: '描述一个让你头疼的流程',
  heroBrowse: '看看能解决什么',
  heroNote: '通常 1–2 周交付第一个可用版本',
  flowAria: '从问题到可用工具的工作流示意',
  flowTitle: 'WORKFLOW / FIRST PASS',
  flowId: 'GXZ–001',
  flow: [
    { label: '你的问题', value: '重复、零散、说不清' },
    { label: '我的工作', value: '梳理 + 连接 AI' },
    { label: '交付结果', value: '团队今天就能用' },
  ],
  flowFootA: 'INPUT → CLARIFY → SHIP',
  flowFootB: '小步验证，持续迭代',
  statementTitle: '不是“要不要用 AI”，而是哪些工作不必再手动做。',
  statementBody:
    '很多团队已经在用 AI，却还把资料复制、格式整理、状态同步和重复回复交给人。我的工作是找到那个最值得先处理的环节，做出一个轻量、可解释、有人负责的版本。',
  checks: ['先解决一个明确痛点', '保留必要的人工判断', '交付能继续维护的东西'],
  solutionsEyebrow: '从问题出发',
  solutionsTitle: '你可能正在忍受的工作',
  allSolutions: '查看全部方案',
  processEyebrow: '怎么一起做',
  processTitle: '从一句抱怨，到一个可用版本。',
  process: [
    {
      title: '说清问题',
      body: '用真实素材和现有流程，确认最值得先处理的那一步。',
    },
    {
      title: '先做小版',
      body: '把 AI、数据和页面接起来，尽快让你看到并试用结果。',
    },
    {
      title: '交接使用',
      body: '记录边界、错误状态和维护方法，让工具留在团队里继续工作。',
    },
  ],
  casesEyebrow: '真实工程交付手记',
  casesTitle: '真实环境中的工程交付，经得起推敲的商业回报。',
  synthetic: '脱敏商业交付手记 • FIELD NOTES',
  caseTag: 'No-code 平台生产级改造与容灾',
  caseTitle: '自动重试与健康监控，告别凌晨静默故障。',
  caseBody:
    '重构 Zapier / Make 脆弱流程，增加异常捕获、自动重试与实时告警通道，超出平台能力时无缝接入定制代码逃生舱。',
  caseCta: '查看案例战报',
  caseAria: '工作流容灾处理日志示意',
  caseFile: 'workflow_rescue.log',
  caseRows: [
    { time: '02:14', title: 'Webhook 请求抖动', meta: 'Payload 解析异常' },
    {
      time: '02:14',
      title: '触发自动重试机制',
      meta: '指数退避重试成功 (2/3)',
    },
    { time: '02:15', title: '推送告警与审计日志', meta: '已同步至监控看板' },
  ],
  output: '重试成功 + 告警日志',
  nextEyebrow: '下一步',
  nextTitle: '带着一个真实问题来。',
  nextBody:
    '不确定能不能做也没关系。把背景、现在怎么处理、最烦的地方发给我，我会先回复一个可行的拆解。',
  footer: '为那些经常被忽略的工作而做。',
  mailSubject: '咨询一个工程技术交付问题',
  solutionsIntroEyebrow: '解决方案目录',
  solutionsIntroTitle: '先找到值得被处理的那一小段。',
  solutionsIntroBody:
    '这些不是标准化软件，而是从真实工作痛点出发的小型交付。选择最接近你的情况，看看它可以怎样落地。',
  backSolutions: '返回解决方案',
  detailProblemLabel: '你可能正在遇到',
  detailWorth: '为什么值得做',
  detailHow: '我会怎样处理',
  detailOutputEyebrow: '交付会包含',
  detailOutputTitle: '一个可以继续使用的版本。',
  detailCta: '聊聊这个问题',
  home: '回到首页',
  caseInput: '输入',
  caseProcess: '处理',
  caseOutput: '输出',
  caseInputValue: 'Webhook / 异常请求 / 散乱数据',
  caseProcessValue: '错误捕获 + 自动重试 + 代码逃生舱',
  caseOutputValue: '可审计日志 + 稳定业务链路',
  demoIntro:
    '真实商业环境中的工程交付纪实，展示我们如何帮助海外企业与团队攻克棘手流程瓶颈，实现清晰可量化的商业回报。',
  demoCta: '预约 15 分钟技术评估沟通',
  contact: '联系我',
};

const en: Copy = {
  brandAria: 'GXZ Workflow Studio home',
  navSolutions: 'Solutions',
  navCases: 'Cases',
  navContact: 'Talk through a problem',
  heroEyebrow: 'AI workflows and front-end delivery for small teams',
  heroTitle: 'Turn the work you keep doing by hand into a tool that works.',
  heroLede:
    'You do not need another oversized system. Bring me one specific, repetitive problem and I will shape it into a working workflow or focused front-end tool.',
  heroCta: 'Describe a painful process',
  heroBrowse: 'See what I can solve',
  heroNote: 'A first usable version usually takes 1–2 weeks',
  flowAria: 'Workflow from problem to usable tool',
  flowTitle: 'WORKFLOW / FIRST PASS',
  flowId: 'GXZ–001',
  flow: [
    { label: 'Your problem', value: 'Repetitive, scattered, unclear' },
    { label: 'My work', value: 'Clarify + connect AI' },
    { label: 'The result', value: 'Useful from day one' },
  ],
  flowFootA: 'INPUT → CLARIFY → SHIP',
  flowFootB: 'Validate small, keep improving',
  statementTitle:
    'The question is not whether to use AI. It is which work should stop being manual.',
  statementBody:
    'Many teams already use AI but still ask people to copy information, clean up formats, sync statuses, and rewrite the same replies. I find the highest-leverage step and make a lightweight, explainable version with a clear human owner.',
  checks: [
    'Start with one clear pain point',
    'Keep the judgment that matters',
    'Hand over something maintainable',
  ],
  solutionsEyebrow: 'Start with the problem',
  solutionsTitle: 'The work you may be tolerating',
  allSolutions: 'View all solutions',
  processEyebrow: 'How we work together',
  processTitle: 'From one honest complaint to a usable version.',
  process: [
    {
      title: 'Name the problem',
      body: 'Use real material and the current process to find the step worth fixing first.',
    },
    {
      title: 'Build the small version',
      body: 'Connect AI, data, and a clear interface so you can try the result quickly.',
    },
    {
      title: 'Hand it over',
      body: 'Document boundaries, failure states, and upkeep so the tool stays useful.',
    },
  ],
  casesEyebrow: 'Engineering Field Notes',
  casesTitle: 'Real-World Engineering Field Notes, Quantified Business ROI.',
  synthetic: 'De-Identified Commercial Field Notes',
  caseTag: 'Production-grade Automation Rescue',
  caseTitle:
    'Automated retries and health monitoring to eliminate silent failures.',
  caseBody:
    'Refactor brittle Zapier and Make pipelines with error trapping, automatic retries, and instant alerts, backed by custom-code escape hatches when platform limits hit.',
  caseCta: 'View Field Notes',
  caseAria: 'Workflow rescue processing log',
  caseFile: 'workflow_rescue.log',
  caseRows: [
    {
      time: '02:14',
      title: 'Webhook payload anomaly',
      meta: 'JSON schema mismatch',
    },
    {
      time: '02:14',
      title: 'Automatic retry triggered',
      meta: 'Exponential backoff success (2/3)',
    },
    {
      time: '02:15',
      title: 'Audit log & alert dispatched',
      meta: 'Synced to monitoring dashboard',
    },
  ],
  output: 'Retry resolved + alert recorded',
  nextEyebrow: 'Next step',
  nextTitle: 'Bring one real problem.',
  nextBody:
    'It is fine if you are not sure it can be done. Send the context, how it works today, and the frustrating part. I will reply with a practical first breakdown.',
  footer: 'Built for the overlooked work.',
  mailSubject: 'A question about technical workflow delivery',
  solutionsIntroEyebrow: 'Solution directory',
  solutionsIntroTitle: 'Find the small part worth fixing first.',
  solutionsIntroBody:
    'These are not off-the-shelf products. They are focused deliveries shaped around real working pain. Pick the closest situation and see how it can become real.',
  backSolutions: 'Back to solutions',
  detailProblemLabel: 'You may be dealing with',
  detailWorth: 'Why it is worth doing',
  detailHow: 'How I would approach it',
  detailOutputEyebrow: 'The delivery includes',
  detailOutputTitle: 'A version your team can keep using.',
  detailCta: 'Talk through this problem',
  home: 'Back home',
  caseInput: 'Input',
  caseProcess: 'Process',
  caseOutput: 'Output',
  caseInputValue: 'Webhooks / failed payloads / scattered data',
  caseProcessValue: 'Error trapping + auto retries + code escapes',
  caseOutputValue: 'Audited log + reliable business pipeline',
  demoIntro:
    'Documented engineering deliverables from production environments, illustrating how we eliminate intractable operational bottlenecks with measurable business ROI.',
  demoCta: 'Schedule a 15-Min Scoping Call',
  contact: 'Contact me',
};

const de: Copy = {
  brandAria: 'GXZ Workflow Studio Startseite',
  navSolutions: 'Lösungen',
  navCases: 'Beispiele',
  navContact: 'Problem besprechen',
  heroEyebrow: 'KI-Workflows und Frontend-Umsetzung für kleine Teams',
  heroTitle:
    'Aus manueller Arbeit wird ein Werkzeug, das einfach funktioniert.',
  heroLede:
    'Sie brauchen kein weiteres schweres System. Bringen Sie ein konkretes, wiederkehrendes Problem mit. Ich mache daraus einen funktionierenden Workflow oder ein fokussiertes Frontend-Tool.',
  heroCta: 'Prozess beschreiben',
  heroBrowse: 'Lösungen ansehen',
  heroNote: 'Eine erste nutzbare Version entsteht meist in 1–2 Wochen',
  flowAria: 'Vom Problem zum nutzbaren Werkzeug',
  flowTitle: 'WORKFLOW / ERSTER SCHRITT',
  flowId: 'GXZ–001',
  flow: [
    { label: 'Ihr Problem', value: 'Wiederkehrend, verteilt, unklar' },
    { label: 'Meine Arbeit', value: 'Klären + KI verbinden' },
    { label: 'Das Ergebnis', value: 'Ab Tag eins nutzbar' },
  ],
  flowFootA: 'INPUT → KLÄREN → AUSLIEFERN',
  flowFootB: 'Klein prüfen, weiter verbessern',
  statementTitle:
    'Die Frage ist nicht, ob Sie KI einsetzen. Sondern welche Arbeit nicht länger manuell sein muss.',
  statementBody:
    'Viele Teams nutzen bereits KI und kopieren Informationen, bereinigen Formate, synchronisieren Status und schreiben Antworten trotzdem immer wieder neu. Ich finde den wirksamsten Schritt und baue eine schlanke, nachvollziehbare Lösung mit klarer menschlicher Verantwortung.',
  checks: [
    'Mit einem klaren Schmerzpunkt starten',
    'Wichtige Entscheidungen beim Menschen lassen',
    'Etwas übergeben, das wartbar bleibt',
  ],
  solutionsEyebrow: 'Vom Problem aus gedacht',
  solutionsTitle: 'Arbeit, die Sie vielleicht einfach hinnehmen',
  allSolutions: 'Alle Lösungen ansehen',
  processEyebrow: 'So arbeiten wir zusammen',
  processTitle: 'Von einer ehrlichen Beschwerde zu einer nutzbaren Version.',
  process: [
    {
      title: 'Problem benennen',
      body: 'Mit echten Beispielen und dem aktuellen Ablauf finden wir den ersten sinnvollen Ansatzpunkt.',
    },
    {
      title: 'Kleine Version bauen',
      body: 'KI, Daten und Oberfläche werden verbunden, damit Sie schnell ausprobieren können.',
    },
    {
      title: 'Übergabe vorbereiten',
      body: 'Grenzen, Fehlerfälle und Pflege werden dokumentiert, damit das Tool im Team weiterlebt.',
    },
  ],
  casesEyebrow: 'Praxis-Fallstudien',
  casesTitle:
    'Aus anfälligen No-Code-Abläufen werden stabile Produktionssysteme.',
  synthetic: 'Praxis-Fallstudien (anonymisiert) • FIELD NOTES',
  caseTag: 'Produktionsreife Automatisierung & Notfallrettung',
  caseTitle:
    'Automatische Wiederholungen und Monitoring gegen stille Ausfälle.',
  caseBody:
    'Anfällige Zapier- und Make-Pipelines werden mit Fehlerabfang, automatischen Wiederholungen und Alarmierung ausgestattet – inklusive Code-Ausweichmodulen bei Plattformgrenzen.',
  caseCta: 'Beispiel ansehen',
  caseAria: 'Protokoll der Notfallrettung',
  caseFile: 'workflow_rescue.log',
  caseRows: [
    {
      time: '02:14',
      title: 'Webhook-Anomalie erkannt',
      meta: 'Fehlerhaftes Daten-Payload',
    },
    {
      time: '02:14',
      title: 'Automatischer Neuversuch gestartet',
      meta: 'Erfolgreich nach Backoff (2/3)',
    },
    {
      time: '02:15',
      title: 'Alarm und Log übermittelt',
      meta: 'Im Monitoring-Dashboard erfasst',
    },
  ],
  output: 'Wiederholung erfolgreich + Log erfasst',
  nextEyebrow: 'Nächster Schritt',
  nextTitle: 'Bringen Sie ein echtes Problem mit.',
  nextBody:
    'Sie müssen noch nicht wissen, ob es machbar ist. Schicken Sie Kontext, den heutigen Ablauf und den frustrierenden Teil. Ich antworte mit einer umsetzbaren ersten Struktur.',
  footer: 'Für Arbeit, die sonst übersehen wird.',
  mailSubject: 'Frage zu einem KI-Workflow',
  solutionsIntroEyebrow: 'Lösungsverzeichnis',
  solutionsIntroTitle:
    'Den kleinen Teil finden, der zuerst besser werden sollte.',
  solutionsIntroBody:
    'Keine Standardsoftware, sondern fokussierte Umsetzungen aus echten Arbeitsproblemen. Wählen Sie die Situation, die am ehesten passt.',
  backSolutions: 'Zurück zu den Lösungen',
  detailProblemLabel: 'Das könnte Ihr Problem sein',
  detailWorth: 'Warum sich das lohnt',
  detailHow: 'So würde ich es angehen',
  detailOutputEyebrow: 'Die Übergabe enthält',
  detailOutputTitle: 'Eine Version, die Ihr Team weiter nutzen kann.',
  detailCta: 'Problem besprechen',
  home: 'Zur Startseite',
  caseInput: 'Eingabe',
  caseProcess: 'Verarbeitung',
  caseOutput: 'Ausgabe',
  caseInputValue: 'Webhooks / Fehlerhafte Payloads / Datenfragmente',
  caseProcessValue: 'Fehlerabfang + Reintentos + Code-Module',
  caseOutputValue: 'Auditierbares Log + stabile Geschäftsprozesse',
  demoIntro:
    'Ein fiktiver Ablauf: wiederkehrende und anfällige Arbeit wird in beobachtbare, wartbare Schritte zerlegt.',
  demoCta: 'Ähnlichen Ablauf besprechen',
  contact: 'Kontakt',
};

const ja: Copy = {
  brandAria: 'GXZ Workflow Studio ホーム',
  navSolutions: '解決できること',
  navCases: '事例',
  navContact: '課題を相談する',
  heroEyebrow: '小さなチームのためのAIワークフローとフロントエンド開発',
  heroTitle: '手作業で繰り返している仕事を、動くツールに変える。',
  heroLede:
    '大きなシステムを新しく導入する必要はありません。具体的で、何度も繰り返している課題を一つ教えてください。実際に使えるワークフローや小さな業務ツールにします。',
  heroCta: '困っている業務を相談する',
  heroBrowse: '解決できる課題を見る',
  heroNote: '最初に使える版は通常1〜2週間でお渡しします',
  flowAria: '課題を使えるツールに変える流れ',
  flowTitle: 'WORKFLOW / FIRST PASS',
  flowId: 'GXZ–001',
  flow: [
    { label: '課題', value: '繰り返し・分散・曖昧' },
    { label: '私の仕事', value: '整理 + AIを接続' },
    { label: '成果', value: '今日から使える形' },
  ],
  flowFootA: 'INPUT → CLARIFY → SHIP',
  flowFootB: '小さく試して、育てる',
  statementTitle:
    'AIを使うかどうかではなく、どの作業を手作業のままにしないか。',
  statementBody:
    'AIを使っていても、情報の転記、形式の整理、進捗の共有、同じ返信の書き直しは人が続けています。最初に効果の大きい一箇所を見つけ、理由が分かり、担当者が運用できる形にします。',
  checks: [
    '明確な課題から始める',
    '必要な判断は人に残す',
    '運用を続けられる形で渡す',
  ],
  solutionsEyebrow: '課題から考える',
  solutionsTitle: '我慢しているかもしれない業務',
  allSolutions: 'すべての解決策を見る',
  processEyebrow: '進め方',
  processTitle: '一言の困りごとを、使える形まで。',
  process: [
    {
      title: '課題を言葉にする',
      body: '実際の資料と今の流れを見ながら、最初に直すべき箇所を決めます。',
    },
    {
      title: '小さく作る',
      body: 'AI、データ、画面をつなぎ、早い段階で触って確認できるようにします。',
    },
    {
      title: '運用へ渡す',
      body: 'できること、エラー時の動き、保守方法をまとめてチームに渡します。',
    },
  ],
  casesEyebrow: '実戦納品ノート',
  casesTitle: '脆弱なノーコード自動化を、堅牢な本番システムに変える。',
  synthetic: '匿名化された商用実績 • FIELD NOTES',
  caseTag: 'No-code自動化の堅牢化と障害復旧',
  caseTitle: '自動リトライと常時監視で、深夜のサイレント停止を防ぐ。',
  caseBody:
    'ZapierやMakeの脆弱な処理を再設計し、エラー検知、自動リトライ、即時アラート通知を実装。プラットフォームの限界を超える処理にはカスタムコード逃げ道を組み込みます。',
  caseCta: '事例を見る',
  caseAria: '障害復旧ログの記録',
  caseFile: 'workflow_rescue.log',
  caseRows: [
    {
      time: '02:14',
      title: 'Webhookペイロード異常',
      meta: 'スキーマ不一致を検知',
    },
    {
      time: '02:14',
      title: '自動リトライ開始',
      meta: '指数バックオフ成功 (2/3)',
    },
    {
      time: '02:15',
      title: '監査ログとアラート送信',
      meta: '監視ダッシュボードに同期',
    },
  ],
  output: '自動復旧完了 + ログ記録',
  nextEyebrow: '次の一歩',
  nextTitle: '実際の困りごとを一つ教えてください。',
  nextBody:
    '実現できるか分からなくても大丈夫です。背景、今のやり方、いちばん面倒な点を送ってください。まず実行可能な切り分けを返信します。',
  footer: '見過ごされがちな仕事のために。',
  mailSubject: 'AIワークフローについて相談',
  solutionsIntroEyebrow: '解決策一覧',
  solutionsIntroTitle: '最初に直す価値のある、小さな部分を見つける。',
  solutionsIntroBody:
    '既製品ではなく、実際の業務課題から作る小さな納品物です。近い状況を選び、どのように形にできるかをご覧ください。',
  backSolutions: '解決策一覧へ戻る',
  detailProblemLabel: 'こんな状況かもしれません',
  detailWorth: '取り組む価値',
  detailHow: '進め方',
  detailOutputEyebrow: '納品内容',
  detailOutputTitle: 'チームで使い続けられる形にします。',
  detailCta: 'この課題を相談する',
  home: 'ホームへ戻る',
  caseInput: '入力',
  caseProcess: '処理',
  caseOutput: '出力',
  caseInputValue: 'Webhook / 異常リクエスト / 分散データ',
  caseProcessValue: 'エラー捕捉 + 自動リトライ + コード逃げ道',
  caseOutputValue: '監査可能ログ + 安定稼働パイプライン',
  demoIntro:
    '繰り返し作業や脆弱な連携を、見える状態で保守できるステップに分けたサンプルです。',
  demoCta: '似た業務を相談する',
  contact: 'お問い合わせ',
};

const es: Copy = {
  brandAria: 'Inicio de GXZ Workflow Studio',
  navSolutions: 'Soluciones',
  navCases: 'Casos',
  navContact: 'Cuéntame tu problema',
  heroEyebrow: 'Flujos con IA y desarrollo frontend para equipos pequeños',
  heroTitle:
    'Convierte el trabajo que sigues haciendo a mano en una herramienta que funciona.',
  heroLede:
    'No necesitas otro sistema enorme. Cuéntame un problema concreto y repetitivo, y lo convertiré en un flujo de trabajo o una herramienta frontend enfocada.',
  heroCta: 'Cuéntame un proceso que te frustra',
  heroBrowse: 'Ver qué puedo resolver',
  heroNote: 'La primera versión utilizable suele estar lista en 1–2 semanas',
  flowAria: 'Flujo desde el problema hasta una herramienta utilizable',
  flowTitle: 'WORKFLOW / PRIMERA VERSIÓN',
  flowId: 'GXZ–001',
  flow: [
    { label: 'Tu problema', value: 'Repetitivo, disperso, poco claro' },
    { label: 'Mi trabajo', value: 'Aclarar + conectar IA' },
    { label: 'El resultado', value: 'Útil desde el primer día' },
  ],
  flowFootA: 'INPUT → ACLARAR → ENTREGAR',
  flowFootB: 'Validar en pequeño, mejorar después',
  statementTitle:
    'La pregunta no es si usar IA. Es qué trabajo ya no debería hacerse a mano.',
  statementBody:
    'Muchos equipos ya usan IA, pero siguen copiando información, ordenando formatos, sincronizando estados y reescribiendo las mismas respuestas. Encuentro el paso con más impacto y construyo una versión ligera, explicable y con una persona responsable.',
  checks: [
    'Empezar por un problema concreto',
    'Conservar el criterio humano necesario',
    'Entregar algo que el equipo pueda mantener',
  ],
  solutionsEyebrow: 'Empezar por el problema',
  solutionsTitle: 'El trabajo que quizá estás soportando',
  allSolutions: 'Ver todas las soluciones',
  processEyebrow: 'Cómo trabajamos',
  processTitle: 'De una queja concreta a una versión que se puede usar.',
  process: [
    {
      title: 'Definir el problema',
      body: 'Con ejemplos reales y el proceso actual, encontramos el paso que conviene mejorar primero.',
    },
    {
      title: 'Crear una versión pequeña',
      body: 'Conectamos IA, datos y una interfaz clara para que puedas probar el resultado pronto.',
    },
    {
      title: 'Dejarlo listo para el equipo',
      body: 'Documentamos límites, errores y mantenimiento para que la herramienta siga funcionando.',
    },
  ],
  casesEyebrow: 'Notas de campo',
  casesTitle:
    'Transforma flujos no-code frágiles en sistemas fiables de producción.',
  synthetic: 'Notas de campo comerciales (desidentificadas) • FIELD NOTES',
  caseTag: 'Rescate y robustecimiento no-code',
  caseTitle:
    'Reintentos automáticos y monitorización para evitar caídas silenciosas.',
  caseBody:
    'Reestructura flujos frágiles de Zapier y Make con captura de errores, reintentos automáticos y alertas en tiempo real, con escapes de código a medida ante límites de la plataforma.',
  caseCta: 'Ver el caso',
  caseAria: 'Registro de rescate de flujo',
  caseFile: 'workflow_rescue.log',
  caseRows: [
    {
      time: '02:14',
      title: 'Anomalía en webhook',
      meta: 'Error en formato de datos',
    },
    {
      time: '02:14',
      title: 'Reintento automático activado',
      meta: 'Éxito con retroceso exponencial (2/3)',
    },
    {
      time: '02:15',
      title: 'Alerta y registro enviados',
      meta: 'Sincronizado con panel de control',
    },
  ],
  output: 'Reintento completado + alerta registrada',
  nextEyebrow: 'Siguiente paso',
  nextTitle: 'Trae un problema real.',
  nextBody:
    'No pasa nada si aún no sabes si se puede hacer. Envíame el contexto, cómo lo resolvéis hoy y qué parte más te frustra. Te responderé con un primer desglose práctico.',
  footer: 'Hecho para el trabajo que suele pasar desapercibido.',
  mailSubject: 'Consulta sobre un flujo de trabajo con IA',
  solutionsIntroEyebrow: 'Catálogo de soluciones',
  solutionsIntroTitle: 'Encuentra la pequeña parte que merece mejorar primero.',
  solutionsIntroBody:
    'No son productos estándar. Son entregas enfocadas que parten de problemas reales de trabajo. Elige la situación más cercana y mira cómo puede hacerse realidad.',
  backSolutions: 'Volver a soluciones',
  detailProblemLabel: 'Puede que te esté pasando esto',
  detailWorth: 'Por qué merece la pena',
  detailHow: 'Cómo lo abordaría',
  detailOutputEyebrow: 'La entrega incluye',
  detailOutputTitle: 'Una versión que tu equipo puede seguir usando.',
  detailCta: 'Hablar de este problema',
  home: 'Volver al inicio',
  caseInput: 'Entrada',
  caseProcess: 'Proceso',
  caseOutput: 'Salida',
  caseInputValue: 'Webhooks / cargas fallidas / datos dispersos',
  caseProcessValue: 'Captura de errores + reintentos + escape de código',
  caseOutputValue: 'Registro auditable + flujo estable',
  demoIntro:
    'Un flujo ficticio que muestra cómo convertir tareas repetitivas y frágiles en pasos observables y fáciles de mantener.',
  demoCta: 'Hablar de un flujo parecido',
  contact: 'Contactar',
};

export const copy: Record<Locale, Copy> = { zh, en, de, ja, es };

const localizedSolutions: Record<
  Exclude<Locale, 'zh'>,
  Record<string, Omit<Solution, 'slug'>>
> = {
  en: {
    'automation-rescue': {
      title: 'Production-grade Automation Rescue',
      summary:
        'Solve Zapier and Make scalability bottlenecks and silent failures with engineering-grade retries and custom-code escapes.',
      problem:
        'Automations fail silently overnight leading to lost leads and orders; high-frequency requests hit no-code platform limits.',
      fit: 'For SMBs and operators who rely heavily on Zapier/Make for orders, invoices, and leads, and struggle with recurring failures.',
      approach: [
        'Diagnose fragile triggers and refactor workflow topology',
        'Implement error handling, automatic retries, and instant alerts',
        'Build custom-code escape hatches for complex or throttled steps',
        'Establish an auditable run log and disaster recovery mechanism',
      ],
      output: [
        'Production-grade workflow architecture',
        'Real-time alert and monitoring channels',
        'Custom code extension modules',
        'Recovery and maintenance documentation',
      ],
    },
    'legacy-system-extractor': {
      title: 'Legacy System Browser Data Automation',
      summary:
        'Extract data from API-less legacy portals and sync directly into your internal CRM with custom browser tools.',
      problem:
        'Carrier and vendor portals have no APIs, forcing teams to spend 15+ hours a week manually copy-pasting data across systems.',
      fit: 'For freight brokers, distributors, and operations teams stuck with repetitive manual entry from legacy web portals.',
      approach: [
        'Inspect legacy DOM structures and cross-domain data layers',
        'Build a focused Chrome extension tailored to the workflow',
        'Create automated cleaning pipelines connecting to internal CRMs',
        'Set up DOM-change monitoring and maintenance routines',
      ],
      output: [
        'Custom browser extension',
        'Data cleaning and dispatch pipeline',
        'CRM/ERP field mapping adapter',
        '60-second video demo and setup guide',
      ],
    },
    'agency-whitelabel-dev': {
      title: 'White-label Engineering for Agencies',
      summary:
        'Serve as the hidden technical engineering wing for digital marketing and design agencies to deliver custom web systems.',
      problem:
        'Agencies win client contracts requiring custom portals or API integrations, but full-time in-house engineering is too costly and slow.',
      fit: 'For marketing, SEO, and UI/UX agencies needing a dependable development partner under their own brand and NDA.',
      approach: [
        'Collaborate seamlessly under strict white-label agreements and NDA',
        'Rapidly deliver client portals and web apps with modern tech stacks',
        'Integrate complex 3rd-party APIs, auth, payment, and CRM systems',
        'Provide documented codebases and ongoing retainer support',
      ],
      output: [
        'Client portals and bespoke web applications',
        'Third-party system and API integrations',
        'Clean, documented codebase with deployment guides',
        'Flexible SLA maintenance and engineering support',
      ],
    },
    'specialized-doc-diff': {
      title: 'Specialized Medical & Scientific Doc Review',
      summary:
        'High-precision document review tools with sentence-level source tracing, diff views, and editorial compliance.',
      problem:
        'Standard LLMs output flat text prone to hallucination; specialized medical communications need rigorous citation and verification.',
      fit: 'For medical communications agencies, research groups, and senior medical writers working on non-sensitive public papers.',
      approach: [
        'Build custom split-screen editors with sentence-level highlight diffs',
        'Implement deterministic source tracing and citation validation',
        'Embed domain-specific compliance checks and style guidelines',
        'Enforce strict privacy boundaries excluding patient PHI data',
      ],
      output: [
        'Interactive split-pane citation and diff workspace',
        'Reference cross-verification pipeline',
        'Compliance rule sets and audit checklists',
        'Deployment and integration documentation',
      ],
    },
  },
  de: {
    'automation-rescue': {
      title: 'Produktionsreife Automatisierung & Notfallrettung',
      summary:
        'Zapier- und Make-Engpässe sowie stille Fehler durch professionelle Wiederholungen, Monitoring und Code-Erweiterungen beheben.',
      problem:
        'Automatisierungen schlagen nachts unbemerkt fehl, Leads gehen verloren und No-Code-Plattformen stoßen an funktionale Grenzen.',
      fit: 'Für Unternehmen und Teams, die geschäftskritische Prozesse über Zapier/Make abwickeln und Ausfälle nicht mehr tolerieren können.',
      approach: [
        'Schwachstellen analysieren und Abläufe strukturiert neu aufbauen',
        'Fehlerabfang, automatische Wiederholungen und Benachrichtigungen einrichten',
        'Individuelle Code-Module für komplexe oder blockierte Schritte entwickeln',
        'Protokollierung und Notfallverfahren für reibungslosen Betrieb etablieren',
      ],
      output: [
        'Produktionsreife Workflow-Architektur',
        'Echtzeit-Monitoring und Warnkanäle',
        'Maßgeschneiderte Code-Erweiterungsmodule',
        'Wartungs- und Notfallhandbuch',
      ],
    },
    'legacy-system-extractor': {
      title: 'Browser-Automatisierung für Altsysteme',
      summary:
        'Daten aus veralteten Portalen ohne API erfassen und über maßgeschneiderte Browser-Erweiterungen direkt ins CRM übertragen.',
      problem:
        'Veraltete Logistik- oder Lieferantenportale bieten keine Schnittstelle. Mitarbeiter verbringen jede Woche Stunden mit manuellem Kopieren.',
      fit: 'Für Speditionen, Großhändler und Betriebsteams, die auf veraltete Webportale angewiesen sind und manuelle Tipparbeit reduzieren wollen.',
      approach: [
        'DOM-Struktur und Datenflüsse der Altsysteme analysieren',
        'Spezifische Chrome-Erweiterung für den Erfassungsprozess entwickeln',
        'Automatisierte Datenbereinigung und Anbindung an interne CRMs aufsetzen',
        'Laufende Überwachung bei Änderungen der Webseitenstruktur sicherstellen',
      ],
      output: [
        'Maßgeschneiderte Browser-Erweiterung',
        'Datenbereinigungs- und Transfer-Pipeline',
        'Feld-Mapping-Adapter für CRM/ERP',
        'Kurzanleitung und Installationsleitfaden',
      ],
    },
    'agency-whitelabel-dev': {
      title: 'White-Label-Entwicklung für Agenturen',
      summary:
        'Der unsichtbare technische Partner für Marketing- und Designagenturen zur Umsetzung von Kundenportalen und Web-Systemen.',
      problem:
        'Agenturen erhalten Kundenanfragen für individuelle Webanwendungen oder Integrationen, haben aber kein eigenes Full-Stack-Entwicklerteam.',
      fit: 'Für Agenturen (Marketing, SEO, UI/UX), die Entwicklungsaufträge zuverlässig unter eigenem Namen und NDA abwickeln möchten.',
      approach: [
        'Vollständige White-Label-Zusammenarbeit unter strenger Vertraulichkeit',
        'Schnelle Umsetzung von Kundenportalen mit modernen Frameworks',
        'Zuverlässige Integration von Drittanbieter-APIs, Auth und CRMs',
        'Saubere Code-Übergabe mit flexibler laufender Retainer-Betreuung',
      ],
      output: [
        'Individuelle Kundenportale und Webanwendungen',
        'API- und Systemintegrationsmodule',
        'Dokumentierte Codebasis nach Best Practices',
        'Wartungsvertrag und flexibler technischer Support',
      ],
    },
    'specialized-doc-diff': {
      title: 'Wissenschaftliche & Medizinische Dokumentenprüfung',
      summary:
        'Präzise Textprüfungs- und Vergleichswerkzeuge mit satzweiser Quellenzuordnung und redaktioneller Konformitätsprüfung.',
      problem:
        'Standard-KI erzeugt flachen Fließtext mit Halluzinationen; Fachpublikationen erfordern lückenlose Quellennachweise und exakten Abgleich.',
      fit: 'Für Medical-Communications-Agenturen, Forschungsteams und Fachautoren im Bereich öffentlich zugänglicher Publikationen.',
      approach: [
        'Entwicklung maßgeschneiderter Split-Screen-Editoren mit Satz-Highlighting',
        'Präziser Abgleich von Quellenangaben und Zitationsnachweisen',
        'Integration von Fachregeln und stilistischer Richtlinienprüfung',
        'Strikte Einhaltung von Datenschutzgrenzen ohne Einbindung sensibler Patientendaten',
      ],
      output: [
        'Interaktiver Split-Screen-Editor mit Diff-Ansicht',
        'Pipeline zur Quellennachweiserfassung und -prüfung',
        'Regelwerk für Konformitäts- und Formatprüfungen',
        'Bereitstellungs- und Integrationsunterlagen',
      ],
    },
  },
  ja: {
    'automation-rescue': {
      title: 'No-code自動化の堅牢化と障害復旧',
      summary:
        'ZapierやMakeの拡張限界やサイレント障害を解決し、リトライ・監視・カスタムコードによる逃げ道を構築します。',
      problem:
        '深夜に自動化が静かに停止して受注やリードを逃す、リクエスト増加や複雑なデータ処理でノーコードの上限に達している。',
      fit: 'ZapierやMakeに受発注や顧客対応を大きく依存し、エラーや停止に悩まされている中小企業・運用チーム向けです。',
      approach: [
        '脆弱なノードの特定とワークフロー全体の再設計',
        '例外処理・自動リトライ・即時アラート通知の実装',
        '標準機能で対応できない処理へのカスタムコード逃げ道の追加',
        '運用ログの可視化と障害復旧手順の整備',
      ],
      output: [
        '本番環境に耐えるワークフロー設計',
        'リアルタイム監視と通知チャネル',
        'カスタムコード拡張モジュール',
        '復旧手順書と引き継ぎドキュメント',
      ],
    },
    'legacy-system-extractor': {
      title: 'APIのない既存システムのブラウザ自動化',
      summary:
        '専用ブラウザ拡張と連携パイプラインで、古い取引先ポータルのデータを社内CRMへワンクリック転送します。',
      problem:
        '古い運送・調達ポータルにAPIがなく、スタッフが週に十数時間かけて画面間の手作業コピー＆ペーストを強いられている。',
      fit: '物流・貿易仲介、卸売、APIのない基幹Webシステムからの手入力作業に追われるチーム向けです。',
      approach: [
        '古いポータルのDOM構造と画面遷移の解析',
        '業務に特化した専用Chrome拡張機能の開発',
        '社内CRM/ERPへ安全に送信するデータ自動変換フローの構築',
        '画面仕様変更への検知と定期メンテナンス体制の確立',
      ],
      output: [
        '専用ブラウザ拡張機能',
        'データ整形・連携ワークフロー',
        'CRM/ERPフィールドマッピングアダプタ',
        '操作デモ動画とセットアップ手順書',
      ],
    },
    'agency-whitelabel-dev': {
      title: '制作・マーケティング代理店向けホワイトレーベル開発',
      summary:
        'マーケティングやデザイン代理店の見えない技術部隊として、クライアントポータルやWeb受託開発を代行します。',
      problem:
        'クライアントから受託開発やシステム連携を求められるが、社内に専任エンジニアチームがなく外注管理や納期が不安定。',
      fit: '自社ブランド・秘密保持（NDA）のもとで、開発案件を安心して委託したいマーケティング・デザイン会社向けです。',
      approach: [
        '完全ホワイトレーベルと厳格なNDAによる連携',
        'モダンなフロントエンドとAPIを活用した迅速なプロトタイプ構築',
        '外部API・決済・CRM・認証基盤の安定した統合',
        '保守性の高いコード納品と月額リテイナーによる継続保守',
      ],
      output: [
        'クライアント向け専用ポータルおよびWebアプリ',
        '外部システム・API連携モジュール',
        '仕様書・デプロイ手順を含む整理されたコードベース',
        '柔軟なSLA保守と技術サポート',
      ],
    },
    'specialized-doc-diff': {
      title: '専門医学・学術文書の精密レビューと校正',
      summary:
        'リッチテキスト基盤を活かし、文単位の出典照合、差分表示、形式チェックを備えた高精度ドキュメント支援を提供します。',
      problem:
        '汎用AIはハレーションが多く平坦な文章しか出せないため、厳密な出典確認やフォーマット遵守が必要な専門文書に対応できない。',
      fit: '医学広報代理店（MedComms）、学術編集チーム、専門ライター（※非機密の公開論文・広報原稿に限定）。',
      approach: [
        '文単位のハイライト差分を備えた2画面エディタの構築',
        '確実な出典照合と引用エビデンスの追跡機構の実装',
        '専門フォーマットや表現規制の自動チェックルールの組み込み',
        '患者データ等の機密情報を除外した安全なコンプライアンス設計',
      ],
      output: [
        '2画面対照ハイライトエディタ',
        '文献・出典クロス検証パイプライン',
        '適合性検査ルールセット',
        'オンプレミス・独自環境への導入支援',
      ],
    },
  },
  es: {
    'automation-rescue': {
      title: 'Rescate y robustecimiento no-code',
      summary:
        'Supera los límites y fallos silenciosos de Zapier y Make con reintentos profesionales, monitorización y código a medida.',
      problem:
        'Las automatizaciones fallan en silencio por la noche provocando pérdida de ventas o leads; el alto volumen satura las herramientas no-code.',
      fit: 'Para pymes y operaciones que dependen de Zapier/Make para pedidos y clientes potenciales y sufren averías imprevistas.',
      approach: [
        'Diagnosticar cuellos de botella y reestructurar los flujos',
        'Añadir control de errores, reintentos automáticos y alertas inmediatas',
        'Crear módulos de código a medida para pasos complejos o bloqueados',
        'Configurar registro auditable y protocolo de contingencia',
      ],
      output: [
        'Arquitectura de flujos de nivel de producción',
        'Canales de alertas y monitorización en tiempo real',
        'Módulos de código personalizados',
        'Documentación de mantenimiento y contingencia',
      ],
    },
    'legacy-system-extractor': {
      title: 'Automatización de datos en portales heredados',
      summary:
        'Extrae datos de portales antiguos sin API y sincronízalos directamente con tu CRM mediante extensiones de navegador.',
      problem:
        'Los portales de proveedores no tienen API, lo que obliga al equipo a pasar más de 15 horas semanales copiando datos a mano.',
      fit: 'Para agentes de carga, distribuidores y equipos que dependen de sistemas web obsoletos sin API para su operativa diaria.',
      approach: [
        'Analizar la estructura DOM y capas de datos del portal antiguo',
        'Desarrollar una extensión de Chrome adaptada al proceso específico',
        'Crear flujos automáticos de limpieza y envío al CRM/ERP interno',
        'Monitorizar cambios estructurales en la web para mantenimiento continuo',
      ],
      output: [
        'Extensión de navegador a medida',
        'Flujo de depuración y transferencia de datos',
        'Adaptador de mapeo para CRM/ERP',
        'Demostración en vídeo y guía de instalación',
      ],
    },
    'agency-whitelabel-dev': {
      title: 'Desarrollo white-label para agencias',
      summary:
        'El equipo de ingeniería invisible para agencias de marketing y diseño que necesitan entregar portales y apps web.',
      problem:
        'Las agencias reciben proyectos que requieren integraciones o portales a medida, pero no cuentan con equipo técnico interno propio.',
      fit: 'Para agencias de marketing, SEO y diseño UI/UX que quieren externalizar desarrollo bajo su propia marca y con NDA.',
      approach: [
        'Colaboración marca blanca y estricta confidencialidad (NDA)',
        'Construcción ágil de portales y aplicaciones con tecnologías modernas',
        'Integración segura de APIs de terceros, pagos, CRM y autenticación',
        'Entrega de código limpio y opción de mantenimiento mensual (retainer)',
      ],
      output: [
        'Portales de clientes y aplicaciones web a medida',
        'Módulos de integración con sistemas y APIs externas',
        'Código ordenado y documentado con guía de despliegue',
        'Soporte técnico y mantenimiento con acuerdos de nivel de servicio',
      ],
    },
    'specialized-doc-diff': {
      title: 'Revisión y comparación de textos médicos y científicos',
      summary:
        'Herramientas de revisión de alta precisión con trazabilidad de fuentes frase a frase, vista comparativa y control de estilo.',
      problem:
        'Los modelos de IA estándar generan textos planos con alucinaciones; los textos médicos y científicos exigen verificación exhaustiva de citas.',
      fit: 'Para agencias de comunicación médica, grupos de investigación y redactores científicos (artículos públicos, sin datos confidenciales).',
      approach: [
        'Construcción de editores en dos columnas con resaltado de diferencias',
        'Validación exacta de citas y trazabilidad de fuentes de evidencia',
        'Reglas automáticas de cumplimiento de estilo y normas de publicación',
        'Aislamiento estricto de privacidad para excluir datos confidenciales de pacientes',
      ],
      output: [
        'Editor interactivo con comparación y rastreo de citas',
        'Flujo de verificación cruzada de fuentes bibliográficas',
        'Catálogo de reglas de conformidad editorial',
        'Documentación para integración y despliegue privado',
      ],
    },
  },
};

export function getSolutions(locale: Locale): Solution[] {
  if (locale === 'zh') return sourceSolutions;
  return sourceSolutions.map((solution) => ({
    slug: solution.slug,
    ...localizedSolutions[locale][solution.slug],
  }));
}

export function getLocale(): Locale {
  const requestHeaders = headers();
  const forced = requestHeaders.get('x-locale');
  if (forced && locales.includes(forced as Locale)) return forced as Locale;
  const accepted = requestHeaders.get('accept-language')?.toLowerCase() ?? '';
  const match = locales.find((locale) =>
    accepted.split(',').some((part) => part.trim().startsWith(locale)),
  );
  return match ?? 'en';
}
