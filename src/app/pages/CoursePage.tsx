import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import {
  Play,
  Star,
  Users,
  Clock,
  Calendar,
  Award,
  CheckCircle2,
  CreditCard,
  Shield,
  TrendingUp,
  ChevronDown,
  FileText,
  Target,
  Briefcase,
  UserCheck,
  Download,
  Sparkles,
  Rocket,
  Crown
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function CoursePage() {
  const { id } = useParams();
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const courseData = {
    title: "Programa Avanzado en Finanzas Cuantitativas",
    subtitle: "Domina el análisis cuantitativo y trading algorítmico desde cero",
    instructor: {
      name: "Dr. Carlos Mendoza",
      title: "PhD en Finanzas",
      company: "Ex Goldman Sachs",
      experience: "+15 años de experiencia",
      students: "25,000+ estudiantes",
      rating: 4.9
    },
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.9,
    reviews: 1234,
    students: 5678,
    duration: "12 semanas",
    startDate: "15 Mayo 2026",
    modality: "En vivo + Grabaciones",
    spots: 23,
    language: "Español",
    certificate: "Certificación internacional",
    level: "Intermedio a Avanzado"
  };

  const curriculum = [
    {
      module: "Módulo 1: Fundamentos de Finanzas Cuantitativas",
      lessons: [
        "Introducción al análisis cuantitativo",
        "Estadística aplicada a finanzas",
        "Probabilidad y distribuciones",
        "Series temporales financieras"
      ]
    },
    {
      module: "Módulo 2: Programación para Finanzas",
      lessons: [
        "Python para análisis financiero",
        "Pandas y NumPy avanzado",
        "Visualización de datos financieros",
        "APIs de mercados financieros"
      ]
    },
    {
      module: "Módulo 3: Modelos Cuantitativos",
      lessons: [
        "Modelos de valoración",
        "Optimización de portafolios",
        "Value at Risk (VaR)",
        "Backtesting de estrategias"
      ]
    },
    {
      module: "Módulo 4: Trading Algorítmico",
      lessons: [
        "Estrategias cuantitativas",
        "Machine Learning en trading",
        "Desarrollo de algoritmos",
        "Proyecto final integrador"
      ]
    }
  ];

  const benefits = [
    "Acceso de por vida a todas las clases grabadas",
    "12 sesiones en vivo con el instructor",
    "Certificación internacional verificable",
    "Proyecto final con feedback personalizado",
    "Acceso a comunidad exclusiva de alumni",
    "Material descargable y plantillas",
    "Soporte directo del instructor",
    "Actualizaciones futuras gratuitas"
  ];

  const learningOutcomes = [
    "Desarrollar estrategias de trading cuantitativo",
    "Implementar modelos de valoración avanzados",
    "Automatizar procesos de análisis financiero",
    "Gestionar riesgos mediante técnicas cuantitativas",
    "Crear dashboards de análisis financiero",
    "Aplicar Machine Learning a finanzas"
  ];

  const targetAudience = [
    "Profesionales de finanzas que buscan especializarse",
    "Traders que quieren automatizar sus estrategias",
    "Analistas financieros en crecimiento",
    "Desarrolladores interesados en fintech",
    "Emprendedores del sector financiero"
  ];

  const careerOutcomes = [
    { role: "Quant Analyst", goal: "Analiza datos financieros y desarrolla modelos predictivos para inversiones" },
    { role: "Algorithmic Trader", goal: "Diseña y ejecuta estrategias automatizadas de trading en mercados globales" },
    { role: "Risk Manager", goal: "Identifica y mitiga riesgos financieros en organizaciones de alto nivel" },
    { role: "Financial Engineer", goal: "Crea productos financieros innovadores y soluciones de inversión complejas" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 70% */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Section */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-[#3E64DE] to-blue-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-[#3E64DE] ml-1" />
                  </button>
                </div>
                <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                  🔴 En vivo
                </Badge>
              </div>
              <div className="p-6">
                <h1 className="text-3xl font-bold text-black mb-2">{courseData.title}</h1>
                <p className="text-lg text-black mb-4">{courseData.subtitle}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-black">{courseData.rating}</span>
                    <span className="text-black">({courseData.reviews} reseñas)</span>
                  </div>
                  <div className="flex items-center gap-1 text-black">
                    <Users className="w-5 h-5" />
                    <span>{courseData.students} estudiantes</span>
                  </div>
                  <Badge variant="outline" className="text-black">{courseData.level}</Badge>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <Tabs defaultValue="curriculum" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6">
                  <TabsTrigger value="curriculum" className="text-black data-[state=active]:text-black">Plan</TabsTrigger>
                  <TabsTrigger value="learn" className="text-black data-[state=active]:text-black">Aprenderás</TabsTrigger>
                  <TabsTrigger value="audience" className="text-black data-[state=active]:text-black">Público</TabsTrigger>
                  <TabsTrigger value="results" className="text-black data-[state=active]:text-black">Resultados</TabsTrigger>
                  <TabsTrigger value="instructor" className="text-black data-[state=active]:text-black">Instructor</TabsTrigger>
                  <TabsTrigger value="faq" className="text-black data-[state=active]:text-black">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="curriculum" className="space-y-4">
                  <h3 className="text-xl font-semibold text-black mb-4">Plan de Estudio</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {curriculum.map((module, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 text-[#3E64DE] rounded-full flex items-center justify-center font-semibold text-sm">
                              {index + 1}
                            </div>
                            <span className="font-semibold text-black">{module.module}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 ml-11">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="flex items-center gap-2 text-black">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="learn">
                  <h3 className="text-xl font-semibold text-black mb-4">Qué aprenderás</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-[#3E64DE] mt-0.5 flex-shrink-0" />
                        <span className="text-black">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="audience">
                  <h3 className="text-xl font-semibold text-black mb-4">Público objetivo</h3>
                  <div className="space-y-3">
                    {targetAudience.map((audience, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                        <UserCheck className="w-5 h-5 text-[#3E64DE] mt-0.5 flex-shrink-0" />
                        <span className="text-black">{audience}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="results">
                  <h3 className="text-xl font-semibold text-black mb-4">Salidas laborales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {careerOutcomes.map((career, index) => (
                      <div key={index} className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-black mb-2">{career.role}</h4>
                        <p className="text-black text-sm">{career.goal}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="instructor">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                      CM
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-black mb-1">{courseData.instructor.name}</h3>
                      <p className="text-[#3E64DE] font-semibold mb-3">{courseData.instructor.title}</p>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-black">
                          <Briefcase className="w-5 h-5 text-[#3E64DE]" />
                          <span>{courseData.instructor.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-black">
                          <Clock className="w-5 h-5 text-[#3E64DE]" />
                          <span>{courseData.instructor.experience}</span>
                        </div>
                        <div className="flex items-center gap-2 text-black">
                          <Users className="w-5 h-5 text-[#3E64DE]" />
                          <span>{courseData.instructor.students}</span>
                        </div>
                        <div className="flex items-center gap-2 text-black">
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          <span>{courseData.instructor.rating} Rating</span>
                        </div>
                      </div>
                      <p className="text-black">
                        Experto en finanzas cuantitativas con más de 15 años de experiencia en Wall Street.
                        Ha trabajado en Goldman Sachs, JP Morgan y actualmente lidera el equipo de trading
                        algorítmico en un hedge fund líder.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="faq">
                  <h3 className="text-xl font-semibold text-black mb-4">Preguntas frecuentes</h3>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="faq-1">
                      <AccordionTrigger className="text-black">¿Necesito experiencia previa?</AccordionTrigger>
                      <AccordionContent className="text-black">
                        Se recomienda tener conocimientos básicos de finanzas y programación,
                        aunque el curso está diseñado para guiarte desde nivel intermedio.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2">
                      <AccordionTrigger className="text-black">¿Incluye certificación?</AccordionTrigger>
                      <AccordionContent className="text-black">
                        Sí, al completar el curso recibirás una certificación internacional
                        verificable digitalmente.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-3">
                      <AccordionTrigger className="text-black">¿Cuándo empieza el programa?</AccordionTrigger>
                      <AccordionContent className="text-black">
                        El programa inicia el {courseData.startDate}. Las sesiones en vivo son
                        todos los martes y jueves de 7-9 PM.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-4">
                      <AccordionTrigger className="text-black">¿Hay garantía de devolución?</AccordionTrigger>
                      <AccordionContent className="text-black">
                        Sí, ofrecemos garantía de devolución de 14 días si el programa no cumple
                        tus expectativas.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-2xl font-semibold text-black mb-6">Lo que incluye</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-black">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-2xl font-semibold text-black mb-6">Lo que dicen nuestros estudiantes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3E64DE] to-blue-700 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      JR
                    </div>
                    <div>
                      <h4 className="font-bold text-black">Juan Rodríguez</h4>
                      <p className="text-sm text-gray-600">Financial Analyst</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-black italic">
                    "Este curso transformó mi carrera. Los conceptos están explicados de manera clara y práctica. Conseguí un aumento del 40% después de aplicar lo aprendido."
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      MG
                    </div>
                    <div>
                      <h4 className="font-bold text-black">María González</h4>
                      <p className="text-sm text-gray-600">Data Scientist</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-black italic">
                    "La calidad del contenido es excepcional. El instructor es muy claro y el material de apoyo es excelente. Lo recomiendo totalmente."
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      PM
                    </div>
                    <div>
                      <h4 className="font-bold text-black">Pedro Martínez</h4>
                      <p className="text-sm text-gray-600">Quant Analyst</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-black italic">
                    "Increíble inversión. El proyecto final me ayudó a conseguir trabajo en una de las mejores firmas. El ROI fue inmediato."
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      AS
                    </div>
                    <div>
                      <h4 className="font-bold text-black">Ana Silva</h4>
                      <p className="text-sm text-gray-600">Portfolio Manager</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-black italic">
                    "El mejor curso de finanzas cuantitativas que he tomado. Contenido actualizado y casos de uso reales. Vale cada centavo."
                  </p>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-2xl font-semibold text-black mb-6">Certificación</h3>
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center border-4 border-yellow-500">
                <div className="text-center">
                  <Award className="w-20 h-20 text-[#3E64DE] mx-auto mb-4" />
                  <p className="text-xl font-semibold text-black">Certificado de Finalización</p>
                  <p className="text-black">Verificable internacionalmente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Purchase Widget - 30% */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 border-4 border-orange-500/30">
              {/* Timer */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-6 mb-6 shadow-xl shadow-red-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                <p className="text-lg font-bold text-white mb-4 text-center relative z-10 flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 animate-pulse" />
                  ⏰ Oferta termina en:
                </p>
                <div className="flex justify-center gap-3 relative z-10">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm text-white rounded-xl px-4 py-3 font-bold text-2xl shadow-lg border-2 border-white/30">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <p className="text-xs text-white/90 mt-2 font-semibold">Horas</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm text-white rounded-xl px-4 py-3 font-bold text-2xl shadow-lg border-2 border-white/30">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <p className="text-xs text-white/90 mt-2 font-semibold">Min</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm text-white rounded-xl px-4 py-3 font-bold text-2xl shadow-lg border-2 border-white/30">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <p className="text-xs text-white/90 mt-2 font-semibold">Seg</p>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#3E64DE] to-blue-700 bg-clip-text text-transparent">${courseData.price}</span>
                  <span className="text-2xl text-gray-500 line-through">${courseData.originalPrice}</span>
                </div>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg px-4 py-2 shadow-lg shadow-green-500/30">
                  🎉 {courseData.discount}% OFF
                </Badge>
              </div>

              {/* CTA Button */}
              <Button className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-600 hover:via-red-600 hover:to-orange-700 text-white py-8 text-2xl font-black mb-6 shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-105 animate-pulse rounded-xl border-4 border-white/50">
                <Rocket className="w-8 h-8 mr-3 animate-bounce" />
                🔥 COMPRAR AHORA
              </Button>
              <p className="text-center text-sm text-gray-600 mb-6 font-semibold">
                ⚡ Acceso inmediato después del pago
              </p>

              {/* Info */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-2 text-black">
                  <Calendar className="w-5 h-5 text-[#3E64DE]" />
                  <span>Inicio: <strong>{courseData.startDate}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <Clock className="w-5 h-5 text-[#3E64DE]" />
                  <span>Duración: <strong>{courseData.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <Users className="w-5 h-5 text-[#3E64DE]" />
                  <span>Cupos limitados: <strong className="text-red-600">{courseData.spots} restantes</strong></span>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <Play className="w-5 h-5 text-[#3E64DE]" />
                  <span>Modalidad: <strong>{courseData.modality}</strong></span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="border-t border-gray-200 pt-4 mb-4">
                <p className="text-sm font-semibold text-black mb-3">Métodos de pago:</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border border-gray-200 rounded p-2 text-center text-xs font-semibold text-black">
                    VISA
                  </div>
                  <div className="border border-gray-200 rounded p-2 text-center text-xs font-semibold text-black">
                    MasterCard
                  </div>
                  <div className="border border-gray-200 rounded p-2 text-center text-xs font-semibold text-black">
                    PayPal
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="space-y-2 text-sm text-black">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Compra 100% segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Garantía de 14 días</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-600" />
                  <span>Certificación incluida</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-black text-center">
                  <strong className="text-black">{courseData.students}</strong> estudiantes ya se inscribieron
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Promo Section */}
        <section className="py-16 bg-gradient-to-br from-[#0a0b14] via-[#1a1b2e] to-[#0a0b14] relative overflow-hidden mt-12 rounded-2xl border-2 border-orange-500/30">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-[120px] opacity-15"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-[120px] opacity-15"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Pricing cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 border-green-500/50 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:border-green-400 transition-all duration-300 shadow-xl hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Crown className="w-6 h-6 text-green-400" />
                      Spark
                    </h3>
                    <Badge className="bg-green-500 text-white">Popular</Badge>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">S/79</span>
                      <span className="text-gray-400 text-lg">/mes</span>
                    </div>
                    <p className="text-gray-400 text-sm">Facturado mensualmente</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span>Acceso a +500 cursos</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span>Certificados ilimitados</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span>Soporte estándar</span>
                    </div>
                  </div>
                  <Link to="/membresias" className="block">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-6 text-lg font-bold shadow-lg shadow-green-500/30">
                      Comenzar ahora
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-500/50 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:border-yellow-400 transition-all duration-300 shadow-xl hover:scale-105 transform scale-105 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold px-4 py-1 shadow-lg">
                    ⭐ Mejor valor
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Crown className="w-6 h-6 text-yellow-400" />
                      Prime
                    </h3>
                    <Badge className="bg-yellow-400 text-yellow-900 font-bold">-17%</Badge>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">S/799</span>
                      <span className="text-gray-400 text-lg">/año</span>
                    </div>
                    <p className="text-gray-400 text-sm">Ahorra S/149 al año</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                      <span>Todo lo de Spark</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                      <span>Mentoría 1:1 mensual</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                      <span>Soporte prioritario</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                      <span>Acceso a eventos exclusivos</span>
                    </div>
                  </div>
                  <Link to="/membresias" className="block">
                    <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white py-6 text-lg font-bold shadow-lg shadow-yellow-500/30">
                      Comenzar ahora
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500/50 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:border-purple-400 transition-all duration-300 shadow-xl hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Crown className="w-6 h-6 text-purple-400" />
                      Elite
                    </h3>
                    <Badge className="bg-purple-500 text-white">VIP</Badge>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">S/1499</span>
                      <span className="text-gray-400 text-lg">/año</span>
                    </div>
                    <p className="text-gray-400 text-sm">Experiencia premium</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      <span>Todo lo de Prime</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      <span>Mentoría 1:1 ilimitada</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      <span>Proyectos personalizados</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      <span>Networking exclusivo</span>
                    </div>
                  </div>
                  <Link to="/membresias" className="block">
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-6 text-lg font-bold shadow-lg shadow-purple-500/30">
                      Comenzar ahora
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Courses Section */}
        <section className="py-16 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-[#3E64DE] to-blue-600 text-white px-6 py-3 shadow-lg">
                <Sparkles className="w-4 h-4 inline mr-2" />
                Recomendado para ti
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Cursos que te pueden interesar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Basado en tu interés en <span className="font-bold text-[#3E64DE]">{courseData.title}</span>, te recomendamos estos cursos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: 2,
                  title: "Trading Algorítmico con Python",
                  instructor: "Dr. Juan Pérez",
                  price: 999,
                  originalPrice: 1599,
                  rating: 4.8,
                  students: 3456,
                  duration: "10 semanas",
                  gradient: "from-purple-500 to-violet-700",
                  label: "⚡ RELACIONADO"
                },
                {
                  id: 5,
                  title: "Machine Learning para Finanzas",
                  instructor: "Dra. Ana López",
                  price: 1199,
                  originalPrice: 1899,
                  rating: 4.9,
                  students: 2789,
                  duration: "12 semanas",
                  gradient: "from-[#3E64DE] to-blue-900",
                  label: "⭐ POPULAR"
                },
                {
                  id: 6,
                  title: "Análisis de Riesgos Financieros",
                  instructor: "Lic. Carlos Vega",
                  price: 899,
                  originalPrice: 1399,
                  rating: 4.7,
                  students: 4123,
                  duration: "8 semanas",
                  gradient: "from-green-500 to-emerald-700",
                  label: "🔥 NUEVO"
                },
                {
                  id: 7,
                  title: "Excel Financiero Avanzado",
                  instructor: "Ing. María Torres",
                  price: 599,
                  originalPrice: 999,
                  rating: 4.8,
                  students: 5678,
                  duration: "6 semanas",
                  gradient: "from-blue-500 to-indigo-700",
                  label: "💎 BESTSELLER"
                }
              ].map((course) => (
                <Link key={course.id} to={`/curso/${course.id}`} className="group">
                  <Card className="overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-200 bg-white hover:border-[#3E64DE] hover:scale-105 h-full">
                    <div className={`aspect-video bg-gradient-to-br ${course.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                          <Play className="w-8 h-8 text-[#3E64DE] ml-1" />
                        </div>
                      </div>
                      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-600 border-0 text-white px-3 py-1.5 shadow-lg font-bold text-xs">
                        {course.label}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-black mb-3 group-hover:text-[#3E64DE] line-clamp-2 text-lg transition-colors leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold text-black">{course.rating}</span>
                        <span className="text-sm text-gray-600">({course.students.toLocaleString()})</span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-5">
                        <span className="text-2xl font-bold text-black">${course.price}</span>
                        <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-[#3E64DE] to-blue-600 hover:from-[#395BCA] hover:to-blue-700 text-white font-semibold py-5 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                        Ver curso
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/categoria/finanzas">
                <Button variant="outline" className="border-2 border-[#3E64DE] text-[#3E64DE] hover:bg-[#3E64DE] hover:text-white px-8 py-6 text-lg font-bold">
                  Ver más cursos de Finanzas
                  <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg]" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
