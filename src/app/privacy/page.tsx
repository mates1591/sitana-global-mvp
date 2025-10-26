import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
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
                  Privacy Policy
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Your privacy and data security are our top priorities
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
                  Introduction
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  SITANA Global is committed to protecting your privacy and ensuring the security 
                  of your personal and medical information. This Privacy Policy outlines how we 
                  collect, use, and safeguard your data.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Data Protection
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We employ industry-leading security measures to protect your data. All medical 
                  information is encrypted and stored in compliance with international healthcare 
                  standards, including GDPR and HIPAA guidelines.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Your Rights
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  You have the right to access, modify, or delete your personal information at any 
                  time. You also have control over how your data is shared with healthcare providers.
                </p>
              </div>

              <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-[#233161]/10 to-[#e9b95c]/5 border border-[#233161]/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Complete Policy Coming Soon
                </h3>
                <p className="text-muted-foreground text-lg">
                  We are currently finalizing our comprehensive Privacy Policy. This page will be 
                  updated with detailed information about our data practices, your rights, and how 
                  we protect your information.
                </p>
                <p className="text-muted-foreground text-lg mt-4">
                  For any privacy-related questions, please contact us at{" "}
                  <a 
                    href="mailto:privacy@sitanaglobal.com" 
                    className="text-[#233161] hover:underline font-medium"
                  >
                    privacy@sitanaglobal.com
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

