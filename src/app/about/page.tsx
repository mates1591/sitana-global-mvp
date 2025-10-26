import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Heart, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
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
                  About SITANA Global
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Breaking down barriers in healthcare through technology,
                  compassion, and a commitment to privacy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-4xl">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                Vision
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Region-focused, patient-centred access to experts.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Care-coordinated locally, connected globally
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-8 mx-auto max-w-4xl">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center text-foreground">
                Mission
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  SITANA Global was founded on a simple yet powerful belief: quality healthcare should transcend geographical boundaries while respecting cultural diversity and individual privacy.
                </p>
                <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-[#233161] mt-1.5">•</span>
                    <span>Connect and match each patient to the right speciality and centre of care, locally or across borders, fulfilling every patient&apos;s right to the best healthcare they can afford.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#233161] mt-1.5">•</span>
                    <span>Bridge the gap in healthcare by shortening the time to the correct diagnosis and treatment through clinician-specialty-led navigation, doctor-to-doctor consultation, and institutional expert input—improving disease outcomes and enhancing quality of life.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#233161] mt-1.5">•</span>
                    <span>Reduce health inequity within and between regions through improved and grouped access to healthcare services, closing the equity gap.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#233161] mt-1.5">•</span>
                    <span>Strengthen Local Health Economies by partnering with hospitals and clinics to increase their capacity utilisation and reduce systemic waste.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#233161] mt-1.5">•</span>
                    <span>Ensure a safe and efficient journey to the world&apos;s leading Centres of Excellence when cross-border care is required, and patients&apos; centred choices.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#233161] mt-1.5">•</span>
                    <span>Uphold trust and security by strengthening the privacy and protection of digital healthcare, ensuring safe, culturally sensitive, and compliant data practices across all operations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Cards Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              <div className="grid gap-6">
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <Globe className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-foreground">Global Access</CardTitle>
                    <CardDescription>
                      Connecting healthcare providers and patients across continents,
                      making quality care accessible regardless of location.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <Shield className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-foreground">Privacy First</CardTitle>
                    <CardDescription>
                      Built from the ground up with privacy and security at the core,
                      ensuring your medical information stays protected.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div className="grid gap-6">
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <Heart className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-foreground">Patient-Centered</CardTitle>
                    <CardDescription>
                      Every feature designed with the patient experience in mind,
                      prioritizing ease of use and accessibility.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <MapPin className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-foreground">Region Focus</CardTitle>
                    <CardDescription>
                      Healthcare priorities differ by region; we design locally tailored care 
                      pathways and comply with each country&apos;s health and data laws.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-8 mx-auto max-w-4xl">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center text-foreground">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Sitana Global was founded from vast experience in clinical practice, public health, and quality healthcare, combined with a deep understanding of global health systems and the health economy—and from one simple observation: that access to quality care is not lacking because healthcare doesn&apos;t exist, but because barriers still stand in the way, and many can be overcome through technology.
                </p>
                <p>
                  Our founders, a diverse team of healthcare professionals and technologists, share a deep background in public health, global health systems, and the global health economy. They have witnessed firsthand the challenges of cross-border healthcare. They saw how language barriers prevented proper diagnoses, how geographical limitations denied access to specialists, and how privacy concerns kept people from seeking the care they needed.
                </p>
                <p>
                  SITANA Global is our answer to these challenges. We&apos;ve built a platform that respects privacy, celebrates diversity, and makes quality healthcare accessible to anyone with an internet connection. Our multilingual support, intelligent triage system, and secure video consultations are just the beginning.
                </p>
                <p>
                  Today, we&apos;re proud to connect patients with certified healthcare providers across borders. But our mission is far from complete. We&apos;re constantly innovating, listening to our users, and working towards a future where healthcare truly has no borders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-8 text-center bg-gradient-to-br from-[#233161]/10 to-[#e9b95c]/5 rounded-3xl p-12 md:p-16 border border-[#233161]/20">
              <div className="space-y-4 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  Join Us in Transforming Healthcare
                </h2>
                <p className="text-muted-foreground text-lg">
                  Be part of the movement towards accessible, secure, and
                  compassionate healthcare for all
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <Button asChild size="lg" className="bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg px-8">
                  <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Join the waitlist</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

