import type { Lang, NexaConfig } from "./types";

const configs: Record<Lang, NexaConfig> = {
  en: {
    homepage: "https://www.nexa-lang.com",
    intro:
      "Nexa is a domain-specific language for agent workflows. It represents models, tools, context, and execution constraints in the language, combining compile-time checks with runtime support. The project includes a Python runtime, a Rust Agent Virtual Machine, and WASM sandbox integration.",
    links: [
      {
        name: "Documentation",
        description: "Full language reference, compiler architecture, and quick start guides.",
        url: "https://docs.nexa-lang.com/en/",
        icon: "📚",
      },
      {
        name: "SkCC",
        description: "Research on portable skill compilation across agent frameworks.",
        url: "https://skcc.nexa-lang.com/",
        icon: "🔧",
      },
      {
        name: "evobench",
        description: "Agent benchmark suite — measure and compare autonomous agent performance.",
        url: "https://evobench.nexa-lang.com/",
        icon: "🧪",
      },
      {
        name: "epicontext",
        description: "Evolutionary context management — genetic algorithms for optimal context windows.",
        url: "https://epicontext.nexa-lang.com/",
        icon: "🧬",
      },
      {
        name: "Nexa Organization",
        description: "GitHub organization with all Nexa projects and repositories.",
        url: "https://github.com/Nexa-Language",
        icon: "🏛️",
      },
    ],
    github: "https://github.com/Nexa-Language/Nexa",
    paper: "https://doi.org/10.5281/zenodo.19994263",
    docs: "https://docs.nexa-lang.com/en/",
  },
  zh: {
    homepage: "https://www.nexa-lang.com",
    intro:
      "Nexa 是面向智能体工作流的领域特定语言，将模型、工具、上下文与执行约束纳入语言结构，结合编译期检查与运行时支持。项目包含 Python 运行时、Rust Agent Virtual Machine，以及 WASM 沙箱集成。",
    links: [
      {
        name: "文档",
        description: "完整语言参考、编译器架构与快速入门指南。",
        url: "https://docs.nexa-lang.com/en/",
        icon: "📚",
      },
      {
        name: "SkCC",
        description: "研究跨智能体框架的可移植技能编译。",
        url: "https://skcc.nexa-lang.com/",
        icon: "🔧",
      },
      {
        name: "evobench",
        description: "Agent 基准测试套件 — 测量与比较自主 Agent 性能。",
        url: "https://evobench.nexa-lang.com/",
        icon: "🧪",
      },
      {
        name: "epicontext",
        description: "进化式上下文管理 — 基于遗传算法的最优上下文窗口。",
        url: "https://epicontext.nexa-lang.com/",
        icon: "🧬",
      },
      {
        name: "Nexa 组织",
        description: "GitHub 组织，包含所有 Nexa 项目与仓库。",
        url: "https://github.com/Nexa-Language",
        icon: "🏛️",
      },
    ],
    github: "https://github.com/Nexa-Language/Nexa",
    paper: "https://doi.org/10.5281/zenodo.19994263",
    docs: "https://docs.nexa-lang.com/en/",
  },
};

export function getNexa(lang: Lang): NexaConfig {
  return configs[lang];
}
