import type { Lang, AboutConfig } from "./types";

const configs: Record<Lang, AboutConfig> = {
  en: {
    bio: "I am in the 2027 cohort of the academic master's program in Computer Science and Technology at the School of Computer Science and Engineering, Sun Yat-sen University. I work with Xianwei Zhang in arcSYSu Lab at the National Supercomputer Center in Guangzhou and as an AI Agent R&D intern at ByteDance. My research asks how to describe agent capabilities precisely, execute them reliably, and run them efficiently on real hardware. I build agent languages and runtimes, study skill compilation and runtime evaluation, and work on memory-constrained inference and GPU/NPU optimization.",
    skills: [
      "Python",
      "C/C++",
      "Rust",
      "TypeScript",
      "CUDA / Triton",
      "LLVM",
      "Linux",
      "Docker",
    ],
    researchDirections: [
      "Agentic Systems",
      "Machine Learning Systems",
      "Systems & Performance",
    ],
  },
  zh: {
    bio: "我是中山大学计算机学院计算机科学与技术专业 2027 级学术型硕士，在国家超级计算广州中心 arcSYSu 实验室接受张献伟老师指导，目前也在字节跳动从事 AI Agent 研发实习。我关心如何准确描述智能体的能力、可靠地执行任务，并在真实硬件上高效运行。研究与开发工作涵盖智能体语言与运行时、技能编译、运行期评估，以及受限内存下的模型推理和 GPU/NPU 性能优化。",
    skills: [
      "Python",
      "C/C++",
      "Rust",
      "TypeScript",
      "CUDA / Triton",
      "LLVM",
      "Linux",
      "Docker",
    ],
    researchDirections: [
      "智能体系统（AgentSys）",
      "机器学习系统（MLSys）",
      "底层系统与性能优化",
    ],
  },
};

export function getAbout(lang: Lang): AboutConfig {
  return configs[lang];
}
