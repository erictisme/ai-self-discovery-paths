import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"; // Ensure the path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AI Self Discovery Paths',
  description: 'A web app for self-discovery using AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
