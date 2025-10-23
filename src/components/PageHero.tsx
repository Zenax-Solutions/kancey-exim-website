import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  backLink?: string;
}

const PageHero = ({ title, subtitle, description, image, backLink = "/" }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-secondary/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <Link to={backLink}>
            <Button variant="ghost" size="sm" className="mb-6 text-secondary-foreground hover:text-accent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
          {subtitle && <p className="text-accent font-semibold mb-4 animate-fade-in">{subtitle}</p>}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary-foreground animate-slide-up">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/90 leading-relaxed animate-slide-up" style={{ animationDelay: "100ms" }}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
