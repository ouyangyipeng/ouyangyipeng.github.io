import type { Project } from "./types";

export const projects: Project[] = [
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
      "全球首个全流程引入HPC+大语言模型源码优化的编译实验课程。Top Grand Prize CCEC'25, First Prize CCEC'24, Best Poster Award DSI'24.",
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
      "GoPTX 的扩展工作，增加多种调优参数与内核匹配策略，总体性能提升至 15.8%。Submitting to TACO (CCF-A).",
    skills: ["C/C++", "CUDA", "GPU", "Compiler"],
    role: "Co-author",
    level: "CCF-A (submitting)",
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
    name: "面向HUAWEI昇腾服务器的编译器混合精度优化",
    description:
      "面向HUAWEI昇腾服务器（aarch64-openEuler）的编译器混合精度优化项目。",
    skills: ["Compiler", "HPC", "aarch64"],
    role: "队长",
    leader: "Yipeng OUYANG",
    leaderLink: "https://ouyangyipeng.github.io",
  },
  {
    name: "基于AI大模型和超算平台的法律档信息全流程自动化识别分析器",
    description:
      "基于AI大模型和超算平台的法律档信息全流程自动化识别分析器。",
    skills: ["LLM", "HPC", "NLP"],
    role: "合作负责人",
    level: "校级大创项目、校级挑战杯",
    leader: "Xiangning Zheng",
  },
  {
    name: "OYOS",
    description:
      "Rust-based Operating System for x86-64 architecture. Course project demonstrating OS fundamentals.",
    link: "https://github.com/ouyangyipeng/OYOS",
    skills: ["Rust", "OS", "x86-64"],
    role: "Author",
    level: "课程项目",
  },
  {
    name: "Yat-Search-Engine",
    description:
      "A search engine project built from scratch.",
    link: "https://github.com/ouyangyipeng/Yat-Search-Engine",
    skills: ["Search", "Python"],
    role: "唯一作者",
    leader: "Yipeng OUYANG",
    leaderLink: "https://ouyangyipeng.github.io",
  },
  {
    name: "Thinking-GPT4o",
    description:
      "Exploration of thinking chain and interaction patterns with GPT-4o.",
    link: "https://github.com/ouyangyipeng/Thinking-GPT4o",
    skills: ["LLM", "Agent"],
    role: "唯一作者",
    leader: "Yipeng OUYANG",
    leaderLink: "https://ouyangyipeng.github.io",
  },
];