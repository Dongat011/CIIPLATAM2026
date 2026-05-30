import { useState } from "react";
import { Link } from "react-router";
import { Search, Globe, ChevronDown, Menu, X, User, ShoppingCart, Crown } from "lucide-react";
import { Button } from "./ui/button";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [currency, setCurrency] = useState("USD");

  const menuItems = [
    { label: "Programas", key: "programas" },
    { label: "Empresas", key: "empresas" },
    { label: "Gratis para ti", key: "gratis" },
    { label: "Nosotros", key: "nosotros" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a0b14]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="10" width="30" height="30" rx="4" fill="#3E64DE"/>
                <path d="M8 25L14 31L22 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="38" y="32" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#212327">
                  CIIP LATAM
                </text>
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setActiveMegaMenu(item.key)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                {item.key === "nosotros" ? (
                  <Link
                    to="/nosotros"
                    className="px-4 py-2 text-sm font-semibold text-gray-200 hover:text-[#3E64DE] flex items-center gap-1 transition-all duration-300 hover:bg-white/5 rounded-lg"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="px-4 py-2 text-sm font-semibold text-gray-200 hover:text-[#3E64DE] flex items-center gap-1 transition-all duration-300 hover:bg-white/5 rounded-lg">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}
                {activeMegaMenu === item.key && item.key !== "nosotros" && (
                  <MegaMenu menuKey={item.key} />
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button className="p-2.5 text-gray-300 hover:text-[#3E64DE] hover:bg-white/5 rounded-lg transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>

            {/* Membresías - Destacado */}
            <Link
              to="/membresias"
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
            >
              <Crown className="w-4 h-4" />
              Membresías
            </Link>

            {/* Cart */}
            <button className="relative p-2.5 text-gray-300 hover:text-[#3E64DE] hover:bg-white/5 rounded-lg transition-all duration-300">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#3E64DE] to-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg shadow-blue-500/30">
                0
              </span>
            </button>

            {/* Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="hidden md:block px-4 py-2.5 text-sm bg-white/5 border border-white/10 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E64DE] hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <option value="USD" className="bg-[#1a1b2e]">🇺🇸 USD</option>
              <option value="EUR" className="bg-[#1a1b2e]">🇪🇺 EUR</option>
              <option value="MXN" className="bg-[#1a1b2e]">🇲🇽 MXN</option>
              <option value="COP" className="bg-[#1a1b2e]">🇨🇴 COP</option>
              <option value="PEN" className="bg-[#1a1b2e]">🇵🇪 PEN</option>
            </select>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-gray-200 hover:text-white hover:bg-white/5">
                Iniciar sesión
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-[#3E64DE] to-blue-600 hover:from-[#395BCA] hover:to-blue-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300">
                Registrarse
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 text-gray-300 hover:bg-white/5 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 backdrop-blur-xl">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.key === "membresias" ? "/membresias" : item.key === "nosotros" ? "/nosotros" : "/"}
                  className="block px-4 py-3 text-gray-200 hover:bg-white/5 hover:text-[#3E64DE] rounded-lg transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-white/10 mt-4">
                <Button variant="outline" className="w-full border-white/20 text-gray-200 hover:bg-white/5">
                  Iniciar sesión
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#3E64DE] to-blue-600 hover:from-[#395BCA] hover:to-blue-700 text-white shadow-lg shadow-blue-500/20">
                  Registrarse
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
