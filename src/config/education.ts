import type { Lang, Education } from "./types";

const configs: Record<Lang, Education[]> = {
  en: [
    {
      school: "School of Computer Science and Engineering, Sun Yat-sen University",
      degree: "B.S. in Computer Science and Technology",
      dateRange: "Fall 2023 — Spring 2027",
      link: "https://cse.sysu.edu.cn/",
      achievements: [
        "GPA: 3.9/4.0",
        "Comprehensive Evaluation Ranking: 7/406 (2024, 1.7%); 10/292 (2025, 3.4%)",
        "Advised by Assoc. Prof. Xianwei Zhang at arcSYSu Lab, National Supercomputer Center of Guangzhou",
      ],
    },
  ],
  zh: [
    {
      school: "中山大学计算机科学与工程学院",
      degree: "计算机科学与技术 本科",
      dateRange: "2023.09 — 2027.06",
      link: "https://cse.sysu.edu.cn/",
      achievements: [
        "GPA: 3.9/4.0",
        "综合测评排名: 7/406 (2024, 1.7%); 10/292 (2025, 3.4%)",
        "导师: 张献伟副教授，arcSYSu 实验室，广州国家超算中心",
      ],
    },
  ],
};

export function getEducation(lang: Lang): Education[] {
  return configs[lang];
}
