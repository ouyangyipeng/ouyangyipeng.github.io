# CLAUDE.md — 项目级 AI 协作指引

## 项目概述

这是 Yipeng Ouyang (欧阳易芃, ouyangyipeng) 的个人主页 + 博客站点，部署在 GitHub Pages，自定义域名 `oyyp.nexa-lang.com`。

基于 Astro 5.x + Tailwind CSS v4 构建，从 devportfolio 模板演化而来，增加了博客系统、Nexa 项目展示区、论文/奖项 section、中英文双语支持。

## 技术栈

- **Framework**: Astro 5.x (静态站点生成)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Package Manager**: pnpm
- **Font**: 正文使用系统无衬线字体；姓名和技术元信息使用本地打包的 IBM Plex Mono，不依赖字体 CDN
- **Blog**: Astro Content Collections (Markdown + frontmatter schema)
- **i18n**: 自定义双语言系统（EN: `/`, ZH: `/zh/`）
- **Deploy**: GitHub Actions → GitHub Pages (Node 24, pnpm 11)
- **Domain**: oyyp.nexa-lang.com (CNAME)

## 关键架构决策

1. **模块化配置 + i18n**: 内容按职责拆分到 `src/config/*.ts`，各内容模块通过 `get*()` 函数接受 `Lang` 参数返回对应语言内容。`getSiteConfig(lang)` 聚合基础配置；`getJourney(lang)` 复用 education、experience 并补充受邀报告，供经历组件直接读取。

2. **组件与配置分离**: 内容组件从 `getSiteConfig(lang)` 或对应配置 getter 读取内容，UI 文案从 `src/i18n/ui.ts` 读取；所有内容组件接受 `lang` prop。项目由 `presentation` 字段分流：`ecosystem` 使用 Nexa 专属展示，`featured` 展示 SLIM-ARC / ASCEND-OK，未设置的项目进入同一开源章节的紧凑列表，避免重复展示。

3. **博客独立布局**: Blog 使用独立 `BlogLayout.astro`，保留左右侧边栏与分类/标签/归档功能，文章列表使用开放排版。与主页共享字体、语义颜色、`ThemeInit` 和 `ThemeToggle`；移动端显示博客导航、语言和主题入口。

4. **主题色**: 品牌紫色 `#6d28d9`，配置见 `src/config/personal.ts`。渲染优先使用 `global.css` 的语义变量：浅色文字强调色为品牌紫，暗色为 `#c2a9ff`；实色填充使用 `--accent-strong`。不要用内联颜色覆盖暗色文本。

5. **研究方向**: Agentic System + AI Infrastructure，保持中英文简介、Hero 与元数据口径一致。个人技能不列 TypeScript 和 Docker；项目使用的技术仍由对应项目配置描述。

6. **主页结构**: Hero 后依次为 01 About、02 Experience（Academia / Industry / Invited Talks / Teaching & Service）、03 Open-Source Projects、04 Research、05 Awards。经历统一由 `Journey.astro` 展示，保留 `#education`、`#service` 锚点；开源区先展示 Nexa 轨道与六项生态链接，再并排展示 SLIM-ARC / ASCEND-OK，最后由 `Projects.astro` 渲染四项无 Logo 的简洁项目条目（ClassFox、YatCC-AI、OYOS、SYSU-CS-baoyan），保留 `#projects`。机构标识使用原图，arcSYSu 使用实验室官网 Logo，底框采用居中正方形。

7. **视觉与动效**: 默认英文、浅色；显式选择的深浅主题记入本地存储，不自动跟随系统深色。保留大字逐层滑入和 `100svh` 全屏首屏；顶栏在 Hero 中隐藏并设为 `inert`，根据 About 的实际位置渐显，回到首屏时隐藏。`HeroParticles.astro` 用 Canvas 绘制装饰粒子与鼠标随动的紫蓝柔光，移动时局部偏转和拖尾，离开后衰减。离屏或页面隐藏时暂停，reduced motion 时静态显示；移动端降低密度。正文以细分隔和明确字号建立层次，共享 `.site-container` 与 `.section-heading`，不堆叠重边框卡片。

## 修改规则

### 修改内容数据
→ 编辑 `src/config/` 下对应文件（personal, about, projects, experience, education, journey, research, awards, nexa），同步 EN 和 ZH 内容；已有教育和经历数据仍在原配置维护，由 journey 聚合

### 修改 UI 翻译文字
→ 编辑 `src/i18n/ui.ts`

### 写新博客
→ 在 `src/content/blog/` 创建 `YYYY-MM-DD-标题.md`，添加标准 frontmatter

### 修改页面结构/顺序
→ 编辑 `src/pages/index.astro` 和 `src/pages/zh/index.astro` 中组件排列顺序

### 修改导航链接
→ 编辑 `src/components/Header.astro`

### 修改样式
→ 编辑 `src/styles/global.css`（全局变量与版心）、`src/styles/blog.css`（博客）或组件内 scoped CSS。颜色引用语义变量；同时检查深浅主题和中英文移动布局。

### 修改部署配置
→ 编辑 `.github/workflows/deploy.yml` 或 `astro.config.mjs`

### 修改域名
→ 编辑 `public/CNAME` 和 `astro.config.mjs` 的 `site` 字段

## 类型系统

共享配置类型定义在 `src/config/types.ts`；Journey 专用类型与 `getJourney()` 同置于 `src/config/journey.ts`。新增字段时：
1. 在对应类型定义中添加接口字段（可选字段用 `?`）
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
- ❌ 不要在组件中硬编码内容（应从 siteConfig 或对应配置 getter 读取）
- ❌ 不要使用 npm 或 yarn（必须用 pnpm）
- ❌ 不要使用 Google Fonts CDN（字体已本地打包）
- ❌ 不要提交 `MODIFICATION_GUIDE.md`（已 gitignore）
- ❌ 不要混用中英文（EN 版本全英文，ZH 版本全中文，技术术语保留英文）
- ❌ 不要使用已废弃的 `Astro.glob`（必须用 `getCollection`）
- ❌ 不要删除 `public/.nojekyll`（GitHub Pages 默认用 Jekyll 处理，会忽略 `_astro` 等以 `_` 开头的目录，导致 CSS 丢失）

## Git 规范

遵循用户当前 Git 规则。生成提交信息或执行已获授权的 commit / amend 前，读取 `/Users/bytedance/.codex/references/commit-message.md`，使用其中的 Pedalboard 模板；规范本身不授予提交权限。
