import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Partnerships from "./pages/Partnerships";
import Community from "./pages/Community";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import PartnerSchool from "./pages/partnerships/PartnerSchool";
import TechnologyPartners from "./pages/partnerships/TechnologyPartners";
import AmbassadorProgram from "./pages/partnerships/AmbassadorProgram";
import InvestorPartnership from "./pages/partnerships/InvestorPartnership";
import HelpCenter from "./pages/HelpCenter";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/partnerships" element={<Partnerships />} />
                <Route path="/partnerships/school" element={<PartnerSchool />} />
                <Route path="/partnerships/tech" element={<TechnologyPartners />} />
                <Route path="/partnerships/ambassador" element={<AmbassadorProgram />} />
                <Route path="/partnerships/investor" element={<InvestorPartnership />} />
                <Route path="/community" element={<Community />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
