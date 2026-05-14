import type { Lang, Paper } from "./types";

const configs: Record<Lang, Paper[]> = {
  en: [
    // Pinned: Nexa
    {
      title: "Nexa: A Native Domain-Specific Language and Virtual Machine for Agentic Workflows",
      venue: "Preprint | COLM 2026 Submission",
      status: "preprint",
      authors: "Yipeng Ouyang, Xianwei Zhang",
      myRole: "First Author",
      creditRoles: ["Conceptualization", "Methodology", "Project administration", "Writing - original draft"],
      dois: ["10.12074/202604.00318", "10.5281/zenodo.19994262"],
      pinned: true,
    },
    // Pinned: SkCC
    {
      title: "SkCC: Portable and Secure Skill Compilation for Cross-Framework LLM Agents",
      venue: "Preprint | NeurIPS 2026 Submission",
      status: "preprint",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "First Author",
      dois: ["10.48550/ARXIV.2605.03353"],
      pinned: true,
    },
    // GraphSkill (NeurIPS 2026 submission, deduplicated from workshop version)
    {
      title: "GraphSkill: Topology-Aware Dynamic Skill Routing for LLM Agents via Graph-Enhanced Retrieval",
      venue: "NeurIPS 2026",
      level: "CCF-A",
      status: "submitting",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "First Author",
    },
    // SkillCompiler (ACM CAIS 2026 Workshop)
    {
      title: "SkillCompiler: A Unified Compilation Framework for Cross-Platform LLM Agent Skills",
      venue: "ACM CAIS 2026 Workshop AgentSkills",
      status: "submitting",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "First Author",
    },
    // XFuse
    {
      title: "XFuse: PTX Level Code Fusion for GPU Concurrent Kernel Execution",
      venue: "TACO",
      level: "CCF-A",
      status: "submitting",
      authors: "K. Wu, Y. Ouyang et al.",
      myRole: "Co-author",
      contribution: "Extension of GoPTX with additional tuning parameters and kernel matching strategies, achieving 15.8% overall performance improvement",
    },
    // YatCC-AI
    {
      title: "YatCC-AI: LLM Augmented HPC Workbench Prototype for Practices and Researches",
      venue: "CHI",
      level: "CCF-A",
      status: "submitting",
      authors: "K. Wu, H. Chen, Z. Zhu, Q. Lin, Y. Ouyang et al.",
      myRole: "Co-author",
      contribution: "AI/LLM module construction and key documentation writing",
    },
    // WARM
    {
      title: "WARM: WebAssembly-based Multi-request Aggregation for Optimizing LLM Applications",
      venue: "NeurIPS",
      level: "CCF-A",
      status: "submitting",
      authors: "Y. Han et al.",
      myRole: "Non-author contributor",
      contribution: "Layout and figure design",
    },
    // GoPTX (accepted)
    {
      title: "GoPTX: PTX Level Code Fusion for GPU Concurrent Kernel Execution",
      venue: "DAC'25",
      level: "CCF-A",
      status: "accepted",
      authors: "K. Wu et al.",
      myRole: "Co-author",
      contribution: "Predecessor work to XFuse",
      link: "https://doi.org/10.5281/zenodo.19994263",
    },
    // CVPR'25 (accepted)
    {
      title: "Towards Long-Horizon Vision-Language Navigation: Platform, Benchmark and Method",
      venue: "CVPR'25",
      level: "CCF-A",
      status: "accepted",
      authors: "Xinshuai Song et al.",
      myRole: "Non-author contributor",
      contribution: "Data screening and code review",
    },
    // 3DAffordSplat
    {
      title: "3DAffordSplat: Efficient Affordance Reasoning with 3D Gaussians",
      venue: "Preprint",
      status: "preprint",
      authors: "Zeming Wei et al.",
      myRole: "Non-author contributor",
      contribution: "Data screening and annotation",
    },
  ],
  zh: [
    // Pinned: Nexa
    {
      title: "Nexa: A Native Domain-Specific Language and Virtual Machine for Agentic Workflows",
      venue: "预印本 | COLM 2026 投稿",
      status: "preprint",
      authors: "Yipeng Ouyang, Xianwei Zhang",
      myRole: "第一作者",
      creditRoles: ["概念化", "方法论", "项目管理", "原创撰写"],
      dois: ["10.12074/202604.00318", "10.5281/zenodo.19994262"],
      pinned: true,
    },
    // Pinned: SkCC
    {
      title: "SkCC: Portable and Secure Skill Compilation for Cross-Framework LLM Agents",
      venue: "预印本 | NeurIPS 2026 投稿",
      status: "preprint",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "第一作者",
      dois: ["10.48550/ARXIV.2605.03353"],
      pinned: true,
    },
    // GraphSkill
    {
      title: "GraphSkill: Topology-Aware Dynamic Skill Routing for LLM Agents via Graph-Enhanced Retrieval",
      venue: "NeurIPS 2026",
      level: "CCF-A",
      status: "submitting",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "第一作者",
    },
    // SkillCompiler
    {
      title: "SkillCompiler: A Unified Compilation Framework for Cross-Platform LLM Agent Skills",
      venue: "ACM CAIS 2026 Workshop AgentSkills",
      status: "submitting",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "第一作者",
    },
    // XFuse
    {
      title: "XFuse: PTX Level Code Fusion for GPU Concurrent Kernel Execution",
      venue: "TACO",
      level: "CCF-A",
      status: "submitting",
      authors: "K. Wu, Y. Ouyang et al.",
      myRole: "共同作者",
      contribution: "GoPTX 的扩展工作，增加多种调优参数与内核匹配策略，总体性能提升至 15.8%",
    },
    // YatCC-AI
    {
      title: "YatCC-AI: LLM Augmented HPC Workbench Prototype for Practices and Researches",
      venue: "CHI",
      level: "CCF-A",
      status: "submitting",
      authors: "K. Wu, H. Chen, Z. Zhu, Q. Lin, Y. Ouyang et al.",
      myRole: "共同作者",
      contribution: "AI/LLM 部分构造，重要文档编写",
    },
    // WARM
    {
      title: "WARM: WebAssembly-based Multi-request Aggregation for Optimizing LLM Applications",
      venue: "NeurIPS",
      level: "CCF-A",
      status: "submitting",
      authors: "Y. Han et al.",
      myRole: "非作者贡献者",
      contribution: "参与排版、图片布局",
    },
    // GoPTX
    {
      title: "GoPTX: PTX Level Code Fusion for GPU Concurrent Kernel Execution",
      venue: "DAC'25",
      level: "CCF-A",
      status: "accepted",
      authors: "K. Wu et al.",
      myRole: "共同作者",
      contribution: "XFuse 的前序工作",
      link: "https://doi.org/10.5281/zenodo.19994263",
    },
    // CVPR'25
    {
      title: "Towards Long-Horizon Vision-Language Navigation: Platform, Benchmark and Method",
      venue: "CVPR'25",
      level: "CCF-A",
      status: "accepted",
      authors: "Xinshuai Song et al.",
      myRole: "非作者贡献者",
      contribution: "数据筛选，代码 review",
    },
    // 3DAffordSplat
    {
      title: "3DAffordSplat: Efficient Affordance Reasoning with 3D Gaussians",
      venue: "预印本",
      status: "preprint",
      authors: "Zeming Wei et al.",
      myRole: "非作者贡献者",
      contribution: "数据筛选、标注",
    },
  ],
};

export function getResearch(lang: Lang): Paper[] {
  return configs[lang];
}