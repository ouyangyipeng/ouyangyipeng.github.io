# CLAUDE.md — 项目级 AI 协作指引

## 项目概述

这是 Fernandez Owen (ouyangyipeng) 的个人主页 + 博客站点，部署在 GitHub Pages，自定义域名 `author.nexa-lang.com`。

基于 Astro 5.x + Tailwind CSS v4 构建，从 devportfolio 模板演化而来，增加了博客系统、Nexa 生态展示区、论文/奖项 section。

## 技术栈

- **Framework**: Astro 5.x (静态站点生成)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Package Manager**: pnpm
- **Font**: IBM Plex Mono (Google Fonts)
- **Icons**: Tabler Icons (SVG inline)
- **Blog**: Astro Content Collections (Markdown + frontmatter schema)
- **Deploy**: GitHub Actions → GitHub Pages
- **Domain**: author.nexa-lang.com (CNAME)

## 关键架构决策

1. **模块化配置**: 所有内容数据拆分为 9 个独立文件 (`src/config/*.ts`)，通过 `index.ts` 聚合为 `siteConfig`。修改内容时只需编辑对应配置文件，无需触碰组件代码。

2. **组件与配置分离**: 组件只负责渲染 `siteConfig` 中的数据，不硬编码任何内容。新增/删除/修改内容项只需改配置文件。

3. **博客零依赖**: 使用 Astro 内置 Content Collections，文章为 Markdown 文件，通过 Git 提交管理。

4. **主题色**: `#6d28d9` (violet-700)，在 `src/config/personal.ts` 的 `accentColor` 字段中定义。

## 修改规则

### 修改内容数据
→ 编辑 `src/config/` 下对应文件（personal, about, projects, experience, education, research, awards, nexa）

### 写新博客
→ 在 `src/content/blog/` 创建 `YYYY-MM-DD-标题.md`，添加标准 frontmatter

### 修改页面结构/顺序
→ 编辑 `src/pages/index.astro` 中组件排列顺序

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
2. 在对应配置文件中使用
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
- ❌ 不要修改 `src/content/config.ts` schema 除非确实需要新 frontmatter 字段
- ❌ 不要提交 `MODIFICATION_GUIDE.md`（已 gitignore）

## Git 规范

遵循 Conventional Commits：
- `feat(blog): add new post about RL compiler`
- `fix(header): correct nav link order`
- `refactor(config): split projects into sub-categories`
- `docs: update CLAUDE.md with new architecture notes`