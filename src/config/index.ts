import type { Lang, SiteConfig } from "./types";
import { getPersonal } from "./personal";
import { getAbout } from "./about";
import { getProjects } from "./projects";
import { getExperience } from "./experience";
import { getEducation } from "./education";
import { getResearch } from "./research";
import { getAwards } from "./awards";
import { getNexa } from "./nexa";

export function getSiteConfig(lang: Lang): SiteConfig {
  return {
    personal: getPersonal(lang),
    about: getAbout(lang),
    projects: getProjects(lang),
    experience: getExperience(lang),
    education: getEducation(lang),
    research: getResearch(lang),
    awards: getAwards(lang),
    nexa: getNexa(lang),
  };
}