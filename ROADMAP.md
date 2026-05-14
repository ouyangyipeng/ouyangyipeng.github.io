# ROADMAP — 设计决策与迭代记录

> 记录项目构建过程中的设计思路、决策过程和变更点。

---

## V1.0 — 初始构建 (2026-05-14)

### 设计目标

将简陋的 GitHub Pages 主页（单 README.md）升级为专业 Portfolio + Blog 站点，基于 devportfolio Astro 模板，融入 Nexa 项目内容。

### 核心设计决策

#### 1. 模块化配置架构

**问题**: devportfolio 原模板将所有配置放在单一 `config.ts` 中，随着内容增长会变得难以维护。

**决策**: 拆分为 9 个独立配置文件 + 类型定义文件 + 聚合入口：

```
src/config/
├── types.ts      → 所有 TypeScript 接口
├── personal.ts   → 个人信息
├── about.ts      → 简介/技能/研究方向
├── projects.ts   → 项目列表
├── experience.ts → 工作经历
├── education.ts  → 教育背景
├── research.ts   → 论文
├── awards.ts     → 奖项
├── nexa.ts       → Nexa 项目配置
└── index.ts      → 聚合为 siteConfig
```

**Trade-off**: 增加了文件数量，但每个文件职责单一、修改时不会误触其他配置。`index.ts` 作为唯一聚合点，组件只需 `import { siteConfig } from "../config"` 即可获取全部数据。

#### 2. Nexa 项目专属 Section

**问题**: Nexa 项目是站点的核心特色，需要比普通项目卡片更突出的展示方式。

**决策**: 创建独立的 `NexaEcosystem.astro` 组件，包含：
- 浅紫色背景区 (`bg-purple-50`) 区别于其他 section
- 介绍文字 + Homepage/GitHub/Paper/Docs 四个行动按钮
- 生态链接以简单列表形式展示（icon + name + description）

**Trade-off**: 增加了一个非通用组件，但确保了 Nexa 内容的视觉突出度和信息完整性。

#### 3. 博客系统 — Astro Content Collections

**问题**: 需要博客功能，但不想引入额外依赖（如 CMS 或数据库）。

**决策**: 使用 Astro 内置的 Content Collections：
- `src/content/config.ts` 定义 schema（title, description, pubDate, tags, draft, image）
- `src/content/blog/*.md` 存放 Markdown 文章
- 博客页面共享主页 Header/Footer，采用现代 timeline 风格

**Trade-off**: Content Collections 是 Astro 原生功能，零额外依赖，但意味着文章只能通过 Git 提交添加（无在线编辑器）。对于科研工作者而言，Git-based workflow 是自然的选择。

#### 4. 主题色 — 蓝紫色 #6d28d9

**问题**: 需要一个与 Nexa 项目风格一致的视觉主题。

**决策**: 使用 `#6d28d9`（Tailwind `violet-700`）作为全局强调色：
- Hero 区名字高亮
- 各 section 标题装饰
- 按钮、链接 hover 状态
- Nexa 生态区背景使用 `bg-purple-50` 作为浅色变体

#### 5. 字体 — IBM Plex Mono (本地打包)

**问题**: Google Fonts CDN 在某些网络环境下不可用，导致字体缺失。

**决策**: 使用 `@fontsource/ibm-plex-mono` npm 包，字体文件随构建打包到 dist，不依赖外部 CDN。

#### 6. 部署 — GitHub Actions → GitHub Pages

**决策**: 使用 GitHub Actions 官方 Pages workflow：
- `pnpm/action-setup@v4` 安装 pnpm 11
- `actions/setup-node@v4` 配置 Node 24
- `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4` 部署
- 触发条件：push to main + manual workflow_dispatch

#### 7. 自定义域名 — author.nexa-lang.com

**决策**: 通过 `public/CNAME` 文件配置，`astro.config.mjs` 中 `site` 字段设置为对应 URL。

#### 8. 新增类型字段

相比 devportfolio 原模板，新增了以下类型字段以适配科研场景：

| 类型 | 新增字段 | 用途 |
|------|---------|------|
| `Project` | `role`, `level`, `leader`, `leaderLink` | 标注项目角色和负责人 |
| `Experience` | `link` | 组织官网链接 |
| `Education` | `link` | 学校官网链接 |
| `Paper` | 整个新类型 + `dois[]`, `creditRoles[]`, `pinned` | 论文展示 |
| `Award` | 整个新类型 | 奖项展示 |
| `NexaConfig` | 整个新类型 + `homepage` | Nexa 项目专属配置 |
| `AboutConfig` | `researchDirections` | 研究方向标签 |
| `SocialLinks` | `orcid` | ORCID 链接 |

#### 9. Section 顺序

主页 section 排列顺序的决策逻辑：

Hero → About → Nexa Project → Research → Experience → Projects → Education → Awards

- **Hero & About** 最先：建立身份认知
- **Nexa Project** 紧随：突出核心项目
- **Research** 在 Experience 前：科研主页优先展示学术成果
- **Experience → Projects → Education → Awards**：补充性信息递减

---

## V1.1 — i18n + 内容修正 (2026-05-14)

### 变更内容

1. **中英文双语版本**: 添加 `/zh/` 路由，所有组件接受 `lang` prop，配置文件改为 `get*()` 函数
2. **Hero 重设计**: 改为 devportfolio 模板风格的大字居中布局（Hello → I'm → title），带 fade-in 动画
3. **字体本地化**: 从 Google Fonts CDN 改为 `@fontsource/ibm-plex-mono` npm 包
4. **名字修正**: EN: "Yipeng Ouyang", ZH: "欧阳易芃"
5. **研究方向修正**: 从 "AI Integrated Compilers + Embodied Intelligence" 改为 "Agentic Systems + SysML"
6. **移除 HCPII Lab**: 从 experience 中删除
7. **添加 ORCID**: `0009-0003-0544-4612`
8. **论文更新**: 置顶 Nexa + SkCC（pinned），新增 GraphSkill/SkillCompiler，移除 GoPTX
9. **Nexa Section**: 标题改为 "Nexa Project"，添加 homepage (www.nexa-lang.com)，生态链接改为简单列表
10. **博客重设计**: 共享 Header/Footer，现代 timeline 风格

### 错误记录

1. **CSS quotes 语法错误**: `quotes: "\201C"\201D"\2018"\2019"` 导致 Tailwind v4 解析器报 "Unterminated string"。修复：移除该属性。
2. **Astro.glob 废弃**: `Astro.glob` 在 Astro 5.x 中已废弃，`pubDate` 返回字符串而非 Date 对象。修复：改用 `getCollection` API。
3. **pnpm-workspace.yaml 缺少 packages 字段**: `pnpm/action-setup@v4` 报错。修复：添加 `packages: ["."]`。
4. **@fontsource 导入路径错误**: `@fontsource/ibm-plex-mono/400` 和 `/800` 不存在。修复：使用 `latin-400`/`latin-500`/`latin-600`/`latin-700` 格式，移除 800 weight（IBM Plex Mono 无此 weight）。
5. **GitHub Pages 缺少 `.nojekyll` 导致 CSS 丢失**: GitHub Pages 默认使用 Jekyll 处理，Jekyll 会忽略所有以 `_` 开头的目录（如 `_astro`），导致 CSS 文件 `/_astro/*.css` 无法被加载。Blog 页面因无内联样式而显示为纯文本。修复：在 `public/` 目录添加空文件 `.nojekyll`，Astro 构建时自动复制到 `dist/`，告诉 GitHub Pages 跳过 Jekyll 处理。

---

## 迁移记录

### Nexa 博客文章迁移 (5篇)

从 `/root/proj/nexa/site/blog/` 的 HTML 文件转换为 Markdown：

| 原文件 | 新文件 | 标题 |
|--------|--------|------|
| `2026-01-conception.html` | `2026-01-15-conception.md` | The Birth of Nexa |
| `2026-02-implementation.html` | `2026-02-20-implementation.md` | First Transpiler |
| `2026-03-opensource.html` | `2026-03-10-opensource.md` | v0.9-alpha Release |
| `2026-04-ecosystem.html` | `2026-04-23-ecosystem.md` | v1.3.7 Milestone |
| `2026-05-harness.html` | `2026-05-06-harness.md` | Harness Native v2.0 Vision |

---

## 待办 / 未来改进

- [ ] 添加 RSS feed（Astro 官方 `@astrojs/rss` 集成）
- [ ] 添加 SEO 优化（sitemap, open-graph tags）
- [ ] 添加暗色模式切换
- [ ] 博客标签分类/筛选功能
- [ ] 项目详情子页面（点击项目卡片进入详情）
- [ ] 论文详情子页面（PDF 链接、abstract 展示）
- [ ] 响应式优化（移动端体验改进）
- [ ] 图片优化（Astro Image 组件 + lazy loading）