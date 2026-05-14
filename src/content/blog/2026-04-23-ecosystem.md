---
title: "v1.3.7 Milestone — 16 Features, 1,500+ Tests"
description: "From gradual typing to pattern matching, from background jobs to HTTP servers — Nexa v1.3.7 ships with 16 major features and a battle-tested test suite."
pubDate: 2026-04-23
tags: ["v1.3.7", "Release", "Features"]
---

Today marks a major milestone for Nexa. With the release of **v1.3.7**, we've shipped **16 major features** across 7 minor versions, backed by **1,500+ tests**. Nexa has grown from a simple agent DSL into a full-featured programming language for autonomous systems.

## The Journey from v1.1 to v1.3.7

### 🏆 P0: Core Differentiators

**v1.1.0 — Intent-Driven Development (IDD)**: 104 tests. Introduced `.nxintent` files and the IAL (Intent Assertion Language) engine. Developers can now write natural-language specifications that are automatically verified against agent behavior.

**v1.2.0 — Design by Contract (DbC)**: 47 tests. Brought `requires`/`ensures`/`invariant` contracts to agent programming. Preconditions and postconditions are checked at runtime, with `ContractViolation` exceptions integrated across the entire runtime stack.

**v1.3.0 — Agent-Native Tooling**: 41 tests. Added `nexa inspect`, `nexa validate`, and `nexa lint` CLI commands. These aren't generic linters — they understand Nexa's agent semantics.

### 📦 P1: Essential Infrastructure

**v1.3.1 — Gradual Type System**: 79 tests. Three-mode type checking (STRICT/WARN/FORGIVING) with `Int`, `String`, `Bool`, `List[T]`, `Option[T]`, and `Result[T,E]` types.

**v1.3.2 — Error Propagation**: 82 tests. The `?` operator for Rust-style error propagation, plus `otherwise` handlers.

**v1.3.3 — Background Job System**: 73 tests. A full `job` DSL with priority queues, cron scheduling, exponential backoff, and dead letter queues.

**v1.3.4 — Built-In HTTP Server**: 94 tests. A `server` DSL with static file serving, CORS/CSP configuration, route guards, middleware chains, and semantic routing.

**v1.3.5 — Database Integration**: 84 tests. A `db` DSL supporting SQLite and PostgreSQL. Includes an Agent Memory API.

### 🎯 P2: Advanced Capabilities

**v1.3.6 — Auth, Concurrency, KV, Templates**: 541 tests total. This was our biggest release:

- **Auth & OAuth** (84 tests): Three-layer authentication, CSRF protection, session management
- **Structured Concurrency** (172 tests): `spawn`/`parallel`/`race`/`channel` with 18 API methods
- **KV Store** (81 tests): SQLite-backed key-value store with TTL and atomic operations
- **Template System** (209 tests): Jinja2-inspired `template"""..."""` syntax with 30+ filters

### ✨ P3: Language Expressiveness

**v1.3.7 — Pattern Matching, ADTs, and More**: 543 tests. This release brought Nexa's expressiveness to a new level:

- **Pattern Matching**: 7 pattern types with destructuring
- **Algebraic Data Types**: `struct`, `enum`, `trait`, `impl`
- **String Interpolation**: `"Hello #{user.name}"` syntax
- **Null Coalescing**: `a ?? b ?? c` operator
- **Defer Statements**: `defer { cleanup() }` for resource management
- **Pipeline Operator**: `data |> transform |> output`

## By the Numbers

```
Total Features:     16
Total Tests:        1,500+
Latest Test Suite:  543 (v1.3.7)
Lines of Code:      ~15,000 (Python) + ~8,000 (Rust AVM)
GitHub Stars:       1,200+
Contributors:       8
Release Cadence:    ~2 weeks per minor version
```

But this is just the foundation. The real revolution is coming in v2.0 — where we introduce the **Harness Native** paradigm, making agent safety a compiler-enforced property rather than a runtime convention.

---

*— Owen, April 2026*