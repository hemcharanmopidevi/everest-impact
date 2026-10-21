# Everest Impact Clone

A Next.js + Tailwind rebuild of the [everestimpact.live](https://everestimpact.live) learning storefront, plus new features.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- next-themes (dark mode)
- lucide-react icons

## New features (beyond the original)

- **AI Doubt Solver** (`/ai-doubt`) — chat-style study helper (mock answers)
- **Study Planner** (`/planner`) — local task list with progress
- **Wishlist** — heart icon on course cards, page at `/wishlist`
- **Result Dashboard** (`/dashboard`) — demo enrollment progress

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Course images/sliders use public ClassX CDN URLs for visual fidelity.
- Auth and payments are UI demos — wire Supabase/Clerk + Razorpay for production.
- This is an independent rebuild, not the private ClassX source.
