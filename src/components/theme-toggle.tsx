"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-xl text-foreground hover:bg-accent",
          className
        )}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex size-10 items-center justify-center rounded-xl border border-border/50 bg-card/80 text-foreground shadow-sm transition-all duration-300 hover:bg-accent hover:shadow-md hover:scale-105",
        className
      )}
    >
      <Sun className={cn("size-5 transition-all duration-500", isDark ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute")} />
      <Moon className={cn("size-5 transition-all duration-500", isDark ? "-rotate-90 scale-0 absolute" : "rotate-0 scale-100")} />
    </button>
  );
}
