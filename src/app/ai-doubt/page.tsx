"use client";

import { Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";

type Msg = { role: "user" | "assistant"; text: string };

const starter: Msg[] = [
  {
    role: "assistant",
    text: "Hi! I'm your Everest AI Doubt Solver. Ask me anything about SSC CGL, CHSL, GD, Quant, English, or Reasoning.",
  },
];

function mockAnswer(question: string) {
  const q = question.toLowerCase();
  if (q.includes("syllabus") || q.includes("tier")) {
    return "For SSC CGL Tier-I focus on Quant, Reasoning, English, and GA. Tier-II deepens Quant, English, Statistics/Finance depending on post. Start with previous-year papers + timed mocks.";
  }
  if (q.includes("math") || q.includes("quant") || q.includes("percentage")) {
    return "Break Quant into Arithmetic → Advanced Maths. Master percentages, ratio, SI/CI, time-work first. Then move to geometry and algebra. Aim for 25–30 timed questions daily.";
  }
  if (q.includes("english") || q.includes("grammar") || q.includes("vocab")) {
    return "For English: revise 150 golden grammar rules, read editorials 20 mins/day, and revise 20 vocab words with usage. Error spotting + cloze tests improve fastest with daily practice.";
  }
  return "Great question. Break it into concept → example → 10 practice Qs → one timed drill. If you share the exact topic (e.g. boats & streams), I can give a step-by-step plan.";
}

export default function AIDoubtPage() {
  const [messages, setMessages] = useState<Msg[]>(starter);
  const [input, setInput] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const next: Msg[] = [
      ...messages,
      { role: "user", text },
      { role: "assistant", text: mockAnswer(text) },
    ];
    setMessages(next);
    setInput("");
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col px-4 py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Sparkles className="size-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Doubt Solver</h1>
          <p className="text-sm text-muted-foreground">
            New feature — instant study help (demo responses, no API key needed).
          </p>
        </div>
      </div>

      <div className="mb-4 flex-1 space-y-3 rounded-2xl border border-border bg-card p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "user"
                ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm text-primary-foreground"
                : "mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-4 py-2.5 text-sm"
            }
          >
            {m.text}
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a doubt… e.g. How to prepare Tier-II Quant?"
          className="h-12 flex-1 rounded-xl border border-input bg-card px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button
          type="submit"
          className="rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground"
        >
          Ask
        </button>
      </form>
    </div>
  );
}
