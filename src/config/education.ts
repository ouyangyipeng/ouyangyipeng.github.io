import type { Lang, Education } from "./types";

const configs: Record<Lang, Education[]> = {
  en: [
    {
      school: "Sun Yat-sen University (SYSU)",
      degree: "B.S. in Computer Science and Engineering",
      dateRange: "Sep 2023 - Present",
      link: "https://cse.sysu.edu.cn/",
      achievements: [
        "Overall rank 6/~400, ~1.5% (2023-2024)",
        "Overall rank 10/~300, ~3.3% (2024-2025)",
        "HUAWEI Scholarship — sole recipient in CSE School (2024)",
        "SYSU First-Class Scholarship (2024, 2025)",
        "First-Class Ethical Leadership Scholarship (2025)",
      ],
    },
    {
      school: "International Geography Olympiad (iGeo)",
      degree: "National Training Team Member",
      dateRange: "Jun 2021 - Jun 2022",
      link: "http://www.igeocn.com/igeocn/senior_school/20211129/huojiang%20xuesheng.pdf",
      achievements: [
        "iGeo China Regional — Gold Medal (2021)",
        "iGeo National Training Team — Top 20 (2022)",
      ],
    },
    {
      school: "Guangzhou No.2 High School (GZEZ)",
      degree: "High School Diploma",
      dateRange: "Sep 2020 - Jul 2023",
      achievements: [],
    },
  ],
  zh: [
    {
      school: "中山大学",
      degree: "计算机科学与技术 本科",
      dateRange: "2023.09 - 至今",
      link: "https://cse.sysu.edu.cn/",
      achievements: [
        "综合排名 6/~400, ~1.5% (2023-2024)",
        "综合排名 10/~300, ~3.3% (2024-2025)",
        "华为奖学金 — CSE 学院唯一获得者 (2024)",
        "中山大学一等奖学金 (2024, 2025)",
        "一等道德领导力奖学金 (2025)",
      ],
    },
    {
      school: "国际地理奥林匹克竞赛 (iGeo)",
      degree: "国家集训队成员",
      dateRange: "2021.06 - 2022.06",
      link: "http://www.igeocn.com/igeocn/senior_school/20211129/huojiang%20xuesheng.pdf",
      achievements: [
        "iGeo 中国赛区 金牌 (2021)",
        "iGeo 国家集训队前20 (2022)",
      ],
    },
    {
      school: "广州市第二中学",
      degree: "高中毕业",
      dateRange: "2020.09 - 2023.07",
      achievements: [],
    },
  ],
};

export function getEducation(lang: Lang): Education[] {
  return configs[lang];
}