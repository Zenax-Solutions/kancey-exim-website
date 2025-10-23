import { Award, Heart, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      letter: "K",
      title: "Knowledge & Expertise",
      description: "Deep market knowledge and industry expertise to deliver trusted solutions globally",
    },
    {
      icon: Users,
      letter: "A",
      title: "Accountability",
      description: "Integrity and reliability in all our partnerships and decisions",
    },
    {
      icon: Heart,
      letter: "N",
      title: "Nurturing Communities",
      description: "Empowering communities through ethical trade and sustainable growth",
    },
    {
      icon: TrendingUp,
      letter: "Y",
      title: "Yielding Positive Impact",
      description: "Creating lasting value for communities, partners, and the world",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded in 2025 with a vision larger than business alone: to bridge Sri Lanka's 
            traditions with global markets. Born during one of the country's most challenging 
            economic periods, our mission was clear—to create opportunities for rural producers 
            while delivering world-class quality to global markets.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 animate-slide-up">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-lg text-muted-foreground">
              To be the premier global trade partner in South Asia, creating opportunity 
              and growth for all communities.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up border-primary/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <span className="text-4xl font-bold text-primary">{value.letter}</span>
                  </div>
                  <h4 className="text-xl font-semibold">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mt-20 space-y-6 text-center animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We partner directly with farmers, manufacturers, and creators across the island. 
            Many of them once struggled to bring their goods beyond local markets. Today, 
            through KANCEY EXIM, their products reach shelves and warehouses across the world.
          </p>
          <p className="text-xl font-medium text-foreground">
            We don't just export goods; we export Sri Lanka's spirit, ensuring that every 
            delivery carries both quality and meaning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
