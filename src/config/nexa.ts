import type { Lang, NexaConfig } from "./types";

const configs: Record<Lang, NexaConfig> = {
  en: {
    homepage: "https://www.nexa-lang.com",
    intro:
      "Nexa is a domain-specific language for agent workflows. It represents models, tools, context, and execution constraints in the language, combining compile-time checks with runtime support. The project includes a Python runtime, a Rust Agent Virtual Machine, and WASM sandbox integration.",
    links: [
      {
        name: "SkCC",
        description: "Research on portable skill compilation across agent frameworks.",
        url: "https://skcc.nexa-lang.com/",
        icon: "🔧",
      },
      {
        name: "RAMP",
        description: "Runtime assessment of agentic models in production workflows.",
        url: "https://ramp.nexa-lang.com/",
        icon: "🧪",
      },
      {
        name: "EpiContext",
        description: "Epigenetics-inspired adaptive context management for agent memory.",
        url: "https://epicontext.nexa-lang.com/",
        icon: "🧬",
      },
      {
        name: "Nexa Code",
        description: "A terminal coding assistant with its agent engine and harness implemented in Nexa.",
        url: "https://github.com/Nexa-Language/Nexa-Code",
        icon: "⌨️",
      },
      {
        name: "Nexa Org",
        description: "GitHub organization with all Nexa projects and repositories.",
        url: "https://github.com/Nexa-Language",
        icon: "🏛️",
      },
      {
        name: "Documentation",
        description: "Full language reference, compiler architecture, and quick start guides.",
        url: "https://docs.nexa-lang.com/en/",
        icon: "📚",
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
        name: "SkCC",
        description: "研究跨智能体框架的可移植技能编译。",
        url: "https://skcc.nexa-lang.com/",
        icon: "🔧",
      },
      {
        name: "RAMP",
        description: "面向生产工作流的智能体模型运行期评估。",
        url: "https://ramp.nexa-lang.com/",
        icon: "🧪",
      },
      {
        name: "EpiContext",
        description: "受表观遗传学启发的自适应智能体上下文管理。",
        url: "https://epicontext.nexa-lang.com/",
        icon: "🧬",
      },
      {
        name: "Nexa Code",
        description: "以 Nexa 实现智能体引擎与 Harness 的终端编程助手。",
        url: "https://github.com/Nexa-Language/Nexa-Code",
        icon: "⌨️",
      },
      {
        name: "Nexa 组织",
        description: "GitHub 组织，包含所有 Nexa 项目与仓库。",
        url: "https://github.com/Nexa-Language",
        icon: "🏛️",
      },
      {
        name: "文档",
        description: "完整语言参考、编译器架构与快速入门指南。",
        url: "https://docs.nexa-lang.com/en/",
        icon: "📚",
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
