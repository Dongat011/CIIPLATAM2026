import { useState } from "react";
import { Link } from "react-router";
import {
  Heart,
  Play,
  Calendar,
  Users,
  Building2,
  ChevronRight
} from "lucide-react";

interface BioMediMegaMenuProps {
  menuKey: string;
}

export default function BioMediMegaMenu({ menuKey }: BioMediMegaMenuProps) {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const megaMenuContent: Record<string, any> = {
    empresas: {
      title: "Empresas",
      items: [
        { label: "Capacitación corporativa", icon: Building2, link: "/categoria/corporativo" },
        { label: "Programas a medida", icon: Users, link: "/categoria/medida" },
        { label: "Convenios institucionales", icon: Heart, link: "/categoria/convenios" },
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
          id: "fundamentos",
          name: "📚 Fundamentos Digitales",
          items: ["Introducción a HealthTech", "Terminología médica digital", "Ecosistema de salud digital"]
        },
        {
          id: "ia",
          name: "🤖 IA en Salud",
          items: ["IA para diagnóstico clínico", "Machine Learning en medicina", "Chatbots y asistentes médicos", "Análisis predictivo"]
        },
        {
          id: "datos",
          name: "📊 Datos en Salud",
          items: ["Análisis de datos clínicos", "Big Data en salud", "Visualización (dashboards médicos)", "Bioinformática básica"]
        },
        {
          id: "telemedicina",
          name: "💻 Telemedicina",
          items: ["Atención médica remota", "Monitoreo de pacientes", "Plataformas digitales", "Experiencia del paciente"]
        },
        {
          id: "biomedica",
          name: "⚕️ Tecnología Biomédica",
          items: ["Dispositivos inteligentes", "Wearables de salud", "Impresión 3D médica", "Innovación en equipos médicos"]
        },
        {
          id: "sistemas",
          name: "🏥 Sistemas de Salud",
          items: ["Historia clínica electrónica (HCE)", "Sistemas hospitalarios (HIS)", "Interoperabilidad", "Automatización de procesos"]
        },
        {
          id: "seguridad",
          name: "🔒 Seguridad y Ética",
          items: ["Protección de datos médicos", "Ciberseguridad en salud", "Ética en IA", "Normativas digitales"]
        },
        {
          id: "clinica",
          name: "🩺 Clínica Digital",
          items: ["Soporte clínico digital", "Simulación médica virtual", "Herramientas para profesionales", "Toma de decisiones con IA"]
        },
        {
          id: "innovacion",
          name: "💡 Innovación y Negocios",
          items: ["Startups HealthTech", "Modelos de negocio", "Gestión de proyectos", "Innovación disruptiva"]
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
        <h3 className="font-bold text-red-500 mb-8 text-lg uppercase tracking-wider">{content.title}</h3>
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
                  <div className="text-sm text-white font-semibold flex items-center gap-2 group cursor-pointer hover:text-red-500 transition-colors py-2 px-3 rounded-lg hover:bg-white/5">
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
                            className="block text-sm text-gray-400 hover:text-red-400 transition-colors py-1 hover:translate-x-1 duration-200"
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
                    className="block text-sm text-gray-300 hover:text-red-500 transition-colors py-1 hover:translate-x-1 duration-200"
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
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 hover:border-red-500/30 border border-transparent transition-all duration-300 group"
            >
              <Icon className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold text-gray-200 group-hover:text-red-500 transition-colors duration-300">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
