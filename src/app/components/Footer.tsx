import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a0b14] to-[#141523] text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="10" width="30" height="30" rx="4" fill="#3E64DE"/>
                <path d="M8 25L14 31L22 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="38" y="32" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="white">
                  CIIP LATAM
                </text>
              </svg>
            </div>
            <p className="text-sm mb-4">
              Transformamos vidas a través de la educación de calidad. Más de 50,000 profesionales confían en nosotros.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-[#3E64DE] hover:border-[#3E64DE] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-[#3E64DE] hover:border-[#3E64DE] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-[#3E64DE] hover:border-[#3E64DE] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-[#3E64DE] hover:border-[#3E64DE] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-[#3E64DE] hover:border-[#3E64DE] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programas */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-lg">Programas</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/categoria/programas-vivo" className="hover:text-[#3E64DE] transition-colors duration-300">Programas en vivo</Link></li>
              <li><Link to="/categoria/cursos-express" className="hover:text-[#3E64DE] transition-colors duration-300">Cursos Express</Link></li>
              <li><Link to="/categoria/infoproductos" className="hover:text-[#3E64DE] transition-colors duration-300">Infoproductos</Link></li>
              <li><Link to="/categoria/membresias" className="hover:text-[#3E64DE] transition-colors duration-300">Membresías</Link></li>
              <li><Link to="/categoria/empresas" className="hover:text-[#3E64DE] transition-colors duration-300">Para Empresas</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-lg">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#3E64DE] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Contacto Académico</p>
                  <a href="mailto:contacto@ciiflatam.com" className="hover:text-[#3E64DE] transition-colors duration-300">
                    contacto@ciiflatam.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#3E64DE] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Soporte</p>
                  <a href="tel:+51987654321" className="hover:text-[#3E64DE] transition-colors duration-300">
                    +51 987 654 321
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3E64DE] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Oficinas</p>
                  <p>Ciudad de México, México</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-lg">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/terminos" className="hover:text-[#3E64DE] transition-colors duration-300">Términos y Condiciones</Link></li>
              <li><Link to="/privacidad" className="hover:text-[#3E64DE] transition-colors duration-300">Política de Privacidad</Link></li>
              <li><Link to="/cookies" className="hover:text-[#3E64DE] transition-colors duration-300">Política de Cookies</Link></li>
              <li><Link to="/devoluciones" className="hover:text-[#3E64DE] transition-colors duration-300">Política de Devoluciones</Link></li>
              <li><Link to="/afiliados" className="hover:text-[#3E64DE] transition-colors duration-300">Programa de Afiliados</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-sm text-center">
          <p className="text-gray-400">&copy; 2026 CIIP LATAM. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
