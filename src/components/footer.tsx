import Link from "next/link";
import { Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2d7a6e] text-white">
                <Activity className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg text-foreground">SITANA Global</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Privacy-first telemedicine platform connecting healthcare across borders
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/features" className="hover:text-[#2d7a6e] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#2d7a6e] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#2d7a6e] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#2d7a6e] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/contact" className="hover:text-[#2d7a6e] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#2d7a6e] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#2d7a6e] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#2d7a6e] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Languages</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>English</li>
              <li>العربية (Arabic)</li>
              <li>Français (French)</li>
              <li>Español (Spanish)</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} SITANA Global. All rights reserved.
          </p>
          <p className="mt-2">
            Healthcare that safely crosses borders — privacy-driven, multilingual, and accessible
          </p>
        </div>
      </div>
    </footer>
  );
}

