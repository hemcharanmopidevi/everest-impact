import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SupportFab } from "@/components/support-fab";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Everest Coaching Point — SSC CGL/CHSL 2027 · August 2026 Live Batch",
  description:
    "Dilsukhnagar, Hyderabad · Since 2015. Complete Preparation from Basics to Advanced. Online & Offline, 1200+ Teaching Hours, Guinness Record Holder Faculty, 18 Own Published Books, 2000+ Selections.",
  icons: {
    icon: "/favicon.ico",
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
            <SupportFab />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
