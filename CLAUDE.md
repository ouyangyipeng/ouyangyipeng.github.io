# CLAUDE.md — 项目级 AI 协作指引

## 项目概述

这是 Yipeng Ouyang (欧阳易芃, ouyangyipeng) 的个人主页 + 博客站点，部署在 GitHub Pages，自定义域名 `oyyp.nexa-lang.com`。

基于 Astro 5.x + Tailwind CSS v4 构建，从 devportfolio 模板演化而来，增加了博客系统、Nexa 项目展示区、论文/奖项 section、中英文双语支持。

## 技术栈

- **Framework**: Astro 5.x (静态站点生成)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Package Manager**: pnpm
- **Font**: IBM Plex Mono (@fontsource/ibm-plex-mono, 本地打包，不依赖 CDN)
- **Blog**: Astro Content Collections (Markdown + frontmatter schema)
- **i18n**: 自定义双语言系统（EN: `/`, ZH: `/zh/`）
- **Deploy**: GitHub Actions → GitHub Pages (Node 24, pnpm 11)
- **Domain**: oyyp.nexa-lang.com (CNAME)

## 关键架构决策

1. **模块化配置 + i18n**: 所有内容数据拆分为 9 个独立文件 (`src/config/*.ts`)，每个配置文件使用 `get*()` 函数接受 `Lang` 参数返回对应语言内容。通过 `getSiteConfig(lang)` 聚合。

2. **组件与配置分离**: 组件只负责渲染 `siteConfig` 中的数据，不硬编码任何内容。所有组件接受 `lang` prop。

3. **博客独立化 (Stellar 风格)**: Blog 使用独立 `BlogLayout.astro`，不共享主页 Header/Footer。左右侧边栏 + 卡片式文章列表 + 分类/标签/归档功能。Content Schema 扩展 `category` 和 `cover` 字段。

4. **主题色**: `#6d28d9` (violet-700)，在 `src/config/personal.ts` 的 `accentColor` 字段中定义。

5. **研究方向**: Agentic Systems + SysML（不再使用 compiler/embodied intelligence）

6. **Nexa Section**: 标题为 "Nexa Project"，生态链接为简单列表而非卡片块，包含 homepage (www.nexa-lang.com)

## 修改规则

### 修改内容数据
→ 编辑 `src/config/` 下对应文件（personal, about, projects, experience, education, research, awards, nexa），每个文件有 EN 和 ZH 两个版本

### 修改 UI 翻译文字
→ 编辑 `src/i18n/ui.ts`

### 写新博客
→ 在 `src/content/blog/` 创建 `YYYY-MM-DD-标题.md`，添加标准 frontmatter

### 修改页面结构/顺序
→ 编辑 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 中组件排列顺序

### 修改导航链接
→ 编辑 `src/components/Header.astro`

### 修改样式
→ 编辑 `src/styles/global.css`（全局样式）或组件内 Tailwind class

### 修改部署配置
→ 编辑 `.github/workflows/deploy.yml` 或 `astro.config.mjs`

### 修改域名
→ 编辑 `public/CNAME` 和 `astro.config.mjs` 的 `site` 字段

## 类型系统

所有配置类型定义在 `src/config/types.ts`。新增字段时：
1. 先在 `types.ts` 添加接口字段（可选字段用 `?`）
2. 在对应配置文件中使用（EN 和 ZH 两个版本都要更新）
3. 在对应组件中渲染

## 开发命令

```bash
pnpm install   # 安装依赖
pnpm dev       # 本地开发服务器
pnpm build     # 生产构建
pnpm preview   # 预览构建结果
```

## 禁止事项

- ❌ 不要在 `src/config/index.ts` 中硬编码数据，它只负责聚合
- ❌ 不要删除 `public/CNAME`
- ❌ 不要在组件中硬编码内容（应从 siteConfig 读取）
- ❌ 不要使用 npm 或 yarn（必须用 pnpm）
- ❌ 不要使用 Google Fonts CDN（字体已本地打包）
- ❌ 不要提交 `MODIFICATION_GUIDE.md`（已 gitignore）
- ❌ 不要混用中英文（EN 版本全英文，ZH 版本全中文，技术术语保留英文）
- ❌ 不要使用已废弃的 `Astro.glob`（必须用 `getCollection`）
- ❌ 不要删除 `public/.nojekyll`（GitHub Pages 默认用 Jekyll 处理，会忽略 `_astro` 等以 `_` 开头的目录，导致 CSS 丢失）

## Git 规范

遵循 Conventional Commits：
- `feat(blog): add new post about RL compiler`
- `fix(header): correct nav link order`
- `refactor(config): split projects into sub-categories`
- `docs: update CLAUDE.md with new architecture notes`