import type { Lang, Paper } from "./types";

const configs: Record<Lang, Paper[]> = {
  en: [
    // 1. SkillCompiler — Agent Skills'26 (Accepted)
    {
      title: "SkillCompiler: A Unified Compilation Framework for Cross-Platform LLM Agent Skills",
      venue: "ACM CAIS 2026 Workshop AgentSkills",
      status: "accepted",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "First Author",
      link: "https://www.agentskills-workshop.org/",
      pinned: true,
    },
    // 2. RAMP — ATC'26 (CCF-A, Submitted)
    {
      title: "Benchmarks are Not Enough: RAMP for Runtime Assessing of Agentic Models in Production Systems",
      venue: "USENIX ATC",
      level: "CCF-A",
      status: "submitting",
      authors: "Yipeng Ouyang, et al.",
      myRole: "First Author",
      link: "https://arxiv.org/abs/2605.27492",
      pinned: true,
    },
    // 3. SkCC — NeurIPS'26 (CCF-A, Under Review)
    {
      title: "SkCC: Portable and Secure Skill Compilation for Cross-Framework LLM Agents",
      venue: "NeurIPS",
      level: "CCF-A",
      status: "submitting",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "First Author",
      link: "https://arxiv.org/abs/2605.03353",
      pinned: true,
    },
    // 4. GraphSkill — NeurIPS'26 (CCF-A, Under Review)
    {
      title: "GraphSkill: Topology-Aware Dynamic Skill Routing for LLM Agents via Graph-Enhanced Retrieval",
      venue: "NeurIPS",
      level: "CCF-A",
      status: "submitting",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "First Author",
    },
    // 5. XFuse — TACO (CCF-A, Submitted)
    {
      title: "XFuse: PTX Level Code Fusion for GPU Concurrent Kernel Execution",
      venue: "TACO",
      level: "CCF-A",
      status: "submitting",
      authors: "Kan Wu, Yipeng Ouyang, et al.",
      myRole: "Co-author",
      contribution: "Extension of GoPTX with additional tuning parameters and kernel matching strategies, achieving 15.8% overall performance improvement",
    },
    // 6. Nexa — CoLM'26 (Under Review)
    {
      title: "Nexa: The First Harness-Native Domain Specific Language for LLM-Agents",
      venue: "CoLM",
      status: "submitting",
      authors: "Yipeng Ouyang, Xianwei Zhang",
      myRole: "First Author",
      link: "https://www.nexa-lang.com/",
      dois: ["10.12074/202604.00318", "10.5281/zenodo.19994262"],
      pinned: true,
    },
    // 7. YatCC-AI — Software Copyright (Pending)
    {
      title: "YatCC-AI: AI-Integrated Service Platform Bridging Applications, Systems, and Computing Power",
      venue: "Software Copyright",
      status: "preprint",
      authors: "K. Wu, H. Chen, Z. Zhu, Q. Lin, Y. Ouyang et al.",
      myRole: "Core Member (Team Leader of AI Hub)",
      contribution: "Core member and team leader of AI Hub (1 of 3 main parts in YatCC), construction and documentation",
    },
  ],
  zh: [
    // 1. SkillCompiler — Agent Skills'26 (已录用)
    {
      title: "SkillCompiler: A Unified Compilation Framework for Cross-Platform LLM Agent Skills",
      venue: "ACM CAIS 2026 Workshop AgentSkills",
      status: "accepted",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "第一作者",
      link: "https://www.agentskills-workshop.org/",
      pinned: true,
    },
    // 2. RAMP — ATC'26 (CCF-A, 投稿中)
    {
      title: "Benchmarks are Not Enough: RAMP for Runtime Assessing of Agentic Models in Production Systems",
      venue: "USENIX ATC",
      level: "CCF-A",
      status: "submitting",
      authors: "Yipeng Ouyang, et al.",
      myRole: "第一作者",
      link: "https://arxiv.org/abs/2605.27492",
      pinned: true,
    },
    // 3. SkCC — NeurIPS'26 (CCF-A, 审稿中)
    {
      title: "SkCC: Portable and Secure Skill Compilation for Cross-Framework LLM Agents",
      venue: "NeurIPS",
      level: "CCF-A",
      status: "submitting",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "第一作者",
      link: "https://arxiv.org/abs/2605.03353",
      pinned: true,
    },
    // 4. GraphSkill — NeurIPS'26 (CCF-A, 审稿中)
    {
      title: "GraphSkill: Topology-Aware Dynamic Skill Routing for LLM Agents via Graph-Enhanced Retrieval",
      venue: "NeurIPS",
      level: "CCF-A",
      status: "submitting",
      authors: "Yipeng Ouyang, Yi Xiao, Yuhao Gu, Xianwei Zhang",
      myRole: "第一作者",
    },
    // 5. XFuse — TACO (CCF-A, 投稿中)
    {
      title: "XFuse: PTX Level Code Fusion for GPU Concurrent Kernel Execution",
      venue: "TACO",
      level: "CCF-A",
      status: "submitting",
      authors: "Kan Wu, Yipeng Ouyang, et al.",
      myRole: "共同作者",
      contribution: "GoPTX 的扩展工作，增加多种调优参数与内核匹配策略，总体性能提升至 15.8%",
    },
    // 6. Nexa — CoLM'26 (审稿中)
    {
      title: "Nexa: The First Harness-Native Domain Specific Language for LLM-Agents",
      venue: "CoLM",
      status: "submitting",
      authors: "Yipeng Ouyang, Xianwei Zhang",
      myRole: "第一作者",
      link: "https://www.nexa-lang.com/",
      dois: ["10.12074/202604.00318", "10.5281/zenodo.19994262"],
      pinned: true,
    },
    // 7. YatCC-AI — 软件著作权（申请中）
    {
      title: "YatCC-AI: AI-Integrated Service Platform Bridging Applications, Systems, and Computing Power",
      venue: "软件著作权",
      status: "preprint",
      authors: "K. Wu, H. Chen, Z. Zhu, Q. Lin, Y. Ouyang et al.",
      myRole: "核心成员（AI Hub 负责人）",
      contribution: "核心成员及 AI Hub 团队负责人（YatCC 三大模块之一），负责构造与文档编写",
    },
  ],
};

export function getResearch(lang: Lang): Paper[] {
  return configs[lang];
}
