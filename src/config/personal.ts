import type { Lang, PersonalConfig } from "./types";
import portrait from "../assets/yipeng-portrait.png";

const configs: Record<Lang, PersonalConfig> = {
  en: {
    name: "Yipeng Ouyang",
    avatar: portrait,
    title: "Academic M.S. · 2027 Entry · Agentic System · AI Infrastructure",
    description:
      "Yipeng Ouyang — Academic M.S. in Computer Science and Technology at Sun Yat-sen University (2027 Entry), arcSYSu Lab member, and ByteDance AI Agent R&D intern. Researching Agentic System and AI Infrastructure.",
    accentColor: "#6d28d9",
    social: {
      email: "ouyyp5@mail2.sysu.edu.cn",
      github: "https://github.com/ouyangyipeng",
      website: "https://oyyp.nexa-lang.com",
      orcid: "https://orcid.org/0009-0003-0544-4612",
      googleScholar: "https://scholar.google.com/citations?user=eecO6kYAAAAJ&hl=zh-CN",
    },
  },
  zh: {
    name: "欧阳易芃",
    avatar: portrait,
    title: "2027 级学术型硕士 · Agentic System · AI Infrastructure",
    description:
      "欧阳易芃的个人主页：中山大学计算机学院计算机科学与技术专业 2027 级学术型硕士，arcSYSu 实验室成员、字节跳动 AI Agent 研发实习生，研究方向为 Agentic System 和 AI Infrastructure。",
    accentColor: "#6d28d9",
    social: {
      email: "ouyyp5@mail2.sysu.edu.cn",
      github: "https://github.com/ouyangyipeng",
      website: "https://oyyp.nexa-lang.com",
      orcid: "https://orcid.org/0009-0003-0544-4612",
      googleScholar: "https://scholar.google.com/citations?user=eecO6kYAAAAJ&hl=zh-CN",
    },
  },
};

export function getPersonal(lang: Lang): PersonalConfig {
  return configs[lang];
}
