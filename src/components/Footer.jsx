import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function JewelryFooter() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Lumina Jewels
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Crafting timeless elegance with exquisite jewelry pieces that
              celebrate life's precious moments.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">
              Collections
            </h4>
            <ul className="space-y-2">
              {[
                "Rings",
                "Necklaces",
                "Earrings",
                "Bracelets",
                "Wedding Sets",
                "Custom Designs",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">
              Customer Care
            </h4>
            <ul className="space-y-2">
              {[
                "Size Guide",
                "Care Instructions",
                "Returns & Exchange",
                "Shipping Info",
                "Warranty",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  hello@luminajewels.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  123 Diamond District
                  <br />
                  New York, NY 10036
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 Lumina Jewels. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>
    </footer>
  );
}
