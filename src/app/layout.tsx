import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PETROVIEW | Prabhat - Petroleum Engineer",
  description: "A magazine-style portfolio showcasing Prabhat's journey in Petroleum Engineering from RGIPT",
  keywords: ["petroleum engineering", "RGIPT", "portfolio", "Prabhat", "oil and gas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
