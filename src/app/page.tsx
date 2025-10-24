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
  Building2,
  Briefcase,
  HeartPulse,
  UserCircle,
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

              {/* Hero Title */}
              <div className="space-y-6 max-w-4xl">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
                  Global expertise. Local care.
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  A quick symptom check routes you to urgent, online, or local 
                  appointments—then you get a clear clinic letter. Second opinions 
                  when needed.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 pt-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg px-8"
                >
                  <Link href="#demo">Get a demo</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="rounded-lg px-8 border-2"
                >
                  <Link href="/sign-up?as=patient">Join the waitlist</Link>
                </Button>
              </div>

              {/* Safety Note */}
              <p className="text-sm text-muted-foreground max-w-md">
                Not for emergencies. Availability varies by country.
              </p>
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <Languages className="w-6 h-6 text-[#233161]" />
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <Activity className="w-6 h-6 text-[#233161]" />
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <Video className="w-6 h-6 text-[#233161]" />
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <FileText className="w-6 h-6 text-[#233161]" />
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <Lock className="w-6 h-6 text-[#233161]" />
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <Users className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-foreground">International Second Opinions</CardTitle>
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
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161] text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Sign up</h3>
                  <p className="text-muted-foreground">
                    Create your account and complete your profile
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161] text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Check symptoms</h3>
                  <p className="text-muted-foreground">
                    Quick assessment to find the right care option
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161] text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Get care</h3>
                  <p className="text-muted-foreground">
                    Book urgent, online, or local appointments
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161] text-white text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Receive summary</h3>
                  <p className="text-muted-foreground">
                    Get your clinic letter and access it anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audience-Specific Solutions Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  Solutions for Everyone
                </h2>
                <p className="text-muted-foreground text-lg">
                  Tailored healthcare solutions designed for your specific needs
                </p>
              </div>

              {/* Top Row - 3 Cards */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
                {/* Hospitals / Clinics */}
                <Card className="border-border hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader className="space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10">
                      <Building2 className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      Hospitals / Clinics
                    </CardTitle>
                    <p className="text-lg font-semibold text-foreground">
                      Right door, first time. We triage, prepare, and hand off cleanly to your clinic—your clinicians stay in control.
                    </p>
                    <CardDescription className="space-y-2 text-base flex-1">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Second opinions & multidisciplinary input</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Referrals: exams, tests, treatment, admission, surgery</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Medical-legal consultation support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Right door, first time; reduce bounced referrals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Faster time-to-specialist; fewer no-shows</span>
                        </li>
                      </ul>
                    </CardDescription>
                    <div className="mt-auto pt-4">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <Link href="#demo">Request a demo</Link>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>

                {/* Doctors / Providers */}
                <Card className="border-border hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader className="space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10">
                      <Stethoscope className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      Doctors / Providers
                    </CardTitle>
                    <p className="text-lg font-semibold text-foreground">
                      Peer input—fast. Patients – Ready.
                    </p>
                    <CardDescription className="space-y-2 text-base flex-1">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Doctor-to-doctor second opinions on your cases</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Specialized input for patients under your care</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Reduce unnecessary referrals to specialty clinics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Secure portal with de-identified patient data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Private pathway for sensitive (e.g., mental health) consults</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Expand your cross-border network & collaboration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Structured handoffs, audit trail, rapid turnaround</span>
                        </li>
                      </ul>
                    </CardDescription>
                    <div className="mt-auto pt-4">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <Link href="/sign-up?as=doctor">Apply as a provider</Link>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>

                {/* Insurers / Payers */}
                <Card className="border-border hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader className="space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10">
                      <Shield className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      Insurers / Payers
                    </CardTitle>
                    <p className="text-lg font-semibold text-foreground">
                      Right care, right place.
                    </p>
                    <CardDescription className="space-y-2 text-base flex-1">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Network steerage to preferred facilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Prior-approval clarity and faster decisions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Transparent utilization and case timelines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Fewer avoidable specialty visits</span>
                        </li>
                      </ul>
                    </CardDescription>
                    <div className="mt-auto pt-4">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <Link href="/contact-sales">Talk to sales</Link>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              {/* Bottom Row - 2 Cards Centered */}
              <div className="grid gap-8 md:grid-cols-2 w-full max-w-5xl">
                {/* Employers */}
                <Card className="border-border hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader className="space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10">
                      <Briefcase className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      Employers
                    </CardTitle>
                    <p className="text-lg font-semibold text-foreground">
                      Back to work faster.
                    </p>
                    <CardDescription className="space-y-2 text-base flex-1">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Virtual-first navigation that respects company policy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>In-network booking and approvals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Clear care pathways your team understands</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Manager-friendly handoffs and follow-up</span>
                        </li>
                      </ul>
                      <p className="text-sm italic pt-2">
                        Language coverage: English, Arabic, French, Spanish.
                      </p>
                    </CardDescription>
                    <div className="mt-auto pt-4">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <Link href="/contact">Book a benefits consult</Link>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>

                {/* Patients */}
                <Card className="border-border hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader className="space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10">
                      <HeartPulse className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      Patients
                    </CardTitle>
                    <p className="text-lg font-semibold text-foreground">
                      See the right specialist first time.
                    </p>
                    <CardDescription className="space-y-2 text-base flex-1">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Second opinion from global experts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Private consults (sexual & mental health)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>AI triaging with human oversight</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Local booking & clear next steps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span>Care that starts at home—and can finish at home</span>
                        </li>
                      </ul>
                    </CardDescription>
                    <div className="mt-auto pt-4">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <Link href="/sign-up?as=patient">Join the waitlist</Link>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* For Doctors Section */}
        <section id="for-doctors" className="w-full py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#233161]/10 text-[#233161] text-sm font-medium">
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
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#233161]/10 mt-0.5">
                      <Clock className="w-4 h-4 text-[#233161]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Appointment Management</p>
                      <p className="text-sm text-muted-foreground">
                        Streamlined scheduling and patient queue management
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#233161]/10 mt-0.5">
                      <Shield className="w-4 h-4 text-[#233161]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Compliance Framework</p>
                      <p className="text-sm text-muted-foreground">
                        Built-in medical compliance and audit trails
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#233161]/10 mt-0.5">
                      <FileText className="w-4 h-4 text-[#233161]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Digital Documentation</p>
                      <p className="text-sm text-muted-foreground">
                        Easy-to-create clinic letters and medical records
                      </p>
                    </div>
                  </li>
                </ul>
                <Button asChild size="lg" className="bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                  <Link href="/sign-up?as=doctor">Apply as a provider</Link>
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
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-8 text-center bg-gradient-to-br from-[#233161]/10 to-[#e9b95c]/5 rounded-3xl p-12 md:p-16 border border-[#233161]/20">
              <div className="space-y-4 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  Ready to Experience Better Healthcare?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Experience secure, accessible, cross-border medical care with
                  SITANA Global
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <Button asChild size="lg" className="bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg px-8">
                  <Link href="/sign-up?as=patient">Join the waitlist</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg px-8 border-2">
                  <Link href="/sign-up?as=doctor">Apply as a provider</Link>
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
