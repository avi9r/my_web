# Avinash Ranjan — Learning Portfolio (`my_web`)

Interactive portfolio that teaches from six years of production experience: DSA, system design, RAG, agentic AI, cloud scaling, Docker, Kubernetes, backend platform patterns, AI evals/HITL, and security integrations.

## Stack

- Vite + React 18 + React Router
- Tailwind CSS
- Lazy-loaded learn tracks (DSA ported from `dsa_master`)
- Vercel SPA deploy

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Routes

- `/` — promotional learning hub
- `/about` — bio, experience, resume
- `/contact`
- `/learn/dsa/*` — full DSA Master visual labs
- `/learn/:track/:lesson` — interactive lessons for other tracks

## Deploy

Push to `github.com/avi9r/my_web` — Vercel builds from `vercel.json` with SPA rewrites.
