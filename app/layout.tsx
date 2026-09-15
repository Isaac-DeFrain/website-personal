import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const url = "https://isaacdefrain.com";
const siteDescription =
  "Software engineer Isaac DeFrain - blog, CV, and projects.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Isaac DeFrain",
  description: siteDescription,
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Isaac DeFrain",
    "Isaac",
    "DeFrain",
    "website",
    "portfolio",
    "developer",
    "engineer",
    "software",
    "software engineer",
    "software developer",
  ],
  authors: [{ name: "Isaac DeFrain", url }],
  creator: "Isaac DeFrain",
  publisher: "Isaac DeFrain",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Isaac DeFrain",
    description: siteDescription,
    type: "website",
    url,
    siteName: "Isaac DeFrain",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Isaac DeFrain",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
