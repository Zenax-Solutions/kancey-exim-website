import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import { Card, CardContent } from "@/components/ui/card";
import fruitsHero from "@/assets/fruits-hero.jpg";

const FruitsVegetables = () => {
  const fruits = [
    "Mango", "Pineapple", "Papaya", "Bananas", "Guava", 
    "Jackfruit", "Passion Fruit", "Avocado"
  ];

  const vegetables = [
    "Okra", "Green Beans", "Brinjal (Eggplant)", "Pumpkin",
    "Drumsticks", "Gourds", "Leafy Greens", "Peppers"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ProductHero
          title="Fresh Fruits & Vegetables"
          subtitle="Tropical Freshness"
          description="Nature's bounty from Sri Lanka's fertile lands - delivering freshness, flavor, and nutrition to global markets"
          image={fruitsHero}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="prose max-w-none mb-16">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At KANCEY EXIM, we connect global markets with the natural goodness of Sri Lankan fruits and vegetables. 
                  Known for their freshness, rich taste, and nutritional value, our produce is grown in fertile tropical 
                  lands and carefully selected for export quality standards.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From juicy fruits to farm-fresh vegetables, we supply in bulk quantities to international buyers, 
                  wholesale distributors, restaurants, and supermarkets worldwide.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-primary">Fresh Fruits</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {fruits.map((fruit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-accent font-bold">●</span>
                          <span className="text-foreground">{fruit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-primary">Farm Vegetables</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {vegetables.map((vegetable, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-accent font-bold">●</span>
                          <span className="text-foreground">{vegetable}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-10 border border-green-500/20">
                <h2 className="text-3xl font-bold mb-6">Why Choose Sri Lankan Produce?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Quality & Freshness</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Grown in rich, fertile tropical soils</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Year-round sunshine for optimal growth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Natural and flavorful compared to mass-produced alternatives</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Our Commitment</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Export-quality standards with strict quality checks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Careful packaging for international transport</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Reliable shipping and timely global delivery</span>
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

export default FruitsVegetables;
