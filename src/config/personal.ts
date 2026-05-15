import type { Lang, PersonalConfig } from "./types";

const configs: Record<Lang, PersonalConfig> = {
  en: {
    name: "Yipeng Ouyang",
    title: "CS Student · Agentic Systems · SysML",
    description:
      "Portfolio of Yipeng Ouyang — Nexa Language creator, ArcSysu Lab researcher at Sun Yat-sen University",
    accentColor: "#6d28d9",
    social: {
      email: "ouyyp5@mail2.sysu.edu.cn",
      github: "https://github.com/ouyangyipeng",
      website: "https://oyyp.nexa-lang.com",
      orcid: "https://orcid.org/0009-0003-0544-4612",
    },
  },
  zh: {
    name: "欧阳易芃",
    title: "计算机科学学生 · Agentic Systems · SysML",
    description:
      "欧阳易芃的个人主页 — Nexa 语言创建者，中山大学 ArcSysu 实验室研究员",
    accentColor: "#6d28d9",
    social: {
      email: "ouyyp5@mail2.sysu.edu.cn",
      github: "https://github.com/ouyangyipeng",
      website: "https://oyyp.nexa-lang.com",
      orcid: "https://orcid.org/0009-0003-0544-4612",
    },
  },
};

export function getPersonal(lang: Lang): PersonalConfig {
  return configs[lang];
}