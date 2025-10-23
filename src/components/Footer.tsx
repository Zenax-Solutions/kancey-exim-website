import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const footerLinks = {
    Products: [
      "Spices & Tea",
      "Fruits & Vegetables",
      "Coconut Products",
      "Apparel & Textiles",
      "Industrial Tyres",
    ],
    Company: [
      "About Us",
      "Our Values",
      "Responsible Sourcing",
      "Technology Solutions",
      "Contact",
    ],
    Resources: [
      "Blog & News",
      "Case Studies",
      "Quality Standards",
      "Shipping Information",
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <img src={logo} alt="KANCEY EXIM Logo" className="h-16 w-auto" />
            <p className="text-sm leading-relaxed opacity-90 max-w-sm">
              Bridging Sri Lanka's finest products with global markets. 
              Creating opportunities and delivering excellence since 2025.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} KANCEY EXIM. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Privacy Policy
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Terms of Service
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
