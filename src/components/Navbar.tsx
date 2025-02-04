import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Demo", path: "/demo" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Community", path: "/community" },
    { name: "Partnerships", path: "/partnerships" },
    { name: "FAQ", path: "/faq" },
    { name: "Pricing", path: "/pricing" },
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
            className="text-2xl font-bold text-sqoolr-navy hover:text-sqoolr-mint transition-colors"
          >
            Sqoolr
          </Link>
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-sqoolr-mint ${
                  location.pathname === link.path
                    ? "text-sqoolr-mint"
                    : "text-sqoolr-navy"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="bg-sqoolr-mint text-[#243665] px-6 py-2 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;