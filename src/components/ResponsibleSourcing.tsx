import { Handshake, Leaf, Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ResponsibleSourcing = () => {
  const principles = [
    {
      icon: Handshake,
      title: "Building Partnerships That Last",
      description: "Direct relationships with farmers, manufacturers, and artisans across Sri Lanka, built on trust and transparency",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Environmental care and ethical production at every step of our supply chain",
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "Training and technical guidance to help suppliers meet international standards",
    },
    {
      icon: CheckCircle,
      title: "Empowering Communities",
      description: "Creating long-term prosperity while delivering dependable excellence to clients",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Responsible Sourcing
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Empowering Trade. Sustaining Communities.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6 text-center animate-slide-up">
          <p className="text-lg text-muted-foreground leading-relaxed">
            At KANCEY EXIM, responsible sourcing isn't just a policy—it's the foundation of who we are. 
            Every product we export carries the story of Sri Lanka's vibrant communities: from farmers 
            cultivating aromatic spices to skilled manufacturers crafting quality garments and rubber goods.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through these partnerships, we don't just connect Sri Lanka to the world—we connect people 
            to purpose, empowering livelihoods while delivering exceptional value to our buyers.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {principles.map((principle, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur border-primary/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <principle.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Promise Section */}
        <div className="max-w-4xl mx-auto p-10 bg-gradient-to-r from-primary to-accent rounded-2xl text-white text-center animate-fade-in shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Our Promise for the Future</h3>
          <p className="text-lg leading-relaxed opacity-95">
            By choosing KANCEY EXIM, you're choosing a partner who values more than profit—you're 
            joining a movement toward sustainable, responsible, and inclusive global trade. Together, 
            we're shaping a future where ethical production and business success go hand in hand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleSourcing;
