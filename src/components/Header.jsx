import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-amber-200/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-400 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform scale-110"></div>
              <img
                src={logo}
                alt="logo"
                className="relative w-14 h-14 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-white"
              />
            </div>
            <div className="hidden md:block">
              <h2 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                Jewelry Store
              </h2>
              <p className="text-xs text-gray-500">Premium Collection</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center bg-amber-50/50 rounded-2xl p-2 border border-amber-100">
              <NavLink
                to="/"
                active
              >
                <HomeIcon />
                Home
              </NavLink>
              <NavLink to="/necklace">
                <NecklaceIcon />
                Necklace Set
              </NavLink>
              <NavLink to="/about">
                <AboutIcon />
                About Us
              </NavLink>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Cart Button */}
            <button className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                  />
                </svg>
                <span className="hidden sm:inline">
                  Cart - {cartItems.length}
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Login/Logout Button */}
            <button
              className="group relative bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden"
              onClick={() =>
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login")
              }
            >
              <span className="relative z-10 flex items-center gap-2">
                {loginBtn === "Login" ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                )}
                <span className="hidden sm:inline">{loginBtn}</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-amber-200/30 bg-white/95 backdrop-blur-lg">
            <nav className="py-4 space-y-2">
              <MobileNavLink
                to="/"
                active
              >
                <HomeIcon />
                Home
              </MobileNavLink>
              <MobileNavLink to="/necklace">
                <NecklaceIcon />
                Necklace Set
              </MobileNavLink>
              <MobileNavLink to="/about">
                <AboutIcon />
                About Us
              </MobileNavLink>
            </nav>
          </div>
        )}
      </div>

      {/* Decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400"></div>
    </header>
  );
};

// Navigation Link Components
const NavLink = ({ to, children, active = false }) => (
  <Link
    to={to}
    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
      active
        ? "bg-white text-amber-600 shadow-md"
        : "text-gray-600 hover:text-amber-600 hover:bg-white/50"
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, active = false }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
      active
        ? "bg-gradient-to-r from-amber-50 to-rose-50 text-amber-600 border-l-4 border-amber-400"
        : "text-gray-600 hover:text-amber-600 hover:bg-amber-50"
    }`}
  >
    {children}
  </Link>
);

// Icon Components
const HomeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const NecklaceIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

const AboutIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default Header;
