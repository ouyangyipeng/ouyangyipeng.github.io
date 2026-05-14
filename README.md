# Yipeng Ouyang's Portfolio & Blog

欧阳易芃的个人主页与博客站点，展示项目经历、研究成果、Nexa 生态，以及技术博客文章。

## 🌐 站点信息

- **URL**: [author.nexa-lang.com](https://author.nexa-lang.com)
- **Repository**: [ouyangyipeng/ouyangyipeng.github.io](https://github.com/ouyangyipeng/ouyangyipeng.github.io)
- **Deploy**: GitHub Actions → GitHub Pages (自动部署)
- **Languages**: English (`/`) + Chinese (`/zh/`) with quick switch

## 🛠 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Astro | 5.x | 静态站点生成 |
| Tailwind CSS | v4 | 样式系统 |
| pnpm | 11+ | 包管理 |
| @fontsource/ibm-plex-mono | 5.x | 本地字体（不依赖 CDN） |
| Content Collections | Astro 内置 | 博客系统 |
| i18n | 自定义 | 中英文双语 |

## 📁 项目结构

```
src/
├── config/          # 模块化内容配置（修改内容的主要入口）
│   ├── types.ts     # 类型定义（含 Lang, Paper 新增字段）
│   ├── personal.ts  # 个人信息（getPersonal(lang)）
│   ├── about.ts     # 简介/技能/研究方向
│   ├── projects.ts  # 项目列表
│   ├── experience.ts # 工作经历
│   ├── education.ts # 教育背景
│   ├── research.ts  # 论文（含 pinned, dois, creditRoles）
│   ├── awards.ts    # 奖项
│   ├── nexa.ts      # Nexa 项目配置（含 homepage）
│   └── index.ts     # 聚合为 getSiteConfig(lang)
├── i18n/ui.ts       # 中英文 UI 翻译字符串
├── components/      # Astro UI 组件（均接受 lang prop）
├── layouts/         # 页面布局（BlogLayout）
├── pages/           # 路由页面
│   ├── index.astro  # 英文主页
│   ├── zh/index.astro # 中文主页
│   ├── blog/        # 英文博客
│   └── zh/blog/     # 中文博客
├── content/blog/    # Markdown 博客文章
└── styles/          # 全局样式（Tailwind + @fontsource）
public/              # 静态资源（CNAME, favicon, images）
.github/workflows/   # CI/CD 部署配置
```

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/ouyangyipeng/ouyangyipeng.github.io.git
cd ouyangyipeng.github.io

# 安装依赖
pnpm install

# 本地开发
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## ✏️ 修改内容

所有展示内容通过模块化配置文件管理，无需修改组件代码。每个配置文件接受 `Lang` 参数返回对应语言内容：

| 想修改什么 | 编辑哪个文件 |
|-----------|-------------|
| 个人信息/社交链接 | `src/config/personal.ts` |
| 简介/技能/研究方向 | `src/config/about.ts` |
| 项目列表 | `src/config/projects.ts` |
| 工作经历 | `src/config/experience.ts` |
| 教育背景 | `src/config/education.ts` |
| 论文/研究 | `src/config/research.ts` |
| 奖项荣誉 | `src/config/awards.ts` |
| Nexa 生态 | `src/config/nexa.ts` |
| UI 翻译文字 | `src/i18n/ui.ts` |

## 📝 写博客

在 `src/content/blog/` 下创建 Markdown 文件：

```markdown
---
title: "文章标题"
description: "简短描述"
pubDate: 2026-06-01
tags: ["compiler", "ai"]
---

正文内容...
```

文件名格式：`YYYY-MM-DD-短标题.md`

设置 `draft: true` 可暂不发布。

## 🎨 主题

- **Accent Color**: `#6d28d9` (蓝紫色，与 Nexa 风格一致)
- **Font**: IBM Plex Mono (本地 @fontsource，不依赖 CDN)
- **Research Directions**: Agentic Systems · SysML

修改主题色：编辑 `src/config/personal.ts` 中的 `accentColor` 字段。

## 🔄 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

手动触发：在 GitHub 仓库的 Actions 页面点击 "Run workflow"。

## 📄 文档

- `MODIFICATION_GUIDE.md` — 详细修改指引（本地参考，已 gitignore）
- `ROADMAP.md` — 设计决策与迭代记录
- `CLAUDE.md` — AI 协作指引

## 📜 License

Personal portfolio site. Content © Yipeng Ouyang (欧阳易芃). Template based on [devportfolio](https://github.com/lexswed/devportfolio).