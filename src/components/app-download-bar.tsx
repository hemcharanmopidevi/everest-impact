"use client";

import { ChevronLeft, Smartphone } from "lucide-react";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Platform = "ios" | "android";

export function AppDownloadBar() {
  const [open, setOpen] = useState(false);
  const [platform, setPlatform] = useState<Platform>("android");
  const [qr, setQr] = useState("");

  useEffect(() => {
    const url = `${window.location.origin}/app?platform=${platform}`;
    QRCode.toDataURL(url, {
      margin: 1,
      width: 280,
      color: { dark: "#111827", light: "#ffffff" },
    }).then(setQr);
  }, [platform]);

  return (
    <div className="fixed bottom-5 left-3 z-50 flex items-center">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close app download" : "Open app download"}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "relative z-10 inline-flex items-center justify-center text-white shadow-lg",
          open
            ? "h-10 w-7 rounded-l-lg bg-[#ff4d6a]"
            : "h-11 gap-1.5 rounded-xl bg-gradient-to-b from-[#ff8a3d] to-[#ff3d78] px-2.5"
        )}
      >
        <ChevronLeft className="size-4" />
        {!open && <Smartphone className="size-4" />}
      </button>

      {open && (
        <div className="w-[158px] rounded-r-2xl rounded-bl-2xl bg-gradient-to-b from-[#ff8a3d] to-[#ff2f73] px-3 pb-3 pt-3 text-center text-white shadow-xl">
          <div className="mb-2 flex rounded-lg bg-white/20 p-0.5 text-[10px] font-semibold">
            <button
              type="button"
              onClick={() => setPlatform("ios")}
              className={cn(
                "flex-1 rounded-md py-1",
                platform === "ios" ? "bg-white text-[#e11d48]" : "text-white"
              )}
            >
              Apple
            </button>
            <button
              type="button"
              onClick={() => setPlatform("android")}
              className={cn(
                "flex-1 rounded-md py-1",
                platform === "android" ? "bg-white text-[#e11d48]" : "text-white"
              )}
            >
              Android
            </button>
          </div>
          <div className="rounded-xl bg-white p-1.5">
            {qr ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={qr} alt={`${platform === "ios" ? "Apple" : "Android"} app download QR code`} className="h-auto w-full" />
            ) : (
              <div className="aspect-square w-full animate-pulse bg-slate-100" />
            )}
          </div>
          <p className="mt-2 text-[13px] font-semibold leading-tight">Scan to Download App</p>
        </div>
      )}
    </div>
  );
}
