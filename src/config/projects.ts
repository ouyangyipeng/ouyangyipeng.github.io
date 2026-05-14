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
        "The first compiler course integrating HPC + LLM source optimization. Top Grand Prize CCEC'25, First Prize CCEC'24, Best Poster Award DSI'24.",
      link: "https://yatcc-ai.com/",
      skills: ["Compiler", "LLM", "HPC", "Education"],
      role: "Core Member & Course TA",
      level: "National Award-winning Project",
      leader: "Xianwei ZHANG",
      leaderLink: "https://xianweiz.github.io/",
    },
    {
      name: "XFuse: PTX Level Code Fusion for GPU Concurrent Kernel Execution",
      description:
        "Extension of GoPTX with additional tuning parameters and kernel matching strategies, achieving 15.8% overall performance improvement. Submitting to TACO (CCF-A).",
      skills: ["C/C++", "CUDA", "GPU", "Compiler"],
      role: "Co-author",
      level: "CCF-A (submitting)",
    },
    {
      name: "Multi-Agent Argumentative C→Rust Safe Source Translation",
      description:
        "Exploring multi-agent argumentative generation and chain-of-thought as a novel compilation method, using domestic LLMs to drive C-to-Rust safe source code translation.",
      skills: ["LLM", "Rust", "Compiler", "Agent"],
      role: "Project Lead",
      level: "Provincial Innovation Project",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
    {
      name: "RL-based Compiler Optimization for Domestic Supercomputer Chips",
      description:
        "Using reinforcement learning for automatic compiler optimization on domestic supercomputer chips.",
      skills: ["RL", "Compiler", "HPC"],
      role: "Core Member",
      level: "Provincial Innovation Project (completed)",
      leader: "Haoquan CHEN",
    },
    {
      name: "Mixed-Precision Compiler Optimization for HUAWEI Ascend Server",
      description:
        "Mixed-precision compiler optimization targeting HUAWEI Ascend server (aarch64-openEuler).",
      skills: ["Compiler", "HPC", "aarch64"],
      role: "Team Lead",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
    {
      name: "AI-powered Legal Document Analysis on HPC Platform",
      description:
        "Full-pipeline automated legal document identification and analysis using AI LLMs on supercomputing platform.",
      skills: ["LLM", "HPC", "NLP"],
      role: "Co-lead",
      level: "University Innovation Project & University Challenge Cup",
      leader: "Xiangning Zheng",
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
      role: "Solo Author",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
    {
      name: "Thinking-GPT4o",
      description:
        "Exploration of thinking chain and interaction patterns with GPT-4o.",
      link: "https://github.com/ouyangyipeng/Thinking-GPT4o",
      skills: ["LLM", "Agent"],
      role: "Solo Author",
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
        "全球首个全流程引入 HPC + 大语言模型源码优化的编译实验课程。CCEC'25 特等奖，CCEC'24 一等奖，DSI'24 最佳海报奖。",
      link: "https://yatcc-ai.com/",
      skills: ["Compiler", "LLM", "HPC", "Education"],
      role: "项目主要成员 · 课程助教",
      level: "国家级获奖项目",
      leader: "Xianwei ZHANG",
      leaderLink: "https://xianweiz.github.io/",
    },
    {
      name: "XFuse: PTX Level Code Fusion for GPU Concurrent Kernel Execution",
      description:
        "GoPTX 的扩展工作，增加多种调优参数与内核匹配策略，总体性能提升至 15.8%。投稿至 TACO (CCF-A)。",
      skills: ["C/C++", "CUDA", "GPU", "Compiler"],
      role: "共同作者",
      level: "CCF-A (投稿中)",
    },
    {
      name: "基于多智能体论辩式生成技术的编译：C→Rust 安全源码转换",
      description:
        "以国产大模型驱动 C 到 Rust 安全源码转换为例，探索多智能体论辩式生成技术与思维链的新型编译方法。",
      skills: ["LLM", "Rust", "Compiler", "Agent"],
      role: "总负责人",
      level: "省级大创项目",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
    {
      name: "基于强化学习的国产超算芯片编译器优化",
      description:
        "利用强化学习方法对国产超算芯片编译器进行自动优化。",
      skills: ["RL", "Compiler", "HPC"],
      role: "项目主要成员",
      level: "省级大创项目（已结题）",
      leader: "Haoquan CHEN",
    },
    {
      name: "面向 HUAWEI 昇腾服务器的编译器混合精度优化",
      description:
        "面向 HUAWEI 昇腾服务器（aarch64-openEuler）的编译器混合精度优化项目。",
      skills: ["Compiler", "HPC", "aarch64"],
      role: "队长",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
    {
      name: "基于 AI 大模型和超算平台的法律档信息全流程自动化识别分析器",
      description:
        "基于 AI 大模型和超算平台的法律档信息全流程自动化识别分析器。",
      skills: ["LLM", "HPC", "NLP"],
      role: "合作负责人",
      level: "校级大创项目、校级挑战杯",
      leader: "Xiangning Zheng",
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