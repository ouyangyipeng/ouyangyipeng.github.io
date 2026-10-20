import type { Lang, Education } from "./types";

const configs: Record<Lang, Education[]> = {
  en: [
    {
      school: "School of Computer Science and Engineering, Sun Yat-sen University",
      degree: "Academic M.S. in Computer Science and Technology",
      dateRange: "2027 Entry",
      summary: "Pre-admission ranking: 6/589 · Recommendation eligibility ranking: 16/292 · Admitted through recommendation",
      advisor: {
        name: "Prof. Xianwei Zhang",
        link: "https://xianweiz.github.io/",
        lab: "arcSYSu Lab",
        labLink: "https://arcsysu.tech/",
      },
      link: "https://cse.sysu.edu.cn/",
      achievements: [],
    },
    {
      school: "School of Computer Science and Engineering, Sun Yat-sen University",
      degree: "B.S. in Computer Science and Technology",
      dateRange: "2023 Entry · Expected Jun 2027",
      link: "https://cse.sysu.edu.cn/",
      achievements: [
        "GPA: 4.1/5.0 (university scale)",
        "Comprehensive Evaluation Ranking: 7/406 (2024, 1.7%); 10/292 (2025, 3.4%)",
      ],
    },
  ],
  zh: [
    {
      school: "中山大学计算机学院",
      degree: "计算机科学与技术 学术型硕士",
      dateRange: "2027 级",
      summary: "预推免排名：6/589 · 推免资格排名：16/292 · 成功保研",
      advisor: {
        name: "张献伟老师",
        link: "https://xianweiz.github.io/",
        lab: "arcSYSu 实验室",
        labLink: "https://arcsysu.tech/",
      },
      link: "https://cse.sysu.edu.cn/",
      achievements: [],
    },
    {
      school: "中山大学计算机学院",
      degree: "计算机科学与技术 本科",
      dateRange: "2023 级 · 预计 2027.06 毕业",
      link: "https://cse.sysu.edu.cn/",
      achievements: [
        "GPA：4.1/5.0（学校原始绩点口径）",
        "综合测评排名: 7/406 (2024, 1.7%); 10/292 (2025, 3.4%)",
      ],
    },
  ],
};

export function getEducation(lang: Lang): Education[] {
  return configs[lang];
}
