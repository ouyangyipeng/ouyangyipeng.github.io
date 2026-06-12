import type { Lang, Project } from "./types";

const configs: Record<Lang, Project[]> = {
  en: [
    {
      name: "Nexa — Harness Native Agent Language",
      description:
        "The first Harness Native Agent Language where agent safety is enforced by the compiler, not by runtime frameworks. Write flows, not glue code. 16+ features, 1,500+ tests, Rust AVM runtime.",
      link: "https://github.com/Nexa-Language/Nexa",
      skills: ["Python", "Rust", "Compiler", "LLM/Agent", "WASM"],
      role: "Creator & Lead Developer",
      level: "Open Source Project (AGPL-3.0)",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
    {
      name: "YatCC-AI",
      description:
        "AI-Integrated Service Platform bridging applications, systems, and computing power. First compiler course integrating HPC + LLM source optimization.",
      link: "https://yatcc-ai.com/",
      skills: ["Compiler", "LLM", "HPC", "Education"],
      role: "Core Member & Team Leader of AI Hub",
      level: "Software Copyright (Pending)",
      leader: "Xianwei ZHANG",
      leaderLink: "https://xianweiz.github.io/",
    },
    {
      name: "OYOS",
      description:
        "Rust-based Operating System for x86-64 architecture. Course project demonstrating OS fundamentals.",
      link: "https://github.com/ouyangyipeng/OYOS",
      skills: ["Rust", "OS", "x86-64"],
      role: "Author",
      level: "Course Project",
    },
    {
      name: "Yat-Search-Engine",
      description:
        "A search engine project built from scratch.",
      link: "https://github.com/ouyangyipeng/Yat-Search-Engine",
      skills: ["Search", "Python"],
      role: "Author",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
    {
      name: "Thinking-GPT4o",
      description:
        "Exploration of thinking chain and interaction patterns with GPT-4o.",
      link: "https://github.com/ouyangyipeng/Thinking-GPT4o",
      skills: ["LLM", "Agent"],
      role: "Author",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
  ],
  zh: [
    {
      name: "Nexa — Harness Native Agent Language",
      description:
        "首个 Harness Native Agent Language，由编译器而非运行时框架强制保障 Agent 安全。写流程，不写胶水代码。16+ 特性，1,500+ 测试，Rust AVM 运行时。",
      link: "https://github.com/Nexa-Language/Nexa",
      skills: ["Python", "Rust", "Compiler", "LLM/Agent", "WASM"],
      role: "创建者 & 主要开发者",
      level: "开源项目 (AGPL-3.0)",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
    {
      name: "YatCC-AI",
      description:
        "AI 集成服务平台，桥接应用、系统与算力。首个全流程引入 HPC + 大语言模型源码优化的编译实验课程。",
      link: "https://yatcc-ai.com/",
      skills: ["Compiler", "LLM", "HPC", "Education"],
      role: "核心成员 & AI Hub 负责人",
      level: "软件著作权（申请中）",
      leader: "Xianwei ZHANG",
      leaderLink: "https://xianweiz.github.io/",
    },
    {
      name: "OYOS",
      description:
        "基于 Rust 的 x86-64 架构操作系统。课程项目，展示操作系统基本原理。",
      link: "https://github.com/ouyangyipeng/OYOS",
      skills: ["Rust", "OS", "x86-64"],
      role: "唯一作者",
      level: "课程项目",
    },
    {
      name: "Yat-Search-Engine",
      description:
        "从零构建的搜索引擎项目。",
      link: "https://github.com/ouyangyipeng/Yat-Search-Engine",
      skills: ["Search", "Python"],
      role: "唯一作者",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
    {
      name: "Thinking-GPT4o",
      description:
        "探索与 GPT-4o 的思维链和交互模式。",
      link: "https://github.com/ouyangyipeng/Thinking-GPT4o",
      skills: ["LLM", "Agent"],
      role: "唯一作者",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
  ],
};

export function getProjects(lang: Lang): Project[] {
  return configs[lang];
}
