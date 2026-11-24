import type { ConceptBlock } from '../learn/components/ConceptAccordion'

export type LessonBody = {
  intro: string
  whyItMatters: string
  concepts: ConceptBlock[]
}

/** Explanations for every non-DSA lesson. Key = trackId/lessonId */
export const lessonContent: Record<string, LessonBody> = {
  "agentic-ai/agent-basics": {
    intro: "Agents don’t just chat — they call tools in a loop until the goal is done or a guardrail stops them. LLM + tools + loop. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Agent Mental Model”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Perceive → plan → act",
        explain: "Perceive → plan → act: LLM + tools + loop. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Perceive → plan → act to a teammate with a whiteboard using a real product scenario for “Agent Mental Model”.",
      },
      {
        title: "Tool calling",
        explain: "Tool calling shows up when software can take actions, not only write text.",
        example: "A junior assistant with a checklist and permission slips — LLM + tools + loop.",
      },
      {
        title: "Stop conditions",
        explain: "Stop conditions: LLM + tools + loop. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Stop conditions to a teammate with a whiteboard using a real product scenario for “Agent Mental Model”.",
      },
    ],
  },
  "agentic-ai/evals-agents": {
    intro: "Agents don’t just chat — they call tools in a loop until the goal is done or a guardrail stops them. Score trajectories, not just answers. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Agent Evals”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Task success",
        explain: "Task success: Score trajectories, not just answers. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Task success to a teammate with a whiteboard using a real product scenario for “Agent Evals”.",
      },
      {
        title: "Tool error rate",
        explain: "Tool error rate shows up when software can take actions, not only write text.",
        example: "A junior assistant with a checklist and permission slips — Score trajectories, not just answers.",
      },
      {
        title: "Cost / latency",
        explain: "Cost / latency: Score trajectories, not just answers. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Cost / latency to a teammate with a whiteboard using a real product scenario for “Agent Evals”.",
      },
      {
        title: "Regression suites",
        explain: "Regression suites measures AI quality with numbers so releases aren’t guesswork.",
        example: "A practice test bank you re-run after every study change — Score trajectories, not just answers.",
      },
    ],
  },
  "agentic-ai/frameworks": {
    intro: "Agents don’t just chat — they call tools in a loop until the goal is done or a guardrail stops them. When to use which layer. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “LangChain & LlamaIndex”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Chains vs agents",
        explain: "Chains vs agents shows up when software can take actions, not only write text.",
        example: "A junior assistant with a checklist and permission slips — When to use which layer.",
      },
      {
        title: "Indexes",
        explain: "Indexes is core database craft: store truth safely and fetch it fast.",
        example: "A library catalog (index) vs reading every book to find one title — When to use which layer.",
      },
      {
        title: "Retrievers",
        explain: "Retrievers is a building block of retrieval-augmented systems that ground answers in your docs.",
        example: "Open-book exam vs guessing from memory — When to use which layer.",
      },
      {
        title: "Callbacks",
        explain: "Callbacks: When to use which layer. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Callbacks to a teammate with a whiteboard using a real product scenario for “LangChain & LlamaIndex”.",
      },
    ],
  },
  "agentic-ai/memory": {
    intro: "Agents don’t just chat — they call tools in a loop until the goal is done or a guardrail stops them. Short-term, long-term, episodic. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Memory Patterns”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Chat buffer",
        explain: "Chat buffer: Short-term, long-term, episodic. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Chat buffer to a teammate with a whiteboard using a real product scenario for “Memory Patterns”.",
      },
      {
        title: "Vector memory",
        explain: "Vector memory helps machines compare meaning with numbers, not only exact keywords.",
        example: "Searching “cancel plan” also finds “how do I leave?” — Short-term, long-term, episodic.",
      },
      {
        title: "Summaries",
        explain: "Summaries: Short-term, long-term, episodic. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Summaries to a teammate with a whiteboard using a real product scenario for “Memory Patterns”.",
      },
      {
        title: "Entity stores",
        explain: "Entity stores: Short-term, long-term, episodic. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Entity stores to a teammate with a whiteboard using a real product scenario for “Memory Patterns”.",
      },
    ],
  },
  "agentic-ai/multi-agent": {
    intro: "Agents don’t just chat — they call tools in a loop until the goal is done or a guardrail stops them. Specialists coordinating. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Multi-agent Workflows”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Router agents",
        explain: "Router agents shows up when software can take actions, not only write text.",
        example: "A junior assistant with a checklist and permission slips — Specialists coordinating.",
      },
      {
        title: "Worker pools",
        explain: "Worker pools: Specialists coordinating. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Worker pools to a teammate with a whiteboard using a real product scenario for “Multi-agent Workflows”.",
      },
      {
        title: "Handoffs",
        explain: "Handoffs: Specialists coordinating. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Handoffs to a teammate with a whiteboard using a real product scenario for “Multi-agent Workflows”.",
      },
      {
        title: "Shared state",
        explain: "Shared state: Specialists coordinating. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Shared state to a teammate with a whiteboard using a real product scenario for “Multi-agent Workflows”.",
      },
    ],
  },
  "agentic-ai/planning": {
    intro: "Agents don’t just chat — they call tools in a loop until the goal is done or a guardrail stops them. Break goals into steps. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Planning & Decomposition”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "ReAct",
        explain: "ReAct shows up when software can take actions, not only write text.",
        example: "A junior assistant with a checklist and permission slips — Break goals into steps.",
      },
      {
        title: "Plan-and-execute",
        explain: "Plan-and-execute: Break goals into steps. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Plan-and-execute to a teammate with a whiteboard using a real product scenario for “Planning & Decomposition”.",
      },
      {
        title: "Reflection",
        explain: "Reflection: Break goals into steps. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Reflection to a teammate with a whiteboard using a real product scenario for “Planning & Decomposition”.",
      },
      {
        title: "Human checkpoints",
        explain: "Human checkpoints: Break goals into steps. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Human checkpoints to a teammate with a whiteboard using a real product scenario for “Planning & Decomposition”.",
      },
    ],
  },
  "agentic-ai/safety": {
    intro: "Agents don’t just chat — they call tools in a loop until the goal is done or a guardrail stops them. Keep agents inside the rails. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Safety & Guardrails”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Allowlists",
        explain: "Allowlists shows up when software can take actions, not only write text.",
        example: "A junior assistant with a checklist and permission slips — Keep agents inside the rails.",
      },
      {
        title: "Sandboxing",
        explain: "Sandboxing: Keep agents inside the rails. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Sandboxing to a teammate with a whiteboard using a real product scenario for “Safety & Guardrails”.",
      },
      {
        title: "Budget caps",
        explain: "Budget caps is about promises and tradeoffs when systems fail or split.",
        example: "Airline on-time goals vs what they legally promise passengers — Keep agents inside the rails.",
      },
      {
        title: "Audit logs",
        explain: "Audit logs lets you see what the system is doing when users say “it’s broken”.",
        example: "Flight black boxes and dashboards — Keep agents inside the rails.",
      },
    ],
  },
  "agentic-ai/tool-use": {
    intro: "Agents don’t just chat — they call tools in a loop until the goal is done or a guardrail stops them. Structured actions the model can take. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Tool Calling”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "JSON schemas",
        explain: "JSON schemas: Structured actions the model can take. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining JSON schemas to a teammate with a whiteboard using a real product scenario for “Tool Calling”.",
      },
      {
        title: "Function calling",
        explain: "Function calling: Structured actions the model can take. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Function calling to a teammate with a whiteboard using a real product scenario for “Tool Calling”.",
      },
      {
        title: "Validation",
        explain: "Validation: Structured actions the model can take. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Validation to a teammate with a whiteboard using a real product scenario for “Tool Calling”.",
      },
      {
        title: "Side effects",
        explain: "Side effects: Structured actions the model can take. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Side effects to a teammate with a whiteboard using a real product scenario for “Tool Calling”.",
      },
    ],
  },
  "ai-ops/eval-gates": {
    intro: "AI evals turn “seems better” into measurable gates before users feel a regression. Block bad outputs before delivery. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “AI Eval Gates”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Golden datasets",
        explain: "Golden datasets measures AI quality with numbers so releases aren’t guesswork.",
        example: "A practice test bank you re-run after every study change — Block bad outputs before delivery.",
      },
      {
        title: "Score thresholds",
        explain: "Score thresholds measures AI quality with numbers so releases aren’t guesswork.",
        example: "A practice test bank you re-run after every study change — Block bad outputs before delivery.",
      },
      {
        title: "Regression",
        explain: "Regression measures AI quality with numbers so releases aren’t guesswork.",
        example: "A practice test bank you re-run after every study change — Block bad outputs before delivery.",
      },
      {
        title: "Sampling",
        explain: "Sampling: Block bad outputs before delivery. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Sampling to a teammate with a whiteboard using a real product scenario for “AI Eval Gates”.",
      },
    ],
  },
  "ai-ops/extraction-quality": {
    intro: "AI evals turn “seems better” into measurable gates before users feel a regression. Key-value accuracy for PDFs. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Extraction Quality”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Field-level metrics",
        explain: "Field-level metrics lets you see what the system is doing when users say “it’s broken”.",
        example: "Flight black boxes and dashboards — Key-value accuracy for PDFs.",
      },
      {
        title: "Edge cases",
        explain: "Edge cases is a cloud building block you’ll configure in almost every production deploy.",
        example: "Renting a workshop with locked rooms and labeled keys instead of building a factory — Key-value accuracy for PDFs.",
      },
      {
        title: "Acceptance criteria",
        explain: "Acceptance criteria: Key-value accuracy for PDFs. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Acceptance criteria to a teammate with a whiteboard using a real product scenario for “Extraction Quality”.",
      },
      {
        title: "Client rules",
        explain: "Client rules: Key-value accuracy for PDFs. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Client rules to a teammate with a whiteboard using a real product scenario for “Extraction Quality”.",
      },
    ],
  },
  "ai-ops/retention": {
    intro: "AI evals turn “seems better” into measurable gates before users feel a regression. Export, purge, audit. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Retention & Compliance Flows”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Datalake export",
        explain: "Datalake export: Export, purge, audit. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Datalake export to a teammate with a whiteboard using a real product scenario for “Retention & Compliance Flows”.",
      },
      {
        title: "Purge windows",
        explain: "Purge windows: Export, purge, audit. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Purge windows to a teammate with a whiteboard using a real product scenario for “Retention & Compliance Flows”.",
      },
      {
        title: "HMAC uploads",
        explain: "HMAC uploads reduces the blast radius when something leaks or gets probed.",
        example: "A wax seal on a letter: you notice if someone tampered — Export, purge, audit.",
      },
      {
        title: "Audit trails",
        explain: "Audit trails: Export, purge, audit. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Audit trails to a teammate with a whiteboard using a real product scenario for “Retention & Compliance Flows”.",
      },
    ],
  },
  "backend/auth-payments": {
    intro: "Backend work is APIs, data, jobs, and money/identity flows that stay correct under retries. Sessions, wallets, ledgers. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Auth & Payments”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "JWT / session",
        explain: "JWT / session protects identity or money movement so retries don’t create chaos.",
        example: "Card charge with a receipt number that can’t be billed twice — Sessions, wallets, ledgers.",
      },
      {
        title: "Razorpay / Stripe",
        explain: "Razorpay / Stripe protects identity or money movement so retries don’t create chaos.",
        example: "Card charge with a receipt number that can’t be billed twice — Sessions, wallets, ledgers.",
      },
      {
        title: "Idempotent charges",
        explain: "Idempotent charges protects identity or money movement so retries don’t create chaos.",
        example: "Card charge with a receipt number that can’t be billed twice — Sessions, wallets, ledgers.",
      },
      {
        title: "Ledgers",
        explain: "Ledgers protects identity or money movement so retries don’t create chaos.",
        example: "Card charge with a receipt number that can’t be billed twice — Sessions, wallets, ledgers.",
      },
    ],
  },
  "backend/celery-redis": {
    intro: "Backend work is APIs, data, jobs, and money/identity flows that stay correct under retries. Background jobs that scale. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Celery & Redis”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Tasks",
        explain: "Tasks: Background jobs that scale. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Tasks to a teammate with a whiteboard using a real product scenario for “Celery & Redis”.",
      },
      {
        title: "Workers",
        explain: "Workers: Background jobs that scale. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Workers to a teammate with a whiteboard using a real product scenario for “Celery & Redis”.",
      },
      {
        title: "Brokers",
        explain: "Brokers: Background jobs that scale. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Brokers to a teammate with a whiteboard using a real product scenario for “Celery & Redis”.",
      },
      {
        title: "Result backends",
        explain: "Result backends: Background jobs that scale. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Result backends to a teammate with a whiteboard using a real product scenario for “Celery & Redis”.",
      },
    ],
  },
  "backend/postgres": {
    intro: "Backend work is APIs, data, jobs, and money/identity flows that stay correct under retries. Schemas, indexes, transactions. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “PostgreSQL Deep Dive”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "ACID",
        explain: "ACID is core database craft: store truth safely and fetch it fast.",
        example: "A library catalog (index) vs reading every book to find one title — Schemas, indexes, transactions.",
      },
      {
        title: "Indexes",
        explain: "Indexes is core database craft: store truth safely and fetch it fast.",
        example: "A library catalog (index) vs reading every book to find one title — Schemas, indexes, transactions.",
      },
      {
        title: "Migrations",
        explain: "Migrations is core database craft: store truth safely and fetch it fast.",
        example: "A library catalog (index) vs reading every book to find one title — Schemas, indexes, transactions.",
      },
      {
        title: "Connection pooling",
        explain: "Connection pooling: Schemas, indexes, transactions. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Connection pooling to a teammate with a whiteboard using a real product scenario for “PostgreSQL Deep Dive”.",
      },
    ],
  },
  "backend/python-apis": {
    intro: "Backend work is APIs, data, jobs, and money/identity flows that stay correct under retries. Pick the right API layer. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Django / DRF / FastAPI”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Django monolith strengths",
        explain: "Django monolith strengths: Pick the right API layer. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Django monolith strengths to a teammate with a whiteboard using a real product scenario for “Django / DRF / FastAPI”.",
      },
      {
        title: "DRF serializers",
        explain: "DRF serializers: Pick the right API layer. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining DRF serializers to a teammate with a whiteboard using a real product scenario for “Django / DRF / FastAPI”.",
      },
      {
        title: "FastAPI async",
        explain: "FastAPI async means work waits in line and gets processed by workers at their own pace.",
        example: "A restaurant ticket rail: orders pile up for the kitchen while the waiter keeps seating guests — Pick the right API layer.",
      },
      {
        title: "When to split",
        explain: "When to split: Pick the right API layer. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining When to split to a teammate with a whiteboard using a real product scenario for “Django / DRF / FastAPI”.",
      },
    ],
  },
  "backend/realtime": {
    intro: "Backend work is APIs, data, jobs, and money/identity flows that stay correct under retries. Push updates live. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Realtime & WebSockets”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "WebSockets",
        explain: "WebSockets pushes live updates instead of making clients ask again and again.",
        example: "A live scoreboard vs refreshing the page every second — Push updates live.",
      },
      {
        title: "Pub/sub",
        explain: "Pub/sub pushes live updates instead of making clients ask again and again.",
        example: "A live scoreboard vs refreshing the page every second — Push updates live.",
      },
      {
        title: "Binance feeds",
        explain: "Binance feeds: Push updates live. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Binance feeds to a teammate with a whiteboard using a real product scenario for “Realtime & WebSockets”.",
      },
      {
        title: "Reconnect",
        explain: "Reconnect pushes live updates instead of making clients ask again and again.",
        example: "A live scoreboard vs refreshing the page every second — Push updates live.",
      },
    ],
  },
  "backend/testing": {
    intro: "Backend work is APIs, data, jobs, and money/identity flows that stay correct under retries. pytest and contract tests. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Testing APIs”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "pytest",
        explain: "pytest locks behavior so changes don’t silently break callers.",
        example: "A smoke alarm test before you leave on vacation — pytest and contract tests.",
      },
      {
        title: "Fixtures",
        explain: "Fixtures locks behavior so changes don’t silently break callers.",
        example: "A smoke alarm test before you leave on vacation — pytest and contract tests.",
      },
      {
        title: "API contracts",
        explain: "API contracts lets you see what the system is doing when users say “it’s broken”.",
        example: "Flight black boxes and dashboards — pytest and contract tests.",
      },
      {
        title: "CI gates",
        explain: "CI gates locks behavior so changes don’t silently break callers.",
        example: "A smoke alarm test before you leave on vacation — pytest and contract tests.",
      },
    ],
  },
  "cloud/cicd": {
    intro: "Cloud skills are about regions, networks, identity, and managed building blocks you compose safely. Build once, promote safely. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “CI/CD on Cloud”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "GitHub Actions",
        explain: "GitHub Actions: Build once, promote safely. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining GitHub Actions to a teammate with a whiteboard using a real product scenario for “CI/CD on Cloud”.",
      },
      {
        title: "Kaniko builds",
        explain: "Kaniko builds is a cloud building block you’ll configure in almost every production deploy.",
        example: "Renting a workshop with locked rooms and labeled keys instead of building a factory — Build once, promote safely.",
      },
      {
        title: "ECR tags",
        explain: "ECR tags: Build once, promote safely. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining ECR tags to a teammate with a whiteboard using a real product scenario for “CI/CD on Cloud”.",
      },
      {
        title: "Env promotion",
        explain: "Env promotion: Build once, promote safely. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Env promotion to a teammate with a whiteboard using a real product scenario for “CI/CD on Cloud”.",
      },
    ],
  },
  "cloud/cloud-basics": {
    intro: "Cloud skills are about regions, networks, identity, and managed building blocks you compose safely. Regions, VPC, identity. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Cloud Building Blocks”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Regions / AZs",
        explain: "Regions / AZs is a cloud building block you’ll configure in almost every production deploy.",
        example: "Renting a workshop with locked rooms and labeled keys instead of building a factory — Regions, VPC, identity.",
      },
      {
        title: "VPC / subnets",
        explain: "VPC / subnets is a cloud building block you’ll configure in almost every production deploy.",
        example: "Renting a workshop with locked rooms and labeled keys instead of building a factory — Regions, VPC, identity.",
      },
      {
        title: "IAM / IRSA",
        explain: "IAM / IRSA is a cloud building block you’ll configure in almost every production deploy.",
        example: "Renting a workshop with locked rooms and labeled keys instead of building a factory — Regions, VPC, identity.",
      },
      {
        title: "Secrets Manager",
        explain: "Secrets Manager reduces the blast radius when something leaks or gets probed.",
        example: "A wax seal on a letter: you notice if someone tampered — Regions, VPC, identity.",
      },
    ],
  },
  "cloud/edge": {
    intro: "Cloud skills are about regions, networks, identity, and managed building blocks you compose safely. Cloudflare Workers, D1, R2. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Edge & Workers”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Workers runtime",
        explain: "Workers runtime: Cloudflare Workers, D1, R2. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Workers runtime to a teammate with a whiteboard using a real product scenario for “Edge & Workers”.",
      },
      {
        title: "D1 SQL",
        explain: "D1 SQL: Cloudflare Workers, D1, R2. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining D1 SQL to a teammate with a whiteboard using a real product scenario for “Edge & Workers”.",
      },
      {
        title: "R2 media",
        explain: "R2 media: Cloudflare Workers, D1, R2. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining R2 media to a teammate with a whiteboard using a real product scenario for “Edge & Workers”.",
      },
      {
        title: "When edge wins",
        explain: "When edge wins is a cloud building block you’ll configure in almost every production deploy.",
        example: "Renting a workshop with locked rooms and labeled keys instead of building a factory — Cloudflare Workers, D1, R2.",
      },
    ],
  },
  "cloud/onprem": {
    intro: "Cloud skills are about regions, networks, identity, and managed building blocks you compose safely. Ship the same product offline. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “On-prem Packaging”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Docker Compose bundles",
        explain: "Docker Compose bundles is part of packaging and running apps the same way everywhere.",
        example: "A shipping container for software: build once, run on a laptop or in the cloud — Ship the same product offline.",
      },
      {
        title: "Runbooks",
        explain: "Runbooks: Ship the same product offline. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Runbooks to a teammate with a whiteboard using a real product scenario for “On-prem Packaging”.",
      },
      {
        title: "Licensing",
        explain: "Licensing keeps customers isolated and noisy neighbors in check.",
        example: "Apartment meters so one flat can’t run everyone’s electricity bill — Ship the same product offline.",
      },
      {
        title: "Customer infra",
        explain: "Customer infra: Ship the same product offline. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Customer infra to a teammate with a whiteboard using a real product scenario for “On-prem Packaging”.",
      },
    ],
  },
  "cloud/serverless": {
    intro: "Cloud skills are about regions, networks, identity, and managed building blocks you compose safely. Fargate-style execution. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Serverless Containers”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "No node management",
        explain: "No node management: Fargate-style execution. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining No node management to a teammate with a whiteboard using a real product scenario for “Serverless Containers”.",
      },
      {
        title: "Task sizing",
        explain: "Task sizing: Fargate-style execution. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Task sizing to a teammate with a whiteboard using a real product scenario for “Serverless Containers”.",
      },
      {
        title: "Cold starts",
        explain: "Cold starts: Fargate-style execution. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Cold starts to a teammate with a whiteboard using a real product scenario for “Serverless Containers”.",
      },
      {
        title: "Networking",
        explain: "Networking: Fargate-style execution. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Networking to a teammate with a whiteboard using a real product scenario for “Serverless Containers”.",
      },
    ],
  },
  "cloud/storage": {
    intro: "Cloud skills are about regions, networks, identity, and managed building blocks you compose safely. S3, RDS, MinIO. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Object & Managed Storage”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "S3 lifecycle",
        explain: "S3 lifecycle is a cloud building block you’ll configure in almost every production deploy.",
        example: "Renting a workshop with locked rooms and labeled keys instead of building a factory — S3, RDS, MinIO.",
      },
      {
        title: "RDS vs self-host",
        explain: "RDS vs self-host is a cloud building block you’ll configure in almost every production deploy.",
        example: "Renting a workshop with locked rooms and labeled keys instead of building a factory — S3, RDS, MinIO.",
      },
      {
        title: "MinIO on-prem",
        explain: "MinIO on-prem is a cloud building block you’ll configure in almost every production deploy.",
        example: "Renting a workshop with locked rooms and labeled keys instead of building a factory — S3, RDS, MinIO.",
      },
      {
        title: "Backups",
        explain: "Backups: S3, RDS, MinIO. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Backups to a teammate with a whiteboard using a real product scenario for “Object & Managed Storage”.",
      },
    ],
  },
  "cloud/vertical-horizontal": {
    intro: "Cloud skills are about regions, networks, identity, and managed building blocks you compose safely. Scale up vs scale out. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Vertical vs Horizontal Scaling”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Vertical limits",
        explain: "Vertical limits: Scale up vs scale out. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Vertical limits to a teammate with a whiteboard using a real product scenario for “Vertical vs Horizontal Scaling”.",
      },
      {
        title: "Horizontal replicas",
        explain: "Horizontal replicas: Scale up vs scale out. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Horizontal replicas to a teammate with a whiteboard using a real product scenario for “Vertical vs Horizontal Scaling”.",
      },
      {
        title: "Stateful pitfalls",
        explain: "Stateful pitfalls: Scale up vs scale out. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Stateful pitfalls to a teammate with a whiteboard using a real product scenario for “Vertical vs Horizontal Scaling”.",
      },
      {
        title: "Autoscaling signals",
        explain: "Autoscaling signals: Scale up vs scale out. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Autoscaling signals to a teammate with a whiteboard using a real product scenario for “Vertical vs Horizontal Scaling”.",
      },
    ],
  },
  "docker/best-practices": {
    intro: "Docker packages an app and its dependencies so it runs the same on your laptop and in production. Secure, small, reproducible. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Production Best Practices”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Non-root users",
        explain: "Non-root users: Secure, small, reproducible. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Non-root users to a teammate with a whiteboard using a real product scenario for “Production Best Practices”.",
      },
      {
        title: "Healthchecks",
        explain: "Healthchecks: Secure, small, reproducible. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Healthchecks to a teammate with a whiteboard using a real product scenario for “Production Best Practices”.",
      },
      {
        title: "Secrets not in images",
        explain: "Secrets not in images is part of packaging and running apps the same way everywhere.",
        example: "A shipping container for software: build once, run on a laptop or in the cloud — Secure, small, reproducible.",
      },
      {
        title: ".dockerignore",
        explain: ".dockerignore is part of packaging and running apps the same way everywhere.",
        example: "A shipping container for software: build once, run on a laptop or in the cloud — Secure, small, reproducible.",
      },
    ],
  },
  "docker/compose": {
    intro: "Docker packages an app and its dependencies so it runs the same on your laptop and in production. Multi-service local stacks. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Docker Compose”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Services",
        explain: "Services: Multi-service local stacks. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Services to a teammate with a whiteboard using a real product scenario for “Docker Compose”.",
      },
      {
        title: "Networks",
        explain: "Networks: Multi-service local stacks. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Networks to a teammate with a whiteboard using a real product scenario for “Docker Compose”.",
      },
      {
        title: "Depends_on",
        explain: "Depends_on: Multi-service local stacks. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Depends_on to a teammate with a whiteboard using a real product scenario for “Docker Compose”.",
      },
      {
        title: "Dev vs prod compose",
        explain: "Dev vs prod compose is part of packaging and running apps the same way everywhere.",
        example: "A shipping container for software: build once, run on a laptop or in the cloud — Multi-service local stacks.",
      },
    ],
  },
  "docker/containers": {
    intro: "Docker packages an app and its dependencies so it runs the same on your laptop and in production. Processes with isolation. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Containers Runtime”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Namespaces / cgroups",
        explain: "Namespaces / cgroups: Processes with isolation. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Namespaces / cgroups to a teammate with a whiteboard using a real product scenario for “Containers Runtime”.",
      },
      {
        title: "Ports",
        explain: "Ports: Processes with isolation. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Ports to a teammate with a whiteboard using a real product scenario for “Containers Runtime”.",
      },
      {
        title: "Volumes",
        explain: "Volumes: Processes with isolation. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Volumes to a teammate with a whiteboard using a real product scenario for “Containers Runtime”.",
      },
      {
        title: "Env vars",
        explain: "Env vars: Processes with isolation. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Env vars to a teammate with a whiteboard using a real product scenario for “Containers Runtime”.",
      },
    ],
  },
  "docker/images": {
    intro: "Docker packages an app and its dependencies so it runs the same on your laptop and in production. How images are built. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Images & Layers”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Dockerfile layers",
        explain: "Dockerfile layers is part of packaging and running apps the same way everywhere.",
        example: "A shipping container for software: build once, run on a laptop or in the cloud — How images are built.",
      },
      {
        title: "Caching",
        explain: "Caching: How images are built. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Caching to a teammate with a whiteboard using a real product scenario for “Images & Layers”.",
      },
      {
        title: "Multi-stage builds",
        explain: "Multi-stage builds: How images are built. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Multi-stage builds to a teammate with a whiteboard using a real product scenario for “Images & Layers”.",
      },
      {
        title: "Image size",
        explain: "Image size is part of packaging and running apps the same way everywhere.",
        example: "A shipping container for software: build once, run on a laptop or in the cloud — How images are built.",
      },
    ],
  },
  "docker/registries": {
    intro: "Docker packages an app and its dependencies so it runs the same on your laptop and in production. Push, pull, promote. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Registries & ECR”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Tags / digests",
        explain: "Tags / digests: Push, pull, promote. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Tags / digests to a teammate with a whiteboard using a real product scenario for “Registries & ECR”.",
      },
      {
        title: "ECR",
        explain: "ECR: Push, pull, promote. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining ECR to a teammate with a whiteboard using a real product scenario for “Registries & ECR”.",
      },
      {
        title: "Vulnerability scan",
        explain: "Vulnerability scan: Push, pull, promote. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Vulnerability scan to a teammate with a whiteboard using a real product scenario for “Registries & ECR”.",
      },
      {
        title: "Immutable tags",
        explain: "Immutable tags: Push, pull, promote. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Immutable tags to a teammate with a whiteboard using a real product scenario for “Registries & ECR”.",
      },
    ],
  },
  "kubernetes/config-secrets": {
    intro: "Kubernetes keeps the number of healthy app copies you asked for and rolls out changes carefully. Inject configuration safely. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “ConfigMaps & Secrets”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "ConfigMaps",
        explain: "ConfigMaps: Inject configuration safely. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining ConfigMaps to a teammate with a whiteboard using a real product scenario for “ConfigMaps & Secrets”.",
      },
      {
        title: "Secrets",
        explain: "Secrets reduces the blast radius when something leaks or gets probed.",
        example: "A wax seal on a letter: you notice if someone tampered — Inject configuration safely.",
      },
      {
        title: "IRSA",
        explain: "IRSA is a cloud building block you’ll configure in almost every production deploy.",
        example: "Renting a workshop with locked rooms and labeled keys instead of building a factory — Inject configuration safely.",
      },
      {
        title: "Env vs files",
        explain: "Env vs files: Inject configuration safely. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Env vs files to a teammate with a whiteboard using a real product scenario for “ConfigMaps & Secrets”.",
      },
    ],
  },
  "kubernetes/eks-fargate": {
    intro: "Kubernetes keeps the number of healthy app copies you asked for and rolls out changes carefully. Managed Kubernetes without nodes. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “EKS + Fargate”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "EKS control plane",
        explain: "EKS control plane is how clusters keep the number and health of app copies you asked for.",
        example: "An autopilot that restarts crashed workers and rolls out new versions carefully — Managed Kubernetes without nodes.",
      },
      {
        title: "Fargate profiles",
        explain: "Fargate profiles is how clusters keep the number and health of app copies you asked for.",
        example: "An autopilot that restarts crashed workers and rolls out new versions carefully — Managed Kubernetes without nodes.",
      },
      {
        title: "Networking",
        explain: "Networking: Managed Kubernetes without nodes. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Networking to a teammate with a whiteboard using a real product scenario for “EKS + Fargate”.",
      },
      {
        title: "Storage limits",
        explain: "Storage limits is a building block of retrieval-augmented systems that ground answers in your docs.",
        example: "Open-book exam vs guessing from memory — Managed Kubernetes without nodes.",
      },
    ],
  },
  "kubernetes/helm-kubectl": {
    intro: "Kubernetes keeps the number of healthy app copies you asked for and rolls out changes carefully. Operate clusters day-to-day. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Helm & kubectl”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "kubectl essentials",
        explain: "kubectl essentials is how clusters keep the number and health of app copies you asked for.",
        example: "An autopilot that restarts crashed workers and rolls out new versions carefully — Operate clusters day-to-day.",
      },
      {
        title: "Helm charts",
        explain: "Helm charts is how clusters keep the number and health of app copies you asked for.",
        example: "An autopilot that restarts crashed workers and rolls out new versions carefully — Operate clusters day-to-day.",
      },
      {
        title: "Values overlays",
        explain: "Values overlays: Operate clusters day-to-day. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Values overlays to a teammate with a whiteboard using a real product scenario for “Helm & kubectl”.",
      },
      {
        title: "Rollbacks",
        explain: "Rollbacks: Operate clusters day-to-day. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Rollbacks to a teammate with a whiteboard using a real product scenario for “Helm & kubectl”.",
      },
    ],
  },
  "kubernetes/k8s-mental-model": {
    intro: "Kubernetes keeps the number of healthy app copies you asked for and rolls out changes carefully. Desired state reconciliation. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “K8s Mental Model”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Control plane",
        explain: "Control plane: Desired state reconciliation. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Control plane to a teammate with a whiteboard using a real product scenario for “K8s Mental Model”.",
      },
      {
        title: "Nodes",
        explain: "Nodes: Desired state reconciliation. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Nodes to a teammate with a whiteboard using a real product scenario for “K8s Mental Model”.",
      },
      {
        title: "etcd",
        explain: "etcd: Desired state reconciliation. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining etcd to a teammate with a whiteboard using a real product scenario for “K8s Mental Model”.",
      },
      {
        title: "Controllers",
        explain: "Controllers: Desired state reconciliation. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Controllers to a teammate with a whiteboard using a real product scenario for “K8s Mental Model”.",
      },
    ],
  },
  "kubernetes/pods-deployments": {
    intro: "Kubernetes keeps the number of healthy app copies you asked for and rolls out changes carefully. Run and roll out apps. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Pods & Deployments”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Pods",
        explain: "Pods is how clusters keep the number and health of app copies you asked for.",
        example: "An autopilot that restarts crashed workers and rolls out new versions carefully — Run and roll out apps.",
      },
      {
        title: "ReplicaSets",
        explain: "ReplicaSets: Run and roll out apps. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining ReplicaSets to a teammate with a whiteboard using a real product scenario for “Pods & Deployments”.",
      },
      {
        title: "Rolling updates",
        explain: "Rolling updates: Run and roll out apps. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Rolling updates to a teammate with a whiteboard using a real product scenario for “Pods & Deployments”.",
      },
      {
        title: "Probes",
        explain: "Probes: Run and roll out apps. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Probes to a teammate with a whiteboard using a real product scenario for “Pods & Deployments”.",
      },
    ],
  },
  "kubernetes/services-ingress": {
    intro: "Kubernetes keeps the number of healthy app copies you asked for and rolls out changes carefully. Expose workloads. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Services & Ingress”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "ClusterIP / NodePort / LB",
        explain: "ClusterIP / NodePort / LB: Expose workloads. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining ClusterIP / NodePort / LB to a teammate with a whiteboard using a real product scenario for “Services & Ingress”.",
      },
      {
        title: "Ingress",
        explain: "Ingress is how clusters keep the number and health of app copies you asked for.",
        example: "An autopilot that restarts crashed workers and rolls out new versions carefully — Expose workloads.",
      },
      {
        title: "ALB patterns",
        explain: "ALB patterns: Expose workloads. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining ALB patterns to a teammate with a whiteboard using a real product scenario for “Services & Ingress”.",
      },
      {
        title: "DNS",
        explain: "DNS: Expose workloads. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining DNS to a teammate with a whiteboard using a real product scenario for “Services & Ingress”.",
      },
    ],
  },
  "rag/chunking": {
    intro: "RAG means: look up relevant documents first, then let the model answer from that evidence. Split documents for retrieval. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Chunking Strategies”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Fixed / recursive",
        explain: "Fixed / recursive: Split documents for retrieval. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Fixed / recursive to a teammate with a whiteboard using a real product scenario for “Chunking Strategies”.",
      },
      {
        title: "Semantic chunks",
        explain: "Semantic chunks splits long text into pieces retrieval can actually use.",
        example: "A textbook with bookmarks beats one endless scroll when you need one paragraph — Split documents for retrieval.",
      },
      {
        title: "Overlap",
        explain: "Overlap: Split documents for retrieval. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Overlap to a teammate with a whiteboard using a real product scenario for “Chunking Strategies”.",
      },
      {
        title: "Metadata",
        explain: "Metadata: Split documents for retrieval. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Metadata to a teammate with a whiteboard using a real product scenario for “Chunking Strategies”.",
      },
    ],
  },
  "rag/embeddings": {
    intro: "RAG means: look up relevant documents first, then let the model answer from that evidence. Vectors that capture meaning. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Embeddings”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Dense embeddings",
        explain: "Dense embeddings helps machines compare meaning with numbers, not only exact keywords.",
        example: "Searching “cancel plan” also finds “how do I leave?” — Vectors that capture meaning.",
      },
      {
        title: "Similarity metrics",
        explain: "Similarity metrics lets you see what the system is doing when users say “it’s broken”.",
        example: "Flight black boxes and dashboards — Vectors that capture meaning.",
      },
      {
        title: "Dimensionality",
        explain: "Dimensionality: Vectors that capture meaning. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Dimensionality to a teammate with a whiteboard using a real product scenario for “Embeddings”.",
      },
      {
        title: "Model choice",
        explain: "Model choice: Vectors that capture meaning. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Model choice to a teammate with a whiteboard using a real product scenario for “Embeddings”.",
      },
    ],
  },
  "rag/evals": {
    intro: "RAG means: look up relevant documents first, then let the model answer from that evidence. Measure retrieval and answer quality. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “RAG Evals”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Faithfulness",
        explain: "Faithfulness is a building block of retrieval-augmented systems that ground answers in your docs.",
        example: "Open-book exam vs guessing from memory — Measure retrieval and answer quality.",
      },
      {
        title: "Context precision",
        explain: "Context precision: Measure retrieval and answer quality. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Context precision to a teammate with a whiteboard using a real product scenario for “RAG Evals”.",
      },
      {
        title: "Golden sets",
        explain: "Golden sets measures AI quality with numbers so releases aren’t guesswork.",
        example: "A practice test bank you re-run after every study change — Measure retrieval and answer quality.",
      },
      {
        title: "Regression gates",
        explain: "Regression gates measures AI quality with numbers so releases aren’t guesswork.",
        example: "A practice test bank you re-run after every study change — Measure retrieval and answer quality.",
      },
    ],
  },
  "rag/generation": {
    intro: "RAG means: look up relevant documents first, then let the model answer from that evidence. Prompting with citations. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Grounded Generation”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Context windows",
        explain: "Context windows: Prompting with citations. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Context windows to a teammate with a whiteboard using a real product scenario for “Grounded Generation”.",
      },
      {
        title: "Citation prompts",
        explain: "Citation prompts is a building block of retrieval-augmented systems that ground answers in your docs.",
        example: "Open-book exam vs guessing from memory — Prompting with citations.",
      },
      {
        title: "Temperature",
        explain: "Temperature: Prompting with citations. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Temperature to a teammate with a whiteboard using a real product scenario for “Grounded Generation”.",
      },
      {
        title: "Fallback answers",
        explain: "Fallback answers: Prompting with citations. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Fallback answers to a teammate with a whiteboard using a real product scenario for “Grounded Generation”.",
      },
    ],
  },
  "rag/ocr-ingest": {
    intro: "RAG means: look up relevant documents first, then let the model answer from that evidence. PDF, images, Word, CSV into text. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “OCR & Multi-format Ingest”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Tesseract OCR",
        explain: "Tesseract OCR is a building block of retrieval-augmented systems that ground answers in your docs.",
        example: "Open-book exam vs guessing from memory — PDF, images, Word, CSV into text.",
      },
      {
        title: "Layout awareness",
        explain: "Layout awareness: PDF, images, Word, CSV into text. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Layout awareness to a teammate with a whiteboard using a real product scenario for “OCR & Multi-format Ingest”.",
      },
      {
        title: "Fallbacks",
        explain: "Fallbacks: PDF, images, Word, CSV into text. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Fallbacks to a teammate with a whiteboard using a real product scenario for “OCR & Multi-format Ingest”.",
      },
      {
        title: "Normalization",
        explain: "Normalization is core database craft: store truth safely and fetch it fast.",
        example: "A library catalog (index) vs reading every book to find one title — PDF, images, Word, CSV into text.",
      },
    ],
  },
  "rag/rag-overview": {
    intro: "RAG means: look up relevant documents first, then let the model answer from that evidence. Ground LLMs in your data. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Why RAG Exists”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Hallucinations",
        explain: "Hallucinations is a building block of retrieval-augmented systems that ground answers in your docs.",
        example: "Open-book exam vs guessing from memory — Ground LLMs in your data.",
      },
      {
        title: "Closed vs open book",
        explain: "Closed vs open book: Ground LLMs in your data. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Closed vs open book to a teammate with a whiteboard using a real product scenario for “Why RAG Exists”.",
      },
      {
        title: "Latency vs quality",
        explain: "Latency vs quality: Ground LLMs in your data. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Latency vs quality to a teammate with a whiteboard using a real product scenario for “Why RAG Exists”.",
      },
    ],
  },
  "rag/retrieval": {
    intro: "RAG means: look up relevant documents first, then let the model answer from that evidence. Get the right context into the prompt. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Retrieval & Reranking”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Top-k",
        explain: "Top-k: Get the right context into the prompt. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Top-k to a teammate with a whiteboard using a real product scenario for “Retrieval & Reranking”.",
      },
      {
        title: "Rerankers",
        explain: "Rerankers is a building block of retrieval-augmented systems that ground answers in your docs.",
        example: "Open-book exam vs guessing from memory — Get the right context into the prompt.",
      },
      {
        title: "Filters",
        explain: "Filters: Get the right context into the prompt. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Filters to a teammate with a whiteboard using a real product scenario for “Retrieval & Reranking”.",
      },
      {
        title: "Query rewriting",
        explain: "Query rewriting: Get the right context into the prompt. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Query rewriting to a teammate with a whiteboard using a real product scenario for “Retrieval & Reranking”.",
      },
    ],
  },
  "rag/vector-search": {
    intro: "RAG means: look up relevant documents first, then let the model answer from that evidence. ANN indexes and hybrid search. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Vector Search”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "pgvector",
        explain: "pgvector helps machines compare meaning with numbers, not only exact keywords.",
        example: "Searching “cancel plan” also finds “how do I leave?” — ANN indexes and hybrid search.",
      },
      {
        title: "Pinecone",
        explain: "Pinecone helps machines compare meaning with numbers, not only exact keywords.",
        example: "Searching “cancel plan” also finds “how do I leave?” — ANN indexes and hybrid search.",
      },
      {
        title: "HNSW / IVF",
        explain: "HNSW / IVF helps machines compare meaning with numbers, not only exact keywords.",
        example: "Searching “cancel plan” also finds “how do I leave?” — ANN indexes and hybrid search.",
      },
      {
        title: "Hybrid BM25 + vector",
        explain: "Hybrid BM25 + vector helps machines compare meaning with numbers, not only exact keywords.",
        example: "Searching “cancel plan” also finds “how do I leave?” — ANN indexes and hybrid search.",
      },
    ],
  },
  "security/automation": {
    intro: "Security defaults and integrations are how real companies exchange data without drama. n8n, Make, Zapier patterns. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Automation Glue”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Webhooks",
        explain: "Webhooks connects your system to how enterprises already move data.",
        example: "The loading dock behind the store — unglamorous, essential — n8n, Make, Zapier patterns.",
      },
      {
        title: "Idempotency",
        explain: "Idempotency protects identity or money movement so retries don’t create chaos.",
        example: "Card charge with a receipt number that can’t be billed twice — n8n, Make, Zapier patterns.",
      },
      {
        title: "Retries",
        explain: "Retries: n8n, Make, Zapier patterns. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Retries to a teammate with a whiteboard using a real product scenario for “Automation Glue”.",
      },
      {
        title: "Observability",
        explain: "Observability lets you see what the system is doing when users say “it’s broken”.",
        example: "Flight black boxes and dashboards — n8n, Make, Zapier patterns.",
      },
    ],
  },
  "security/encryption": {
    intro: "Security defaults and integrations are how real companies exchange data without drama. Protect files and secrets. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Encryption at Rest”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "AES-256",
        explain: "AES-256 reduces the blast radius when something leaks or gets probed.",
        example: "A wax seal on a letter: you notice if someone tampered — Protect files and secrets.",
      },
      {
        title: "IVs",
        explain: "IVs: Protect files and secrets. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining IVs to a teammate with a whiteboard using a real product scenario for “Encryption at Rest”.",
      },
      {
        title: "Key derivation",
        explain: "Key derivation: Protect files and secrets. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Key derivation to a teammate with a whiteboard using a real product scenario for “Encryption at Rest”.",
      },
      {
        title: "Secret storage",
        explain: "Secret storage is a building block of retrieval-augmented systems that ground answers in your docs.",
        example: "Open-book exam vs guessing from memory — Protect files and secrets.",
      },
    ],
  },
  "security/enterprise-channels": {
    intro: "Security defaults and integrations are how real companies exchange data without drama. SAP, Graph, SFTP, SMTP. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Enterprise Channels”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "SAP ERP",
        explain: "SAP ERP connects your system to how enterprises already move data.",
        example: "The loading dock behind the store — unglamorous, essential — SAP, Graph, SFTP, SMTP.",
      },
      {
        title: "Microsoft Graph",
        explain: "Microsoft Graph connects your system to how enterprises already move data.",
        example: "The loading dock behind the store — unglamorous, essential — SAP, Graph, SFTP, SMTP.",
      },
      {
        title: "SFTP/FTP",
        explain: "SFTP/FTP connects your system to how enterprises already move data.",
        example: "The loading dock behind the store — unglamorous, essential — SAP, Graph, SFTP, SMTP.",
      },
      {
        title: "SMTP",
        explain: "SMTP connects your system to how enterprises already move data.",
        example: "The loading dock behind the store — unglamorous, essential — SAP, Graph, SFTP, SMTP.",
      },
    ],
  },
  "security/hmac-licensing": {
    intro: "Security defaults and integrations are how real companies exchange data without drama. Tamper-evident license checks. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “HMAC Licensing”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "HMAC signing",
        explain: "HMAC signing reduces the blast radius when something leaks or gets probed.",
        example: "A wax seal on a letter: you notice if someone tampered — Tamper-evident license checks.",
      },
      {
        title: "Heartbeats",
        explain: "Heartbeats: Tamper-evident license checks. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Heartbeats to a teammate with a whiteboard using a real product scenario for “HMAC Licensing”.",
      },
      {
        title: "Revocation",
        explain: "Revocation: Tamper-evident license checks. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Revocation to a teammate with a whiteboard using a real product scenario for “HMAC Licensing”.",
      },
      {
        title: "Audit logs",
        explain: "Audit logs lets you see what the system is doing when users say “it’s broken”.",
        example: "Flight black boxes and dashboards — Tamper-evident license checks.",
      },
    ],
  },
  "security/secure-defaults": {
    intro: "Security defaults and integrations are how real companies exchange data without drama. Auth lifecycle and headers. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Secure Defaults”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Token lifecycle",
        explain: "Token lifecycle: Auth lifecycle and headers. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Token lifecycle to a teammate with a whiteboard using a real product scenario for “Secure Defaults”.",
      },
      {
        title: "CSP / cache headers",
        explain: "CSP / cache headers is about keeping hot data close so you don’t redo expensive work every time.",
        example: "Like keeping your keys by the door instead of searching the whole house — Auth lifecycle and headers.",
      },
      {
        title: "TLS review",
        explain: "TLS review reduces the blast radius when something leaks or gets probed.",
        example: "A wax seal on a letter: you notice if someone tampered — Auth lifecycle and headers.",
      },
      {
        title: "Least privilege",
        explain: "Least privilege reduces the blast radius when something leaks or gets probed.",
        example: "A wax seal on a letter: you notice if someone tampered — Auth lifecycle and headers.",
      },
    ],
  },
  "system-design/api-design": {
    intro: "System design is deciding how pieces talk, store data, and survive traffic — before you write clever code. REST, OpenAPI, versioning. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “API Design”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Resource modeling",
        explain: "Resource modeling makes APIs predictable for humans and machines.",
        example: "A restaurant menu with clear prices beats shouting into the kitchen — REST, OpenAPI, versioning.",
      },
      {
        title: "Status codes",
        explain: "Status codes makes APIs predictable for humans and machines.",
        example: "A restaurant menu with clear prices beats shouting into the kitchen — REST, OpenAPI, versioning.",
      },
      {
        title: "Pagination",
        explain: "Pagination makes APIs predictable for humans and machines.",
        example: "A restaurant menu with clear prices beats shouting into the kitchen — REST, OpenAPI, versioning.",
      },
      {
        title: "OpenAPI / Swagger",
        explain: "OpenAPI / Swagger makes APIs predictable for humans and machines.",
        example: "A restaurant menu with clear prices beats shouting into the kitchen — REST, OpenAPI, versioning.",
      },
    ],
  },
  "system-design/caching": {
    intro: "System design is deciding how pieces talk, store data, and survive traffic — before you write clever code. Latency wins without stale disasters. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Caching Strategies”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Cache-aside",
        explain: "Cache-aside is about keeping hot data close so you don’t redo expensive work every time.",
        example: "Like keeping your keys by the door instead of searching the whole house — Latency wins without stale disasters.",
      },
      {
        title: "Write-through / behind",
        explain: "Write-through / behind: Latency wins without stale disasters. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Write-through / behind to a teammate with a whiteboard using a real product scenario for “Caching Strategies”.",
      },
      {
        title: "TTL / invalidation",
        explain: "TTL / invalidation: Latency wins without stale disasters. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining TTL / invalidation to a teammate with a whiteboard using a real product scenario for “Caching Strategies”.",
      },
      {
        title: "Redis patterns",
        explain: "Redis patterns: Latency wins without stale disasters. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Redis patterns to a teammate with a whiteboard using a real product scenario for “Caching Strategies”.",
      },
    ],
  },
  "system-design/cap-consistency": {
    intro: "System design is deciding how pieces talk, store data, and survive traffic — before you write clever code. Tradeoffs that show up in real systems. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “CAP & Consistency”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "CAP",
        explain: "CAP is about promises and tradeoffs when systems fail or split.",
        example: "Airline on-time goals vs what they legally promise passengers — Tradeoffs that show up in real systems.",
      },
      {
        title: "Strong vs eventual",
        explain: "Strong vs eventual: Tradeoffs that show up in real systems. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Strong vs eventual to a teammate with a whiteboard using a real product scenario for “CAP & Consistency”.",
      },
      {
        title: "Quorum",
        explain: "Quorum is about promises and tradeoffs when systems fail or split.",
        example: "Airline on-time goals vs what they legally promise passengers — Tradeoffs that show up in real systems.",
      },
      {
        title: "Idempotency",
        explain: "Idempotency protects identity or money movement so retries don’t create chaos.",
        example: "Card charge with a receipt number that can’t be billed twice — Tradeoffs that show up in real systems.",
      },
    ],
  },
  "system-design/case-document-saas": {
    intro: "System design is deciding how pieces talk, store data, and survive traffic — before you write clever code. End-to-end document automation architecture. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Case Study: Document SaaS”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Ingest → extract → review → deliver",
        explain: "Ingest → extract → review → deliver lets you see what the system is doing when users say “it’s broken”.",
        example: "Flight black boxes and dashboards — End-to-end document automation architecture.",
      },
      {
        title: "Cloud + on-prem paths",
        explain: "Cloud + on-prem paths: End-to-end document automation architecture. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Cloud + on-prem paths to a teammate with a whiteboard using a real product scenario for “Case Study: Document SaaS”.",
      },
      {
        title: "Channel integrations",
        explain: "Channel integrations: End-to-end document automation architecture. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Channel integrations to a teammate with a whiteboard using a real product scenario for “Case Study: Document SaaS”.",
      },
    ],
  },
  "system-design/databases": {
    intro: "System design is deciding how pieces talk, store data, and survive traffic — before you write clever code. SQL, indexing, sharding, and vectors. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Databases & Storage”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Normalization",
        explain: "Normalization is core database craft: store truth safely and fetch it fast.",
        example: "A library catalog (index) vs reading every book to find one title — SQL, indexing, sharding, and vectors.",
      },
      {
        title: "Indexes",
        explain: "Indexes is core database craft: store truth safely and fetch it fast.",
        example: "A library catalog (index) vs reading every book to find one title — SQL, indexing, sharding, and vectors.",
      },
      {
        title: "Sharding / partitioning",
        explain: "Sharding / partitioning is core database craft: store truth safely and fetch it fast.",
        example: "A library catalog (index) vs reading every book to find one title — SQL, indexing, sharding, and vectors.",
      },
      {
        title: "pgvector",
        explain: "pgvector helps machines compare meaning with numbers, not only exact keywords.",
        example: "Searching “cancel plan” also finds “how do I leave?” — SQL, indexing, sharding, and vectors.",
      },
    ],
  },
  "system-design/fundamentals": {
    intro: "System design is deciding how pieces talk, store data, and survive traffic — before you write clever code. Requirements, constraints, capacity. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Design Fundamentals”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Functional vs non-functional",
        explain: "Functional vs non-functional: Requirements, constraints, capacity. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Functional vs non-functional to a teammate with a whiteboard using a real product scenario for “Design Fundamentals”.",
      },
      {
        title: "SLAs / SLOs",
        explain: "SLAs / SLOs is about promises and tradeoffs when systems fail or split.",
        example: "Airline on-time goals vs what they legally promise passengers — Requirements, constraints, capacity.",
      },
      {
        title: "Back-of-envelope",
        explain: "Back-of-envelope: Requirements, constraints, capacity. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Back-of-envelope to a teammate with a whiteboard using a real product scenario for “Design Fundamentals”.",
      },
      {
        title: "APIs first",
        explain: "APIs first: Requirements, constraints, capacity. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining APIs first to a teammate with a whiteboard using a real product scenario for “Design Fundamentals”.",
      },
    ],
  },
  "system-design/load-balancing": {
    intro: "System design is deciding how pieces talk, store data, and survive traffic — before you write clever code. Distribute traffic safely. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Load Balancing”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "L4 vs L7",
        explain: "L4 vs L7: Distribute traffic safely. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining L4 vs L7 to a teammate with a whiteboard using a real product scenario for “Load Balancing”.",
      },
      {
        title: "Round robin / least conn",
        explain: "Round robin / least conn spreads or steers traffic across servers so one machine doesn’t melt.",
        example: "Multiple checkout counters open when the store gets busy — Distribute traffic safely.",
      },
      {
        title: "Health checks",
        explain: "Health checks spreads or steers traffic across servers so one machine doesn’t melt.",
        example: "Multiple checkout counters open when the store gets busy — Distribute traffic safely.",
      },
      {
        title: "Sticky sessions",
        explain: "Sticky sessions spreads or steers traffic across servers so one machine doesn’t melt.",
        example: "Multiple checkout counters open when the store gets busy — Distribute traffic safely.",
      },
    ],
  },
  "system-design/multi-tenant": {
    intro: "System design is deciding how pieces talk, store data, and survive traffic — before you write clever code. Isolate tenants without drowning in ops. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Multi-tenant SaaS”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Shared DB vs schema",
        explain: "Shared DB vs schema: Isolate tenants without drowning in ops. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Shared DB vs schema to a teammate with a whiteboard using a real product scenario for “Multi-tenant SaaS”.",
      },
      {
        title: "Row-level isolation",
        explain: "Row-level isolation: Isolate tenants without drowning in ops. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Row-level isolation to a teammate with a whiteboard using a real product scenario for “Multi-tenant SaaS”.",
      },
      {
        title: "Rate limits",
        explain: "Rate limits keeps customers isolated and noisy neighbors in check.",
        example: "Apartment meters so one flat can’t run everyone’s electricity bill — Isolate tenants without drowning in ops.",
      },
      {
        title: "Licensing",
        explain: "Licensing keeps customers isolated and noisy neighbors in check.",
        example: "Apartment meters so one flat can’t run everyone’s electricity bill — Isolate tenants without drowning in ops.",
      },
    ],
  },
  "system-design/observability": {
    intro: "System design is deciding how pieces talk, store data, and survive traffic — before you write clever code. Logs, metrics, traces, blackbox. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Observability”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Structured logs",
        explain: "Structured logs lets you see what the system is doing when users say “it’s broken”.",
        example: "Flight black boxes and dashboards — Logs, metrics, traces, blackbox.",
      },
      {
        title: "Metrics / alerts",
        explain: "Metrics / alerts lets you see what the system is doing when users say “it’s broken”.",
        example: "Flight black boxes and dashboards — Logs, metrics, traces, blackbox.",
      },
      {
        title: "Tracing",
        explain: "Tracing lets you see what the system is doing when users say “it’s broken”.",
        example: "Flight black boxes and dashboards — Logs, metrics, traces, blackbox.",
      },
      {
        title: "Request blackbox",
        explain: "Request blackbox: Logs, metrics, traces, blackbox. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Request blackbox to a teammate with a whiteboard using a real product scenario for “Observability”.",
      },
    ],
  },
  "system-design/queues": {
    intro: "System design is deciding how pieces talk, store data, and survive traffic — before you write clever code. Decouple producers and workers. Below, open each idea for a plain-language explanation and a real-life example.",
    whyItMatters: "If you only memorize the buzzword “Async Queues & Pipelines”, interviews and production debugging both go poorly. These notes make the pieces concrete.",
    concepts: [
      {
        title: "Celery / Redis queues",
        explain: "Celery / Redis queues means work waits in line and gets processed by workers at their own pace.",
        example: "A restaurant ticket rail: orders pile up for the kitchen while the waiter keeps seating guests — Decouple producers and workers.",
      },
      {
        title: "Retries / DLQ",
        explain: "Retries / DLQ: Decouple producers and workers. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Retries / DLQ to a teammate with a whiteboard using a real product scenario for “Async Queues & Pipelines”.",
      },
      {
        title: "Backpressure",
        explain: "Backpressure: Decouple producers and workers. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Backpressure to a teammate with a whiteboard using a real product scenario for “Async Queues & Pipelines”.",
      },
      {
        title: "Exactly-once illusions",
        explain: "Exactly-once illusions: Decouple producers and workers. Learn what it means, when to use it, and what breaks if you ignore it.",
        example: "Imagine explaining Exactly-once illusions to a teammate with a whiteboard using a real product scenario for “Async Queues & Pipelines”.",
      },
    ],
  },
}

export function getLessonBody(trackId: string, lessonId: string): LessonBody | null {
  return lessonContent[`${trackId}/${lessonId}`] || null
}

export function fallbackLessonBody(title: string, summary: string, concepts: string[]): LessonBody {
  return {
    intro: summary,
    whyItMatters: `Understanding ${title} helps you make better design choices.`,
    concepts: concepts.map((c) => ({
      title: c,
      explain: `${c} is a core idea inside ${title}. ${summary}`,
      example: `Picture a real product team applying “${c}” while shipping ${title}.`,
    })),
  }
}
