import type { Lang, Experience } from "./types";

const configs: Record<Lang, Experience[]> = {
  en: [
    {
      organization: "ByteDance",
      title: "Band AI · AI Agent R&D Intern",
      dateRange: "Jul 2026 — Nov 2026",
      link: "https://www.bytedance.com/",
      bullets: [
        "Developing AI agent systems and engineering tools for practical applications",
        "Connecting research on agent execution with production engineering",
      ],
    },
    {
      organization: "arcSYSu Lab, National Supercomputer Center in Guangzhou",
      title: "Research Member",
      dateRange: "Fall 2023 — Present",
      link: "https://arcsysu.tech/",
      bullets: [
        "Researching Agentic System and AI Infrastructure",
        "Created Nexa and led research on skill compilation, agent runtime evaluation, and skill retrieval",
        "First-author paper SkCC accepted at ACM CAIS 2026 — AgentSkills'26 Workshop; contributed to XFuse on PTX-level GPU kernel fusion",
        "Led SLIM-ARC and ASCEND-OK, exploring memory-constrained MoE inference and Triton kernel optimization on Ascend NPUs",
      ],
    },
    {
      organization: "SYSU DCS290/292: Compiler Principles and Experiments",
      category: "service",
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
      organization: "52nd Student Union of Sun Yat-sen University",
      category: "service",
      title: "President",
      dateRange: "May 2026 — Present",
      coverage: {
        label: "Nanfang Daily · Nanfang Plus feature",
        url: "https://h5.nfnews.com/young-reportor-contribute/index.html?route=workDetail&workId=1298720062989369345&id=1291326539643023361&from=weChatMessage&isSnapshotuser=null&code=200&evidence=5366550b-5326-4291-8e70-4337e8f30f0e#/workDetail",
      },
      bullets: [
        "Founded “Qingjin Duxing” (青衿笃行), a rural service initiative under the Sanxiaxiang and Baiqianwan programs, and personally led its team to Lianzhou in July 2026; featured by Nanfang Daily · Nanfang Plus",
        "Helped organize graduation flea markets and charitable donations across three campuses and five locations",
        "Served on the School of Computer Science student union presidium and as class monitor; supported peers and community education in Gaozhou",
      ],
    },
  ],
  zh: [
    {
      organization: "字节跳动",
      title: "Band AI 组 · Agent 研发实习生",
      dateRange: "2026.07 — 2026.11",
      link: "https://www.bytedance.com/",
      bullets: [
        "参与面向实际应用的智能体系统与工程工具研发",
        "将智能体执行相关研究与生产工程实践相结合",
      ],
    },
    {
      organization: "国家超级计算广州中心 arcSYSu 实验室",
      title: "科研成员",
      dateRange: "2023 秋 — 至今",
      link: "https://arcsysu.tech/",
      bullets: [
        "研究 Agentic System 和 AI Infrastructure",
        "创建 Nexa，开展技能编译、智能体运行期评估与技能检索研究",
        "第一作者论文 SkCC 获 ACM CAIS 2026 — AgentSkills'26 Workshop 录用；参与 XFuse 的 PTX 级 GPU Kernel 融合研究",
        "作为第一负责人完成 SLIM-ARC 与 ASCEND-OK，研究受限内存下的 MoE 推理和昇腾 NPU 上的 Triton 算子优化",
      ],
    },
    {
      organization: "中山大学 DCS290/292: 编译原理与实验",
      category: "service",
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
      organization: "中山大学第五十二届学生会",
      category: "service",
      title: "主席团成员",
      dateRange: "2026.05 — 至今",
      coverage: {
        label: "南方日报·南方+专题报道",
        url: "https://h5.nfnews.com/young-reportor-contribute/index.html?route=workDetail&workId=1298720062989369345&id=1291326539643023361&from=weChatMessage&isSnapshotuser=null&code=200&evidence=5366550b-5326-4291-8e70-4337e8f30f0e#/workDetail",
      },
      bullets: [
        "发起“青衿笃行”三下乡暨“百千万工程”社会实践项目，并于 2026 年 7 月亲自带队赴连州，获南方日报·南方+专题报道",
        "参与组织三校区五校园毕业季跳蚤集市与公益捐赠",
        "曾任学院学生会主席团成员，持续担任班长，参与朋辈支持及高州基层教育实践",
      ],
    },
  ],
};

export function getExperience(lang: Lang): Experience[] {
  return configs[lang];
}
