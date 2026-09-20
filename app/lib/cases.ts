export interface ClientProfile {
  name: string;
  industry: string;
  location: string;
  teamSize: string;
  summary: string;
}

export interface CaseChallenge {
  title: string;
  desc: string;
  financialLoss: string;
}

export interface CaseSolution {
  title: string;
  desc: string;
  keyActions: string[];
}

export interface CaseResults {
  primaryMetric: string;
  primaryLabel: string;
  secondaryMetrics: { value: string; label: string }[];
  summary: string;
}

export interface CaseTestimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface CaseStudy {
  id: string;
  solutionSlug: string;
  solutionTitle: string;
  tag: string;
  title: string;
  summary: string;
  client: ClientProfile;
  challenge: CaseChallenge;
  solution: CaseSolution;
  results: CaseResults;
  techStack: string[];
  testimonial: CaseTestimonial;
}

const casesZh: CaseStudy[] = [
  {
    id: 'chicago-freight-portalbridge',
    solutionSlug: 'legacy-system-extractor',
    solutionTitle: 'PortalBridge',
    tag: '货代物流与 3PL 数据工程',
    title:
      '芝加哥 15 人货代经纪：Chrome 扩展攻克无 API 史前海运门户，年省 $18,000 滞港费',
    summary:
      '为美国货代操作员构建定制 Chrome 扩展，在 0 API 的老旧承运商门户中一键逆向提取提单数据并秒级直推内部 TMS，将单票录入耗时从 8 分钟压缩至 15 秒，错漏率降至 0%。',
    client: {
      name: '中西部某精品跨境货代经纪商 (Freight Brokerage)',
      industry: '海运/空运跨境物流与 3PL 仓储',
      location: '芝加哥, 伊利诺伊州 (Chicago, IL)',
      teamSize: '15 人核心操作团队',
      summary:
        '日均处理 300+ 票海运整柜与拼箱，依赖 4 家主要船司门户查询提单状态。',
    },
    challenge: {
      title: '操作员手工复制粘贴不堪重负，偶发漏看滞港费遭罚单',
      desc: '承运商门户建于 2000 年代初，缺乏任何公共 API，且频繁遭遇 15 分钟会话强制登出。操作团队每日花费 40% 工时在多窗口间搬运提单号、集装箱号与放行状态。由于长时间疲劳录入，每月约有 5% 的错录率，更曾因漏看滞箱截止日期（Last Free Day）单次遭罚款 $1,200。',
      financialLoss:
        '每月约 $5,200 的纯人力损耗 + 每年近 $18,000 的滞港滞箱罚金风险。',
    },
    solution: {
      title: 'PortalBridge 浏览器数据工程：运行于已认证会话的原生扩展',
      desc: '绕过复杂的反爬与 2FA 登录墙，直接在操作员已登录的浏览器标签页内执行 DOM AST 解析，100% 确定性清洗提单数据，并通过安全 Webhook 毫秒直连内部 TMS。',
      keyActions: [
        '逆向分析 4 大船司老门户 DOM 结构，开发自愈型弹性选择器',
        '注入 Chrome 侧边抽屉，操作员点击一次即完成全部字段高亮验证',
        '自动标红滞港费风险（Demurrage Risk）并推送到财务预警管道',
        '数据全部在操作员本机沙箱清洗，不设中间服务器，零隐私泄露',
      ],
    },
    results: {
      primaryMetric: '15 秒 / 票',
      primaryLabel: '单票录入提速（原 8 分钟）',
      secondaryMetrics: [
        { value: '0%', label: '提单错录漏单率' },
        { value: '$18,000+', label: '年化挽回滞港费罚款' },
        { value: '40 小时/周', label: '团队每周释放纯人力工时' },
      ],
      summary:
        '团队在无需升级老旧 TMS 或购买昂贵 UiPath 授权的前提下，彻底消除了数据录入瓶颈。',
    },
    techStack: [
      'Chrome Extension Manifest V3',
      'TypeScript',
      'DOM MutationObserver',
      'TailwindCSS',
      'Custom Webhook Bridge',
    ],
    testimonial: {
      quote:
        '以前每到下午 4 点，操作员都要在一堆又慢又卡的船司网页里痛苦对账。PortalBridge 把几个小时的心智折磨变成了一键完成。第一周它就帮我们抓出了一个即将逾期的滞港箱！',
      author: 'David M.',
      role: '运营与物流总监 (Director of Operations)',
      location: '芝加哥, IL',
    },
  },
  {
    id: 'austin-agency-ghost',
    solutionSlug: 'agency-whitelabel-dev',
    solutionTitle: 'AgencyGhost',
    tag: '欧美代理商白标工程',
    title:
      '奥斯汀 8 人数字营销代理商：隐形白标交付 Next.js 客户门户，单季增收 $38,000',
    summary:
      '作为奥斯汀精品设计与 SEO 代理商的隐形全栈工程后盾，以 100% 白标名义将客户 Figma 设计稿交付为高品质生产级 Web 应用，留存 68% 超额毛利，且零全职研发负担。',
    client: {
      name: '奥斯汀某精品品牌与数字营销代理商 (Digital Agency)',
      industry: '品牌设计、SEO 与增长营销',
      location: '奥斯汀, 德克萨斯州 (Austin, TX)',
      teamSize: '8 人创意与客户成功团队',
      summary:
        '高净值客户频繁提出定制会员门户、CRM 集成与交互前端需求，但代理商无常驻开发。',
    },
    challenge: {
      title: '高薪雇佣全职研发吃掉利润，外包平台散工频频烂尾',
      desc: '代理商的项目订单具有明显的季节性波动（Lumpy Revenue）。若在本地雇佣年薪 $160k+ 的资深工程师，淡季每月的固定薪资开销会迅速吞噬整季利润；此前尝试在 Upwork 找自由职业者，不仅代码质量粗糙，更在交付前夜失联，差点丢失核心企业客户。',
      financialLoss:
        '每月 $15,000+ 的潜在固定薪资负担，或面临散工烂尾导致的 $50,000 客户毁约风险。',
    },
    solution: {
      title:
        'AgencyGhost 隐形白标车道：专属代码库、双向 NDA 与 4h 异步时区重合',
      desc: '我们直接使用代理商的官方 GitHub 组织账号提交生产级 Next.js 14 代码，严格遵守白标准则与保密协议，每日推送 PR，完全以该代理商内部技术团队的名义交付。',
      keyActions: [
        '签署严格双向商业保密协议 (Mutual NDA)，杜绝直连终端客户',
        '建立专有 Slack Connect 频道，实现 4 小时每日高效异步重合',
        '像素级实现 Figma 复杂交互，内置 TypeScript 严苛类型检查',
        '提供全套工程交接文档与录屏，代理商可直接转发客户作为交付报告',
      ],
    },
    results: {
      primaryMetric: '+$38,000',
      primaryLabel: '单季度新增技术交付收入',
      secondaryMetrics: [
        { value: '68%', label: '代理商留存超额毛利率' },
        { value: '0 人', label: '全职研发固定雇佣成本' },
        { value: '100%', label: '按时交付履约率' },
      ],
      summary:
        '代理商按本地 $140/hr 计费，我们按轻量 Sprint 结算，代理商老板轻松化身“具备顶尖工程实力”的技术型 Agency。',
    },
    techStack: [
      'Next.js 14 (App Router)',
      'TypeScript',
      'TailwindCSS',
      'Supabase',
      'GitHub Org White-Label',
    ],
    testimonial: {
      quote:
        '我们敢去竞标一个 $35k 的定制客户系统，完全是因为有 AgencyGhost 在背后托底。代码直接 push 到我们的 GitHub 组织，干净规范。客户以为我们拥有一个世界级的研发部。',
      author: 'Marcus R.',
      role: '代理商创始人 (Founder & Creative Director)',
      location: '奥斯汀, TX',
    },
  },
  {
    id: 'california-dtc-flowrescue',
    solutionSlug: 'automation-rescue',
    solutionTitle: 'FlowRescue',
    tag: '跨境电商与无代码容灾',
    title:
      '加州高客单 DTC 品牌：死信队列挽回凌晨 Stripe 订单断流，消除 $3,200 静默丢单',
    summary:
      '为日处理数千笔交易的加州出海电商重构 Zapier / Make 流水线，注入死信队列熔断、带抖动指数退避重试与定制 Python 逃生舱，彻底杜绝凌晨 API 限流引发的静默丢单。',
    client: {
      name: '加州某高端家居与生活方式 DTC 电商 (E-commerce)',
      industry: 'Shopify 跨境独立站与多渠道分销',
      location: '尔湾, 加利福尼亚州 (Irvine, CA)',
      teamSize: '12 人运营与电商管理团队',
      summary:
        '依托 Stripe 结算，通过 Zapier 将订单与大额线索实时同步至 HubSpot CRM 与 QuickBooks。',
    },
    challenge: {
      title: '凌晨 2 点第三方 API 限流抖动，原生 Zapier 静默挂起',
      desc: '某周六凌晨 02:14，CRM 平台因瞬时高并发返回持续 20 秒的 HTTP 503 限流。Zapier 默认在单次失败后直接终止任务（Silent Halt），且无任何告警通知。整整两天内，后续的 QuickBooks 发票开具与发货指令全部漏跑，直到周一多名客户发邮件质问为何未收到订单，才发现丢失了 4 笔共计 $3,200 的大单。',
      financialLoss:
        '单次故障直接损失 $3,200 订单流失风险 + 品牌声誉严重受损 + 每月 $490 昂贵任务消耗。',
    },
    solution: {
      title:
        'FlowRescue 生产级容灾基建：死信队列 (DLQ) + 智能指数退避 + Slack 审计',
      desc: '在客户自有的 Zapier 与 AWS 账户内搭建容灾拓扑。遭遇 503 或网络微超时自动进入 DLQ 隔离池，按照 2s、8s、30s 阶梯退避重试自愈；同时定制云函数进行批量数据清洗，大幅降低 Task 消耗。',
      keyActions: [
        '搭建死信队列 (Dead-Letter Queue) 熔断与异常数据暂存池',
        '配置带随机抖动 (Jitter) 的指数退避智能重试机制',
        '定制轻量 Python 云函数合并 40 个单步循环，压缩 62% 任务开销',
        '打通 Slack #ops-alerts 渠道，自愈后毫秒级投递结构化审计卡片',
      ],
    },
    results: {
      primaryMetric: '0 丢单',
      primaryLabel: '生产环境故障丢单率',
      secondaryMetrics: [
        { value: '12 秒', label: '瞬时限流平均自愈耗时' },
        { value: '-62%', label: 'Zapier 每月 Task 费用降幅' },
        { value: '99.9%', label: '关键流水线运行可用性 (SLA)' },
      ],
      summary:
        '彻底告别了凌晨被报警电话叫醒的恐慌，创始人早晨在手机 Slack 上即可确认全夜运行健康度。',
    },
    techStack: [
      'AWS Lambda',
      'Python Micro-Worker',
      'Zapier Webhooks & DLQ',
      'Slack Bolt API',
      'HubSpot CRM API',
    ],
    testimonial: {
      quote:
        '在睡梦中因为一条脆弱的 Zapier 步骤无声无息地挂掉、白白丢失几千美金大单，曾是我最大的噩梦。FlowRescue 在上线的第二周就自动修复了一次第三方宕机。这笔改造费用两天就赚回来了。',
      author: 'Elena S.',
      role: '联合创始人兼首席运营官 (Co-Founder & COO)',
      location: '尔湾, CA',
    },
  },
  {
    id: 'boston-medcomms-medidraft',
    solutionSlug: 'specialized-doc-diff',
    solutionTitle: 'MediDraft AI',
    tag: '医学出版与合规比对',
    title:
      '波士顿医学传播机构：句子级证据链穿透，杜绝 AI 虚构引文与 FDA 违规风险',
    summary:
      '为波士顿医学内容团队定制句子级文献溯源与 FDA 宣传合规比对工作台，直接连通 PubMed 官方数据库进行原文穿透校验，将人工初审耗时压缩 80%，完全规避监管罚单风险。',
    client: {
      name: '波士顿某专业医学传播与学术出版服务机构 (Medical Comms)',
      industry: '生物医药科研传播、学术综述与监管申报',
      location: '波士顿, 麻省 (Boston, MA)',
      teamSize: '20+ 医学撰稿人与同行评审编辑',
      summary:
        '每月为跨国药企赞助的研究撰写数十篇临床文献解读、宣传手册与合规综述。',
    },
    challenge: {
      title: '通用大模型频繁幻觉引文，人工逐字溯源耗尽资深医学专家工时',
      desc: '撰稿团队在使用生成式工具起草初稿时，发现模型常生成虚构的 PubMed PMID 引文或断章取义夸大疗效（Overclaims）。若此类内容流入学术期刊或药企合规审查，不仅可能引来 FDA 严厉的警告信（Warning Letter），更会引发数百万美元的赞助合同解除危机。资深编辑不得不耗费 5~6 小时逐句翻阅 PDF 核实，成本极高。',
      financialLoss:
        '资深医学编辑每人每周 20+ 小时机械核对工时 + 潜在的数十万美元合规罚金及客户解约危机。',
    },
    solution: {
      title:
        'MediDraft AI 确定性溯源工作台：句子级引文锚定 + 纯本地 Non-PHI 比对',
      desc: '打造基于真实文献知识图谱的比对系统。文稿中每一句话必须且只能通过 PMID 锚定 PubMed 官方摘要与临床数据；内置 FDA 宣传禁词与断言检测，文本在浏览器本地解析，零隐私泄露风险。',
      keyActions: [
        '直连 NCBI PubMed E-utilities 官方接口，实时抓取经过同行评审的真实摘要',
        '实现句子级双向高亮穿透，点击文稿任一句即刻定位证据原文',
        '基于医学规则 AST 检测绝对化用词（Overclaiming Statements）并标黄告警',
        '纯前端解析架构，零临床患者数据（Non-PHI）上传至云端服务器',
      ],
    },
    results: {
      primaryMetric: '80% 提速',
      primaryLabel: '医学初审耗时压缩（5h -> 45m）',
      secondaryMetrics: [
        { value: '0 虚构', label: '伪造 PubMed 引文发生率' },
        { value: '100%', label: '药企客户合规预审通过率' },
        { value: '$0', label: '第三方数据泄露风险 (Non-PHI)' },
      ],
      summary:
        '编辑部不仅大幅提升了出稿效率，更将其作为向跨国药企客户展示“行业最高合规水准”的竞争壁垒。',
    },
    techStack: [
      'Next.js 14',
      'NCBI PubMed API (E-utilities)',
      'Client-Side AST Parser',
      'TailwindCSS',
      'Text Diffing Engine',
    ],
    testimonial: {
      quote:
        '在医学传播行业，一个虚假的文献引用就能彻底毁掉一家机构在药企客户心中的声誉。MediDraft 让我们拥有了前所未有的确定性，现在我们的合规审核效率比同行快了整整三倍。',
      author: 'Dr. Arthur K.',
      role: '医学总监 (Medical Director, Ph.D.)',
      location: '波士顿, MA',
    },
  },
];

const casesEn: CaseStudy[] = [
  {
    id: 'chicago-freight-portalbridge',
    solutionSlug: 'legacy-system-extractor',
    solutionTitle: 'PortalBridge',
    tag: 'Freight & 3PL Logistics Data Engineering',
    title:
      'Chicago 15-Person Freight Broker: Chrome Extension Automates API-less Carrier Portals, Saving $18,000/yr in Demurrage Fines',
    summary:
      'Built a bespoke Chrome Extension for US freight operators to reverse-extract Bill of Lading (BOL) data from prehistoric carrier portals and sync directly into internal TMS in 15 seconds, slashing human error to 0%.',
    client: {
      name: 'Midwest Boutique Freight Brokerage',
      industry: 'Ocean & Air Freight Forwarding, 3PL Distribution',
      location: 'Chicago, IL',
      teamSize: '15-person core operations desk',
      summary:
        'Processes 300+ ocean containers daily across 4 major carrier websites (MSC, Maersk, Cosco, etc.).',
    },
    challenge: {
      title: 'Manual copy-paste fatigue leading to missed demurrage deadlines',
      desc: 'Carrier portals built in the early 2000s have zero public APIs and enforce aggressive 15-minute session timeouts. Operators spent 40% of their workday copy-pasting container numbers and release statuses. Due to fatigue, a 5% data entry error rate persisted, and missing a Last Free Day deadline once triggered a painful $1,200 demurrage fine.',
      financialLoss:
        'Over $5,200/mo in wasted operator payroll + $18,000/yr in recurring demurrage fine risks.',
    },
    solution: {
      title:
        'PortalBridge Browser Engineering: Native Extension Running in Authenticated Sessions',
      desc: 'Bypassed anti-scraping and 2FA login barriers by executing DOM AST extraction directly within the operator’s active browser tab, normalizing fields, and pushing to internal TMS via secure webhooks in 200ms.',
      keyActions: [
        'Reverse-engineered 4 legacy carrier portal DOM layouts with resilient fallback selectors',
        'Injected native Chrome sidebar drawer for single-click visual field verification',
        'Implemented automatic red-flag highlighting for impending demurrage expiration dates',
        'Processed all data inside operator browser sandbox—zero external proxy servers',
      ],
    },
    results: {
      primaryMetric: '15s / BOL',
      primaryLabel: 'Data Entry Time (Down from 8 mins)',
      secondaryMetrics: [
        { value: '0%', label: 'Data Entry Error Rate' },
        { value: '$18,000+', label: 'Annual Demurrage Fines Protected' },
        { value: '40 hrs/wk', label: 'Operator Hours Liberated' },
      ],
      summary:
        'Eliminated manual copy-paste bottlenecks without paying $25,000/yr for clunky RPA software.',
    },
    techStack: [
      'Chrome Extension Manifest V3',
      'TypeScript',
      'DOM MutationObserver',
      'TailwindCSS',
      'Custom Webhook Bridge',
    ],
    testimonial: {
      quote:
        'Our brokers used to dread 4 PM carrier portal updates. PortalBridge turned 4 hours of mind-numbing data entry into a single click. In the very first week, it caught an expiring container that would have cost us $800 in demurrage.',
      author: 'David M.',
      role: 'Director of Operations',
      location: 'Chicago, IL',
    },
  },
  {
    id: 'austin-agency-ghost',
    solutionSlug: 'agency-whitelabel-dev',
    solutionTitle: 'AgencyGhost',
    tag: 'US Agency White-Label Engineering',
    title:
      'Austin 8-Person Digital Agency: Scaling Next.js Client Portals via Silent White-Label, Capturing $38,000 in Q3',
    summary:
      'Served as the silent full-stack engineering backbone for a boutique Austin design & SEO agency, shipping production Next.js apps under their brand and NDA while capturing a 68% retained gross margin with zero in-house dev payroll.',
    client: {
      name: 'Austin Boutique Brand & Digital Agency',
      industry: 'Design Systems, SEO & Growth Marketing',
      location: 'Austin, TX',
      teamSize: '8-person creative & account team',
      summary:
        'High-ticket clients demanded custom client portals, membership systems, and CRM integrations.',
    },
    challenge: {
      title:
        'Hiring $160k in-house devs crushed margins; freelance platforms caused ghosting',
      desc: 'Agency revenue is inherently lumpy. A full-time US senior dev costs $160k+ plus benefits ($15k/mo fixed overhead), which incinerates cash reserves during slow quarters. Previous attempts to hire on Upwork resulted in unmaintainable spaghetti code and a freelancer disappearing right before client launch.',
      financialLoss:
        '$15,000+/mo in fixed payroll burn, or risking a $50k contract cancellation due to freelancer failure.',
    },
    solution: {
      title:
        'AgencyGhost Silent Lane: Dedicated Repo, Mutual NDA & 4h Timezone Overlap',
      desc: 'Pushed production Next.js 14 code directly under the agency’s GitHub organization with clean daily PRs, adhering to strict white-label protocols and zero direct end-client interaction.',
      keyActions: [
        'Signed mutual NDA guaranteeing 100% white-label confidentiality',
        'Established dedicated Slack Connect channel with 4 hours of daily async overlap',
        'Pixel-perfect translation of Figma components with rigid TypeScript typing',
        'Supplied complete video walkthroughs for agency account managers to present as their own',
      ],
    },
    results: {
      primaryMetric: '+$38,000',
      primaryLabel: 'New Q3 Technical Deliverable Revenue',
      secondaryMetrics: [
        { value: '68%', label: 'Retained Agency Gross Margin' },
        { value: '0', label: 'Full-Time Dev Hires Required' },
        { value: '100%', label: 'On-Time Client Sprint Delivery' },
      ],
      summary:
        'The agency billed clients at $140/hr while partnering with us on fixed sprint pricing, unlocking a massive margin arbitrage.',
    },
    techStack: [
      'Next.js 14 (App Router)',
      'TypeScript',
      'TailwindCSS',
      'Supabase',
      'GitHub Org White-Label',
    ],
    testimonial: {
      quote:
        'We bid on a $35k custom portal project solely because AgencyGhost had our back. The code was pushed directly to our GitHub org, clean and tested. Our client thinks we have a top-tier in-house engineering team.',
      author: 'Marcus R.',
      role: 'Founder & Creative Director',
      location: 'Austin, TX',
    },
  },
  {
    id: 'california-dtc-flowrescue',
    solutionSlug: 'automation-rescue',
    solutionTitle: 'FlowRescue',
    tag: 'E-commerce & No-Code Disaster Recovery',
    title:
      'California High-Volume DTC Brand: Dead-Letter Queue Self-Heals 2 AM Stripe Checkout Jitter, Stopping $3,200 Silent Loss',
    summary:
      'Hardened mission-critical Zapier and Make pipelines for a fast-scaling California e-commerce brand with dead-letter queue circuit breakers, jittered exponential backoff, and Python escape hatches, eliminating midnight lead loss.',
    client: {
      name: 'California Premium Lifestyle DTC Brand',
      industry: 'Shopify E-commerce & Multi-Channel Retail',
      location: 'Irvine, CA',
      teamSize: '12-person operations & growth team',
      summary:
        'Processes thousands of Stripe checkouts, syncing orders to HubSpot CRM and QuickBooks via Zapier.',
    },
    challenge: {
      title:
        '2 AM third-party 503 throttles caused silent Zapier failures and lost deals',
      desc: 'At 02:14 AM on a Saturday, CRM API maintenance returned a 20-second 503 spike. Zapier terminated the execution silently with zero retries and zero alerts. Over the weekend, QuickBooks invoicing and warehouse notifications failed to trigger for 4 enterprise orders worth $3,200 before an irate buyer emailed support on Monday.',
      financialLoss:
        'Direct $3,200 revenue loss risk + severe brand reputation damage + $490/mo in bloated task bills.',
    },
    solution: {
      title:
        'FlowRescue Production Infrastructure: DLQ Circuit Breaker + Exponential Backoff + Slack Digest',
      desc: 'Architected resilience topology directly inside the client’s Zapier and AWS accounts. Transient 503 errors route into DLQ storage, auto-retry with exponential backoff (2s, 8s, 30s), and batch tasks via serverless micro-workers.',
      keyActions: [
        'Built Dead-Letter Queue (DLQ) circuit breaker to capture and isolate failed payloads',
        'Configured randomized jitter exponential backoff retry mechanics',
        'Engineered custom Python micro-worker to collapse 40 loops, slashing task usage by 62%',
        'Dispatched structured morning health digests to Slack #ops-alerts',
      ],
    },
    results: {
      primaryMetric: '0 Drops',
      primaryLabel: 'Production Pipeline Lead Loss Rate',
      secondaryMetrics: [
        { value: '12s', label: 'Average Auto-Healing Duration' },
        { value: '-62%', label: 'Zapier Monthly Task Bill Reduction' },
        { value: '99.9%', label: 'Revenue Pipeline Availability (SLA)' },
      ],
      summary:
        'Eliminated 2 AM emergency troubleshooting; leadership verifies pipeline status with a morning Slack digest.',
    },
    techStack: [
      'AWS Lambda',
      'Python Micro-Worker',
      'Zapier Webhooks & DLQ',
      'Slack Bolt API',
      'HubSpot CRM API',
    ],
    testimonial: {
      quote:
        'Waking up to discover a broken Zapier step that silently lost customer orders for 72 hours was my worst nightmare. FlowRescue paid for itself within the first two weeks of launch.',
      author: 'Elena S.',
      role: 'Co-Founder & COO',
      location: 'Irvine, CA',
    },
  },
  {
    id: 'boston-medcomms-medidraft',
    solutionSlug: 'specialized-doc-diff',
    solutionTitle: 'MediDraft AI',
    tag: 'Medical Communications & Compliance Diffing',
    title:
      'Boston Medical Comms Agency: Sentence-Level Citation Tracing Eliminates AI Hallucinations and FDA Overclaim Risks',
    summary:
      'Built a specialized sentence-level citation verification workbench for a Boston medical communications agency, connecting to live PubMed E-utilities, reducing editorial fact-checking time by 80% with zero Non-PHI exposure.',
    client: {
      name: 'Boston Specialized Medical Communications Firm',
      industry: 'Biopharma Scientific Publishing & Regulatory Comms',
      location: 'Boston, MA',
      teamSize: '20+ medical writers & editorial directors',
      summary:
        'Drafts scientific publication reviews, symposium decks, and regulatory marketing summaries for pharma sponsors.',
    },
    challenge: {
      title:
        'LLM generated phantom citations and overclaims, burning hours of MD editor time',
      desc: 'When using generative tools to draft summaries, writers frequently faced hallucinated PubMed PMIDs and exaggerated efficacy claims. If submitted to journals or pharma compliance teams, phantom citations risk FDA Warning Letters and multimillion-dollar sponsor contract terminations. Senior MD editors had to manually cross-reference PDFs for 5-6 hours per manuscript.',
      financialLoss:
        '20+ hours/week of senior medical editor time + hundreds of thousands in potential regulatory fines.',
    },
    solution: {
      title:
        'MediDraft AI Deterministic Workbench: Sentence-Level Anchor + Client-Side Non-PHI Parsing',
      desc: 'Created an evidence-based diffing workbench where every statement must be anchored to live PubMed PMIDs. Rule-based AST audits detect overclaiming language with zero clinical patient data ever uploaded to the cloud.',
      keyActions: [
        'Direct integration with NCBI PubMed E-utilities for real-time peer-reviewed evidence matching',
        'Sentence-level bidirectional highlighting allowing instant click-to-verify evidence tracing',
        'Deterministic AST rule-engine flagging overclaiming words (e.g. "cures", "superior") with yellow alerts',
        'Client-side execution ensuring 100% Non-PHI compliance with no sensitive text stored',
      ],
    },
    results: {
      primaryMetric: '80% Faster',
      primaryLabel: 'Editorial Review Time (5h -> 45m)',
      secondaryMetrics: [
        { value: '0', label: 'Fabricated Citations Detected' },
        { value: '100%', label: 'Pharma Sponsor Compliance Pass Rate' },
        { value: '$0', label: 'Third-Party Data Leakage Risk (Non-PHI)' },
      ],
      summary:
        'The editorial desk tripled manuscript output while establishing an unassailable compliance reputation with pharma sponsors.',
    },
    techStack: [
      'Next.js 14',
      'NCBI PubMed API (E-utilities)',
      'Client-Side AST Parser',
      'TailwindCSS',
      'Text Diffing Engine',
    ],
    testimonial: {
      quote:
        'In medical communications, a single fabricated reference can destroy an agency’s reputation with pharma sponsors. MediDraft gave our editorial directors complete certainty, and our review workflow is now three times faster.',
      author: 'Dr. Arthur K.',
      role: 'Medical Director, Ph.D.',
      location: 'Boston, MA',
    },
  },
];

export function getCaseStudies(locale: string): CaseStudy[] {
  if (locale === 'zh') {
    return casesZh;
  }
  return casesEn;
}
