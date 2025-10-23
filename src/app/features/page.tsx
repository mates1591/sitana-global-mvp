import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Languages,
  Activity,
  Video,
  FileText,
  Lock,
  Users,
  Clock,
  Shield,
  Globe,
  Smartphone,
  HeartPulse,
  CalendarClock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-[#2d7a6e]/10 to-[#4a9d8f]/5">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6 max-w-4xl">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-foreground">
                  Powerful Features for Modern Healthcare
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Discover how SITANA Global combines cutting-edge technology with
                  human-centered design to deliver exceptional healthcare experiences
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  Core Features
                </h2>
                <p className="text-muted-foreground text-lg">
                  Everything you need for comprehensive telemedicine care
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2d7a6e]/10 mb-3">
                      <Languages className="w-6 h-6 text-[#2d7a6e]" />
                    </div>
                    <CardTitle className="text-foreground">Multilingual Platform</CardTitle>
                    <CardDescription>
                      Register and consult in your preferred language — English, Arabic,
                      French, or Spanish. Live subtitles bridge language gaps during
                      consultations, ensuring clear communication regardless of language barriers.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2d7a6e]/10 mb-3">
                      <Activity className="w-6 h-6 text-[#2d7a6e]" />
                    </div>
                    <CardTitle className="text-foreground">Smart Triage System</CardTitle>
                    <CardDescription>
                      Complete a short triage form and instantly know whether your case
                      requires urgent care or can proceed to online consultation. Our AI-assisted
                      system helps prioritize care based on medical urgency.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2d7a6e]/10 mb-3">
                      <Video className="w-6 h-6 text-[#2d7a6e]" />
                    </div>
                    <CardTitle className="text-foreground">Secure Video Consultations</CardTitle>
                    <CardDescription>
                      Book remote sessions with certified doctors. All communication
                      remains private and encrypted throughout the consultation using
                      enterprise-grade security protocols.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2d7a6e]/10 mb-3">
                      <FileText className="w-6 h-6 text-[#2d7a6e]" />
                    </div>
                    <CardTitle className="text-foreground">Digital Clinic Letters</CardTitle>
                    <CardDescription>
                      After each session, receive a comprehensive digital clinic letter,
                      securely stored for your review and future reference. Share with
                      other healthcare providers when needed.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2d7a6e]/10 mb-3">
                      <Lock className="w-6 h-6 text-[#2d7a6e]" />
                    </div>
                    <CardTitle className="text-foreground">Privacy-First Design</CardTitle>
                    <CardDescription>
                      Every consultation, document, and data exchange happens within
                      clear privacy guardrails and medical compliance standards. GDPR
                      and HIPAA compliant architecture.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2d7a6e]/10 mb-3">
                      <Users className="w-6 h-6 text-[#2d7a6e]" />
                    </div>
                    <CardTitle className="text-foreground">Postcard Second Opinions</CardTitle>
                    <CardDescription>
                      Get expert second opinions on de-identified medical data,
                      protecting patient identity while ensuring quality review from
                      specialists worldwide.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Features */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                  For Patients
                </h2>
                <p className="text-muted-foreground text-lg">
                  Comprehensive tools designed to empower your healthcare journey
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                <div className="flex flex-col items-start space-y-4 p-6 rounded-xl bg-white border border-border">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2d7a6e]/10">
                    <CalendarClock className="w-6 h-6 text-[#2d7a6e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">24/7 Booking</h3>
                  <p className="text-muted-foreground">
                    Schedule consultations at your convenience, day or night. Our platform
                    operates across multiple time zones to serve you better.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4 p-6 rounded-xl bg-white border border-border">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2d7a6e]/10">
                    <HeartPulse className="w-6 h-6 text-[#2d7a6e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Health Records</h3>
                  <p className="text-muted-foreground">
                    Keep all your medical records in one secure place. Access your complete
                    health history anytime, anywhere.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4 p-6 rounded-xl bg-white border border-border">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2d7a6e]/10">
                    <Smartphone className="w-6 h-6 text-[#2d7a6e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Mobile Access</h3>
                  <p className="text-muted-foreground">
                    Access healthcare from any device. Our responsive platform works
                    seamlessly on desktop, tablet, and mobile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctor Features */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                  For Healthcare Providers
                </h2>
                <p className="text-muted-foreground text-lg">
                  Professional tools designed to streamline your practice
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                <div className="flex flex-col items-start space-y-4 p-6 rounded-xl bg-[#f8f9fa] border border-border">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2d7a6e]/10">
                    <Clock className="w-6 h-6 text-[#2d7a6e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Smart Scheduling</h3>
                  <p className="text-muted-foreground">
                    Automated appointment management with intelligent queue systems
                    and patient notifications to optimize your time.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4 p-6 rounded-xl bg-[#f8f9fa] border border-border">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2d7a6e]/10">
                    <Shield className="w-6 h-6 text-[#2d7a6e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Compliance Suite</h3>
                  <p className="text-muted-foreground">
                    Built-in compliance frameworks with automatic audit trails and
                    documentation to meet regulatory requirements.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4 p-6 rounded-xl bg-[#f8f9fa] border border-border">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2d7a6e]/10">
                    <Globe className="w-6 h-6 text-[#2d7a6e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Global Reach</h3>
                  <p className="text-muted-foreground">
                    Expand your practice beyond borders. Connect with patients
                    worldwide while maintaining local compliance standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-8 text-center bg-gradient-to-br from-[#2d7a6e]/10 to-[#4a9d8f]/5 rounded-3xl p-12 md:p-16 border border-[#2d7a6e]/20">
              <div className="space-y-4 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Experience the future of healthcare with SITANA Global
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <Button asChild size="lg" className="bg-[#2d7a6e] hover:bg-[#25675d] text-white rounded-lg px-8">
                  <Link href="/sign-up?as=patient">Start as Patient</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg px-8 border-2">
                  <Link href="/sign-up?as=doctor">Join as Doctor</Link>
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

