import type { Lang, AboutConfig } from "./types";

const configs: Record<Lang, AboutConfig> = {
  en: {
    bio: "Undergraduate at Sun Yat-sen University (CSE, 2023–2027), GPA 3.9/4.0. Member of arcSYSu Lab (Assoc. Prof. Xianwei Zhang), National Supercomputer Center of Guangzhou. Researching Agentic Systems, AI Infrastructure, and Machine Learning Systems.",
    skills: [
      "Python",
      "C/C++",
      "Rust",
      "Shell",
      "LaTeX",
      "Docker",
      "Nexa",
      "Roo Code",
      "Claude Code",
    ],
    researchDirections: [
      "Agentic System",
      "AI Infrastructure",
      "Machine Learning System",
    ],
  },
  zh: {
    bio: "中山大学计算机科学与技术专业本科生（2023–2027），GPA 3.9/4.0。arcSYSu 实验室成员（导师: 张献伟副教授），广州国家超算中心。研究方向为 Agentic System、AI Infrastructure 和 Machine Learning System。",
    skills: [
      "Python",
      "C/C++",
      "Rust",
      "Shell",
      "LaTeX",
      "Docker",
      "Nexa",
      "Roo Code",
      "Claude Code",
    ],
    researchDirections: [
      "Agentic System",
      "AI Infrastructure",
      "Machine Learning System",
    ],
  },
};

export function getAbout(lang: Lang): AboutConfig {
  return configs[lang];
}
