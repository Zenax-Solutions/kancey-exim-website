import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import coconutHero from "@/assets/coconut-hero.jpg";

const CoconutProducts = () => {
  const categories = [
    {
      title: "Coconut Kernel Products",
      items: [
        "Desiccated Coconut - Finely grated and dried for bakeries and food industries",
        "Coconut Chips - Natural crisp snacks for retail and processing",
        "Coconut Oil - Pure and versatile for cooking and cosmetics",
        "Virgin Coconut Oil - Cold-pressed for superior aroma and health benefits",
        "Coconut Milk & Cream - Smooth and rich for culinary uses",
        "Coconut Butter - Nutrient-rich spread and cooking ingredient",
        "Coconut Flour - Gluten-free alternative for baking",
      ],
    },
    {
      title: "Coconut Fiber Products",
      items: [
        "Coir Twine & Ropes - Biodegradable packaging and agriculture solutions",
        "Coir Mats - Durable for home and commercial spaces",
        "Coir Geotextiles - Natural erosion control and soil protection",
        "Coir Brooms & Brushes - Eco-friendly cleaning tools",
      ],
    },
    {
      title: "Coconut Shell Products",
      items: [
        "Activated Carbon - High-grade filtration for water purification and industrial use",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ProductHero
          title="Coconut Products"
          subtitle="Nature's Complete Resource"
          description="From food to fiber to industrial solutions - unlocking the full potential of Sri Lanka's coconut tree"
          image={coconutHero}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="prose max-w-none mb-16">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At KANCEY EXIM, we bring the natural versatility of the coconut tree to global markets. From food 
                  ingredients to industrial solutions, our Sri Lankan coconut products are trusted for their purity, 
                  strength, and export-quality standards.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We specialize in three main categories: coconut kernel-based products, coconut fiber-based products, 
                  and coconut shell-based products, supplying in bulk quantities to international buyers, distributors, 
                  and manufacturers.
                </p>
              </div>

              <div className="space-y-8">
                {categories.map((category, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-accent/10 to-accent/5">
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <ul className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">●</span>
                            <span className="text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 border border-primary/20">
                <h2 className="text-3xl font-bold mb-6">Why Choose KANCEY for Coconut Products?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Wide range of coconut-based products - food, fiber, and industrial",
                    "Bulk supply & global export expertise",
                    "Strict quality assurance for international markets",
                    "Eco-friendly and sustainable sourcing practices",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold text-xl">✓</span>
                      <p className="text-lg">{point}</p>
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

export default CoconutProducts;
