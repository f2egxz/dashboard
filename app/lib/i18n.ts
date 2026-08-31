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
  brandAria: 'GXZ 工作流工作室首页', navSolutions: '解决方案', navCases: '案例', navContact: '聊聊你的问题',
  heroEyebrow: '面向小团队的 AI 工作流与前端交付',
  heroTitle: '把麻烦流程，做成能用的工具。',
  heroLede: '你不需要再买一个庞大的系统。把一个具体、重复、值得解决的问题交给我，我会把它梳理成可运行的工作流或前端工具。',
  heroCta: '描述一个让你头疼的流程', heroBrowse: '看看能解决什么', heroNote: '通常 1–2 周交付第一个可用版本',
  flowAria: '从问题到可用工具的工作流示意', flowTitle: 'WORKFLOW / FIRST PASS', flowId: 'GXZ–001',
  flow: [{ label: '你的问题', value: '重复、零散、说不清' }, { label: '我的工作', value: '梳理 + 连接 AI' }, { label: '交付结果', value: '团队今天就能用' }],
  flowFootA: 'INPUT → CLARIFY → SHIP', flowFootB: '小步验证，持续迭代',
  statementTitle: '不是“要不要用 AI”，而是哪些工作不必再手动做。',
  statementBody: '很多团队已经在用 AI，却还把资料复制、格式整理、状态同步和重复回复交给人。我的工作是找到那个最值得先处理的环节，做出一个轻量、可解释、有人负责的版本。',
  checks: ['先解决一个明确痛点', '保留必要的人工判断', '交付能继续维护的东西'],
  solutionsEyebrow: '从问题出发', solutionsTitle: '你可能正在忍受的工作', allSolutions: '查看全部方案',
  processEyebrow: '怎么一起做', processTitle: '从一句抱怨，到一个可用版本。',
  process: [{ title: '说清问题', body: '用真实素材和现有流程，确认最值得先处理的那一步。' }, { title: '先做小版', body: '把 AI、数据和页面接起来，尽快让你看到并试用结果。' }, { title: '交接使用', body: '记录边界、错误状态和维护方法，让工具留在团队里继续工作。' }],
  casesEyebrow: '一个具体例子', casesTitle: '把客服重复问答，变成可控的处理流。', synthetic: '示例项目 / 非真实客户',
  caseTag: '客服知识库助手', caseTitle: '同一份资料，不再被重复查找和改写。',
  caseBody: '把散落在文档、聊天记录和员工经验里的答案整理成知识库，先给出回复初稿，复杂问题再交给人工。', caseCta: '查看案例', caseAria: '客服知识库处理日志示意', caseFile: 'support_inbox.log',
  caseRows: [{ time: '10:24', title: '收到客户问题', meta: '产品 / 退款政策' }, { time: '10:25', title: '匹配知识片段', meta: '置信度 94%' }, { time: '10:31', title: '升级人工', meta: '超出知识库范围' }], output: '回复草稿 + 处理记录',
  nextEyebrow: '下一步', nextTitle: '带着一个真实问题来。', nextBody: '不确定能不能做也没关系。把背景、现在怎么处理、最烦的地方发给我，我会先回复一个可行的拆解。', footer: '为那些经常被忽略的工作而做。', mailSubject: '咨询一个 AI 工作流问题',
  solutionsIntroEyebrow: '解决方案目录', solutionsIntroTitle: '先找到值得被处理的那一小段。', solutionsIntroBody: '这些不是标准化软件，而是从真实工作痛点出发的小型交付。选择最接近你的情况，看看它可以怎样落地。', backSolutions: '返回解决方案', detailProblemLabel: '你可能正在遇到', detailWorth: '为什么值得做', detailHow: '我会怎样处理', detailOutputEyebrow: '交付会包含', detailOutputTitle: '一个可以继续使用的版本。', detailCta: '聊聊这个问题', home: '回到首页',
  caseInput: '输入', caseProcess: '处理', caseOutput: '输出', caseInputValue: '文档 / 对话 / 问题', caseProcessValue: '检索 + 生成 + 人工判断', caseOutputValue: '可发送的回复草稿', demoIntro: '这是一个演示性的处理流，用来说明如何把重复工作拆成可观察、可维护的步骤。', demoCta: '讨论类似流程', contact: '联系我',
};

const en: Copy = {
  brandAria: 'GXZ Workflow Studio home', navSolutions: 'Solutions', navCases: 'Cases', navContact: 'Talk through a problem',
  heroEyebrow: 'AI workflows and front-end delivery for small teams', heroTitle: 'Turn the work you keep doing by hand into a tool that works.',
  heroLede: 'You do not need another oversized system. Bring me one specific, repetitive problem and I will shape it into a working workflow or focused front-end tool.', heroCta: 'Describe a painful process', heroBrowse: 'See what I can solve', heroNote: 'A first usable version usually takes 1–2 weeks',
  flowAria: 'Workflow from problem to usable tool', flowTitle: 'WORKFLOW / FIRST PASS', flowId: 'GXZ–001', flow: [{ label: 'Your problem', value: 'Repetitive, scattered, unclear' }, { label: 'My work', value: 'Clarify + connect AI' }, { label: 'The result', value: 'Useful from day one' }], flowFootA: 'INPUT → CLARIFY → SHIP', flowFootB: 'Validate small, keep improving',
  statementTitle: 'The question is not whether to use AI. It is which work should stop being manual.', statementBody: 'Many teams already use AI but still ask people to copy information, clean up formats, sync statuses, and rewrite the same replies. I find the highest-leverage step and make a lightweight, explainable version with a clear human owner.', checks: ['Start with one clear pain point', 'Keep the judgment that matters', 'Hand over something maintainable'],
  solutionsEyebrow: 'Start with the problem', solutionsTitle: 'The work you may be tolerating', allSolutions: 'View all solutions', processEyebrow: 'How we work together', processTitle: 'From one honest complaint to a usable version.', process: [{ title: 'Name the problem', body: 'Use real material and the current process to find the step worth fixing first.' }, { title: 'Build the small version', body: 'Connect AI, data, and a clear interface so you can try the result quickly.' }, { title: 'Hand it over', body: 'Document boundaries, failure states, and upkeep so the tool stays useful.' }],
  casesEyebrow: 'One concrete example', casesTitle: 'Make repetitive support questions a controlled flow.', synthetic: 'Sample project / fictional client', caseTag: 'Customer knowledge base', caseTitle: 'One source of truth, without the repeated searching and rewriting.', caseBody: 'Turn answers scattered across docs, chats, and team memory into a searchable knowledge base. Draft the easy replies and route the edge cases to a person.', caseCta: 'View the case', caseAria: 'Customer knowledge base processing log', caseFile: 'support_inbox.log', caseRows: [{ time: '10:24', title: 'Question received', meta: 'Product / refund policy' }, { time: '10:25', title: 'Knowledge matched', meta: '94% confidence' }, { time: '10:31', title: 'Escalate to human', meta: 'Outside knowledge base' }], output: 'Reply draft + handling record', nextEyebrow: 'Next step', nextTitle: 'Bring one real problem.', nextBody: 'It is fine if you are not sure it can be done. Send the context, how it works today, and the frustrating part. I will reply with a practical first breakdown.', footer: 'Built for the overlooked work.', mailSubject: 'A question about an AI workflow', solutionsIntroEyebrow: 'Solution directory', solutionsIntroTitle: 'Find the small part worth fixing first.', solutionsIntroBody: 'These are not off-the-shelf products. They are focused deliveries shaped around real working pain. Pick the closest situation and see how it can become real.', backSolutions: 'Back to solutions', detailProblemLabel: 'You may be dealing with', detailWorth: 'Why it is worth doing', detailHow: 'How I would approach it', detailOutputEyebrow: 'The delivery includes', detailOutputTitle: 'A version your team can keep using.', detailCta: 'Talk through this problem', home: 'Back home', caseInput: 'Input', caseProcess: 'Process', caseOutput: 'Output', caseInputValue: 'Docs / conversations / questions', caseProcessValue: 'Retrieve + generate + human judgment', caseOutputValue: 'A reply draft ready to send', demoIntro: 'A fictional flow showing how repetitive work can become observable, maintainable steps.', demoCta: 'Discuss a similar flow', contact: 'Contact me',
};

const de: Copy = {
  brandAria: 'GXZ Workflow Studio Startseite', navSolutions: 'Lösungen', navCases: 'Beispiele', navContact: 'Problem besprechen',
  heroEyebrow: 'KI-Workflows und Frontend-Umsetzung für kleine Teams', heroTitle: 'Aus manueller Arbeit wird ein Werkzeug, das einfach funktioniert.', heroLede: 'Sie brauchen kein weiteres schweres System. Bringen Sie ein konkretes, wiederkehrendes Problem mit. Ich mache daraus einen funktionierenden Workflow oder ein fokussiertes Frontend-Tool.', heroCta: 'Prozess beschreiben', heroBrowse: 'Lösungen ansehen', heroNote: 'Eine erste nutzbare Version entsteht meist in 1–2 Wochen',
  flowAria: 'Vom Problem zum nutzbaren Werkzeug', flowTitle: 'WORKFLOW / ERSTER SCHRITT', flowId: 'GXZ–001', flow: [{ label: 'Ihr Problem', value: 'Wiederkehrend, verteilt, unklar' }, { label: 'Meine Arbeit', value: 'Klären + KI verbinden' }, { label: 'Das Ergebnis', value: 'Ab Tag eins nutzbar' }], flowFootA: 'INPUT → KLÄREN → AUSLIEFERN', flowFootB: 'Klein prüfen, weiter verbessern',
  statementTitle: 'Die Frage ist nicht, ob Sie KI einsetzen. Sondern welche Arbeit nicht länger manuell sein muss.', statementBody: 'Viele Teams nutzen bereits KI und kopieren Informationen, bereinigen Formate, synchronisieren Status und schreiben Antworten trotzdem immer wieder neu. Ich finde den wirksamsten Schritt und baue eine schlanke, nachvollziehbare Lösung mit klarer menschlicher Verantwortung.', checks: ['Mit einem klaren Schmerzpunkt starten', 'Wichtige Entscheidungen beim Menschen lassen', 'Etwas übergeben, das wartbar bleibt'], solutionsEyebrow: 'Vom Problem aus gedacht', solutionsTitle: 'Arbeit, die Sie vielleicht einfach hinnehmen', allSolutions: 'Alle Lösungen ansehen', processEyebrow: 'So arbeiten wir zusammen', processTitle: 'Von einer ehrlichen Beschwerde zu einer nutzbaren Version.', process: [{ title: 'Problem benennen', body: 'Mit echten Beispielen und dem aktuellen Ablauf finden wir den ersten sinnvollen Ansatzpunkt.' }, { title: 'Kleine Version bauen', body: 'KI, Daten und Oberfläche werden verbunden, damit Sie schnell ausprobieren können.' }, { title: 'Übergabe vorbereiten', body: 'Grenzen, Fehlerfälle und Pflege werden dokumentiert, damit das Tool im Team weiterlebt.' }], casesEyebrow: 'Ein konkretes Beispiel', casesTitle: 'Wiederkehrende Supportfragen in einen kontrollierten Ablauf bringen.', synthetic: 'Beispielprojekt / fiktiver Kunde', caseTag: 'Kundenwissensdatenbank', caseTitle: 'Eine verlässliche Wissensquelle, ohne ständiges Suchen und Umschreiben.', caseBody: 'Antworten aus Dokumenten, Chats und Teamwissen werden auffindbar. Einfache Antworten entstehen als Entwurf, Sonderfälle gehen an einen Menschen.', caseCta: 'Beispiel ansehen', caseAria: 'Protokoll der Wissensdatenbank', caseFile: 'support_inbox.log', caseRows: [{ time: '10:24', title: 'Frage eingegangen', meta: 'Produkt / Rückerstattung' }, { time: '10:25', title: 'Wissen gefunden', meta: '94 % Sicherheit' }, { time: '10:31', title: 'An Menschen weitergeben', meta: 'Nicht im Wissensbestand' }], output: 'Antwortentwurf + Vorgangsnotiz', nextEyebrow: 'Nächster Schritt', nextTitle: 'Bringen Sie ein echtes Problem mit.', nextBody: 'Sie müssen noch nicht wissen, ob es machbar ist. Schicken Sie Kontext, den heutigen Ablauf und den frustrierenden Teil. Ich antworte mit einer umsetzbaren ersten Struktur.', footer: 'Für Arbeit, die sonst übersehen wird.', mailSubject: 'Frage zu einem KI-Workflow', solutionsIntroEyebrow: 'Lösungsverzeichnis', solutionsIntroTitle: 'Den kleinen Teil finden, der zuerst besser werden sollte.', solutionsIntroBody: 'Keine Standardsoftware, sondern fokussierte Umsetzungen aus echten Arbeitsproblemen. Wählen Sie die Situation, die am ehesten passt.', backSolutions: 'Zurück zu den Lösungen', detailProblemLabel: 'Das könnte Ihr Problem sein', detailWorth: 'Warum sich das lohnt', detailHow: 'So würde ich es angehen', detailOutputEyebrow: 'Die Übergabe enthält', detailOutputTitle: 'Eine Version, die Ihr Team weiter nutzen kann.', detailCta: 'Problem besprechen', home: 'Zur Startseite', caseInput: 'Eingabe', caseProcess: 'Verarbeitung', caseOutput: 'Ausgabe', caseInputValue: 'Dokumente / Gespräche / Fragen', caseProcessValue: 'Suchen + erzeugen + menschliche Prüfung', caseOutputValue: 'Versandfertiger Antwortentwurf', demoIntro: 'Ein fiktiver Ablauf: wiederkehrende Arbeit wird in beobachtbare, wartbare Schritte zerlegt.', demoCta: 'Ähnlichen Ablauf besprechen', contact: 'Kontakt',
};

const ja: Copy = {
  brandAria: 'GXZ Workflow Studio ホーム', navSolutions: '解決できること', navCases: '事例', navContact: '課題を相談する', heroEyebrow: '小さなチームのためのAIワークフローとフロントエンド開発', heroTitle: '手作業で繰り返している仕事を、動くツールに変える。', heroLede: '大きなシステムを新しく導入する必要はありません。具体的で、何度も繰り返している課題を一つ教えてください。実際に使えるワークフローや小さな業務ツールにします。', heroCta: '困っている業務を相談する', heroBrowse: '解決できる課題を見る', heroNote: '最初に使える版は通常1〜2週間でお渡しします', flowAria: '課題を使えるツールに変える流れ', flowTitle: 'WORKFLOW / FIRST PASS', flowId: 'GXZ–001', flow: [{ label: '課題', value: '繰り返し・分散・曖昧' }, { label: '私の仕事', value: '整理 + AIを接続' }, { label: '成果', value: '今日から使える形' }], flowFootA: 'INPUT → CLARIFY → SHIP', flowFootB: '小さく試して、育てる', statementTitle: 'AIを使うかどうかではなく、どの作業を手作業のままにしないか。', statementBody: 'AIを使っていても、情報の転記、形式の整理、進捗の共有、同じ返信の書き直しは人が続けています。最初に効果の大きい一箇所を見つけ、理由が分かり、担当者が運用できる形にします。', checks: ['明確な課題から始める', '必要な判断は人に残す', '運用を続けられる形で渡す'], solutionsEyebrow: '課題から考える', solutionsTitle: '我慢しているかもしれない業務', allSolutions: 'すべての解決策を見る', processEyebrow: '進め方', processTitle: '一言の困りごとを、使える形まで。', process: [{ title: '課題を言葉にする', body: '実際の資料と今の流れを見ながら、最初に直すべき箇所を決めます。' }, { title: '小さく作る', body: 'AI、データ、画面をつなぎ、早い段階で触って確認できるようにします。' }, { title: '運用へ渡す', body: 'できること、エラー時の動き、保守方法をまとめてチームに渡します。' }], casesEyebrow: '具体例', casesTitle: '繰り返し発生する問い合わせを、管理できる流れにする。', synthetic: 'サンプルプロジェクト / 架空のクライアント', caseTag: 'カスタマーサポートのナレッジベース', caseTitle: '同じ資料を、何度も探して書き直さない。', caseBody: 'ドキュメント、チャット、チームの経験に散らばる回答を整理します。簡単な質問には返信案を出し、判断が必要なものは担当者へ渡します。', caseCta: '事例を見る', caseAria: 'ナレッジベース処理ログ', caseFile: 'support_inbox.log', caseRows: [{ time: '10:24', title: '問い合わせを受信', meta: '製品 / 返金ポリシー' }, { time: '10:25', title: '知識を照合', meta: '信頼度 94%' }, { time: '10:31', title: '担当者へエスカレーション', meta: 'ナレッジ外の質問' }], output: '返信案 + 対応記録', nextEyebrow: '次の一歩', nextTitle: '実際の困りごとを一つ教えてください。', nextBody: '実現できるか分からなくても大丈夫です。背景、今のやり方、いちばん面倒な点を送ってください。まず実行可能な切り分けを返信します。', footer: '見過ごされがちな仕事のために。', mailSubject: 'AIワークフローについて相談', solutionsIntroEyebrow: '解決策一覧', solutionsIntroTitle: '最初に直す価値のある、小さな部分を見つける。', solutionsIntroBody: '既製品ではなく、実際の業務課題から作る小さな納品物です。近い状況を選び、どのように形にできるかをご覧ください。', backSolutions: '解決策一覧へ戻る', detailProblemLabel: 'こんな状況かもしれません', detailWorth: '取り組む価値', detailHow: '進め方', detailOutputEyebrow: '納品内容', detailOutputTitle: 'チームで使い続けられる形にします。', detailCta: 'この課題を相談する', home: 'ホームへ戻る', caseInput: '入力', caseProcess: '処理', caseOutput: '出力', caseInputValue: '資料 / 会話 / 問い合わせ', caseProcessValue: '検索 + 生成 + 人による判断', caseOutputValue: 'そのまま送れる返信案', demoIntro: '繰り返し作業を、見える状態で保守できるステップに分けたサンプルです。', demoCta: '似た業務を相談する', contact: 'お問い合わせ',
};

const es: Copy = {
  brandAria: 'Inicio de GXZ Workflow Studio', navSolutions: 'Soluciones', navCases: 'Casos', navContact: 'Cuéntame tu problema', heroEyebrow: 'Flujos con IA y desarrollo frontend para equipos pequeños', heroTitle: 'Convierte el trabajo que sigues haciendo a mano en una herramienta que funciona.', heroLede: 'No necesitas otro sistema enorme. Cuéntame un problema concreto y repetitivo, y lo convertiré en un flujo de trabajo o una herramienta frontend enfocada.', heroCta: 'Cuéntame un proceso que te frustra', heroBrowse: 'Ver qué puedo resolver', heroNote: 'La primera versión utilizable suele estar lista en 1–2 semanas', flowAria: 'Flujo desde el problema hasta una herramienta utilizable', flowTitle: 'WORKFLOW / PRIMERA VERSIÓN', flowId: 'GXZ–001', flow: [{ label: 'Tu problema', value: 'Repetitivo, disperso, poco claro' }, { label: 'Mi trabajo', value: 'Aclarar + conectar IA' }, { label: 'El resultado', value: 'Útil desde el primer día' }], flowFootA: 'INPUT → ACLARAR → ENTREGAR', flowFootB: 'Validar en pequeño, mejorar después', statementTitle: 'La pregunta no es si usar IA. Es qué trabajo ya no debería hacerse a mano.', statementBody: 'Muchos equipos ya usan IA, pero siguen copiando información, ordenando formatos, sincronizando estados y reescribiendo las mismas respuestas. Encuentro el paso con más impacto y construyo una versión ligera, explicable y con una persona responsable.', checks: ['Empezar por un problema concreto', 'Conservar el criterio humano necesario', 'Entregar algo que el equipo pueda mantener'], solutionsEyebrow: 'Empezar por el problema', solutionsTitle: 'El trabajo que quizá estás soportando', allSolutions: 'Ver todas las soluciones', processEyebrow: 'Cómo trabajamos', processTitle: 'De una queja concreta a una versión que se puede usar.', process: [{ title: 'Definir el problema', body: 'Con ejemplos reales y el proceso actual, encontramos el paso que conviene mejorar primero.' }, { title: 'Crear una versión pequeña', body: 'Conectamos IA, datos y una interfaz clara para que puedas probar el resultado pronto.' }, { title: 'Dejarlo listo para el equipo', body: 'Documentamos límites, errores y mantenimiento para que la herramienta siga funcionando.' }], casesEyebrow: 'Un ejemplo concreto', casesTitle: 'Convertir las preguntas repetidas de soporte en un flujo controlable.', synthetic: 'Proyecto de muestra / cliente ficticio', caseTag: 'Base de conocimiento para soporte', caseTitle: 'Una fuente clara, sin buscar y reescribir lo mismo cada vez.', caseBody: 'Reúne respuestas dispersas en documentos, chats y experiencia del equipo. Prepara borradores para lo sencillo y deriva los casos especiales a una persona.', caseCta: 'Ver el caso', caseAria: 'Registro del procesamiento de la base de conocimiento', caseFile: 'support_inbox.log', caseRows: [{ time: '10:24', title: 'Pregunta recibida', meta: 'Producto / política de reembolsos' }, { time: '10:25', title: 'Conocimiento encontrado', meta: '94 % de confianza' }, { time: '10:31', title: 'Pasar a una persona', meta: 'Fuera de la base de conocimiento' }], output: 'Borrador de respuesta + registro', nextEyebrow: 'Siguiente paso', nextTitle: 'Trae un problema real.', nextBody: 'No pasa nada si aún no sabes si se puede hacer. Envíame el contexto, cómo lo resolvéis hoy y qué parte más te frustra. Te responderé con un primer desglose práctico.', footer: 'Hecho para el trabajo que suele pasar desapercibido.', mailSubject: 'Consulta sobre un flujo de trabajo con IA', solutionsIntroEyebrow: 'Catálogo de soluciones', solutionsIntroTitle: 'Encuentra la pequeña parte que merece mejorar primero.', solutionsIntroBody: 'No son productos estándar. Son entregas enfocadas que parten de problemas reales de trabajo. Elige la situación más cercana y mira cómo puede hacerse realidad.', backSolutions: 'Volver a soluciones', detailProblemLabel: 'Puede que te esté pasando esto', detailWorth: 'Por qué merece la pena', detailHow: 'Cómo lo abordaría', detailOutputEyebrow: 'La entrega incluye', detailOutputTitle: 'Una versión que tu equipo puede seguir usando.', detailCta: 'Hablar de este problema', home: 'Volver al inicio', caseInput: 'Entrada', caseProcess: 'Proceso', caseOutput: 'Salida', caseInputValue: 'Documentos / conversaciones / preguntas', caseProcessValue: 'Buscar + generar + criterio humano', caseOutputValue: 'Borrador listo para enviar', demoIntro: 'Un flujo ficticio que muestra cómo convertir tareas repetitivas en pasos observables y fáciles de mantener.', demoCta: 'Hablar de un flujo parecido', contact: 'Contactar',
};

export const copy: Record<Locale, Copy> = { zh, en, de, ja, es };

const localizedSolutions: Record<Exclude<Locale, 'zh'>, Record<string, Omit<Solution, 'slug'>>> = {
  en: {
    'customer-knowledge-base': { title: 'Customer knowledge base', summary: 'Give repeat questions a consistent first answer, then send the hard ones to a person.', problem: 'Answers live in chats, docs, and people’s memory. Support spends the day searching and rewriting.', fit: 'For small support or operations teams with repeat questions, product material, or service guides.', approach: ['Organise existing material and frequent questions', 'Build a searchable knowledge base', 'Draft AI replies while keeping human review'], output: ['Knowledge structure', 'Web question entry point', 'Reply review flow', 'Maintenance notes'] },
    'sales-notes-automation': { title: 'Sales notes, organised', summary: 'Turn conversations and spreadsheets into a clear list of what to follow up next.', problem: 'Sales notes have no shared format and progress is scattered across tools, so follow-up waits until the last minute.', fit: 'For small sales teams that need regular summaries but do not have a dedicated data team.', approach: ['Standardise fields and input', 'Extract intent and risks', 'Generate daily, weekly, and follow-up lists'], output: ['Structured note template', 'Automation flow', 'Follow-up list', 'Front-end view'] },
    'content-ops': { title: 'Content operations', summary: 'Turn one source into reviewable, publish-ready versions for different channels.', problem: 'The same material is rewritten again and again for each platform, voice, and length.', fit: 'For content, education, and ecommerce teams that still want a person to approve the final wording.', approach: ['Define templates and forbidden phrasing', 'Generate channel-specific drafts', 'Review, edit, and export in one place'], output: ['Content workflow', 'Batch generation view', 'Review states', 'Export formats'] },
    'internal-tools': { title: 'Small internal tools', summary: 'Fix the internal problems worth solving, without turning them into a large system.', problem: 'The process is clear, but existing software is too heavy and custom development keeps getting postponed.', fit: 'For small teams that need a lightweight entry point, automation, or internal dashboard.', approach: ['Map inputs, decisions, and outputs', 'Build a working minimum version', 'Iterate from real usage'], output: ['Responsive web tool', 'Data and workflow connections', 'Permissions and error states', 'Deployment and handover notes'] },
  },
  de: {
    'customer-knowledge-base': { title: 'Kundenwissensdatenbank', summary: 'Wiederkehrende Fragen bekommen eine verlässliche erste Antwort; Sonderfälle gehen an Menschen.', problem: 'Antworten liegen in Chats, Dokumenten und im Erfahrungswissen des Teams. Der Support sucht und formuliert ständig neu.', fit: 'Für kleine Support- und Operations-Teams mit wiederkehrenden Fragen, Produktunterlagen oder Servicehandbüchern.', approach: ['Material und häufige Fragen ordnen', 'Durchsuchbare Wissensbasis aufbauen', 'Antwortentwürfe mit KI erzeugen und menschlich prüfen'], output: ['Struktur der Wissensbasis', 'Web-Eingang für Fragen', 'Prüfprozess für Antworten', 'Hinweise zur Pflege'] },
    'sales-notes-automation': { title: 'Vertriebsnotizen automatisch ordnen', summary: 'Aus Gesprächen und Tabellen wird eine klare Liste für die nächsten Schritte.', problem: 'Notizen haben kein einheitliches Format und Fortschritte liegen in mehreren Tools. Nachfassen passiert zu spät.', fit: 'Für kleine Vertriebsteams, die regelmäßig zusammenfassen müssen, aber kein eigenes Datenteam haben.', approach: ['Felder und Eingaben vereinheitlichen', 'Interesse und Risiken extrahieren', 'Tages-, Wochen- und Aufgabenlisten erzeugen'], output: ['Strukturiertes Notiztemplate', 'Automatisierter Ablauf', 'Nachfassliste', 'Frontend-Ansicht'] },
    'content-ops': { title: 'Content-Prozesse', summary: 'Aus einer Quelle werden prüfbare Versionen für verschiedene Kanäle.', problem: 'Dasselbe Material wird für jede Plattform, Tonalität und Länge immer wieder umgeschrieben.', fit: 'Für Content-, Bildungs- und E-Commerce-Teams mit menschlicher Freigabe am Ende.', approach: ['Templates und unerwünschte Formulierungen definieren', 'Entwürfe je Kanal erzeugen', 'Gemeinsam prüfen, bearbeiten und exportieren'], output: ['Content-Ablauf', 'Ansicht für Stapelverarbeitung', 'Prüfstatus', 'Exportformate'] },
    'internal-tools': { title: 'Kleine interne Werkzeuge', summary: 'Interne Probleme lösen, ohne daraus ein großes System zu machen.', problem: 'Der Ablauf ist klar, aber Standardsoftware ist zu schwer und individuelle Entwicklung wird immer verschoben.', fit: 'Für kleine Teams, die einen leichten Einstieg, Automatisierung oder ein internes Dashboard brauchen.', approach: ['Eingaben, Entscheidungen und Ausgaben abbilden', 'Eine nutzbare Minimalversion bauen', 'Aus echter Nutzung weiterentwickeln'], output: ['Responsives Webtool', 'Verbindungen zu Daten und Workflows', 'Rechte und Fehlerzustände', 'Deployment- und Übergabenotizen'] },
  },
  ja: {
    'customer-knowledge-base': { title: 'カスタマーサポートのナレッジベース', summary: '繰り返しの質問には一貫した回答案を出し、判断が必要なものは担当者へ渡します。', problem: '回答がチャット、資料、担当者の経験に分散し、同じ検索と書き直しが毎日発生しています。', fit: '定型的な問い合わせや製品資料を扱う、小規模なサポート・運用チーム向けです。', approach: ['既存資料と頻出質問を整理する', '検索できるナレッジベースを作る', 'AIの返信案を人が確認できる流れにする'], output: ['ナレッジ構成', 'Web問い合わせ入口', '返信確認フロー', '運用メモ'] },
    'sales-notes-automation': { title: '営業記録の自動整理', summary: '会話や表計算の情報を、次に行うべきフォローリストへ変えます。', problem: '営業記録の形式がばらばらで、複数のツールに情報が散り、振り返りとフォローが後回しになります。', fit: '顧客状況の定期的な集約が必要だが、専任のデータチームがない営業チーム向けです。', approach: ['入力項目と記録方法をそろえる', '顧客の意向とリスクを抽出する', '日報・週報・タスクを生成する'], output: ['構造化された記録テンプレート', '自動整理ワークフロー', 'フォローリスト', '確認用フロントエンド'] },
    'content-ops': { title: 'コンテンツ運用', summary: '一つの素材から、確認して公開できる複数の版を作ります。', problem: '同じ情報を媒体ごとの表現、トーン、長さに合わせて何度も書き直しています。', fit: '最終的な表現は人が確認したい、コンテンツ・教育・ECチーム向けです。', approach: ['テンプレートと避ける表現を定義する', '媒体ごとの下書きをまとめて生成する', '一か所で確認・修正・書き出しを行う'], output: ['コンテンツ処理フロー', '一括生成画面', '確認ステータス', '書き出し形式'] },
    'internal-tools': { title: '小さな社内ツール', summary: '大きなシステムにするほどではない、社内の困りごとを解決します。', problem: '業務の流れは決まっているのに、既存ソフトは重く、個別開発は後回しになっています。', fit: '軽い入力画面、自動処理、社内ダッシュボードが必要な小規模チーム向けです。', approach: ['入力・判断・出力を整理する', '動く最小版を作る', '実際の利用状況から改善する'], output: ['レスポンシブなWebツール', 'データとワークフローの接続', '権限とエラー時の動き', '公開・引き継ぎメモ'] },
  },
  es: {
    'customer-knowledge-base': { title: 'Base de conocimiento para soporte', summary: 'Da una primera respuesta consistente a las preguntas repetidas y deriva los casos complejos a una persona.', problem: 'Las respuestas viven en chats, documentos y la memoria del equipo. Soporte pasa el día buscando y reescribiendo.', fit: 'Para equipos pequeños de soporte u operaciones con preguntas frecuentes y documentación de producto o servicio.', approach: ['Ordenar el material y las preguntas frecuentes', 'Crear una base de conocimiento consultable', 'Generar borradores con IA manteniendo la revisión humana'], output: ['Estructura de conocimiento', 'Entrada web para preguntas', 'Flujo de revisión de respuestas', 'Notas de mantenimiento'] },
    'sales-notes-automation': { title: 'Organización automática de notas comerciales', summary: 'Convierte conversaciones y hojas de cálculo en una lista clara de próximos seguimientos.', problem: 'Las notas no tienen un formato común y el progreso está repartido entre herramientas. El seguimiento llega tarde.', fit: 'Para equipos comerciales pequeños que necesitan resúmenes periódicos sin contar con un equipo de datos.', approach: ['Unificar campos y forma de entrada', 'Extraer intención y riesgos', 'Generar listas diarias, semanales y de seguimiento'], output: ['Plantilla de notas estructuradas', 'Flujo automatizado', 'Lista de seguimientos', 'Vista frontend'] },
    'content-ops': { title: 'Operaciones de contenido', summary: 'Convierte una fuente en versiones revisables y listas para publicar en distintos canales.', problem: 'El mismo material se reescribe para cada plataforma, tono y extensión.', fit: 'Para equipos de contenido, educación y ecommerce que quieren aprobar personalmente el texto final.', approach: ['Definir plantillas y expresiones prohibidas', 'Generar borradores por canal', 'Revisar, editar y exportar desde un mismo lugar'], output: ['Flujo de contenido', 'Vista de generación por lotes', 'Estados de revisión', 'Formatos de exportación'] },
    'internal-tools': { title: 'Pequeñas herramientas internas', summary: 'Resuelve los problemas internos que merecen atención, sin convertirlos en un sistema enorme.', problem: 'El proceso está claro, pero el software existente es demasiado pesado y el desarrollo a medida se sigue posponiendo.', fit: 'Para equipos pequeños que necesitan una entrada ligera, automatización o un panel interno.', approach: ['Mapear entradas, decisiones y salidas', 'Construir una primera versión funcional', 'Iterar a partir del uso real'], output: ['Herramienta web responsive', 'Conexiones con datos y flujos', 'Permisos y estados de error', 'Notas de despliegue y entrega'] },
  },
};

export function getSolutions(locale: Locale): Solution[] {
  if (locale === 'zh') return sourceSolutions;
  return sourceSolutions.map((solution) => ({ slug: solution.slug, ...localizedSolutions[locale][solution.slug] }));
}

export function getLocale(): Locale {
  const requestHeaders = headers();
  const forced = requestHeaders.get('x-locale');
  if (forced && locales.includes(forced as Locale)) return forced as Locale;
  const accepted = requestHeaders.get('accept-language')?.toLowerCase() ?? '';
  const match = locales.find((locale) => accepted.split(',').some((part) => part.trim().startsWith(locale)));
  return match ?? 'en';
}
