import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Technology from "@/components/Technology";
import ResponsibleSourcing from "@/components/ResponsibleSourcing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Products />
        <Technology />
        <ResponsibleSourcing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
