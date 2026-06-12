import type { Lang, Award } from "./types";

const configs: Record<Lang, Award[]> = {
  en: [
    {
      title: "National Top Grand Prize (YatCC Team)",
      description: "CCF Conference on Computer Education of China, Case Competition",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "National First Prize (YatCC Team)",
      description: "CCF Conference on Computer Education of China, Case Competition",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "Huawei Scholarship (1/406)",
      description: "Huawei Technologies Co., Ltd.",
    },
    {
      title: "First-Class Scholarship",
      description: "Sun Yat-sen University",
    },
    {
      title: "Specialized Merit Scholarship (1/406)",
      description: "Sun Yat-sen University",
    },
    {
      title: "Silver Prize — SYSU Programming Novice Contest",
    },
  ],
  zh: [
    {
      title: "CCEC'25 特等奖（YatCC 团队）",
      description: "中国计算机教育大会，案例竞赛",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "CCEC'24 一等奖（YatCC 团队）",
      description: "中国计算机教育大会，案例竞赛",
      link: "https://yatcc-ai.com/",
    },
    {
      title: "华为奖学金 (1/406)",
      description: "华为技术有限公司",
    },
    {
      title: "中山大学一等奖学金",
    },
    {
      title: "专项优秀奖学金 (1/406)",
      description: "中山大学",
    },
    {
      title: "中山大学程序设计新手赛 银牌",
    },
  ],
};

export function getAwards(lang: Lang): Award[] {
  return configs[lang];
}
