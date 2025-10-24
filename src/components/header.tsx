import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/SITANA GLOBAL-8.png" 
            alt="SITANA Global" 
            width={150} 
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-foreground hover:text-[#233161] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="text-sm font-medium text-foreground hover:text-[#233161] transition-colors"
          >
            Features
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground hover:text-[#233161] transition-colors"
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-foreground hover:text-[#233161] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground hover:text-[#233161] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground hover:text-[#233161] transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
            Get a demo
          </Button>
        </div>
      </div>
    </header>
  );
}

