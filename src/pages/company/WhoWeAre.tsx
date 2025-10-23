import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, TrendingUp, Target, CheckCircle } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const WhoWeAre = () => {
  const values = [
    {
      icon: Award,
      letter: "K",
      title: "Knowledge & Expertise",
      description: "We leverage deep market knowledge and industry expertise to deliver trusted solutions globally.",
    },
    {
      icon: Users,
      letter: "A",
      title: "Accountability",
      description: "We take responsibility for every decision, ensuring integrity and reliability in all our partnerships.",
    },
    {
      icon: Heart,
      letter: "N",
      title: "Nurturing Communities",
      description: "We empower and uplift communities through ethical trade, fair partnerships, and sustainable growth.",
    },
    {
      icon: CheckCircle,
      letter: "C",
      title: "Commitment to Quality",
      description: "We uphold the highest standards in products and services, ensuring excellence in every transaction.",
    },
    {
      icon: Target,
      letter: "E",
      title: "Ethical Practices",
      description: "We conduct business with honesty, fairness, and respect for people and the environment.",
    },
    {
      icon: TrendingUp,
      letter: "Y",
      title: "Yielding Positive Impact",
      description: "We focus on creating lasting value—for communities, partners, and the world at large.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <PageHero
          title="Who We Are"
          subtitle="Our Story"
          description="Founded in 2025 with a vision larger than business alone - to bridge Sri Lanka's traditions with global markets"
          image={aboutHero}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Origin Story */}
              <div className="prose max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  KANCEY EXIM was founded in 2025 with a vision larger than business alone: to bridge Sri Lanka's 
                  traditions with global markets. Born during one of the country's most challenging economic periods, 
                  our mission was clear—to create opportunities for rural producers while delivering world-class quality 
                  to global markets.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We partner directly with farmers, manufacturers, and creators across the island. Many of them once 
                  struggled to bring their goods beyond local markets. Today, through KANCEY EXIM, their products reach 
                  shelves and warehouses across the world—connecting Sri Lanka's heritage with the world. We provide 
                  wholesalers and retailers not only with reliable supply chains but also with the assurance of 
                  responsibly sourced goods.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over the past months, KANCEY EXIM has grown into a trusted export partner for diverse product 
                  categories—from spices, tea, and coconut-based goods to garments, rubber, and technology solutions.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 border border-primary/20 mb-16">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-xl leading-relaxed">
                  To be the premier global trade partner in South Asia, creating opportunity and growth for all communities.
                </p>
              </div>

              {/* Values */}
              <div>
                <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <value.icon className="h-6 w-6 text-primary" />
                          </div>
                          <span className="text-4xl font-bold text-primary">{value.letter}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Closing Statement */}
              <div className="mt-16 text-center">
                <p className="text-2xl font-medium text-foreground mb-4">
                  We don't just export goods; we export Sri Lanka's spirit
                </p>
                <p className="text-lg text-muted-foreground">
                  Ensuring that every delivery carries both quality and meaning
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhoWeAre;
