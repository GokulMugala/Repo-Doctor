# Repo Doctor

AI-powered engineering health checks for GitHub repositories.

## Stack

- Next.js + TypeScript
- Tailwind CSS
- Lucide React
- GitHub REST API
- OpenAI API
- Zod structured validation

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Demo mode works without credentials. Live analysis requires `OPENAI_API_KEY`. `GITHUB_TOKEN` is optional for public repositories but recommended for higher GitHub API limits.

Never expose secrets through `NEXT_PUBLIC_*` variables.

## Flow

1. Paste a GitHub repository URL or select Try Demo.
2. Repo Doctor validates the URL and gathers bounded repository context.
3. OpenAI returns a structured health report.
4. The dashboard shows scores, evidence-based findings, risks and a prioritized roadmap.
5. GitHub issue drafts are generated for review; issues are never created automatically.
