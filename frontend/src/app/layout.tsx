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
  // Lock to the device's actual portrait width so the mobile shell
  // matches the viewport instead of the browser's default ~980px
  // desktop assumption. `interactiveWidget: "resizes-content"` keeps
  // the layout from getting shoved by the virtual keyboard when the
  // math popover or chat input is focused.
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  interactiveWidget: "resizes-content",
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
