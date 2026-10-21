import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download the app",
  description: "Get the EVERESTIMPACT app for Apple or Android.",
};

export default function DownloadAppPage({
  searchParams,
}: {
  searchParams: { platform?: string };
}) {
  const platform = searchParams.platform === "ios" ? "ios" : "android";

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold text-primary">EVERESTIMPACT</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Download the app</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Live classes, mocks, and recorded courses on your phone. Choose Apple or Android.
      </p>
      <div className="mt-8 grid w-full gap-3 sm:grid-cols-2">
        <Link
          href="/app?platform=ios"
          className={`rounded-2xl border px-5 py-4 text-left shadow-sm ${
            platform === "ios" ? "border-primary bg-primary text-primary-foreground" : "bg-card"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Apple</p>
          <p className="mt-1 text-lg font-bold">App Store</p>
        </Link>
        <Link
          href="/app?platform=android"
          className={`rounded-2xl border px-5 py-4 text-left shadow-sm ${
            platform === "android" ? "border-primary bg-primary text-primary-foreground" : "bg-card"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Android</p>
          <p className="mt-1 text-lg font-bold">Google Play</p>
        </Link>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        {platform === "ios"
          ? "This QR opens the Apple download. Store listing goes live with the published app."
          : "This QR opens the Android download. Store listing goes live with the published app."}
      </p>
    </section>
  );
}
