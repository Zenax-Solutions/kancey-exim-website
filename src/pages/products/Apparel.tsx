import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt } from "lucide-react";
import apparelHero from "@/assets/apparel-hero.jpg";

const Apparel = () => {
  const products = [
    {
      name: "Custom Workwear & Uniforms",
      description: "Durable and comfortable designs for industries, corporates, and service sectors with custom branding",
    },
    {
      name: "Socks",
      description: "High-quality socks for daily wear, sports, and fashion - available in bulk supply",
    },
    {
      name: "Towels",
      description: "Soft, absorbent, and durable towels for hotels, spas, and wholesale distribution",
    },
    {
      name: "Rainwear",
      description: "Protective, durable, and lightweight for urban commuters and industrial users",
    },
    {
      name: "Lingerie",
      description: "Stylish and comfortable designs meeting international export standards",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ProductHero
          title="Apparel & Textiles"
          subtitle="Quality Manufacturing"
          description="Trusted Sri Lankan apparel manufacturing - from custom workwear to premium textiles for global brands"
          image={apparelHero}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="prose max-w-none mb-16">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Sri Lanka is known worldwide as a trusted hub for apparel and textile manufacturing, producing garments 
                  for leading international brands. At KANCEY EXIM, we proudly contribute to this legacy by offering a 
                  wide range of customized apparel and textile products.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a commitment to quality, customization, and reliability, KANCEY serves international wholesale 
                  buyers, distributors, retailers, corporate clients, and fashion brands who require apparel solutions 
                  that meet global standards.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {products.map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                        <Shirt className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{product.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Why Choose Sri Lankan Apparel?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Quality Craftsmanship - Skilled workforce with decades of experience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Reliability - Trusted supplier to leading international brands</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Ethical & Sustainable Practices - Responsible manufacturing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Customization - Handle diverse requirements at scale</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Why Partner with KANCEY?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Diverse product portfolio across all categories</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Bulk exports and small B2B orders</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Customization & private-label services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>Timely global delivery with strict quality standards</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apparel;
