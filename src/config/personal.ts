import type { Lang, PersonalConfig } from "./types";

const configs: Record<Lang, PersonalConfig> = {
  en: {
    name: "Fernandez Owen",
    title: "CS Student · AI Integrated Compilers · Embodied Intelligence",
    description:
      "Portfolio of Yipeng OUYANG (Fernandez Owen) — Nexa Language creator, ArcSysu Lab researcher at Sun Yat-sen University",
    accentColor: "#6d28d9",
    social: {
      email: "ouyyp5@mail2.sysu.edu.cn",
      github: "https://github.com/ouyangyipeng",
      website: "https://author.nexa-lang.com",
      orcid: "https://orcid.org/0009-0003-0544-4612",
    },
  },
  zh: {
    name: "欧阳逸鹏",
    title: "计算机科学学生 · AI 集成编译器 · 具身智能",
    description:
      "欧阳逸鹏（Fernandez Owen）的个人主页 — Nexa 语言创建者，中山大学 ArcSysu 实验室研究员",
    accentColor: "#6d28d9",
    social: {
      email: "ouyyp5@mail2.sysu.edu.cn",
      github: "https://github.com/ouyangyipeng",
      website: "https://author.nexa-lang.com",
      orcid: "https://orcid.org/0009-0003-0544-4612",
    },
  },
};

export function getPersonal(lang: Lang): PersonalConfig {
  return configs[lang];
}