import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Product Pages
import Spices from "./pages/products/Spices";
import Tea from "./pages/products/Tea";
import FruitsVegetables from "./pages/products/FruitsVegetables";
import CoconutProducts from "./pages/products/CoconutProducts";
import Apparel from "./pages/products/Apparel";
import IndustrialTyres from "./pages/products/IndustrialTyres";
import Technology from "./pages/products/Technology";

// Company Pages
import WhoWeAre from "./pages/company/WhoWeAre";
import ResponsibleSourcing from "./pages/company/ResponsibleSourcing";

// Resources
import Blog from "./pages/resources/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Preloader />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Product Routes */}
          <Route path="/products/spices" element={<Spices />} />
          <Route path="/products/tea" element={<Tea />} />
          <Route path="/products/fruits-vegetables" element={<FruitsVegetables />} />
          <Route path="/products/coconut" element={<CoconutProducts />} />
          <Route path="/products/apparel" element={<Apparel />} />
          <Route path="/products/industrial-tyres" element={<IndustrialTyres />} />
          <Route path="/products/technology" element={<Technology />} />
          
          {/* Company Routes */}
          <Route path="/company/who-we-are" element={<WhoWeAre />} />
          <Route path="/company/responsible-sourcing" element={<ResponsibleSourcing />} />
          
          {/* Resources Routes */}
          <Route path="/resources/blog" element={<Blog />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
