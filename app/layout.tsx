import type { Metadata } from "next";
import { Manrope, Hanken_Grotesk } from "next/font/google";
import { Header, ThemeProvider } from "@/components/Header";
import { Container } from "@/components/Layout";
import Link from "next/link";
import { siteConfig } from "@/utils/site";
import { JsonLd, getWebSiteSchema, getPersonSchema } from "@/utils/seo";
import "./globals.css";

const bodyFont = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Manrope({
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  icons: { icon: { url: "/favicon.png", type: "image/png" }, apple: "/favicon.png" },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{
      url: siteConfig.ogImage, width: 1200, height: 630,
      alt: siteConfig.title, type: "image/png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${headingFont.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Header />
          <main id="main-content" className="min-h-[calc(100dvh-3.5rem)]">{children}</main>
          <Footer />
        </ThemeProvider>
        <JsonLd data={getWebSiteSchema()} />
        <JsonLd data={getPersonSchema()} />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="mt-12 border-t border-border py-8">
      <Container className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <Link href="/" className="hover:text-foreground">Code is the conversation.</Link>
      </Container>
    </footer>
  );
}
