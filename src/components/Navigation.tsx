import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const productLinks = [
    { name: "Spices", href: "/products/spices" },
    { name: "Tea & Coffee", href: "/products/tea" },
    { name: "Fruits & Vegetables", href: "/products/fruits-vegetables" },
    { name: "Coconut Products", href: "/products/coconut" },
    { name: "Apparel & Textiles", href: "/products/apparel" },
    { name: "Industrial Tyres", href: "/products/industrial-tyres" },
    { name: "Technology Solutions", href: "/products/technology" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/company/who-we-are" },
    { name: "Sourcing", href: "/company/responsible-sourcing" },
    { name: "Blog", href: "/resources/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="KANCEY EXIM Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium outline-none">
                  Products
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background border-border z-[100]">
                {productLinks.map((product, index) => (
                  <div key={product.name}>
                    <DropdownMenuItem asChild>
                      <Link 
                        to={product.href}
                        className="cursor-pointer"
                      >
                        {product.name}
                      </Link>
                    </DropdownMenuItem>
                    {index < productLinks.length - 1 && index === 3 && (
                      <DropdownMenuSeparator />
                    )}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/#contact">
              <Button variant="default" size="lg">
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-3 px-4 text-foreground hover:bg-muted rounded-md hover:text-primary transition-all font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Products Section */}
            <div className="pt-2 pb-3 px-4 space-y-2">
              <div className="text-sm font-semibold text-muted-foreground mb-3">Products</div>
              {productLinks.map((product) => (
                <Link
                  key={product.name}
                  to={product.href}
                  className="block py-2 pl-4 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </div>
            
            <div className="pt-4">
              <a href="/#contact" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="w-full" size="lg">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
