import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
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
                  Simple, Transparent Pricing
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Choose the plan that works best for you. No hidden fees, no surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards - Patients */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                  For Patients
                </h2>
                <p className="text-muted-foreground text-lg">
                  Affordable healthcare that fits your needs
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                {/* Pay Per Visit */}
                <Card className="border-border relative">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Pay Per Visit</CardTitle>
                    <CardDescription className="text-base">
                      Perfect for occasional consultations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="pb-4">
                      <div className="h-16"></div>
                    </div>
                    <ul className="space-y-3 flex-1">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">30-minute video consultation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Digital clinic letter</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Multilingual support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Secure medical records</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground/60">Priority booking</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground/60">Unlimited follow-ups</span>
                      </li>
                    </ul>
                    <div className="mt-auto pt-8">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Join the waitlist</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Monthly Plan - Popular */}
                <Card className="border-[#233161] border-2 relative shadow-lg">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#233161] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Monthly</CardTitle>
                    <CardDescription className="text-base">
                      Best value for regular healthcare needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="pb-4">
                      <div className="h-16"></div>
                    </div>
                    <ul className="space-y-3 flex-1">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">3 consultations per month</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Digital clinic letters</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Multilingual support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Secure medical records</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Priority booking</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Unlimited follow-ups</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">24/7 support</span>
                      </li>
                    </ul>
                    <div className="mt-auto pt-8">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Join the waitlist</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Annual Plan */}
                <Card className="border-border relative">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Annual</CardTitle>
                    <CardDescription className="text-base">
                      Maximum savings for long-term care
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="pb-4">
                      <div className="h-16"></div>
                    </div>
                    <ul className="space-y-3 flex-1">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">36 consultations per year</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Digital clinic letters</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Multilingual support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Secure medical records</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Priority booking</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Unlimited follow-ups</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">24/7 priority support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Annual health review</span>
                      </li>
                    </ul>
                    <div className="mt-auto pt-8">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Join the waitlist</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards - Doctors */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                  For Healthcare Providers
                </h2>
                <p className="text-muted-foreground text-lg">
                  Flexible plans to grow your practice
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                {/* Starter */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Starter</CardTitle>
                    <CardDescription className="text-base">
                      Perfect for individual practitioners
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="pb-4">
                      <div className="h-16"></div>
                    </div>
                    <ul className="space-y-3 flex-1">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Up to 50 patients/month</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Secure video consultations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Scheduling dashboard</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Digital clinic letters</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Patient records management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground/60">Multi-provider support</span>
                      </li>
                    </ul>
                    <div className="mt-auto pt-8">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Apply as a provider</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Professional */}
                <Card className="border-[#233161] border-2 relative shadow-lg">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#233161] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Professional</CardTitle>
                    <CardDescription className="text-base">
                      For growing medical practices
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="pb-4">
                      <div className="h-16"></div>
                    </div>
                    <ul className="space-y-3 flex-1">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Up to 150 patients/month</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Secure video consultations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Advanced scheduling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Digital clinic letters</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Patient records management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Multi-provider support (up to 3)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Analytics dashboard</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Priority support</span>
                      </li>
                    </ul>
                    <div className="mt-auto pt-8">
                      <Button asChild className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                        <a href="https://portal.sitanaglobal.com" target="_blank" rel="noopener noreferrer">Apply as a provider</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Enterprise */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Enterprise</CardTitle>
                    <CardDescription className="text-base">
                      For clinics and healthcare organizations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="pb-4">
                      <div className="h-16"></div>
                    </div>
                    <ul className="space-y-3 flex-1">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Unlimited patients</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">All Professional features</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Unlimited providers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Custom branding</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Dedicated account manager</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">API access</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Custom integrations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#233161] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">SLA guarantee</span>
                      </li>
                    </ul>
                    <div className="mt-auto pt-8">
                      <Button asChild variant="outline" className="w-full rounded-lg border-2">
                        <Link href="/contact">Talk to sales</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Choose the plan that works best for you
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

