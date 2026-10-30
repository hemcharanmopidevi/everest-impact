"use client";

export function AnnouncementBar() {
  const tickerItems = [
    {
      prefix: "★",
      text: "EVEREST COACHING POINT — South India's trusted exclusive SSC coaching institute, Dilsukhnagar, Hyderabad · Since 2015",
      highlight: true,
    },
    {
      prefix: "🏆",
      text: "2000+ Final Selections via SSC — more than 10% of Southern Region SSC CGL Selections",
      highlight: true,
    },
    {
      prefix: "⚡",
      text: "August 2026 Live Batch — 3 Days FREE Demo Classes · Admissions Open",
      highlight: false,
    },
    {
      prefix: "📚",
      text: "Guinness World Record Holder Faculty · 18 Own Published Books by Directors",
      highlight: false,
    },
    {
      prefix: "📞",
      text: "Admissions Helpline: 9030030185 / 9030030186",
      highlight: false,
    },
  ];

  return (
    <div className="relative z-50 w-full overflow-hidden bg-[#071126] border-b border-white/10 text-white select-none">
      <div className="flex items-center h-8 sm:h-8.5">
        {/* Left Badge: ★ EVEREST */}
        <div className="relative z-20 flex h-full items-center bg-[#f5a623] px-3 sm:px-4 shrink-0 shadow-md">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-950 flex items-center gap-1">
            <span>★</span>
            <span>EVEREST</span>
          </span>
        </div>

        {/* Marquee Ticker Track */}
        <div className="relative flex-1 overflow-hidden h-full flex items-center">
          {/* Subtle gradient edge fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#071126] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#071126] to-transparent z-10" />

          <div className="flex min-w-max animate-scroll-x items-center py-1">
            {/* Set 1 */}
            <div className="flex items-center gap-8 sm:gap-12 px-4 shrink-0">
              {tickerItems.map((item, idx) => (
                <div
                  key={`item-1-${idx}`}
                  className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold whitespace-nowrap"
                >
                  <span className="text-amber-400">{item.prefix}</span>
                  <span className={item.highlight ? "text-white font-bold" : "text-slate-200"}>
                    {item.text}
                  </span>
                  <span className="text-slate-500 ml-4 sm:ml-6">✦</span>
                </div>
              ))}
            </div>

            {/* Set 2 (for seamless loop) */}
            <div className="flex items-center gap-8 sm:gap-12 px-4 shrink-0" aria-hidden="true">
              {tickerItems.map((item, idx) => (
                <div
                  key={`item-2-${idx}`}
                  className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold whitespace-nowrap"
                >
                  <span className="text-amber-400">{item.prefix}</span>
                  <span className={item.highlight ? "text-white font-bold" : "text-slate-200"}>
                    {item.text}
                  </span>
                  <span className="text-slate-500 ml-4 sm:ml-6">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
