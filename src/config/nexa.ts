import type { Lang, NexaConfig } from "./types";

const configs: Record<Lang, NexaConfig> = {
  en: {
    homepage: "https://www.nexa-lang.com",
    intro:
      "Nexa is the first Harness Native Agent Language — where agent safety is enforced by the compiler, not by runtime frameworks. Write flows, not glue code. 16+ features, 1,500+ tests, Rust AVM runtime with WASM sandboxing.",
    links: [
      {
        name: "Documentation",
        description: "Full language reference, compiler architecture, and quick start guides.",
        url: "https://docs.nexa-lang.com/en/",
        icon: "📚",
      },
      {
        name: "SkCC",
        description: "Skills Compiler — compile agent skills into optimized runtime modules.",
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
      {
        name: "Author",
        description: "Owen — creator of the Nexa language and Harness Native methodology.",
        url: "https://oyyp.nexa-lang.com/",
        icon: "👤",
      },
    ],
    github: "https://github.com/Nexa-Language/Nexa",
    paper: "https://doi.org/10.5281/zenodo.19994263",
    docs: "https://docs.nexa-lang.com/en/",
  },
  zh: {
    homepage: "https://www.nexa-lang.com",
    intro:
      "Nexa 是首个 Harness Native Agent Language — 由编译器而非运行时框架强制保障 Agent 安全。写流程，不写胶水代码。16+ 特性，1,500+ 测试，Rust AVM 运行时 + WASM 沙箱。",
    links: [
      {
        name: "文档",
        description: "完整语言参考、编译器架构与快速入门指南。",
        url: "https://docs.nexa-lang.com/en/",
        icon: "📚",
      },
      {
        name: "SkCC",
        description: "技能编译器 — 将 Agent 技能编译为优化的运行时模块。",
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
      {
        name: "作者",
        description: "Owen — Nexa 语言与 Harness Native 方法论的创建者。",
        url: "https://oyyp.nexa-lang.com/",
        icon: "👤",
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