# GXZ Workflow Studio

个人 AI 业务解决方案站，面向有重复、零散、暂时没人专门开发的工作流程的小团队和个人业务。

## Routes

- `/{locale}`：解决方案型首页，支持 `zh`、`en`、`de`、`ja`、`es`
- `/{locale}/solutions`：问题目录
- `/{locale}/solutions/[slug]`：问题型 SEO/GEO 页面
- `/{locale}/cases`：合成数据演示项目

首次访问无语言前缀的 URL 时，会优先读取 `site-locale` cookie，其次根据浏览器的 `Accept-Language` 选择语言，默认使用英文；选择器可随时切换语言。

## Local development

```bash
npm install
npm run dev
```

页面中的联系入口目前使用 `mailto:hello@guoxuzhi.email`，正式获客前可替换为表单或预约链接。
