import { getEducation } from "./education";
import { getExperience } from "./experience";
import type { Education, Experience, Lang } from "./types";

interface OrganizationLogo {
  src: string;
  alt: string;
  shape?: "round" | "wide";
  artwork?: { width: number; height: number; viewBox: string };
}

interface AcademicProgram {
  degree: string;
  dateRange: string;
  details: string[];
  summary?: string;
  advisor?: Education["advisor"];
}

interface JourneyEntry {
  organization: string;
  logos: OrganizationLogo[];
  link?: string;
  dateRange?: string;
  role?: string;
  affiliation?: string;
  bullets?: string[];
  details?: { label: string; items: string[] };
  programs?: AcademicProgram[];
  contact?: { label: string; name: string; link?: string };
  coverage?: Experience["coverage"];
}

interface JourneyGroup {
  id: "academia" | "industry" | "talks" | "service";
  title: string;
  entries: JourneyEntry[];
}

export interface JourneyConfig {
  title: string;
  academicDetailsLabel: string;
  groups: JourneyGroup[];
}

// Viewboxes exclude source-image margins; shape presets balance circles and wordmarks.
const logos = {
  sysu: {
    src: "/images/organizations/sun-yat-sen-university.png",
    alt: "Sun Yat-sen University",
    shape: "round",
    artwork: { width: 229, height: 229, viewBox: "0 0 229 229" },
  },
  arcsysu: {
    src: "/images/organizations/arcsysu.webp",
    alt: "arcSYSu Lab",
    shape: "wide",
    artwork: { width: 980, height: 490, viewBox: "116 34 780 358" },
  },
  bytedance: {
    src: "/images/organizations/bytedance.png",
    alt: "ByteDance",
    artwork: { width: 300, height: 300, viewBox: "0 15 300 267" },
  },
  aberdeen: {
    src: "/images/organizations/university-of-aberdeen.png",
    alt: "University of Aberdeen",
    artwork: { width: 180, height: 180, viewBox: "37 27 107 126" },
  },
  huawei: {
    src: "/images/organizations/huawei-petal.png",
    alt: "HUAWEI",
    artwork: { width: 96, height: 96, viewBox: "2 1 92 71" },
  },
  yatcc: {
    src: "/images/organizations/yatcc.png",
    alt: "YatCC",
    artwork: { width: 160, height: 158, viewBox: "2 1 158 155" },
  },
  studentUnion: {
    src: "/images/organizations/sysu-student-union.jpg",
    alt: "Student Union of Sun Yat-sen University",
    shape: "round",
    artwork: { width: 640, height: 640, viewBox: "2 1 637 638" },
  },
  evoagentx: {
    src: "/images/organizations/evoagentx.svg",
    alt: "EvoAgentX",
    shape: "wide",
    artwork: { width: 1920, height: 1080, viewBox: "66 33 1789 1028" },
  },
  nscc: {
    src: "/images/organizations/nscc-guangzhou.png",
    alt: "National Supercomputer Center in Guangzhou",
    artwork: { width: 583, height: 55, viewBox: "172 4 50 50" },
  },
} satisfies Record<string, OrganizationLogo>;

function getAcademia(lang: Lang): JourneyGroup {
  const education = getEducation(lang);
  const school = education[0];
  const lab = getExperience(lang).find((entry) => entry.organization.includes("arcSYSu"));

  return {
    id: "academia",
    title: lang === "en" ? "Academia" : "学术经历",
    entries: [
      {
        organization: school.school,
        link: school.link,
        logos: [logos.sysu],
        programs: [...education].reverse().map((program) => ({
          degree: program.degree,
          dateRange: program.dateRange,
          summary: program.summary,
          advisor: program.advisor,
          // The advisor is shown with the lab, separate from academic metrics.
          details: program.achievements.filter((detail) => !/Advised by|导师/.test(detail)),
        })),
      },
      {
        organization: lang === "en" ? "arcSYSu Lab" : "arcSYSu 实验室",
        link: lab?.link,
        affiliation: lang === "en"
          ? "National Supercomputer Center in Guangzhou"
          : "国家超级计算广州中心",
        logos: [logos.nscc, logos.arcsysu],
        dateRange: lab?.dateRange,
        role: lab?.title,
        details: lab && {
          label: lang === "en" ? "Research highlights" : "研究工作",
          items: lab.bullets,
        },
        contact: {
          label: lang === "en" ? "Advisor" : "导师",
          name: lang === "en" ? "Prof. Xianwei Zhang" : "张献伟老师",
          link: "https://xianweiz.github.io/",
        },
      },
    ],
  };
}

function getIndustry(lang: Lang): JourneyGroup {
  const experience = getExperience(lang)[0];

  return {
    id: "industry",
    title: lang === "en" ? "Industry" : "行业经历",
    entries: [{
      organization: experience.organization,
      link: experience.link,
      role: experience.title,
      dateRange: experience.dateRange,
      logos: [logos.bytedance],
      bullets: experience.bullets,
    }],
  };
}

function getTalks(lang: Lang): JourneyGroup {
  return {
    id: "talks",
    title: lang === "en" ? "Invited Talks" : "受邀报告",
    entries: [
      {
        organization: lang === "en" ? "University of Aberdeen · EvoAgentX" : "阿伯丁大学 · EvoAgentX",
        link: "https://www.abdn.ac.uk/",
        role: lang === "en" ? "Invited research talk" : "受邀学术报告",
        dateRange: lang === "en" ? "Jun 2026" : "2026.06",
        logos: [logos.aberdeen, logos.evoagentx],
        contact: {
          label: lang === "en" ? "Host" : "邀请人",
          name: lang === "en" ? "Dr. Siwei Liu" : "刘思危博士",
          link: "https://tedsiweiliu.github.io/",
        },
      },
      {
        organization: lang === "en" ? "HUAWEI 2012 Laboratories" : "华为 2012 实验室",
        link: "https://www.huawei.com/",
        affiliation: lang === "en"
          ? "Central Software Institute · Compilers & Virtual Machines Lab"
          : "中央软件研究院 · 编译语言与虚拟机 Lab",
        role: lang === "en" ? "Invited seminar on SkCC" : "SkCC 受邀学术沙龙",
        dateRange: lang === "en" ? "Jul 2026" : "2026.07",
        logos: [logos.huawei],
      },
    ],
  };
}

function getService(lang: Lang): JourneyGroup {
  return {
    id: "service",
    title: lang === "en" ? "Teaching & Service" : "教学与服务",
    entries: getExperience(lang).filter(entry => entry.category === "service").map(entry => ({
      organization: entry.organization,
      link: entry.link,
      role: entry.title,
      dateRange: entry.dateRange,
      logos: [entry.link?.startsWith("https://yatcc-ai.com/") ? logos.yatcc : logos.studentUnion],
      bullets: entry.bullets,
      coverage: entry.coverage,
    })),
  };
}

export function getJourney(lang: Lang): JourneyConfig {
  return {
    title: lang === "en" ? "Experience" : "学术与专业经历",
    academicDetailsLabel: lang === "en" ? "Academic details" : "学业详情",
    groups: [getAcademia(lang), getIndustry(lang), getTalks(lang), getService(lang)],
  };
}
