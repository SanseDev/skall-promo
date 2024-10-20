import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdAccountCircle } from "react-icons/md";
import { LineChart } from "lucide-react";
import { Input } from "@/components/ui/input";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-7xl flex justify-between items-center p-3 px-36 text-sm">

              <div className="flex gap-5 items-center font-semibold">
                <Link href="/">
                <Image
                  alt="Illustration du logo Skall Promo"
                  width={50}
                  height={50}
                  src="/assets/image/skp-logo.png"
                  className="rounded-2xl"
                />
                </Link>
              </div>
              <Link href="/sign-in">
                <Button variant="ghost" className="rounded-full">
                  <MdAccountCircle />
                </Button>
              </Link>
            </div>
          </nav>
          
          {children}

          <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
            <p>
              Powered by{" "}
              <a
                href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
              >
                Supabase
              </a>
            </p>
            <ThemeSwitcher />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
