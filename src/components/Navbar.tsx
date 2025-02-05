
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { WaitlistForm } from "@/components/WaitlistForm";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { name: "Home", path: "/" },
    { 
      name: "About", 
      path: "/about", 
      dropdownItems: [
        { name: "About Sqoolr", path: "/about" },
        { name: "Partnerships", path: "/partnerships" },
        { name: "Community", path: "/community" },
      ]
    },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2"
          >
            <img src="/logo.png" alt="Sqoolr Logo" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-sqoolr-navy hover:text-sqoolr-mint transition-colors">
              Sqoolr
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                {mainNavLinks.map((link) => (
                  <NavigationMenuItem key={link.path}>
                    {link.dropdownItems ? (
                      <NavigationMenuTrigger className="font-bold text-sqoolr-navy hover:text-sqoolr-mint">
                        {link.name}
                        <NavigationMenuContent>
                          <div className="p-4 w-48">
                            {link.dropdownItems.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block py-2 px-4 hover:bg-gray-100 rounded-md"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuTrigger>
                    ) : (
                      <Link
                        to={link.path}
                        className={`font-bold transition-colors hover:text-sqoolr-mint ${
                          location.pathname === link.path
                            ? "text-sqoolr-mint"
                            : "text-sqoolr-navy"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full bg-sqoolr-mint text-sqoolr-navy hover:bg-opacity-90 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button
            onClick={() => setIsWaitlistOpen(true)}
            className="hidden lg:inline-block bg-sqoolr-mint text-[#243665] px-6 py-2 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-bold"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-down">
            <div className="container mx-auto px-6">
              {mainNavLinks.map((link) => (
                <div key={link.path} className="py-2">
                  {link.dropdownItems ? (
                    <div className="space-y-2">
                      <div className="font-bold text-sqoolr-navy">{link.name}</div>
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block pl-4 py-2 text-sqoolr-navy hover:text-sqoolr-mint"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block font-bold ${
                        location.pathname === link.path
                          ? "text-sqoolr-mint"
                          : "text-sqoolr-navy"
                      } hover:text-sqoolr-mint`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <button
                onClick={() => {
                  setIsWaitlistOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full mt-4 bg-sqoolr-mint text-[#243665] px-6 py-2 rounded-full hover:bg-opacity-90 text-center font-bold"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} type="waitlist" />
    </nav>
  );
};

export default Navbar;
