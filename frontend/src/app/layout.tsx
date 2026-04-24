import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Tutor } from "@/components/Tutor";
import { TutorProvider, TutorAwareMain } from "@/lib/tutor-context";
import { ProgressProvider } from "@/lib/progress-context";

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
        <ProgressProvider>
          <TutorProvider>
            <Header />
            <TutorAwareMain>{children}</TutorAwareMain>
            <Tutor />
          </TutorProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
