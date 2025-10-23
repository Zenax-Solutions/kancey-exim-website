import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import spicesHero from "@/assets/spices-hero.jpg";

const Spices = () => {
  const products = [
    {
      name: "Ceylon Cinnamon",
      description: "Known as 'true cinnamon' - lighter, sweeter, and healthier than common cassia",
    },
    {
      name: "Black Pepper",
      description: "Export-quality pepper with sharp bite and bold aroma",
    },
    {
      name: "Cloves",
      description: "High-oil content cloves for culinary and medicinal uses",
    },
    {
      name: "Nutmeg",
      description: "Rich and warm spice for sweet and savory applications",
    },
    {
      name: "Turmeric",
      description: "Vibrant golden color, valued for flavor and wellness properties",
    },
  ];

  const features = [
    "Export-Quality Standards - Carefully graded for purity and freshness",
    "Bulk Supply - Wholesale and large-scale exports",
    "Trusted Worldwide - From restaurants to distributors",
    "Global Shipping - Seamless logistics and timely delivery",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ProductHero
          title="Sri Lankan Spices"
          subtitle="Premium Export Quality"
          description="From the Spice Island to your shelves - authentic Ceylon spices prized for their delicate aroma, unique taste, and health benefits"
          image={spicesHero}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Introduction */}
              <div className="prose max-w-none mb-16">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Sri Lanka, often called the Spice Island, has been the heart of the global spice trade for centuries. 
                  Among its treasures, Ceylon cinnamon stands out as one of the world's most sought-after spices, prized 
                  for its delicate aroma, unique taste, and health benefits.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At KANCEY EXIM, we bring you the true essence of Sri Lankan spices, sourcing and exporting export-quality 
                  cinnamon, pepper, cloves, nutmeg, and turmeric to international buyers, wholesale distributors, and restaurants.
                </p>
              </div>

              {/* Products Grid */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Our Spice Range</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <span>{product.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{product.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="bg-muted/50 rounded-2xl p-10">
                <h2 className="text-3xl font-bold mb-8">Why Choose KANCEY as Your Bulk Spice Supplier?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg">{feature}</p>
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

export default Spices;
