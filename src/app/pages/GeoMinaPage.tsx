import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  Pickaxe,
  Heart,
  Star,
  Play,
  Clock,
  Users,
  Globe,
  Award,
  Target,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  GraduationCap,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import MembershipsSection from "../components/MembershipsSection";
import GeoMinaHeader from "../components/GeoMinaHeader";

export default function GeoMinaPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "Planeamiento de Minas y Optimización",
      subtitle: "Programa:",
      tag: "CURSO CERTIFICADO"
    },
    {
      title: "Gestión Ambiental y Cierre de Minas",
      subtitle: "Especialización:",
      tag: "EN VIVO"
    },
    {
      title: "Automatización y Minería Digital",
      subtitle: "Programa:",
      tag: "BESTSELLER"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const instructors = [
    {
      name: "Ing. Roberto Minero",
      specialty: "Experto en Planeamiento Minero, Optimización y Geología Aplicada",
      company: "BHP Billiton",
      rating: 5.0,
      courses: 18,
      country: "🇵🇪",
      verified: true,
      image: "RM"
    },
    {
      name: "Geol. María Torres",
      specialty: "Experta en Geología Estructural, Modelamiento 3D y Exploración",
      company: "Newmont Mining",
      rating: 5.0,
      courses: 22,
      country: "🇨🇱",
      verified: true,
      image: "MT"
    },
    {
      name: "Ing. Carlos Verde",
      specialty: "Experto en Gestión Ambiental, Sostenibilidad y Cierre de Minas",
      company: "Anglo American",
      rating: 5.0,
      courses: 15,
      country: "🇨🇴",
      verified: true,
      image: "CV"
    },
    {
      name: "Ing. Pedro Vientos",
      specialty: "Experto en Ventilación Minera, Seguridad y Prevención de Riesgos",
      company: "Southern Copper",
      rating: 4.9,
      courses: 12,
      country: "🇵🇪",
      verified: true,
      image: "PV"
    }
  ];

  const testimonials = [
    {
      name: "Juan Minero",
      role: "Ingeniero Senior en BHP",
      image: "JM",
      country: "🇵🇪"
    },
    {
      name: "María Geóloga",
      role: "Geóloga en Antamina",
      image: "MG",
      country: "🇨🇱"
    },
    {
      name: "Pedro Ambiental",
      role: "Especialista Ambiental",
      image: "PA",
      country: "🇵🇪"
    }
  ];

  const allComments = [
    {
      name: "Juan Minero",
      role: "Ingeniero Senior en BHP",
      image: "JM",
      text: "El programa de planeamiento minero cambió mi carrera. Ahora lidero proyectos de optimización de gran envergadura.",
      rating: 5,
      country: "🇵🇪"
    },
    {
      name: "María Geóloga",
      role: "Geóloga en Antamina",
      image: "MG",
      text: "La calidad del contenido es excepcional. Aprendí técnicas de modelamiento 3D que uso a diario.",
      rating: 5,
      country: "🇨🇱"
    },
    {
      name: "Pedro Ambiental",
      role: "Especialista Ambiental en Cerro Verde",
      image: "PA",
      text: "Excelente formación en gestión ambiental y sostenibilidad. Me permitió ascender a jefe de área.",
      rating: 5,
      country: "🇵🇪"
    }
  ];

  const liveStats = [
    { label: "Estudiantes mineros", value: "8,456", icon: Users, color: "text-yellow-600" },
    { label: "Países alcanzados", value: "8", icon: Globe, color: "text-orange-600" },
    { label: "Horas de contenido", value: "+3,500", icon: Clock, color: "text-yellow-500" },
    { label: "Tasa de empleabilidad", value: "92%", icon: Target, color: "text-orange-500" }
  ];

  const courses = [
    {
      id: 1,
      title: "Planeamiento de Minas y Optimización",
      instructor: "Ing. Roberto Minero",
      price: 1299,
      originalPrice: 1999,
      rating: 4.9,
      students: 856,
      modality: "En vivo",
      duration: "12 semanas",
      label: "🔥 MÁS VENDIDO",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      id: 2,
      title: "Geología Aplicada con Software 3D",
      instructor: "Geol. María Torres",
      price: 599,
      originalPrice: 999,
      rating: 4.8,
      students: 1245,
      modality: "En vivo",
      duration: "6 semanas",
      label: "⚡ INICIO PRÓXIMO",
      gradient: "from-orange-500 to-yellow-600"
    },
    {
      id: 3,
      title: "Gestión Ambiental y Cierre de Minas",
      instructor: "Ing. Carlos Verde",
      price: 1499,
      originalPrice: 2299,
      rating: 5.0,
      students: 678,
      modality: "En vivo",
      duration: "14 semanas",
      label: "⭐ MEJOR VALORADO",
      gradient: "from-yellow-500 to-orange-700"
    },
    {
      id: 4,
      title: "Ventilación Minera Avanzada",
      instructor: "Ing. Pedro Vientos",
      price: 499,
      originalPrice: 799,
      rating: 4.7,
      students: 890,
      modality: "Grabado",
      duration: "5 semanas",
      label: "💎 BESTSELLER",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  const companies = [
    "BHP Billiton", "Newmont", "Anglo American", "Southern Copper", "Antamina", "Las Bambas", "Cerro Verde", "Yanacocha", "Barrick Gold", "Glencore"
  ];

  return (
    <div className="min-h-screen bg-[#0B1437]">
      <GeoMinaHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B1437] via-[#152045] to-[#0B1437] text-white overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/40">
                  <Pickaxe className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">GEOMINA LATAM</h1>
                  <p className="text-yellow-400">Ingeniería Minera del Futuro</p>
                </div>
              </div>

              <Badge className="bg-yellow-500 text-gray-900 px-4 py-2 text-sm font-bold">
                {heroSlides[currentSlide].tag}
              </Badge>

              <div>
                <p className="text-gray-400 text-lg mb-2">{heroSlides[currentSlide].subtitle}</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  {heroSlides[currentSlide].title}
                </h2>
              </div>

              <div className="flex gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-6 text-lg">
                  Ver más
                </Button>
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold px-8 py-6 text-lg">
                  Comprar ahora
                </Button>
              </div>
            </div>

            <div className="relative aspect-video bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>

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
                    index === currentSlide ? "bg-yellow-500 w-12" : "bg-white/30 w-2"
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

      {/* Promo Banner */}
      <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-gray-900">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <p className="font-bold text-sm md:text-base text-center">
              🔥 OFERTA MINERA: 50% OFF en todos los programas + Certificación GRATIS | Válido solo por 24 horas
            </p>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-gradient-to-br from-[#0a0b14] via-[#141523] to-[#0a0b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 text-base shadow-lg shadow-yellow-500/20">⚡ Ofertas limitadas</Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Programas que transforman ingenieros
            </h2>
            <p className="text-xl text-gray-300">
              Conviértete en el ingeniero minero que la industria necesita
            </p>
          </div>

          <Tabs defaultValue="live" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-xl">
              <TabsTrigger value="live" className="text-white data-[state=active]:bg-yellow-500 data-[state=active]:text-gray-900 rounded-lg transition-all">🔴 En vivo</TabsTrigger>
              <TabsTrigger value="popular" className="text-white data-[state=active]:bg-yellow-500 data-[state=active]:text-gray-900 rounded-lg transition-all">⭐ Más populares</TabsTrigger>
            </TabsList>

            <TabsContent value="live">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {courses.map((course) => (
                  <Link key={course.id} to={`/curso/${course.id}`} className="group">
                    <Card className="overflow-hidden hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-yellow-500 hover:scale-105 h-full">
                      <div className={`aspect-video bg-gradient-to-br ${course.gradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <Play className="w-10 h-10 text-yellow-600 ml-1" />
                          </div>
                        </div>
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-600 border-0 text-white px-3 py-1.5 shadow-lg font-bold">
                          {course.label}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-white mb-3 group-hover:text-yellow-400 line-clamp-2 text-lg">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">{course.instructor}</p>
                        <div className="flex items-center gap-2 mb-4">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-bold text-white">{course.rating}</span>
                          <span className="text-sm text-gray-400">({course.students})</span>
                        </div>
                        <div className="flex items-baseline gap-2 mb-5">
                          <span className="text-3xl font-bold text-white">${course.price}</span>
                          <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold py-6">
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
                    <Card className="overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-orange-500 hover:scale-105 h-full">
                      <div className={`aspect-video bg-gradient-to-br ${course.gradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <Play className="w-10 h-10 text-orange-600 ml-1" />
                          </div>
                        </div>
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-500 border-0 text-white px-3 py-1.5 shadow-lg font-bold">
                          {course.label}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-white mb-3 group-hover:text-orange-400 line-clamp-2 text-lg">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">{course.instructor}</p>
                        <div className="flex items-center gap-2 mb-4">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-bold text-white">{course.rating}</span>
                          <span className="text-sm text-gray-400">({course.students})</span>
                        </div>
                        <div className="flex items-baseline gap-2 mb-5">
                          <span className="text-3xl font-bold text-white">${course.price}</span>
                          <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-semibold py-6">
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
            <Link to="/categoria/mineria">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-10 py-6 text-lg font-bold shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105">
                Ver más cursos de Minería
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B1437] via-[#152045] to-[#0B1437]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Qué opinan nuestros ingenieros?
            </h2>
            <p className="text-xl text-gray-400">
              Historias de éxito de profesionales mineros de toda Latinoamérica
            </p>
          </div>

          {/* Video Testimonials */}
          <div className="relative mb-16">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 snap-center group cursor-pointer"
                >
                  <Card className="border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden h-80">
                    <CardContent className="p-0 h-full relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-orange-600/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                            {testimonial.image}
                          </div>
                          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <Play className="w-8 h-8 text-yellow-600 ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                        <p className="text-white font-bold text-sm mb-1">{testimonial.name}</p>
                        <p className="text-gray-300 text-xs line-clamp-2">{testimonial.role}</p>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="text-2xl">{testimonial.country}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Written Testimonials */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8">
              {allComments.map((comment, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <Card className="border border-white/10 bg-white/5 backdrop-blur-xl">
                    <CardContent className="p-12">
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl mb-4">
                            {comment.image}
                          </div>
                          <p className="font-bold text-white text-xl">{comment.name}</p>
                          <p className="text-gray-400 text-sm">{comment.role}</p>
                          <div className="flex gap-1 mt-3">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                          </div>
                        </div>
                        <div className="md:col-span-2 flex flex-col justify-center">
                          <p className="text-2xl text-white mb-6 italic">"{comment.text}"</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-10 py-6 text-lg shadow-xl shadow-yellow-500/30">
              <MessageCircle className="w-6 h-6 mr-3" />
              Déjanos tu comentario
            </Button>
          </div>
        </div>
      </section>

      <MembershipsSection />

      {/* Instructors */}
      <section className="py-24 bg-gradient-to-br from-[#0a0b14] via-[#1a1b2e] to-[#0a0b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Aprende con expertos de la industria minera
            </h2>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <Card className="border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/5] bg-gradient-to-br from-yellow-500/30 to-orange-600/30 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-500">
                          {instructor.image}
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-3xl shadow-xl border-2 border-white">
                          {instructor.country}
                        </div>
                      </div>
                      {instructor.verified && (
                        <div className="absolute top-4 right-4">
                          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-xl border-2 border-white">
                            <CheckCircle2 className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
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
                      <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                        {instructor.company}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones ISO */}
      <section className="py-24 bg-gradient-to-br from-[#0a0b14] via-[#1a1b2e] to-[#0a0b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold px-8 py-6">
                Ver más
              </Button>
            </div>
            <div className="flex gap-6 items-center justify-center">
              <Card className="w-48 h-48 border-2 border-yellow-400/30 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-3">
                    <Award className="w-10 h-10 text-gray-900" />
                  </div>
                  <p className="text-white font-bold text-center">ISO 9001</p>
                  <p className="text-gray-400 text-xs text-center mt-1">Gestión de Calidad</p>
                </CardContent>
              </Card>
              <Card className="w-48 h-48 border-2 border-yellow-400/30 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-3">
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

      {/* Companies */}
      <section className="py-20 bg-gradient-to-br from-[#0a0b14] via-[#141523] to-[#0a0b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
            Nuestros egresados trabajan en
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="aspect-video bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center px-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <span className="font-bold text-white text-center text-sm">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-[#0a0b14] via-[#1a1b2e] to-[#0a0b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Números que hablan por nosotros
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {liveStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-yellow-500/50 hover:scale-105 transition-all duration-300">
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

      {/* ESPECIALÍZATE JUNTO A */}
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
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge className="bg-[#3E64DE]/20 text-[#3E64DE] border border-[#3E64DE]/30">Finanzas</Badge>
                  <Badge className="bg-[#3E64DE]/20 text-[#3E64DE] border border-[#3E64DE]/30">Business Intelligence</Badge>
                  <Badge className="bg-[#3E64DE]/20 text-[#3E64DE] border border-[#3E64DE]/30">Programación</Badge>
                </div>
              </div>
              <Link to="/">
                <Button className="w-full bg-gradient-to-r from-[#3E64DE] to-blue-600 hover:from-[#395BCA] hover:to-blue-700 text-white py-6 text-lg font-bold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
                  Explorar programas
                </Button>
              </Link>
            </div>

            {/* GEOMINA LATAM */}
            <div className="bg-white/5 backdrop-blur-xl border-2 border-yellow-500/50 rounded-3xl p-8 hover:border-yellow-500 hover:bg-white/10 transition-all duration-300 group scale-105 shadow-2xl shadow-yellow-500/30">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/40 group-hover:scale-110 transition-transform duration-300">
                  <Pickaxe className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">GEOMINA LATAM</h3>
                <Badge className="mb-4 bg-yellow-500 text-gray-900 px-4 py-1">Estás aquí</Badge>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Domina la ingeniería minera del futuro con tecnología de punta. Especialízate en gestión ambiental,
                  seguridad minera, geología aplicada y optimización de procesos extractivos.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">Minería</Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">Geología</Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">Gestión Ambiental</Badge>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white py-6 text-lg font-bold shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300">
                Explorar programas
              </Button>
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
                  biotecnología, salud pública y medicina basada en evidencia.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge className="bg-red-500/20 text-red-400 border border-red-500/30">Medicina</Badge>
                  <Badge className="bg-red-500/20 text-red-400 border border-red-500/30">Biotecnología</Badge>
                  <Badge className="bg-red-500/20 text-red-400 border border-red-500/30">Salud Pública</Badge>
                </div>
              </div>
              <Link to="/marca/biomedi">
                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-6 text-lg font-bold shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300">
                  Explorar programas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Métodos de pago */}
      <section className="py-20 bg-gradient-to-br from-[#0a0b14] via-[#141523] to-[#0a0b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* CTA */}
      <section className="py-28 bg-gradient-to-br from-yellow-500 via-orange-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
            ¿Listo para transformar tu carrera minera?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-800">
            Únete a más de 8,000 ingenieros que ya transformaron su futuro
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="bg-gray-900 hover:bg-black text-white font-bold text-xl px-14 py-9">
              Comenzar ahora - 50% OFF
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-900 bg-white/20 backdrop-blur-sm text-gray-900 hover:bg-white hover:text-gray-900 font-bold text-xl px-14 py-9">
              <MessageCircle className="mr-2 w-6 h-6" />
              Hablar con asesor
            </Button>
          </div>
          <p className="mt-10 text-lg text-gray-800">
            ✓ Sin permanencia ✓ Garantía 14 días ✓ Certificación incluida
          </p>
        </div>
      </section>
    </div>
  );
}
