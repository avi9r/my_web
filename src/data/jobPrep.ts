export type JobPrepTopic = {
  id: string
  title: string
  summary: string
  concepts: string[]
}

export type JobPrepSection = {
  id: string
  title: string
  tagline: string
  accent: string
  topics: JobPrepTopic[]
}

export const jobPrepSections: JobPrepSection[] = [
  {
    id: 'production-core',
    title: '0. Production Core & AI Stack',
    tagline: 'Python internals, FastAPI/Django, Celery, and async DB reality.',
    accent: '#0f766e',
    topics: [
      {
        id: 'concurrency-parallelism',
        title: 'Concurrency vs Parallelism',
        summary: 'asyncio event loops vs multiprocessing — when each wins.',
        concepts: ['Concurrency', 'Parallelism', 'Event loop', 'Multiprocessing'],
      },
      {
        id: 'async-await',
        title: 'Asynchronous Execution',
        summary: 'async/await mechanics and non-blocking IO.',
        concepts: ['async/await', 'Non-blocking IO', 'Awaitables', 'When not to use async'],
      },
      {
        id: 'gil-thread-safety',
        title: 'Thread Safety & the GIL',
        summary: 'Global Interpreter Lock implications for real services.',
        concepts: ['GIL', 'CPU-bound vs IO-bound', 'Threads vs processes', 'Safe shared state'],
      },
      {
        id: 'generators-streaming',
        title: 'Generators for LLM Streaming',
        summary: 'yield for real-time token streaming to the UI.',
        concepts: ['Generators', 'yield', 'Streaming tokens', 'Backpressure'],
      },
      {
        id: 'fastapi-routing',
        title: 'FastAPI Routing & Middleware',
        summary: 'Async endpoints and custom error middleware.',
        concepts: ['Async routes', 'Path/query models', 'Error middleware', 'HTTPException'],
      },
      {
        id: 'fastapi-di',
        title: 'Dependency Injection in FastAPI',
        summary: 'Modular, pluggable authentication layers.',
        concepts: ['Depends()', 'Auth dependencies', 'Reusable DB sessions', 'Testing with overrides'],
      },
      {
        id: 'streaming-response',
        title: 'StreamingResponse',
        summary: 'Token-by-token UI updates from the API.',
        concepts: ['StreamingResponse', 'SSE vs chunked', 'Client consumption', 'Cancellation'],
      },
      {
        id: 'django-orm-pooling',
        title: 'Django ORM & Connection Pooling',
        summary: 'Avoid blocking the world at the database.',
        concepts: ['ORM query costs', 'select_related/prefetch', 'Connection pooling', 'N+1 problems'],
      },
      {
        id: 'django-fastapi-unified',
        title: 'Django + FastAPI Together',
        summary: 'Django for Auth/Admin/ORM; FastAPI for API vectors.',
        concepts: ['Shared models', 'Auth bridge', 'When to split', 'Deployment shapes'],
      },
      {
        id: 'celery-concurrency',
        title: 'Celery Concurrency Models',
        summary: 'prefork vs gevent/eventlet for API-adjacent traffic.',
        concepts: ['prefork', 'gevent/eventlet', 'Worker sizing', 'Task types'],
      },
      {
        id: 'celery-idempotency',
        title: 'Task Idempotency',
        summary: 'Background tasks that survive retries safely.',
        concepts: ['At-least-once delivery', 'Idempotency keys', 'Deduping side effects', 'Result storage'],
      },
      {
        id: 'celery-dlq',
        title: 'DLQ & Retry Backoffs',
        summary: 'Fault tolerance for flaky external APIs.',
        concepts: ['Exponential backoff', 'Jitter', 'Dead-letter queues', 'Alerting on poison pills'],
      },
      {
        id: 'celery-flow-control',
        title: 'Routing, Rate Limits & Priority Queues',
        summary: 'Advanced Celery flow control.',
        concepts: ['Task routing', 'Rate limiting', 'Priority queues', 'Fairness'],
      },
      {
        id: 'asyncpg-pgbouncer',
        title: 'Async Drivers & PgBouncer',
        summary: 'asyncpg + pooling so FastAPI does not stall on Django sync DB habits.',
        concepts: ['asyncpg', 'PgBouncer', 'Transaction pooling pitfalls', 'Django sync vs FastAPI async'],
      },
    ],
  },
  {
    id: 'dsa-interview',
    title: '1. High-Yield Conceptual DSA',
    tagline: 'Interview-focused patterns that map to production systems.',
    accent: '#1d4ed8',
    topics: [
      {
        id: 'big-o',
        title: 'Big O Mental Models',
        summary: 'O(1), O(log n), O(n), O(n log n) space-time trade-offs.',
        concepts: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'Space vs time'],
      },
      {
        id: 'python-ds-costs',
        title: 'Python Data Structure Costs',
        summary: 'lists, sets, and dicts under the hood.',
        concepts: ['list', 'set', 'dict', 'Amortized append', 'Hash collisions'],
      },
      {
        id: 'two-pointers',
        title: 'Two Pointers',
        summary: 'Eliminate nested loops with boundary movement.',
        concepts: ['Opposite ends', 'Same direction', 'Sorted inputs', 'Pair problems'],
      },
      {
        id: 'sliding-window',
        title: 'Sliding Window',
        summary: 'Fixed and variable windows for stream constraints.',
        concepts: ['Fixed window', 'Variable window', 'Running aggregates', 'Constraint checks'],
      },
      {
        id: 'bfs-dfs',
        title: 'BFS vs DFS',
        summary: 'Trees, graphs, shortest paths vs exhaustive search.',
        concepts: ['BFS', 'DFS', 'Queue vs stack/recursion', 'When each fits'],
      },
      {
        id: 'traversal-patterns',
        title: 'Traversal Mechanics',
        summary: 'Shortest path vs full exploration patterns.',
        concepts: ['Level order', 'Backtracking', 'Visited sets', 'Path reconstruction'],
      },
      {
        id: 'agent-state-graphs',
        title: 'Graphs ↔ Agentic State Machines',
        summary: 'How graph paths map to agent checkpoints.',
        concepts: ['State nodes', 'Edges as tools/actions', 'Checkpointing', 'Recovery'],
      },
      {
        id: 'hash-maps',
        title: 'Hash Maps & Dictionaries',
        summary: 'O(1) lookups and frequency tracking.',
        concepts: ['Hashing', 'Frequency maps', 'Two-sum pattern', 'Set membership'],
      },
      {
        id: 'tries',
        title: 'Tries (Prefix Trees)',
        summary: 'Autocomplete, routing tables, and tokenizer intuition.',
        concepts: ['Prefix sharing', 'Autocomplete', 'Routing', 'Tokenizer analogy'],
      },
      {
        id: 'heaps',
        title: 'Heaps & Priority Queues',
        summary: 'Min/max heaps and priority task ranking.',
        concepts: ['Heap property', 'Top-K', 'Dijkstra link', 'Priority workers'],
      },
      {
        id: 'lru-cache',
        title: 'LRU Cache',
        summary: 'Least Recently Used mechanics in system design.',
        concepts: ['Recency', 'Hash + doubly linked list', 'Eviction', 'CDN/API caches'],
      },
      {
        id: 'lfu-cache',
        title: 'LFU Cache',
        summary: 'Least Frequently Used — tracking hotness.',
        concepts: ['Frequency counters', 'Hot keys', 'LFU vs LRU', 'When LFU wins'],
      },
    ],
  },
  {
    id: 'system-design',
    title: '2. Advanced System Design',
    tagline: 'HLD, LLD, resilience, and classic case studies.',
    accent: '#7c3aed',
    topics: [
      {
        id: 'cap-pacelc',
        title: 'CAP vs PACELC',
        summary: 'Consistency vs availability — and latency when there is no partition.',
        concepts: ['CAP', 'PACELC', 'CP vs AP', 'Latency tradeoffs'],
      },
      {
        id: 'scaling-limits',
        title: 'Horizontal vs Vertical Scaling',
        summary: 'Architectural limits and cost implications.',
        concepts: ['Scale up', 'Scale out', 'Stateful limits', 'Cost curves'],
      },
      {
        id: 'partitioning-wal',
        title: 'Sharding, Replicas & WAL',
        summary: 'Relational partitioning and write-ahead logging.',
        concepts: ['Sharding', 'Read replicas', 'WAL', 'Failover'],
      },
      {
        id: 'consistent-hashing',
        title: 'Consistent Hashing & Virtual Nodes',
        summary: 'Rebalancing without reshuffling the world.',
        concepts: ['Hash rings', 'Virtual nodes', 'Cache clusters', 'Minimal remapping'],
      },
      {
        id: 'cache-patterns',
        title: 'Cache-Aside / Write-Through / Write-Back',
        summary: 'Redis access patterns that teams actually ship.',
        concepts: ['Cache-aside', 'Write-through', 'Write-back', 'TTL discipline'],
      },
      {
        id: 'cache-disasters',
        title: 'Stampede, Penetration & Avalanche',
        summary: 'Caching disasters and how to blunt them.',
        concepts: ['Cache stampede', 'Penetration', 'Avalanche', 'Soft TTL / locks'],
      },
      {
        id: 'rate-limiting',
        title: 'Rate Limiting Algorithms',
        summary: 'Token bucket, leaky bucket, sliding window.',
        concepts: ['Token bucket', 'Leaky bucket', 'Sliding window', 'Distributed counters'],
      },
      {
        id: 'stability-patterns',
        title: 'Circuit Breaker, Bulkhead & Retry',
        summary: 'Distributed stability patterns.',
        concepts: ['Circuit breaker', 'Bulkhead', 'Retry with jitter', 'Timeouts'],
      },
      {
        id: 'queues-vs-streams',
        title: 'Message Queues vs Event Streams',
        summary: 'The architectural trade-off in one page.',
        concepts: ['Work queues', 'Event logs', 'Consumer groups', 'Replay'],
      },
      {
        id: 'rabbitmq-vs-kafka',
        title: 'RabbitMQ vs Kafka',
        summary: 'Complex routing vs high-throughput log replay.',
        concepts: ['Exchanges/bindings', 'Kafka partitions', 'Routing vs throughput', 'When to pick which'],
      },
      {
        id: 'delivery-guarantees',
        title: 'At-Least-Once vs Exactly-Once',
        summary: 'Delivery semantics you can actually promise.',
        concepts: ['At-most-once', 'At-least-once', 'Exactly-once illusion', 'Idempotent consumers'],
      },
      {
        id: 'grpc-rest-graphql',
        title: 'gRPC vs REST vs GraphQL',
        summary: 'Microservice communication trade-offs.',
        concepts: ['REST', 'gRPC', 'GraphQL', 'Payload & latency'],
      },
      {
        id: 'websockets-long-poll',
        title: 'WebSockets vs Long Polling',
        summary: 'Bidirectional and near-real-time updates.',
        concepts: ['WebSockets', 'Long polling', 'SSE', 'Reconnect strategy'],
      },
      {
        id: 'solid-kiss-dry',
        title: 'SOLID, DRY & KISS',
        summary: 'Clean architecture primitives in Pythonic form.',
        concepts: ['SOLID', 'DRY', 'KISS', 'When not to abstract'],
      },
      {
        id: 'creational-patterns',
        title: 'Creational Patterns',
        summary: 'Factory, Builder, thread-safe Singleton.',
        concepts: ['Factory', 'Builder', 'Singleton', 'Thread safety'],
      },
      {
        id: 'structural-patterns',
        title: 'Structural Patterns',
        summary: 'Facade, Proxy, Adapter.',
        concepts: ['Facade', 'Proxy', 'Adapter', 'API boundaries'],
      },
      {
        id: 'behavioral-patterns',
        title: 'Behavioral Patterns',
        summary: 'Strategy, Observer, State.',
        concepts: ['Strategy', 'Observer', 'State', 'Agent loops'],
      },
      {
        id: 'case-url-shortener',
        title: 'Case Study: URL Shortener',
        summary: 'Why tiny links need big design choices.',
        concepts: ['ID generation', 'Read-heavy caching', 'Redirect path', 'Analytics'],
      },
      {
        id: 'case-rate-limiter',
        title: 'Case Study: Distributed Rate Limiter',
        summary: 'Protect APIs without melting Redis.',
        concepts: ['Token bucket at edge', 'Redis counters', 'Per-tenant quotas', 'Fail-open vs fail-closed'],
      },
      {
        id: 'case-chat',
        title: 'Case Study: Real-time Chat',
        summary: 'Presence, fan-out, and message ordering.',
        concepts: ['WebSocket gateway', 'Fan-out', 'Ordering', 'Offline inbox'],
      },
      {
        id: 'case-newsfeed',
        title: 'Case Study: News Feed',
        summary: 'Push vs pull fan-out at scale.',
        concepts: ['Fan-out on write', 'Fan-out on read', 'Celebrity problem', 'Ranking'],
      },
      {
        id: 'case-search',
        title: 'Case Study: Search Autocomplete',
        summary: 'Tries, caches, and ranking under latency SLOs.',
        concepts: ['Prefix index', 'Edge cache', 'Personalization', 'Tail latency'],
      },
      {
        id: 'case-video',
        title: 'Case Study: Video Streaming',
        summary: 'Upload, transcode, CDN, and adaptive bitrate.',
        concepts: ['Object storage', 'Transcode pipeline', 'CDN', 'ABR'],
      },
      {
        id: 'case-rides',
        title: 'Case Study: Ride Matching',
        summary: 'Geo indexes, dispatch, and surge.',
        concepts: ['Geo hashing', 'Matching service', 'ETA', 'Consistency of trip state'],
      },
    ],
  },
  {
    id: 'agentic-rag',
    title: '3. Enterprise Agentic RAG',
    tagline: 'Vectors, retrieval engineering, agents, caching, quantization.',
    accent: '#db2777',
    topics: [
      {
        id: 'sparse-vs-dense',
        title: 'Sparse vs Dense Vectors',
        summary: 'BM25 keyword matching vs semantic embeddings.',
        concepts: ['BM25', 'Dense embeddings', 'Hybrid search', 'When keywords win'],
      },
      {
        id: 'hnsw-ivf',
        title: 'HNSW vs IVF',
        summary: 'Production vector indexing strategies.',
        concepts: ['HNSW', 'IVF', 'Recall vs latency', 'Build cost'],
      },
      {
        id: 'pinecone-vs-pgvector',
        title: 'Pinecone vs pgvector',
        summary: 'Managed scale vs relational simplicity.',
        concepts: ['Ops burden', 'Joins + vectors', 'Scale ceiling', 'Cost model'],
      },
      {
        id: 'multimodal-ingest',
        title: 'Multi-modal Ingestion',
        summary: 'Tables/images from PDFs (e.g. LlamaParse patterns).',
        concepts: ['Layout parsing', 'Tables', 'Images', 'Structured metadata'],
      },
      {
        id: 'semantic-chunking',
        title: 'Semantic Chunking',
        summary: 'Split on meaning shifts, not only character counts.',
        concepts: ['Contextual boundaries', 'Overlap', 'Parent docs', 'Evaluation'],
      },
      {
        id: 'hybrid-metadata',
        title: 'Hybrid Search & Metadata Filters',
        summary: 'Precision filtering before the prompt window fills.',
        concepts: ['Metadata filters', 'Hybrid scoring', 'Tenant isolation', 'Freshness'],
      },
      {
        id: 'reranking',
        title: 'Re-ranking Layers',
        summary: 'Protect the context window with a second-pass ranker.',
        concepts: ['Retrieve broad', 'Rerank narrow', 'Cross-encoders', 'Latency budget'],
      },
      {
        id: 'langgraph-crew',
        title: 'Multi-agent Workflows',
        summary: 'Cooperation patterns with LangGraph / CrewAI-style graphs.',
        concepts: ['Graph state', 'Specialist agents', 'Handoffs', 'Shared memory'],
      },
      {
        id: 'approval-gates',
        title: 'Approval Gates in Pipelines',
        summary: 'Pause automated actions for human approval before side effects.',
        concepts: ['Approval nodes', 'Timeouts', 'Audit trail', 'Safe defaults'],
      },
      {
        id: 'self-correction',
        title: 'Self-Correction Loops',
        summary: 'Reflection prompts that check format and facts.',
        concepts: ['Critique step', 'Schema validation', 'Retry budgets', 'Stop rules'],
      },
      {
        id: 'tool-schemas',
        title: 'Deterministic Tool Schemas',
        summary: 'JSON schemas for safe Python API execution.',
        concepts: ['JSON Schema', 'Allowlists', 'Arg validation', 'Side-effect classes'],
      },
      {
        id: 'semantic-cache',
        title: 'Semantic LLM Caching',
        summary: 'GPTCache/Redis-style caching by meaning, not exact string.',
        concepts: ['Exact vs semantic cache', 'Similarity threshold', 'Invalidation', 'Cost savings'],
      },
      {
        id: 'quantization',
        title: 'Vector Quantization (SQ / PQ)',
        summary: 'Shrink RAM for 10M+ vectors without wrecking recall.',
        concepts: ['Scalar quantization', 'Product quantization', 'Recall tradeoff', 'Memory math'],
      },
    ],
  },
  {
    id: 'devops-cloud',
    title: '4. Modern DevOps & Cloud',
    tagline: 'Containers, AWS for AI, observability, LLMOps lite.',
    accent: '#ea580c',
    topics: [
      {
        id: 'multistage-docker',
        title: 'Multi-stage Docker Builds',
        summary: 'Trim Python images without losing runtime needs.',
        concepts: ['Build vs runtime stages', 'Layer caching', 'Wheel installs', 'Distroless/slim'],
      },
      {
        id: 'container-security',
        title: 'Container Security Basics',
        summary: 'Drop root, manage secrets, shrink attack surface.',
        concepts: ['Non-root USER', 'Read-only FS', 'Secrets mounts', 'Image scanning'],
      },
      {
        id: 'k8s-architecture',
        title: 'Kubernetes Architecture',
        summary: 'Control plane vs workers — pods, services, ingress, deployments.',
        concepts: ['Control plane', 'Nodes', 'Pods', 'Services/Ingress/Deployments'],
      },
      {
        id: 'hpa',
        title: 'Horizontal Pod Autoscaler',
        summary: 'Scale on request/CPU/custom metrics.',
        concepts: ['HPA', 'Metrics server', 'Custom metrics', 'Cooldown times'],
      },
      {
        id: 'ecs-fargate',
        title: 'ECS / Fargate for APIs',
        summary: 'Serverless containers for FastAPI/Django services.',
        concepts: ['Task definitions', 'Services', 'ALB integration', 'Cold start reality'],
      },
      {
        id: 'rds-s3-pgvector',
        title: 'RDS + pgvector + S3',
        summary: 'Managed data layers for AI backends.',
        concepts: ['RDS Postgres', 'pgvector', 'S3 object lifecycle', 'IAM access'],
      },
      {
        id: 'bedrock-iam',
        title: 'Bedrock / SageMaker via IAM',
        summary: 'Call models with roles — never hardcoded keys.',
        concepts: ['IAM roles', 'Least privilege', 'VPC endpoints', 'Key rotation death'],
      },
      {
        id: 'terraform-iac',
        title: 'Infrastructure as Code',
        summary: 'Declarative provisioning with Terraform concepts.',
        concepts: ['Desired state', 'Plan/apply', 'Modules', 'State & secrets'],
      },
      {
        id: 'observability-pillars',
        title: 'Logs, Metrics, Traces',
        summary: 'Prometheus, Grafana, OpenTelemetry mental model.',
        concepts: ['Metrics', 'Logs', 'Traces', 'Exemplars / correlation'],
      },
      {
        id: 'self-healing-monitors',
        title: 'Self-healing Monitors',
        summary: 'Event-driven Python monitors that kick Celery repair jobs.',
        concepts: ['Health signals', 'Auto remediation', 'Alert routing', 'Safe runbooks'],
      },
      {
        id: 'guardrails-ragas',
        title: 'Guardrails & Evals',
        summary: 'Ragas-style evals and NeMo-style input/output filters.',
        concepts: ['Eval datasets', 'Input filters', 'Output filters', 'Release gates'],
      },
      {
        id: 'llmops-cicd',
        title: 'CI/CD for Prompts & Indexes',
        summary: 'Prompt versioning and semantic regression testing.',
        concepts: ['Prompt versions', 'Index versioning', 'Shadow evals', 'Safe rollout'],
      },
    ],
  },
  {
    id: 'target-roles',
    title: 'Target Roles',
    tagline: 'Where this prep points — and what each role optimizes for.',
    accent: '#334155',
    topics: [
      {
        id: 'ai-solutions-engineer',
        title: 'AI Solutions / Generative AI Engineer',
        summary: 'Bridge business logic with RAG, vectors, and API middleware.',
        concepts: ['RAG pipelines', 'Vector indexes', 'Prompt chains', 'Cost & latency'],
      },
      {
        id: 'forward-deployed',
        title: 'Forward Deployed Engineer (AI & Data)',
        summary: 'Integrate AI into messy client environments under pressure.',
        concepts: ['Legacy integration', 'On-site constraints', 'Custom deploy paths', 'Client communication'],
      },
      {
        id: 'distributed-backend',
        title: 'High-Scale Distributed Backend',
        summary: 'Fault-tolerant backends that stream heavy AI traffic.',
        concepts: ['Sharding', 'Async processing', 'Rate limits', 'Load balancing'],
      },
      {
        id: 'role-matrix',
        title: 'Strategic Comparison Matrix',
        summary: 'Value prop, system-design focus, and pay posture per role.',
        concepts: ['AI Solutions focus', 'FDE focus', 'Distributed backend focus', 'How to choose'],
      },
    ],
  },
]

export const getJobPrepSection = (id: string) => jobPrepSections.find((s) => s.id === id)

export const getJobPrepTopic = (sectionId: string, topicId: string) => {
  const section = getJobPrepSection(sectionId)
  return section?.topics.find((t) => t.id === topicId)
}
