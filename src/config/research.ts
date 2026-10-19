import type { Lang, Paper } from "./types";

const configs: Record<Lang, Paper[]> = {
  en: [
    {
      title: "SkCC: Portable and Secure Skill Compilation for Cross-Framework LLM Agents",
      venue: "ACM CAIS 2026 — AgentSkills'26 Workshop",
      status: "accepted",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "First Author",
      contribution: "Cross-framework agent skill compilation. The workshop version is titled ‘SkillCompiler: A Unified Compilation Framework for Cross-Platform LLM Agent Skills’; the linked preprint presents SkCC.",
      link: "https://arxiv.org/abs/2605.03353",
      pinned: true,
    },
    {
      title: "Benchmarks are Not Enough: RAMP for Runtime Assessing of Agentic Models in Production Systems",
      venue: "HPC Asia 2027",
      status: "submitting",
      authors: "Yipeng Ouyang, Xin Huang, Bingjie Liu, Zhongchun Zheng, Yuhao Gu, Xianwei Zhang",
      myRole: "First Author",
      contribution: "Runtime assessment of agentic models in production systems, extending evaluation beyond offline benchmarks.",
      link: "https://arxiv.org/abs/2605.27492",
      pinned: true,
    },
    {
      title: "Nexa: The First Harness-Native Domain Specific Language for LLM-Agents",
      venue: "Agent languages & runtimes",
      authors: "Yipeng Ouyang, Xianwei Zhang",
      myRole: "First Author",
      contribution: "A domain-specific language that represents agent workflows and harness constraints explicitly, with compiler checks and runtime support.",
      link: "https://www.nexa-lang.com/",
      dois: ["10.12074/202604.00318", "10.5281/zenodo.19994262"],
      pinned: true,
    },
    {
      title: "GraphSkill: Topology-Aware Dynamic Skill Routing for LLM Agents via Graph-Enhanced Retrieval",
      venue: "Research project · Skill retrieval & routing",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "First Author",
      contribution: "Investigating how relations between skills can support retrieval and routing for complex agent tasks.",
      link: "https://github.com/ouyangyipeng/Graph-Skill",
    },
    {
      title: "XFuse: PTX Level Code Fusion for GPU Concurrent Kernel Execution",
      venue: "Research project · GPU systems",
      authors: "Kan Wu, Yipeng Ouyang, et al.",
      myRole: "Second Author",
      contribution: "PTX-level code fusion for concurrent GPU kernels, including tuning parameters and kernel matching strategies.",
    },
  ],
  zh: [
    {
      title: "SkCC: Portable and Secure Skill Compilation for Cross-Framework LLM Agents",
      venue: "ACM CAIS 2026 — AgentSkills'26 Workshop",
      status: "accepted",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "第一作者",
      contribution: "研究跨框架的智能体技能编译。Workshop 版本题为《SkillCompiler: A Unified Compilation Framework for Cross-Platform LLM Agent Skills》，链接指向 SkCC 公开预印本。",
      link: "https://arxiv.org/abs/2605.03353",
      pinned: true,
    },
    {
      title: "Benchmarks are Not Enough: RAMP for Runtime Assessing of Agentic Models in Production Systems",
      venue: "HPC Asia 2027",
      status: "submitting",
      authors: "Yipeng Ouyang, Xin Huang, Bingjie Liu, Zhongchun Zheng, Yuhao Gu, Xianwei Zhang",
      myRole: "第一作者",
      contribution: "研究生产系统中的智能体运行期评估，补充离线基准测试对实际运行表现的观察。",
      link: "https://arxiv.org/abs/2605.27492",
      pinned: true,
    },
    {
      title: "Nexa: The First Harness-Native Domain Specific Language for LLM-Agents",
      venue: "智能体语言与运行时",
      authors: "Yipeng Ouyang, Xianwei Zhang",
      myRole: "第一作者",
      contribution: "通过领域特定语言显式表达智能体工作流与 Harness 约束，结合编译期检查与运行时支持。",
      link: "https://www.nexa-lang.com/",
      dois: ["10.12074/202604.00318", "10.5281/zenodo.19994262"],
      pinned: true,
    },
    {
      title: "GraphSkill: Topology-Aware Dynamic Skill Routing for LLM Agents via Graph-Enhanced Retrieval",
      venue: "研究项目 · 技能检索与路由",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "第一作者",
      contribution: "研究如何利用技能之间的关系，为复杂智能体任务提供检索与路由支持。",
      link: "https://github.com/ouyangyipeng/Graph-Skill",
    },
    {
      title: "XFuse: PTX Level Code Fusion for GPU Concurrent Kernel Execution",
      venue: "研究项目 · GPU 系统",
      authors: "Kan Wu, Yipeng Ouyang, et al.",
      myRole: "第二作者",
      contribution: "研究 GPU 并发 Kernel 的 PTX 级代码融合，包括调优参数与 Kernel 匹配策略。",
    },
  ],
};

export function getResearch(lang: Lang): Paper[] {
  return configs[lang];
}
