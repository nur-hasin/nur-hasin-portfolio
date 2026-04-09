import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nur Hasin Ahammad",
  description:
    "Full-Stack Developer & Software Engineering undergraduate at AIUB. Building scalable systems with React, Node.js, C++, and more.",
  keywords: [
    "software engineer",
    "full stack developer",
    "Bangladesh",
    "AIUB",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Nur Hasin Ahammad" }],
  openGraph: {
    title: "Nur Hasin Ahammad",
    description:
      "Portfolio of Nur Hasin Ahammad — Full-Stack Developer & Open Source Contributor",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
