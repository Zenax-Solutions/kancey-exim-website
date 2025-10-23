import { Code2, Cloud, Smartphone, ShoppingCart, Database, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Technology = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Custom iOS and Android applications tailored to business goals",
    },
    {
      icon: Code2,
      title: "Web App Development",
      description: "Scalable and secure web applications for diverse industries",
    },
    {
      icon: Database,
      title: "Enterprise Software",
      description: "End-to-end systems that streamline workflows and boost efficiency",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "Custom online stores with secure payment integration",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Migration and scalable hosting for modern businesses",
    },
    {
      icon: Users,
      title: "IT Outsourcing",
      description: "Skilled teams from Sri Lanka for cost-effective solutions",
    },
  ];

  return (
    <section id="technology" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technology & Digital Solutions</h2>
          <p className="text-lg opacity-90">
            Empowering businesses with custom development, cloud services, and IT outsourcing
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-primary/20 hover:bg-card/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="max-w-4xl mx-auto mt-20 p-8 bg-primary/10 rounded-2xl border border-primary/20 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose KANCEY?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Custom solutions built for your unique needs",
              "Trusted IT outsourcing from Sri Lanka",
              "End-to-end expertise from strategy to support",
              "Flexible solutions for startups to enterprises",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
