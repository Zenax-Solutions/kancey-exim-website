import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProductHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const ProductHero = ({ title, subtitle, description, image }: ProductHeroProps) => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-6 text-secondary-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <p className="text-accent font-semibold mb-4 animate-fade-in">{subtitle}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary-foreground animate-slide-up">
            {title}
          </h1>
          <p className="text-xl text-secondary-foreground/90 leading-relaxed animate-slide-up" style={{ animationDelay: "100ms" }}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
