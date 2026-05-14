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
├── nexa.ts       → Nexa 生态专属
└── index.ts      → 聚合为 siteConfig
```

**Trade-off**: 增加了文件数量，但每个文件职责单一、修改时不会误触其他配置。`index.ts` 作为唯一聚合点，组件只需 `import { siteConfig } from "../config"` 即可获取全部数据。

#### 2. Nexa 生态专属 Section

**问题**: Nexa 项目是站点的核心特色，需要比普通项目卡片更突出的展示方式。

**决策**: 创建独立的 `NexaEcosystem.astro` 组件，包含：
- 浅紫色背景区 (`bg-purple-50`) 区别于其他 section
- 左侧：项目介绍 + GitHub/Paper/Docs 三个行动按钮
- 右侧：3×2 网格展示 6 个生态链接（Docs/SkCC/evobench/epicontext/Org/Author）

**Trade-off**: 增加了一个非通用组件，但确保了 Nexa 内容的视觉突出度和信息完整性。

#### 3. 博客系统 — Astro Content Collections

**问题**: 需要博客功能，但不想引入额外依赖（如 CMS 或数据库）。

**决策**: 使用 Astro 内置的 Content Collections：
- `src/content/config.ts` 定义 schema（title, description, pubDate, tags, draft, image）
- `src/content/blog/*.md` 存放 Markdown 文章
- `src/pages/blog/index.astro` 列表页（按日期排序，过滤 draft）
- `src/pages/blog/[...slug].astro` 详情页（动态路由）
- `src/layouts/BlogLayout.astro` 文章布局（含 sticky header、标签、日期）

**Trade-off**: Content Collections 是 Astro 原生功能，零额外依赖，但意味着文章只能通过 Git 提交添加（无在线编辑器）。对于科研工作者而言，Git-based workflow 是自然的选择。

#### 4. 主题色 — 蓝紫色 #6d28d9

**问题**: 需要一个与 Nexa 项目风格一致的视觉主题。

**决策**: 使用 `#6d28d9`（Tailwind `violet-700`）作为全局强调色：
- Hero 区 Nexa Logo 光晕效果
- 各 section 标题装饰
- 按钮、链接 hover 状态
- Nexa 生态区背景使用 `bg-purple-50` 作为浅色变体

#### 5. 字体 — IBM Plex Mono

**问题**: devportfolio 原模板使用 IBM Plex Mono，与 Nexa 站点风格一致。

**决策**: 保持 IBM Plex Mono，通过 Google Fonts 加载，在 `global.css` 中定义为 `--font-mono`。

#### 6. 部署 — GitHub Actions → GitHub Pages

**问题**: 需要自动化部署，且使用 pnpm 作为包管理器。

**决策**: 使用 GitHub Actions 官方 Pages workflow：
- `pnpm/action-setup@v4` 安装 pnpm
- `actions/setup-node@v4` 配置 Node 20
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
| `Paper` | 整个新类型 | 论文展示（venue, level, status, myRole, contribution） |
| `Award` | 整个新类型 | 奖项展示（date, description, link） |
| `NexaConfig` | 整个新类型 | Nexa 生态专属配置 |
| `AboutConfig` | `researchDirections` | 研究方向标签 |

#### 9. Section 顺序

主页 section 排列顺序的决策逻辑：

Hero → About → NexaEcosystem → Research → Experience → Projects → Education → Awards

- **Hero & About** 最先：建立身份认知
- **NexaEcosystem** 紧随：突出核心项目
- **Research** 在 Experience 前：科研主页优先展示学术成果
- **Experience → Projects → Education → Awards**：补充性信息递减

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

迁移过程中的处理：
- HTML 结构 → Markdown 语法（标题、列表、代码块、表格）
- 保留所有技术细节和代码示例
- 添加标准 frontmatter（title, description, pubDate, tags）
- 导航栏和页脚等页面框架元素不迁移（由 Astro Layout 处理）

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