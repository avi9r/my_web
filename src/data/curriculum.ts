export type LabKind =
  | 'diagram'
  | 'simulator'
  | 'pipeline'
  | 'quiz'
  | 'compare'
  | 'sandbox'

export interface Subtopic {
  id: string
  title: string
  summary: string
  concepts: string[]
  lab: LabKind
  productionNote?: string
}

export interface Track {
  id: string
  title: string
  tagline: string
  accent: string
  path: string
  featured?: boolean
  subtopics: Subtopic[]
}

export const tracks: Track[] = [
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    tagline: 'Visual, interactive DSA — from arrays to max-flow.',
    accent: '#0d9488',
    path: '/learn/dsa',
    featured: true,
    subtopics: [
      { id: 'arrays', title: 'Arrays & Lists', summary: 'Indexing, two pointers, sliding window.', concepts: ['Static vs dynamic arrays', 'Two pointers', 'Sliding window', 'Prefix sums'], lab: 'simulator' },
      { id: 'linked-lists', title: 'Linked Lists', summary: 'Singly, doubly, cycle detection.', concepts: ['Singly / doubly', 'Fast & slow pointers', 'Reversal', 'Merge'], lab: 'simulator' },
      { id: 'stacks-queues', title: 'Stacks & Queues', summary: 'LIFO/FIFO patterns and monotonic stacks.', concepts: ['Stack ops', 'Queue / deque', 'Monotonic stack', 'BFS queue'], lab: 'simulator' },
      { id: 'hash-tables', title: 'Hash Tables', summary: 'Hashing, collisions, frequency maps.', concepts: ['Hash functions', 'Chaining / open addressing', 'Frequency maps', 'Sets'], lab: 'simulator' },
      { id: 'trees', title: 'Trees & Binary Trees', summary: 'Traversals, BST, balanced trees intro.', concepts: ['Traversals', 'BST ops', 'Height / diameter', 'LCA'], lab: 'simulator' },
      { id: 'graphs', title: 'Graphs', summary: 'BFS, DFS, representations.', concepts: ['Adj list/matrix', 'BFS', 'DFS', 'Topological sort'], lab: 'simulator' },
      { id: 'sorting', title: 'Sorting', summary: 'Comparison sorts with live visualization.', concepts: ['Bubble / insertion / selection', 'Merge / quick', 'Heap sort', 'Stability'], lab: 'simulator' },
      { id: 'searching', title: 'Searching', summary: 'Linear, binary, and variants.', concepts: ['Linear', 'Binary', 'Lower/upper bound', 'Rotated array'], lab: 'simulator' },
      { id: 'dynamic-programming', title: 'Dynamic Programming', summary: 'Overlapping subproblems and tabulation.', concepts: ['Memoization', 'Tabulation', 'Knapsack', 'LIS / LCS'], lab: 'simulator' },
      { id: 'greedy', title: 'Greedy', summary: 'Local optimal choices.', concepts: ['Activity selection', 'Huffman', 'Interval scheduling'], lab: 'simulator' },
      { id: 'backtracking', title: 'Backtracking', summary: 'Explore and prune search trees.', concepts: ['N-Queens', 'Subsets', 'Permutations', 'Sudoku'], lab: 'simulator' },
      { id: 'heaps-priority', title: 'Heaps & Priority Queues', summary: 'Binary heaps and priority patterns.', concepts: ['Heapify', 'Top-K', 'Dijkstra PQ'], lab: 'simulator' },
      { id: 'rb-trees', title: 'Red-Black Trees', summary: 'Balanced BST invariants.', concepts: ['Coloring rules', 'Rotations', 'Insert fixup'], lab: 'diagram' },
      { id: 'b-trees', title: 'B-Trees', summary: 'Disk-friendly multiway trees.', concepts: ['Order / min degree', 'Split / merge', 'DB indexes'], lab: 'diagram' },
      { id: 'mst', title: 'Minimum Spanning Trees', summary: 'Kruskal and Prim.', concepts: ['Kruskal + Union-Find', 'Prim', 'Cut property'], lab: 'simulator' },
      { id: 'shortest-paths', title: 'Shortest Paths', summary: 'Dijkstra, Bellman-Ford, Floyd-Warshall.', concepts: ['Dijkstra', 'Bellman-Ford', 'Floyd-Warshall', 'Negative cycles'], lab: 'simulator' },
      { id: 'string-matching', title: 'String Matching', summary: 'KMP, Rabin-Karp, Z-algorithm.', concepts: ['Naive', 'KMP LPS', 'Rabin-Karp', 'Z-algorithm'], lab: 'simulator' },
      { id: 'max-flow', title: 'Max Flow', summary: 'Ford-Fulkerson and Edmonds-Karp.', concepts: ['Residual graph', 'Augmenting paths', 'Min-cut'], lab: 'simulator' },
    ],
  },
  {
    id: 'system-design',
    title: 'System Design',
    tagline: 'Design SaaS the way production teams do.',
    accent: '#2563eb',
    path: '/learn/system-design',
    featured: true,
    subtopics: [
      { id: 'fundamentals', title: 'Design Fundamentals', summary: 'Requirements, constraints, capacity.', concepts: ['Functional vs non-functional', 'SLAs / SLOs', 'Back-of-envelope', 'APIs first'], lab: 'compare' },
      { id: 'cap-consistency', title: 'CAP & Consistency', summary: 'Tradeoffs that show up in real systems.', concepts: ['CAP', 'Strong vs eventual', 'Quorum', 'Idempotency'], lab: 'simulator' },
      { id: 'load-balancing', title: 'Load Balancing', summary: 'Distribute traffic safely.', concepts: ['L4 vs L7', 'Round robin / least conn', 'Health checks', 'Sticky sessions'], lab: 'simulator' },
      { id: 'caching', title: 'Caching Strategies', summary: 'Latency wins without stale disasters.', concepts: ['Cache-aside', 'Write-through / behind', 'TTL / invalidation', 'Redis patterns'], lab: 'simulator', productionNote: 'ElastiCache Redis powers async document pipelines at DLAI.' },
      { id: 'databases', title: 'Databases & Storage', summary: 'SQL, indexing, sharding, and vectors.', concepts: ['Normalization', 'Indexes', 'Sharding / partitioning', 'pgvector'], lab: 'compare', productionNote: 'PostgreSQL + pgvector for 30k+ document similarity.' },
      { id: 'queues', title: 'Async Queues & Pipelines', summary: 'Decouple producers and workers.', concepts: ['Celery / Redis queues', 'Retries / DLQ', 'Backpressure', 'Exactly-once illusions'], lab: 'pipeline', productionNote: '1,000+ docs/day via Celery/Redis at DLAI.' },
      { id: 'api-design', title: 'API Design', summary: 'REST, OpenAPI, versioning.', concepts: ['Resource modeling', 'Status codes', 'Pagination', 'OpenAPI / Swagger'], lab: 'sandbox' },
      { id: 'multi-tenant', title: 'Multi-tenant SaaS', summary: 'Isolate tenants without drowning in ops.', concepts: ['Shared DB vs schema', 'Row-level isolation', 'Rate limits', 'Licensing'], lab: 'diagram', productionNote: 'Supedio multi-tenant licensing with HMAC heartbeats.' },
      { id: 'observability', title: 'Observability', summary: 'Logs, metrics, traces, blackbox.', concepts: ['Structured logs', 'Metrics / alerts', 'Tracing', 'Request blackbox'], lab: 'diagram', productionNote: 'blackbox-logger (PyPI) for request/response audit trails.' },
      { id: 'case-document-saas', title: 'Case Study: Document SaaS', summary: 'End-to-end document automation architecture.', concepts: ['Ingest → extract → review → deliver', 'Cloud + on-prem paths', 'Channel integrations'], lab: 'pipeline', productionNote: 'Document automation SaaS with async pipelines and multi-channel delivery.' },
    ],
  },
  {
    id: 'rag',
    title: 'RAG Systems',
    tagline: 'Retrieval-augmented generation from first principles.',
    accent: '#7c3aed',
    path: '/learn/rag',
    featured: true,
    subtopics: [
      { id: 'rag-overview', title: 'Why RAG Exists', summary: 'Ground LLMs in your data.', concepts: ['Hallucinations', 'Closed vs open book', 'Latency vs quality'], lab: 'compare' },
      { id: 'chunking', title: 'Chunking Strategies', summary: 'Split documents for retrieval.', concepts: ['Fixed / recursive', 'Semantic chunks', 'Overlap', 'Metadata'], lab: 'simulator' },
      { id: 'embeddings', title: 'Embeddings', summary: 'Vectors that capture meaning.', concepts: ['Dense embeddings', 'Similarity metrics', 'Dimensionality', 'Model choice'], lab: 'simulator' },
      { id: 'vector-search', title: 'Vector Search', summary: 'ANN indexes and hybrid search.', concepts: ['pgvector', 'Pinecone', 'HNSW / IVF', 'Hybrid BM25 + vector'], lab: 'simulator', productionNote: 'Sub-200ms similarity across 30,000+ documents.' },
      { id: 'retrieval', title: 'Retrieval & Reranking', summary: 'Get the right context into the prompt.', concepts: ['Top-k', 'Rerankers', 'Filters', 'Query rewriting'], lab: 'pipeline' },
      { id: 'generation', title: 'Grounded Generation', summary: 'Prompting with citations.', concepts: ['Context windows', 'Citation prompts', 'Temperature', 'Fallback answers'], lab: 'sandbox' },
      { id: 'ocr-ingest', title: 'OCR & Multi-format Ingest', summary: 'PDF, images, Word, CSV into text.', concepts: ['Tesseract OCR', 'Layout awareness', 'Fallbacks', 'Normalization'], lab: 'pipeline', productionNote: 'Document Similarity Engine — PDF/image/Word/CSV ingest.' },
      { id: 'evals', title: 'RAG Evals', summary: 'Measure retrieval and answer quality.', concepts: ['Faithfulness', 'Context precision', 'Golden sets', 'Regression gates'], lab: 'quiz', productionNote: 'AI Eval gates before client delivery at DLAI.' },
    ],
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    tagline: 'Tools, loops, memory — agents that ship work.',
    accent: '#db2777',
    path: '/learn/agentic-ai',
    featured: true,
    subtopics: [
      { id: 'agent-basics', title: 'Agent Mental Model', summary: 'LLM + tools + loop.', concepts: ['Perceive → plan → act', 'Tool calling', 'Stop conditions'], lab: 'diagram' },
      { id: 'tool-use', title: 'Tool Calling', summary: 'Structured actions the model can take.', concepts: ['JSON schemas', 'Function calling', 'Validation', 'Side effects'], lab: 'sandbox' },
      { id: 'planning', title: 'Planning & Decomposition', summary: 'Break goals into steps.', concepts: ['ReAct', 'Plan-and-execute', 'Reflection', 'Human checkpoints'], lab: 'pipeline' },
      { id: 'memory', title: 'Memory Patterns', summary: 'Short-term, long-term, episodic.', concepts: ['Chat buffer', 'Vector memory', 'Summaries', 'Entity stores'], lab: 'compare' },
      { id: 'multi-agent', title: 'Multi-agent Workflows', summary: 'Specialists coordinating.', concepts: ['Router agents', 'Worker pools', 'Handoffs', 'Shared state'], lab: 'simulator' },
      { id: 'frameworks', title: 'LangChain & LlamaIndex', summary: 'When to use which layer.', concepts: ['Chains vs agents', 'Indexes', 'Retrievers', 'Callbacks'], lab: 'compare', productionNote: 'LangChain for production document similarity / RAG.' },
      { id: 'safety', title: 'Safety & Guardrails', summary: 'Keep agents inside the rails.', concepts: ['Allowlists', 'Sandboxing', 'Budget caps', 'Audit logs'], lab: 'diagram', productionNote: 'Bit-Vault-AI experimental blackbox + controlled learning.' },
      { id: 'evals-agents', title: 'Agent Evals', summary: 'Score trajectories, not just answers.', concepts: ['Task success', 'Tool error rate', 'Cost / latency', 'Regression suites'], lab: 'quiz' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud, Scaling & Serverless',
    tagline: 'AWS patterns that survive production.',
    accent: '#ea580c',
    path: '/learn/cloud',
    featured: true,
    subtopics: [
      { id: 'cloud-basics', title: 'Cloud Building Blocks', summary: 'Regions, VPC, identity.', concepts: ['Regions / AZs', 'VPC / subnets', 'IAM / IRSA', 'Secrets Manager'], lab: 'diagram', productionNote: 'AWS test-stack: VPC, EKS, RDS, ElastiCache, S3, IRSA.' },
      { id: 'vertical-horizontal', title: 'Vertical vs Horizontal Scaling', summary: 'Scale up vs scale out.', concepts: ['Vertical limits', 'Horizontal replicas', 'Stateful pitfalls', 'Autoscaling signals'], lab: 'simulator' },
      { id: 'serverless', title: 'Serverless Containers', summary: 'Fargate-style execution.', concepts: ['No node management', 'Task sizing', 'Cold starts', 'Networking'], lab: 'compare', productionNote: 'ECR → EKS Fargate for production SaaS workloads.' },
      { id: 'storage', title: 'Object & Managed Storage', summary: 'S3, RDS, MinIO.', concepts: ['S3 lifecycle', 'RDS vs self-host', 'MinIO on-prem', 'Backups'], lab: 'diagram' },
      { id: 'edge', title: 'Edge & Workers', summary: 'Cloudflare Workers, D1, R2.', concepts: ['Workers runtime', 'D1 SQL', 'R2 media', 'When edge wins'], lab: 'compare', productionNote: 'Hloop Connect uses Cloudflare R2 for media.' },
      { id: 'cicd', title: 'CI/CD on Cloud', summary: 'Build once, promote safely.', concepts: ['GitHub Actions', 'Kaniko builds', 'ECR tags', 'Env promotion'], lab: 'pipeline' },
      { id: 'onprem', title: 'On-prem Packaging', summary: 'Ship the same product offline.', concepts: ['Docker Compose bundles', 'Runbooks', 'Licensing', 'Customer infra'], lab: 'pipeline', productionNote: 'On-prem Docker packages with install scripts and ops runbooks.' },
    ],
  },
  {
    id: 'docker',
    title: 'Docker',
    tagline: 'Containers you can explain and debug.',
    accent: '#0284c7',
    path: '/learn/docker',
    subtopics: [
      { id: 'images', title: 'Images & Layers', summary: 'How images are built.', concepts: ['Dockerfile layers', 'Caching', 'Multi-stage builds', 'Image size'], lab: 'simulator' },
      { id: 'containers', title: 'Containers Runtime', summary: 'Processes with isolation.', concepts: ['Namespaces / cgroups', 'Ports', 'Volumes', 'Env vars'], lab: 'sandbox' },
      { id: 'compose', title: 'Docker Compose', summary: 'Multi-service local stacks.', concepts: ['Services', 'Networks', 'Depends_on', 'Dev vs prod compose'], lab: 'pipeline', productionNote: 'Customer on-prem bundles ship as Compose stacks.' },
      { id: 'registries', title: 'Registries & ECR', summary: 'Push, pull, promote.', concepts: ['Tags / digests', 'ECR', 'Vulnerability scan', 'Immutable tags'], lab: 'diagram' },
      { id: 'best-practices', title: 'Production Best Practices', summary: 'Secure, small, reproducible.', concepts: ['Non-root users', 'Healthchecks', 'Secrets not in images', '.dockerignore'], lab: 'quiz' },
    ],
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    tagline: 'Orchestrate containers with clarity.',
    accent: '#4f46e5',
    path: '/learn/kubernetes',
    subtopics: [
      { id: 'k8s-mental-model', title: 'K8s Mental Model', summary: 'Desired state reconciliation.', concepts: ['Control plane', 'Nodes', 'etcd', 'Controllers'], lab: 'diagram' },
      { id: 'pods-deployments', title: 'Pods & Deployments', summary: 'Run and roll out apps.', concepts: ['Pods', 'ReplicaSets', 'Rolling updates', 'Probes'], lab: 'simulator' },
      { id: 'services-ingress', title: 'Services & Ingress', summary: 'Expose workloads.', concepts: ['ClusterIP / NodePort / LB', 'Ingress', 'ALB patterns', 'DNS'], lab: 'diagram' },
      { id: 'config-secrets', title: 'ConfigMaps & Secrets', summary: 'Inject configuration safely.', concepts: ['ConfigMaps', 'Secrets', 'IRSA', 'Env vs files'], lab: 'sandbox', productionNote: 'IRSA + Secrets Manager on EKS Fargate.' },
      { id: 'helm-kubectl', title: 'Helm & kubectl', summary: 'Operate clusters day-to-day.', concepts: ['kubectl essentials', 'Helm charts', 'Values overlays', 'Rollbacks'], lab: 'sandbox' },
      { id: 'eks-fargate', title: 'EKS + Fargate', summary: 'Managed Kubernetes without nodes.', concepts: ['EKS control plane', 'Fargate profiles', 'Networking', 'Storage limits'], lab: 'pipeline', productionNote: 'Production path: Docker → ECR → EKS Fargate.' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Platform',
    tagline: 'Python APIs, async work, and product backends.',
    accent: '#059669',
    path: '/learn/backend',
    subtopics: [
      { id: 'python-apis', title: 'Django / DRF / FastAPI', summary: 'Pick the right API layer.', concepts: ['Django monolith strengths', 'DRF serializers', 'FastAPI async', 'When to split'], lab: 'compare', productionNote: 'Django at DLAI; FastAPI for HNL & video factory.' },
      { id: 'celery-redis', title: 'Celery & Redis', summary: 'Background jobs that scale.', concepts: ['Tasks', 'Workers', 'Brokers', 'Result backends'], lab: 'simulator' },
      { id: 'postgres', title: 'PostgreSQL Deep Dive', summary: 'Schemas, indexes, transactions.', concepts: ['ACID', 'Indexes', 'Migrations', 'Connection pooling'], lab: 'sandbox' },
      { id: 'auth-payments', title: 'Auth & Payments', summary: 'Sessions, wallets, ledgers.', concepts: ['JWT / session', 'Razorpay / Stripe', 'Idempotent charges', 'Ledgers'], lab: 'pipeline', productionNote: 'HNL marketplace — wallet, subscriptions, Razorpay.' },
      { id: 'realtime', title: 'Realtime & WebSockets', summary: 'Push updates live.', concepts: ['WebSockets', 'Pub/sub', 'Binance feeds', 'Reconnect'], lab: 'simulator', productionNote: 'Algo trading: Binance WebSocket + Redis.' },
      { id: 'testing', title: 'Testing APIs', summary: 'pytest and contract tests.', concepts: ['pytest', 'Fixtures', 'API contracts', 'CI gates'], lab: 'quiz' },
    ],
  },
  {
    id: 'ai-ops',
    title: 'AI Evals',
    tagline: 'Ship AI only when quality is measurable.',
    accent: '#ca8a04',
    path: '/learn/ai-ops',
    subtopics: [
      { id: 'eval-gates', title: 'AI Eval Gates', summary: 'Block bad outputs before delivery.', concepts: ['Golden datasets', 'Score thresholds', 'Regression', 'Sampling'], lab: 'pipeline' },
      { id: 'extraction-quality', title: 'Extraction Quality', summary: 'Key-value accuracy for PDFs.', concepts: ['Field-level metrics', 'Edge cases', 'Acceptance criteria', 'Client rules'], lab: 'quiz' },
      { id: 'retention', title: 'Retention & Compliance Flows', summary: 'Export, purge, audit.', concepts: ['Datalake export', 'Purge windows', 'HMAC uploads', 'Audit trails'], lab: 'pipeline' },
    ],
  },
  {
    id: 'security',
    title: 'Security & Integrations',
    tagline: 'Secure defaults and enterprise wiring.',
    accent: '#dc2626',
    path: '/learn/security',
    subtopics: [
      { id: 'secure-defaults', title: 'Secure Defaults', summary: 'Auth lifecycle and headers.', concepts: ['Token lifecycle', 'CSP / cache headers', 'TLS review', 'Least privilege'], lab: 'quiz', productionNote: 'Findings from OWASP Nettacker → remediations.' },
      { id: 'hmac-licensing', title: 'HMAC Licensing', summary: 'Tamper-evident license checks.', concepts: ['HMAC signing', 'Heartbeats', 'Revocation', 'Audit logs'], lab: 'simulator', productionNote: 'Supedio licensing server.' },
      { id: 'encryption', title: 'Encryption at Rest', summary: 'Protect files and secrets.', concepts: ['AES-256', 'IVs', 'Key derivation', 'Secret storage'], lab: 'sandbox', productionNote: 'BitVault — AES-256 vault for files & text.' },
      { id: 'enterprise-channels', title: 'Enterprise Channels', summary: 'SAP, Graph, SFTP, SMTP.', concepts: ['SAP ERP', 'Microsoft Graph', 'SFTP/FTP', 'SMTP'], lab: 'pipeline', productionNote: 'Multi-channel delivery across ERP, email, and file transfers.' },
      { id: 'automation', title: 'Automation Glue', summary: 'n8n, Make, Zapier patterns.', concepts: ['Webhooks', 'Idempotency', 'Retries', 'Observability'], lab: 'diagram' },
    ],
  },
]

export const getTrack = (id: string) => tracks.find((t) => t.id === id)

export const getSubtopic = (trackId: string, subtopicId: string) => {
  const track = getTrack(trackId)
  return track?.subtopics.find((s) => s.id === subtopicId)
}

export const featuredTracks = tracks.filter((t) => t.featured)
