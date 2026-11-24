import type { ConceptBlock } from '../learn/components/ConceptAccordion'

export type JobPrepBody = {
  intro: string
  whyItMatters: string
  whyThatWay?: string
  architecture?: string
  concepts: ConceptBlock[]
}

export const jobPrepContent: Record<string, JobPrepBody> = {
  "agentic-rag/approval-gates": {
    intro: "Pause automated actions for human approval before side effects. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Approval Gates in Pipelines.",
    concepts: [
      {
        title: "Approval nodes",
        explain: "Approval nodes shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — Pause automated actions for human approval before side effects.",
      },
      {
        title: "Timeouts",
        explain: "Timeouts shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — Pause automated actions for human approval before side effects.",
      },
      {
        title: "Audit trail",
        explain: "Audit trail shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — Pause automated actions for human approval before side effects.",
      },
      {
        title: "Safe defaults",
        explain: "Safe defaults shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — Pause automated actions for human approval before side effects.",
      },
    ],
  },
  "agentic-rag/hnsw-ivf": {
    intro: "Production vector indexing strategies. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on HNSW vs IVF.",
    concepts: [
      {
        title: "HNSW",
        explain: "HNSW is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Production vector indexing strategies.",
      },
      {
        title: "IVF",
        explain: "IVF is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Production vector indexing strategies.",
      },
      {
        title: "Recall vs latency",
        explain: "Recall vs latency is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Production vector indexing strategies.",
      },
      {
        title: "Build cost",
        explain: "Build cost is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Production vector indexing strategies.",
      },
    ],
  },
  "agentic-rag/hybrid-metadata": {
    intro: "Precision filtering before the prompt window fills. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Hybrid Search & Metadata Filters.",
    concepts: [
      {
        title: "Metadata filters",
        explain: "Metadata filters is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Precision filtering before the prompt window fills.",
      },
      {
        title: "Hybrid scoring",
        explain: "Hybrid scoring is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Precision filtering before the prompt window fills.",
      },
      {
        title: "Tenant isolation",
        explain: "Tenant isolation is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Precision filtering before the prompt window fills.",
      },
      {
        title: "Freshness",
        explain: "Freshness is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Precision filtering before the prompt window fills.",
      },
    ],
  },
  "agentic-rag/langgraph-crew": {
    intro: "Cooperation patterns with LangGraph / CrewAI-style graphs. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Multi-agent Workflows.",
    concepts: [
      {
        title: "Graph state",
        explain: "Graph state is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Multi-agent Workflows the way production systems prune work early — Cooperation patterns with LangGraph / CrewAI-style graphs.",
      },
      {
        title: "Specialist agents",
        explain: "Specialist agents has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — Cooperation patterns with LangGraph / CrewAI-style graphs.",
      },
      {
        title: "Handoffs",
        explain: "Handoffs: a core idea inside Multi-agent Workflows. Cooperation patterns with LangGraph / CrewAI-style graphs.",
        example: "Explain Handoffs on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Shared memory",
        explain: "Shared memory: a core idea inside Multi-agent Workflows. Cooperation patterns with LangGraph / CrewAI-style graphs.",
        example: "Explain Shared memory on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "agentic-rag/multimodal-ingest": {
    intro: "Tables/images from PDFs (e.g. LlamaParse patterns). Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Multi-modal Ingestion.",
    concepts: [
      {
        title: "Layout parsing",
        explain: "Layout parsing: a core idea inside Multi-modal Ingestion. Tables/images from PDFs (e.g. LlamaParse patterns).",
        example: "Explain Layout parsing on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Tables",
        explain: "Tables: a core idea inside Multi-modal Ingestion. Tables/images from PDFs (e.g. LlamaParse patterns).",
        example: "Explain Tables on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Images",
        explain: "Images: a core idea inside Multi-modal Ingestion. Tables/images from PDFs (e.g. LlamaParse patterns).",
        example: "Explain Images on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Structured metadata",
        explain: "Structured metadata: a core idea inside Multi-modal Ingestion. Tables/images from PDFs (e.g. LlamaParse patterns).",
        example: "Explain Structured metadata on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "agentic-rag/pinecone-vs-pgvector": {
    intro: "Managed scale vs relational simplicity. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Pinecone vs pgvector.",
    concepts: [
      {
        title: "Ops burden",
        explain: "Ops burden is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Managed scale vs relational simplicity.",
      },
      {
        title: "Joins + vectors",
        explain: "Joins + vectors is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Managed scale vs relational simplicity.",
      },
      {
        title: "Scale ceiling",
        explain: "Scale ceiling is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Managed scale vs relational simplicity.",
      },
      {
        title: "Cost model",
        explain: "Cost model is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Managed scale vs relational simplicity.",
      },
    ],
  },
  "agentic-rag/quantization": {
    intro: "Shrink RAM for 10M+ vectors without wrecking recall. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Vector Quantization (SQ / PQ).",
    concepts: [
      {
        title: "Scalar quantization",
        explain: "Scalar quantization shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — Shrink RAM for 10M+ vectors without wrecking recall.",
      },
      {
        title: "Product quantization",
        explain: "Product quantization shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — Shrink RAM for 10M+ vectors without wrecking recall.",
      },
      {
        title: "Recall tradeoff",
        explain: "Recall tradeoff shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — Shrink RAM for 10M+ vectors without wrecking recall.",
      },
      {
        title: "Memory math",
        explain: "Memory math shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — Shrink RAM for 10M+ vectors without wrecking recall.",
      },
    ],
  },
  "agentic-rag/reranking": {
    intro: "Protect the context window with a second-pass ranker. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Re-ranking Layers.",
    concepts: [
      {
        title: "Retrieve broad",
        explain: "Retrieve broad is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Re-ranking Layers the way production systems prune work early — Protect the context window with a second-pass ranker.",
      },
      {
        title: "Rerank narrow",
        explain: "Rerank narrow is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Protect the context window with a second-pass ranker.",
      },
      {
        title: "Cross-encoders",
        explain: "Cross-encoders: a core idea inside Re-ranking Layers. Protect the context window with a second-pass ranker.",
        example: "Explain Cross-encoders on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Latency budget",
        explain: "Latency budget: a core idea inside Re-ranking Layers. Protect the context window with a second-pass ranker.",
        example: "Explain Latency budget on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "agentic-rag/self-correction": {
    intro: "Reflection prompts that check format and facts. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Self-Correction Loops.",
    concepts: [
      {
        title: "Critique step",
        explain: "Critique step shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — Reflection prompts that check format and facts.",
      },
      {
        title: "Schema validation",
        explain: "Schema validation shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — Reflection prompts that check format and facts.",
      },
      {
        title: "Retry budgets",
        explain: "Retry budgets is a resilience tool for noisy neighbors and dying dependencies.",
        example: "A fuse box that trips one apartment instead of blacking out the building — Reflection prompts that check format and facts.",
      },
      {
        title: "Stop rules",
        explain: "Stop rules shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — Reflection prompts that check format and facts.",
      },
    ],
  },
  "agentic-rag/semantic-cache": {
    intro: "GPTCache/Redis-style caching by meaning, not exact string. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Semantic LLM Caching.",
    concepts: [
      {
        title: "Exact vs semantic cache",
        explain: "Exact vs semantic cache makes reads fast — or takes production down if mishandled.",
        example: "A busy bakery putting the popular loaf on the counter — until everyone stampedes the kitchen at once — GPTCache/Redis-style caching by meaning, not exact string.",
      },
      {
        title: "Similarity threshold",
        explain: "Similarity threshold: a core idea inside Semantic LLM Caching. GPTCache/Redis-style caching by meaning, not exact string.",
        example: "Explain Similarity threshold on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Invalidation",
        explain: "Invalidation: a core idea inside Semantic LLM Caching. GPTCache/Redis-style caching by meaning, not exact string.",
        example: "Explain Invalidation on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Cost savings",
        explain: "Cost savings: a core idea inside Semantic LLM Caching. GPTCache/Redis-style caching by meaning, not exact string.",
        example: "Explain Cost savings on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "agentic-rag/semantic-chunking": {
    intro: "Split on meaning shifts, not only character counts. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Semantic Chunking.",
    concepts: [
      {
        title: "Contextual boundaries",
        explain: "Contextual boundaries is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Split on meaning shifts, not only character counts.",
      },
      {
        title: "Overlap",
        explain: "Overlap is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Split on meaning shifts, not only character counts.",
      },
      {
        title: "Parent docs",
        explain: "Parent docs is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Split on meaning shifts, not only character counts.",
      },
      {
        title: "Evaluation",
        explain: "Evaluation is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Split on meaning shifts, not only character counts.",
      },
    ],
  },
  "agentic-rag/sparse-vs-dense": {
    intro: "BM25 keyword matching vs semantic embeddings. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Sparse vs Dense Vectors.",
    concepts: [
      {
        title: "BM25",
        explain: "BM25 is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — BM25 keyword matching vs semantic embeddings.",
      },
      {
        title: "Dense embeddings",
        explain: "Dense embeddings is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — BM25 keyword matching vs semantic embeddings.",
      },
      {
        title: "Hybrid search",
        explain: "Hybrid search is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — BM25 keyword matching vs semantic embeddings.",
      },
      {
        title: "When keywords win",
        explain: "When keywords win is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — BM25 keyword matching vs semantic embeddings.",
      },
    ],
  },
  "agentic-rag/tool-schemas": {
    intro: "JSON schemas for safe Python API execution. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Deterministic Tool Schemas.",
    concepts: [
      {
        title: "JSON Schema",
        explain: "JSON Schema shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — JSON schemas for safe Python API execution.",
      },
      {
        title: "Allowlists",
        explain: "Allowlists has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — JSON schemas for safe Python API execution.",
      },
      {
        title: "Arg validation",
        explain: "Arg validation shows up when agents act, remember, and must stay cheap/safe at scale.",
        example: "A junior analyst with a checklist, a budget, and a manager’s sign-off — JSON schemas for safe Python API execution.",
      },
      {
        title: "Side-effect classes",
        explain: "Side-effect classes is a communication style with latency and coupling trade-offs.",
        example: "Phone call (stream) vs leaving voicemails (request/response) — JSON schemas for safe Python API execution.",
      },
    ],
  },
  "devops-cloud/bedrock-iam": {
    intro: "Call models with roles — never hardcoded keys. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Bedrock / SageMaker via IAM.",
    concepts: [
      {
        title: "IAM roles",
        explain: "IAM roles is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Call models with roles — never hardcoded keys.",
      },
      {
        title: "Least privilege",
        explain: "Least privilege is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Call models with roles — never hardcoded keys.",
      },
      {
        title: "VPC endpoints",
        explain: "VPC endpoints is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Call models with roles — never hardcoded keys.",
      },
      {
        title: "Key rotation death",
        explain: "Key rotation death is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Call models with roles — never hardcoded keys.",
      },
    ],
  },
  "devops-cloud/container-security": {
    intro: "Drop root, manage secrets, shrink attack surface. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Container Security Basics.",
    concepts: [
      {
        title: "Non-root USER",
        explain: "Non-root USER: a core idea inside Container Security Basics. Drop root, manage secrets, shrink attack surface.",
        example: "Explain Non-root USER on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Read-only FS",
        explain: "Read-only FS: a core idea inside Container Security Basics. Drop root, manage secrets, shrink attack surface.",
        example: "Explain Read-only FS on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Secrets mounts",
        explain: "Secrets mounts: a core idea inside Container Security Basics. Drop root, manage secrets, shrink attack surface.",
        example: "Explain Secrets mounts on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Image scanning",
        explain: "Image scanning: a core idea inside Container Security Basics. Drop root, manage secrets, shrink attack surface.",
        example: "Explain Image scanning on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "devops-cloud/ecs-fargate": {
    intro: "Serverless containers for FastAPI/Django services. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on ECS / Fargate for APIs.",
    concepts: [
      {
        title: "Task definitions",
        explain: "Task definitions is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Serverless containers for FastAPI/Django services.",
      },
      {
        title: "Services",
        explain: "Services is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Serverless containers for FastAPI/Django services.",
      },
      {
        title: "ALB integration",
        explain: "ALB integration is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Serverless containers for FastAPI/Django services.",
      },
      {
        title: "Cold start reality",
        explain: "Cold start reality is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Serverless containers for FastAPI/Django services.",
      },
    ],
  },
  "devops-cloud/guardrails-ragas": {
    intro: "Ragas-style evals and NeMo-style input/output filters. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Guardrails & Evals.",
    concepts: [
      {
        title: "Eval datasets",
        explain: "Eval datasets has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — Ragas-style evals and NeMo-style input/output filters.",
      },
      {
        title: "Input filters",
        explain: "Input filters is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Ragas-style evals and NeMo-style input/output filters.",
      },
      {
        title: "Output filters",
        explain: "Output filters is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Ragas-style evals and NeMo-style input/output filters.",
      },
      {
        title: "Release gates",
        explain: "Release gates is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Ragas-style evals and NeMo-style input/output filters.",
      },
    ],
  },
  "devops-cloud/hpa": {
    intro: "Scale on request/CPU/custom metrics. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Horizontal Pod Autoscaler.",
    concepts: [
      {
        title: "HPA",
        explain: "HPA is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Scale on request/CPU/custom metrics.",
      },
      {
        title: "Metrics server",
        explain: "Metrics server: a core idea inside Horizontal Pod Autoscaler. Scale on request/CPU/custom metrics.",
        example: "Explain Metrics server on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Custom metrics",
        explain: "Custom metrics: a core idea inside Horizontal Pod Autoscaler. Scale on request/CPU/custom metrics.",
        example: "Explain Custom metrics on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Cooldown times",
        explain: "Cooldown times: a core idea inside Horizontal Pod Autoscaler. Scale on request/CPU/custom metrics.",
        example: "Explain Cooldown times on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "devops-cloud/k8s-architecture": {
    intro: "Control plane vs workers — pods, services, ingress, deployments. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Kubernetes Architecture.",
    concepts: [
      {
        title: "Control plane",
        explain: "Control plane: a core idea inside Kubernetes Architecture. Control plane vs workers — pods, services, ingress, deployments.",
        example: "Explain Control plane on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Nodes",
        explain: "Nodes: a core idea inside Kubernetes Architecture. Control plane vs workers — pods, services, ingress, deployments.",
        example: "Explain Nodes on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Pods",
        explain: "Pods: a core idea inside Kubernetes Architecture. Control plane vs workers — pods, services, ingress, deployments.",
        example: "Explain Pods on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Services/Ingress/Deployments",
        explain: "Services/Ingress/Deployments: a core idea inside Kubernetes Architecture. Control plane vs workers — pods, services, ingress, deployments.",
        example: "Explain Services/Ingress/Deployments on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "devops-cloud/llmops-cicd": {
    intro: "Prompt versioning and semantic regression testing. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on CI/CD for Prompts & Indexes.",
    concepts: [
      {
        title: "Prompt versions",
        explain: "Prompt versions connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Prompt versioning and semantic regression testing.",
      },
      {
        title: "Index versioning",
        explain: "Index versioning connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Prompt versioning and semantic regression testing.",
      },
      {
        title: "Shadow evals",
        explain: "Shadow evals connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Prompt versioning and semantic regression testing.",
      },
      {
        title: "Safe rollout",
        explain: "Safe rollout connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Prompt versioning and semantic regression testing.",
      },
    ],
  },
  "devops-cloud/multistage-docker": {
    intro: "Trim Python images without losing runtime needs. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Multi-stage Docker Builds.",
    concepts: [
      {
        title: "Build vs runtime stages",
        explain: "Build vs runtime stages is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Trim Python images without losing runtime needs.",
      },
      {
        title: "Layer caching",
        explain: "Layer caching is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Trim Python images without losing runtime needs.",
      },
      {
        title: "Wheel installs",
        explain: "Wheel installs is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Trim Python images without losing runtime needs.",
      },
      {
        title: "Distroless/slim",
        explain: "Distroless/slim is how you ship and operate AI backends without heroics.",
        example: "A factory with robots, gauges, and a kill switch — Trim Python images without losing runtime needs.",
      },
    ],
  },
  "devops-cloud/observability-pillars": {
    intro: "Prometheus, Grafana, OpenTelemetry mental model. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Logs, Metrics, Traces.",
    concepts: [
      {
        title: "Metrics",
        explain: "Metrics: a core idea inside Logs, Metrics, Traces. Prometheus, Grafana, OpenTelemetry mental model.",
        example: "Explain Metrics on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Logs",
        explain: "Logs: a core idea inside Logs, Metrics, Traces. Prometheus, Grafana, OpenTelemetry mental model.",
        example: "Explain Logs on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Traces",
        explain: "Traces: a core idea inside Logs, Metrics, Traces. Prometheus, Grafana, OpenTelemetry mental model.",
        example: "Explain Traces on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Exemplars / correlation",
        explain: "Exemplars / correlation: a core idea inside Logs, Metrics, Traces. Prometheus, Grafana, OpenTelemetry mental model.",
        example: "Explain Exemplars / correlation on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "devops-cloud/rds-s3-pgvector": {
    intro: "Managed data layers for AI backends. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on RDS + pgvector + S3.",
    concepts: [
      {
        title: "RDS Postgres",
        explain: "RDS Postgres is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Managed data layers for AI backends.",
      },
      {
        title: "pgvector",
        explain: "pgvector is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Managed data layers for AI backends.",
      },
      {
        title: "S3 object lifecycle",
        explain: "S3 object lifecycle is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Managed data layers for AI backends.",
      },
      {
        title: "IAM access",
        explain: "IAM access is a RAG building block for finding the right context fast.",
        example: "A librarian who knows both the card catalog and “books like this” — Managed data layers for AI backends.",
      },
    ],
  },
  "devops-cloud/self-healing-monitors": {
    intro: "Event-driven Python monitors that kick Celery repair jobs. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Self-healing Monitors.",
    concepts: [
      {
        title: "Health signals",
        explain: "Health signals: a core idea inside Self-healing Monitors. Event-driven Python monitors that kick Celery repair jobs.",
        example: "Explain Health signals on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Auto remediation",
        explain: "Auto remediation: a core idea inside Self-healing Monitors. Event-driven Python monitors that kick Celery repair jobs.",
        example: "Explain Auto remediation on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Alert routing",
        explain: "Alert routing is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Event-driven Python monitors that kick Celery repair jobs.",
      },
      {
        title: "Safe runbooks",
        explain: "Safe runbooks: a core idea inside Self-healing Monitors. Event-driven Python monitors that kick Celery repair jobs.",
        example: "Explain Safe runbooks on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "devops-cloud/terraform-iac": {
    intro: "Declarative provisioning with Terraform concepts. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Infrastructure as Code.",
    concepts: [
      {
        title: "Desired state",
        explain: "Desired state is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Declarative provisioning with Terraform concepts.",
      },
      {
        title: "Plan/apply",
        explain: "Plan/apply: a core idea inside Infrastructure as Code. Declarative provisioning with Terraform concepts.",
        example: "Explain Plan/apply on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Modules",
        explain: "Modules: a core idea inside Infrastructure as Code. Declarative provisioning with Terraform concepts.",
        example: "Explain Modules on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "State & secrets",
        explain: "State & secrets is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Declarative provisioning with Terraform concepts.",
      },
    ],
  },
  "dsa-interview/agent-state-graphs": {
    intro: "How graph paths map to agent checkpoints. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Graphs ↔ Agentic State Machines.",
    concepts: [
      {
        title: "State nodes",
        explain: "State nodes is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Graphs ↔ Agentic State Machines the way production systems prune work early — How graph paths map to agent checkpoints.",
      },
      {
        title: "Edges as tools/actions",
        explain: "Edges as tools/actions is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Graphs ↔ Agentic State Machines the way production systems prune work early — How graph paths map to agent checkpoints.",
      },
      {
        title: "Checkpointing",
        explain: "Checkpointing is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Graphs ↔ Agentic State Machines the way production systems prune work early — How graph paths map to agent checkpoints.",
      },
      {
        title: "Recovery",
        explain: "Recovery is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Graphs ↔ Agentic State Machines the way production systems prune work early — How graph paths map to agent checkpoints.",
      },
    ],
  },
  "dsa-interview/bfs-dfs": {
    intro: "Trees, graphs, shortest paths vs exhaustive search. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on BFS vs DFS.",
    concepts: [
      {
        title: "BFS",
        explain: "BFS is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving BFS vs DFS the way production systems prune work early — Trees, graphs, shortest paths vs exhaustive search.",
      },
      {
        title: "DFS",
        explain: "DFS is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving BFS vs DFS the way production systems prune work early — Trees, graphs, shortest paths vs exhaustive search.",
      },
      {
        title: "Queue vs stack/recursion",
        explain: "Queue vs stack/recursion is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving BFS vs DFS the way production systems prune work early — Trees, graphs, shortest paths vs exhaustive search.",
      },
      {
        title: "When each fits",
        explain: "When each fits is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving BFS vs DFS the way production systems prune work early — Trees, graphs, shortest paths vs exhaustive search.",
      },
    ],
  },
  "dsa-interview/big-o": {
    intro: "O(1), O(log n), O(n), O(n log n) space-time trade-offs. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Big O Mental Models.",
    concepts: [
      {
        title: "O(1)",
        explain: "O(1) is a mental speedometer for algorithms as input grows.",
        example: "Looking up a word in a dictionary (log n) vs reading every page (n) — O(1), O(log n), O(n), O(n log n) space-time trade-offs.",
      },
      {
        title: "O(log n)",
        explain: "O(log n) is a mental speedometer for algorithms as input grows.",
        example: "Looking up a word in a dictionary (log n) vs reading every page (n) — O(1), O(log n), O(n), O(n log n) space-time trade-offs.",
      },
      {
        title: "O(n)",
        explain: "O(n) is a mental speedometer for algorithms as input grows.",
        example: "Looking up a word in a dictionary (log n) vs reading every page (n) — O(1), O(log n), O(n), O(n log n) space-time trade-offs.",
      },
      {
        title: "O(n log n)",
        explain: "O(n log n) is a mental speedometer for algorithms as input grows.",
        example: "Looking up a word in a dictionary (log n) vs reading every page (n) — O(1), O(log n), O(n), O(n log n) space-time trade-offs.",
      },
      {
        title: "Space vs time",
        explain: "Space vs time is a mental speedometer for algorithms as input grows.",
        example: "Looking up a word in a dictionary (log n) vs reading every page (n) — O(1), O(log n), O(n), O(n log n) space-time trade-offs.",
      },
    ],
  },
  "dsa-interview/hash-maps": {
    intro: "O(1) lookups and frequency tracking. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Hash Maps & Dictionaries.",
    concepts: [
      {
        title: "Hashing",
        explain: "Hashing has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — O(1) lookups and frequency tracking.",
      },
      {
        title: "Frequency maps",
        explain: "Frequency maps has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — O(1) lookups and frequency tracking.",
      },
      {
        title: "Two-sum pattern",
        explain: "Two-sum pattern has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — O(1) lookups and frequency tracking.",
      },
      {
        title: "Set membership",
        explain: "Set membership has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — O(1) lookups and frequency tracking.",
      },
    ],
  },
  "dsa-interview/heaps": {
    intro: "Min/max heaps and priority task ranking. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Heaps & Priority Queues.",
    concepts: [
      {
        title: "Heap property",
        explain: "Heap property is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Min/max heaps and priority task ranking.",
      },
      {
        title: "Top-K",
        explain: "Top-K is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Min/max heaps and priority task ranking.",
      },
      {
        title: "Dijkstra link",
        explain: "Dijkstra link is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Min/max heaps and priority task ranking.",
      },
      {
        title: "Priority workers",
        explain: "Priority workers is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Min/max heaps and priority task ranking.",
      },
    ],
  },
  "dsa-interview/lfu-cache": {
    intro: "Least Frequently Used — tracking hotness. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on LFU Cache.",
    concepts: [
      {
        title: "Frequency counters",
        explain: "Frequency counters is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving LFU Cache the way production systems prune work early — Least Frequently Used — tracking hotness.",
      },
      {
        title: "Hot keys",
        explain: "Hot keys is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving LFU Cache the way production systems prune work early — Least Frequently Used — tracking hotness.",
      },
      {
        title: "LFU vs LRU",
        explain: "LFU vs LRU is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving LFU Cache the way production systems prune work early — Least Frequently Used — tracking hotness.",
      },
      {
        title: "When LFU wins",
        explain: "When LFU wins is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving LFU Cache the way production systems prune work early — Least Frequently Used — tracking hotness.",
      },
    ],
  },
  "dsa-interview/lru-cache": {
    intro: "Least Recently Used mechanics in system design. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on LRU Cache.",
    concepts: [
      {
        title: "Recency",
        explain: "Recency is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving LRU Cache the way production systems prune work early — Least Recently Used mechanics in system design.",
      },
      {
        title: "Hash + doubly linked list",
        explain: "Hash + doubly linked list has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — Least Recently Used mechanics in system design.",
      },
      {
        title: "Eviction",
        explain: "Eviction is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving LRU Cache the way production systems prune work early — Least Recently Used mechanics in system design.",
      },
      {
        title: "CDN/API caches",
        explain: "CDN/API caches is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving LRU Cache the way production systems prune work early — Least Recently Used mechanics in system design.",
      },
    ],
  },
  "dsa-interview/python-ds-costs": {
    intro: "lists, sets, and dicts under the hood. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Python Data Structure Costs.",
    concepts: [
      {
        title: "list",
        explain: "list has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — lists, sets, and dicts under the hood.",
      },
      {
        title: "set",
        explain: "set has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — lists, sets, and dicts under the hood.",
      },
      {
        title: "dict",
        explain: "dict has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — lists, sets, and dicts under the hood.",
      },
      {
        title: "Amortized append",
        explain: "Amortized append has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — lists, sets, and dicts under the hood.",
      },
      {
        title: "Hash collisions",
        explain: "Hash collisions has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — lists, sets, and dicts under the hood.",
      },
    ],
  },
  "dsa-interview/sliding-window": {
    intro: "Fixed and variable windows for stream constraints. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Sliding Window.",
    concepts: [
      {
        title: "Fixed window",
        explain: "Fixed window is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Sliding Window the way production systems prune work early — Fixed and variable windows for stream constraints.",
      },
      {
        title: "Variable window",
        explain: "Variable window is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Sliding Window the way production systems prune work early — Fixed and variable windows for stream constraints.",
      },
      {
        title: "Running aggregates",
        explain: "Running aggregates is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Sliding Window the way production systems prune work early — Fixed and variable windows for stream constraints.",
      },
      {
        title: "Constraint checks",
        explain: "Constraint checks is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Sliding Window the way production systems prune work early — Fixed and variable windows for stream constraints.",
      },
    ],
  },
  "dsa-interview/traversal-patterns": {
    intro: "Shortest path vs full exploration patterns. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Traversal Mechanics.",
    concepts: [
      {
        title: "Level order",
        explain: "Level order: a core idea inside Traversal Mechanics. Shortest path vs full exploration patterns.",
        example: "Explain Level order on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Backtracking",
        explain: "Backtracking: a core idea inside Traversal Mechanics. Shortest path vs full exploration patterns.",
        example: "Explain Backtracking on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Visited sets",
        explain: "Visited sets has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — Shortest path vs full exploration patterns.",
      },
      {
        title: "Path reconstruction",
        explain: "Path reconstruction: a core idea inside Traversal Mechanics. Shortest path vs full exploration patterns.",
        example: "Explain Path reconstruction on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "dsa-interview/tries": {
    intro: "Autocomplete, routing tables, and tokenizer intuition. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Tries (Prefix Trees).",
    concepts: [
      {
        title: "Prefix sharing",
        explain: "Prefix sharing is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Tries (Prefix Trees) the way production systems prune work early — Autocomplete, routing tables, and tokenizer intuition.",
      },
      {
        title: "Autocomplete",
        explain: "Autocomplete is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Tries (Prefix Trees) the way production systems prune work early — Autocomplete, routing tables, and tokenizer intuition.",
      },
      {
        title: "Routing",
        explain: "Routing is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Autocomplete, routing tables, and tokenizer intuition.",
      },
      {
        title: "Tokenizer analogy",
        explain: "Tokenizer analogy is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Tries (Prefix Trees) the way production systems prune work early — Autocomplete, routing tables, and tokenizer intuition.",
      },
    ],
  },
  "dsa-interview/two-pointers": {
    intro: "Eliminate nested loops with boundary movement. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Two Pointers.",
    concepts: [
      {
        title: "Opposite ends",
        explain: "Opposite ends is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Two Pointers the way production systems prune work early — Eliminate nested loops with boundary movement.",
      },
      {
        title: "Same direction",
        explain: "Same direction is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Two Pointers the way production systems prune work early — Eliminate nested loops with boundary movement.",
      },
      {
        title: "Sorted inputs",
        explain: "Sorted inputs is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Two Pointers the way production systems prune work early — Eliminate nested loops with boundary movement.",
      },
      {
        title: "Pair problems",
        explain: "Pair problems is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving Two Pointers the way production systems prune work early — Eliminate nested loops with boundary movement.",
      },
    ],
  },
  "production-core/async-await": {
    intro: "async/await mechanics and non-blocking IO. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Asynchronous Execution.",
    concepts: [
      {
        title: "async/await",
        explain: "async/await lets the program start IO and keep working instead of freezing the thread.",
        example: "Like a chef putting bread in the oven and chopping vegetables while it bakes — async/await mechanics and non-blocking IO.",
      },
      {
        title: "Non-blocking IO",
        explain: "Non-blocking IO lets the program start IO and keep working instead of freezing the thread.",
        example: "Like a chef putting bread in the oven and chopping vegetables while it bakes — async/await mechanics and non-blocking IO.",
      },
      {
        title: "Awaitables",
        explain: "Awaitables lets the program start IO and keep working instead of freezing the thread.",
        example: "Like a chef putting bread in the oven and chopping vegetables while it bakes — async/await mechanics and non-blocking IO.",
      },
      {
        title: "When not to use async",
        explain: "When not to use async lets the program start IO and keep working instead of freezing the thread.",
        example: "Like a chef putting bread in the oven and chopping vegetables while it bakes — async/await mechanics and non-blocking IO.",
      },
    ],
  },
  "production-core/asyncpg-pgbouncer": {
    intro: "asyncpg + pooling so FastAPI does not stall on Django sync DB habits. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Async Drivers & PgBouncer.",
    concepts: [
      {
        title: "asyncpg",
        explain: "asyncpg lets the program start IO and keep working instead of freezing the thread.",
        example: "Like a chef putting bread in the oven and chopping vegetables while it bakes — asyncpg + pooling so FastAPI does not stall on Django sync DB habits.",
      },
      {
        title: "PgBouncer",
        explain: "PgBouncer lets the program start IO and keep working instead of freezing the thread.",
        example: "Like a chef putting bread in the oven and chopping vegetables while it bakes — asyncpg + pooling so FastAPI does not stall on Django sync DB habits.",
      },
      {
        title: "Transaction pooling pitfalls",
        explain: "Transaction pooling pitfalls lets the program start IO and keep working instead of freezing the thread.",
        example: "Like a chef putting bread in the oven and chopping vegetables while it bakes — asyncpg + pooling so FastAPI does not stall on Django sync DB habits.",
      },
      {
        title: "Django sync vs FastAPI async",
        explain: "Django sync vs FastAPI async lets the program start IO and keep working instead of freezing the thread.",
        example: "Like a chef putting bread in the oven and chopping vegetables while it bakes — asyncpg + pooling so FastAPI does not stall on Django sync DB habits.",
      },
    ],
  },
  "production-core/celery-concurrency": {
    intro: "prefork vs gevent/eventlet for API-adjacent traffic. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Celery Concurrency Models.",
    concepts: [
      {
        title: "prefork",
        explain: "prefork is about how Python uses CPUs and whether work overlaps or truly runs together.",
        example: "One cashier with many open tabs (concurrency) vs many cashiers (parallelism) — prefork vs gevent/eventlet for API-adjacent traffic.",
      },
      {
        title: "gevent/eventlet",
        explain: "gevent/eventlet is about how Python uses CPUs and whether work overlaps or truly runs together.",
        example: "One cashier with many open tabs (concurrency) vs many cashiers (parallelism) — prefork vs gevent/eventlet for API-adjacent traffic.",
      },
      {
        title: "Worker sizing",
        explain: "Worker sizing is about how Python uses CPUs and whether work overlaps or truly runs together.",
        example: "One cashier with many open tabs (concurrency) vs many cashiers (parallelism) — prefork vs gevent/eventlet for API-adjacent traffic.",
      },
      {
        title: "Task types",
        explain: "Task types is about how Python uses CPUs and whether work overlaps or truly runs together.",
        example: "One cashier with many open tabs (concurrency) vs many cashiers (parallelism) — prefork vs gevent/eventlet for API-adjacent traffic.",
      },
    ],
  },
  "production-core/celery-dlq": {
    intro: "Fault tolerance for flaky external APIs. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on DLQ & Retry Backoffs.",
    concepts: [
      {
        title: "Exponential backoff",
        explain: "Exponential backoff is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Fault tolerance for flaky external APIs.",
      },
      {
        title: "Jitter",
        explain: "Jitter is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Fault tolerance for flaky external APIs.",
      },
      {
        title: "Dead-letter queues",
        explain: "Dead-letter queues is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Fault tolerance for flaky external APIs.",
      },
      {
        title: "Alerting on poison pills",
        explain: "Alerting on poison pills is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Fault tolerance for flaky external APIs.",
      },
    ],
  },
  "production-core/celery-flow-control": {
    intro: "Advanced Celery flow control. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Routing, Rate Limits & Priority Queues.",
    concepts: [
      {
        title: "Task routing",
        explain: "Task routing is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Advanced Celery flow control.",
      },
      {
        title: "Rate limiting",
        explain: "Rate limiting is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Advanced Celery flow control.",
      },
      {
        title: "Priority queues",
        explain: "Priority queues is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Advanced Celery flow control.",
      },
      {
        title: "Fairness",
        explain: "Fairness is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Advanced Celery flow control.",
      },
    ],
  },
  "production-core/celery-idempotency": {
    intro: "Background tasks that survive retries safely. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Task Idempotency.",
    concepts: [
      {
        title: "At-least-once delivery",
        explain: "At-least-once delivery is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Background tasks that survive retries safely.",
      },
      {
        title: "Idempotency keys",
        explain: "Idempotency keys is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Background tasks that survive retries safely.",
      },
      {
        title: "Deduping side effects",
        explain: "Deduping side effects is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Background tasks that survive retries safely.",
      },
      {
        title: "Result storage",
        explain: "Result storage is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Background tasks that survive retries safely.",
      },
    ],
  },
  "production-core/concurrency-parallelism": {
    intro: "asyncio event loops vs multiprocessing — when each wins. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Concurrency vs Parallelism.",
    concepts: [
      {
        title: "Concurrency",
        explain: "Concurrency is about how Python uses CPUs and whether work overlaps or truly runs together.",
        example: "One cashier with many open tabs (concurrency) vs many cashiers (parallelism) — asyncio event loops vs multiprocessing — when each wins.",
      },
      {
        title: "Parallelism",
        explain: "Parallelism is about how Python uses CPUs and whether work overlaps or truly runs together.",
        example: "One cashier with many open tabs (concurrency) vs many cashiers (parallelism) — asyncio event loops vs multiprocessing — when each wins.",
      },
      {
        title: "Event loop",
        explain: "Event loop lets the program start IO and keep working instead of freezing the thread.",
        example: "Like a chef putting bread in the oven and chopping vegetables while it bakes — asyncio event loops vs multiprocessing — when each wins.",
      },
      {
        title: "Multiprocessing",
        explain: "Multiprocessing is about how Python uses CPUs and whether work overlaps or truly runs together.",
        example: "One cashier with many open tabs (concurrency) vs many cashiers (parallelism) — asyncio event loops vs multiprocessing — when each wins.",
      },
    ],
  },
  "production-core/django-fastapi-unified": {
    intro: "Django for Auth/Admin/ORM; FastAPI for API vectors. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Django + FastAPI Together.",
    concepts: [
      {
        title: "Shared models",
        explain: "Shared models is how modern Python APIs stay modular and responsive.",
        example: "A restaurant with a host (middleware), tickets (deps), and dishes leaving the kitchen as they’re ready (streaming) — Django for Auth/Admin/ORM; FastAPI for API vectors.",
      },
      {
        title: "Auth bridge",
        explain: "Auth bridge is how modern Python APIs stay modular and responsive.",
        example: "A restaurant with a host (middleware), tickets (deps), and dishes leaving the kitchen as they’re ready (streaming) — Django for Auth/Admin/ORM; FastAPI for API vectors.",
      },
      {
        title: "When to split",
        explain: "When to split is how modern Python APIs stay modular and responsive.",
        example: "A restaurant with a host (middleware), tickets (deps), and dishes leaving the kitchen as they’re ready (streaming) — Django for Auth/Admin/ORM; FastAPI for API vectors.",
      },
      {
        title: "Deployment shapes",
        explain: "Deployment shapes is how modern Python APIs stay modular and responsive.",
        example: "A restaurant with a host (middleware), tickets (deps), and dishes leaving the kitchen as they’re ready (streaming) — Django for Auth/Admin/ORM; FastAPI for API vectors.",
      },
    ],
  },
  "production-core/django-orm-pooling": {
    intro: "Avoid blocking the world at the database. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Django ORM & Connection Pooling.",
    concepts: [
      {
        title: "ORM query costs",
        explain: "ORM query costs keeps database access correct and from becoming the bottleneck.",
        example: "A coat check with limited hangers (pool) beats everyone dumping coats on the floor — Avoid blocking the world at the database.",
      },
      {
        title: "select_related/prefetch",
        explain: "select_related/prefetch keeps database access correct and from becoming the bottleneck.",
        example: "A coat check with limited hangers (pool) beats everyone dumping coats on the floor — Avoid blocking the world at the database.",
      },
      {
        title: "Connection pooling",
        explain: "Connection pooling keeps database access correct and from becoming the bottleneck.",
        example: "A coat check with limited hangers (pool) beats everyone dumping coats on the floor — Avoid blocking the world at the database.",
      },
      {
        title: "N+1 problems",
        explain: "N+1 problems keeps database access correct and from becoming the bottleneck.",
        example: "A coat check with limited hangers (pool) beats everyone dumping coats on the floor — Avoid blocking the world at the database.",
      },
    ],
  },
  "production-core/fastapi-di": {
    intro: "Modular, pluggable authentication layers. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Dependency Injection in FastAPI.",
    concepts: [
      {
        title: "Depends()",
        explain: "Depends() is how modern Python APIs stay modular and responsive.",
        example: "A restaurant with a host (middleware), tickets (deps), and dishes leaving the kitchen as they’re ready (streaming) — Modular, pluggable authentication layers.",
      },
      {
        title: "Auth dependencies",
        explain: "Auth dependencies is how modern Python APIs stay modular and responsive.",
        example: "A restaurant with a host (middleware), tickets (deps), and dishes leaving the kitchen as they’re ready (streaming) — Modular, pluggable authentication layers.",
      },
      {
        title: "Reusable DB sessions",
        explain: "Reusable DB sessions is how modern Python APIs stay modular and responsive.",
        example: "A restaurant with a host (middleware), tickets (deps), and dishes leaving the kitchen as they’re ready (streaming) — Modular, pluggable authentication layers.",
      },
      {
        title: "Testing with overrides",
        explain: "Testing with overrides is how modern Python APIs stay modular and responsive.",
        example: "A restaurant with a host (middleware), tickets (deps), and dishes leaving the kitchen as they’re ready (streaming) — Modular, pluggable authentication layers.",
      },
    ],
  },
  "production-core/fastapi-routing": {
    intro: "Async endpoints and custom error middleware. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on FastAPI Routing & Middleware.",
    concepts: [
      {
        title: "Async routes",
        explain: "Async routes lets the program start IO and keep working instead of freezing the thread.",
        example: "Like a chef putting bread in the oven and chopping vegetables while it bakes — Async endpoints and custom error middleware.",
      },
      {
        title: "Path/query models",
        explain: "Path/query models is how modern Python APIs stay modular and responsive.",
        example: "A restaurant with a host (middleware), tickets (deps), and dishes leaving the kitchen as they’re ready (streaming) — Async endpoints and custom error middleware.",
      },
      {
        title: "Error middleware",
        explain: "Error middleware is how modern Python APIs stay modular and responsive.",
        example: "A restaurant with a host (middleware), tickets (deps), and dishes leaving the kitchen as they’re ready (streaming) — Async endpoints and custom error middleware.",
      },
      {
        title: "HTTPException",
        explain: "HTTPException is how modern Python APIs stay modular and responsive.",
        example: "A restaurant with a host (middleware), tickets (deps), and dishes leaving the kitchen as they’re ready (streaming) — Async endpoints and custom error middleware.",
      },
    ],
  },
  "production-core/generators-streaming": {
    intro: "yield for real-time token streaming to the UI. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Generators for LLM Streaming.",
    concepts: [
      {
        title: "Generators",
        explain: "Generators produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — yield for real-time token streaming to the UI.",
      },
      {
        title: "yield",
        explain: "yield produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — yield for real-time token streaming to the UI.",
      },
      {
        title: "Streaming tokens",
        explain: "Streaming tokens produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — yield for real-time token streaming to the UI.",
      },
      {
        title: "Backpressure",
        explain: "Backpressure produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — yield for real-time token streaming to the UI.",
      },
    ],
  },
  "production-core/gil-thread-safety": {
    intro: "Global Interpreter Lock implications for real services. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Thread Safety & the GIL.",
    concepts: [
      {
        title: "GIL",
        explain: "GIL is about how Python uses CPUs and whether work overlaps or truly runs together.",
        example: "One cashier with many open tabs (concurrency) vs many cashiers (parallelism) — Global Interpreter Lock implications for real services.",
      },
      {
        title: "CPU-bound vs IO-bound",
        explain: "CPU-bound vs IO-bound is about how Python uses CPUs and whether work overlaps or truly runs together.",
        example: "One cashier with many open tabs (concurrency) vs many cashiers (parallelism) — Global Interpreter Lock implications for real services.",
      },
      {
        title: "Threads vs processes",
        explain: "Threads vs processes is about how Python uses CPUs and whether work overlaps or truly runs together.",
        example: "One cashier with many open tabs (concurrency) vs many cashiers (parallelism) — Global Interpreter Lock implications for real services.",
      },
      {
        title: "Safe shared state",
        explain: "Safe shared state is about how Python uses CPUs and whether work overlaps or truly runs together.",
        example: "One cashier with many open tabs (concurrency) vs many cashiers (parallelism) — Global Interpreter Lock implications for real services.",
      },
    ],
  },
  "production-core/streaming-response": {
    intro: "Token-by-token UI updates from the API. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on StreamingResponse.",
    concepts: [
      {
        title: "StreamingResponse",
        explain: "StreamingResponse produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — Token-by-token UI updates from the API.",
      },
      {
        title: "SSE vs chunked",
        explain: "SSE vs chunked produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — Token-by-token UI updates from the API.",
      },
      {
        title: "Client consumption",
        explain: "Client consumption produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — Token-by-token UI updates from the API.",
      },
      {
        title: "Cancellation",
        explain: "Cancellation produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — Token-by-token UI updates from the API.",
      },
    ],
  },
  "system-design/behavioral-patterns": {
    intro: "Strategy, Observer, State. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Behavioral Patterns.",
    concepts: [
      {
        title: "Strategy",
        explain: "Strategy is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Strategy, Observer, State.",
      },
      {
        title: "Observer",
        explain: "Observer is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Strategy, Observer, State.",
      },
      {
        title: "State",
        explain: "State is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Strategy, Observer, State.",
      },
      {
        title: "Agent loops",
        explain: "Agent loops: a core idea inside Behavioral Patterns. Strategy, Observer, State.",
        example: "Explain Agent loops on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "system-design/cache-disasters": {
    intro: "Caching disasters and how to blunt them. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Stampede, Penetration & Avalanche.",
    concepts: [
      {
        title: "Cache stampede",
        explain: "Cache stampede makes reads fast — or takes production down if mishandled.",
        example: "A busy bakery putting the popular loaf on the counter — until everyone stampedes the kitchen at once — Caching disasters and how to blunt them.",
      },
      {
        title: "Penetration",
        explain: "Penetration makes reads fast — or takes production down if mishandled.",
        example: "A busy bakery putting the popular loaf on the counter — until everyone stampedes the kitchen at once — Caching disasters and how to blunt them.",
      },
      {
        title: "Avalanche",
        explain: "Avalanche makes reads fast — or takes production down if mishandled.",
        example: "A busy bakery putting the popular loaf on the counter — until everyone stampedes the kitchen at once — Caching disasters and how to blunt them.",
      },
      {
        title: "Soft TTL / locks",
        explain: "Soft TTL / locks makes reads fast — or takes production down if mishandled.",
        example: "A busy bakery putting the popular loaf on the counter — until everyone stampedes the kitchen at once — Caching disasters and how to blunt them.",
      },
    ],
  },
  "system-design/cache-patterns": {
    intro: "Redis access patterns that teams actually ship. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Cache-Aside / Write-Through / Write-Back.",
    concepts: [
      {
        title: "Cache-aside",
        explain: "Cache-aside makes reads fast — or takes production down if mishandled.",
        example: "A busy bakery putting the popular loaf on the counter — until everyone stampedes the kitchen at once — Redis access patterns that teams actually ship.",
      },
      {
        title: "Write-through",
        explain: "Write-through makes reads fast — or takes production down if mishandled.",
        example: "A busy bakery putting the popular loaf on the counter — until everyone stampedes the kitchen at once — Redis access patterns that teams actually ship.",
      },
      {
        title: "Write-back",
        explain: "Write-back makes reads fast — or takes production down if mishandled.",
        example: "A busy bakery putting the popular loaf on the counter — until everyone stampedes the kitchen at once — Redis access patterns that teams actually ship.",
      },
      {
        title: "TTL discipline",
        explain: "TTL discipline makes reads fast — or takes production down if mishandled.",
        example: "A busy bakery putting the popular loaf on the counter — until everyone stampedes the kitchen at once — Redis access patterns that teams actually ship.",
      },
    ],
  },
  "system-design/cap-pacelc": {
    intro: "Consistency vs availability — and latency when there is no partition. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on CAP vs PACELC.",
    concepts: [
      {
        title: "CAP",
        explain: "CAP explains what breaks first when you distribute data.",
        example: "Two bank branches during a phone outage — who can still take deposits? — Consistency vs availability — and latency when there is no partition.",
      },
      {
        title: "PACELC",
        explain: "PACELC explains what breaks first when you distribute data.",
        example: "Two bank branches during a phone outage — who can still take deposits? — Consistency vs availability — and latency when there is no partition.",
      },
      {
        title: "CP vs AP",
        explain: "CP vs AP explains what breaks first when you distribute data.",
        example: "Two bank branches during a phone outage — who can still take deposits? — Consistency vs availability — and latency when there is no partition.",
      },
      {
        title: "Latency tradeoffs",
        explain: "Latency tradeoffs explains what breaks first when you distribute data.",
        example: "Two bank branches during a phone outage — who can still take deposits? — Consistency vs availability — and latency when there is no partition.",
      },
    ],
  },
  "system-design/case-chat": {
    intro: "Real-time chat needs presence, ordering, and fan-out to many devices.",
    whyItMatters: "It forces you to confront stateful connections and offline delivery.",
    whyThatWay: "WebSocket gateways hold connections; messages persist first then fan out; offline users get inbox sync on reconnect.",
    architecture: "Clients ↔ WS gateway ↔ message service ↔ store; pub/sub for fan-out; presence service with TTLs.",
    concepts: [
      {
        title: "What we’re building",
        explain: "Real-time chat needs presence, ordering, and fan-out to many devices.",
        example: "Clients ↔ WS gateway ↔ message service ↔ store; pub/sub for fan-out; presence service with TTLs.",
      },
      {
        title: "Why this design",
        explain: "WebSocket gateways hold connections; messages persist first then fan out; offline users get inbox sync on reconnect.",
        example: "It forces you to confront stateful connections and offline delivery.",
      },
      {
        title: "WebSocket gateway",
        explain: "WebSocket gateway is a communication style with latency and coupling trade-offs.",
        example: "Phone call (stream) vs leaving voicemails (request/response) — Presence, fan-out, and message ordering.",
      },
      {
        title: "Fan-out",
        explain: "Fan-out: a core idea inside Case Study: Real-time Chat. Presence, fan-out, and message ordering.",
        example: "Explain Fan-out on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Ordering",
        explain: "Ordering: a core idea inside Case Study: Real-time Chat. Presence, fan-out, and message ordering.",
        example: "Explain Ordering on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Offline inbox",
        explain: "Offline inbox: a core idea inside Case Study: Real-time Chat. Presence, fan-out, and message ordering.",
        example: "Explain Offline inbox on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "system-design/case-newsfeed": {
    intro: "News feeds mix fan-out strategies depending on follower graph shape.",
    whyItMatters: "The celebrity problem breaks naive push-to-all-followers designs.",
    whyThatWay: "Push (fan-out on write) for normal users; pull (fan-out on read) for celebrities; hybrid ranking at read time.",
    architecture: "Post service → fan-out workers → timeline caches; celebrity posts fetched at read; ranking service blends candidates.",
    concepts: [
      {
        title: "What we’re building",
        explain: "News feeds mix fan-out strategies depending on follower graph shape.",
        example: "Post service → fan-out workers → timeline caches; celebrity posts fetched at read; ranking service blends candidates.",
      },
      {
        title: "Why this design",
        explain: "Push (fan-out on write) for normal users; pull (fan-out on read) for celebrities; hybrid ranking at read time.",
        example: "The celebrity problem breaks naive push-to-all-followers designs.",
      },
      {
        title: "Fan-out on write",
        explain: "Fan-out on write: a core idea inside Case Study: News Feed. Push vs pull fan-out at scale.",
        example: "Explain Fan-out on write on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Fan-out on read",
        explain: "Fan-out on read: a core idea inside Case Study: News Feed. Push vs pull fan-out at scale.",
        example: "Explain Fan-out on read on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Celebrity problem",
        explain: "Celebrity problem: a core idea inside Case Study: News Feed. Push vs pull fan-out at scale.",
        example: "Explain Celebrity problem on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Ranking",
        explain: "Ranking: a core idea inside Case Study: News Feed. Push vs pull fan-out at scale.",
        example: "Explain Ranking on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "system-design/case-rate-limiter": {
    intro: "A distributed rate limiter protects APIs from abuse without becoming the outage itself.",
    whyItMatters: "Every multi-tenant SaaS eventually needs fair quotas.",
    whyThatWay: "Counters live in Redis for speed; algorithms (token bucket) are chosen for burst friendliness; fail-open vs fail-closed is an explicit product choice.",
    architecture: "Edge/API middleware → Redis INCR/token bucket → allow/deny; optional local cache to survive Redis blips.",
    concepts: [
      {
        title: "What we’re building",
        explain: "A distributed rate limiter protects APIs from abuse without becoming the outage itself.",
        example: "Edge/API middleware → Redis INCR/token bucket → allow/deny; optional local cache to survive Redis blips.",
      },
      {
        title: "Why this design",
        explain: "Counters live in Redis for speed; algorithms (token bucket) are chosen for burst friendliness; fail-open vs fail-closed is an explicit product choice.",
        example: "Every multi-tenant SaaS eventually needs fair quotas.",
      },
      {
        title: "Token bucket at edge",
        explain: "Token bucket at edge is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Protect APIs without melting Redis.",
      },
      {
        title: "Redis counters",
        explain: "Redis counters is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Protect APIs without melting Redis.",
      },
      {
        title: "Per-tenant quotas",
        explain: "Per-tenant quotas is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Protect APIs without melting Redis.",
      },
      {
        title: "Fail-open vs fail-closed",
        explain: "Fail-open vs fail-closed is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Protect APIs without melting Redis.",
      },
    ],
  },
  "system-design/case-rides": {
    intro: "Ride matching pairs riders and drivers in space and time under changing demand.",
    whyItMatters: "Geo queries, dispatch fairness, and strong trip-state consistency collide.",
    whyThatWay: "Geo indexes narrow candidates; matching optimizes ETA/constraints; trip state is strongly consistent once accepted.",
    architecture: "Rider/driver apps → matching service (geohash/quadtree) → trip state store → pricing/surge → notifications.",
    concepts: [
      {
        title: "What we’re building",
        explain: "Ride matching pairs riders and drivers in space and time under changing demand.",
        example: "Rider/driver apps → matching service (geohash/quadtree) → trip state store → pricing/surge → notifications.",
      },
      {
        title: "Why this design",
        explain: "Geo indexes narrow candidates; matching optimizes ETA/constraints; trip state is strongly consistent once accepted.",
        example: "Geo queries, dispatch fairness, and strong trip-state consistency collide.",
      },
      {
        title: "Geo hashing",
        explain: "Geo hashing has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — Geo indexes, dispatch, and surge.",
      },
      {
        title: "Matching service",
        explain: "Matching service: a core idea inside Case Study: Ride Matching. Geo indexes, dispatch, and surge.",
        example: "Explain Matching service on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "ETA",
        explain: "ETA: a core idea inside Case Study: Ride Matching. Geo indexes, dispatch, and surge.",
        example: "Explain ETA on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Consistency of trip state",
        explain: "Consistency of trip state is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Geo indexes, dispatch, and surge.",
      },
    ],
  },
  "system-design/case-search": {
    intro: "Autocomplete must feel instant — usually under ~100ms end-to-end.",
    whyItMatters: "Latency budgets dictate data structures and caching more than raw accuracy.",
    whyThatWay: "Prefix indexes/tries + edge caches; personalization is optional and carefully bounded so p99 stays healthy.",
    architecture: "Client → edge cache → autocomplete service (trie/inverted prefix) → optional personalization → ranked suggestions.",
    concepts: [
      {
        title: "What we’re building",
        explain: "Autocomplete must feel instant — usually under ~100ms end-to-end.",
        example: "Client → edge cache → autocomplete service (trie/inverted prefix) → optional personalization → ranked suggestions.",
      },
      {
        title: "Why this design",
        explain: "Prefix indexes/tries + edge caches; personalization is optional and carefully bounded so p99 stays healthy.",
        example: "Latency budgets dictate data structures and caching more than raw accuracy.",
      },
      {
        title: "Prefix index",
        explain: "Prefix index: a core idea inside Case Study: Search Autocomplete. Tries, caches, and ranking under latency SLOs.",
        example: "Explain Prefix index on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Edge cache",
        explain: "Edge cache makes reads fast — or takes production down if mishandled.",
        example: "A busy bakery putting the popular loaf on the counter — until everyone stampedes the kitchen at once — Tries, caches, and ranking under latency SLOs.",
      },
      {
        title: "Personalization",
        explain: "Personalization: a core idea inside Case Study: Search Autocomplete. Tries, caches, and ranking under latency SLOs.",
        example: "Explain Personalization on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Tail latency",
        explain: "Tail latency: a core idea inside Case Study: Search Autocomplete. Tries, caches, and ranking under latency SLOs.",
        example: "Explain Tail latency on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "system-design/case-url-shortener": {
    intro: "A URL shortener looks toy-sized until you add billions of redirects, custom aliases, and analytics.",
    whyItMatters: "It teaches ID generation, read-heavy caching, and a dead-simple hot path.",
    whyThatWay: "Redirects must be extremely fast and available. Writes (create link) are rarer. So the design optimizes the read path with caching and keeps IDs compact.",
    architecture: "Client → API → ID service (base62 / snowflake) → primary DB; redirects hit cache then DB; analytics async via queue.",
    concepts: [
      {
        title: "What we’re building",
        explain: "A URL shortener looks toy-sized until you add billions of redirects, custom aliases, and analytics.",
        example: "Client → API → ID service (base62 / snowflake) → primary DB; redirects hit cache then DB; analytics async via queue.",
      },
      {
        title: "Why this design",
        explain: "Redirects must be extremely fast and available. Writes (create link) are rarer. So the design optimizes the read path with caching and keeps IDs compact.",
        example: "It teaches ID generation, read-heavy caching, and a dead-simple hot path.",
      },
      {
        title: "ID generation",
        explain: "ID generation: a core idea inside Case Study: URL Shortener. Why tiny links need big design choices.",
        example: "Explain ID generation on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Read-heavy caching",
        explain: "Read-heavy caching: a core idea inside Case Study: URL Shortener. Why tiny links need big design choices.",
        example: "Explain Read-heavy caching on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Redirect path",
        explain: "Redirect path: a core idea inside Case Study: URL Shortener. Why tiny links need big design choices.",
        example: "Explain Redirect path on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Analytics",
        explain: "Analytics: a core idea inside Case Study: URL Shortener. Why tiny links need big design choices.",
        example: "Explain Analytics on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "system-design/case-video": {
    intro: "Video platforms separate upload, processing, and playback into pipelines.",
    whyItMatters: "Transcoding is slow and CPU-heavy; playback must be CDN-fast.",
    whyThatWay: "Store originals in object storage; async workers create renditions; CDN serves ABR manifests close to viewers.",
    architecture: "Upload → S3 → transcode queue → renditions + HLS/DASH → CDN → player.",
    concepts: [
      {
        title: "What we’re building",
        explain: "Video platforms separate upload, processing, and playback into pipelines.",
        example: "Upload → S3 → transcode queue → renditions + HLS/DASH → CDN → player.",
      },
      {
        title: "Why this design",
        explain: "Store originals in object storage; async workers create renditions; CDN serves ABR manifests close to viewers.",
        example: "Transcoding is slow and CPU-heavy; playback must be CDN-fast.",
      },
      {
        title: "Object storage",
        explain: "Object storage produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — Upload, transcode, CDN, and adaptive bitrate.",
      },
      {
        title: "Transcode pipeline",
        explain: "Transcode pipeline produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — Upload, transcode, CDN, and adaptive bitrate.",
      },
      {
        title: "CDN",
        explain: "CDN produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — Upload, transcode, CDN, and adaptive bitrate.",
      },
      {
        title: "ABR",
        explain: "ABR produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — Upload, transcode, CDN, and adaptive bitrate.",
      },
    ],
  },
  "system-design/consistent-hashing": {
    intro: "Rebalancing without reshuffling the world. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Consistent Hashing & Virtual Nodes.",
    concepts: [
      {
        title: "Hash rings",
        explain: "Hash rings has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — Rebalancing without reshuffling the world.",
      },
      {
        title: "Virtual nodes",
        explain: "Virtual nodes has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — Rebalancing without reshuffling the world.",
      },
      {
        title: "Cache clusters",
        explain: "Cache clusters has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — Rebalancing without reshuffling the world.",
      },
      {
        title: "Minimal remapping",
        explain: "Minimal remapping has real costs in CPython — knowing them avoids accidental O(n²).",
        example: "A labeled mailbox (dict) vs searching a pile of letters (list scan) — Rebalancing without reshuffling the world.",
      },
    ],
  },
  "system-design/creational-patterns": {
    intro: "Factory, Builder, thread-safe Singleton. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Creational Patterns.",
    concepts: [
      {
        title: "Factory",
        explain: "Factory is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Factory, Builder, thread-safe Singleton.",
      },
      {
        title: "Builder",
        explain: "Builder is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Factory, Builder, thread-safe Singleton.",
      },
      {
        title: "Singleton",
        explain: "Singleton is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Factory, Builder, thread-safe Singleton.",
      },
      {
        title: "Thread safety",
        explain: "Thread safety is about how Python uses CPUs and whether work overlaps or truly runs together.",
        example: "One cashier with many open tabs (concurrency) vs many cashiers (parallelism) — Factory, Builder, thread-safe Singleton.",
      },
    ],
  },
  "system-design/delivery-guarantees": {
    intro: "Delivery semantics you can actually promise. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on At-Least-Once vs Exactly-Once.",
    concepts: [
      {
        title: "At-most-once",
        explain: "At-most-once decides how work and events move between services.",
        example: "A ticket counter (queue) vs a security camera tape you can rewind (log/stream) — Delivery semantics you can actually promise.",
      },
      {
        title: "At-least-once",
        explain: "At-least-once decides how work and events move between services.",
        example: "A ticket counter (queue) vs a security camera tape you can rewind (log/stream) — Delivery semantics you can actually promise.",
      },
      {
        title: "Exactly-once illusion",
        explain: "Exactly-once illusion decides how work and events move between services.",
        example: "A ticket counter (queue) vs a security camera tape you can rewind (log/stream) — Delivery semantics you can actually promise.",
      },
      {
        title: "Idempotent consumers",
        explain: "Idempotent consumers is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Delivery semantics you can actually promise.",
      },
    ],
  },
  "system-design/grpc-rest-graphql": {
    intro: "Microservice communication trade-offs. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on gRPC vs REST vs GraphQL.",
    concepts: [
      {
        title: "REST",
        explain: "REST is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving gRPC vs REST vs GraphQL the way production systems prune work early — Microservice communication trade-offs.",
      },
      {
        title: "gRPC",
        explain: "gRPC is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving gRPC vs REST vs GraphQL the way production systems prune work early — Microservice communication trade-offs.",
      },
      {
        title: "GraphQL",
        explain: "GraphQL is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving gRPC vs REST vs GraphQL the way production systems prune work early — Microservice communication trade-offs.",
      },
      {
        title: "Payload & latency",
        explain: "Payload & latency is a reusable interview pattern that also shows up in caches, agents, and schedulers.",
        example: "Solving gRPC vs REST vs GraphQL the way production systems prune work early — Microservice communication trade-offs.",
      },
    ],
  },
  "system-design/partitioning-wal": {
    intro: "Relational partitioning and write-ahead logging. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Sharding, Replicas & WAL.",
    concepts: [
      {
        title: "Sharding",
        explain: "Sharding explains what breaks first when you distribute data.",
        example: "Two bank branches during a phone outage — who can still take deposits? — Relational partitioning and write-ahead logging.",
      },
      {
        title: "Read replicas",
        explain: "Read replicas explains what breaks first when you distribute data.",
        example: "Two bank branches during a phone outage — who can still take deposits? — Relational partitioning and write-ahead logging.",
      },
      {
        title: "WAL",
        explain: "WAL explains what breaks first when you distribute data.",
        example: "Two bank branches during a phone outage — who can still take deposits? — Relational partitioning and write-ahead logging.",
      },
      {
        title: "Failover",
        explain: "Failover explains what breaks first when you distribute data.",
        example: "Two bank branches during a phone outage — who can still take deposits? — Relational partitioning and write-ahead logging.",
      },
    ],
  },
  "system-design/queues-vs-streams": {
    intro: "The architectural trade-off in one page. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Message Queues vs Event Streams.",
    concepts: [
      {
        title: "Work queues",
        explain: "Work queues produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — The architectural trade-off in one page.",
      },
      {
        title: "Event logs",
        explain: "Event logs produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — The architectural trade-off in one page.",
      },
      {
        title: "Consumer groups",
        explain: "Consumer groups produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — The architectural trade-off in one page.",
      },
      {
        title: "Replay",
        explain: "Replay produces values lazily — perfect for sending LLM tokens as they arrive.",
        example: "A live sports ticker updating play-by-play instead of waiting for the final score — The architectural trade-off in one page.",
      },
    ],
  },
  "system-design/rabbitmq-vs-kafka": {
    intro: "Complex routing vs high-throughput log replay. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on RabbitMQ vs Kafka.",
    concepts: [
      {
        title: "Exchanges/bindings",
        explain: "Exchanges/bindings decides how work and events move between services.",
        example: "A ticket counter (queue) vs a security camera tape you can rewind (log/stream) — Complex routing vs high-throughput log replay.",
      },
      {
        title: "Kafka partitions",
        explain: "Kafka partitions decides how work and events move between services.",
        example: "A ticket counter (queue) vs a security camera tape you can rewind (log/stream) — Complex routing vs high-throughput log replay.",
      },
      {
        title: "Routing vs throughput",
        explain: "Routing vs throughput is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Complex routing vs high-throughput log replay.",
      },
      {
        title: "When to pick which",
        explain: "When to pick which decides how work and events move between services.",
        example: "A ticket counter (queue) vs a security camera tape you can rewind (log/stream) — Complex routing vs high-throughput log replay.",
      },
    ],
  },
  "system-design/rate-limiting": {
    intro: "Token bucket, leaky bucket, sliding window. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Rate Limiting Algorithms.",
    concepts: [
      {
        title: "Token bucket",
        explain: "Token bucket is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Token bucket, leaky bucket, sliding window.",
      },
      {
        title: "Leaky bucket",
        explain: "Leaky bucket is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Token bucket, leaky bucket, sliding window.",
      },
      {
        title: "Sliding window",
        explain: "Sliding window is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Token bucket, leaky bucket, sliding window.",
      },
      {
        title: "Distributed counters",
        explain: "Distributed counters is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Token bucket, leaky bucket, sliding window.",
      },
    ],
  },
  "system-design/scaling-limits": {
    intro: "Architectural limits and cost implications. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Horizontal vs Vertical Scaling.",
    concepts: [
      {
        title: "Scale up",
        explain: "Scale up: a core idea inside Horizontal vs Vertical Scaling. Architectural limits and cost implications.",
        example: "Explain Scale up on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Scale out",
        explain: "Scale out: a core idea inside Horizontal vs Vertical Scaling. Architectural limits and cost implications.",
        example: "Explain Scale out on a whiteboard using a product your interviewer already knows.",
      },
      {
        title: "Stateful limits",
        explain: "Stateful limits is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Architectural limits and cost implications.",
      },
      {
        title: "Cost curves",
        explain: "Cost curves: a core idea inside Horizontal vs Vertical Scaling. Architectural limits and cost implications.",
        example: "Explain Cost curves on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "system-design/solid-kiss-dry": {
    intro: "Clean architecture primitives in Pythonic form. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on SOLID, DRY & KISS.",
    concepts: [
      {
        title: "SOLID",
        explain: "SOLID is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Clean architecture primitives in Pythonic form.",
      },
      {
        title: "DRY",
        explain: "DRY is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Clean architecture primitives in Pythonic form.",
      },
      {
        title: "KISS",
        explain: "KISS is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Clean architecture primitives in Pythonic form.",
      },
      {
        title: "When not to abstract",
        explain: "When not to abstract is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Clean architecture primitives in Pythonic form.",
      },
    ],
  },
  "system-design/stability-patterns": {
    intro: "Distributed stability patterns. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Circuit Breaker, Bulkhead & Retry.",
    concepts: [
      {
        title: "Circuit breaker",
        explain: "Circuit breaker is a resilience tool for noisy neighbors and dying dependencies.",
        example: "A fuse box that trips one apartment instead of blacking out the building — Distributed stability patterns.",
      },
      {
        title: "Bulkhead",
        explain: "Bulkhead is a resilience tool for noisy neighbors and dying dependencies.",
        example: "A fuse box that trips one apartment instead of blacking out the building — Distributed stability patterns.",
      },
      {
        title: "Retry with jitter",
        explain: "Retry with jitter is a resilience tool for noisy neighbors and dying dependencies.",
        example: "A fuse box that trips one apartment instead of blacking out the building — Distributed stability patterns.",
      },
      {
        title: "Timeouts",
        explain: "Timeouts is a resilience tool for noisy neighbors and dying dependencies.",
        example: "A fuse box that trips one apartment instead of blacking out the building — Distributed stability patterns.",
      },
    ],
  },
  "system-design/structural-patterns": {
    intro: "Facade, Proxy, Adapter. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on Structural Patterns.",
    concepts: [
      {
        title: "Facade",
        explain: "Facade is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Facade, Proxy, Adapter.",
      },
      {
        title: "Proxy",
        explain: "Proxy is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Facade, Proxy, Adapter.",
      },
      {
        title: "Adapter",
        explain: "Adapter is an OO design habit that keeps Python services changeable.",
        example: "Swapping payment providers behind one interface so checkout code doesn’t care — Facade, Proxy, Adapter.",
      },
      {
        title: "API boundaries",
        explain: "API boundaries: a core idea inside Structural Patterns. Facade, Proxy, Adapter.",
        example: "Explain API boundaries on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
  "system-design/websockets-long-poll": {
    intro: "Bidirectional and near-real-time updates. Open each idea for a plain explanation and a real-world picture.",
    whyItMatters: "Interviewers and production incidents both punish hand-wavy answers on WebSockets vs Long Polling.",
    concepts: [
      {
        title: "WebSockets",
        explain: "WebSockets is a communication style with latency and coupling trade-offs.",
        example: "Phone call (stream) vs leaving voicemails (request/response) — Bidirectional and near-real-time updates.",
      },
      {
        title: "Long polling",
        explain: "Long polling is a communication style with latency and coupling trade-offs.",
        example: "Phone call (stream) vs leaving voicemails (request/response) — Bidirectional and near-real-time updates.",
      },
      {
        title: "SSE",
        explain: "SSE is a communication style with latency and coupling trade-offs.",
        example: "Phone call (stream) vs leaving voicemails (request/response) — Bidirectional and near-real-time updates.",
      },
      {
        title: "Reconnect strategy",
        explain: "Reconnect strategy is a communication style with latency and coupling trade-offs.",
        example: "Phone call (stream) vs leaving voicemails (request/response) — Bidirectional and near-real-time updates.",
      },
    ],
  },
  "target-roles/ai-solutions-engineer": {
    intro: "You design backends that make enterprise AI useful: RAG, vector indexes, prompt chains, and the APIs between company data and models.",
    whyItMatters: "Funding is pouring into teams that can ship reliable AI products — not demos.",
    whyThatWay: "Vector search, chunking, prompt/token caching, eval gates, API cost control.",
    concepts: [
      {
        title: "Role snapshot",
        explain: "You design backends that make enterprise AI useful: RAG, vector indexes, prompt chains, and the APIs between company data and models.",
        example: "Vector search, chunking, prompt/token caching, eval gates, API cost control.",
      },
      {
        title: "RAG pipelines",
        explain: "RAG pipelines connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Bridge business logic with RAG, vectors, and API middleware.",
      },
      {
        title: "Vector indexes",
        explain: "Vector indexes connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Bridge business logic with RAG, vectors, and API middleware.",
      },
      {
        title: "Prompt chains",
        explain: "Prompt chains connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Bridge business logic with RAG, vectors, and API middleware.",
      },
      {
        title: "Cost & latency",
        explain: "Cost & latency connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Bridge business logic with RAG, vectors, and API middleware.",
      },
    ],
  },
  "target-roles/distributed-backend": {
    intro: "You build hyper-scalable, fault-tolerant backends that stream text/audio/video to huge concurrency.",
    whyItMatters: "GenAI traffic patterns punish weak queues, bad sharding, and missing rate limits.",
    whyThatWay: "Load balancing, sharding, async processing, rate limiting, low-latency queues.",
    concepts: [
      {
        title: "Role snapshot",
        explain: "You build hyper-scalable, fault-tolerant backends that stream text/audio/video to huge concurrency.",
        example: "Load balancing, sharding, async processing, rate limiting, low-latency queues.",
      },
      {
        title: "Sharding",
        explain: "Sharding explains what breaks first when you distribute data.",
        example: "Two bank branches during a phone outage — who can still take deposits? — Fault-tolerant backends that stream heavy AI traffic.",
      },
      {
        title: "Async processing",
        explain: "Async processing lets the program start IO and keep working instead of freezing the thread.",
        example: "Like a chef putting bread in the oven and chopping vegetables while it bakes — Fault-tolerant backends that stream heavy AI traffic.",
      },
      {
        title: "Rate limits",
        explain: "Rate limits is how background work stays reliable when networks and APIs flake.",
        example: "A warehouse sorting belt with retry bins for damaged packages — Fault-tolerant backends that stream heavy AI traffic.",
      },
      {
        title: "Load balancing",
        explain: "Load balancing connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Fault-tolerant backends that stream heavy AI traffic.",
      },
    ],
  },
  "target-roles/forward-deployed": {
    intro: "You are the strike team that lands AI tools inside messy client environments where SaaS defaults fail.",
    whyItMatters: "Enterprises pay a premium for people who can integrate under real constraints.",
    whyThatWay: "System data flows, reverse proxies, heterogeneous scaling, client communication, Docker/K8s basics, streaming.",
    concepts: [
      {
        title: "Role snapshot",
        explain: "You are the strike team that lands AI tools inside messy client environments where SaaS defaults fail.",
        example: "System data flows, reverse proxies, heterogeneous scaling, client communication, Docker/K8s basics, streaming.",
      },
      {
        title: "Legacy integration",
        explain: "Legacy integration connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Integrate AI into messy client environments under pressure.",
      },
      {
        title: "On-site constraints",
        explain: "On-site constraints connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Integrate AI into messy client environments under pressure.",
      },
      {
        title: "Custom deploy paths",
        explain: "Custom deploy paths connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Integrate AI into messy client environments under pressure.",
      },
      {
        title: "Client communication",
        explain: "Client communication connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Integrate AI into messy client environments under pressure.",
      },
    ],
  },
  "target-roles/role-matrix": {
    intro: "Pick the role by the pain you like solving — model-to-business glue, on-site integration crises, or massive availability engines.",
    whyItMatters: "Same core stack; different optimization targets and interview emphases.",
    whyThatWay: "AI Solutions → RAG/caching; FDE → integration/deploy; Distributed backend → HLD scale & fault tolerance.",
    concepts: [
      {
        title: "Role snapshot",
        explain: "Pick the role by the pain you like solving — model-to-business glue, on-site integration crises, or massive availability engines.",
        example: "AI Solutions → RAG/caching; FDE → integration/deploy; Distributed backend → HLD scale & fault tolerance.",
      },
      {
        title: "AI Solutions focus",
        explain: "AI Solutions focus connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Value prop, system-design focus, and pay posture per role.",
      },
      {
        title: "FDE focus",
        explain: "FDE focus connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Value prop, system-design focus, and pay posture per role.",
      },
      {
        title: "Distributed backend focus",
        explain: "Distributed backend focus connects this prep track to the job you’re aiming for.",
        example: "Choosing a career lane with eyes open — Value prop, system-design focus, and pay posture per role.",
      },
      {
        title: "How to choose",
        explain: "How to choose: a core idea inside Strategic Comparison Matrix. Value prop, system-design focus, and pay posture per role.",
        example: "Explain How to choose on a whiteboard using a product your interviewer already knows.",
      },
    ],
  },
}

export function getJobPrepBody(sectionId: string, topicId: string): JobPrepBody | null {
  return jobPrepContent[`${sectionId}/${topicId}`] || null
}
