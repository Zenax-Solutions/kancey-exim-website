import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cloud, Smartphone, ShoppingCart, Database, Users, Lightbulb } from "lucide-react";
import technologyHero from "@/assets/technology-hero.jpg";

const Technology = () => {
  const services = [
    {
      icon: Smartphone,
      name: "Mobile App Development",
      description: "Custom iOS and Android applications tailored to user needs and business goals",
    },
    {
      icon: Code2,
      name: "Web App Development",
      description: "Scalable and secure web applications for industries including retail, healthcare, logistics",
    },
    {
      icon: Database,
      name: "Enterprise Software Solutions",
      description: "End-to-end systems that improve efficiency and streamline workflows",
    },
    {
      icon: ShoppingCart,
      name: "E-commerce Platforms",
      description: "Custom-built online stores with secure payment integration",
    },
    {
      icon: Cloud,
      name: "Cloud Solutions",
      description: "Migration and scalable hosting for modernizing businesses",
    },
    {
      icon: Users,
      name: "IT Outsourcing",
      description: "Skilled developers from Sri Lanka for cost-effective solutions",
    },
    {
      icon: Lightbulb,
      name: "Digital Transformation",
      description: "Consulting to improve efficiency, customer engagement, and innovation",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ProductHero
          title="Technology & Digital Solutions"
          subtitle="Innovation from Sri Lanka"
          description="Custom development, cloud services, and IT outsourcing that empower businesses to scale and succeed"
          image={technologyHero}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="prose max-w-none mb-16">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The digital world is evolving faster than ever, and businesses need technology partners who can deliver 
                  innovation, speed, and reliability. At KANCEY, we provide custom app development, enterprise software 
                  solutions, cloud services, and IT outsourcing that empower companies to scale and succeed.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a Sri Lankan digital solutions provider, we combine technical expertise with global delivery standards, 
                  making us the trusted choice for startups, SMEs, and international enterprises.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-10 border border-blue-500/20">
                <h2 className="text-3xl font-bold mb-8 text-center">Why Choose KANCEY for Digital Solutions?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Custom Solutions",
                      description: "Every app, platform, or system is built to meet your unique needs",
                    },
                    {
                      title: "Trusted IT Outsourcing",
                      description: "Skilled teams, competitive costs, and global standards from Sri Lanka",
                    },
                    {
                      title: "End-to-End Expertise",
                      description: "From strategy and design to development and ongoing support",
                    },
                    {
                      title: "Flexible Engagement",
                      description: "Serving startups, SMEs, and enterprises worldwide",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technology;
