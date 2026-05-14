import type { I18nStrings, Lang } from "../config/types";

const en: I18nStrings = {
  navAbout: "About",
  navNexa: "Nexa",
  navResearch: "Research",
  navExperience: "Experience",
  navProjects: "Projects",
  navEducation: "Education",
  navAwards: "Awards",
  navBlog: "Blog",
  heroGreeting: "Hello! 👋",
  heroIm: "I'm",
  sectionAbout: "About",
  sectionNexaProject: "Nexa Project",
  sectionResearch: "Research",
  sectionExperience: "Experience",
  sectionProjects: "Projects",
  sectionEducation: "Education",
  sectionAwards: "Awards",
  blogTitle: "Blog",
  blogDesc: "Changelog, updates, and behind-the-scenes stories.",
  blogBack: "← Back to home",
  footerBuilt: "Built with Astro & Tailwind CSS.",
  langSwitchLabel: "中文",
  statusAccepted: "Accepted",
  statusSubmitting: "Submitting",
  statusPreprint: "Preprint",
  roleFirstAuthor: "First Author",
  doiLabel: "DOI",
  creditLabel: "CRediT Roles",
};

const zh: I18nStrings = {
  navAbout: "关于",
  navNexa: "Nexa",
  navResearch: "研究",
  navExperience: "经历",
  navProjects: "项目",
  navEducation: "教育",
  navAwards: "奖项",
  navBlog: "博客",
  heroGreeting: "你好！👋",
  heroIm: "我是",
  sectionAbout: "关于我",
  sectionNexaProject: "Nexa 项目",
  sectionResearch: "研究成果",
  sectionExperience: "工作经历",
  sectionProjects: "项目经历",
  sectionEducation: "教育背景",
  sectionAwards: "荣誉奖项",
  blogTitle: "博客",
  blogDesc: "更新日志、进展与幕后故事。",
  blogBack: "← 返回主页",
  footerBuilt: "基于 Astro & Tailwind CSS 构建。",
  langSwitchLabel: "EN",
  statusAccepted: "已录用",
  statusSubmitting: "投稿中",
  statusPreprint: "预印本",
  roleFirstAuthor: "第一作者",
  doiLabel: "DOI",
  creditLabel: "CRediT 贡献角色",
};

export const ui: Record<Lang, I18nStrings> = { en, zh };

export const defaultLang: Lang = "en";

export const supportedLangs: Lang[] = ["en", "zh"];