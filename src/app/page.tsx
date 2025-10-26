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
  Users,
  Languages,
  FileText,
  Video,
  Lock,
  Stethoscope,
  Building2,
  Briefcase,
  HeartPulse,
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
                <p className="text-2xl font-semibold text-foreground">
                  Best healthcare, from anywhere.
                </p>
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
                  <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Get a demo</a>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="rounded-lg px-8 border-2"
                >
                  <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Join the waitlist</a>
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
                      Register and consult in English, العربية, Français. Live subtitles bridge language gaps.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <Activity className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-foreground">Smart Triage (human-supervised)</CardTitle>
                    <CardDescription>
                      AI assists and a clinician supervises to keep it safe and accurate.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <Video className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-foreground">Secure Video Consultation & Full Medical Report</CardTitle>
                    <CardDescription>
                      Meet via encrypted video; receive a full medical report after each consultation.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <FileText className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-foreground">Full Medical Report</CardTitle>
                    <CardDescription>
                      After each session, receive a comprehensive full medical report,
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
                      Expert reviews on de-identified medical data from international specialists.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  Our Services
                </h2>
                <p className="text-muted-foreground text-lg">
                  Comprehensive healthcare solutions for every need
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <Stethoscope className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-foreground">Doctor-to-Doctor Consultations</CardTitle>
                    <CardDescription>
                      Secure peer consults for case discussion and guidance.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <Building2 className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-foreground">Hospital-to-Expert Collaboration</CardTitle>
                    <CardDescription>
                      Fill specialty gaps for complex/rare cases by connecting hospitals with international experts.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 mb-3">
                      <HeartPulse className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-foreground">International Second Opinions & Care Navigation</CardTitle>
                    <CardDescription>
                      Independent second opinions plus optional treatment travel; includes wellness & prevention programs.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  How It Works
                </h2>
                <p className="text-muted-foreground text-lg">
                  Your journey to better healthcare
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161] text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Consent</h3>
                  <p className="text-muted-foreground">
                    Review and agree to privacy and care terms
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161] text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Quick triage</h3>
                  <p className="text-muted-foreground">
                    Human-supervised assessment to determine care path
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161] text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Upload investigations</h3>
                  <p className="text-muted-foreground">
                    Share relevant medical records and test results
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161] text-white text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Get consultation</h3>
                  <p className="text-muted-foreground">
                    Online consult or local appointment as needed
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161] text-white text-2xl font-bold">
                    5
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Full medical report</h3>
                  <p className="text-muted-foreground">
                    Receive comprehensive documentation of your care
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#233161] text-white text-2xl font-bold">
                    6
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Optional follow-up</h3>
                  <p className="text-muted-foreground">
                    Second opinion or doctor-to-doctor consult if needed
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
                      Hospitals & Health Organizations
                    </CardTitle>
                    <p className="text-lg font-semibold text-foreground">
                      Right door, first time. We triage, prepare, and hand off cleanly to your clinic—your clinicians stay in control.
                    </p>
                    <CardDescription className="space-y-2 text-base flex-1">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span><strong>On-Demand Specialty Coverage:</strong> Access our network of specialists to fill service gaps and offer new lines of cost-effective, quality care</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span><strong>Global Expert Second Opinions:</strong> For complex cases requiring multispecialty review with input from international experts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span><strong>Ensure Regulatory Compliance:</strong> Built with data protection and privacy-by-design, meeting regional and international standards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span><strong>Optimize Patient Pathways:</strong> Integrate our navigation to reduce administrative burden, streamline referrals, and improve patient throughput</span>
                        </li>
                      </ul>
                    </CardDescription>
                    <div className="mt-auto pt-4">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Request a demo</a>
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
                          <span><strong>Secure Specialist Consultations:</strong> Direct, encrypted consultations to discuss patient cases with HIPAA compliance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span><strong>Maintain Care Continuity:</strong> Provide continuous care for your patients while accessing specialist input, keeping them within your practice</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span><strong>Structured Feedback & Insights:</strong> Receive documented feedback and insights on your cases with audit trail</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#233161] mt-1">•</span>
                          <span><strong>Expand Your Professional Network:</strong> Collaborate and build relationships with specialists across borders</span>
                        </li>
                      </ul>
                    </CardDescription>
                    <div className="mt-auto pt-4">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Apply as a provider</a>
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
                        <Link href="/contact">Talk to sales</Link>
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
                        <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Join the waitlist</a>
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
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  For Doctors
                </h2>
                <p className="text-muted-foreground text-lg">
                  Tools and support that make clinical work faster, safer, and easier.
                </p>
              </div>

              <div className="w-full max-w-3xl">
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="space-y-4 p-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10">
                      <Stethoscope className="w-6 h-6 text-[#233161]" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      Doctor-to-doctor specialist consults
                    </CardTitle>
                    <CardDescription className="space-y-3 text-base">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-[#233161] mt-1">•</span>
                          <span><strong>Secure & de-identified</strong> — role-based portal; case packs auto-strip identifiers; full audit trail.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#233161] mt-1">•</span>
                          <span><strong>Rapid</strong> — consult with the needed specialty; immediate guidance captured in the case.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#233161] mt-1">•</span>
                          <span><strong>Scheduled</strong> — structured consults with a defined turnaround; a written plan returned to the primary doctor.</span>
                        </li>
                      </ul>
                    </CardDescription>
                    <div className="pt-4">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Apply as a provider</a>
                      </Button>
                    </div>
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
                  <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Join the waitlist</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg px-8 border-2">
                  <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Apply as a provider</a>
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
