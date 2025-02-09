import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sqoolr-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Sqoolr Logo" className="h-8 w-auto" />
              <h3 className="text-2xl font-bold">Sqoolr</h3>
            </div>
            <p className="text-gray-300">
              Enabling Better Learning Outcomes
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-sqoolr-mint transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-sqoolr-mint transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-sqoolr-mint transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-sqoolr-mint transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-300 hover:text-sqoolr-mint transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-sqoolr-mint transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:hello@sqoolr.ng"
                  className="text-gray-300 hover:text-sqoolr-mint transition-colors"
                >
                  hello@sqoolr.ng
                </a>
              </li>
              <li>
                <a 
                  href="tel:+2349161410089"
                  className="text-gray-300 hover:text-sqoolr-mint transition-colors"
                >
                  +234 916 141 0089
                </a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/sqoolr.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-sqoolr-mint flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Instagram size={20} className="text-sqoolr-navy" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-sqoolr-mint flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Facebook size={20} className="text-sqoolr-navy" />
            </a>
            <a
              href="https://linkedin.com/company/sqoolr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-sqoolr-mint flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Linkedin size={20} className="text-sqoolr-navy" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-sqoolr-mint flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Twitter size={20} className="text-sqoolr-navy" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Sqoolr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
