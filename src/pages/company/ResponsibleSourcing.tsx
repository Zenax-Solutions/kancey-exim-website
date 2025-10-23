import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Leaf, Target, CheckCircle, Users, Award } from "lucide-react";
import sourcingHero from "@/assets/responsible-sourcing-hero.jpg";

const ResponsibleSourcing = () => {
  const principles = [
    {
      icon: Handshake,
      title: "Direct Partnerships",
      description: "We work directly with local farmers, manufacturers, SMEs, and traditional artisans across Sri Lanka, building relationships based on trust, transparency, and shared progress.",
    },
    {
      icon: Leaf,
      title: "Environmental Care",
      description: "By sourcing responsibly, we ensure every shipment reflects ethical trade, environmental care, and uncompromised quality.",
    },
    {
      icon: Target,
      title: "Quality Support",
      description: "We invest in our sourcing partners through training, technical guidance, and quality assurance support, helping them meet international standards.",
    },
    {
      icon: CheckCircle,
      title: "Sustainable Growth",
      description: "We create a supply chain that's not only efficient but empowering—ensuring long-term prosperity for our communities.",
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Behind every successful export is a network of passionate individuals. Our supplier network is the strength behind KANCEY EXIM's global presence.",
    },
    {
      icon: Award,
      title: "Excellence Delivery",
      description: "We deliver dependable excellence for our clients while creating lasting value for communities.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <PageHero
          title="Responsible Sourcing"
          subtitle="Empowering Trade. Sustaining Communities."
          description="At KANCEY EXIM, responsible sourcing isn't just a policy—it's the foundation of who we are"
          image={sourcingHero}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Introduction */}
              <div className="prose max-w-none mb-16 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Every product we export carries the story of Sri Lanka's vibrant communities: from the farmers 
                  cultivating aromatic spices and tea leaves to the skilled manufacturers crafting quality garments 
                  and rubber goods.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through these partnerships, we don't just connect Sri Lanka to the world—we connect people to purpose, 
                  empowering livelihoods while delivering exceptional value to our buyers.
                </p>
              </div>

              {/* Principles Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {principles.map((principle, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                        <principle.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{principle.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Impact Statement */}
              <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-12 border border-primary/30 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment</h2>
                <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto">
                  By choosing KANCEY EXIM, you're choosing a partner who values more than profit—you're joining a 
                  movement toward sustainable, responsible, and inclusive global trade. Together with our Sri Lankan 
                  sourcing partners, we're shaping a future where ethical production and business success go hand in hand.
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center bg-muted/30 rounded-2xl p-10">
                <h3 className="text-2xl font-bold mb-4">Creating Real Impact</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Together, we're creating real impact for people, communities, and the planet—one partnership, 
                  one shipment, one success story at a time.
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

export default ResponsibleSourcing;
