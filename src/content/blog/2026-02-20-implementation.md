---
title: "From Zero to MVP — Building the First Nexa Transpiler"
description: "How we built the Nexa transpiler in 6 weeks: Lark parser, Earley algorithm, AST transformer with ambiguity scoring, and a Python code generator."
pubDate: 2026-02-20
tags: ["Compiler", "Engineering", "MVP"]
category: "Engineering"
cover: "/images/blog/implementation.svg"
---

Six weeks ago, Nexa existed only as a syntax sketch in a notebook. Today, we have a working transpiler that turns `.nx` files into executable Python code. Here's how we built it.

## Choosing the Right Parser

The first major decision: which parsing algorithm? Nexa's grammar is complex — it has pipeline operators, DAG expressions, semantic conditionals, pattern matching, and ADT declarations, all of which can appear in expression position and create ambiguities.

Traditional LALR(1) parsers (used by Yacc/Bison) require an unambiguous grammar — a non-starter for Nexa's expression-heavy syntax. LL(k) recursive descent parsers are more flexible but require careful left-recursion elimination. We chose **Lark with the Earley algorithm**.

> Earley parsing handles any context-free grammar, including ambiguous ones. It produces a parse forest when multiple interpretations exist — and we can resolve ambiguity with scoring.

## The Ambiguity Scoring System

When the Earley parser encounters ambiguity, it produces multiple parse trees. Our AST Transformer resolves this with a scoring table:

```python
_SCORE_TABLE = {
    "MatchExpression": 50,      # Pattern matching — high specificity
    "StructDeclaration": 60,    # ADT struct — very high specificity
    "PipelineExpression": 30,   # Pipeline — common, lower priority
    "DAGForkExpression": 35,    # DAG fork — medium priority
    "Literal": 38,              # Literal values
    "Variable": 35,             # Variable references — lowest
}
```

The principle: **more specific constructs score higher**. When the parser produces multiple interpretations, we pick the one with the highest total score.

## Three-Stage Compilation Pipeline

### Stage 1: Lexer + Parser

Lark's Earley parser consumes the `.nx` source and produces a parse tree. We defined ~30 core grammar rules covering agents, tools, protocols, flows, tests, pipelines, DAG operators, semantic conditionals, and control flow.

### Stage 2: AST Transformer

The parse tree is transformed into a typed AST. This is where the magic happens:

- **Desugaring**: Pipeline operators (`A >> B`) become nested function calls. Null coalescing (`a ?? b`) becomes `_nexa_null_coalesce(a, b)`. String interpolation (`"Hello #{name}"`) becomes `_nexa_interp_str(...)`.
- **Ambiguity resolution**: The scoring system picks the best parse from ambiguous forests.
- **Validation**: Basic semantic checks (e.g., agent references must exist).

### Stage 3: Code Generator

The AST is walked to generate Python code. A BOILERPLATE header injects all runtime imports. Each AST node type has a corresponding code generation method. The output is pure Python that runs on the Nexa runtime.

## First Light

On February 18, we ran the first successful compilation:

```
$ nexa build examples/01_hello_world.nx
[OK] Generated: out_hello_world.py
$ python out_hello_world.py
[Researcher] Searching for 'Nexa programming language'...
[Semantic_IF Evaluating] Condition: 'mentions agent-native'
[Semantic_IF Result] -> True
Nexa is an agent-native programming language designed for...
```

It worked. A 15-line `.nx` file compiled to Python, ran the agent, executed a semantic conditional, and produced a coherent result. The vision was becoming reality.

---

*— Owen, February 2026*