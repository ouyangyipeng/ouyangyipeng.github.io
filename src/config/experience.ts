import type { Lang, Experience } from "./types";

const configs: Record<Lang, Experience[]> = {
  en: [
    {
      organization: "ByteDance",
      title: "AI Agent R&D Intern",
      dateRange: "Jul 2026 — Present",
      bullets: [
        "Developing AI agent systems and engineering tools for practical applications",
        "Connecting research on agent execution with production engineering",
      ],
    },
    {
      organization: "arcSYSu Lab, Sun Yat-sen University",
      title: "Research Member",
      dateRange: "Fall 2023 — Present",
      link: "https://xianweiz.github.io/#pple",
      bullets: [
        "Researching Agentic Systems, AI Infrastructure, and Machine Learning Systems",
        "Created Nexa and led research on skill compilation, agent runtime evaluation, and skill retrieval",
        "First-author paper SkCC accepted at ACM CAIS 2026 — AgentSkills'26 Workshop; contributed to XFuse on PTX-level GPU kernel fusion",
        "Led SLIM-ARC and ASCEND-OK, exploring memory-constrained MoE inference and Triton kernel optimization on Ascend NPUs",
      ],
    },
    {
      organization: "SYSU DCS290/292: Compiler Principles and Experiments",
      title: "Course Teaching Assistant",
      dateRange: "Spring 2024, Spring 2025, Spring 2026",
      link: "https://yatcc-ai.com/teach/s2025.html",
      bullets: [
        "Teaching assistant for Compiler Principles & Experiments course (3 semesters)",
        "Lead the AI Hub component of YatCC-AI, including its gateway portal and teaching documentation",
        "Support compiler labs, student questions, and integration of LLM tools with HPC coursework",
      ],
    },
    {
      organization: "Sun Yat-sen University Student Union",
      title: "Presidium Member · Student Development & Service",
      dateRange: "May 2026 — Present",
      bullets: [
        "Helped organize graduation flea markets and charitable donations across three campuses and five locations",
        "Served on the School of Computer Science student union presidium and as class monitor; supported peers and community education in Gaozhou and Lianzhou",
        "Recognized as a SYSU Three-Star Volunteer",
      ],
    },
  ],
  zh: [
    {
      organization: "字节跳动",
      title: "AI Agent 研发实习生",
      dateRange: "2026.07 — 至今",
      bullets: [
        "参与面向实际应用的智能体系统与工程工具研发",
        "将智能体执行相关研究与生产工程实践相结合",
      ],
    },
    {
      organization: "中山大学 arcSYSu 实验室",
      title: "科研成员",
      dateRange: "2023 秋 — 至今",
      link: "https://xianweiz.github.io/#pple",
      bullets: [
        "研究 Agentic Systems、AI Infrastructure 和 Machine Learning Systems",
        "创建 Nexa，开展技能编译、智能体运行期评估与技能检索研究",
        "第一作者论文 SkCC 获 ACM CAIS 2026 — AgentSkills'26 Workshop 录用；参与 XFuse 的 PTX 级 GPU Kernel 融合研究",
        "作为第一负责人完成 SLIM-ARC 与 ASCEND-OK，研究受限内存下的 MoE 推理和昇腾 NPU 上的 Triton 算子优化",
      ],
    },
    {
      organization: "中山大学 DCS290/292: 编译原理与实验",
      title: "课程助教",
      dateRange: "2024、2025、2026 年春季学期",
      link: "https://yatcc-ai.com/teach/s2025.html",
      bullets: [
        "编译原理与实验课程助教（3 个学期）",
        "负责 YatCC-AI 的 AI Hub 模块，建设网关门户与教学文档",
        "参与编译实验支持、课程答疑，以及大模型工具与高性能计算的教学实践",
      ],
    },
    {
      organization: "中山大学学生会",
      title: "主席团成员 · 实践与学生发展",
      dateRange: "2026.05 — 至今",
      bullets: [
        "参与组织三校区五校园毕业季跳蚤集市与公益捐赠",
        "曾任学院学生会主席团成员，持续担任班长，参与朋辈支持及高州、连州基层教育实践",
        "获中山大学三星级志愿者认证",
      ],
    },
  ],
};

export function getExperience(lang: Lang): Experience[] {
  return configs[lang];
}
