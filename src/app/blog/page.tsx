import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cross-Border Telemedicine",
      excerpt: "Exploring how technology is breaking down geographical barriers in healthcare and what it means for patients worldwide.",
      category: "Industry Insights",
      date: "October 15, 2025",
      readTime: "5 min read",
      image: "🌍",
    },
    {
      id: 2,
      title: "Understanding Multilingual Healthcare Communication",
      excerpt: "How real-time translation and cultural sensitivity are revolutionizing doctor-patient communication in the digital age.",
      category: "Technology",
      date: "October 10, 2025",
      readTime: "4 min read",
      image: "💬",
    },
    {
      id: 3,
      title: "Privacy in Telemedicine: What You Need to Know",
      excerpt: "A comprehensive guide to understanding data protection, GDPR compliance, and your rights in digital healthcare.",
      category: "Privacy & Security",
      date: "October 5, 2025",
      readTime: "6 min read",
      image: "🔒",
    },
    {
      id: 4,
      title: "The Role of AI in Medical Triage",
      excerpt: "How artificial intelligence is helping prioritize patient care and improve outcomes in emergency situations.",
      category: "Innovation",
      date: "September 28, 2025",
      readTime: "5 min read",
      image: "🤖",
    },
    {
      id: 5,
      title: "Building Trust in Virtual Consultations",
      excerpt: "Best practices for establishing strong doctor-patient relationships in the world of telemedicine.",
      category: "Healthcare Tips",
      date: "September 22, 2025",
      readTime: "4 min read",
      image: "🏥",
    },
    {
      id: 6,
      title: "Second Opinions: When and Why You Should Seek Them",
      excerpt: "Understanding the importance of medical second opinions and how technology makes them more accessible than ever.",
      category: "Patient Education",
      date: "September 15, 2025",
      readTime: "5 min read",
      image: "👨‍⚕️",
    },
  ];

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
                  SITANA Global Blog
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Insights, updates, and stories from the world of cross-border healthcare
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="max-w-5xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-[#233161]/10 text-[#233161] text-sm font-medium mb-6">
                Featured Article
              </div>
              <Card className="border-border overflow-hidden">
                <CardHeader className="p-0">
                  <div className="bg-gradient-to-br from-[#233161]/20 to-[#e9b95c]/10 p-16 text-center">
                    <span className="text-8xl">🌟</span>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        October 20, 2025
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        8 min read
                      </span>
                      <span className="px-2 py-1 rounded-full bg-[#233161]/10 text-[#233161] text-xs font-medium">
                        Company News
                      </span>
                    </div>
                    <CardTitle className="text-3xl md:text-4xl mb-4 text-foreground">
                      SITANA Global: Building the Future of Cross-Border Healthcare
                    </CardTitle>
                    <CardDescription className="text-lg mb-6">
                      We&apos;re committed to making quality healthcare accessible to everyone, 
                      everywhere. Our platform continues to grow, connecting patients with 
                      healthcare providers across borders. Learn about our journey, the challenges 
                      we&apos;ve overcome, and what this means for the future of telemedicine.
                    </CardDescription>
                    <Button asChild className="bg-[#233161] hover:bg-[#1a2447] text-white rounded-lg">
                      <Link href="/blog/expansion-50-countries">
                        Read: Building the Future of Cross-Border Healthcare <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                  Latest Articles
                </h2>
                <p className="text-muted-foreground text-lg">
                  Stay informed about healthcare innovation and telemedicine trends
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="bg-gradient-to-br from-[#233161]/20 to-[#e9b95c]/10 rounded-lg p-12 text-center mb-4">
                        <span className="text-6xl">{post.image}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="inline-block px-2 py-1 rounded-full bg-[#233161]/10 text-[#233161] text-xs font-medium mb-3 w-fit">
                        {post.category}
                      </span>
                      <CardTitle className="text-xl mb-2 text-foreground hover:text-[#233161] transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-base mb-4">
                        {post.excerpt}
                      </CardDescription>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-[#233161] hover:text-[#1a2447] font-medium transition-colors"
                      >
                        Read: {post.title} <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-12">
              <div className="space-y-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                  Browse by Category
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
                {[
                  { name: "Industry Insights", count: 12, icon: "📊" },
                  { name: "Technology", count: 18, icon: "💻" },
                  { name: "Privacy & Security", count: 8, icon: "🔒" },
                  { name: "Patient Education", count: 15, icon: "📚" },
                  { name: "Innovation", count: 10, icon: "💡" },
                  { name: "Healthcare Tips", count: 14, icon: "🩺" },
                  { name: "Company News", count: 6, icon: "📰" },
                  { name: "Research", count: 9, icon: "🔬" },
                ].map((category) => (
                  <Link
                    key={category.name}
                    href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group"
                  >
                    <Card className="border-border hover:border-[#233161] hover:shadow-md transition-all">
                      <CardHeader className="text-center">
                        <div className="text-4xl mb-3">{category.icon}</div>
                        <CardTitle className="text-lg text-foreground group-hover:text-[#233161] transition-colors">
                          {category.name}
                        </CardTitle>
                        <CardDescription>
                          {category.count} articles
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

