# GXZ Workflow Studio

GXZ Workflow Studio 是一个面向小团队、独立经营者和非技术业务人员的 AI 业务解决方案站。它不从“我会什么技术”出发，而是从访客正在经历的重复、零散、容易出错或暂时不值得单独开发的问题出发，帮助访客判断问题是否适合用 AI、自动化或轻量工具解决，并发起一次具体的需求沟通。

## 项目作用

网站同时承担三个职责：

1. **问题入口**：把常见的长尾工作流问题整理成可被搜索和理解的页面，例如客户资料散落、销售纪要需要手工整理、内容发布流程重复等。
2. **方案说明**：用问题、影响、解决思路、交付范围和适用边界解释方案，让非技术访客先理解结果，再决定是否联系。
3. **获客入口**：承接搜索引擎、社交媒体短视频、转介绍和直接访问，将访客引导到邮箱沟通，进一步确认需求和验证 PoC。

当前网站是个人服务品牌的第一版，不是 SaaS 产品后台，也不包含登录、数据库或在线下单流程。

## 已实现功能

### 问题导向的解决方案内容

- 首页展示服务定位、典型问题和行动入口。
- 解决方案目录按问题组织内容，而不是按框架、模型或编程语言组织内容。
- 每个解决方案页包含痛点、影响、解决方式、交付内容、适合对象和下一步联系入口。
- 当前内置四个方案主题：
  - `automation-rescue`：No-code 平台生产级改造与容灾（Zapier / Make 扩展与容灾逃生舱）
  - `legacy-system-extractor`：无 API 遗留系统数据自动化（Chrome 扩展穿透与 CRM 自动同步）
  - `agency-whitelabel-dev`：代理商白标工程开发与系统交付（营销与设计代理商的隐形技术后盾）
  - `specialized-doc-diff`：专业科研与医学文档精准润色比对（句子级溯源与双栏合规比对）

### 五种语言和浏览器语言识别

支持简体中文、英语、德语、日语和西班牙语，URL 使用 `zh`、`en`、`de`、`ja`、`es` 标识语言。

访问无语言前缀的地址时，语言选择顺序为：

1. 用户之前选择的 `site-locale` Cookie。
2. 浏览器发送的 `Accept-Language`。
3. 默认使用英语。

用户也可以通过右上角语言选择器随时切换；切换结果会写入 Cookie，并跳转到对应语言的同一路径。

### SEO / GEO 基础能力

- 每种语言都有独立、可分享的 URL。
- 页面提供本地化标题、描述、关键词和 canonical 地址。
- 生成 `sitemap.xml` 和 `robots.txt`。
- 提供动态 Open Graph 分享图和 SVG 品牌图标。
- 解决方案 slug 使用稳定的 ASCII 字符，便于分享、统计和后续扩展。

### 商务化界面

界面采用克制的 Apple 风格：浅色背景、清晰的内容层级、低干扰的边框和统一的品牌 Logo。页面包含响应式布局、键盘焦点状态和移动端适配，联系入口当前使用 `mailto:hello@guoxuzhi.email`。

## 页面和路由

| 路由                         | 作用                                                   |
| ---------------------------- | ------------------------------------------------------ |
| `/`                          | 根据 Cookie 和浏览器语言重定向到对应语言首页           |
| `/{locale}`                  | 本地化首页，`locale` 为 `zh`、`en`、`de`、`ja` 或 `es` |
| `/{locale}/solutions`        | 解决方案目录                                           |
| `/{locale}/solutions/[slug]` | 单个问题的详情页，可被搜索引擎直接收录                 |
| `/{locale}/cases`            | 演示案例页，当前使用合成数据，不代表真实客户结果       |

## 技术栈

- Next.js 14 App Router
- React 18 + TypeScript
- Tailwind CSS 与项目级 CSS 变量
- `next/font` 字体加载
- Node.js `24.x`
- Vercel 部署兼容

## 目录结构

```text
app/
├── page.tsx                    # 根路径语言重定向
├── layout.tsx                  # 全局元数据和字体
├── cases/page.tsx              # 演示案例
├── solutions/
│   ├── page.tsx                # 解决方案目录
│   └── [slug]/page.tsx         # 问题详情页
├── lib/
│   ├── i18n.ts                 # 五种语言的界面文案和方案文案
│   └── solutions.ts            # 方案 slug、标签和页面数据
├── ui/
│   ├── brand-logo.tsx          # 品牌 Logo
│   ├── site-chrome.tsx         # 导航、语言选择器和页脚
│   └── global.css              # 全局样式和设计变量
├── icon.svg                    # 浏览器图标
└── opengraph-image.tsx         # 社交分享图
middleware.ts                  # 语言识别、Cookie 和 URL 重写
PRODUCT.md                     # 产品定位与实现边界
```

仓库中还保留了部分 starter 项目的数据类型和占位数据文件，供后续扩展使用；旧的 dashboard、登录、账单和答题页面路由已经移除，不属于当前产品入口。

## 本地开发

项目要求 Node.js 24.x。使用 nvm 时可以直接执行：

```bash
nvm install
nvm use
npm ci
npm run dev
```

开发服务器默认运行在 `http://localhost:3000`。提交前可运行：

```bash
npm run build          # 生产构建检查
npm run prettier:check # 格式检查
```

生产模式运行：

```bash
npm run build
npm start
```

## Vercel 部署

1. 将 GitHub 仓库导入 Vercel。
2. 构建命令使用 `npm run build`，输出目录保持 Next.js 默认值。
3. 在 Vercel 的 Project Settings 中选择 Node.js 24.x；仓库的 `package.json` 和 `.nvmrc` 也已声明 24.x。
4. 当前版本没有必需的环境变量，直接部署即可。
5. 部署后检查五种语言首页、解决方案详情页、语言切换、分享图和 `sitemap.xml`。

## 如何新增解决方案

1. 在 `app/lib/solutions.ts` 增加稳定的英文 slug 和中文源数据。
2. 在 `app/lib/i18n.ts` 为五种语言补充对应文案；不要直接把中文文本交给机器翻译后提交，需按目标语言重新组织标题和表达。
3. 确认详情页的痛点、影响、交付范围和适用边界都是真实可承诺的内容。
4. 运行 `npm run build`，确认静态生成和 metadata 没有错误。

## 当前边界

- 案例页是演示内容，不能当作真实客户案例、收益数据或 testimonial。
- 联系方式只有邮箱，没有表单、CRM、预约系统或自动回复。
- 方案和多语言文案是静态代码数据，没有 CMS；新增内容需要提交代码并重新部署。
- 没有用户登录、权限、支付、数据库和后端 API。

正式获客前，建议补充真实案例、服务流程、报价方式和可追踪的联系表单。
