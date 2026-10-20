import type { Lang, Project } from "./types";

const configs: Record<Lang, Project[]> = {
  en: [
    {
      name: "Nexa",
      presentation: "ecosystem",
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
      presentation: "featured",
      logo: "/images/projects/slim-arc.png",
      link: "https://github.com/Nexa-Language/SLIM-ARC",
      homepage: "https://slim.nexa-lang.com/",
      description:
        "Memory-constrained MoE inference combining OS virtual memory and sparse expert loading.",
      skills: ["MoE Inference", "Operating Systems"],
      role: "Project Lead",
      level: "National First Prize · CSCC 2026 OS Contest",
    },
    {
      name: "ASCEND-OK",
      presentation: "featured",
      logo: "/images/projects/ascend-ok.png",
      homepage: "https://oyyp.nexa-lang.com/ASCEND-OK/",
      description:
        "Constraint-aware evolutionary kernel optimization for Triton-Ascend on Ascend A2/A3. LLM-generated mutations are selected through compilation, correctness checks, and measurements on real NPUs.",
      link: "https://github.com/ouyangyipeng/ASCEND-OK",
      skills: ["Python", "Triton", "Ascend NPU", "Evolutionary Search"],
      role: "Project Lead",
      level: "National Third Prize · CSCC 2026 Compiler Contest",
    },
    {
      name: "ClassFox",
      homepage: "https://class.nexa-lang.com/",
      description:
        "A local-first desktop classroom assistant for transcription, contextual Q&A, and Markdown notes.",
      link: "https://github.com/ouyangyipeng/ClassAssistant",
      skills: ["Python", "Tauri", "ASR", "LLM"],
      level: "Open Source Project",
    },
    {
      name: "YatCC-AI",
      description:
        "A compiler teaching platform and LLM/HPC workbench; leading its AI Hub and teaching documentation.",
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
        "An x86-64 operating system written in Rust.",
      link: "https://github.com/ouyangyipeng/OYOS",
      skills: ["Rust", "OS", "x86-64"],
      role: "Author",
      level: "Course Project",
    },
    {
      name: "SYSU-CS-baoyan",
      description:
        "Open study materials for SYSU computer science graduate recommendation admissions, including coding tests, core subjects, and interviews.",
      link: "https://github.com/ouyangyipeng/SYSU-CS-baoyan",
      skills: ["Computer Science", "Education", "Open Source"],
      role: "Maintainer",
      level: "Community Project",
    },
  ],
  zh: [
    {
      name: "Nexa",
      presentation: "ecosystem",
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
      presentation: "featured",
      logo: "/images/projects/slim-arc.png",
      link: "https://github.com/Nexa-Language/SLIM-ARC",
      homepage: "https://slim.nexa-lang.com/",
      description:
        "结合操作系统虚拟内存与稀疏专家加载的受限内存 MoE 推理系统。",
      skills: ["MoE Inference", "Operating Systems"],
      role: "项目负责人",
      level: "2026 系统能力大赛操作系统设计赛全国一等奖",
    },
    {
      name: "ASCEND-OK",
      presentation: "featured",
      logo: "/images/projects/ascend-ok.png",
      homepage: "https://oyyp.nexa-lang.com/ASCEND-OK/",
      description:
        "面向 Triton-Ascend 和昇腾 A2/A3 的约束感知进化算子优化。由 LLM 生成变异，通过编译、正确性检查和真实 NPU 测量筛选候选实现。",
      link: "https://github.com/ouyangyipeng/ASCEND-OK",
      skills: ["Python", "Triton", "Ascend NPU", "Evolutionary Search"],
      role: "项目负责人",
      level: "2026 系统能力大赛编译系统设计赛全国三等奖",
    },
    {
      name: "ClassFox · 课狐",
      homepage: "https://class.nexa-lang.com/",
      description:
        "本地优先的桌面课堂助手，支持语音转写、课堂问答和 Markdown 笔记。",
      link: "https://github.com/ouyangyipeng/ClassAssistant",
      skills: ["Python", "Tauri", "ASR", "LLM"],
      level: "开源项目",
    },
    {
      name: "YatCC-AI",
      description:
        "编译教学平台与 LLM/HPC 工作台，负责 AI Hub 与教学文档。",
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
        "使用 Rust 编写的 x86-64 操作系统。",
      link: "https://github.com/ouyangyipeng/OYOS",
      skills: ["Rust", "OS", "x86-64"],
      role: "唯一作者",
      level: "课程项目",
    },
    {
      name: "SYSU-CS-baoyan",
      description:
        "中山大学计算机保研开源学习资料，涵盖机考、核心课程与面试。",
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
