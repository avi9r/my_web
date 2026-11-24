import { useEffect, useMemo, useState } from 'react'
import type { LabKind, Subtopic, Track } from '../../data/curriculum'

export function ProductionCallout({ note }: { note?: string }) {
  if (!note) return null
  return (
    <div className="rounded-lg border border-teal-700/30 bg-teal-700/10 px-4 py-3 text-sm text-teal-900 dark:text-teal-200">
      <span className="font-semibold">From production: </span>
      {note}
    </div>
  )
}

export function ConceptChips({ concepts }: { concepts: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {concepts.map((c) => (
        <span
          key={c}
          className="rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 text-xs text-slate-700 dark:text-slate-300"
        >
          {c}
        </span>
      ))}
    </div>
  )
}

/** Interactive step pipeline for RAG / queues / agents */
export function PipelineLab({
  stages,
  title = 'Interactive pipeline',
}: {
  stages: { id: string; label: string; detail: string }[]
  title?: string
}) {
  const [active, setActive] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const t = setInterval(() => {
      setActive((a) => {
        if (a >= stages.length - 1) {
          setRunning(false)
          return a
        }
        return a + 1
      })
    }, 900)
    return () => clearInterval(t)
  }, [running, stages.length])

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-md bg-slate-900 dark:bg-teal-700 text-white px-3 py-1.5 text-xs"
            onClick={() => {
              setActive(0)
              setRunning(true)
            }}
          >
            Run
          </button>
          <button
            type="button"
            className="rounded-md border border-slate-300 dark:border-slate-600 px-3 py-1.5 text-xs"
            onClick={() => {
              setRunning(false)
              setActive(0)
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {stages.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              setRunning(false)
              setActive(i)
            }}
            className={`rounded-lg px-3 py-2 text-left text-xs transition ${
              i === active
                ? 'bg-teal-700 text-white shadow'
                : i < active
                  ? 'bg-teal-700/20 text-teal-900 dark:text-teal-200'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            <div className="font-semibold">{i + 1}. {s.label}</div>
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">{stages[active]?.detail}</p>
    </div>
  )
}

/** Scaling simulator: vertical vs horizontal */
export function ScalingLab() {
  const [mode, setMode] = useState<'vertical' | 'horizontal'>('horizontal')
  const [load, setLoad] = useState(40)
  const [nodes, setNodes] = useState(2)
  const [cpu, setCpu] = useState(2)

  const capacity = mode === 'vertical' ? cpu * 40 : nodes * 35
  const healthy = load <= capacity
  const utilization = Math.min(100, Math.round((load / Math.max(capacity, 1)) * 100))

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setMode('vertical')}
          className={`rounded-md px-3 py-1.5 text-xs ${mode === 'vertical' ? 'bg-orange-600 text-white' : 'border border-slate-300 dark:border-slate-600'}`}
        >
          Vertical (scale up)
        </button>
        <button
          type="button"
          onClick={() => setMode('horizontal')}
          className={`rounded-md px-3 py-1.5 text-xs ${mode === 'horizontal' ? 'bg-orange-600 text-white' : 'border border-slate-300 dark:border-slate-600'}`}
        >
          Horizontal (scale out)
        </button>
      </div>
      <label className="block text-xs">
        Traffic load: {load}
        <input
          type="range"
          min={10}
          max={200}
          value={load}
          onChange={(e) => setLoad(Number(e.target.value))}
          className="mt-1 w-full"
        />
      </label>
      {mode === 'vertical' ? (
        <label className="block text-xs">
          CPU cores: {cpu}
          <input type="range" min={1} max={16} value={cpu} onChange={(e) => setCpu(Number(e.target.value))} className="mt-1 w-full" />
        </label>
      ) : (
        <label className="block text-xs">
          Replicas: {nodes}
          <input type="range" min={1} max={12} value={nodes} onChange={(e) => setNodes(Number(e.target.value))} className="mt-1 w-full" />
        </label>
      )}
      <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <div
          className={`h-full transition-all ${healthy ? 'bg-teal-600' : 'bg-red-500'}`}
          style={{ width: `${utilization}%` }}
        />
      </div>
      <p className="text-sm">
        Capacity {capacity} vs load {load} —{' '}
        <span className={healthy ? 'text-teal-700 dark:text-teal-400 font-semibold' : 'text-red-600 font-semibold'}>
          {healthy ? 'Healthy' : 'Saturated — scale or shed load'}
        </span>
      </p>
      <div className="flex flex-wrap gap-2">
        {mode === 'horizontal'
          ? Array.from({ length: nodes }).map((_, i) => (
              <div key={i} className="h-14 w-14 rounded-md border-2 border-orange-500/60 bg-orange-500/10 flex items-center justify-center text-xs">
                n{i + 1}
              </div>
            ))
          : (
            <div
              className="rounded-md border-2 border-orange-500/60 bg-orange-500/10 flex items-center justify-center text-xs"
              style={{ height: 40 + cpu * 8, width: 60 + cpu * 10 }}
            >
              big box
            </div>
          )}
      </div>
    </div>
  )
}

/** Vector search toy: cosine similarity over tiny docs */
export function VectorSearchLab() {
  const corpus = useMemo(
    () => [
      { id: 'a', text: 'invoice pdf extraction sap erp', vec: [0.9, 0.1, 0.2, 0.05] },
      { id: 'b', text: 'kubernetes fargate docker deploy', vec: [0.1, 0.85, 0.3, 0.1] },
      { id: 'c', text: 'rag embeddings pgvector search', vec: [0.2, 0.15, 0.9, 0.4] },
      { id: 'd', text: 'celery redis async document queue', vec: [0.7, 0.2, 0.25, 0.8] },
    ],
    []
  )
  const [query, setQuery] = useState('document similarity vector')
  const qVec = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/)
    return [
      words.some((w) => ['invoice', 'pdf', 'extract', 'document', 'sap'].includes(w)) ? 1 : 0.1,
      words.some((w) => ['k8s', 'kubernetes', 'docker', 'fargate', 'deploy'].includes(w)) ? 1 : 0.1,
      words.some((w) => ['rag', 'embed', 'vector', 'search', 'pgvector'].includes(w)) ? 1 : 0.1,
      words.some((w) => ['celery', 'redis', 'queue', 'async'].includes(w)) ? 1 : 0.1,
    ]
  }, [query])

  const ranked = useMemo(() => {
    const cosine = (a: number[], b: number[]) => {
      const dot = a.reduce((s, v, i) => s + v * b[i], 0)
      const na = Math.sqrt(a.reduce((s, v) => s + v * v, 0))
      const nb = Math.sqrt(b.reduce((s, v) => s + v * v, 0))
      return dot / (na * nb || 1)
    }
    return [...corpus]
      .map((d) => ({ ...d, score: cosine(qVec, d.vec) }))
      .sort((a, b) => b.score - a.score)
  }, [corpus, qVec])

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <label className="block text-sm font-medium">
        Query
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm"
        />
      </label>
      <ul className="space-y-2">
        {ranked.map((d, i) => (
          <li key={d.id} className="flex items-center gap-3 text-sm">
            <span className="w-6 text-xs text-slate-500">#{i + 1}</span>
            <div className="flex-1">
              <div className="font-medium">{d.text}</div>
              <div className="mt-1 h-1.5 rounded bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-violet-600" style={{ width: `${Math.round(d.score * 100)}%` }} />
              </div>
            </div>
            <span className="text-xs tabular-nums">{d.score.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Load balancer demo */
export function LoadBalancerLab() {
  const [algo, setAlgo] = useState<'rr' | 'lc'>('rr')
  const [servers, setServers] = useState([2, 5, 1])
  const [cursor, setCursor] = useState(0)
  const [log, setLog] = useState<string[]>([])

  const send = () => {
    let idx = 0
    if (algo === 'rr') {
      idx = cursor % servers.length
      setCursor((c) => c + 1)
    } else {
      idx = servers.reduce((best, load, i, arr) => (load < arr[best] ? i : best), 0)
    }
    setServers((s) => s.map((v, i) => (i === idx ? v + 1 : v)))
    setLog((l) => [`Request → server ${idx + 1} (${algo})`, ...l].slice(0, 8))
  }

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setAlgo('rr')} className={`rounded-md px-3 py-1.5 text-xs ${algo === 'rr' ? 'bg-blue-600 text-white' : 'border border-slate-300 dark:border-slate-600'}`}>
          Round robin
        </button>
        <button type="button" onClick={() => setAlgo('lc')} className={`rounded-md px-3 py-1.5 text-xs ${algo === 'lc' ? 'bg-blue-600 text-white' : 'border border-slate-300 dark:border-slate-600'}`}>
          Least connections
        </button>
        <button type="button" onClick={send} className="rounded-md bg-slate-900 dark:bg-teal-700 text-white px-3 py-1.5 text-xs">
          Send request
        </button>
        <button type="button" onClick={() => { setServers([0, 0, 0]); setLog([]); setCursor(0) }} className="rounded-md border px-3 py-1.5 text-xs">
          Reset
        </button>
      </div>
      <div className="flex gap-3">
        {servers.map((load, i) => (
          <div key={i} className="flex-1 rounded-lg border border-blue-500/40 p-3 text-center">
            <div className="text-xs text-slate-500">Server {i + 1}</div>
            <div className="text-2xl font-semibold tabular-nums">{load}</div>
            <div className="mt-2 h-16 bg-slate-100 dark:bg-slate-800 rounded relative overflow-hidden">
              <div className="absolute bottom-0 w-full bg-blue-500/70 transition-all" style={{ height: `${Math.min(100, load * 8)}%` }} />
            </div>
          </div>
        ))}
      </div>
      <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
        {log.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  )
}

/** Cache hit/miss simulator */
export function CacheLab() {
  const [policy, setPolicy] = useState<'aside' | 'through'>('aside')
  const [cache, setCache] = useState<Record<string, string>>({})
  const [dbHits, setDbHits] = useState(0)
  const [cacheHits, setCacheHits] = useState(0)
  const [key, setKey] = useState('user:42')
  const db: Record<string, string> = { 'user:42': 'Avinash', 'doc:9': 'invoice', 'order:1': 'paid' }

  const read = () => {
    if (cache[key]) {
      setCacheHits((h) => h + 1)
      return
    }
    setDbHits((h) => h + 1)
    if (db[key]) setCache((c) => ({ ...c, [key]: db[key] }))
  }

  const write = () => {
    const val = `v${Date.now() % 1000}`
    if (policy === 'through') {
      setCache((c) => ({ ...c, [key]: val }))
    } else {
      setCache((c) => {
        const next = { ...c }
        delete next[key]
        return next
      })
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setPolicy('aside')} className={`rounded-md px-3 py-1.5 text-xs ${policy === 'aside' ? 'bg-blue-600 text-white' : 'border'}`}>
          Cache-aside
        </button>
        <button type="button" onClick={() => setPolicy('through')} className={`rounded-md px-3 py-1.5 text-xs ${policy === 'through' ? 'bg-blue-600 text-white' : 'border'}`}>
          Write-through
        </button>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <select value={key} onChange={(e) => setKey(e.target.value)} className="rounded-md border bg-transparent px-2 py-1 text-sm">
          {Object.keys(db).map((k) => (
            <option key={k} value={k}>{k}</option>
          ))}
        </select>
        <button type="button" onClick={read} className="rounded-md bg-slate-900 dark:bg-teal-700 text-white px-3 py-1.5 text-xs">Read</button>
        <button type="button" onClick={write} className="rounded-md border px-3 py-1.5 text-xs">Write</button>
      </div>
      <p className="text-sm">Cache hits: <strong>{cacheHits}</strong> · DB hits: <strong>{dbHits}</strong></p>
      <pre className="text-xs rounded-md bg-slate-100 dark:bg-slate-800 p-3 overflow-auto">{JSON.stringify(cache, null, 2)}</pre>
    </div>
  )
}

/** Chunking visualizer */
export function ChunkingLab() {
  const [text, setText] = useState(
    'Enterprise PDFs arrive via SFTP. OCR extracts text. Embeddings land in pgvector. Reviewers fix edge cases before SAP delivery.'
  )
  const [size, setSize] = useState(40)
  const [overlap, setOverlap] = useState(10)
  const chunks = useMemo(() => {
    const out: string[] = []
    let i = 0
    while (i < text.length) {
      out.push(text.slice(i, i + size))
      i += Math.max(1, size - overlap)
    }
    return out
  }, [text, size, overlap])

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 text-sm"
      />
      <div className="grid sm:grid-cols-2 gap-3 text-xs">
        <label>
          Chunk size: {size}
          <input type="range" min={20} max={120} value={size} onChange={(e) => setSize(Number(e.target.value))} className="w-full" />
        </label>
        <label>
          Overlap: {overlap}
          <input type="range" min={0} max={40} value={overlap} onChange={(e) => setOverlap(Number(e.target.value))} className="w-full" />
        </label>
      </div>
      <div className="space-y-2">
        {chunks.map((c, i) => (
          <div key={i} className="rounded-md border border-violet-500/30 bg-violet-500/10 px-3 py-2 text-xs font-mono">
            <span className="text-violet-700 dark:text-violet-300 font-semibold mr-2">#{i + 1}</span>
            {c}
          </div>
        ))}
      </div>
    </div>
  )
}

/** Docker layer builder */
export function DockerLayersLab() {
  const [layers, setLayers] = useState([
    { id: 'base', label: 'FROM python:3.12-slim', cached: true },
    { id: 'deps', label: 'RUN pip install -r requirements.txt', cached: true },
    { id: 'code', label: 'COPY . /app', cached: false },
    { id: 'cmd', label: 'CMD ["gunicorn", "app:app"]', cached: false },
  ])

  const rebuild = (changedId: string) => {
    let invalidate = false
    setLayers((prev) =>
      prev.map((l) => {
        if (l.id === changedId) invalidate = true
        if (invalidate) return { ...l, cached: false }
        return { ...l, cached: true }
      })
    )
  }

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <p className="text-sm text-slate-600 dark:text-slate-400">Click a layer to invalidate cache from that point downward.</p>
      {layers.map((l) => (
        <button
          key={l.id}
          type="button"
          onClick={() => rebuild(l.id)}
          className={`w-full text-left rounded-md border px-3 py-2 font-mono text-xs ${
            l.cached
              ? 'border-teal-600/40 bg-teal-600/10'
              : 'border-amber-600/40 bg-amber-600/10'
          }`}
        >
          <span className="mr-2 font-semibold">{l.cached ? 'CACHED' : 'REBUILD'}</span>
          {l.label}
        </button>
      ))}
      <button
        type="button"
        className="rounded-md border px-3 py-1.5 text-xs"
        onClick={() =>
          setLayers((prev) => prev.map((l, i) => ({ ...l, cached: i < 2 })))
        }
      >
        Reset cache state
      </button>
    </div>
  )
}

/** K8s replica slider */
export function K8sReplicasLab() {
  const [desired, setDesired] = useState(3)
  const [ready, setReady] = useState(3)

  useEffect(() => {
    if (ready === desired) return
    const t = setTimeout(() => {
      setReady((r) => (r < desired ? r + 1 : r - 1))
    }, 500)
    return () => clearTimeout(t)
  }, [desired, ready])

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <label className="block text-xs">
        Desired replicas: {desired}
        <input type="range" min={1} max={8} value={desired} onChange={(e) => setDesired(Number(e.target.value))} className="w-full" />
      </label>
      <p className="text-sm">
        Ready: <strong>{ready}</strong> / Desired: <strong>{desired}</strong>{' '}
        {ready === desired ? (
          <span className="text-teal-700 dark:text-teal-400">· Reconciled</span>
        ) : (
          <span className="text-amber-600">· Reconciling…</span>
        )}
      </p>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: Math.max(desired, ready) }).map((_, i) => (
          <div
            key={i}
            className={`h-12 w-12 rounded-md flex items-center justify-center text-xs border ${
              i < ready ? 'bg-indigo-500/20 border-indigo-500' : 'bg-slate-200 dark:bg-slate-800 border-dashed border-slate-400'
            }`}
          >
            pod
          </div>
        ))}
      </div>
    </div>
  )
}

/** Agent loop visual */
export function AgentLoopLab() {
  const steps = [
    { id: 'perceive', label: 'Perceive', detail: 'Read user goal + tool schemas + memory.' },
    { id: 'plan', label: 'Plan', detail: 'Choose next action (tool call or final answer).' },
    { id: 'act', label: 'Act', detail: 'Execute tool with validated JSON arguments.' },
    { id: 'observe', label: 'Observe', detail: 'Feed tool result back into context.' },
    { id: 'stop', label: 'Stop / continue', detail: 'Exit when goal met, budget hit, or human gate.' },
  ]
  return <PipelineLab stages={steps} title="Agent loop playground" />
}

/** Tool-calling JSON validator */
export function ToolCallLab() {
  const schema = '{ "name": "search_docs", "args": { "query": string, "top_k": number } }'
  const [raw, setRaw] = useState('{"name":"search_docs","args":{"query":"invoice sap","top_k":5}}')
  const result = useMemo(() => {
    try {
      const parsed = JSON.parse(raw)
      if (parsed.name !== 'search_docs') return { ok: false, msg: 'Unknown tool name — allowlist rejected this call.' }
      if (typeof parsed.args?.query !== 'string' || typeof parsed.args?.top_k !== 'number') {
        return { ok: false, msg: 'Args failed schema validation.' }
      }
      if (parsed.args.top_k < 1 || parsed.args.top_k > 20) {
        return { ok: false, msg: 'top_k out of budget (1–20).' }
      }
      return { ok: true, msg: `Queued tool: search_docs("${parsed.args.query}", k=${parsed.args.top_k})` }
    } catch {
      return { ok: false, msg: 'Invalid JSON — model output must be parseable.' }
    }
  }, [raw])

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <p className="text-xs font-mono text-slate-500">Expected schema: {schema}</p>
      <textarea
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
        rows={4}
        className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-2 font-mono text-xs"
      />
      <p className={`text-sm font-semibold ${result.ok ? 'text-teal-700' : 'text-red-600'}`}>{result.msg}</p>
    </div>
  )
}

/** Multi-agent router */
export function MultiAgentLab() {
  const agents = [
    { id: 'router', label: 'Router', color: 'bg-pink-500' },
    { id: 'retriever', label: 'Retriever', color: 'bg-violet-500' },
    { id: 'writer', label: 'Writer', color: 'bg-blue-500' },
    { id: 'critic', label: 'Critic', color: 'bg-amber-500' },
  ]
  const [goal, setGoal] = useState('Summarize the latest invoice extraction errors')
  const [path, setPath] = useState<string[]>([])
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const steps = ['router', 'retriever', 'writer', 'critic', 'router']
    let i = 0
    setPath([])
    const t = setInterval(() => {
      if (i >= steps.length) {
        setRunning(false)
        clearInterval(t)
        return
      }
      setPath((p) => [...p, steps[i]])
      i += 1
    }, 700)
    return () => clearInterval(t)
  }, [running])

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <label className="block text-xs">
        Goal
        <input value={goal} onChange={(e) => setGoal(e.target.value)} className="mt-1 w-full rounded-md border bg-transparent px-2 py-1.5 text-sm" />
      </label>
      <button
        type="button"
        className="rounded-md bg-pink-600 text-white px-3 py-1.5 text-xs"
        onClick={() => setRunning(true)}
      >
        Run multi-agent handoff
      </button>
      <div className="flex flex-wrap gap-2">
        {agents.map((a) => (
          <div
            key={a.id}
            className={`rounded-lg px-3 py-2 text-xs text-white ${a.color} ${
              path[path.length - 1] === a.id ? 'ring-2 ring-offset-2 ring-slate-900 dark:ring-white scale-105' : 'opacity-70'
            }`}
          >
            {a.label}
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Handoff path: {path.length ? path.join(' → ') : 'idle'} · Goal: “{goal}”
      </p>
    </div>
  )
}

/** Celery queue depth simulator */
export function CeleryQueueLab() {
  const [rate, setRate] = useState(8)
  const [workers, setWorkers] = useState(2)
  const [queue, setQueue] = useState(12)
  const [done, setDone] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setQueue((q) => Math.max(0, q + rate - workers * 3))
      setDone((d) => d + Math.min(workers * 3, rate + 5))
    }, 800)
    return () => clearInterval(t)
  }, [rate, workers])

  const healthy = queue < 40

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <div className="grid sm:grid-cols-2 gap-3 text-xs">
        <label>
          Ingest rate (docs/tick): {rate}
          <input type="range" min={1} max={20} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full" />
        </label>
        <label>
          Celery workers: {workers}
          <input type="range" min={1} max={10} value={workers} onChange={(e) => setWorkers(Number(e.target.value))} className="w-full" />
        </label>
      </div>
      <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <div className={`h-full transition-all ${healthy ? 'bg-emerald-600' : 'bg-red-500'}`} style={{ width: `${Math.min(100, queue)}%` }} />
      </div>
      <p className="text-sm">
        Queue depth <strong>{queue}</strong> · Processed ~<strong>{done}</strong>{' '}
        <span className={healthy ? 'text-teal-700' : 'text-red-600 font-semibold'}>
          {healthy ? '· Keeping up' : '· Backpressure — add workers or shed load'}
        </span>
      </p>
      <button type="button" className="rounded-md border px-3 py-1.5 text-xs" onClick={() => { setQueue(0); setDone(0) }}>
        Reset
      </button>
    </div>
  )
}

/** Field-level quality review board (generic eval practice) */
export function QualityReviewLab() {
  const [items, setItems] = useState([
    { id: 1, field: 'invoice_total', value: '€12,400', conf: 0.61, status: 'pending' as 'pending' | 'approved' | 'rejected' },
    { id: 2, field: 'vendor_name', value: 'Acme GmbH', conf: 0.94, status: 'pending' as const },
    { id: 3, field: 'po_number', value: 'PO-8891', conf: 0.72, status: 'pending' as const },
  ])

  const act = (id: number, status: 'approved' | 'rejected') => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, status } : it)))
  }

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <p className="text-sm text-slate-600 dark:text-slate-400">Low-confidence fields should be checked before results go out.</p>
      {items.map((it) => (
        <div key={it.id} className="flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm">
          <div className="flex-1 min-w-[140px]">
            <div className="font-semibold">{it.field}</div>
            <div className="text-xs text-slate-500">{it.value} · conf {(it.conf * 100).toFixed(0)}%</div>
          </div>
          {it.status === 'pending' ? (
            <div className="flex gap-2">
              <button type="button" onClick={() => act(it.id, 'approved')} className="rounded-md bg-teal-700 text-white px-2 py-1 text-xs">
                Approve
              </button>
              <button type="button" onClick={() => act(it.id, 'rejected')} className="rounded-md border border-red-400 text-red-600 px-2 py-1 text-xs">
                Reject
              </button>
            </div>
          ) : (
            <span className={`text-xs font-semibold uppercase ${it.status === 'approved' ? 'text-teal-700' : 'text-red-600'}`}>
              {it.status}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

/** AES toy — scramble/unscramble demo (teaching only) */
export function EncryptionLab() {
  const [plain, setPlain] = useState('contract.pdf bytes…')
  const [key, setKey] = useState('vault-key')
  const cipher = useMemo(() => {
    const out: number[] = []
    for (let i = 0; i < plain.length; i++) {
      out.push(plain.charCodeAt(i) ^ key.charCodeAt(i % key.length) ^ 0x5a)
    }
    return out.map((n) => n.toString(16).padStart(2, '0')).join('')
  }, [plain, key])

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <p className="text-xs text-slate-500">Teaching demo only (XOR), inspired by BitVault’s encrypt-before-store idea — not real AES.</p>
      <label className="block text-xs">
        Plaintext
        <input value={plain} onChange={(e) => setPlain(e.target.value)} className="mt-1 w-full rounded-md border bg-transparent px-2 py-1.5" />
      </label>
      <label className="block text-xs">
        Password-derived key material
        <input value={key} onChange={(e) => setKey(e.target.value)} className="mt-1 w-full rounded-md border bg-transparent px-2 py-1.5" />
      </label>
      <pre className="text-xs rounded-md bg-slate-100 dark:bg-slate-800 p-3 overflow-auto break-all">{cipher || '—'}</pre>
    </div>
  )
}

/** Rate limiter for multi-tenant SaaS */
export function RateLimitLab() {
  const [limit, setLimit] = useState(5)
  const [counts, setCounts] = useState({ a: 0, b: 0 })
  const [log, setLog] = useState<string[]>([])

  const hit = (tenant: 'a' | 'b') => {
    setCounts((c) => {
      const next = c[tenant] + 1
      const ok = next <= limit
      setLog((l) => [`tenant-${tenant}: ${ok ? 'OK' : '429 Too Many Requests'} (${next}/${limit})`, ...l].slice(0, 6))
      return { ...c, [tenant]: next }
    })
  }

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <label className="block text-xs">
        Per-tenant limit: {limit}
        <input type="range" min={2} max={12} value={limit} onChange={(e) => setLimit(Number(e.target.value))} className="w-full" />
      </label>
      <div className="flex gap-2">
        <button type="button" onClick={() => hit('a')} className="rounded-md bg-blue-600 text-white px-3 py-1.5 text-xs">
          Call as tenant-A ({counts.a})
        </button>
        <button type="button" onClick={() => hit('b')} className="rounded-md bg-indigo-600 text-white px-3 py-1.5 text-xs">
          Call as tenant-B ({counts.b})
        </button>
        <button type="button" onClick={() => { setCounts({ a: 0, b: 0 }); setLog([]) }} className="rounded-md border px-3 py-1.5 text-xs">
          Reset window
        </button>
      </div>
      <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
        {log.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  )
}

/** Wallet / ledger demo */
export function WalletLab() {
  const [balance, setBalance] = useState(500)
  const [log, setLog] = useState<string[]>(['wallet opened · ₹500'])

  const charge = (mins: number) => {
    const cost = mins * 20
    if (balance < cost) {
      setLog((l) => [`DENIED · need ₹${cost}, have ₹${balance}`, ...l].slice(0, 8))
      return
    }
    setBalance((b) => b - cost)
    setLog((l) => [`session ${mins}m · −₹${cost} · ledger ok`, ...l].slice(0, 8))
  }

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <p className="text-2xl font-semibold tabular-nums">₹{balance}</p>
      <p className="text-xs text-slate-500">HNL-style pay-per-minute: wallet must cover the session before connect.</p>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => charge(1)} className="rounded-md bg-emerald-700 text-white px-3 py-1.5 text-xs">1 min (₹20)</button>
        <button type="button" onClick={() => charge(5)} className="rounded-md bg-emerald-700 text-white px-3 py-1.5 text-xs">5 min (₹100)</button>
        <button type="button" onClick={() => { setBalance((b) => b + 200); setLog((l) => ['top-up +₹200', ...l].slice(0, 8)) }} className="rounded-md border px-3 py-1.5 text-xs">
          Top up ₹200
        </button>
      </div>
      <ul className="text-xs space-y-1">{log.map((line, i) => <li key={i}>{line}</li>)}</ul>
    </div>
  )
}

/** API status playground */
export function ApiDesignLab() {
  const [method, setMethod] = useState('POST')
  const [path, setPath] = useState('/api/documents/')
  const [exists, setExists] = useState(false)
  const status = useMemo(() => {
    if (method === 'GET' && path.includes('999')) return { code: 404, why: 'Resource not found' }
    if (method === 'POST' && exists) return { code: 409, why: 'Conflict — duplicate idempotency key' }
    if (method === 'POST') return { code: 201, why: 'Created' }
    if (method === 'GET') return { code: 200, why: 'OK with paginated results' }
    if (method === 'DELETE') return { code: 204, why: 'No Content' }
    return { code: 405, why: 'Method not allowed' }
  }, [method, path, exists])

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <div className="flex flex-wrap gap-2">
        {['GET', 'POST', 'DELETE'].map((m) => (
          <button key={m} type="button" onClick={() => setMethod(m)} className={`rounded-md px-3 py-1.5 text-xs ${method === m ? 'bg-slate-900 text-white dark:bg-teal-700' : 'border'}`}>
            {m}
          </button>
        ))}
      </div>
      <input value={path} onChange={(e) => setPath(e.target.value)} className="w-full rounded-md border bg-transparent px-2 py-1.5 font-mono text-sm" />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={exists} onChange={(e) => setExists(e.target.checked)} />
        Simulate duplicate create
      </label>
      <p className="text-lg font-semibold">
        HTTP {status.code} <span className="text-sm font-normal text-slate-500">— {status.why}</span>
      </p>
    </div>
  )
}

/** HMAC toy */
export function HmacLab() {
  const [secret, setSecret] = useState('supedio-dev')
  const [payload, setPayload] = useState('license:tenant-9:heartbeat')
  const [tamper, setTamper] = useState(false)

  const hash = useMemo(() => {
    // Lightweight demo hash — not cryptographic; teaches the idea only
    const s = `${secret}|${payload}`
    let h = 2166136261
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i)
      h = Math.imul(h, 16777619)
    }
    return (h >>> 0).toString(16).padStart(8, '0')
  }, [secret, payload])

  const presented = tamper ? hash.split('').reverse().join('').slice(0, 8) : hash
  const valid = presented === hash

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <label className="block text-xs">
        Secret
        <input value={secret} onChange={(e) => setSecret(e.target.value)} className="mt-1 w-full rounded-md border bg-transparent px-2 py-1.5" />
      </label>
      <label className="block text-xs">
        Payload
        <input value={payload} onChange={(e) => setPayload(e.target.value)} className="mt-1 w-full rounded-md border bg-transparent px-2 py-1.5" />
      </label>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={tamper} onChange={(e) => setTamper(e.target.checked)} />
        Tamper with signature
      </label>
      <p className="font-mono text-sm">sig: {presented}</p>
      <p className={`text-sm font-semibold ${valid ? 'text-teal-700' : 'text-red-600'}`}>
        {valid ? 'Signature valid — license heartbeat accepted' : 'Signature invalid — reject & audit'}
      </p>
    </div>
  )
}

/** Simple quiz */
export function QuizLab({
  questions,
}: {
  questions: { q: string; options: string[]; answer: number; explain: string }[]
}) {
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const item = questions[idx]

  if (!item) return null

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4 space-y-3">
      <p className="text-xs text-slate-500">
        Question {idx + 1} / {questions.length}
      </p>
      <h3 className="font-semibold">{item.q}</h3>
      <div className="space-y-2">
        {item.options.map((opt, i) => {
          const show = picked !== null
          const correct = i === item.answer
          return (
            <button
              key={opt}
              type="button"
              disabled={picked !== null}
              onClick={() => setPicked(i)}
              className={`block w-full text-left rounded-md border px-3 py-2 text-sm ${
                show && correct
                  ? 'border-teal-600 bg-teal-600/15'
                  : show && picked === i
                    ? 'border-red-500 bg-red-500/10'
                    : 'border-slate-300 dark:border-slate-700'
              }`}
            >
              {opt}
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <p className="text-sm text-slate-700 dark:text-slate-300">{item.explain}</p>
      )}
      <button
        type="button"
        className="rounded-md border px-3 py-1.5 text-xs"
        onClick={() => {
          setPicked(null)
          setIdx((i) => (i + 1) % questions.length)
        }}
      >
        Next
      </button>
    </div>
  )
}

/** Compare two approaches */
export function CompareLab({
  left,
  right,
}: {
  left: { title: string; points: string[] }
  right: { title: string; points: string[] }
}) {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {[left, right].map((side) => (
        <div key={side.title} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-4">
          <h3 className="font-semibold mb-2">{side.title}</h3>
          <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
            {side.points.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-teal-700">▸</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function pickLab(kind: LabKind, track: Track, sub: Subtopic) {
  const id = `${track.id}:${sub.id}`

  if (kind === 'quiz') {
    return (
      <QuizLab
        questions={[
          {
            q: `In ${sub.title}, what matters most in production?`,
            options: sub.concepts.length >= 3
              ? [sub.concepts[0], 'Ignoring failure modes', sub.concepts[1] || 'Metrics', 'Hardcoding secrets']
              : ['Measurable quality gates', 'Ignoring failure modes', 'No observability', 'Hardcoding secrets'],
            answer: 0,
            explain: `Focus on: ${sub.concepts.join(', ')}.`,
          },
          {
            q: 'What should you do before shipping an AI or infra change?',
            options: ['Eval / probe in a safe environment', 'Push straight to prod', 'Disable logs', 'Skip runbooks'],
            answer: 0,
            explain: 'Evals, probes, and runbooks turn experience into reliable delivery.',
          },
        ]}
      />
    )
  }

  if (track.id === 'cloud' && sub.id === 'vertical-horizontal') return <ScalingLab />
  if (track.id === 'cloud' && (sub.id === 'serverless' || sub.id === 'onprem' || sub.id === 'cicd')) {
    return (
      <PipelineLab
        title={sub.title}
        stages={[
          { id: '1', label: 'Build image', detail: 'CI builds with Kaniko/Docker and tags an immutable digest.' },
          { id: '2', label: 'Push ECR', detail: 'Promote the artifact to Amazon ECR (or a private registry).' },
          { id: '3', label: 'Deploy Fargate / Compose', detail: 'Cloud path: EKS Fargate. On-prem path: Docker Compose + runbooks.' },
          { id: '4', label: 'Wire secrets', detail: 'IRSA + Secrets Manager in cloud; customer-managed secrets on-prem.' },
          { id: '5', label: 'Verify', detail: 'Health checks, ALB/ingress smoke tests, and ops checklist.' },
        ]}
      />
    )
  }
  if (track.id === 'rag' && (sub.id === 'vector-search' || sub.id === 'embeddings')) return <VectorSearchLab />
  if (track.id === 'rag' && sub.id === 'chunking') return <ChunkingLab />
  if (track.id === 'rag' && (sub.id === 'retrieval' || sub.id === 'ocr-ingest' || sub.id === 'generation')) {
    return (
      <PipelineLab
        title="RAG production path"
        stages={[
          { id: 'ingest', label: 'Ingest', detail: 'PDF/image/Word/CSV → OCR + normalization (Document Similarity Engine pattern).' },
          { id: 'chunk', label: 'Chunk', detail: 'Split with overlap so retrieval keeps local context.' },
          { id: 'embed', label: 'Embed', detail: 'Write dense vectors into pgvector / Pinecone with metadata filters.' },
          { id: 'retrieve', label: 'Retrieve', detail: 'Top-k + optional hybrid BM25; target sub-200ms on warm corpora.' },
          { id: 'generate', label: 'Generate', detail: 'Grounded prompt with citations; refuse when context is thin.' },
          { id: 'eval', label: 'Eval gate', detail: 'Faithfulness / precision checks before client delivery.' },
        ]}
      />
    )
  }
  if (track.id === 'system-design' && sub.id === 'load-balancing') return <LoadBalancerLab />
  if (track.id === 'system-design' && sub.id === 'caching') return <CacheLab />
  if (track.id === 'system-design' && (sub.id === 'queues' || sub.id === 'case-document-saas')) {
    return (
      <PipelineLab
        title="Document SaaS flow"
        stages={[
          { id: 'in', label: 'Ingest', detail: 'Files arrive via upload, SFTP, or email channels.' },
          { id: 'q', label: 'Queue', detail: 'Celery/Redis absorbs bursts — 1,000+ docs/day without blocking APIs.' },
          { id: 'ai', label: 'Extract', detail: 'LLM/OCR pipelines produce structured key-values.' },
          { id: 'review', label: 'Review', detail: 'Low-confidence fields get checked; edge cases become acceptance rules.' },
          { id: 'eval', label: 'Eval gate', detail: 'AI evals block bad extractions before delivery.' },
          { id: 'out', label: 'Deliver', detail: 'SAP ERP, Microsoft Graph, SFTP/FTP, SMTP — customer channels.' },
        ]}
      />
    )
  }
  if (track.id === 'system-design' && sub.id === 'cap-consistency') {
    return (
      <CompareLab
        left={{
          title: 'Strong consistency',
          points: ['Linearizable reads', 'Higher coordination cost', 'Great for ledgers & licenses', 'Can raise latency under partition'],
        }}
        right={{
          title: 'Eventual consistency',
          points: ['Higher availability', 'Conflict strategies needed', 'Fine for feeds & caches', 'Idempotent writes still required'],
        }}
      />
    )
  }
  if (track.id === 'docker' && (sub.id === 'images' || sub.id === 'best-practices' || sub.id === 'registries')) return <DockerLayersLab />
  if (track.id === 'docker' && sub.id === 'compose') {
    return (
      <PipelineLab
        title="Compose on-prem bundle"
        stages={[
          { id: 'a', label: 'App service', detail: 'API container (Django/FastAPI) with healthcheck.' },
          { id: 'b', label: 'Worker', detail: 'Celery worker sharing the image, different command.' },
          { id: 'c', label: 'Redis / Postgres', detail: 'Stateful services with volumes and backups called out in the runbook.' },
          { id: 'd', label: 'Install script', detail: 'Customer-facing install + restart + backup steps for on-prem installs.' },
        ]}
      />
    )
  }
  if (track.id === 'kubernetes' && (sub.id === 'pods-deployments' || sub.id === 'k8s-mental-model')) return <K8sReplicasLab />
  if (track.id === 'kubernetes' && (sub.id === 'eks-fargate' || sub.id === 'services-ingress' || sub.id === 'config-secrets')) {
    return (
      <PipelineLab
        title="EKS Fargate path"
        stages={[
          { id: '1', label: 'Push ECR', detail: 'Image lands in ECR with immutable tag/digest.' },
          { id: '2', label: 'Deployment', detail: 'Desired replicas; rolling update + readiness probes.' },
          { id: '3', label: 'Service / ALB', detail: 'Expose via Service + Ingress/ALB patterns.' },
          { id: '4', label: 'IRSA secrets', detail: 'Pods assume IAM roles; Secrets Manager injects runtime secrets.' },
          { id: '5', label: 'Observe', detail: 'Logs/metrics; storage limits unique to Fargate called out in runbooks.' },
        ]}
      />
    )
  }
  if (track.id === 'agentic-ai' && sub.id === 'tool-use') return <ToolCallLab />
  if (track.id === 'agentic-ai' && sub.id === 'multi-agent') return <MultiAgentLab />
  if (track.id === 'agentic-ai') return <AgentLoopLab />
  if (track.id === 'security' && sub.id === 'hmac-licensing') return <HmacLab />
  if (track.id === 'security' && sub.id === 'encryption') return <EncryptionLab />
  if (track.id === 'security' && sub.id === 'enterprise-channels') {
    return (
      <PipelineLab
        title="Enterprise delivery channels"
        stages={[
          { id: 'sap', label: 'SAP ERP', detail: 'Push structured results into ERP posting flows.' },
          { id: 'graph', label: 'Microsoft Graph', detail: 'Email-based delivery and mailbox automation.' },
          { id: 'sftp', label: 'SFTP/FTP', detail: 'File drops for partners who live on batch exchanges.' },
          { id: 'smtp', label: 'SMTP', detail: 'Human-readable notifications and fallbacks.' },
        ]}
      />
    )
  }
  if (track.id === 'system-design' && sub.id === 'multi-tenant') return <RateLimitLab />
  if (track.id === 'system-design' && sub.id === 'api-design') return <ApiDesignLab />
  if (track.id === 'system-design' && sub.id === 'databases') {
    return (
      <CompareLab
        left={{
          title: 'Row store (Postgres)',
          points: ['Transactions / joins', 'B-tree indexes', 'Great for SaaS source of truth', 'Add pgvector when you need similarity'],
        }}
        right={{
          title: 'Vector index',
          points: ['ANN search (HNSW/IVF)', 'Metadata filters', 'Pinecone or pgvector', 'Pair with hybrid BM25 for keywords'],
        }}
      />
    )
  }
  if (track.id === 'backend' && sub.id === 'celery-redis') return <CeleryQueueLab />
  if (track.id === 'backend' && sub.id === 'auth-payments') return <WalletLab />
  if (track.id === 'backend' && sub.id === 'python-apis') {
    return (
      <CompareLab
        left={{
          title: 'Django / DRF',
          points: ['Batteries-included admin', 'ORM + migrations', 'Great for document SaaS monoliths', 'DRF serializers + permissions'],
        }}
        right={{
          title: 'FastAPI',
          points: ['Native async', 'OpenAPI from types', 'Lean microservices / AI sidecars', 'HNL & video-factory style APIs'],
        }}
      />
    )
  }
  if (track.id === 'backend' && sub.id === 'realtime') {
    return (
      <PipelineLab
        title="Realtime feed loop"
        stages={[
          { id: '1', label: 'Connect', detail: 'Client opens WebSocket (Binance-style market feed pattern).' },
          { id: '2', label: 'Subscribe', detail: 'Subscribe to channels; server fans out via pub/sub (Redis).' },
          { id: '3', label: 'Tick', detail: 'Messages stream in; UI updates without polling.' },
          { id: '4', label: 'Reconnect', detail: 'Backoff + resume cursors when the socket drops.' },
        ]}
      />
    )
  }
  if (track.id === 'ai-ops' && sub.id === 'extraction-quality') return <QualityReviewLab />
  if (track.id === 'ai-ops') {
    return (
      <PipelineLab
        title="Eval gate flow"
        stages={[
          { id: '1', label: 'Model output', detail: 'Extraction or generation candidate is produced.' },
          { id: '2', label: 'Auto eval', detail: 'Score against golden fields / faithfulness thresholds.' },
          { id: '3', label: 'Review queue', detail: 'Failures and low-confidence items get checked before release.' },
          { id: '4', label: 'Accept / reject', detail: 'Accepted results are finalized; rejects go back for fix.' },
          { id: '5', label: 'Deliver / retain', detail: 'Channel delivery, then retention/export/purge policy.' },
        ]}
      />
    )
  }
  if (track.id === 'cloud' && sub.id === 'edge') {
    return (
      <CompareLab
        left={{
          title: 'Origin (AWS region)',
          points: ['Full Postgres / Celery', 'Heavier compute', 'Best for document pipelines', 'Higher round-trip from some users'],
        }}
        right={{
          title: 'Edge (Workers / R2)',
          points: ['Low latency near users', 'Great for media (R2)', 'D1 for light state', 'Hloop Connect media path'],
        }}
      />
    )
  }
  if (track.id === 'docker' && sub.id === 'containers') {
    return (
      <PipelineLab
        title="Container lifecycle"
        stages={[
          { id: '1', label: 'Image', detail: 'Immutable filesystem layers from a Dockerfile.' },
          { id: '2', label: 'Create', detail: 'Namespaces + cgroups wrap a process with env, ports, mounts.' },
          { id: '3', label: 'Run', detail: 'Map ports, inject secrets via env/files — never bake them into layers.' },
          { id: '4', label: 'Health', detail: 'HEALTHCHECK / orchestrator probes decide restart vs traffic.' },
        ]}
      />
    )
  }
  if (track.id === 'kubernetes' && sub.id === 'helm-kubectl') {
    return (
      <QuizLab
        questions={[
          {
            q: 'What does `kubectl rollout undo deploy/api` do?',
            options: ['Rolls back to the previous ReplicaSet', 'Deletes the cluster', 'Builds a new image', 'Opens a shell'],
            answer: 0,
            explain: 'Deployments keep revision history — undo restores the prior template.',
          },
          {
            q: 'Why use Helm values overlays?',
            options: ['Same chart, different env config', 'To avoid Kubernetes entirely', 'To store secrets in git plaintext', 'To disable health probes'],
            answer: 0,
            explain: 'Charts + values let staging/prod share templates safely.',
          },
        ]}
      />
    )
  }
  if (track.id === 'rag' && sub.id === 'rag-overview') {
    return (
      <CompareLab
        left={{
          title: 'Prompt-only LLM',
          points: ['Fast to try', 'Hallucinates on private data', 'No citations', 'Stale knowledge cutoff'],
        }}
        right={{
          title: 'RAG',
          points: ['Grounds answers in your docs', 'Needs chunking + retrieval', 'Measurable with evals', 'How Document Similarity engines work'],
        }}
      />
    )
  }

  if (kind === 'compare') {
    return (
      <CompareLab
        left={{ title: `${sub.title} — choose A`, points: sub.concepts.slice(0, Math.ceil(sub.concepts.length / 2)) }}
        right={{ title: `${sub.title} — choose B`, points: sub.concepts.slice(Math.ceil(sub.concepts.length / 2)) }}
      />
    )
  }

  if (kind === 'pipeline' || kind === 'simulator' || kind === 'diagram' || kind === 'sandbox') {
    const stages = sub.concepts.map((c, i) => ({
      id: `${id}-${i}`,
      label: c,
      detail: `${sub.summary} Explore “${c}” as a first-class step — this mirrors how the topic shows up when shipping real systems.`,
    }))
    return <PipelineLab stages={stages} title={`${sub.title} lab`} />
  }

  return <PipelineLab stages={sub.concepts.map((c, i) => ({ id: `${i}`, label: c, detail: sub.summary }))} />
}
