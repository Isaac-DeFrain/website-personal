import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaac DeFrain",
  description: "Personal website of Isaac DeFrain",
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
