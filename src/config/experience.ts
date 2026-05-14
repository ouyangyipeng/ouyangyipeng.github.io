import type { Lang, Experience } from "./types";

const configs: Record<Lang, Experience[]> = {
  en: [
    {
      organization: "ArcSysu Lab, Sun Yat-sen University",
      title: "Undergraduate Researcher",
      dateRange: "Oct 2023 - Present",
      link: "https://xianweiz.github.io/#pple",
      bullets: [
        "Research on AI Integrated Compilers and GPU kernel optimization",
        "Contributing to XFuse (TACO, CCF-A submitting) and GoPTX (DAC'25, CCF-A)",
        "Working under Prof. Xianwei ZHANG on compiler optimization and LLM-driven compilation",
      ],
    },
    {
      organization: "SYSU-DCS290/292: Compiler Principles",
      title: "Course Teaching Assistant",
      dateRange: "Jan 2024 - Jul 2025",
      link: "https://yatcc-ai.com/teach/s2025.html",
      bullets: [
        "Teaching assistant for Compiler Principles & Experiments course (Spring 2024 & 2025)",
        "Co-developing YatCC-AI: the first compiler course integrating HPC + LLM source optimization",
        "Writing key documentation and AI/LLM module construction",
      ],
    },
  ],
  zh: [
    {
      organization: "中山大学 ArcSysu 实验室",
      title: "本科研究员",
      dateRange: "2023.10 - 至今",
      link: "https://xianweiz.github.io/#pple",
      bullets: [
        "研究 AI 集成编译器与 GPU 内核优化",
        "参与 XFuse（TACO, CCF-A 投稿中）和 GoPTX（DAC'25, CCF-A 已录用）",
        "在张献伟教授指导下研究编译器优化与 LLM 驱动编译",
      ],
    },
    {
      organization: "中山大学编译原理课程",
      title: "课程助教",
      dateRange: "2024.01 - 2025.07",
      link: "https://yatcc-ai.com/teach/s2025.html",
      bullets: [
        "编译原理与实验课程助教（2024春 & 2025春）",
        "共同开发 YatCC-AI：首个集成 HPC + LLM 源码优化的编译器课程",
        "编写核心文档与 AI/LLM 模块构建",
      ],
    },
  ],
};

export function getExperience(lang: Lang): Experience[] {
  return configs[lang];
}