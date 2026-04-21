import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "mochi",
  description: "7-day linear algebra & ODE review",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-5">{children}</main>
      </body>
    </html>
  );
}
