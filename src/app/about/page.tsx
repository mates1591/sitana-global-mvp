import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Heart, Shield, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

        {/* Mission Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  SITANA Global was founded on a simple yet powerful belief: quality
                  healthcare should transcend geographical boundaries while respecting
                  cultural diversity and individual privacy.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We&apos;re building a platform that connects patients with healthcare
                  providers across borders, ensuring that language, location, or access
                  limitations never stand in the way of receiving proper medical care.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our technology is designed to empower both patients and doctors,
                  creating a healthcare ecosystem that is accessible, secure, and
                  culturally sensitive.
                </p>
              </div>
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
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  Our Core Values
                </h2>
                <p className="text-muted-foreground text-lg">
                  The principles that guide everything we do
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-white border border-border">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161]/10">
                    <Shield className="w-8 h-8 text-[#233161]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Privacy & Security</h3>
                  <p className="text-muted-foreground">
                    We never compromise on data protection. Your medical information
                    is encrypted, secure, and always under your control.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-white border border-border">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161]/10">
                    <Users className="w-8 h-8 text-[#233161]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Inclusivity</h3>
                  <p className="text-muted-foreground">
                    Healthcare should be accessible to everyone, regardless of language,
                    location, or cultural background.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-white border border-border">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161]/10">
                    <Target className="w-8 h-8 text-[#233161]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Quality Care</h3>
                  <p className="text-muted-foreground">
                    We partner only with certified healthcare professionals committed
                    to providing exceptional medical care.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-white border border-border">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161]/10">
                    <Zap className="w-8 h-8 text-[#233161]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Innovation</h3>
                  <p className="text-muted-foreground">
                    Continuously improving our platform with cutting-edge technology
                    to enhance healthcare delivery.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-white border border-border">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161]/10">
                    <Heart className="w-8 h-8 text-[#233161]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Compassion</h3>
                  <p className="text-muted-foreground">
                    Every interaction is guided by empathy and understanding of the
                    human side of healthcare.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-white border border-border">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161]/10">
                    <Globe className="w-8 h-8 text-[#233161]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Global Perspective</h3>
                  <p className="text-muted-foreground">
                    Embracing diversity and understanding that healthcare needs vary
                    across cultures and regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-4xl">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center text-foreground">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  SITANA Global was born from a simple observation: millions of people
                  around the world lack access to quality healthcare, not because it
                  doesn&apos;t exist, but because of barriers that can be overcome with
                  technology.
                </p>
                <p>
                  Our founders, a diverse team of healthcare professionals and technologists,
                  experienced firsthand the challenges of cross-border healthcare. They saw
                  how language barriers prevented proper diagnoses, how geographical
                  limitations denied access to specialists, and how privacy concerns kept
                  people from seeking the care they needed.
                </p>
                <p>
                  SITANA Global is our answer to these challenges. We&apos;ve built a platform
                  that respects privacy, celebrates diversity, and makes quality healthcare
                  accessible to anyone with an internet connection. Our multilingual support,
                  intelligent triage system, and secure video consultations are just the
                  beginning.
                </p>
                <p>
                  Today, we&apos;re proud to connect patients with certified healthcare 
                  providers across borders. But our mission is far from complete. We&apos;re 
                  constantly innovating, listening to our users, and working towards a future 
                  where healthcare truly has no borders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa]">
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
                  <Link href="/sign-up?as=patient">Join the waitlist</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg px-8 border-2">
                  <Link href="/pricing">View Pricing</Link>
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

