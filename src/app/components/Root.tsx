import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "../.././imports/cropped-LOGOS-105x69.png";

export function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/podcast", label: "Podcast" },
    { path: "/contact", label: "Contact" },
    { path: "/assessment", label: "Assessment", highlighted: true },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImg} alt="FDS Logo" className="h-10" />
              <span className="font-semibold text-lg text-neutral-900">
                Fisayo Dayo Samuel
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    location.pathname === link.path
                      ? "bg-[#1e3a5f] text-white"
                      : link.highlighted
                        ? "bg-[#e63946] text-white hover:bg-[#d62828]"
                        : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-all ${
                    location.pathname === link.path
                      ? "bg-[#1e3a5f] text-white"
                      : link.highlighted
                        ? "bg-[#e63946] text-white"
                        : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImg} alt="FDS Logo" className="h-10" />
                <span className="font-semibold text-lg">
                  Fisayo Dayo Samuel
                </span>
              </div>
              <p className="text-neutral-400 max-w-md">
                Empowering individuals and couples to navigate life’s
                transitions, deepen emotional connection, and create a joyful,
                intentional home.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-neutral-400">
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Connect</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>Email: fisayofds@gmail.com</li>
                <li>Phone: +234 XXX XXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400">
            <p>
              &copy; {new Date().getFullYear()} Fisayo Dayo-Samuel. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
