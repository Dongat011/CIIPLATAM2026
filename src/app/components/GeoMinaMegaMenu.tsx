import { useState } from "react";
import { Link } from "react-router";
import {
  Pickaxe,
  Play,
  Calendar,
  Users,
  Building2,
  Gift,
  ChevronRight
} from "lucide-react";

interface GeoMinaMegaMenuProps {
  menuKey: string;
}

export default function GeoMinaMegaMenu({ menuKey }: GeoMinaMegaMenuProps) {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const megaMenuContent: Record<string, any> = {
    empresas: {
      title: "Empresas",
      items: [
        { label: "Capacitación corporativa", icon: Building2, link: "/categoria/corporativo" },
        { label: "Programas a medida", icon: Users, link: "/categoria/medida" },
        { label: "Convenios institucionales", icon: Pickaxe, link: "/categoria/convenios" },
      ],
    },
    gratis: {
      title: "Gratis para ti",
      items: [
        { label: "Clases gratuitas", icon: Play, link: "/categoria/clases-gratis" },
        { label: "Webinars", icon: Calendar, link: "/categoria/webinars" },
        { label: "Talleres", icon: Users, link: "/categoria/talleres" },
      ],
    },
    programas: {
      title: "ESPECIALÍZATE POR:",
      specialties: [
        {
          id: "exploracion",
          name: "⛏️ Exploración y Geología",
          icon: Pickaxe,
          items: ["Prospección minera", "Geoquímica aplicada", "Geología estructural", "Modelamiento geológico 3D"]
        },
        {
          id: "planeamiento",
          name: "📋 Planeamiento y Operaciones Mineras",
          items: ["Planeamiento de minas", "Diseño de tajos y túneles", "Perforación y voladura", "Optimización de operaciones"]
        },
        {
          id: "ingenieria",
          name: "🏗️ Ingeniería de Minas",
          items: ["Métodos de explotación (superficial y subterránea)", "Ventilación minera", "Transporte y acarreo", "Mecánica de rocas"]
        },
        {
          id: "procesamiento",
          name: "⚗️ Procesamiento de Minerales (Metalurgia)",
          items: ["Conminución (chancado y molienda)", "Flotación de minerales", "Lixiviación", "Plantas concentradoras"]
        },
        {
          id: "seguridad",
          name: "🦺 Seguridad y Salud Ocupacional",
          items: ["Gestión de riesgos", "Seguridad minera", "Higiene ocupacional", "Normativas y cumplimiento"]
        },
        {
          id: "ambiental",
          name: "🌱 Gestión Ambiental y Sostenibilidad",
          items: ["Evaluación de impacto ambiental (EIA)", "Manejo de relaves", "Cierre de minas", "Minería sostenible"]
        },
        {
          id: "tecnologia",
          name: "💻 Tecnología e Innovación Minera",
          items: ["Automatización minera", "Minería digital (Smart Mining)", "Uso de drones en minería", "IoT aplicado a minería"]
        },
        {
          id: "gestion",
          name: "💼 Gestión y Economía Minera",
          items: ["Evaluación de proyectos mineros", "Costos y presupuestos", "Finanzas mineras", "Legislación minera"]
        }
      ],
      sections: [
        {
          title: "🚀 TIPOS DE PROGRAMA",
          items: [
            { label: "Programas en vivo", link: "/categoria/programas-vivo" },
            { label: "Programas grabados", link: "/categoria/programas-grabados" },
            { label: "Alta especialización", link: "/categoria/alta-especializacion" },
            { label: "Certificaciones internacionales", link: "/categoria/certificaciones" },
          ]
        },
        {
          title: "⚡ CURSOS RÁPIDOS",
          items: [
            { label: "Cursos en vivo", link: "/categoria/cursos-vivo" },
            { label: "Cursos por categoría", link: "/categoria/cursos-categoria" },
            { label: "Certificaciones cortas", link: "/categoria/certificaciones-cortas" },
          ]
        },
        {
          title: "📦 RECURSOS",
          items: [
            { label: "Cursos grabados", link: "/categoria/cursos-grabados" },
            { label: "Packs de aprendizaje", link: "/categoria/packs" },
            { label: "Recursos descargables", link: "/categoria/recursos" },
          ]
        }
      ],
      isMultiSection: true,
    },
  };

  const content = megaMenuContent[menuKey];
  if (!content) return null;

  // Handle multi-section menu (for programas)
  if (content.isMultiSection) {
    return (
      <div className="absolute top-full left-0 mt-0 w-screen max-w-6xl bg-[#1a1b2e]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/30 p-8 animate-in fade-in slide-in-from-top-5 duration-200">
        <h3 className="font-bold text-yellow-500 mb-8 text-lg uppercase tracking-wider">{content.title}</h3>
        <div className="grid grid-cols-4 gap-8">
          {/* First column: Specialties */}
          <div className="space-y-4">
            <div className="space-y-3">
              {content.specialties?.map((specialty: any, specIndex: number) => (
                <div
                  key={specIndex}
                  className="relative"
                  onMouseEnter={() => setActiveSubMenu(specialty.id)}
                  onMouseLeave={() => setActiveSubMenu(null)}
                >
                  <div className="text-sm text-white font-semibold flex items-center gap-2 group cursor-pointer hover:text-yellow-500 transition-colors py-2 px-3 rounded-lg hover:bg-white/5">
                    <span>{specialty.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  </div>

                  {/* Submenu flotante */}
                  {activeSubMenu === specialty.id && (
                    <div className="absolute left-full top-0 ml-2 w-80 bg-[#141523]/98 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-6 animate-in fade-in slide-in-from-left-2 duration-200 z-50">
                      <h4 className="text-white font-bold mb-4 text-base">{specialty.name}</h4>
                      <div className="space-y-2">
                        {specialty.items.map((item: string, itemIdx: number) => (
                          <Link
                            key={itemIdx}
                            to={`/categoria/${item.toLowerCase().replace(/ /g, '-')}`}
                            className="block text-sm text-gray-400 hover:text-yellow-400 transition-colors py-1 hover:translate-x-1 duration-200"
                          >
                            • {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Other sections */}
          {content.sections?.map((section: any, sectionIndex: number) => (
            <div key={sectionIndex} className="space-y-4">
              <h4 className="font-bold text-white text-sm mb-4 flex items-center gap-2">
                {section.title}
              </h4>
              <div className="space-y-2">
                {section.items?.map((item: any, itemIndex: number) => (
                  <Link
                    key={itemIndex}
                    to={item.link}
                    className="block text-sm text-gray-300 hover:text-yellow-500 transition-colors py-1 hover:translate-x-1 duration-200"
                  >
                    - {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Regular single-section menu
  return (
    <div className="absolute top-full left-0 mt-0 w-screen max-w-md bg-[#1a1b2e]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/30 p-8 animate-in fade-in slide-in-from-top-5 duration-200">
      <h3 className="font-bold text-white mb-6 text-xl">{content.title}</h3>
      <div className="space-y-2">
        {content.items.map((item: any, index: number) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              to={item.link}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 hover:border-yellow-500/30 border border-transparent transition-all duration-300 group"
            >
              <Icon className="w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold text-gray-200 group-hover:text-yellow-500 transition-colors duration-300">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
