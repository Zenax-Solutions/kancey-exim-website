import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";
import teaHero from "@/assets/tea-hero.jpg";

const Tea = () => {
  const varieties = [
    {
      name: "Ceylon Black Tea",
      description: "Full-bodied flavor with bright color and brisk character",
    },
    {
      name: "Ceylon Green Tea",
      description: "Delicate and refreshing with natural antioxidants",
    },
    {
      name: "White Tea",
      description: "Premium silver tips with subtle sweetness",
    },
    {
      name: "Flavored Teas",
      description: "Natural infusions with fruits, spices, and flowers",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ProductHero
          title="Ceylon Tea"
          subtitle="World's Finest Tea"
          description="From the misty highlands of Sri Lanka comes the world's most celebrated tea - pure, aromatic, and exceptionally crafted"
          image={teaHero}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="prose max-w-none mb-16">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Ceylon Tea is recognized globally for its exceptional quality, unique flavor profiles, and rich heritage. 
                  Grown in the pristine highlands of Sri Lanka, our tea plantations benefit from the perfect combination 
                  of altitude, climate, and soil.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  KANCEY EXIM partners with the finest tea estates to bring you premium Ceylon tea that meets the highest 
                  international standards. From bold black teas to delicate greens, we offer a complete range for 
                  wholesale buyers and specialty retailers.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Our Tea Varieties</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {varieties.map((variety, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                            <Leaf className="h-6 w-6 text-green-600" />
                          </div>
                          <span>{variety.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{variety.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-10 border border-green-500/20">
                <h2 className="text-3xl font-bold mb-6">The Ceylon Tea Difference</h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Grown at optimal altitudes (3,000 - 7,000 feet) for superior flavor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Hand-picked by skilled tea pluckers ensuring quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Rich in antioxidants and natural health benefits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Certified export quality meeting international standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tea;
