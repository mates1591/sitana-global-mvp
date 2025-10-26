'use client';

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { sendContactEmail } from "@/app/actions/send-email";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const result = await sendContactEmail({
      name: `${firstName} ${lastName}`,
      email,
      phone,
      subject,
      message,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus({
        type: 'success',
        message: result.message || 'Message sent successfully!',
      });
      formElement.reset();
    } else {
      setSubmitStatus({
        type: 'error',
        message: result.error || 'Failed to send message. Please try again.',
      });
    }

    // Scroll to the message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
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
                  Get in Touch
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Have questions? We&apos;re here to help. Reach out to our team
                  and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            {/* Status Message */}
            {submitStatus.type && (
              <div className={`mb-8 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                <p className="text-sm font-medium">{submitStatus.message}</p>
              </div>
            )}

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                      Send us a Message
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and our team will respond within 24 hours.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-foreground"
                        >
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#233161] focus:border-transparent transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium text-foreground"
                        >
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#233161] focus:border-transparent transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#233161] focus:border-transparent transition-all"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#233161] focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#233161] focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="patient">Patient Support</option>
                        <option value="doctor">Healthcare Provider Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="press">Press & Media</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#233161] focus:border-transparent transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    <div className="flex items-start gap-3">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        className="mt-1 w-4 h-4 rounded border-border text-[#233161] focus:ring-[#233161] focus:ring-2"
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-muted-foreground"
                      >
                        I agree to the{" "}
                        <Link href="/privacy" className="text-[#233161] hover:underline">
                          Privacy Policy
                        </Link>{" "}
                        and consent to being contacted by SITANA Global regarding my inquiry.{" "}
                        <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground">
                    Prefer to reach us directly? Here are our contact details.
                  </p>
                </div>

                <div className="space-y-4">
                  <Card className="border-border">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 flex-shrink-0">
                          <Mail className="w-6 h-6 text-[#233161]" />
                        </div>
                        <div className="space-y-1">
                          <CardTitle className="text-lg text-foreground">Email</CardTitle>
                          <CardDescription className="text-base">
                            <a
                              href="mailto:info@sitanaglobal.com"
                              className="text-[#233161] hover:underline"
                            >
                              info@sitanaglobal.com
                            </a>
                          </CardDescription>
                          <CardDescription className="text-sm">
                            For general inquiries and support
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 flex-shrink-0">
                          <Phone className="w-6 h-6 text-[#233161]" />
                        </div>
                        <div className="space-y-1">
                          <CardTitle className="text-lg text-foreground">Phone</CardTitle>
                          <CardDescription className="text-base">
                            <a
                              href="tel:+97316555094"
                              className="text-[#233161] hover:underline"
                            >
                              +973 16555094
                            </a>
                          </CardDescription>
                          <CardDescription className="text-sm">
                            For general inquiries and support
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#233161]/10 flex-shrink-0">
                          <MapPin className="w-6 h-6 text-[#233161]" />
                        </div>
                        <div className="space-y-1">
                          <CardTitle className="text-lg text-foreground">Address</CardTitle>
                          <CardDescription className="text-base">
                            Level 29 United Tower
                            <br />
                            Building 316, Road 4609
                            <br />
                            Manama/Seafront
                            <br />
                            Bahrain
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
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
                  Ready to Transform Your Healthcare Experience?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Don&apos;t wait to get started with SITANA Global
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

