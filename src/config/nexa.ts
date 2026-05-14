import type { NexaConfig } from "./types";

export const nexa: NexaConfig = {
  intro:
    "Nexa is the first Harness Native Agent Language — where agent safety is enforced by the compiler, not by runtime frameworks. Write flows, not glue code. 16+ features, 1,500+ tests, Rust AVM runtime with WASM sandboxing.",
  links: [
    {
      name: "Documentation",
      description: "Full language reference, compiler architecture, and quick start guides.",
      url: "https://docs.nexa-lang.com/en/",
      icon: "📚",
    },
    {
      name: "SkCC",
      description: "Skills Compiler — compile agent skills into optimized runtime modules.",
      url: "https://skcc.nexa-lang.com/",
      icon: "🔧",
    },
    {
      name: "evobench",
      description: "Agent benchmark suite — measure and compare autonomous agent performance.",
      url: "https://evobench.nexa-lang.com/",
      icon: "🧪",
    },
    {
      name: "epicontext",
      description: "Evolutionary context management — genetic algorithms for optimal context windows.",
      url: "https://epicontext.nexa-lang.com/",
      icon: "🧬",
    },
    {
      name: "Nexa Organization",
      description: "GitHub organization with all Nexa projects and repositories.",
      url: "https://github.com/Nexa-Language",
      icon: "🏛️",
    },
    {
      name: "Author",
      description: "Owen — creator of the Nexa language and Harness Native methodology.",
      url: "https://author.nexa-lang.com/",
      icon: "👤",
    },
  ],
  github: "https://github.com/Nexa-Language/Nexa",
  paper: "https://doi.org/10.5281/zenodo.19994263",
  docs: "https://docs.nexa-lang.com/en/",
};