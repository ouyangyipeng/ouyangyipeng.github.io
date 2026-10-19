import type { Lang, PersonalConfig } from "./types";

const configs: Record<Lang, PersonalConfig> = {
  en: {
    name: "Yipeng Ouyang",
    title: "CS Master's · 2027 Cohort · AgentSys · MLSys",
    description:
      "Yipeng Ouyang — 2027 cohort of the academic master's program in Computer Science and Technology at Sun Yat-sen University, arcSYSu Lab member, and ByteDance AI Agent R&D intern. Building agent languages, runtimes, and efficient ML systems.",
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
    title: "2027 级学术型硕士 · AgentSys · MLSys",
    description:
      "欧阳易芃的个人主页：中山大学计算机学院计算机科学与技术专业 2027 级学术型硕士、arcSYSu 实验室成员、字节跳动 AI Agent 研发实习生，关注智能体语言与运行时、机器学习系统及底层性能优化。",
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
