import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { TutorProvider } from "@/lib/tutor-context";
import { ProgressProvider } from "@/lib/progress-context";
import { ShellProvider } from "@/lib/shell-context";
import { ShellSwitch } from "@/components/ShellSwitch";

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
        <ShellProvider>
          <ProgressProvider>
            <TutorProvider>
              <ShellSwitch>{children}</ShellSwitch>
            </TutorProvider>
          </ProgressProvider>
        </ShellProvider>
      </body>
    </html>
  );
}
