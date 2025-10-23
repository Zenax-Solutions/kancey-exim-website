import { Leaf, Shirt, Truck, Code, Coffee, Apple, Droplet, Flame } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      icon: Flame,
      title: "Spices",
      description: "Ceylon cinnamon, pepper, cloves, nutmeg, and turmeric - the finest spices from the Spice Island",
      color: "from-orange-500 to-red-600",
      link: "/products/spices",
    },
    {
      icon: Coffee,
      title: "Tea & Coffee",
      description: "Premium Ceylon tea and aromatic coffee from Sri Lanka's finest plantations",
      color: "from-amber-600 to-orange-700",
      link: "/products/tea",
    },
    {
      icon: Apple,
      title: "Fruits & Vegetables",
      description: "Fresh tropical produce including mango, pineapple, papaya, and farm-fresh vegetables",
      color: "from-green-500 to-emerald-600",
      link: "/products/fruits-vegetables",
    },
    {
      icon: Droplet,
      title: "Coconut Products",
      description: "Desiccated coconut, oils, milk, coir products, and activated carbon",
      color: "from-blue-500 to-cyan-600",
      link: "/products/coconut",
    },
    {
      icon: Shirt,
      title: "Apparel & Textiles",
      description: "Custom workwear, uniforms, socks, towels, rainwear, and premium lingerie",
      color: "from-purple-500 to-pink-600",
      link: "/products/apparel",
    },
    {
      icon: Truck,
      title: "Industrial Tyres",
      description: "Forklift, construction, agricultural, and solid tyres for heavy-duty applications",
      color: "from-gray-700 to-gray-900",
      link: "/products/industrial-tyres",
    },
    {
      icon: Code,
      title: "Technology & Digital",
      description: "Custom app development, enterprise software, cloud solutions, and IT outsourcing",
      color: "from-indigo-500 to-blue-600",
      link: "/products/technology",
    },
    {
      icon: Leaf,
      title: "Responsible Sourcing",
      description: "Ethical partnerships with local farmers and manufacturers ensuring sustainable practices",
      color: "from-teal-500 to-green-600",
      link: "/company/responsible-sourcing",
    },
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Products & Services</h2>
          <p className="text-lg text-muted-foreground">
            From agriculture to technology, we deliver excellence across diverse categories
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Link key={index} to={product.link}>
              <Card 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-slide-up overflow-hidden h-full"
                style={{ animationDelay: `${index * 50}ms` }}
              >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <product.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Every product tells a story of resilience, craftsmanship, and a nation rich in potential
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
