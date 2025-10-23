import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Ceylon Cinnamon: The World's Finest Spice",
      date: "March 15, 2025",
      category: "Products",
      excerpt: "Discover why Ceylon cinnamon from Sri Lanka is considered the gold standard in the global spice trade.",
      image: "/placeholder.svg",
    },
    {
      title: "Sustainable Sourcing in Sri Lankan Agriculture",
      date: "March 10, 2025",
      category: "Sustainability",
      excerpt: "How KANCEY EXIM partners with local farmers to ensure ethical and sustainable agricultural practices.",
      image: "/placeholder.svg",
    },
    {
      title: "The Rise of Sri Lankan Apparel Manufacturing",
      date: "March 5, 2025",
      category: "Industry",
      excerpt: "Exploring Sri Lanka's position as a trusted hub for quality apparel and textile manufacturing.",
      image: "/placeholder.svg",
    },
    {
      title: "Tech Outsourcing: Why Choose Sri Lanka",
      date: "February 28, 2025",
      category: "Technology",
      excerpt: "The advantages of IT outsourcing from Sri Lanka - skilled talent, competitive costs, and global standards.",
      image: "/placeholder.svg",
    },
    {
      title: "Coconut Products: From Food to Fiber",
      date: "February 20, 2025",
      category: "Products",
      excerpt: "Unlocking the complete potential of coconuts - from culinary ingredients to industrial solutions.",
      image: "/placeholder.svg",
    },
    {
      title: "Export Quality Standards at KANCEY EXIM",
      date: "February 15, 2025",
      category: "Quality",
      excerpt: "Learn about our rigorous quality assurance processes that ensure every shipment meets international standards.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & News</h1>
              <p className="text-xl text-muted-foreground">
                Insights, updates, and stories from the world of global trade and Sri Lankan exports
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span className="text-primary font-medium">{post.category}</span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <Button variant="ghost" className="group-hover:text-primary p-0">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
