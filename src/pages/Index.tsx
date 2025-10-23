import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, TrendingUp, Award, Users, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroGlobe from "@/assets/hero-globe.jpg";
import heroTea from "@/assets/hero-tea-plantation.jpg";
import heroShipping from "@/assets/hero-shipping.jpg";
import warehouseOps from "@/assets/warehouse-operations.jpg";
import professionalPortrait from "@/assets/professional-portrait.jpg";
import spicesImg from "@/assets/spices-hero.jpg";
import teaImg from "@/assets/tea-hero.jpg";
import fruitsImg from "@/assets/fruits-hero.jpg";
import coconutImg from "@/assets/coconut-hero.jpg";
import apparelImg from "@/assets/apparel-hero.jpg";
import tyresImg from "@/assets/tyres-hero.jpg";
import technologyImg from "@/assets/technology-hero.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: heroGlobe,
      title: "New way, New value",
      subtitle: "Sustainable by",
      description: "Connecting Sri Lanka's Heritage with Global Markets",
    },
    {
      image: heroTea,
      title: "Premium Quality",
      subtitle: "Excellence in",
      description: "Export Quality Products from Sri Lanka to the World",
    },
    {
      image: heroShipping,
      title: "Global Reach",
      subtitle: "Trusted for",
      description: "Serving 25+ Countries with Reliable Trade Solutions",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const allBusinessAreas = [
    {
      title: "Spices & Ceylon Cinnamon",
      image: spicesImg,
      link: "/products/spices",
      description: "Premium Ceylon cinnamon, pepper, cloves, and turmeric",
    },
    {
      title: "Ceylon Tea",
      image: teaImg,
      link: "/products/tea",
      description: "World-renowned tea from Sri Lankan highlands",
    },
    {
      title: "Fruits & Vegetables",
      image: fruitsImg,
      link: "/products/fruits-vegetables",
      description: "Fresh tropical produce and farm vegetables",
    },
    {
      title: "Coconut Products",
      image: coconutImg,
      link: "/products/coconut",
      description: "From desiccated coconut to coir and activated carbon",
    },
    {
      title: "Apparel & Textiles",
      image: apparelImg,
      link: "/products/apparel",
      description: "Custom workwear, uniforms, and quality textiles",
    },
    {
      title: "Industrial Tyres",
      image: tyresImg,
      link: "/products/industrial-tyres",
      description: "Heavy-duty tyres for construction and agriculture",
    },
    {
      title: "Technology Solutions",
      image: technologyImg,
      link: "/products/technology",
      description: "Custom development and IT outsourcing services",
    },
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving 25+ countries across continents",
    },
    {
      icon: TrendingUp,
      title: "Quality Assured",
      description: "99% quality standard compliance",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "International export certifications",
    },
    {
      icon: Users,
      title: "100+ Partners",
      description: "Trusted by global businesses",
    },
  ];

  const newsItems = [
    {
      date: "2025.03.15",
      title: "KANCEY EXIM Expands Partnership Network Across Southeast Asia",
      category: "Business Growth",
    },
    {
      date: "2025.03.10",
      title: "New Quality Standards Implemented for Ceylon Spice Exports",
      category: "Quality Assurance",
    },
    {
      date: "2025.03.05",
      title: "Sustainable Sourcing Initiative Reaches 500+ Local Farmers",
      category: "Sustainability",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section with Auto-Sliding Images */}
        <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
          {/* Slides */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
            </div>
          ))}
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
            <div className="max-w-2xl">
              <p className="text-accent font-semibold mb-4 text-lg animate-fade-in">
                {heroSlides[currentSlide].subtitle}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-secondary-foreground animate-slide-up">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "100ms" }}>
                {heroSlides[currentSlide].description}
              </p>
              <Link to="/company/who-we-are">
                <Button size="lg" className="group text-lg px-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-12 h-1 rounded-full transition-all ${
                  index === currentSlide ? "bg-primary w-16" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </section>

        {/* Tagline Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bridging Sri Lanka's Finest Products with Global Markets
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From premium spices and tea to industrial solutions and digital services, 
                KANCEY EXIM delivers excellence across diverse categories. We don't just export goods; 
                we export Sri Lanka's spirit, ensuring every delivery carries both quality and meaning.
              </p>
            </div>
          </div>
        </section>

        {/* Business Areas Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Business</h2>
              <p className="text-lg text-muted-foreground">Comprehensive export solutions across multiple industries</p>
            </div>
            
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allBusinessAreas.map((area, index) => (
                <Link key={index} to={area.link}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={area.image} 
                        alt={area.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{area.description}</p>
                      <div className="flex items-center text-primary font-medium">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Stats */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Company Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/95 to-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src={warehouseOps}
                  alt="Our Operations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-accent font-semibold mb-4">About KANCEY EXIM</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  A Premier Trading Company that Constantly Cultivates New Businesses and Creates Value
                </h2>
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  Founded in 2025 with a vision larger than business alone, KANCEY EXIM bridges Sri Lanka's 
                  traditions with global markets. We partner directly with farmers, manufacturers, and creators 
                  across the island, helping them reach international markets.
                </p>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                  Through ethical partnerships and sustainable practices, we create opportunities for rural 
                  producers while delivering world-class quality to global markets.
                </p>
                <Link to="/company/who-we-are">
                  <Button variant="outline" size="lg" className="group bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                    Our Story
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <p className="text-primary font-semibold mb-4">Leadership</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  A Message From Our Managing Director
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  "At KANCEY EXIM, we believe in creating value beyond transactions. Our mission is to 
                  empower local communities while delivering exceptional quality to our global partners. 
                  Every product tells a story of resilience, craftsmanship, and Sri Lanka's rich heritage."
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  "We are committed to sustainable growth, ethical practices, and building lasting 
                  partnerships that benefit all stakeholders in our value chain."
                </p>
                <Link to="/company/who-we-are">
                  <Button variant="outline" size="lg" className="group">
                    Our Values
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src={professionalPortrait}
                  alt="Managing Director"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* News & Updates */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Updates</h2>
                  <p className="text-muted-foreground">Stay informed about our latest achievements and initiatives</p>
                </div>
                <Link to="/resources/blog">
                  <Button variant="outline" className="hidden md:flex items-center gap-2">
                    View All News
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {newsItems.map((news, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{news.date}</span>
                      </div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                        {news.category}
                      </span>
                      <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 md:hidden text-center">
                <Link to="/resources/blog">
                  <Button variant="outline" className="w-full">
                    View All News
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Creating Two Types of Value for a Prosperous Future
              </h2>
              <p className="text-xl mb-8 opacity-95">
                Partner with us to experience the finest Sri Lankan products and services, 
                backed by ethical sourcing and global excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact">
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/company/responsible-sourcing">
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
                    Our Sourcing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Let's discuss how KANCEY EXIM can support your business growth
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-8 text-center">
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">info@kanceyexim.lk</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8 text-center">
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-muted-foreground">+94 11 234 5678</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8 text-center">
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p className="text-muted-foreground">Colombo, Sri Lanka</p>
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

export default Index;
