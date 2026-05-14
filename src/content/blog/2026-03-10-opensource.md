---
title: "Nexa Goes Open Source — v0.9-alpha Release"
description: "After months of stealth development, Nexa v0.9-alpha is now available under AGPL-3.0 on GitHub — with a working transpiler, 10+ examples, and a growing community."
pubDate: 2026-03-10
tags: ["Open Source", "v0.9", "Community"]
---

Today, we're opening the doors. After two months of intense development, **Nexa v0.9-alpha is now open source** under the GNU Affero General Public License v3.0 (AGPL-3.0).

## Why AGPL-3.0?

We chose AGPL-3.0 deliberately. As an agent programming language, Nexa sits at the intersection of AI safety and developer freedom. AGPL-3.0 ensures that:

- **All modifications remain open** — if someone improves the Nexa compiler, those improvements must be shared back
- **Network use is covered** — unlike GPL, AGPL covers software accessed over a network (critical for agent services)
- **Commercial use is allowed** — companies can build products with Nexa; they just can't close-source the compiler itself

## What's in v0.9-alpha?

This first public release includes:

- **Working transpiler**: Lark-based parser → AST transformer → Python code generator
- **10+ example programs**: Hello World, Pipeline & Routing, Critic Loop, Join Consensus, Tool Execution, Sys Admin Bot, Modules & Secrets, News Aggregator, Cognitive Architecture, Skill Markdown
- **Core runtime**: Agent execution, memory management, tool registry, semantic evaluation, intent routing
- **CLI tool**: `nexa build`, `nexa run`, `nexa test`, `nexa serve`
- **Documentation**: Syntax reference, compiler architecture, roadmap, quick start guide

## Getting Started in 30 Seconds

```bash
# Install
pip install nexa

# Create your first agent
cat > hello.nx << 'EOF'
agent Greeter {
    prompt: "Greet the user warmly."
}
flow main {
    result = Greeter.run("Hello!");
    print(result);
}
EOF

# Run it
nexa run hello.nx
```

## Community Response

Within the first week of release, we've seen:

- **500+ GitHub stars** — validating the demand for an agent-native language
- **30+ issues and PRs** — early adopters contributing bug fixes and feature suggestions
- **Active discussions** on Hacker News and Reddit's r/ProgrammingLanguages
- **First external contributor** — someone added MCP (Model Context Protocol) tool support

## The Road Ahead

v0.9-alpha is just the beginning. Our roadmap for the coming months:

- **v1.0**: Stable transpiler, comprehensive testing, production-ready runtime
- **v1.1**: Intent-Driven Development (IDD) — `.nxintent` files and IAL engine
- **v1.2**: Design by Contract (DbC) — `requires`/`ensures`/`invariant`
- **v1.3**: Agent-Native Tooling — `nexa inspect`/`validate`/`lint`

We're also beginning work on the Rust AVM (Agent Virtual Machine) — a high-performance runtime with WASM sandboxing that will eventually replace the Python transpiler backend for production deployments.

---

*— Owen, March 2026*