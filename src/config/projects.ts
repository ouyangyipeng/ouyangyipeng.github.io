import type { Lang, Project } from "./types";

const configs: Record<Lang, Project[]> = {
  en: [
    {
      name: "Nexa",
      description:
        "A DSL for agent workflows that expresses models, tools, context, and execution constraints in the language, with static checks and a runtime for execution.",
      link: "https://github.com/Nexa-Language/Nexa",
      skills: ["Python", "Rust", "Compiler", "LLM/Agent", "WASM"],
      role: "Creator & Lead Developer",
      level: "Open Source Project",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
    {
      name: "SLIM-ARC",
      description:
        "Memory-constrained MoE inference combining OS virtual memory and sparse expert loading.",
      skills: ["MoE Inference", "Operating Systems"],
      role: "Project Lead",
      level: "National First Prize · CSCC 2026 OS Contest",
    },
    {
      name: "ASCEND-OK",
      description:
        "Constraint-aware evolutionary kernel optimization for Triton-Ascend on Ascend A2/A3. LLM-generated mutations are selected through compilation, correctness checks, and measurements on real NPUs.",
      link: "https://github.com/ouyangyipeng/ASCEND-OK",
      skills: ["Python", "Triton", "Ascend NPU", "Evolutionary Search"],
      role: "Project Lead",
      level: "National Third Prize · CSCC 2026 Compiler Contest",
    },
    {
      name: "DS-Harness Desktop",
      description:
        "An unofficial macOS and Windows client that packages the official DeepSeek Harness web interface and runtime, with runtime isolation, health checks, process lifecycle management, and a built-in marketplace.",
      link: "https://github.com/ouyangyipeng/dsh-desktop",
      skills: ["TypeScript", "Electron", "Node.js"],
      level: "Community Project",
    },
    {
      name: "DSH Marketplace",
      description:
        "An unofficial DSH bundle for discovering, searching, and managing GitHub community plugins in the native settings interface. Supports installation, updates, and removal with staged installs, manifest and path checks, and atomic profile updates.",
      link: "https://github.com/ouyangyipeng/dsh-marketplace",
      skills: ["TypeScript", "Node.js", "Plugins"],
      level: "Community Project",
    },
    {
      name: "YatCC-AI",
      description:
        "A compiler course platform and LLM/HPC workbench. Responsible for the AI Hub and teaching documentation, supporting compiler experiments and LLM-assisted source optimization.",
      link: "https://yatcc-ai.com/",
      skills: ["Compiler", "LLM", "HPC", "Education"],
      role: "Core Member & Team Leader of AI Hub",
      level: "Education Project",
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
      name: "SYSU-CS-baoyan",
      description:
        "Unofficial open study materials for SYSU computer science graduate recommendation admissions, updated for the 2026 assessment. Covers past questions, programming tests, core CS subjects, mathematics, English, and interview templates.",
      link: "https://github.com/ouyangyipeng/SYSU-CS-baoyan",
      skills: ["Computer Science", "Education", "Open Source"],
      role: "Maintainer",
      level: "Community Project",
    },
  ],
  zh: [
    {
      name: "Nexa",
      description:
        "面向 Agent 工作流的 DSL，将模型、工具、上下文和执行约束纳入语言结构，提供静态检查与执行运行时。",
      link: "https://github.com/Nexa-Language/Nexa",
      skills: ["Python", "Rust", "Compiler", "LLM/Agent", "WASM"],
      role: "创建者 & 主要开发者",
      level: "开源项目",
      leader: "Yipeng OUYANG",
      leaderLink: "https://ouyangyipeng.github.io",
    },
    {
      name: "SLIM-ARC",
      description:
        "结合操作系统虚拟内存与稀疏专家加载的受限内存 MoE 推理系统。",
      skills: ["MoE Inference", "Operating Systems"],
      role: "项目负责人",
      level: "2026 系统能力大赛操作系统设计赛全国一等奖",
    },
    {
      name: "ASCEND-OK",
      description:
        "面向 Triton-Ascend 和昇腾 A2/A3 的约束感知进化算子优化。由 LLM 生成变异，通过编译、正确性检查和真实 NPU 测量筛选候选实现。",
      link: "https://github.com/ouyangyipeng/ASCEND-OK",
      skills: ["Python", "Triton", "Ascend NPU", "Evolutionary Search"],
      role: "项目负责人",
      level: "2026 系统能力大赛编译系统设计赛全国三等奖",
    },
    {
      name: "DS-Harness Desktop",
      description:
        "面向 macOS 和 Windows 的非官方社区客户端，打包官方 DeepSeek Harness Web 界面与运行时，提供运行时隔离、健康检查、进程生命周期管理和内置插件市场。",
      link: "https://github.com/ouyangyipeng/dsh-desktop",
      skills: ["TypeScript", "Electron", "Node.js"],
      level: "社区项目",
    },
    {
      name: "DSH Marketplace",
      description:
        "非官方 DSH bundle，在原生设置界面发现、搜索和管理 GitHub 社区插件。支持安装、更新与卸载，并提供安装暂存、manifest 与路径检查、原子 profile 更新。",
      link: "https://github.com/ouyangyipeng/dsh-marketplace",
      skills: ["TypeScript", "Node.js", "Plugins"],
      level: "社区项目",
    },
    {
      name: "YatCC-AI",
      description:
        "编译课程平台与 LLM/HPC 工作台。负责 AI Hub 和教学文档，支持编译实验与 LLM 辅助源码优化。",
      link: "https://yatcc-ai.com/",
      skills: ["Compiler", "LLM", "HPC", "Education"],
      role: "核心成员 & AI Hub 负责人",
      level: "教学项目",
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
      name: "SYSU-CS-baoyan",
      description:
        "面向中山大学计算机保研的非官方开源学习资料，更新至 2026 考核版本。涵盖历年题目、机考、专业课、数学、英语和面试模板。",
      link: "https://github.com/ouyangyipeng/SYSU-CS-baoyan",
      skills: ["Computer Science", "Education", "Open Source"],
      role: "维护者",
      level: "社区项目",
    },
  ],
};

export function getProjects(lang: Lang): Project[] {
  return configs[lang];
}
