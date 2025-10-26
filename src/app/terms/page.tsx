import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-[#233161]/10 to-[#e9b95c]/5">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6 max-w-4xl">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-foreground">
                  Terms and Conditions
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Terms of service for using SITANA Global platform
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Agreement to Terms
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  By accessing and using SITANA Global&apos;s platform, you agree to be bound by 
                  these Terms and Conditions. These terms govern your use of our telemedicine 
                  services, healthcare consultations, and related features.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Service Usage
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  SITANA Global provides telemedicine services to connect patients with certified 
                  healthcare providers. Our services are designed to complement, not replace, 
                  traditional in-person medical care.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Emergency Services
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  SITANA Global is not intended for emergency medical situations. If you are 
                  experiencing a medical emergency, please contact your local emergency services 
                  immediately.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Professional Responsibility
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Healthcare providers on our platform are independent professionals responsible 
                  for their own medical advice and treatment decisions. SITANA Global facilitates 
                  connections but does not provide medical advice directly.
                </p>
              </div>

              <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-[#233161]/10 to-[#e9b95c]/5 border border-[#233161]/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Complete Terms Coming Soon
                </h3>
                <p className="text-muted-foreground text-lg">
                  We are currently finalizing our comprehensive Terms and Conditions. This page 
                  will be updated with detailed information about user obligations, service 
                  limitations, liability, and other important legal terms.
                </p>
                <p className="text-muted-foreground text-lg mt-4">
                  For any questions regarding our terms, please contact us at{" "}
                  <a 
                    href="mailto:legal@sitanaglobal.com" 
                    className="text-[#233161] hover:underline font-medium"
                  >
                    legal@sitanaglobal.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

