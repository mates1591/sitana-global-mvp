import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  Shield,
  Clock,
  Users,
  Languages,
  FileText,
  Video,
  Lock,
  Stethoscope,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <Header />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 bg-[#f8f9fa]">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-10 text-center">
              {/* Social Proof */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-border shadow-sm">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#2d7a6e] border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                    A
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#4a9d8f] border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                    B
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#6bb3a5] border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                    C
                  </div>
                </div>
                <span className="text-sm font-medium text-foreground">
                  Joined 5k+ Members
                </span>
              </div>

              {/* Hero Title */}
              <div className="space-y-6 max-w-4xl">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
                  Smarter Healthcare,
                  <br />
                  One <span className="italic font-serif">Dashboard</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Easily keep track of patients, doctors, and medical info —
                  all in one user-friendly platform.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 pt-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-[#2d7a6e] hover:bg-[#25675d] text-white rounded-lg px-8"
                >
                  <Link href="/sign-up?as=patient">Start free trial</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="rounded-lg px-8 border-2"
                >
                  <Link href="#demo">Watch demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  Everything You Need for Modern Healthcare
                </h2>
                <p className="text-muted-foreground text-lg">
                  A comprehensive platform designed with privacy, accessibility, and
                  quality at its core
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
                      consultations.
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
                      requires urgent care or can proceed to online consultation.
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
                      remains private and encrypted throughout the consultation.
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
                      securely stored for your review and future reference.
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
                      clear privacy guardrails and medical compliance standards.
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
                      protecting patient identity while ensuring quality review.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  How It Works
                </h2>
                <p className="text-muted-foreground text-lg">
                  Simple, secure, and accessible healthcare in four easy steps
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2d7a6e] text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Register</h3>
                  <p className="text-muted-foreground">
                    Sign up in your preferred language and complete your profile
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2d7a6e] text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Triage</h3>
                  <p className="text-muted-foreground">
                    Complete a quick assessment to determine urgency and care needs
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2d7a6e] text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Consult</h3>
                  <p className="text-muted-foreground">
                    Book and attend a secure video consultation with a certified doctor
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2d7a6e] text-white text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Follow Up</h3>
                  <p className="text-muted-foreground">
                    Receive your digital clinic letter and access it anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Doctors Section */}
        <section id="for-doctors" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d7a6e]/10 text-[#2d7a6e] text-sm font-medium">
                  <Stethoscope className="h-4 w-4" />
                  <span>For Healthcare Providers</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                  Dedicated Tools for Medical Professionals
                </h2>
                <p className="text-muted-foreground text-lg">
                  Doctors and clinics benefit from comprehensive dashboards designed
                  for medical compliance and auditability. Manage appointments, patient
                  records, and documentation — all within a secure, privacy-focused
                  framework.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2d7a6e]/10 mt-0.5">
                      <Clock className="w-4 h-4 text-[#2d7a6e]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Appointment Management</p>
                      <p className="text-sm text-muted-foreground">
                        Streamlined scheduling and patient queue management
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2d7a6e]/10 mt-0.5">
                      <Shield className="w-4 h-4 text-[#2d7a6e]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Compliance Framework</p>
                      <p className="text-sm text-muted-foreground">
                        Built-in medical compliance and audit trails
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2d7a6e]/10 mt-0.5">
                      <FileText className="w-4 h-4 text-[#2d7a6e]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Digital Documentation</p>
                      <p className="text-sm text-muted-foreground">
                        Easy-to-create clinic letters and medical records
                      </p>
                    </div>
                  </li>
                </ul>
                <Button asChild size="lg" className="bg-[#2d7a6e] hover:bg-[#25675d] text-white rounded-lg">
                  <Link href="/sign-up?as=doctor">Join as a Doctor</Link>
                </Button>
              </div>
              <div className="grid gap-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Expand Your Practice</CardTitle>
                    <CardDescription>
                      Reach patients across borders and provide care beyond geographical
                      limitations
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Secure Communication</CardTitle>
                    <CardDescription>
                      All patient interactions are encrypted and comply with international
                      healthcare standards
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Professional Network</CardTitle>
                    <CardDescription>
                      Connect with other healthcare providers for consultations and second
                      opinions
                    </CardDescription>
                  </CardHeader>
                </Card>
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
                  Ready to Experience Better Healthcare?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Join thousands of patients and doctors using SITANA Global for
                  secure, accessible, cross-border medical care
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <Button asChild size="lg" className="bg-[#2d7a6e] hover:bg-[#25675d] text-white rounded-lg px-8">
                  <Link href="/sign-up?as=patient">Get Started as Patient</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg px-8 border-2">
                  <Link href="/sign-up?as=doctor">Register as Doctor</Link>
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
