import type { Lang, Education } from "./types";

const configs: Record<Lang, Education[]> = {
  en: [
    {
      school: "School of Computer Science and Engineering, Sun Yat-sen University",
      degree: "Academic Master's in Computer Science and Technology",
      dateRange: "2027 Cohort",
      link: "https://cse.sysu.edu.cn/",
      achievements: [],
    },
    {
      school: "School of Computer Science and Engineering, Sun Yat-sen University",
      degree: "B.S. in Computer Science and Technology",
      dateRange: "Sep 2023 — Jun 2027 (Expected)",
      link: "https://cse.sysu.edu.cn/",
      achievements: [
        "GPA: 4.1/5.0 (university scale)",
        "Comprehensive Evaluation Ranking: 7/406 (2024, 1.7%); 10/292 (2025, 3.4%)",
        "Advised by Assoc. Prof. Xianwei Zhang at arcSYSu Lab, National Supercomputer Center of Guangzhou",
      ],
    },
  ],
  zh: [
    {
      school: "中山大学计算机学院",
      degree: "计算机科学与技术 学术型硕士",
      dateRange: "2027 级",
      link: "https://cse.sysu.edu.cn/",
      achievements: [],
    },
    {
      school: "中山大学计算机学院",
      degree: "计算机科学与技术 本科",
      dateRange: "2023.09 — 2027.06（预计）",
      link: "https://cse.sysu.edu.cn/",
      achievements: [
        "GPA：4.1/5.0（学校原始绩点口径）",
        "综合测评排名: 7/406 (2024, 1.7%); 10/292 (2025, 3.4%)",
        "导师: 张献伟副教授，arcSYSu 实验室，广州国家超算中心",
      ],
    },
  ],
};

export function getEducation(lang: Lang): Education[] {
  return configs[lang];
}
