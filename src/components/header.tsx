import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Activity, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#2d7a6e] text-white">
            <Activity className="h-6 w-6" />
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:inline-block">
            SITANA Global
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-[#2d7a6e] hover:bg-[#25675d] text-white rounded-lg">
            Get a demo
          </Button>
        </div>
      </div>
    </header>
  );
}

