"use client";

import Link from "next/link";
import { Headphones, Sparkles, X } from "lucide-react";
import { useState } from "react";

export function SupportFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-64 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          <div className="bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
            Need help?
          </div>
          <div className="flex flex-col p-2">
            <Link
              href="/ai-doubt"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-muted"
            >
              <Sparkles className="size-4 text-primary" />
              Ask AI Doubt Solver
            </Link>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-muted"
            >
              <Headphones className="size-4 text-primary" />
              Contact support
            </Link>
          </div>
        </div>
      )}
      <button
        type="button"
        aria-label={open ? "Close support menu" : "Open support menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-105 hover:opacity-95"
      >
        {open ? <X className="size-6" /> : <Headphones className="size-6" />}
      </button>
    </div>
  );
}
