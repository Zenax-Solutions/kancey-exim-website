import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck } from "lucide-react";
import tyresHero from "@/assets/tyres-hero.jpg";

const IndustrialTyres = () => {
  const tyreTypes = [
    {
      name: "Forklift Tyres",
      description: "Built to handle demanding warehouse and logistics operations with stability and long wear",
    },
    {
      name: "Construction Tyres",
      description: "Heavy-duty tyres for loaders, excavators, and construction equipment",
    },
    {
      name: "Agricultural Tyres",
      description: "Designed for tough field conditions with superior traction and durability",
    },
    {
      name: "Solid Tyres",
      description: "Maintenance-free tyres that resist punctures for industrial settings",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ProductHero
          title="Industrial Tyres"
          subtitle="Built to Last"
          description="Premium Sri Lankan rubber tyres for heavy-duty applications - from forklifts to construction and agriculture"
          image={tyresHero}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="prose max-w-none mb-16">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Sri Lanka has long been recognized as a hub for high-quality rubber products, and its tyre manufacturing 
                  industry is trusted worldwide for durability and performance. At KANCEY EXIM, we continue this tradition 
                  by delivering a wide range of industrial tyres designed for heavy-duty applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each tyre is crafted with premium Sri Lankan rubber, ensuring toughness, reliability, and longer service 
                  life. We are a reliable rubber tyres exporter for distributors, construction companies, and agricultural 
                  industries worldwide.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {tyreTypes.map((tyre, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gray-700/10 flex items-center justify-center mb-4">
                        <Truck className="h-6 w-6 text-gray-700" />
                      </div>
                      <CardTitle className="text-xl">{tyre.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{tyre.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 rounded-2xl p-10 border border-gray-500/20 mb-8">
                <h2 className="text-3xl font-bold mb-6">Why Choose Industrial Tyres from Sri Lanka?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Quality Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Durable & Reliable - Built for heavy loads and rough terrains</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Cost-Effective - High performance at competitive prices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Environmentally Responsible - Sustainably sourced natural rubber</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">KANCEY Advantage</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Wide product range covering all industrial applications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Bulk & B2B supply for distributors and businesses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Proven logistics and international shipping capabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Strict quality checks ensuring customer expectations</span>
                      </li>
                    </ul>
                  </div>
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

export default IndustrialTyres;
