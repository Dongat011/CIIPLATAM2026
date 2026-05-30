import { useState } from "react";
import { Link } from "react-router";
import {
  TrendingUp,
  Pickaxe,
  Heart,
  BarChart3,
  Code,
  Brain,
  Briefcase,
  Play,
  Calendar,
  Award,
  BookOpen,
  Download,
  Users,
  Building2,
  Gift,
  ChevronRight
} from "lucide-react";

interface MegaMenuProps {
  menuKey: string;
}

export default function MegaMenu({ menuKey }: MegaMenuProps) {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const megaMenuContent: Record<string, any> = {
    membresias: {
      title: "Membresías",
      items: [
        { label: "Acceso mensual", icon: Calendar, link: "/categoria/membresia-mensual" },
        { label: "Acceso anual", icon: Calendar, link: "/categoria/membresia-anual" },
        { label: "Beneficios incluidos", icon: Gift, link: "/categoria/beneficios" },
      ],
    },
    empresas: {
      title: "Empresas",
      items: [
        { label: "Capacitación corporativa", icon: Building2, link: "/categoria/corporativo" },
        { label: "Programas a medida", icon: Users, link: "/categoria/medida" },
        { label: "Convenios institucionales", icon: Briefcase, link: "/categoria/convenios" },
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
          id: "programacion",
          name: "💻 Programación y datos",
          icon: Code,
          color: "text-purple-600",
          subcategories: [
            {
              name: "Desarrollo de software",
              items: ["Backend", "Frontend", "Fullstack"]
            },
            {
              name: "Análisis de datos",
              items: ["Power BI", "SQL", "Python"]
            },
            {
              name: "Ciencia de datos",
              items: ["Machine Learning", "Deep Learning"]
            }
          ]
        },
        {
          id: "ia",
          name: "🤖 Inteligencia Artificial",
          icon: Brain,
          color: "text-[#3E64DE]",
          items: ["Machine Learning", "Deep Learning", "NLP"]
        },
        {
          id: "bi",
          name: "📊 Business Intelligence",
          icon: BarChart3,
          color: "text-blue-600",
          items: ["Power BI", "Tableau", "Data Visualization"]
        },
        {
          id: "finanzas",
          name: "💰 Finanzas e inversiones",
          icon: TrendingUp,
          color: "text-green-600",
          items: ["Trading", "Finanzas personales"]
        },
        {
          id: "mineria",
          name: "🌱 Minería y gestión ambiental",
          icon: Pickaxe,
          color: "text-yellow-700",
          items: ["Gestión ambiental", "Seguridad minera"]
        },
        {
          id: "salud",
          name: "❤️ Salud y biociencias",
          icon: Heart,
          color: "text-red-600",
          items: ["Salud pública", "Investigación clínica"]
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
        <h3 className="font-bold text-[#3E64DE] mb-8 text-lg uppercase tracking-wider">{content.title}</h3>
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
                  <div className="text-sm text-white font-semibold flex items-center gap-2 group cursor-pointer hover:text-[#3E64DE] transition-colors py-2 px-3 rounded-lg hover:bg-white/5">
                    <span>{specialty.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  </div>

                  {/* Submenu flotante */}
                  {activeSubMenu === specialty.id && (
                    <div className="absolute left-full top-0 ml-2 w-80 bg-[#141523]/98 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-6 animate-in fade-in slide-in-from-left-2 duration-200 z-50">
                      <h4 className="text-white font-bold mb-4 text-base">{specialty.name}</h4>

                      {/* Subcategories or items */}
                      {specialty.subcategories ? (
                        <div className="space-y-4">
                          {specialty.subcategories.map((subcat: any, subIndex: number) => (
                            <div key={subIndex} className="space-y-2">
                              <div className="text-sm text-[#3E64DE] font-medium flex items-center gap-2">
                                <ChevronRight className="w-3 h-3" />
                                <span>{subcat.name}</span>
                              </div>
                              <div className="ml-5 space-y-1">
                                {subcat.items.map((item: string, itemIdx: number) => (
                                  <Link
                                    key={itemIdx}
                                    to={`/categoria/${item.toLowerCase().replace(/ /g, '-')}`}
                                    className="block text-sm text-gray-400 hover:text-white transition-colors py-1 hover:translate-x-1 duration-200"
                                  >
                                    • {item}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : specialty.items ? (
                        <div className="space-y-2">
                          {specialty.items.map((item: string, itemIdx: number) => (
                            <Link
                              key={itemIdx}
                              to={`/categoria/${item.toLowerCase().replace(/ /g, '-')}`}
                              className="block text-sm text-gray-400 hover:text-white transition-colors py-1 hover:translate-x-1 duration-200"
                            >
                              • {item}
                            </Link>
                          ))}
                        </div>
                      ) : null}
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
                    className="block text-sm text-gray-300 hover:text-[#3E64DE] transition-colors py-1 hover:translate-x-1 duration-200"
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
      <div className={content.isGrid ? "grid grid-cols-1 gap-3" : "space-y-2"}>
        {content.items.map((item: any, index: number) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              to={item.link}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 hover:border-[#3E64DE]/30 border border-transparent transition-all duration-300 group"
            >
              <Icon className={`w-6 h-6 ${item.color || "text-[#3E64DE]"} group-hover:scale-110 transition-transform duration-300`} />
              <span className="text-sm font-semibold text-gray-200 group-hover:text-[#3E64DE] transition-colors duration-300">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
