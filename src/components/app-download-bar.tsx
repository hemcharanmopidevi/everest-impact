"use client";

import { Download } from "lucide-react";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Platform = "android" | "ios";

export function AppDownloadBar() {
  const [platform, setPlatform] = useState<Platform>("android");
  const [qr, setQr] = useState("");

  useEffect(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://everestimpact.live";
    const url = `${origin}/app?platform=${platform}`;
    QRCode.toDataURL(url, {
      margin: 1,
      width: 220,
      color: { dark: "#0f172a", light: "#ffffff" },
    }).then(setQr).catch(() => {});
  }, [platform]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
      {/* Platform toggle */}
      <div className="mb-2.5 flex rounded-xl bg-black/40 p-1 text-[11px] font-semibold">
        <button
          type="button"
          onClick={() => setPlatform("android")}
          className={cn(
            "flex-1 rounded-lg py-1 transition-all",
            platform === "android"
              ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-sm"
              : "text-slate-400 hover:text-white"
          )}
        >
          Android
        </button>
        <button
          type="button"
          onClick={() => setPlatform("ios")}
          className={cn(
            "flex-1 rounded-lg py-1 transition-all",
            platform === "ios"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm"
              : "text-slate-400 hover:text-white"
          )}
        >
          Apple iOS
        </button>
      </div>

      <div className="flex items-center gap-3">
        {/* QR Code */}
        <div className="size-20 shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-md">
          {qr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={qr}
              alt={`${platform === "ios" ? "Apple" : "Android"} app download QR code`}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="h-full w-full animate-pulse bg-slate-200" />
          )}
        </div>

        {/* Store links */}
        <div className="flex flex-col gap-1.5 min-w-0">
          <p className="text-[11px] font-semibold text-white leading-tight">
            Scan to download EverestImpact
          </p>
          <a
            href={platform === "android" ? "https://play.google.com" : "https://apps.apple.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-slate-200 ring-1 ring-white/10 hover:bg-white/20 hover:text-white transition-colors"
          >
            <Download className="size-3" />
            <span>{platform === "android" ? "Google Play" : "App Store"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
