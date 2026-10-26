"use client";

import { Headphones, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SupportFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl glass-card shadow-2xl animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-black via-zinc-950 to-sky-950 border-b border-sky-500/20 px-5 py-4">
            <p className="text-sm font-bold text-white">Need help? 👋</p>
            <p className="text-xs text-sky-200">We&apos;re here to assist you</p>
          </div>
          {/* Options */}
          <div className="flex flex-col p-2">
            <a
              href="https://wa.me/919030030185?text=Hello%20Everest%20Coaching%20Point,%20I%20have%20an%20inquiry%20about%20SSC%202027%20batch."
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all hover:bg-emerald-500/10"
            >
              <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600">
                <MessageCircle className="size-4" />
              </div>
              <div>
                <p className="font-semibold text-foreground">WhatsApp Chat</p>
                <p className="text-xs text-muted-foreground">Instant counseling</p>
              </div>
            </a>
            <a
              href="tel:9030030185"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all hover:bg-sky-500/10"
            >
              <div className="flex size-9 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-500">
                <Headphones className="size-4" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Call 9030030185</p>
                <p className="text-xs text-muted-foreground">Front Office Desk</p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        type="button"
        aria-label={open ? "Close support menu" : "Open support menu"}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex size-14 items-center justify-center rounded-full shadow-2xl transition-all duration-500",
          open
            ? "bg-slate-800 text-white rotate-0"
            : "btn-premium pulse-glow rotate-0 hover:rotate-12"
        )}
      >
        {open ? <X className="size-6" /> : <Headphones className="size-6" />}
      </button>
    </div>
  );
}
