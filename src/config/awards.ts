import type { Lang, Award } from "./types";

const configs: Record<Lang, Award[]> = {
  en: [
    {
      title: "National Scholarship · Announced Selection",
      date: "2025–2026 academic year",
      description: "Listed in the scholarship selection announcement at Sun Yat-sen University.",
    },
    {
      title: "National First Prize · Operating System Design Contest",
      date: "2026",
      description: "National College Computer System Capability Competition · SLIM-ARC · Team leader",
    },
    {
      title: "National Third Prize · Compiler System Design Contest",
      date: "2026",
      description: "National College Computer System Capability Competition · ASCEND-OK · Team leader",
      link: "https://github.com/ouyangyipeng/ASCEND-OK",
    },
    {
      title: "Two Grand Prizes · AI Teaching Cases",
      date: "Jul 2026",
      description: "AI ‘101 Plan’ core-course teaching workshop and national workshop on frontier AI courses · YatCC-AI · First student author",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "First Prize · AI+ Computer Education Teaching Cases",
      date: "Jul 2026",
      description: "National conference on AI+ computer education · YatCC-AI · First student author",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "Grand Prize · CCEC Case Competition",
      date: "2025",
      description: "YatCC team · Conference on Computer Education of China",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "First Prize · CCEC Case Competition",
      date: "2024",
      description: "YatCC team · Conference on Computer Education of China",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "First-Class Scholarship · Three Consecutive Years",
      date: "2023–2024, 2024–2025, 2025–2026",
      description: "Sun Yat-sen University · The 2025–2026 selection has been announced.",
    },
    {
      title: "Huawei Scholarship",
      date: "2023–2024 academic year",
      description: "Sun Yat-sen University",
    },
    {
      title: "First-Class Scholarship for Moral Excellence",
      description: "Sun Yat-sen University",
    },
  ],
  zh: [
    {
      title: "国家奖学金（公示入选）",
      date: "2025–2026 学年",
      description: "入选中山大学本学年奖学金评选公示名单。",
    },
    {
      title: "操作系统设计赛全国一等奖",
      date: "2026",
      description: "全国大学生计算机系统能力大赛 · SLIM-ARC · 队长",
    },
    {
      title: "编译系统设计赛全国三等奖",
      date: "2026",
      description: "全国大学生计算机系统能力大赛 · ASCEND-OK · 队长",
      link: "https://github.com/ouyangyipeng/ASCEND-OK",
    },
    {
      title: "两项人工智能教学案例特等奖",
      date: "2026.07",
      description: "教育部人工智能领域“101 计划”核心课程备课会、全国高校人工智能前沿课程研讨会 · YatCC-AI · 学生第一作者",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "“人工智能+”计算机教育教学案例一等奖",
      date: "2026.07",
      description: "全国高校“人工智能+”计算机教育大会 · YatCC-AI · 学生第一作者",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "CCEC 案例竞赛特等奖",
      date: "2025",
      description: "中国计算机教育大会 · YatCC 团队",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "CCEC 案例竞赛一等奖",
      date: "2024",
      description: "中国计算机教育大会 · YatCC 团队",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "中山大学一等奖学金（连续三学年）",
      date: "2023–2024、2024–2025、2025–2026 学年",
      description: "2025–2026 学年评选结果已公示。",
    },
    {
      title: "华为奖学金",
      date: "2023–2024 学年",
      description: "中山大学",
    },
    {
      title: "道德风尚一等奖学金",
      description: "中山大学",
    },
  ],
};

export function getAwards(lang: Lang): Award[] {
  return configs[lang];
}
