import type { Lang, Award } from "./types";

const configs: Record<Lang, Award[]> = {
  en: [
    {
      title: "HUAWEI Scholarship '24",
      description: "Sole recipient in the CSE School",
    },
    {
      title: "SYSU First-Class Scholarship '24",
    },
    {
      title: "SYSU First-Class Scholarship '25",
    },
    {
      title: "First-Class Ethical Leadership Scholarship '25",
    },
    {
      title: "Top Grand Prize — CCEC'25",
      description: "China Computer Education Conference, YatCC-AI team",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "First Prize — CCEC'24",
      description: "China Computer Education Conference, YatCC-AI team",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "Best Poster Award — DSI'24",
      description: "Workshop of Data Sharing and Infrastructure (China, Japan, Korea), December 2024. 1st place.",
    },
    {
      title: "SYSU Programming Competition — Silver '25",
      description: "Novice category",
    },
    {
      title: "SYSU Programming Competition — Bronze '24",
      description: "Novice category",
    },
    {
      title: "iGeo China Regional — Gold Medal '21",
      description: "International Geography Olympiad, China regional",
    },
    {
      title: "iGeo National Training Team — Top 20 '22",
      description: "International Geography Olympiad, national training team",
    },
    {
      title: "National University Math Competition — Provincial 3rd Prize",
    },
    {
      title: "W4terCTF Excellence Award",
      description: "SYSU cybersecurity competition",
    },
    {
      title: "7th World Youth Calligraphy Competition — Bronze Medal",
      description: "Chinese calligraphy (running, cursive, regular script)",
    },
    {
      title: "SYSU Photography Competition — 1st Place '25",
      description: "CSE School return-to-home practice photography contest",
    },
  ],
  zh: [
    {
      title: "华为奖学金 '24",
      description: "CSE 学院唯一获得者",
    },
    {
      title: "中山大学一等奖学金 '24",
    },
    {
      title: "中山大学一等奖学金 '25",
    },
    {
      title: "一等道德领导力奖学金 '25",
    },
    {
      title: "CCEC'25 特等奖",
      description: "中国计算机教育大会，YatCC-AI 团队",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "CCEC'24 一等奖",
      description: "中国计算机教育大会，YatCC-AI 团队",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "DSI'24 最佳海报奖",
      description: "中日韩数据共享与基础设施研讨会，2024年12月，第一名",
    },
    {
      title: "中山大学程序设计竞赛 银牌 '25",
      description: "新手组",
    },
    {
      title: "中山大学程序设计竞赛 铜牌 '24",
      description: "新手组",
    },
    {
      title: "iGeo 中国赛区 金牌 '21",
      description: "国际地理奥林匹克竞赛中国赛区",
    },
    {
      title: "iGeo 国家集训队前20 '22",
      description: "国际地理奥林匹克竞赛国家集训队",
    },
    {
      title: "全国大学生数学竞赛 省级三等奖",
    },
    {
      title: "W4terCTF 优秀奖",
      description: "中山大学网络安全赛",
    },
    {
      title: "第7届世界青少年书画大赛 铜牌",
      description: "软笔书法（行-赵王 / 草-张 / 楷-褚）",
    },
    {
      title: "中山大学返乡实践摄影比赛 第一名 '25",
      description: "计算机学院2025返乡实践摄影比赛",
    },
  ],
};

export function getAwards(lang: Lang): Award[] {
  return configs[lang];
}