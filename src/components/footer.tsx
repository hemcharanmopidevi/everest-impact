import Link from "next/link";
import { brand } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="mb-3 text-lg font-bold text-white">{brand.name}</p>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">{brand.about}</p>
        </div>
        <div>
          <h6 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Legal</h6>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/legal/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/legal/refunds" className="hover:text-white">
                Refunds & Cancellation
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">
            Download App
          </h6>
          <p className="mb-4 text-sm text-slate-400">
            Live classes, mocks, and recorded courses on the go.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-lg bg-white/10 px-3 py-2 text-xs font-medium">
              Google Play
            </span>
            <span className="rounded-lg bg-white/10 px-3 py-2 text-xs font-medium">
              App Store
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
