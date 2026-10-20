import type { Lang, AboutConfig } from "./types";

const configs: Record<Lang, AboutConfig> = {
  en: {
    bio: [
      "I am in the ",
      { strong: "Academic M.S." },
      " in Computer Science and Technology program at the School of Computer Science and Engineering, ",
      { strong: "Sun Yat-sen University (2027 Entry)" },
      ". I work with ",
      { strong: "Prof. Xianwei Zhang" },
      " in ",
      { strong: "arcSYSu Lab" },
      " at the National Supercomputer Center in Guangzhou and as an ",
      { strong: "AI Agent R&D intern at ByteDance" },
      ". My research in ",
      { strong: "Agentic System" },
      " and ",
      { strong: "AI Infrastructure" },
      " asks how to describe agent capabilities precisely, execute them reliably, and run them efficiently on real hardware. I build agent languages and runtimes, study skill compilation and runtime evaluation, and work on memory-constrained inference and GPU/NPU optimization.",
    ],
    skills: [
      "Python",
      "C/C++",
      "Rust",
      "CUDA / Triton",
      "LLVM",
      "Linux",
    ],
    researchDirections: [
      "Agentic System",
      "AI Infrastructure",
    ],
  },
  zh: {
    bio: [
      "我是",
      { strong: "中山大学计算机学院" },
      "计算机科学与技术专业 ",
      { strong: "2027 级学术型硕士" },
      "，在国家超级计算广州中心 ",
      { strong: "arcSYSu 实验室" },
      "接受",
      { strong: "张献伟老师" },
      "指导，目前也在",
      { strong: "字节跳动" },
      "从事 AI Agent 研发实习。我的研究方向为 ",
      { strong: "Agentic System" },
      " 和 ",
      { strong: "AI Infrastructure" },
      "，关心如何准确描述智能体的能力、可靠地执行任务，并在真实硬件上高效运行。研究与开发工作涵盖智能体语言与运行时、技能编译、运行期评估，以及受限内存下的模型推理和 GPU/NPU 性能优化。",
    ],
    skills: [
      "Python",
      "C/C++",
      "Rust",
      "CUDA / Triton",
      "LLVM",
      "Linux",
    ],
    researchDirections: [
      "智能体系统（Agentic System）",
      "AI 基础设施（AI Infrastructure）",
    ],
  },
};

export function getAbout(lang: Lang): AboutConfig {
  return configs[lang];
}
