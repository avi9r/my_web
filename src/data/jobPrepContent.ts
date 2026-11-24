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
    intro: "Pause automated actions for human approval before side effects. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Approval Gates in Pipelines\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Approval nodes",
        explain: "Pause before risky side effects for human approval.",
        example: "Refund waits for Approve.",
      },
      {
        title: "Timeouts",
        explain: "Approval (and any wait) must expire. Unbounded waits freeze pipelines; after timeout, escalate, cancel, or take a safe default.",
        example: "No human approval in 24h → ticket escalates and the refund auto-cancels.",
      },
      {
        title: "Audit trail",
        explain: "An immutable record of who approved which action and when — required for compliance and post-incident forensics on agentic side effects.",
        example: "Refund of $200 approved by alice@ at 14:02 with ticket id.",
      },
      {
        title: "Safe defaults",
        explain: "Destructive or irreversible tools default to deny/gated; read-only tools can be freer. Fail closed on uncertainty.",
        example: "search_docs free; delete_account requires approval gate.",
      },
    ],
  },
  "agentic-rag/hnsw-ivf": {
    intro: "Production vector indexing strategies. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"HNSW vs IVF\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "HNSW",
        explain: "Graph ANN — great recall/latency, more memory/build cost.",
        example: "Low-latency semantic search.",
      },
      {
        title: "IVF",
        explain: "Cluster then search nearby lists — tunable recall via nprobe.",
        example: "Very large corpora.",
      },
      {
        title: "Recall vs latency",
        explain: "More candidates usually means better recall and more CPU — set SLOs.",
        example: "p95 < 50ms at recall@10 ≥ 90%.",
      },
      {
        title: "Build cost",
        explain: "Index rebuild time matters when you re-embed often.",
        example: "Nightly reindex budget.",
      },
    ],
  },
  "agentic-rag/hybrid-metadata": {
    intro: "Precision filtering before the prompt window fills. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Hybrid Search & Metadata Filters\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Metadata filters",
        explain: "Apply hard filters (tenant, doc type, date) with or before vector search so ANN never returns forbidden neighbors.",
        example: "Always filter tenant_id = current_org before similarity search.",
      },
      {
        title: "Hybrid scoring",
        explain: "A fusion method (often Reciprocal Rank Fusion) merges ranked lists from keyword and vector search into one ordering without fragile score calibration.",
        example: "RRF of BM25 top-50 + ANN top-50 yields the final retrieval set.",
      },
      {
        title: "Tenant isolation",
        explain: "Filters/namespaces are mandatory in SaaS RAG.",
        example: "Per-tenant namespace.",
      },
      {
        title: "Freshness",
        explain: "Prefer or filter documents by recency so retrieval does not surface outdated policy as current truth.",
        example: "Boost docs updated this quarter; demote older versions of the same policy.",
      },
    ],
  },
  "agentic-rag/langgraph-crew": {
    intro: "Cooperation patterns with LangGraph / CrewAI-style graphs. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Multi-agent Workflows\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Graph state",
        explain: "Shared state object routed through graph nodes.",
        example: "messages + tool outputs in state.",
      },
      {
        title: "Specialist agents",
        explain: "Researcher/writer/critic beats one mega prompt.",
        example: "Research then draft then critique.",
      },
      {
        title: "Handoffs",
        explain: "Pass only the artifacts the next agent needs — not the entire chat history — to keep context small and clear.",
        example: "Researcher passes a bullet brief to the writer, not raw tool dumps.",
      },
      {
        title: "Shared memory",
        explain: "A scratchpad or state store cooperating agents can read and write so work accumulates without stuffing everything into one prompt.",
        example: "Planner writes an outline; writer fills each section from that shared state.",
      },
    ],
  },
  "agentic-rag/multimodal-ingest": {
    intro: "Tables/images from PDFs (e.g. LlamaParse patterns). Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Multi-modal Ingestion\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Layout parsing",
        explain: "Preserve reading order, columns, and structure when ingesting PDFs/HTML so chunks reflect how humans read the page.",
        example: "Two-column PDF parsed left→right, not scrambled.",
      },
      {
        title: "Tables",
        explain: "Parse document tables into structured rows/cells so RAG and tools can query numbers, not flattened prose.",
        example: "Invoice PDF becomes JSON line items with qty and price.",
      },
      {
        title: "Images",
        explain: "OCR or caption useful figures and store metadata so multimodal docs are searchable, not invisible blobs.",
        example: "Diagram caption + OCR text indexed with the page.",
      },
      {
        title: "Structured metadata",
        explain: "Attach source, page, tenant, and type fields so filters and citations work after retrieval.",
        example: "Each chunk stores doc_id, page, tenant_id.",
      },
    ],
  },
  "agentic-rag/pinecone-vs-pgvector": {
    intro: "Managed scale vs relational simplicity. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Pinecone vs pgvector\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Ops burden",
        explain: "Managed vector DB vs self-hosted pgvector trade control for toil.",
        example: "Pinecone vs RDS extension.",
      },
      {
        title: "Joins + vectors",
        explain: "pgvector keeps vectors next to relational filters/joins.",
        example: "tenant_id filter + distance sort.",
      },
      {
        title: "Scale ceiling",
        explain: "One Postgres has limits; dedicated vector stores scale differently.",
        example: "Hundreds of millions of vectors.",
      },
      {
        title: "Cost model",
        explain: "Include storage, re-embed compute, and egress — not only sticker price.",
        example: "Full re-embed can dwarf monthly DB fees.",
      },
    ],
  },
  "agentic-rag/quantization": {
    intro: "Shrink RAM for 10M+ vectors without wrecking recall. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Vector Quantization (SQ / PQ)\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Scalar quantization",
        explain: "Fewer bits per float (e.g. int8) to cut memory.",
        example: "Roughly 4× smaller than float32.",
      },
      {
        title: "Product quantization",
        explain: "Quantize vector subspaces for heavy compression.",
        example: "Huge corpora in memory.",
      },
      {
        title: "Recall tradeoff",
        explain: "More compression → usually lower recall; measure it.",
        example: "Target tiny recall drop for large RAM save.",
      },
      {
        title: "Memory math",
        explain: "10M × 1536 × 4 bytes is tens of GB raw — compression becomes mandatory.",
        example: "Show the napkin math in interviews.",
      },
    ],
  },
  "agentic-rag/reranking": {
    intro: "Protect the context window with a second-pass ranker. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Re-ranking Layers\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Retrieve broad",
        explain: "First stage fetches many cheap candidates so recall stays high before you spend on rerank/prompt tokens.",
        example: "ANN returns top 50; reranker keeps top 5.",
      },
      {
        title: "Rerank narrow",
        explain: "Second stage scores a small candidate set more carefully and keeps the best few for the prompt window.",
        example: "Cross-encoder reranks 50 → 5 chunks.",
      },
      {
        title: "Cross-encoders",
        explain: "Score query-passage pairs more sharply than bi-encoder distance.",
        example: "Higher quality, more CPU.",
      },
      {
        title: "Latency budget",
        explain: "Allocate milliseconds across retrieval, rerank, and generation so p95 stays inside the product SLO.",
        example: "100ms autocomplete budget: leave headroom for rerank after ANN.",
      },
    ],
  },
  "agentic-rag/self-correction": {
    intro: "Reflection prompts that check format and facts. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Self-Correction Loops\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Critique step",
        explain: "A second model/pass reviews the draft for format, grounding, or policy before the user sees it.",
        example: "Critic rejects answers that cite no retrieved chunks.",
      },
      {
        title: "Schema validation",
        explain: "Parse model/tool output against a schema and retry or repair on failure instead of trusting free-form text.",
        example: "If JSON fails schema, ask the model once more with the error.",
      },
      {
        title: "Retry budgets",
        explain: "Cap how many times an agent may retry or self-repair. Unlimited loops burn tokens and can amplify bad tool use.",
        example: "Max 3 tool retries then escalate to a human or fail gracefully.",
      },
      {
        title: "Stop rules",
        explain: "Stop on success, budget, cancel, or low confidence.",
        example: "Ask a clarifying question when unsure.",
      },
    ],
  },
  "agentic-rag/semantic-cache": {
    intro: "GPTCache/Redis-style caching by meaning, not exact string. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Semantic LLM Caching\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Exact vs semantic cache",
        explain: "Exact matches strings; semantic matches paraphrases via embeddings.",
        example: "reset pwd hits reset password help.",
      },
      {
        title: "Similarity threshold",
        explain: "Tune threshold so cache is helpful not wrong.",
        example: "Serve cache only if similarity ≥ 0.95.",
      },
      {
        title: "Invalidation",
        explain: "Doc/prompt changes must bust related entries.",
        example: "Policy update clears namespace.",
      },
      {
        title: "Cost savings",
        explain: "Avoid repeat LLM calls for frequent questions.",
        example: "FAQ cache cuts spend.",
      },
    ],
  },
  "agentic-rag/semantic-chunking": {
    intro: "Split on meaning shifts, not only character counts. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Semantic Chunking\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Contextual boundaries",
        explain: "Split text on meaning shifts (headings, sections), not mid-sentence, so chunks stay coherent for retrieval.",
        example: "Break on ## headings; do not cut a paragraph in half.",
      },
      {
        title: "Overlap",
        explain: "Shared tokens between neighbors avoid boundary loss.",
        example: "50-token overlap.",
      },
      {
        title: "Parent docs",
        explain: "Retrieve small chunks; return larger parent context.",
        example: "Child hit → parent section to LLM.",
      },
      {
        title: "Evaluation",
        explain: "Measure retrieval and answer quality whenever chunking or prompts change — gut feel is not a release gate.",
        example: "Re-run recall@k after changing chunk size.",
      },
    ],
  },
  "agentic-rag/sparse-vs-dense": {
    intro: "BM25 keyword matching vs semantic embeddings. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Sparse vs Dense Vectors\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "BM25",
        explain: "Keyword relevance — strong for exact tokens and codes.",
        example: "error 0xA33 search.",
      },
      {
        title: "Dense embeddings",
        explain: "Vectors capture meaning so paraphrases match.",
        example: "cancel plan ≈ how do I leave",
      },
      {
        title: "Hybrid search",
        explain: "Combine sparse lexical scores (BM25/keyword) with dense vector similarity so you catch both exact terms and semantic matches.",
        example: "Query 'refund policy 2024' hits the year via keywords and the meaning via vectors.",
      },
      {
        title: "When keywords win",
        explain: "IDs, error codes, and rare proper names often need sparse/keyword search; pure vectors miss exact tokens.",
        example: "Ticket id INC-10422 retrieved via BM25, not embeddings.",
      },
    ],
  },
  "agentic-rag/tool-schemas": {
    intro: "JSON schemas for safe Python API execution. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Deterministic Tool Schemas\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "JSON Schema",
        explain: "A formal shape for tool arguments so the model and runtime must pass valid types and required fields before side effects run.",
        example: "refund requires amount:number and order_id:string or the call is rejected.",
      },
      {
        title: "Allowlists",
        explain: "Agents may invoke only tools you explicitly registered. Anything else is denied.",
        example: "search_docs and create_ticket allowed; raw shell_exec is not registered.",
      },
      {
        title: "Arg validation",
        explain: "Validate tool arguments in your code before any write/charge/delete. Schemas catch format; business rules catch nonsense.",
        example: "Reject refund amount <= 0 even when JSON types are correct.",
      },
      {
        title: "Side-effect classes",
        explain: "Classify tools as read, write, or destructive so the runtime can apply different policies (logging, approval, rate limits).",
        example: "refund and delete_user marked destructive — always need approval.",
      },
    ],
  },
  "devops-cloud/bedrock-iam": {
    intro: "Call models with roles — never hardcoded keys. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Bedrock / SageMaker via IAM\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "IAM roles",
        explain: "AWS identities assumed by people or services without embedding long-lived access keys in code or images.",
        example: "ECS task role may invoke only Bedrock model X — no static AKIA keys in env.",
      },
      {
        title: "Least privilege",
        explain: "Grant only the actions and resources a workload needs. Broad wildcards turn a single compromise into a blast radius.",
        example: "Allow s3:GetObject on arn:.../uploads/* — not s3:* on *.",
      },
      {
        title: "VPC endpoints",
        explain: "Private network paths from your VPC to AWS APIs (S3, Bedrock, Secrets Manager) without sending traffic over the public internet.",
        example: "Bedrock calls stay on AWS private links via a VPC endpoint.",
      },
      {
        title: "Key rotation death",
        explain: "Hardcoded long-lived keys leak, are hard to rotate everywhere, and create incident theater. Prefer short-lived roles.",
        example: "A committed AKIA key forces emergency rotation across every forgotten service.",
      },
    ],
  },
  "devops-cloud/container-security": {
    intro: "Drop root, manage secrets, shrink attack surface. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Container Security Basics\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Non-root USER",
        explain: "Run containers as a non-root user so a breakout has fewer privileges on the host.",
        example: "USER appuser after installing packages as root.",
      },
      {
        title: "Read-only FS",
        explain: "Run containers with a read-only root filesystem and only explicit writable mounts to limit attacker persistence.",
        example: "readOnlyRootFilesystem: true plus emptyDir for /tmp.",
      },
      {
        title: "Secrets mounts",
        explain: "Inject secrets at runtime from a secret store or volume — never bake them into image layers.",
        example: "Kubernetes Secret volume or AWS Secrets Manager at start.",
      },
      {
        title: "Image scanning",
        explain: "CI scans container images for known CVEs and policy violations so critical vulnerabilities never reach production registries.",
        example: "Build fails if openssl has a critical CVE before the image is pushed.",
      },
    ],
  },
  "devops-cloud/ecs-fargate": {
    intro: "Serverless containers for FastAPI/Django services. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"ECS / Fargate for APIs\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Task definitions",
        explain: "In ECS, a task definition declares the container image, CPU/RAM, ports, and IAM roles — the blueprint for each running task.",
        example: "Fargate task: 0.5 vCPU, 1GB RAM, image api:1.4, task role for S3.",
      },
      {
        title: "Services",
        explain: "In ECS (or K8s Services), a service keeps a desired count of healthy tasks/pods reachable behind a stable endpoint or load balancer.",
        example: "DesiredCount=4 keeps four API tasks registered with the ALB.",
      },
      {
        title: "ALB integration",
        explain: "An Application Load Balancer targets healthy tasks/pods and drains unhealthy ones using health checks.",
        example: "/health must return 200 or the ALB stops sending traffic to that task.",
      },
      {
        title: "Cold start reality",
        explain: "New tasks add seconds; keep minimums for user APIs.",
        example: "min tasks=2 for checkout",
      },
    ],
  },
  "devops-cloud/guardrails-ragas": {
    intro: "Ragas-style evals and NeMo-style input/output filters. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Guardrails & Evals\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Eval datasets",
        explain: "Curated labeled cases (questions, expected docs/answers, rubrics) used to score RAG/agent quality before and after changes.",
        example: "50 faithfulness + relevancy cases run in CI on every prompt change.",
      },
      {
        title: "Input filters",
        explain: "Inspect and block unsafe or sensitive user input before it reaches the model — prompt injection, PII dumps, jailbreaks.",
        example: "Input rails strip secrets and reject obvious injection patterns.",
      },
      {
        title: "Output filters",
        explain: "Inspect model output before it reaches the user — block secrets, toxic content, or policy violations.",
        example: "Regex/classifier strips API keys and blocks disallowed medical advice.",
      },
      {
        title: "Release gates",
        explain: "Block shipping if eval scores drop below thresholds — treat quality like a CI check.",
        example: "PR fails when faithfulness falls under 0.85 on the golden set.",
      },
    ],
  },
  "devops-cloud/hpa": {
    intro: "Scale on request/CPU/custom metrics. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Horizontal Pod Autoscaler\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "HPA",
        explain: "Horizontal Pod Autoscaler changes the number of pod replicas based on metrics (CPU, memory, or custom). It keeps capacity matched to demand without manual kubectl scale.",
        example: "CPU average > 60% for sustained time → HPA adds pods; when load drops, it scales back after cooldown.",
      },
      {
        title: "Metrics server",
        explain: "The Kubernetes Metrics Server scrapes resource usage from kubelets and exposes it so HPA (and kubectl top) can scale on CPU/memory. Without it, resource-based HPA cannot see utilization.",
        example: "If metrics-server is missing, HPA stuck on unknown metrics and never scales on CPU.",
      },
      {
        title: "Custom metrics",
        explain: "Beyond CPU/RAM, HPA can scale on app signals (queue depth, RPS, lag) via a custom metrics adapter (Prometheus Adapter, KEDA, etc.). Scale on what users feel, not only machine load.",
        example: "Worker Deployment scales when Redis queue length > 100 even if CPU is low.",
      },
      {
        title: "Cooldown times",
        explain: "After HPA scales up or down, cooldown (stabilization) windows prevent thrashing — rapid flapping of pod counts on noisy metrics. Without them, a brief CPU spike adds pods that immediately scale back in, wasting money and causing churn.",
        example: "CPU spikes for 20s during a deploy; with a scale-down stabilization window of a few minutes, HPA keeps the extra pods until load is truly gone.",
      },
    ],
  },
  "devops-cloud/k8s-architecture": {
    intro: "Control plane vs workers — pods, services, ingress, deployments. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Kubernetes Architecture\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Control plane",
        explain: "The cluster brain: API server, scheduler, controllers, and etcd. You declare desired state; the control plane continuously reconciles reality to match it.",
        example: "kubectl apply sends a Deployment object to the API server; controllers create pods.",
      },
      {
        title: "Nodes",
        explain: "A node is a worker machine (VM or bare metal) that runs pods. The scheduler places pods onto nodes that have enough CPU, memory, and any required labels/taints.",
        example: "A new API Deployment schedules onto nodes that still have free CPU/RAM.",
      },
      {
        title: "Pods",
        explain: "The smallest deployable unit in Kubernetes: one or more tightly coupled containers sharing network and volumes. Usually one app container plus optional sidecars (logs, proxy).",
        example: "api container + Fluent Bit sidecar in one pod share localhost networking.",
      },
      {
        title: "Services/Ingress/Deployments",
        explain: "Deployments manage replica sets and rollouts. Services give stable networking to pods. Ingress (or a cloud LB) is the HTTP entry from the outside world.",
        example: "Deployment → ClusterIP Service → Ingress/ALB routes public HTTPS to your app.",
      },
    ],
  },
  "devops-cloud/llmops-cicd": {
    intro: "Prompt versioning and semantic regression testing. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"CI/CD for Prompts & Indexes\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Prompt versions",
        explain: "Version, review, and roll back prompts like application code. Pin versions in config so prod is reproducible.",
        example: "answer_v3 pinned; rollback to answer_v2 in one config change.",
      },
      {
        title: "Index versioning",
        explain: "Build a new vector index beside the old one, evaluate, then switch the alias — never mutate the live index in place blindly.",
        example: "Build index_v12 offline; flip alias current → index_v12 after evals pass.",
      },
      {
        title: "Shadow evals",
        explain: "Score a new prompt or retriever on live traffic copies without showing users the new answers.",
        example: "5% of queries scored offline against the candidate prompt.",
      },
      {
        title: "Safe rollout",
        explain: "Ship a change to a small slice of traffic first, measure evals/errors, then promote or roll back — never big-bang prompt or index swaps.",
        example: "New chunker serves 5% traffic; if faithfulness drops, revert alias.",
      },
    ],
  },
  "devops-cloud/multistage-docker": {
    intro: "Trim Python images without losing runtime needs. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Multi-stage Docker Builds\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Build vs runtime stages",
        explain: "Build in a fat image; copy artifacts into a slim runtime image.",
        example: "pip in stage1; slim final stage.",
      },
      {
        title: "Layer caching",
        explain: "Order Dockerfile layers so dependency installs come before copying app code — code edits should not bust the dep cache.",
        example: "COPY requirements.txt → pip install → COPY . .",
      },
      {
        title: "Wheel installs",
        explain: "Prefer prebuilt Python wheels in Docker so images build fast and reproducibly without compiling C extensions.",
        example: "pip install with binary wheels; avoid apt build-essential in prod images when possible.",
      },
      {
        title: "Distroless/slim",
        explain: "Smaller bases = fewer CVEs and faster pulls.",
        example: "python:3.12-slim.",
      },
    ],
  },
  "devops-cloud/observability-pillars": {
    intro: "Prometheus, Grafana, OpenTelemetry mental model. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Logs, Metrics, Traces\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Metrics",
        explain: "Numeric time series that measure system health — the backbone of SLIs like RPS, latency percentiles, and error rate. Good for alerting and dashboards; weak for diagnosing what exactly happened.",
        example: "Track RPS, p95 latency, and 5xx rate per endpoint.",
      },
      {
        title: "Logs",
        explain: "Discrete event records with context — who, what, when, and correlation ids. Best for debugging a specific failure once metrics tell you something is wrong.",
        example: "JSON logs include request_id so you can stitch one user journey across services.",
      },
      {
        title: "Traces",
        explain: "A trace follows one request across services as a tree of spans. It shows where time was spent and which hop failed — essential in microservices.",
        example: "One checkout request spans API → payments → DB; the payments span shows the 800ms wait.",
      },
      {
        title: "Exemplars / correlation",
        explain: "Link a metric spike to an example trace or log so you jump from 'something is slow' to 'this exact request'.",
        example: "Click the p99 spike → open a representative slow trace.",
      },
    ],
  },
  "devops-cloud/rds-s3-pgvector": {
    intro: "Managed data layers for AI backends. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"RDS + pgvector + S3\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "RDS Postgres",
        explain: "Managed PostgreSQL with automated backups, patching, and Multi-AZ options so you are not babysitting OS installs.",
        example: "Primary in one AZ, standby in another for automatic failover.",
      },
      {
        title: "pgvector",
        explain: "A Postgres extension that stores embeddings and runs similarity search (often with IVFFlat/HNSW indexes) inside the same database as your relational data.",
        example: "SELECT … ORDER BY embedding <=> $query LIMIT 10",
      },
      {
        title: "S3 object lifecycle",
        explain: "Rules that automatically transition or expire objects to control storage cost as data ages.",
        example: "Multipart uploads abort after 7 days; temp exports expire in 30 days.",
      },
      {
        title: "IAM access",
        explain: "Tasks and apps assume IAM roles to reach S3, DB secrets, and APIs — credentials are temporary and scoped.",
        example: "Task role can read only s3://bucket/prefix/* — no static keys in the image.",
      },
    ],
  },
  "devops-cloud/self-healing-monitors": {
    intro: "Event-driven Python monitors that kick Celery repair jobs. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Self-healing Monitors\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Health signals",
        explain: "Synthetics and SLIs detect user-visible failure early — before Twitter tells you.",
        example: "Cron hits the critical checkout journey every minute from outside the VPC.",
      },
      {
        title: "Auto remediation",
        explain: "Safe automated fixes (restart, scale, failover) that follow known runbooks without waiting for a human on every blip.",
        example: "High queue depth → autoscale workers; repeated OOM → restart then page if it loops.",
      },
      {
        title: "Alert routing",
        explain: "Send pages only for symptoms a human must act on now; everything else becomes tickets or dashboards. Reduces alert fatigue.",
        example: "Sustained 5xx pages on-call; disk 70% opens a ticket, not a 3am page.",
      },
      {
        title: "Safe runbooks",
        explain: "Automation should encode human-approved steps with kill switches — never invent risky actions under pressure.",
        example: "Auto-rollback on error-budget burn; human can disable the bot.",
      },
    ],
  },
  "devops-cloud/terraform-iac": {
    intro: "Declarative provisioning with Terraform concepts. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Infrastructure as Code\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Desired state",
        explain: "Infrastructure as code declares what should exist; the tool computes the diff and converges reality toward that declaration.",
        example: "resource aws_s3_bucket \"uploads\" { ... } — apply creates or updates until it matches.",
      },
      {
        title: "Plan/apply",
        explain: "terraform plan shows the proposed create/change/destroy diff; apply executes it after human review — never apply blind in prod.",
        example: "PR bot posts the plan; merge only after review, then apply.",
      },
      {
        title: "Modules",
        explain: "Reusable Terraform packages that wrap a pattern (VPC, ECS service, RDS) so teams share proven defaults instead of copy-pasting raw resources.",
        example: "module vpc { source = ./modules/vpc }",
      },
      {
        title: "State & secrets",
        explain: "Terraform state is sensitive inventory of your infra. Store it remotely with locking, encrypt it, and never put plaintext secrets in .tf files.",
        example: "S3 backend + DynamoDB lock table; secrets from Secrets Manager, not variables.tf.",
      },
    ],
  },
  "dsa-interview/agent-state-graphs": {
    intro: "How graph paths map to agent checkpoints. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Graphs ↔ Agentic State Machines\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "State nodes",
        explain: "In agents, nodes are states (messages, tool results).",
        example: "State needs_calendar → after tool call, state has events.",
      },
      {
        title: "Edges as tools/actions",
        explain: "Transitions can trigger tool calls, not only move data.",
        example: "Conditional edge chooses search vs final answer.",
      },
      {
        title: "Checkpointing",
        explain: "Persist workflow state so a crash can resume without redoing irreversible side effects from scratch.",
        example: "Agent checkpoint after tool call; restart continues from saved state.",
      },
      {
        title: "Recovery",
        explain: "Resume from checkpoint with idempotent actions.",
        example: "Retry send_email only if email_sent is false.",
      },
    ],
  },
  "dsa-interview/bfs-dfs": {
    intro: "Trees, graphs, shortest paths vs exhaustive search. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"BFS vs DFS\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "BFS",
        explain: "Level-order exploration with a queue — shortest paths in unweighted graphs.",
        example: "Minimum knight moves on a chessboard.",
      },
      {
        title: "DFS",
        explain: "Deep exploration with stack/recursion — cycles, components, path search.",
        example: "Detect a cycle with colors / recursion stack.",
      },
      {
        title: "Queue vs stack/recursion",
        explain: "BFS uses a queue; DFS uses a stack or the call stack.",
        example: "Deep graphs may need an explicit DFS stack to avoid recursion limits.",
      },
      {
        title: "When each fits",
        explain: "Fewest hops → BFS. Exhaustive/backtracking → DFS. Weighted shortest → Dijkstra.",
        example: "Equal-cost maze: BFS. All root-to-leaf paths: DFS.",
      },
    ],
  },
  "dsa-interview/big-o": {
    intro: "O(1), O(log n), O(n), O(n log n) space-time trade-offs. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Big O Mental Models\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "O(1)",
        explain: "Constant time: cost does not grow with input size (average hash lookup, array index).",
        example: "dict[key] stays fast for 100 or 1,000,000 keys on average.",
      },
      {
        title: "O(log n)",
        explain: "Each step shrinks the problem sharply (binary search, balanced tree height).",
        example: "Finding a name in a sorted phone book by jumping to the middle repeatedly.",
      },
      {
        title: "O(n)",
        explain: "Linear time: touch each element a fixed number of times.",
        example: "One scan to find the maximum.",
      },
      {
        title: "O(n log n)",
        explain: "Common for good comparison sorts and sort-then-scan solutions.",
        example: "Sort intervals then merge overlaps in one pass.",
      },
      {
        title: "Space vs time",
        explain: "Trade memory for speed (indexes, caches) or CPU for less RAM.",
        example: "Prefix sums use extra space for O(1) range queries.",
      },
    ],
  },
  "dsa-interview/hash-maps": {
    intro: "O(1) lookups and frequency tracking. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Hash Maps & Dictionaries\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Hashing",
        explain: "Maps keys to buckets for near-O(1) average access — foundation of sets, maps, and caches.",
        example: "Session store keyed by session_id.",
      },
      {
        title: "Frequency maps",
        explain: "Count occurrences — unlocks anagrams, majority, top-k patterns.",
        example: "Valid anagram via equal frequencies.",
      },
      {
        title: "Two-sum pattern",
        explain: "Store seen values while scanning for complements in one pass.",
        example: "For each x, check whether target-x was seen.",
      },
      {
        title: "Set membership",
        explain: "Ask 'have I seen this?' in average O(1) with a hash set — core to dedupe and cycle detection.",
        example: "First duplicate in a stream via a seen set.",
      },
    ],
  },
  "dsa-interview/heaps": {
    intro: "Min/max heaps and priority task ranking. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Heaps & Priority Queues\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Heap property",
        explain: "In a min-heap parent ≤ children — O(1) best peek, O(log n) push/pop.",
        example: "Always know the smallest ETA among taxis.",
      },
      {
        title: "Top-K",
        explain: "A size-k heap tracks top/bottom k in a stream in O(n log k).",
        example: "Top 10 largest files without full sort.",
      },
      {
        title: "Dijkstra link",
        explain: "Dijkstra uses a min-heap of next-closest nodes.",
        example: "Maps expands the closest intersection first.",
      },
      {
        title: "Priority workers",
        explain: "Schedulers pop highest priority work first.",
        example: "Password reset before bulk newsletter.",
      },
    ],
  },
  "dsa-interview/lfu-cache": {
    intro: "Least Frequently Used — tracking hotness. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"LFU Cache\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Frequency counters",
        explain: "LFU tracks hit counts and evicts least frequent keys.",
        example: "Rare settings page leaves before homepage.",
      },
      {
        title: "Hot keys",
        explain: "LFU keeps stably popular keys even if something was touched recently once.",
        example: "Viral product page stays warm.",
      },
      {
        title: "LFU vs LRU",
        explain: "LRU = recency; LFU = frequency. Scans can pollute LRU more than LFU.",
        example: "Sequential scan should not wipe the true hot set.",
      },
      {
        title: "When LFU wins",
        explain: "Stable popularity (best sellers, common queries) favors frequency eviction.",
        example: "Best-seller SKUs stay cached all week.",
      },
    ],
  },
  "dsa-interview/lru-cache": {
    intro: "Least Recently Used mechanics in system design. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"LRU Cache\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Recency",
        explain: "LRU evicts the entry not used for the longest time.",
        example: "Recently opened files stay in OS cache.",
      },
      {
        title: "Hash + doubly linked list",
        explain: "Hash map for O(1) lookup plus list for O(1) move-to-front/evict.",
        example: "Get promotes to head; evict pops tail.",
      },
      {
        title: "Eviction",
        explain: "When full, remove one entry by policy before insert.",
        example: "CDN drops least-recent object.",
      },
      {
        title: "CDN/API caches",
        explain: "LRU-like policies keep hot API/CDN objects in memory.",
        example: "Hot endpoints stay cached.",
      },
    ],
  },
  "dsa-interview/python-ds-costs": {
    intro: "lists, sets, and dicts under the hood. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Python Data Structure Costs\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "list",
        explain: "Dynamic array: O(1) index, amortized O(1) append, O(n) insert at front.",
        example: "list.pop(0) is O(n) — use deque for queues.",
      },
      {
        title: "set",
        explain: "Hash set: average O(1) add/membership for unique items.",
        example: "seen=set() detects duplicates in one pass.",
      },
      {
        title: "dict",
        explain: "A hash map with average O(1) get/set by key — Python's workhorse for counting, indexing, and memoization.",
        example: "Character frequency counting with a dict.",
      },
      {
        title: "Amortized append",
        explain: "Occasional resize makes most appends O(1); overall appends stay about linear.",
        example: "Appending a million items is not quadratic.",
      },
      {
        title: "Hash collisions",
        explain: "Different keys can hash alike; dicts handle it. Worst cases are rare with good hashing.",
        example: "Python randomizes hashes to reduce collision attacks.",
      },
    ],
  },
  "dsa-interview/sliding-window": {
    intro: "Fixed and variable windows for stream constraints. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Sliding Window\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Fixed window",
        explain: "Window of size k slides; update aggregates in O(1) per step.",
        example: "Max sum of k consecutive elements.",
      },
      {
        title: "Variable window",
        explain: "A sliding window whose size grows and shrinks while a constraint holds — classic for longest/shortest substring problems.",
        example: "Longest substring without repeating characters.",
      },
      {
        title: "Running aggregates",
        explain: "Keep sum/freqs/deque maxima so you do not rescan the window.",
        example: "Sliding window maximum with a monotonic deque.",
      },
      {
        title: "Constraint checks",
        explain: "Define validity clearly; expand right, shrink left until valid.",
        example: "Smallest subarray with sum ≥ S.",
      },
    ],
  },
  "dsa-interview/traversal-patterns": {
    intro: "Shortest path vs full exploration patterns. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Traversal Mechanics\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Level order",
        explain: "Process tree (or graph) nodes level by level with a queue — BFS by depth.",
        example: "Print a binary tree level by level.",
      },
      {
        title: "Backtracking",
        explain: "Build a candidate; undo when a branch fails.",
        example: "N-Queens place/remove queens recursively.",
      },
      {
        title: "Visited sets",
        explain: "Mark visited nodes to avoid infinite loops on cycles.",
        example: "Island counting with DFS flood fill.",
      },
      {
        title: "Path reconstruction",
        explain: "Store parents during search to rebuild the actual path.",
        example: "Maps showing turns, not only ETA.",
      },
    ],
  },
  "dsa-interview/tries": {
    intro: "Autocomplete, routing tables, and tokenizer intuition. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Tries (Prefix Trees)\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Prefix sharing",
        explain: "A trie stores shared character prefixes once, so many keys that start alike reuse the same nodes — memory-efficient prefix search.",
        example: "app, apple, and ape share the ap path in the trie.",
      },
      {
        title: "Autocomplete",
        explain: "Walk a prefix then collect ranked subtree suggestions.",
        example: "Type res → restaurant, reset…",
      },
      {
        title: "Routing",
        explain: "Longest-prefix structures appear in IP/URL routing.",
        example: "Match /api/v1/* rules efficiently.",
      },
      {
        title: "Tokenizer analogy",
        explain: "Tokenizers merge common character sequences; prefix-like vocab structures show up in that world.",
        example: "Common words become single tokens via merge rules.",
      },
    ],
  },
  "dsa-interview/two-pointers": {
    intro: "Eliminate nested loops with boundary movement. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Two Pointers\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Opposite ends",
        explain: "Pointers start at both ends and move inward — common on sorted arrays.",
        example: "Two-sum on a sorted array.",
      },
      {
        title: "Same direction",
        explain: "Both pointers move forward (slow/fast or window left edge).",
        example: "In-place dedupe with a write pointer.",
      },
      {
        title: "Sorted inputs",
        explain: "Sorting unlocks two-pointer and binary search approaches.",
        example: "3Sum: sort, then two-pointer for each fixed number.",
      },
      {
        title: "Pair problems",
        explain: "Nested O(n²) loops often become O(n) / O(n log n) with two pointers or hashing.",
        example: "Container With Most Water.",
      },
    ],
  },
  "production-core/async-await": {
    intro: "async/await mechanics and non-blocking IO. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Asynchronous Execution\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "async/await",
        explain: "async defines a coroutine; await pauses it until an awaitable finishes, freeing the event loop to run other work. It shines for IO (network, disk), not raw CPU crunching.",
        example: "You await a database query the way you wait for a package: you do other chores until delivery arrives.",
      },
      {
        title: "Non-blocking IO",
        explain: "Non-blocking IO starts an operation and returns control immediately instead of freezing the thread until data arrives.",
        example: "Sending email without freezing the UI while SMTP responds.",
      },
      {
        title: "Awaitables",
        explain: "An awaitable is anything you can await: coroutines, Tasks, Futures — work the event loop knows will finish later.",
        example: "A kitchen ticket is an awaitable: not food yet, but the system will come back when it is done.",
      },
      {
        title: "When not to use async",
        explain: "Do not force async onto heavy CPU work or blocking libraries — you will stall every other request on that worker. Use processes or a task queue instead.",
        example: "A huge image-resize loop inside an async API handler blocks other users — move it to Celery.",
      },
    ],
  },
  "production-core/asyncpg-pgbouncer": {
    intro: "asyncpg + pooling so FastAPI does not stall on Django sync DB habits. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Async Drivers & PgBouncer\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "asyncpg",
        explain: "High-performance async PostgreSQL driver for awaitable queries from async FastAPI routes.",
        example: "await conn.fetch(...) instead of blocking the event loop.",
      },
      {
        title: "PgBouncer",
        explain: "Connection pooler in front of Postgres so many app workers share fewer real DB connections.",
        example: "30 pods multiplex through PgBouncer into ~50 Postgres connections.",
      },
      {
        title: "Transaction pooling pitfalls",
        explain: "Transaction pooling breaks some session features (temp tables, certain prepared statements). Match pool mode to the ORM.",
        example: "Some Django patterns need session pooling, not transaction pooling.",
      },
      {
        title: "Django sync vs FastAPI async",
        explain: "Django ORM is sync. Calling it inside async routes without care blocks the event loop. Use sync routes, sync_to_async, or async drivers.",
        example: "Do not call Model.objects.get() directly in async def without an offload strategy.",
      },
    ],
  },
  "production-core/celery-concurrency": {
    intro: "prefork vs gevent/eventlet for API-adjacent traffic. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Celery Concurrency Models\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "prefork",
        explain: "Celery prefork runs tasks in child processes — solid default for isolation and mixed CPU tasks.",
        example: "A crashing parser kills one child; the parent replaces it.",
      },
      {
        title: "gevent/eventlet",
        explain: "Greenlet pools run many waiting IO tasks in one process. Great for HTTP waits; bad for blocking CPU code.",
        example: "Thousands of webhook calls fit gevent; heavy numpy loops do not.",
      },
      {
        title: "Worker sizing",
        explain: "Set concurrency from CPU, memory, and DB pool limits. Too high thrash; too low queues grow.",
        example: "4-core box: prefork concurrency about 4–8 for CPU tasks.",
      },
      {
        title: "Task types",
        explain: "Put fast IO and heavy CPU tasks on different queues/pools so they do not starve each other.",
        example: "webhooks on io-queue; video transcode on cpu-queue.",
      },
    ],
  },
  "production-core/celery-dlq": {
    intro: "Fault tolerance for flaky external APIs. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"DLQ & Retry Backoffs\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Exponential backoff",
        explain: "Wait longer between retries (1s, 2s, 4s…) so flaky dependencies can recover.",
        example: "Rate-limited API: retry after 2s, then 4s, then 8s.",
      },
      {
        title: "Jitter",
        explain: "Add randomness to delays so workers do not retry in lockstep.",
        example: "500 workers spread retries across 3–5s instead of all at T+4.000s.",
      },
      {
        title: "Dead-letter queues",
        explain: "After max retries, send the message to a DLQ for humans instead of looping forever.",
        example: "Poison payload sits in dlq.emails until inspected and replayed.",
      },
      {
        title: "Alerting on poison pills",
        explain: "Alert when DLQ depth rises — poison messages need code/data fixes.",
        example: "Page when DLQ depth > 0 for 10 minutes.",
      },
    ],
  },
  "production-core/celery-flow-control": {
    intro: "Advanced Celery flow control. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Routing, Rate Limits & Priority Queues\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Task routing",
        explain: "Send task names to specialized queues/workers.",
        example: "image.resize → gpu-queue; billing.charge → payments-queue.",
      },
      {
        title: "Rate limiting",
        explain: "Cap how often tasks run to respect upstream quotas.",
        example: "Celery rate_limit=\"10/m\" for a partner API.",
      },
      {
        title: "Priority queues",
        explain: "Higher priority work jumps ahead of bulk jobs.",
        example: "Password-reset email before newsletter blast.",
      },
      {
        title: "Fairness",
        explain: "Stop one tenant from monopolizing workers via quotas or separate queues.",
        example: "Tenant A import cannot block Tenant B interactive jobs.",
      },
    ],
  },
  "production-core/celery-idempotency": {
    intro: "Background tasks that survive retries safely. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Task Idempotency\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "At-least-once delivery",
        explain: "Brokers often redeliver if a worker dies before ack. Assume duplicates will happen.",
        example: "Worker charges a card then dies before ack — without dedupe the charge can run twice.",
      },
      {
        title: "Idempotency keys",
        explain: "A unique key per logical operation makes retries reuse the first result instead of repeating side effects.",
        example: "send_email(idempotency_key=message_id) no-ops on the second run.",
      },
      {
        title: "Deduping side effects",
        explain: "Check prior success, use provider idempotency, or transactional outbox before calling external APIs.",
        example: "Before Stripe charge, look up payment_attempts for the same order_id.",
      },
      {
        title: "Result storage",
        explain: "Result backends store status/payloads for polling — keep them small; store big outputs in S3/DB.",
        example: "Poll task_id → SUCCESS with an S3 output pointer.",
      },
    ],
  },
  "production-core/concurrency-parallelism": {
    intro: "asyncio event loops vs multiprocessing — when each wins. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Concurrency vs Parallelism\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Concurrency",
        explain: "Concurrency means dealing with many tasks at once by overlapping waiting time. One CPU core can juggle tasks: start one, wait on IO, switch to another. The tasks do not have to run at the exact same instant.",
        example: "A barista takes order A, starts the espresso machine, then takes order B while the shot pulls. One person, interleaved work — that is concurrency.",
      },
      {
        title: "Parallelism",
        explain: "Parallelism means doing multiple tasks at the same true moment on multiple CPU cores (or machines). Work literally happens side by side, not just interleaved.",
        example: "Two baristas pulling two shots at the same time on two machines — that is parallelism.",
      },
      {
        title: "Event loop",
        explain: "An event loop is the scheduler behind asyncio: it runs ready coroutines and parks the ones waiting on IO, so one thread can handle thousands of waiting connections.",
        example: "Like a restaurant manager with a clipboard always moving to whoever can progress now.",
      },
      {
        title: "Multiprocessing",
        explain: "Multiprocessing runs separate OS processes, each with its own Python interpreter and memory. That bypasses the GIL for CPU-heavy work, at the cost of heavier startup and IPC.",
        example: "Giving each chef their own kitchen station — they do not block each other, but you must pass ingredients between kitchens.",
      },
    ],
  },
  "production-core/django-fastapi-unified": {
    intro: "Django for Auth/Admin/ORM; FastAPI for API vectors. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Django + FastAPI Together\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Shared models",
        explain: "Django and FastAPI can share the same ORM models so Admin and APIs do not drift.",
        example: "One Customer table; Admin edits it; FastAPI serves /customers.",
      },
      {
        title: "Auth bridge",
        explain: "Unify identity across Django and FastAPI (same user table / token issuer).",
        example: "Django issues JWT; FastAPI validates the same secret and user id.",
      },
      {
        title: "When to split",
        explain: "Split services when scale or ownership diverges — not for fashion.",
        example: "OCR workers need 50 boxes; admin UI needs 2 — separate deployables.",
      },
      {
        title: "Deployment shapes",
        explain: "Common patterns: one image with both apps mounted, or two services behind one ingress.",
        example: "/admin → Django; /api → FastAPI behind one load balancer.",
      },
    ],
  },
  "production-core/django-orm-pooling": {
    intro: "Avoid blocking the world at the database. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Django ORM & Connection Pooling\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "ORM query costs",
        explain: "ORMs hide SQL; careless use creates slow queries. Know the SQL and round-trips you trigger.",
        example: "Looping user.orders without prefetch causes classic N+1 queries.",
      },
      {
        title: "select_related/prefetch",
        explain: "select_related JOINs FK relations; prefetch_related batches reverse/M2M relations — both kill N+1.",
        example: "Article list with author uses select_related(\"author\").",
      },
      {
        title: "Connection pooling",
        explain: "Reusing DB connections is cheaper than opening new ones every request. Size pools to DB limits.",
        example: "Hundreds of workers without pooling will exhaust Postgres max_connections.",
      },
      {
        title: "N+1 problems",
        explain: "One query for a list plus N queries for related rows. Fix with joins/prefetch.",
        example: "50 invoices then 50 customer lookups becomes one joined query.",
      },
    ],
  },
  "production-core/fastapi-di": {
    intro: "Modular, pluggable authentication layers. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Dependency Injection in FastAPI\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Depends()",
        explain: "Depends() injects shared logic (auth, DB, settings) into endpoints without copy-paste.",
        example: "get_current_user runs once and feeds any route that declares it.",
      },
      {
        title: "Auth dependencies",
        explain: "Keep auth pluggable: swap JWT for API keys by changing one dependency, not every route.",
        example: "Internal tools use API keys; customer app uses JWT — both via Depends.",
      },
      {
        title: "Reusable DB sessions",
        explain: "A dependency opens a DB session and closes it after the request to prevent leaks.",
        example: "Even if the handler crashes, the session close path still runs.",
      },
      {
        title: "Testing with overrides",
        explain: "dependency_overrides replace auth/DB with fakes in tests.",
        example: "Tests inject a fake admin user without minting real JWTs.",
      },
    ],
  },
  "production-core/fastapi-routing": {
    intro: "Async endpoints and custom error middleware. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"FastAPI Routing & Middleware\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Async routes",
        explain: "FastAPI async def endpoints can await IO without blocking the worker thread during waits.",
        example: "An async /search awaits vector DB + model and still serves others while waiting.",
      },
      {
        title: "Path/query models",
        explain: "Pydantic models validate inputs automatically and return clear 422 errors before business logic runs.",
        example: "POST /orders rejects negative qty instead of creating a corrupt order.",
      },
      {
        title: "Error middleware",
        explain: "Middleware wraps requests to log, add headers, or turn exceptions into consistent JSON errors.",
        example: "Uncaught errors become JSON with request_id instead of HTML stack traces.",
      },
      {
        title: "HTTPException",
        explain: "The intentional way to return HTTP errors (401/404/409) with a response body.",
        example: "raise HTTPException(404, \"Document not found\").",
      },
    ],
  },
  "production-core/generators-streaming": {
    intro: "yield for real-time token streaming to the UI. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Generators for LLM Streaming\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Generators",
        explain: "A generator uses yield to produce values lazily — one at a time — without building a full list in memory.",
        example: "Reading a 10GB log line by line instead of loading it all into RAM.",
      },
      {
        title: "yield",
        explain: "yield returns a value and suspends function state until the next iteration — the core of streaming.",
        example: "A storyteller pausing after each chapter, then continuing from the bookmark.",
      },
      {
        title: "Streaming tokens",
        explain: "LLM UIs feel fast when tokens are sent as they are generated. Generators/async iterators yield chunks; clients append them live.",
        example: "Chat-style typing: words appear instead of waiting for the full answer.",
      },
      {
        title: "Backpressure",
        explain: "Slow down producers when consumers cannot keep up, so buffers do not explode.",
        example: "If the browser stops reading the stream, the server should stop flooding tokens into memory.",
      },
    ],
  },
  "production-core/gil-thread-safety": {
    intro: "Global Interpreter Lock implications for real services. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Thread Safety & the GIL\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "GIL",
        explain: "The Global Interpreter Lock allows only one thread to execute Python bytecode at a time in a process. Threads help with IO waits, but do not speed pure-Python CPU work across cores.",
        example: "One microphone in a meeting: many people can sit (threads), but only one talks Python bytecode at a time.",
      },
      {
        title: "CPU-bound vs IO-bound",
        explain: "CPU-bound work spends time computing. IO-bound work spends time waiting on network/disk. Async/threads help IO; processes or native code help CPU.",
        example: "Waiting for Stripe = IO-bound. Transforming a huge CSV in Python loops = CPU-bound.",
      },
      {
        title: "Threads vs processes",
        explain: "Threads share memory inside one process (lighter, GIL-limited for CPU). Processes isolate memory (heavier, true CPU parallelism).",
        example: "Shared Google Doc (threads) vs separate documents emailed around (processes).",
      },
      {
        title: "Safe shared state",
        explain: "When tasks share data, unprotected reads/writes race. Prefer queues, locks, immutable messages, or do not share — pass copies.",
        example: "Two cashiers editing one spreadsheet cell will overwrite each other — queue the updates instead.",
      },
    ],
  },
  "production-core/streaming-response": {
    intro: "Token-by-token UI updates from the API. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"StreamingResponse\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "StreamingResponse",
        explain: "Sends an iterable of bytes so clients receive data incrementally.",
        example: "LLM endpoint streams UTF-8 chunks into a live chat bubble.",
      },
      {
        title: "SSE vs chunked",
        explain: "SSE is a framed one-way event protocol; chunked HTTP is raw incremental bytes. Both can stream tokens.",
        example: "SSE uses event/data lines; chunked streaming just writes pieces of the body.",
      },
      {
        title: "Client consumption",
        explain: "Clients must read incrementally (stream readers / EventSource). Buffering everything defeats streaming UX.",
        example: "fetch body.getReader() appends tokens as they arrive.",
      },
      {
        title: "Cancellation",
        explain: "When users disconnect, cancel server work so you do not pay for unused compute/tokens.",
        example: "Closing the tab aborts fetch; API stops the model stream.",
      },
    ],
  },
  "system-design/behavioral-patterns": {
    intro: "Strategy, Observer, State. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Behavioral Patterns\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Strategy",
        explain: "Swap algorithms behind one interface at runtime.",
        example: "PricingStrategy regular vs surge.",
      },
      {
        title: "Observer",
        explain: "A publisher notifies registered subscribers when something happens — loose coupling between event and reactions.",
        example: "OrderPlaced notifies email and analytics listeners.",
      },
      {
        title: "State",
        explain: "Behavior changes with explicit states instead of boolean soup.",
        example: "Ticket open → in_progress → resolved.",
      },
      {
        title: "Agent loops",
        explain: "Strategy/State ideas show up in tool-choosing agent workflows.",
        example: "State gathering_tools vs answering.",
      },
    ],
  },
  "system-design/cache-disasters": {
    intro: "Caching disasters and how to blunt them. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Stampede, Penetration & Avalanche\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Cache stampede",
        explain: "Many clients miss one hot key and stampede the DB.",
        example: "Singleflight/lock or soft refresh.",
      },
      {
        title: "Penetration",
        explain: "Repeated queries for missing keys bypass cache if negatives are not stored.",
        example: "Cache short-lived empty markers.",
      },
      {
        title: "Avalanche",
        explain: "Many keys expire together and spike the DB.",
        example: "Add TTL jitter.",
      },
      {
        title: "Soft TTL / locks",
        explain: "Serve stale briefly while one worker refreshes.",
        example: "stale-while-revalidate.",
      },
    ],
  },
  "system-design/cache-patterns": {
    intro: "Redis access patterns that teams actually ship. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Cache-Aside / Write-Through / Write-Back\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Cache-aside",
        explain: "App reads cache; on miss loads DB then fills cache. App owns invalidation.",
        example: "product:9 miss → SQL → SET.",
      },
      {
        title: "Write-through",
        explain: "Write updates cache and DB together — fresher cache, slower writes.",
        example: "Strict feature flags.",
      },
      {
        title: "Write-back",
        explain: "Write hits cache; flush DB later — fast, riskier on crash.",
        example: "Score counters flushed every few seconds.",
      },
      {
        title: "TTL discipline",
        explain: "Every entry needs expiry or explicit invalidation — infinite TTL becomes silent lies.",
        example: "Profile TTL 5 minutes + delete on update.",
      },
    ],
  },
  "system-design/cap-pacelc": {
    intro: "Consistency vs availability — and latency when there is no partition. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"CAP vs PACELC\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "CAP",
        explain: "Under partition, you cannot have perfect Consistency and Availability together while staying Partition-tolerant. You choose which to degrade.",
        example: "During a DC split, a ledger may refuse writes (CP) while a feed still serves stale posts (AP).",
      },
      {
        title: "PACELC",
        explain: "If Partitioned, choose A/C; Else (normal ops) choose Latency vs Consistency.",
        example: "Healthy multi-region DBs still trade cross-region delay for stronger consistency.",
      },
      {
        title: "CP vs AP",
        explain: "CP favors one correct view; AP favors answering even if replicas briefly disagree.",
        example: "Bank transfers lean CP; guest browsing carts often lean AP/eventual.",
      },
      {
        title: "Latency tradeoffs",
        explain: "Strong cross-region consistency costs round-trips; local reads are faster but may be stale.",
        example: "Session read-your-writes without full global linearizability.",
      },
    ],
  },
  "system-design/case-chat": {
    intro: "Chat needs presence, ordering, and fan-out to many devices.",
    whyItMatters: "Forces stateful connections + offline delivery design.",
    whyThatWay: "Persist first, then fan out; order per conversation; sync inbox on reconnect.",
    architecture: "Clients ↔ WS gateway ↔ message service ↔ store; pub/sub fan-out; presence TTLs.",
    concepts: [
      {
        title: "What we're building",
        explain: "Chat needs presence, ordering, and fan-out to many devices.",
        example: "Clients ↔ WS gateway ↔ message service ↔ store; pub/sub fan-out; presence TTLs.",
      },
      {
        title: "Why this design",
        explain: "Persist first, then fan out; order per conversation; sync inbox on reconnect.",
        example: "Forces stateful connections + offline delivery design.",
      },
      {
        title: "WebSocket gateway",
        explain: "Stateful socket tier, scaled separately from APIs.",
        example: "Gateways + pub/sub fan-out.",
      },
      {
        title: "Fan-out",
        explain: "Deliver one message to many connections carefully.",
        example: "Chat room broadcast.",
      },
      {
        title: "Ordering",
        explain: "Usually order per conversation/partition, not globally.",
        example: "Room messages totally ordered.",
      },
      {
        title: "Offline inbox",
        explain: "Store for offline devices; sync on reconnect.",
        example: "Fetch since last_cursor.",
      },
    ],
  },
  "system-design/case-newsfeed": {
    intro: "Feeds mix push and pull fan-out depending on graph shape.",
    whyItMatters: "Celebrity accounts break naive write fanout.",
    whyThatWay: "Push for normal users; pull for celebrities; rank at read time.",
    architecture: "Post → fanout workers → timeline cache; celebrity posts fetched on read.",
    concepts: [
      {
        title: "What we're building",
        explain: "Feeds mix push and pull fan-out depending on graph shape.",
        example: "Post → fanout workers → timeline cache; celebrity posts fetched on read.",
      },
      {
        title: "Why this design",
        explain: "Push for normal users; pull for celebrities; rank at read time.",
        example: "Celebrity accounts break naive write fanout.",
      },
      {
        title: "Fan-out on write",
        explain: "Precompute timelines on post — fast reads, heavy writes.",
        example: "Push id into follower lists.",
      },
      {
        title: "Fan-out on read",
        explain: "Compute feed at read time — cheap writes, heavier reads.",
        example: "Celebrity posts pulled on read.",
      },
      {
        title: "Celebrity problem",
        explain: "Huge follower graphs break naive write fanout.",
        example: "Hybrid push/pull.",
      },
      {
        title: "Ranking",
        explain: "Score candidates by relevance/recency, not only time.",
        example: "Boost posts from close friends.",
      },
    ],
  },
  "system-design/case-rate-limiter": {
    intro: "Distributed rate limiting protects APIs without becoming the outage.",
    whyItMatters: "Every multi-tenant SaaS needs fair quotas.",
    whyThatWay: "Redis holds shared counters; token bucket allows bursts; fail-open vs fail-closed is an explicit product choice.",
    architecture: "Gateway/middleware → Redis token bucket → allow/deny; optional local fallback.",
    concepts: [
      {
        title: "What we're building",
        explain: "Distributed rate limiting protects APIs without becoming the outage.",
        example: "Gateway/middleware → Redis token bucket → allow/deny; optional local fallback.",
      },
      {
        title: "Why this design",
        explain: "Redis holds shared counters; token bucket allows bursts; fail-open vs fail-closed is an explicit product choice.",
        example: "Every multi-tenant SaaS needs fair quotas.",
      },
      {
        title: "Token bucket at edge",
        explain: "Enforce rate limits at the gateway/CDN with a token bucket so abusive traffic never reaches your pods.",
        example: "Edge returns 429 when the bucket is empty — origin never sees the flood.",
      },
      {
        title: "Redis counters",
        explain: "Use Redis atomic counters so every API node shares the same rate-limit or quota state.",
        example: "INCR user:42:window with a TTL matching the limit window.",
      },
      {
        title: "Per-tenant quotas",
        explain: "Different plans → different limits keyed by tenant.",
        example: "Free 60/min; Pro 600/min.",
      },
      {
        title: "Fail-open vs fail-closed",
        explain: "If the limiter store dies: allow (fail-open) or block (fail-closed).",
        example: "Abuse protection may fail-closed; marketing site may fail-open.",
      },
    ],
  },
  "system-design/case-rides": {
    intro: "Match riders and drivers in space and time under changing demand.",
    whyItMatters: "Geo search + strong trip-state consistency collide.",
    whyThatWay: "Geo indexes narrow candidates; matching optimizes ETA; trip claim is strongly consistent.",
    architecture: "Apps → matching (geohash) → trip state store → pricing → notifications.",
    concepts: [
      {
        title: "What we're building",
        explain: "Match riders and drivers in space and time under changing demand.",
        example: "Apps → matching (geohash) → trip state store → pricing → notifications.",
      },
      {
        title: "Why this design",
        explain: "Geo indexes narrow candidates; matching optimizes ETA; trip claim is strongly consistent.",
        example: "Geo search + strong trip-state consistency collide.",
      },
      {
        title: "Geo hashing",
        explain: "Encode lat/long into hash buckets so nearby points share prefixes — enables fast neighbor search without a full scan.",
        example: "Find drivers in the same or adjacent geohash cells as the pickup pin.",
      },
      {
        title: "Matching service",
        explain: "Score candidates by ETA and constraints, then assign.",
        example: "Nearest correct vehicle type.",
      },
      {
        title: "ETA",
        explain: "Estimated time of arrival drives matching quality and what the rider sees — wrong ETAs destroy trust even if a car eventually arrives.",
        example: "Show 4 min ETA; matching prefers closer available drivers.",
      },
      {
        title: "Consistency of trip state",
        explain: "Accepted trips must not double-assign — strong consistency on claim.",
        example: "Transactional driver claim.",
      },
    ],
  },
  "system-design/case-search": {
    intro: "Autocomplete must feel instant (often under 100ms).",
    whyItMatters: "Latency budgets dictate data structures more than perfect ranking.",
    whyThatWay: "Prefix indexes + edge cache; personalization carefully bounded for p99.",
    architecture: "Client → edge cache → autocomplete service → optional personalization.",
    concepts: [
      {
        title: "What we're building",
        explain: "Autocomplete must feel instant (often under 100ms).",
        example: "Client → edge cache → autocomplete service → optional personalization.",
      },
      {
        title: "Why this design",
        explain: "Prefix indexes + edge cache; personalization carefully bounded for p99.",
        example: "Latency budgets dictate data structures more than perfect ranking.",
      },
      {
        title: "Prefix index",
        explain: "Fast prefix → candidates via trie/inverted prefixes.",
        example: "res* completions.",
      },
      {
        title: "Edge cache",
        explain: "Cache hot responses at CDN/edge locations close to users so popular prefixes rarely hit origin.",
        example: "Autocomplete for a popular prefix served from edge cache worldwide.",
      },
      {
        title: "Personalization",
        explain: "Optional ranking by history — keep it bounded for p99.",
        example: "Light boosts only.",
      },
      {
        title: "Tail latency",
        explain: "Optimize p99; autocomplete feels broken if rare requests are slow.",
        example: "Timeouts/hedged requests.",
      },
    ],
  },
  "system-design/case-url-shortener": {
    intro: "A URL shortener looks simple until redirects dominate traffic.",
    whyItMatters: "Teaches ID generation, caching, and keeping the hot path tiny.",
    whyThatWay: "Redirects must be ultra-fast and highly available; creates are rarer — so optimize reads with cache and keep IDs compact.",
    architecture: "Client → API → ID service → DB; redirects hit cache then DB; analytics via async queue.",
    concepts: [
      {
        title: "What we're building",
        explain: "A URL shortener looks simple until redirects dominate traffic.",
        example: "Client → API → ID service → DB; redirects hit cache then DB; analytics via async queue.",
      },
      {
        title: "Why this design",
        explain: "Redirects must be ultra-fast and highly available; creates are rarer — so optimize reads with cache and keep IDs compact.",
        example: "Teaches ID generation, caching, and keeping the hot path tiny.",
      },
      {
        title: "ID generation",
        explain: "Unique compact IDs via counters, snowflakes, or hash+base62.",
        example: "125 → base62 short path.",
      },
      {
        title: "Read-heavy caching",
        explain: "Redirect and read paths must be cache-first — almost all traffic never needs the database on the hot path.",
        example: "Most short-link hits resolve from Redis/CDN, not SQL.",
      },
      {
        title: "Redirect path",
        explain: "Hot path: cache lookup then 301/302 — almost no logic.",
        example: "Do not run heavy analytics inline.",
      },
      {
        title: "Analytics",
        explain: "Count asynchronously so tracking never slows redirects.",
        example: "Enqueue click events.",
      },
    ],
  },
  "system-design/case-video": {
    intro: "Separate upload, processing, and playback pipelines.",
    whyItMatters: "Transcoding is slow; playback must be CDN-fast.",
    whyThatWay: "Object storage for originals; async transcode; CDN for ABR playback.",
    architecture: "Upload → S3 → transcode queue → renditions → CDN → player.",
    concepts: [
      {
        title: "What we're building",
        explain: "Separate upload, processing, and playback pipelines.",
        example: "Upload → S3 → transcode queue → renditions → CDN → player.",
      },
      {
        title: "Why this design",
        explain: "Object storage for originals; async transcode; CDN for ABR playback.",
        example: "Transcoding is slow; playback must be CDN-fast.",
      },
      {
        title: "Object storage",
        explain: "Durable, cheap blob storage (S3/GCS) for large originals — videos, PDFs, images — separate from your database.",
        example: "Raw uploaded video lands in S3; workers read it for transcode.",
      },
      {
        title: "Transcode pipeline",
        explain: "Async workers create multiple bitrates/resolutions from an original so players can adapt to bandwidth.",
        example: "1080p upload → 360/720/1080 renditions in S3.",
      },
      {
        title: "CDN",
        explain: "A content delivery network caches and serves media from points of presence near users so origin is not hit for every play.",
        example: "Video segments stream from the nearest PoP, not your origin bucket.",
      },
      {
        title: "ABR",
        explain: "Player switches bitrate with network conditions.",
        example: "Quality steps up/down automatically.",
      },
    ],
  },
  "system-design/consistent-hashing": {
    intro: "Rebalancing without reshuffling the world. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Consistent Hashing & Virtual Nodes\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Hash rings",
        explain: "Consistent hashing places keys on a ring so membership changes move few keys.",
        example: "Add a cache node without remapping everything.",
      },
      {
        title: "Virtual nodes",
        explain: "Many virtual points per server balance load on the ring.",
        example: "Bigger boxes get more vnodes.",
      },
      {
        title: "Cache clusters",
        explain: "Clusters often place keys via consistent hashing.",
        example: "user:42 sticks to one node until membership changes.",
      },
      {
        title: "Minimal remapping",
        explain: "Only about 1/N keys should move when capacity changes.",
        example: "Avoid rebuilding the entire cache.",
      },
    ],
  },
  "system-design/creational-patterns": {
    intro: "Factory, Builder, thread-safe Singleton. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Creational Patterns\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Factory",
        explain: "Centralize creation so callers depend on interfaces.",
        example: "notify() returns Email or SMS sender.",
      },
      {
        title: "Builder",
        explain: "Step-by-step construction for complex objects.",
        example: "QueryBuilder.select().where()...",
      },
      {
        title: "Singleton",
        explain: "One shared instance — prefer DI; if used, initialize safely once per process.",
        example: "One metrics client per process.",
      },
      {
        title: "Thread safety",
        explain: "Code is thread-safe if concurrent threads can run it without corrupting data. Most naive shared mutations are not automatically safe. Singletons need careful one-time init.",
        example: "An atomic counter increment is thread-safe; two people scribbling the same notepad line is not.",
      },
    ],
  },
  "system-design/delivery-guarantees": {
    intro: "Delivery semantics you can actually promise. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"At-Least-Once vs Exactly-Once\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "At-most-once",
        explain: "May lose messages; never duplicates. Rarely OK for money.",
        example: "Best-effort metrics.",
      },
      {
        title: "At-least-once",
        explain: "Redelivers until ack — duplicates possible; the common default.",
        example: "Consumers must be idempotent.",
      },
      {
        title: "Exactly-once illusion",
        explain: "End-to-end exactly-once is extremely hard; aim for effectively-once via idempotency and transactions.",
        example: "Stripe idempotency keys.",
      },
      {
        title: "Idempotent consumers",
        explain: "Processing twice does not change the outcome.",
        example: "Unique constraint on event_id.",
      },
    ],
  },
  "system-design/grpc-rest-graphql": {
    intro: "Microservice communication trade-offs. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"gRPC vs REST vs GraphQL\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "REST",
        explain: "Resource HTTP APIs — simple, cacheable, universal.",
        example: "GET /users/3",
      },
      {
        title: "gRPC",
        explain: "Typed binary HTTP/2 RPC — excellent service-to-service performance.",
        example: "Internal ListOrders RPC.",
      },
      {
        title: "GraphQL",
        explain: "Clients request exact fields in one round trip; guard against expensive queries.",
        example: "Mobile fetches only needed fields.",
      },
      {
        title: "Payload & latency",
        explain: "Protobuf/gRPC is compact; JSON REST is ubiquitous; GraphQL reduces chattiness with care.",
        example: "Mobile networks care about bytes and round trips.",
      },
    ],
  },
  "system-design/partitioning-wal": {
    intro: "Relational partitioning and write-ahead logging. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Sharding, Replicas & WAL\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Sharding",
        explain: "Split data by key across shards so each holds a fraction of load.",
        example: "user_id routes to shard N.",
      },
      {
        title: "Read replicas",
        explain: "Replicas serve reads; primary takes writes. Watch replication lag.",
        example: "Dashboards read replicas; checkout writes primary.",
      },
      {
        title: "WAL",
        explain: "Write-Ahead Log stores durable changes before pages — recovery and replication feed.",
        example: "Postgres ships WAL to replicas.",
      },
      {
        title: "Failover",
        explain: "Promote a replica when primary dies; clients must find the new writer.",
        example: "Multi-AZ failover.",
      },
    ],
  },
  "system-design/queues-vs-streams": {
    intro: "The architectural trade-off in one page. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Message Queues vs Event Streams\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Work queues",
        explain: "Consumers compete for jobs; messages are removed after ack.",
        example: "Thumbnail jobs in Celery.",
      },
      {
        title: "Event logs",
        explain: "Append-only streams keep history for many consumer groups to replay.",
        example: "OrderPlaced reused by email and fraud.",
      },
      {
        title: "Consumer groups",
        explain: "A group shares partitions; each event goes to one member of that group.",
        example: "Three billing consumers split load.",
      },
      {
        title: "Replay",
        explain: "Re-read from an offset to rebuild state — a log superpower.",
        example: "Rebuild a projection after a bugfix.",
      },
    ],
  },
  "system-design/rabbitmq-vs-kafka": {
    intro: "Complex routing vs high-throughput log replay. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"RabbitMQ vs Kafka\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Exchanges/bindings",
        explain: "RabbitMQ routes via exchanges/bindings — flexible topical routing.",
        example: "billing.* → billing-queue.",
      },
      {
        title: "Kafka partitions",
        explain: "Partitions give per-key order and cross-key parallelism.",
        example: "customer_id keys keep that customer ordered.",
      },
      {
        title: "Routing vs throughput",
        explain: "Rabbit shines at routing/task semantics; Kafka at durable high-throughput replay.",
        example: "Low-volume tasks → Rabbit; firehose → Kafka.",
      },
      {
        title: "When to pick which",
        explain: "Complex routing/tasks → Rabbit/Celery. Replayable event log → Kafka.",
        example: "Do not force Kafka for 10 emails/minute.",
      },
    ],
  },
  "system-design/rate-limiting": {
    intro: "Token bucket, leaky bucket, sliding window. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Rate Limiting Algorithms\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Token bucket",
        explain: "Tokens refill over time; each request spends one — allows controlled bursts.",
        example: "Burst 20 then sustain 5 rps.",
      },
      {
        title: "Leaky bucket",
        explain: "Drains at fixed rate — smooths bursts into steady outflow.",
        example: "Email sender leaks at 10/sec.",
      },
      {
        title: "Sliding window",
        explain: "Counts requests over the last N seconds more fairly than fixed windows.",
        example: "Stops reset-at-:00 abuse patterns.",
      },
      {
        title: "Distributed counters",
        explain: "Redis (or similar) keeps shared limit state across nodes.",
        example: "INCR keyed by user/API key.",
      },
    ],
  },
  "system-design/scaling-limits": {
    intro: "Architectural limits and cost implications. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Horizontal vs Vertical Scaling\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Scale up",
        explain: "Bigger machine — simple until hardware/cost ceilings and single failure domain hurt.",
        example: "Vertical bump of Postgres RAM.",
      },
      {
        title: "Scale out",
        explain: "More machines behind a balancer — needs shared state design.",
        example: "12 API pods instead of one huge VM.",
      },
      {
        title: "Stateful limits",
        explain: "DBs and disks do not scale out like stateless web pods.",
        example: "You cannot mindlessly clone Postgres containers.",
      },
      {
        title: "Cost curves",
        explain: "One box can beat distributed complexity early; growth eventually forces distribution.",
        example: "Single RDS first; Kafka later if needed.",
      },
    ],
  },
  "system-design/solid-kiss-dry": {
    intro: "Clean architecture primitives in Pythonic form. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"SOLID, DRY & KISS\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "SOLID",
        explain: "Five OOP guidelines for modules that change safely — use judgment, not dogma.",
        example: "Depend on a PaymentPort interface, not a concrete SDK.",
      },
      {
        title: "DRY",
        explain: "Remove real duplication; do not abstract lookalikes too early.",
        example: "One validate_email() instead of six copy-pastes.",
      },
      {
        title: "KISS",
        explain: "Prefer clear boring code until complexity is proven.",
        example: "if/else beats a plugin framework for two cases.",
      },
      {
        title: "When not to abstract",
        explain: "Two similar lines are not always duplication; wrong abstractions cost more.",
        example: "Wait for a third use case.",
      },
    ],
  },
  "system-design/stability-patterns": {
    intro: "Distributed stability patterns. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Circuit Breaker, Bulkhead & Retry\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Circuit breaker",
        explain: "After repeated failures, fail fast instead of waiting on a dead dependency.",
        example: "Payments down → quick fallback for 30s.",
      },
      {
        title: "Bulkhead",
        explain: "Isolate resource pools so one fault domain cannot sink everything.",
        example: "Separate pools for search vs checkout.",
      },
      {
        title: "Retry with jitter",
        explain: "Retries help transient errors; jitter + caps prevent storms.",
        example: "Retry twice with random backoff, then fail.",
      },
      {
        title: "Timeouts",
        explain: "Approval (and any wait) must expire. Unbounded waits freeze pipelines; after timeout, escalate, cancel, or take a safe default.",
        example: "No human approval in 24h → ticket escalates and the refund auto-cancels.",
      },
    ],
  },
  "system-design/structural-patterns": {
    intro: "Facade, Proxy, Adapter. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"Structural Patterns\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "Facade",
        explain: "A simple front door over a messy subsystem so callers do not learn every vendor detail.",
        example: "PaymentFacade.charge wraps Stripe + ledger + receipt email.",
      },
      {
        title: "Proxy",
        explain: "Stand-in controlling access (cache, auth, lazy, remote).",
        example: "Lazy-load a large image only when viewed.",
      },
      {
        title: "Adapter",
        explain: "Translate one interface to another without changing either side.",
        example: "Wrap legacy SOAP as a modern PaymentPort.",
      },
      {
        title: "API boundaries",
        explain: "Keep vendor SDKs behind adapters/facades in your domain core.",
        example: "Swap email vendors in one place.",
      },
    ],
  },
  "system-design/websockets-long-poll": {
    intro: "Bidirectional and near-real-time updates. Open each idea for a precise definition and a concrete example.",
    whyItMatters: "Fuzzy answers on \"WebSockets vs Long Polling\" fail both interviews and production debugging.",
    concepts: [
      {
        title: "WebSockets",
        explain: "Persistent bidirectional channel for server push.",
        example: "Live chat.",
      },
      {
        title: "Long polling",
        explain: "Server holds an HTTP request until an event or timeout.",
        example: "Older notification pattern.",
      },
      {
        title: "SSE",
        explain: "Server-Sent Events push a one-way stream of events from server to client over plain HTTP — great for tokens and live scores.",
        example: "LLM tokens arrive as SSE data: lines in the browser.",
      },
      {
        title: "Reconnect strategy",
        explain: "Backoff, resume tokens/event ids, re-auth after drops.",
        example: "Chat fills gaps with last cursor.",
      },
    ],
  },
  "target-roles/ai-solutions-engineer": {
    intro: "Build enterprise AI backends: RAG, indexes, prompt chains, APIs between data and models.",
    whyItMatters: "Companies fund teams that ship reliable AI products — not demos.",
    whyThatWay: "Vector search, chunking, caching, evals, cost/latency.",
    concepts: [
      {
        title: "Role snapshot",
        explain: "Build enterprise AI backends: RAG, indexes, prompt chains, APIs between data and models.",
        example: "Vector search, chunking, caching, evals, cost/latency.",
      },
      {
        title: "RAG pipelines",
        explain: "End-to-end ingest → chunk → embed → retrieve → generate, with evals — the daily work of AI solutions engineering.",
        example: "Support bot grounded on company docs with faithfulness gates.",
      },
      {
        title: "Vector indexes",
        explain: "Choose and tune ANN structures (HNSW, IVF, pgvector) for your corpus size and latency SLO.",
        example: "pgvector for MVP; dedicated ANN service when corpus and QPS grow.",
      },
      {
        title: "Prompt chains",
        explain: "Composable LLM steps with clear inputs/outputs instead of one mega-prompt that does everything poorly.",
        example: "extract entities → retrieve → answer grounded on chunks.",
      },
      {
        title: "Cost & latency",
        explain: "Control AI spend and speed with caching, smaller models, fewer tokens, and streaming UX.",
        example: "FAQ semantic cache avoids a model call for repeated questions.",
      },
    ],
  },
  "target-roles/distributed-backend": {
    intro: "Hyper-scalable backends for heavy concurrent AI traffic.",
    whyItMatters: "GenAI punishes weak queues, sharding, and missing limits.",
    whyThatWay: "Load balancing, sharding, async processing, rate limits, low-latency queues.",
    concepts: [
      {
        title: "Role snapshot",
        explain: "Hyper-scalable backends for heavy concurrent AI traffic.",
        example: "Load balancing, sharding, async processing, rate limits, low-latency queues.",
      },
      {
        title: "Sharding",
        explain: "Split data by key across shards so each holds a fraction of load.",
        example: "user_id routes to shard N.",
      },
      {
        title: "Async processing",
        explain: "Return quickly from the HTTP request and do slow work in background workers. Users get a job id or webhook instead of a long hang.",
        example: "POST /transcribe returns job_id; workers process audio and notify when done.",
      },
      {
        title: "Rate limits",
        explain: "Cap how fast clients can call you so noisy neighbors and scrapers cannot sink the platform.",
        example: "Per-API-key token bucket at the gateway.",
      },
      {
        title: "Load balancing",
        explain: "Spread traffic across healthy replicas and remove bad ones so no single instance is a hotspot or a black hole.",
        example: "ALB across API tasks with health checks.",
      },
    ],
  },
  "target-roles/forward-deployed": {
    intro: "Integrate AI into messy client environments where defaults fail.",
    whyItMatters: "Premium for people who deliver under real constraints.",
    whyThatWay: "Legacy integration, deploy paths, client communication, Docker/K8s, streaming.",
    concepts: [
      {
        title: "Role snapshot",
        explain: "Integrate AI into messy client environments where defaults fail.",
        example: "Legacy integration, deploy paths, client communication, Docker/K8s, streaming.",
      },
      {
        title: "Legacy integration",
        explain: "Connect AI systems to ERP, fileshares, and SOAP without rewriting the client's world.",
        example: "Nightly SAP CSV → ingest adapter → vector index.",
      },
      {
        title: "On-site constraints",
        explain: "Air gaps, change windows, and security reviews shape what you can deploy and when.",
        example: "On-prem package when the client forbids cloud egress.",
      },
      {
        title: "Custom deploy paths",
        explain: "Each client has different identity, network, and release constraints — your defaults rarely fit out of the box.",
        example: "Wire their IdP and private network to your app.",
      },
      {
        title: "Client communication",
        explain: "Explain tradeoffs in business language under time pressure — trust is half the FDE job.",
        example: "One slide on why hybrid search beats keyword-only for their tickets.",
      },
    ],
  },
  "target-roles/role-matrix": {
    intro: "Choose by the pain you want: AI product glue, onsite integration, or platform scale.",
    whyItMatters: "Same core skills; different day-to-day and interview focus.",
    whyThatWay: "Map your stories to the role's system-design emphasis.",
    concepts: [
      {
        title: "Role snapshot",
        explain: "Choose by the pain you want: AI product glue, onsite integration, or platform scale.",
        example: "Map your stories to the role's system-design emphasis.",
      },
      {
        title: "AI Solutions focus",
        explain: "Grounded AI product quality: retrieval, evals, cost, and latency — shipping reliable AI, not demos.",
        example: "Accurate answers with measurable faithfulness gates.",
      },
      {
        title: "FDE focus",
        explain: "Integration under messy constraints and client trust — make it work in their environment by the deadline.",
        example: "Docker/K8s, streaming, and legacy adapters in the client's VPC.",
      },
      {
        title: "Distributed backend focus",
        explain: "This role cares about keeping systems available and fast when many concurrent AI/API clients hammer them — queues, sharding, limits, load balancing.",
        example: "Interview stories: holding error budget during a traffic spike.",
      },
      {
        title: "How to choose",
        explain: "Pick the daily pain you want: product AI glue, onsite integration, or platform scale. Same core skills; different interviews.",
        example: "Map your war stories to the role's system-design emphasis.",
      },
    ],
  },
}

export function getJobPrepBody(sectionId: string, topicId: string): JobPrepBody | null {
  return jobPrepContent[`${sectionId}/${topicId}`] || null
}
