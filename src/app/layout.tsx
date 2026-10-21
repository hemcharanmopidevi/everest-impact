import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppDownloadBar } from "@/components/app-download-bar";
import { SupportFab } from "@/components/support-fab";
import { ThemeProvider } from "@/components/theme-provider";
import { brand } from "@/data/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: brand.name,
  description:
    "Best Institute for SSC CGL in Hyderabad. Live courses, recorded batches, and test series.",
  icons: {
    icon: brand.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <AppDownloadBar />
            <SupportFab />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
