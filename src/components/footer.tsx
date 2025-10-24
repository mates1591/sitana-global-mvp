import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t border-border py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Image 
              src="/SITANA GLOBAL-8.png" 
              alt="SITANA Global" 
              width={150} 
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Privacy-first telemedicine platform connecting healthcare across borders
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/features" className="hover:text-[#233161] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#233161] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#233161] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#233161] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/contact" className="hover:text-[#233161] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} SITANA Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

