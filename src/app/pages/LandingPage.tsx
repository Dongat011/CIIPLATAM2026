import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  TrendingUp,
  Pickaxe,
  Heart,
  BarChart3,
  Code,
  Brain,
  Briefcase,
  Star,
  Users,
  Globe,
  Award,
  Play,
  Clock,
  Calendar,
  X,
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  Sparkles,
  Rocket,
  MessageCircle,
  Video,
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import MembershipsSection from "../components/MembershipsSection";
import FloatingMascot from "../components/FloatingMascot";

export default function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "Implementación BIM en entidades públicas",
      subtitle: "Curso:",
      tag: "CURSO CERTIFICADO",
      image: "hero-slide-1"
    },
    {
      title: "Machine Learning e IA Avanzada",
      subtitle: "Programa:",
      tag: "EN VIVO",
      image: "hero-slide-2"
    },
    {
      title: "Data Science con Python",
      subtitle: "Especialización:",
      tag: "BESTSELLER",
      image: "hero-slide-3"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const categories = [
    {
      name: "Finanzas e inversiones",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-green-500 to-emerald-700",
      link: "/categoria/finanzas",
      students: "15,234",
      popular: true,
      description: "Domina análisis financiero, inversiones y mercados de capitales",
      courses: ["Análisis Financiero Avanzado", "Trading & Inversiones", "Finanzas Corporativas", "Excel Financiero"]
    },
    {
      name: "Minería y gestión ambiental",
      icon: Pickaxe,
      color: "bg-gradient-to-br from-yellow-500 to-orange-600",
      link: "/categoria/mineria",
      students: "8,456",
      description: "Especialízate en operaciones mineras y sostenibilidad",
      courses: ["Geología Minera", "Gestión Ambiental", "Seguridad Minera", "Procesos Metalúrgicos"]
    },
    {
      name: "Salud y biociencias",
      icon: Heart,
      color: "bg-gradient-to-br from-red-500 to-pink-600",
      link: "/categoria/salud",
      students: "12,789",
      description: "Formación en ciencias de la salud y biotecnología",
      courses: ["Investigación Clínica", "Biotecnología", "Salud Pública", "Farmacología Avanzada"]
    },
    {
      name: "Business Intelligence",
      icon: BarChart3,
      color: "bg-gradient-to-br from-blue-500 to-indigo-700",
      link: "/categoria/business",
      students: "18,923",
      popular: true,
      description: "Transforma datos en decisiones estratégicas",
      courses: ["Power BI Avanzado", "Tableau", "SQL para BI", "Data Visualization"]
    },
    {
      name: "Programación y datos",
      icon: Code,
      color: "bg-gradient-to-br from-purple-500 to-violet-700",
      link: "/categoria/programacion",
      students: "22,456",
      popular: true,
      description: "Desarrolla software y domina ciencia de datos",
      courses: ["Python Avanzado", "Data Science", "JavaScript Moderno", "Arquitectura de Software"]
    },
    {
      name: "Inteligencia Artificial",
      icon: Brain,
      color: "bg-gradient-to-br from-[#3E64DE] to-blue-900",
      link: "/categoria/ia",
      students: "19,678",
      popular: true,
      description: "Conviértete en experto en IA y Machine Learning",
      courses: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"]
    },
    {
      name: "Desarrollo profesional",
      icon: Briefcase,
      color: "bg-gradient-to-br from-orange-500 to-red-600",
      link: "/categoria/desarrollo",
      students: "14,234",
      description: "Habilidades blandas y liderazgo empresarial",
      courses: ["Liderazgo", "Gestión de Proyectos", "Coaching", "Habilidades Directivas"]
    }
  ];

  const instructors = [
    {
      name: "Alejandro Grageda Fajardo",
      specialty: "Experto en Finanzas Corporativas, Control de gestión y Excel avanzado",
      company: "KPMG",
      rating: 5.0,
      courses: 28,
      country: "🇵🇪",
      verified: true,
      image: "AG"
    },
    {
      name: "José Jhonatan Ortiz Pino",
      specialty: "Experto en IA, Programación, Data Science y Machine Learning",
      company: "Google",
      rating: 5.0,
      courses: 35,
      country: "🇲🇽",
      verified: true,
      image: "JO"
    },
    {
      name: "María Belén Antequera",
      specialty: "Experta en Business Intelligence, Power BI y Análisis de Datos",
      company: "Microsoft",
      rating: 5.0,
      courses: 22,
      country: "🇨🇴",
      verified: true,
      image: "MA"
    },
    {
      name: "Julio César Gonzáles Rodriguez",
      specialty: "Experto en Gestión de Proyectos, PMI y Metodologías Ágiles",
      company: "Amazon",
      rating: 4.9,
      courses: 18,
      country: "🇵🇪",
      verified: true,
      image: "JC"
    }
  ];

  const certifications = [
    "PMI", "Microsoft", "Google Cloud", "AWS", "Coursera", "IBM", "SAP", "Oracle", "Cisco", "CompTIA"
  ];

  const companies = [
    "Google", "Microsoft", "Amazon", "Meta", "Apple", "Tesla", "Netflix", "Uber", "Goldman Sachs", "McKinsey", "Deloitte", "KPMG"
  ];

  const testimonials = [
    {
      name: "Juan Rodríguez",
      role: "Data Scientist en Google",
      image: "JR",
      text: "Gracias al programa de Data Science conseguí mi trabajo soñado en Google. La calidad de los instructores es excepcional.",
      rating: 5,
      salary: "+150%"
    },
    {
      name: "María González",
      role: "Financial Analyst en JP Morgan",
      image: "MG",
      text: "El programa de finanzas cuantitativas me dio las herramientas que necesitaba. Aumenté mi salario en más del 120%.",
      rating: 5,
      salary: "+120%"
    },
    {
      name: "Pedro Martínez",
      role: "ML Engineer en Microsoft",
      image: "PM",
      text: "La mejor inversión de mi vida. En 6 meses pasé de junior a senior. El contenido es de primer nivel mundial.",
      rating: 5,
      salary: "+180%"
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Programa Avanzado en Finanzas Cuantitativas",
      instructor: "Dr. Carlos Mendoza",
      price: 1299,
      originalPrice: 1999,
      rating: 4.9,
      students: 5234,
      modality: "En vivo",
      duration: "12 semanas",
      startDate: "15 Mayo 2026",
      label: "🔥 MÁS VENDIDO",
      gradient: "from-green-500 to-emerald-700"
    },
    {
      id: 2,
      title: "Especialización en Data Science con Python",
      instructor: "Ing. María López",
      price: 899,
      originalPrice: 1499,
      rating: 4.8,
      students: 8345,
      modality: "En vivo",
      duration: "10 semanas",
      startDate: "22 Mayo 2026",
      label: "⚡ INICIO PRÓXIMO",
      gradient: "from-purple-500 to-violet-700"
    },
    {
      id: 3,
      title: "Machine Learning e IA Avanzada",
      instructor: "Dr. Juan Pérez",
      price: 1499,
      originalPrice: 2299,
      rating: 5.0,
      students: 6987,
      modality: "En vivo",
      duration: "14 semanas",
      startDate: "1 Junio 2026",
      label: "⭐ MEJOR VALORADO",
      gradient: "from-[#3E64DE] to-blue-900"
    },
    {
      id: 4,
      title: "Business Intelligence con Power BI",
      instructor: "Lic. Ana Torres",
      price: 599,
      originalPrice: 999,
      rating: 4.7,
      students: 12456,
      modality: "Grabado",
      duration: "8 semanas",
      startDate: "Acceso inmediato",
      label: "💎 BESTSELLER",
      gradient: "from-blue-500 to-indigo-700"
    }
  ];

  const liveStats = [
    { label: "Estudiantes activos", value: "52,347", icon: Users, color: "text-green-600" },
    { label: "Países alcanzados", value: "12", icon: Globe, color: "text-[#3E64DE]" },
    { label: "Horas de contenido", value: "+15,000", icon: Clock, color: "text-purple-600" },
    { label: "Tasa de empleabilidad", value: "94%", icon: Target, color: "text-orange-600" }
  ];

  const allComments = [
    {
      name: "Juan Rodríguez",
      role: "Data Scientist en Google",
      image: "JR",
      text: "Gracias al programa de Data Science conseguí mi trabajo soñado en Google. La calidad de los instructores es excepcional.",
      rating: 5,
      country: "🇵🇪"
    },
    {
      name: "María González",
      role: "Financial Analyst en JP Morgan",
      image: "MG",
      text: "El programa de finanzas cuantitativas me dio las herramientas que necesitaba. Aumenté mi salario en más del 120%.",
      rating: 5,
      country: "🇨🇴"
    },
    {
      name: "Pedro Martínez",
      role: "ML Engineer en Microsoft",
      image: "PM",
      text: "La mejor inversión de mi vida. En 6 meses pasé de junior a senior. El contenido es de primer nivel mundial.",
      rating: 5,
      country: "🇲🇽"
    },
    {
      name: "Ana Silva",
      role: "Business Analyst en Amazon",
      image: "AS",
      text: "Los instructores son de clase mundial. Aprendí más en 3 meses que en años de universidad.",
      rating: 5,
      country: "🇧🇷"
    },
    {
      name: "Carlos Ruiz",
      role: "AI Researcher en Meta",
      image: "CR",
      text: "Excelente programa de IA. Me permitió hacer la transición a Machine Learning Engineer.",
      rating: 5,
      country: "🇦🇷"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1437]">
      {/* Floating Mascot */}
      <FloatingMascot />

      {/* Hero Carousel Section - Estilo Konstruedu */}
      <section className="relative bg-gradient-to-br from-[#0B1437] via-[#152045] to-[#0B1437] text-white overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Contenido del slide */}
            <div className="space-y-6">
              <Badge className="bg-[#3E64DE] text-white px-4 py-2 text-sm">
                {heroSlides[currentSlide].tag}
              </Badge>

              <div>
                <p className="text-gray-400 text-lg mb-2">{heroSlides[currentSlide].subtitle}</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  {heroSlides[currentSlide].title}
                </h1>
              </div>

              <div className="flex gap-4">
                <Button className="bg-[#3E64DE] hover:bg-[#395BCA] text-white px-8 py-6 text-lg">
                  Ver más
                </Button>
                <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold px-8 py-6 text-lg">
                  Comprar ahora
                </Button>
              </div>
            </div>

            {/* Imagen del slide */}
            <div className="relative aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Navegación del carrusel */}
          <div className="flex items-center justify-between mt-12">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-white w-12" : "bg-white/30 w-2"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </section>


      {/* Promo Banner tipo Shopify */}
      <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-gray-900">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <p className="font-bold text-sm md:text-base text-center">
              🔥 OFERTA FLASH: 50% OFF en todos los programas + Certificación GRATIS | Válido solo por 24 horas
            </p>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Brands Section - ESPECIALÍZATE JUNTO A */}
      <section className="py-24 bg-gradient-to-br from-[#0a0b14] via-[#152045] to-[#0a0b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              ESPECIALÍZATE JUNTO A
            </h2>
            <p className="text-xl text-gray-300">
              Elige tu camino profesional con nuestras marcas especializadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CIIP LATAM */}
            <div className="bg-white/5 backdrop-blur-xl border-2 border-[#3E64DE]/30 rounded-3xl p-8 hover:border-[#3E64DE] hover:bg-white/10 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#3E64DE] to-blue-700 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">CIIF</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">CIIP LATAM</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Lidera la transformación digital en finanzas, business intelligence y desarrollo de software.
                  Aprende de expertos en análisis de datos, programación avanzada y gestión financiera estratégica.
                  Conviértete en el profesional que las empresas necesitan.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge className="bg-[#3E64DE]/20 text-[#3E64DE] border border-[#3E64DE]/30">Finanzas</Badge>
                  <Badge className="bg-[#3E64DE]/20 text-[#3E64DE] border border-[#3E64DE]/30">Business Intelligence</Badge>
                  <Badge className="bg-[#3E64DE]/20 text-[#3E64DE] border border-[#3E64DE]/30">Programación</Badge>
                  <Badge className="bg-[#3E64DE]/20 text-[#3E64DE] border border-[#3E64DE]/30">Data Science</Badge>
                </div>
              </div>
              <Link to="/">
                <Button className="w-full bg-gradient-to-r from-[#3E64DE] to-blue-600 hover:from-[#395BCA] hover:to-blue-700 text-white py-6 text-lg font-bold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
                  Click aquí para informarse
                </Button>
              </Link>
            </div>

            {/* GEOMINA LATAM */}
            <div className="bg-white/5 backdrop-blur-xl border-2 border-yellow-500/30 rounded-3xl p-8 hover:border-yellow-500 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/40 group-hover:scale-110 transition-transform duration-300">
                  <Pickaxe className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">GEOMINA LATAM</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Domina la ingeniería minera del futuro con tecnología de punta. Especialízate en gestión ambiental,
                  seguridad minera, geología aplicada y optimización de procesos extractivos. Forma parte de la nueva
                  generación de ingenieros mineros sostenibles.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">Minería</Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">Geología</Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">Gestión Ambiental</Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">Seguridad</Badge>
                </div>
              </div>
              <Link to="/marca/geomina-latam">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white py-6 text-lg font-bold shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300">
                  Click aquí para informarse
                </Button>
              </Link>
            </div>

            {/* BIOMEDI */}
            <div className="bg-white/5 backdrop-blur-xl border-2 border-red-500/30 rounded-3xl p-8 hover:border-red-500 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/40 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">BIOMEDI</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Avanza en ciencias de la salud con educación de clase mundial. Especialízate en investigación clínica,
                  biotecnología, salud pública y medicina basada en evidencia. Transforma vidas con conocimiento médico
                  de vanguardia y tecnología aplicada a la salud.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge className="bg-red-500/20 text-red-400 border border-red-500/30">Medicina</Badge>
                  <Badge className="bg-red-500/20 text-red-400 border border-red-500/30">Biotecnología</Badge>
                  <Badge className="bg-red-500/20 text-red-400 border border-red-500/30">Salud Pública</Badge>
                  <Badge className="bg-red-500/20 text-red-400 border border-red-500/30">Investigación</Badge>
                </div>
              </div>
              <Link to="/marca/biomedi">
                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-6 text-lg font-bold shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300">
                  Click aquí para informarse
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-gradient-to-br from-[#0a0b14] via-[#141523] to-[#0a0b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-[#3E64DE] to-blue-600 text-white px-6 py-3 text-base shadow-lg shadow-blue-500/20">⚡ Ofertas limitadas</Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Programas que cambian vidas
            </h2>
            <p className="text-xl text-gray-300">
              Inversión que se paga sola con tu primer aumento de salario
            </p>
          </div>

          <Tabs defaultValue="live" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-xl">
              <TabsTrigger value="live" className="text-white data-[state=active]:bg-[#3E64DE] data-[state=active]:text-white rounded-lg transition-all">🔴 En vivo</TabsTrigger>
              <TabsTrigger value="popular" className="text-white data-[state=active]:bg-[#3E64DE] data-[state=active]:text-white rounded-lg transition-all">⭐ Más populares</TabsTrigger>
            </TabsList>

            <TabsContent value="live">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {courses.map((course) => (
                  <Link key={course.id} to={`/curso/${course.id}`} className="group">
                    <Card className="overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-[#3E64DE] hover:scale-105 h-full">
                      <div className={`aspect-video bg-gradient-to-br ${course.gradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl group-hover:shadow-2xl">
                            <Play className="w-10 h-10 text-[#3E64DE] ml-1" />
                          </div>
                        </div>
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 border-0 text-white px-3 py-1.5 shadow-lg font-bold">
                          {course.label}
                        </Badge>
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {course.duration}
                        </div>
                      </div>
                      <CardContent className="p-6 bg-gradient-to-b from-white/5 to-transparent">
                        <h3 className="font-bold text-white mb-3 group-hover:text-[#3E64DE] line-clamp-2 text-lg transition-colors leading-tight">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3E64DE] to-blue-700 flex items-center justify-center text-white text-xs font-bold">
                            {course.instructor.split(' ').map(n => n[0]).join('')}
                          </span>
                          {course.instructor}
                        </p>

                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-bold text-white">{course.rating}</span>
                          </div>
                          <span className="text-sm text-gray-400">({course.students.toLocaleString()})</span>
                          <Badge className="ml-auto bg-green-500/20 text-green-400 border border-green-500/30 text-xs">
                            {course.modality}
                          </Badge>
                        </div>

                        <div className="flex items-baseline gap-2 mb-5">
                          <span className="text-3xl font-bold text-white">${course.price}</span>
                          <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                          <span className="ml-auto text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full font-bold">
                            -{Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                          </span>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-[#3E64DE] to-blue-600 hover:from-[#395BCA] hover:to-blue-700 text-white font-semibold py-6 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                          Inscribirme ahora
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {courses.slice().reverse().map((course) => (
                  <Link key={course.id} to={`/curso/${course.id}`} className="group">
                    <Card className="overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-purple-500 hover:scale-105 h-full">
                      <div className={`aspect-video bg-gradient-to-br ${course.gradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl group-hover:shadow-2xl">
                            <Play className="w-10 h-10 text-purple-600 ml-1" />
                          </div>
                        </div>
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-purple-600 border-0 text-white px-3 py-1.5 shadow-lg font-bold">
                          {course.label}
                        </Badge>
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {course.duration}
                        </div>
                      </div>
                      <CardContent className="p-6 bg-gradient-to-b from-white/5 to-transparent">
                        <h3 className="font-bold text-white mb-3 group-hover:text-purple-400 line-clamp-2 text-lg transition-colors leading-tight">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-xs font-bold">
                            {course.instructor.split(' ').map(n => n[0]).join('')}
                          </span>
                          {course.instructor}
                        </p>

                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-bold text-white">{course.rating}</span>
                          </div>
                          <span className="text-sm text-gray-400">({course.students.toLocaleString()})</span>
                          <Badge className="ml-auto bg-green-500/20 text-green-400 border border-green-500/30 text-xs">
                            {course.modality}
                          </Badge>
                        </div>

                        <div className="flex items-baseline gap-2 mb-5">
                          <span className="text-3xl font-bold text-white">${course.price}</span>
                          <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                          <span className="ml-auto text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full font-bold">
                            -{Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                          </span>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-6 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                          Inscribirme ahora
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Ver más cursos button */}
          <div className="flex justify-center mt-12">
            <Link to="/categoria/programacion">
              <Button className="bg-gradient-to-r from-[#3E64DE] to-blue-600 hover:from-[#395BCA] hover:to-blue-700 text-white px-10 py-6 text-lg font-bold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                Ver todos los cursos
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section - Búsqueda rápida por especialidad */}
      <section className="py-24 bg-gradient-to-br from-[#0a0b14] via-[#1a1b2e] to-[#0a0b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 px-6 py-3 text-base shadow-lg shadow-purple-500/20">🎯 Encuentra cursos de tu especialidad</Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ¿Qué quieres aprender hoy?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Selecciona tu área profesional y descubre los mejores programas para impulsar tu carrera
            </p>

            {/* Búsqueda rápida */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar por especialidad: Programación, Minería, Medicina, Finanzas..."
                  className="w-full px-6 py-5 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-[#3E64DE] focus:border-transparent backdrop-blur-sm text-lg"
                />
                <Button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2 top-2 bg-[#3E64DE] hover:bg-[#395BCA] text-white px-8 py-3"
                >
                  {searchTerm ? "Limpiar" : "Buscar"}
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories
              .filter(category =>
                searchTerm === "" ||
                category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                category.courses?.some((course: string) => course.toLowerCase().includes(searchTerm.toLowerCase()))
              )
              .map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowCategoryPopup(true);
                  }}
                >
                  <div className="group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 border hover:scale-105 hover:shadow-blue-500/30 border-white/10 bg-white/5 hover:border-[#3E64DE] backdrop-blur-xl">
                    <div className={`${category.color} p-10 bg-opacity-20 backdrop-blur-md h-80`}>
                      {category.popular && (
                        <Badge className="absolute top-5 right-5 bg-yellow-400 text-yellow-900 border-0 shadow-lg shadow-yellow-500/40 animate-pulse px-4 py-2">
                          🔥 Más buscado
                        </Badge>
                      )}

                      {/* Icono más grande */}
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-105">
                        <Icon className="w-12 h-12 text-white drop-shadow-lg" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">
                        {category.name}
                      </h3>

                      <div className="flex items-center gap-2 text-white/90 mb-5 text-base">
                        <Users className="w-6 h-6" />
                        <span className="font-semibold">{category.students} estudiantes activos</span>
                      </div>

                      <div className="flex items-center text-white font-bold transition-all duration-300 mt-6 text-lg">
                        Ver cursos
                        <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel - ¿Qué opinan nuestros estudiantes? */}
      <section className="py-24 bg-gradient-to-br from-[#0B1437] via-[#152045] to-[#0B1437] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Qué opinan nuestros estudiantes?
            </h2>
            <p className="text-xl text-gray-400">
              74 historias inspiradoras de estudiantes y profesionales de 14 países en el mundo
            </p>
          </div>

          {/* Carrusel de testimonios en videos */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 snap-center group cursor-pointer"
                  onClick={() => setCurrentTestimonial(index)}
                >
                  <Card className="border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-[#3E64DE]/50 transition-all duration-300 overflow-hidden h-80">
                    <CardContent className="p-0 h-full relative">
                      {/* Video background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3E64DE]/30 to-purple-600/30 flex items-center justify-center">
                        <div className="text-center">
                          {/* Avatar */}
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#3E64DE] to-blue-700 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                            {testimonial.image}
                          </div>
                          {/* Play button siempre visible */}
                          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <Play className="w-8 h-8 text-[#3E64DE] ml-1" />
                          </div>
                        </div>
                      </div>

                      {/* Info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                        <p className="text-white font-bold text-sm mb-1">{testimonial.name}</p>
                        <p className="text-gray-300 text-xs line-clamp-2">{testimonial.role}</p>
                      </div>

                      {/* Country flag */}
                      <div className="absolute top-3 right-3">
                        <span className="text-2xl">{testimonial.country}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Controles de navegación */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
                onClick={() => {
                  const container = document.querySelector('.overflow-x-auto');
                  if (container) container.scrollBy({ left: -280, behavior: 'smooth' });
                }}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
                onClick={() => {
                  const container = document.querySelector('.overflow-x-auto');
                  if (container) container.scrollBy({ left: 280, behavior: 'smooth' });
                }}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Carrusel de comentarios destacados */}
          <div className="mt-16">
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                {allComments.map((comment, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full snap-center"
                    onClick={() => setCurrentTestimonial(index % testimonials.length)}
                  >
                    <Card className="border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-black/30 hover:bg-white/10 hover:border-[#3E64DE]/50 transition-all duration-300">
                      <CardContent className="p-10 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8">
                          {/* Avatar y nombre */}
                          <div className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#3E64DE] to-blue-700 flex items-center justify-center text-white text-4xl font-bold shadow-xl shadow-blue-500/30 mb-4">
                              {comment.image}
                            </div>
                            <p className="font-bold text-white text-xl mb-1 flex items-center gap-2">
                              {comment.name}
                              <span className="text-2xl">{comment.country}</span>
                            </p>
                            <p className="text-gray-400 text-sm">{comment.role}</p>
                            <div className="flex items-center gap-1 mt-3">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>

                          {/* Comentario */}
                          <div className="md:col-span-2 flex flex-col justify-center">
                            <p className="text-2xl md:text-3xl text-white mb-6 italic leading-relaxed font-light">
                              "{comment.text}"
                            </p>
                            <div className="flex items-center gap-4">
                              <Button className="bg-[#3E64DE] hover:bg-[#395BCA] text-white">
                                <Play className="w-5 h-5 mr-2" />
                                Ver video completo
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Navegación del carrusel de comentarios */}
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
                  onClick={() => {
                    const container = document.querySelectorAll('.overflow-x-auto')[1];
                    if (container) container.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
                  }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
                  onClick={() => {
                    const container = document.querySelectorAll('.overflow-x-auto')[1];
                    if (container) container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
                  }}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Botón Déjanos tu comentario */}
            <div className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-[#3E64DE] to-blue-600 hover:from-[#395BCA] hover:to-blue-700 text-white px-10 py-6 text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
                <MessageCircle className="w-6 h-6 mr-3" />
                Déjanos tu comentario
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <MembershipsSection />

      {/* Instructors Section - Carrusel */}
      <section className="py-24 bg-gradient-to-br from-[#0a0b14] via-[#1a1b2e] to-[#0a0b14] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full filter blur-[120px] opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Aprende con expertos certificados de todas<br />partes del mundo
            </h2>
          </div>

          {/* Carrusel de instructores */}
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {instructors.map((instructor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 snap-center"
                >
                  <Card className="border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-[#3E64DE]/50 transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                    <CardContent className="p-0">
                      {/* Imagen del instructor */}
                      <div className="relative aspect-[4/5] bg-gradient-to-br from-[#3E64DE]/30 to-purple-600/30 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#3E64DE] to-blue-700 flex items-center justify-center text-white text-6xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-500">
                            {instructor.image}
                          </div>
                        </div>
                        {/* Badge de país */}
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-3xl shadow-xl border-2 border-white">
                            {instructor.country}
                          </div>
                        </div>
                        {/* Badge verificado */}
                        {instructor.verified && (
                          <div className="absolute top-4 right-4">
                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-xl border-2 border-white">
                              <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Info del instructor */}
                      <div className="p-6 bg-gradient-to-b from-white/5 to-transparent">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="text-white font-bold">{instructor.rating}</span>
                          </div>
                          <span className="text-gray-400 text-sm">• {instructor.courses} programas</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{instructor.name}</h3>
                        <p className="text-sm text-gray-300 mb-3 line-clamp-2">{instructor.specialty}</p>
                        <Badge className="bg-[#3E64DE]/20 text-[#3E64DE] border border-[#3E64DE]/30">
                          {instructor.company}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Botones de navegación */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
                onClick={() => {
                  const container = document.querySelector('.overflow-x-auto');
                  if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
                }}
              >
                ←
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
                onClick={() => {
                  const container = document.querySelector('.overflow-x-auto');
                  if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
                }}
              >
                →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones ISO Section */}
      <section className="py-24 bg-gradient-to-br from-[#0a0b14] via-[#1a1b2e] to-[#0a0b14] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500 rounded-full filter blur-[150px] opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-6 py-3 shadow-lg shadow-yellow-500/20">
                Certificaciones ISO 9001 & ISO 21001
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nuestros sistemas de gestión están certificados y reconocidos mundialmente
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Nuestros sistemas de gestión están certificados y cumplen con estándares internacionales
                que garantizan una experiencia de calidad y confianza para nuestros estudiantes.
              </p>
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold px-8 py-6 shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300">
                Ver más
              </Button>
            </div>
            <div className="flex gap-6 items-center justify-center">
              <Card className="w-48 h-48 border-2 border-yellow-400/30 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-2xl">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-3 shadow-lg">
                    <Award className="w-10 h-10 text-gray-900" />
                  </div>
                  <p className="text-white font-bold text-center">ISO 9001</p>
                  <p className="text-gray-400 text-xs text-center mt-1">Gestión de Calidad</p>
                </CardContent>
              </Card>
              <Card className="w-48 h-48 border-2 border-yellow-400/30 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-2xl">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-3 shadow-lg">
                    <GraduationCap className="w-10 h-10 text-gray-900" />
                  </div>
                  <p className="text-white font-bold text-center">ISO 21001</p>
                  <p className="text-gray-400 text-xs text-center mt-1">Gestión Educativa</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Respaldan Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0b14] via-[#141523] to-[#0a0b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
            Nos respaldan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {["StartUP Perú", "StartUPC", "Ministerio de la Producción", "ProInnóvate"].map((company, index) => (
              <div key={index} className="aspect-video bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center px-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-lg">
                <span className="font-bold text-white text-center">{company}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-center mb-10 text-white">
            Métodos de pago
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {["PayPal", "VISA", "Mastercard", "Discover", "American Express", "Bitcoin", "Efecty", "Rapipago", "SafetyPay", "PagoEfectivo", "Weepay", "Pagofrancil"].map((payment, index) => (
              <div key={index} className="w-24 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center px-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <span className="font-semibold text-white text-xs text-center">{payment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Stats Section - Moved to End */}
      <section className="py-20 bg-gradient-to-br from-[#0a0b14] via-[#1a1b2e] to-[#0a0b14] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#3E64DE] rounded-full filter blur-[120px] opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Números que hablan por nosotros
            </h2>
            <p className="text-xl text-gray-400">
              Transformando vidas profesionales en toda Latinoamérica
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {liveStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-[#3E64DE]/50 hover:scale-105 transition-all duration-300 shadow-xl">
                  <CardContent className="p-8 text-center">
                    <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                    <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-28 bg-gradient-to-br from-[#3E64DE] via-blue-700 to-[#3E64DE] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            ¿Listo para el cambio?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Únete a más de 52,000 profesionales que ya transformaron su carrera
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-xl px-14 py-9 shadow-2xl shadow-yellow-500/40 hover:shadow-yellow-500/60 transition-all duration-300">
              Comenzar ahora - 50% OFF
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#3E64DE] font-bold text-xl px-14 py-9 transition-all duration-300">
              <MessageCircle className="mr-2 w-6 h-6" />
              Hablar con asesor
            </Button>
          </div>
          <p className="mt-10 text-lg text-blue-100">
            ✓ Sin permanencia ✓ Garantía 14 días ✓ Certificación incluida
          </p>
        </div>
      </section>

      {/* Popup de Oferta */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-gradient-to-br from-[#1a1b2e] to-[#0a0b14] border border-white/10 rounded-3xl max-w-md w-full p-10 relative animate-in zoom-in-95 duration-300 shadow-2xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[#3E64DE] to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/40">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-3">
                ¡50% de descuento!
              </h3>
              <p className="text-gray-300 text-lg">
                Únete a más de 52,000 profesionales exitosos
              </p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setShowPopup(false); }} className="space-y-5">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-[#3E64DE] focus:border-transparent backdrop-blur-sm transition-all"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-[#3E64DE] focus:border-transparent backdrop-blur-sm transition-all"
                required
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-[#3E64DE] to-blue-600 hover:from-[#395BCA] hover:to-blue-700 py-6 text-lg font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
                Obtener mi 50% OFF ahora
              </Button>
            </form>
            <p className="text-center text-sm text-gray-400 mt-6">
              ⏰ Oferta válida solo por 48 horas
            </p>
          </div>
        </div>
      )}

      {/* Popup de Categoría */}
      {showCategoryPopup && selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-gradient-to-br from-[#1a1b2e] to-[#0a0b14] border border-white/10 rounded-3xl max-w-3xl w-full p-10 relative animate-in zoom-in-95 duration-300 shadow-2xl">
            <button
              onClick={() => setShowCategoryPopup(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mb-8">
              {/* Header del popup */}
              <div className="flex items-center gap-6 mb-6">
                <div className={`w-24 h-24 rounded-2xl ${selectedCategory.color} bg-opacity-20 backdrop-blur-sm flex items-center justify-center shadow-xl`}>
                  {(() => {
                    const Icon = selectedCategory.icon;
                    return <Icon className="w-12 h-12 text-white drop-shadow-lg" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {selectedCategory.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-5 h-5" />
                    <span>{selectedCategory.students} estudiantes activos</span>
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {selectedCategory.description}
              </p>

              {/* Cursos disponibles */}
              <div>
                <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Cursos destacados:</h4>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {selectedCategory.courses?.map((course: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-white/90 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#3E64DE]/50 transition-all duration-300">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{course}</span>
                    </div>
                  ))}
                </div>

                {/* Botón de acción */}
                <Link to={selectedCategory.link}>
                  <Button className="w-full bg-gradient-to-r from-[#3E64DE] to-blue-600 hover:from-[#395BCA] hover:to-blue-700 text-white py-6 text-lg font-bold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
                    Ver todos los cursos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
