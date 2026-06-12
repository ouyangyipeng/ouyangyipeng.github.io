import type { Lang, Experience } from "./types";

const configs: Record<Lang, Experience[]> = {
  en: [
    {
      organization: "arcSYSu Lab, Sun Yat-sen University",
      title: "Undergraduate Researcher",
      dateRange: "Fall 2023 — Present",
      link: "https://xianweiz.github.io/#pple",
      bullets: [
        "Researching Agentic Systems, AI Infrastructure, and Machine Learning Systems",
        "Contributing to SkillCompiler (Agent Skills'26, Accepted), RAMP (ATC'26, CCF-A), SkCC (NeurIPS'26), GraphSkill (NeurIPS'26), and XFuse (TACO, CCF-A)",
        "Working under Assoc. Prof. Xianwei Zhang on agent compilation and LLM-driven systems",
      ],
    },
    {
      organization: "SYSU DCS290/292: Compiler Principles and Experiments",
      title: "Course Teaching Assistant",
      dateRange: "Spring 2024, Spring 2025, Spring 2026",
      link: "https://yatcc-ai.com/teach/s2025.html",
      bullets: [
        "Teaching assistant for Compiler Principles & Experiments course (3 semesters)",
        "Co-developing YatCC-AI: AI-integrated service platform bridging applications, systems, and computing power",
        "Core member and team leader of AI Hub (1 of 3 main parts in YatCC)",
      ],
    },
  ],
  zh: [
    {
      organization: "中山大学 arcSYSu 实验室",
      title: "本科研究员",
      dateRange: "2023 秋 — 至今",
      link: "https://xianweiz.github.io/#pple",
      bullets: [
        "研究 Agentic Systems、AI Infrastructure 和 Machine Learning Systems",
        "参与 SkillCompiler（Agent Skills'26，已录用）、RAMP（ATC'26，CCF-A）、SkCC（NeurIPS'26）、GraphSkill（NeurIPS'26）和 XFuse（TACO，CCF-A）",
        "在张献伟副教授指导下研究 Agent 编译与 LLM 驱动系统",
      ],
    },
    {
      organization: "中山大学 DCS290/292: 编译原理与实验",
      title: "课程助教",
      dateRange: "2024 春, 2025 春, 2026 春",
      link: "https://yatcc-ai.com/teach/s2025.html",
      bullets: [
        "编译原理与实验课程助教（3 个学期）",
        "共同开发 YatCC-AI：AI 集成服务平台，桥接应用、系统与算力",
        "核心成员及 AI Hub 团队负责人（YatCC 三大模块之一）",
      ],
    },
  ],
};

export function getExperience(lang: Lang): Experience[] {
  return configs[lang];
}
