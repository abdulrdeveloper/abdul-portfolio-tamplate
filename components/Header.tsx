"use client";

import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { Container } from "@/components/Layout";
import { navItems, siteConfig } from "@/utils/site";
import { cn } from "@/utils/helpers";

const brandFont = Space_Grotesk({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background bg-[url(/noise-compressed.png)] bg-size-[auto_90px] backdrop-blur-md">
      <Container className="flex min-h-14 flex-wrap items-center justify-between gap-x-2 gap-y-1 py-2 sm:py-0">
        <Link href="/" aria-label={`${siteConfig.handle} — Home`} className={`${brandFont.className} text-[15px] font-semibold tracking-[-0.045em] transition-opacity hover:opacity-70 sm:text-[17px]`}>
          {siteConfig.handle}
        </Link>
        <nav aria-label="Main navigation" className="flex items-center">
          <NavLinks />
          <div className="ml-1 border-l border-border pl-1"><ThemeToggle /></div>
        </nav>
      </Container>
    </header>
  );
}

function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {navItems.map((item) => {
        const active = !item.href.includes("#") && pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn("rounded-md px-2 py-1.5 text-xs transition-colors duration-150 sm:px-3 sm:text-sm",
              active
                ? "text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

function ThemeToggle() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Switch color theme"
        disabled
        className="mx-2 mt-0.5 rounded-md border border-border bg-transparent p-1.5 transition-[background-color,color]"
      >
        <div className="bg-muted animate-pulse h-3.75 w-3.75 rounded-[3px]" />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
      className="mx-2 mt-0.5 rounded-md border border-border bg-transparent p-1.5 transition-[background-color,color]"
    >
      {isDark ? (
        <Image
          src="/assets/icons/moon.svg"
          alt="moon"
          width={15}
          height={15}
          className="text-white"
        />
      ) : (
        <Image src="/assets/icons/sun.svg" alt="sun" width={15} height={15} />
      )}
    </button>
  );
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
