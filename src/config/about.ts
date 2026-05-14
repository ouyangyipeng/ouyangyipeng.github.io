import type { Lang, AboutConfig } from "./types";

const configs: Record<Lang, AboutConfig> = {
  en: {
    bio: "Undergraduate at Sun Yat-sen University (CSE, 2023), member of ArcSysu Lab (Prof. Xianwei Zhang). Researching Agentic Systems and SysML. Passionate about turning ideas into reality and exploring all interesting projects.",
    skills: [
      "C/C++",
      "Rust",
      "Python",
      "LLM/Agent",
      "Compiler",
      "CUDA",
      "WebAssembly",
      "LaTeX",
      "Git",
      "Docker",
      "Linux",
      "TypeScript",
    ],
    researchDirections: [
      "Agentic Systems",
      "SysML",
    ],
  },
  zh: {
    bio: "中山大学计算机科学与技术专业2023级本科生，属 ArcSysu 实验室（张献伟教授）。研究方向为 Agentic Systems 与 SysML。热爱将想法变为现实，探索所有有趣的项目。",
    skills: [
      "C/C++",
      "Rust",
      "Python",
      "LLM/Agent",
      "Compiler",
      "CUDA",
      "WebAssembly",
      "LaTeX",
      "Git",
      "Docker",
      "Linux",
      "TypeScript",
    ],
    researchDirections: [
      "Agentic Systems",
      "SysML",
    ],
  },
};

export function getAbout(lang: Lang): AboutConfig {
  return configs[lang];
}