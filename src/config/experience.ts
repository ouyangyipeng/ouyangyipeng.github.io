import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    organization: "ArcSysu Lab, Sun Yat-sen University",
    title: "Undergraduate Researcher",
    dateRange: "Oct 2023 - Present",
    link: "https://xianweiz.github.io/#pple",
    bullets: [
      "Research on AI Integrated Compilers and GPU kernel optimization",
      "Contributing to XFuse (TACO, CCF-A submitting) and GoPTX (DAC'25, CCF-A)",
      "Working under Prof. Xianwei ZHANG on compiler optimization and LLM-driven compilation",
    ],
  },
  {
    organization: "HCPII Lab, Sun Yat-sen University",
    title: "Collaborative Researcher",
    dateRange: "2024 - Present",
    link: "https://www.sysu-hcp.net/home/",
    bullets: [
      "Collaborating with Prof. Liang LIN and Prof. Yang LIU on Embodied Intelligence",
      "Contributing data screening and code review for CVPR'25 paper on Vision-Language Navigation",
    ],
  },
  {
    organization: "SYSU-DCS290/292: Compiler Principles",
    title: "Course Teaching Assistant",
    dateRange: "Jan 2024 - Jul 2025",
    link: "https://yatcc-ai.com/teach/s2025.html",
    bullets: [
      "Teaching assistant for Compiler Principles & Experiments course (Spring 2024 & 2025)",
      "Co-developing YatCC-AI: the first compiler course integrating HPC + LLM source optimization",
      "Writing key documentation and AI/LLM module construction",
    ],
  },
];