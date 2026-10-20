# ROADMAP — 设计决策与迭代记录

> 记录项目构建过程中的设计思路、决策过程和变更点。

## 2026-10-19 — About 信息强调与超算标识排列

- 按本人进一步反馈，将 About 头像移到研究方向上方，维持既定尺寸；中英文简介用结构化文本片段渲染 `<strong>`，突出学位、学校、导师、实验室、实习单位和研究方向，保持原文及其标点、空格完整。
- 广州超算从原始横向 Logo 中选取独立 NSCC 图形，使用正方形 `viewBox="172 4 50 50"` 及已有 clipPath 显示，原始图片不变。移除正文旁的横向标识，与 arcSYSu 共用竖排图标列，超算在上、实验室在下；手机端同样保持上下顺序。
- 生产构建 60 页、TypeScript、双语内容与结构检查通过。桌面实测两个底框均 92×92px、手机均 68×68px，横向中心一致、间距 8px；头像在研究方向上方，中英文重点文字字重为 600，无横向溢出。
- 截图见 `../主页更新/2026-10-19/about-emphasis-portrait-top-*.png` 和 `nscc-arcsysu-stack-*.png`；本轮继续保留在工作区。

---

## 2026-10-19 — About 头像与文字层级

- Experience 分组标题由 14px 改为响应式 22–26px，保持高于条目标题（18–21px）、低于章节标题（26–36px）；四个分组共享同一规则。
- About 中英文正文两端对齐，末行自然左对齐，英文允许自动断词；480px 以下正文为 16px，改善窄屏单词间距。右栏在研究方向和技能下加入本人提供的手绘头像，桌面 152×152px、手机 120×120px，保留原图构图与颜色。
- 原始 PNG 存于 `src/assets/yipeng-portrait.png`，双语个人配置共用，Astro Image 在构建时生成 152px / 304px WebP（约 3.3KB / 8.7KB），懒加载并预留宽高。pnpm 的隔离依赖解析要求将图片服务 Sharp 显式列为依赖；复用锁文件中已有的 0.34.5，冻结锁文件安装与供应链检查通过。
- 生产构建 60 页、TypeScript 与双语内容检查通过，全站 2,980 处本地引用有效。桌面 1280px 和手机 390px 实测标题层级正确，头像成功加载且无横向溢出；截图见 `../主页更新/2026-10-19/about-portrait-*.png`。

---

## 2026-10-19 — 学业说明、服务经历与标识视觉校准

- 研究方向展开为 AI Infrastructure；入学年份使用 2023 Entry / 2027 Entry，学位使用 Academic M.S.。硕士行直接展示 6/589 预推免排名、16/292 推免资格排名和成功保研，分别链接张献伟老师主页与 arcSYSu 官网。
- 教学使用 YatCC 标志；中山大学第五十二届学生会使用本人提供的会徽，英文职务为 President、中文为主席团成员。加入本人发起并主导的“青衿笃行”及 2026 年 7 月连州实践，并链接已打开核实的南方+专题；三星级志愿者移至 Awards，奖项变为 11 项。
- 删除两项 DSH，加入 ClassFox，保留 3 项精选和 4 项简洁项目。2026-10-19 核实 ClassFox 仓库有 89 Stars，页面不固定动态数量。
- 首屏 Google Scholar 使用官方 G 轮廓，按本人后续反馈与 ORCID 等社交入口统一为 currentColor 黑灰色。
- 机构图片内部白边差异导致实际图形尺寸不一致：阿伯丁原图 180×180px 中有效图形约 101×120px，arcSYSu 原图 980×490px 中有效图形约 764×342px。统一改用 SVG viewBox 和 clipPath 排除源文件留白，保留原图比例；圆形会徽、一般图形与横向字标分别使用一致的尺寸档位。HUAWEI 只显示花瓣，英文名称全大写。
- 生产构建 60 页，配置类型与双语内容检查通过；当前为 7 项项目、5 条研究、11 条奖项，全站 2,978 个本地引用有效。本轮继续保留在工作区。

---

## 2026-10-19 — 合并章节、更新官方标识与 Nexa 生态

- 按预览反馈收为五个主章节：01 About、02 Experience、03 Open-Source Projects、04 Research、05 Awards。Teaching & Service 归入 Experience，其余项目列表归入 Open-Source Projects；保留旧锚点和原经历内容。
- Nexa 保持原展示，其后并排展示 SLIM-ARC 与 ASCEND-OK，分别突出全国一等奖和全国三等奖；两列的奖项、技术标签和链接对齐。其他五个项目采用无 Logo 的精简列表。
- arcSYSu 实验室换用官网原始 Logo，SLIM-ARC 使用官方仓库 Logo 并补充主页与仓库链接。最终八处机构底框桌面为 92×92px、手机为 68×68px，实测中心偏差均为 0px。
- Nexa 生态更新为 01 SkCC、02 RAMP、03 EpiContext、04 Nexa Code、05 Nexa Org、06 Documentation，核对现有官网与仓库，并同步双语名称、说明和链接。
- 根据本人确认，将 2026 年国家奖学金和校一等奖学金更新为获奖记录并前置；保留校一等奖连续三学年的说明，避免重复条目。
- 最终生产构建生成 60 页；配置和翻译的 TypeScript 5.9.3 检查通过；双语结构、8 项项目、5 条研究、10 条奖项及全站 2,978 处本地引用检查通过。验收与资源来源见 `plan/01-v2-homepage-structure.md` 和 `../主页更新/2026-10-19/`。

---

## 2026-10-19 — 研究方向、Scholar 入口与 Logo 对齐

- 按本人要求，首屏、About、元数据和实验室方向统一为 Agentic System + AI Infra；个人技能移除 TypeScript 与 Docker。
- 首屏增加 Google Scholar 图标，使用本人提供的主页链接；页脚同步文字入口。移动端社交图标间距随宽度调整，保持五个入口与向下箭头分离。
- 实际浏览器确认机构底框原为 92×76px，而方形 Logo 占 72×72px，中心向下偏移 8px。底框改为桌面 92×92px、手机 68×68px，并约束 Grid 轨道和图片最小尺寸，修复图片固有尺寸撑高布局的问题；六处机构 Logo 实测中心偏差均为 0px。
- 教学服务与开源项目图标统一采用方形底面、相同圆角和居中方式，保留品牌原图比例；广州超算中心完整横向标识仍保持横向展示。

---

## 2026-10-19 — 全屏首屏、经历与开源项目重组

- 按已确认方案，将 Hero 调整为 `100svh`；顶栏在首屏隐藏且 `inert`，滚至 About 后渐显，返回首屏时隐藏。
- 双语正文统一为 01 About → 02 Experience → 03 Open-Source Projects → 04 Research → 05 More Projects → 06 Teaching & Service → 07 Awards。Experience 整合 Academia、Industry、Invited Talks，复用教育和经历配置并保留 `#education`；教学与学生服务独立展示。
- 开源精选依次展示 Nexa、ASCEND-OK、DS-Harness Desktop。Nexa 保留轨道构图并使用仓库原始 Logo，同步 favicon、博客侧栏与分享元数据；机构与项目标识使用本地品牌资源，来源记录位于 `../主页更新/2026-10-19/brand-asset-sources.md`。
- 项目配置新增 `presentation` 字段，将 Nexa 生态、两项精选与其余五项分流，避免重复展示。此前内容冒烟检查确认 8 项项目、5 条研究、10 项奖项均保留；本轮生产构建生成 60 页，Header 源码行为测试 9 项通过。
- 移动端检查发现 About 锚点落在距顶 76px 处，超过顶栏显现阈值 69px；移除移动端 `scroll-margin-top: -24px` 覆盖后，真实浏览器确认落点为 60px。首屏箭头、键盘跳转和中文 About 深链接均显示导航，键盘焦点进入 About。
- 结构回归确认双语 01—07 顺序、旧锚点、项目去重与完整经历说明，全站 60 页的 2,986 处本地资源/链接引用检查通过。390/768/1280px 浏览器检查无横向溢出，机构 Logo 与精选项目 Logo 在深浅背景下可辨；记录见 `plan/01-v1-homepage-structure.md`。

---

## 2026-10-19 — 英文浅色默认与鼠标随动柔光

- 根据本人后续要求，将无有效主题偏好时的默认值改为浅色，根路由仍为英文；保留手动主题选择与跨标签同步，清除偏好回到浅色。
- 实际查看 DeepSeek Harness 和 Antigravity 官网后，在原有首屏构图中加入紫蓝双层柔光，光晕平滑跟随鼠标、带轻微延迟；局部光点受扰动而偏转和变亮，移动越快短拖尾越明显，离开后逐渐淡出。
- 调淡浅色版固定底光，并增加细粒子层次；桌面最多 160 粒、移动最多 42 粒，不使用鼠标光效截获触屏手势。空闲最多 30fps，鼠标交互与淡出最多 60fps；保留 DPR 限制和 reduced motion/离屏/后台降级，无新增依赖。

---

## 2026-10-19 — 保留大字首屏的视觉更新

- 内容基线已独立提交 `e49df2d`；本次视觉更新留在工作区，暂不提交、推送或创建 PR。
- 本人反馈参考站整体气质不如原版，明确保留大字滑入，补充粒子并改善下方信息框。于是撤回出版物式方案，保留原有紫色与首屏构图。
- `Hero.astro` 保留逐层滑入；新增 `HeroParticles.astro`，使用原生 Canvas 绘制稀疏粒子与微弱流线，限制帧率和像素密度，离屏/后台暂停，支持 reduced motion，无新依赖。
- `global.css` 统一语义颜色、1160px 版心、无衬线正文与等宽元信息。About、Research、Projects、Experience、Education、Awards 改为开放排版与细分隔；Nexa 使用轻量轨道图形衔接首屏。
- Header 增加移动端折叠菜单，ThemeInit/ThemeToggle 统一跨页面主题初始化与切换；BlogLayout、blog.css、PostCard 对齐主页字体和颜色，移动端保留主题及语言入口，语言切换保留当前博客路径。
- 浏览器检查发现旧 Harness 封面 SVG 有重复 `opacity` 属性导致加载失败，已修正；文章封面按原始比例显示，避免固定高度裁掉图中文字。
- 生产构建生成 60 页；内容与静态链接检查、交互脚本类型检查及粒子生命周期检查通过。真实浏览器检查 390/768/1280px、双语、深浅主题、导航与博客，未发现横向溢出。50 组基础文本/背景颜色对比度最低 4.71:1。
- 详细范围与验收记录见 `plan/00-v1-visual-refresh.md`，截图和构建记录保存在仓库外 `../主页更新/2026-10-19/`。

---

## 2026-10-19 — 中英文主页内容更新

- 保留 Astro、现有视觉风格、路由与部署方式，更新 `src/config/` 中的个人简介、研究、经历、项目、教育与奖项。
- 研究定位聚焦 AgentSys、MLSys 与底层性能优化；补充字节跳动研发实习、教学及学生服务经历。
- 精选项目更新为 Nexa、SLIM-ARC、ASCEND-OK、DS-Harness Desktop、DSH Marketplace、YatCC-AI、OYOS 和 SYSU-CS-baoyan。
- 按本人确认，仅 SkCC 标注已录用，会议名称为 ACM CAIS 2026 — AgentSkills'26 Workshop；RAMP 标注 HPC Asia 2027 在投，保留公开预印本及完整作者列表。SkillCompiler 与 SkCC 在同一条研究记录中说明版本关系，YatCC-AI 以项目与教学成果展示。
- 按本人确认，简介、教育及页面元数据统一使用中山大学计算机学院计算机科学与技术专业 2027 级学术型硕士身份；另列本科教育及预计毕业时间，GPA 和历史排名归于本科经历。
- 补充 2026 系统能力大赛与教学案例奖项；国家奖学金及本学年校一等奖学金注明现有公示状态；GPA 使用学校原始 5 分制口径。
- 置顶研究卡片展示已有 `contribution` 字段，状态标签保持单行，避免长论文标题将“在投”挤成两行；主页标题及社交分享标题统一读取个人配置，保持中英文信息一致。
- 修复已有 MoE 报告缺少 frontmatter 导致整站构建失败的问题；保留正文、按原上传日期补齐元数据并标记为草稿，待单独确认发表。
- 公开资料参考：[SkCC](https://arxiv.org/abs/2605.03353)、[RAMP](https://arxiv.org/abs/2605.27492)、[ASCEND-OK](https://github.com/ouyangyipeng/ASCEND-OK)、[DS-Harness Desktop](https://github.com/ouyangyipeng/dsh-desktop)、[DSH Marketplace](https://github.com/ouyangyipeng/dsh-marketplace)、[SYSU-CS-baoyan](https://github.com/ouyangyipeng/SYSU-CS-baoyan)。

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

#### 7. 自定义域名 — oyyp.nexa-lang.com

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
6. **Blog 页面深层路径 import 错误**: `blog/categories/[category].astro` 和 `blog/tags/[tag].astro` 在 3 层深度目录，使用 `../../` 而非 `../../../` 导致 Rollup 无法解析模块。修复：根据实际目录深度调整相对路径。

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

## 变更记录 v2 — Blog 重构 + 域名变更

### 域名变更
- `author.nexa-lang.com` → `oyyp.nexa-lang.com`
- 更新 CNAME、astro.config.mjs、personal.ts、nexa.ts 中所有硬编码引用

### Blog 独立化 (Stellar 风格)
- Blog 不再共享主页 Header/Footer，使用独立 `BlogLayout.astro`
- 左侧边栏：头像 + 博客名 + 导航菜单 + 最近更新 + 社交链接
- 右侧边栏：网站统计 + 分类云 + 标签云
- 顶栏导航：近期发布 / 分类 / 标签 / 归档 + 返回主页
- 移动端响应式：隐藏侧边栏，显示移动端顶栏

### Blog 功能升级
- 新增分类页 (`/blog/categories/`, `/blog/categories/[category]/`)
- 新增标签页 (`/blog/tags/`, `/blog/tags/[tag]/`)
- 新增归档页 (`/blog/archives/`)
- 文章卡片支持封面图和普通两种样式
- Content Schema 扩展：`category` (string) + `cover` (string) 字段
- 5 篇博客文章添加 category 和 cover frontmatter
- 5 个封面 SVG 图片 (`/images/blog/*.svg`)

### 构建结果
- 60 页面，0 错误，构建时间 ~2s

---

## 待办 / 未来改进

- [ ] 添加 RSS feed（Astro 官方 `@astrojs/rss` 集成）
- [ ] 添加 SEO 优化（sitemap, open-graph tags）
- [ ] 添加暗色模式切换
- [x] 博客标签分类/筛选功能
- [ ] 项目详情子页面（点击项目卡片进入详情）
- [ ] 论文详情子页面（PDF 链接、abstract 展示）
- [ ] 响应式优化（移动端体验改进）
- [ ] 图片优化（Astro Image 组件 + lazy loading）
