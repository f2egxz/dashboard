export type Solution = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  fit: string;
  approach: string[];
  output: string[];
};

export const solutions: Solution[] = [
  { slug: 'customer-knowledge-base', title: '客服知识库助手', summary: '让重复问题先得到一致的答案，再把复杂问题交给人。', problem: '资料散在聊天记录、文档和员工脑子里，客服每天都在重复查找和改写。', fit: '适合有固定问答、产品资料或服务手册的小型客服和运营团队。', approach: ['整理已有资料和高频问题', '建立可检索的知识库', '用 AI 生成回复初稿，保留人工审核'], output: ['知识库结构', '网页问答入口', '回复审核流程', '后续维护说明'] },
  { slug: 'sales-notes-automation', title: '销售记录自动整理', summary: '把聊天、通话和表格里的信息，变成下一步可跟进的清单。', problem: '销售记录格式不一，信息散落在不同工具里，复盘和跟进总是拖到最后。', fit: '适合需要定期汇总客户进展，但还没有专门数据团队的小型销售团队。', approach: ['统一记录字段和输入方式', '自动提取客户意向与风险', '生成日报、周报和待办'], output: ['结构化记录模板', '自动整理工作流', '跟进清单', '前端查看页面'] },
  { slug: 'content-ops', title: '内容批量处理', summary: '把一份素材拆成多个可审核、可发布的内容版本。', problem: '同一份资料需要反复改写成不同平台、不同语气和不同长度的内容。', fit: '适合内容运营、教育和电商团队，且需要人工把关最终表达。', approach: ['定义内容模板和禁用表达', '按渠道批量生成草稿', '集中审核、修改和导出'], output: ['内容处理流程', '批量生成界面', '审核状态', '导出格式'] },
  { slug: 'internal-tools', title: '小型内部工具', summary: '解决那些值得被处理，却不值得做成大系统的内部问题。', problem: '团队已经有明确流程，但现成软件太重，定制开发又排不上时间。', fit: '适合需要一个轻量入口、自动化处理或内部看板的小团队。', approach: ['梳理输入、判断和输出', '做一个可运行的最小版本', '根据真实使用反馈迭代'], output: ['响应式网页', '数据和工作流连接', '权限与错误状态', '部署和交接文档'] },
];
