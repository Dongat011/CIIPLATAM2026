import { useState } from "react";
import { Link, useParams } from "react-router";
import { Star, Play, Clock, Calendar, Users, Filter, ChevronDown, Search, Crown, ArrowUpDown, Pickaxe, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function CategoryPage() {
  const { slug } = useParams();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState("all");
  const [modality, setModality] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const categoryData: Record<string, any> = {
    finanzas: {
      title: "Finanzas e Inversiones",
      description: "Domina el mundo de las finanzas corporativas, inversiones y análisis financiero",
      icon: "💰",
      color: "from-green-600 to-green-800",
      brand: null
    },
    programacion: {
      title: "Programación y Ciencia de Datos",
      description: "Conviértete en un experto en desarrollo de software y análisis de datos",
      icon: "💻",
      color: "from-purple-600 to-purple-800",
      brand: null
    },
    ia: {
      title: "Inteligencia Artificial y Automatización",
      description: "Aprende las tecnologías del futuro: IA, Machine Learning y automatización",
      icon: "🤖",
      color: "from-indigo-600 to-indigo-800",
      brand: null
    },
    "ciif-latam": {
      title: "CIIP LATAM",
      description: "Especialízate en Finanzas, Business Intelligence, Programación y Ciencia de Datos",
      icon: "CIIP",
      color: "from-[#3E64DE] to-blue-700",
      brand: "ciif",
      longDescription: "Lidera la transformación digital en finanzas, business intelligence y desarrollo de software. Aprende de expertos en análisis de datos, programación avanzada y gestión financiera estratégica."
    },
    "geomina-latam": {
      title: "GEOMINA LATAM",
      description: "Especialízate en Minería, Geología y Gestión Ambiental",
      icon: "⛏️",
      color: "from-yellow-500 to-orange-600",
      brand: "geomina",
      longDescription: "Domina la ingeniería minera del futuro con tecnología de punta. Especialízate en gestión ambiental, seguridad minera, geología aplicada y optimización de procesos extractivos."
    },
    "biomedi": {
      title: "BIOMEDI",
      description: "Especialízate en Medicina, Biotecnología y Salud Pública",
      icon: "❤️",
      color: "from-red-500 to-pink-600",
      brand: "biomedi",
      longDescription: "Avanza en ciencias de la salud con educación de clase mundial. Especialízate en investigación clínica, biotecnología, salud pública y medicina basada en evidencia."
    }
  };

  const category = categoryData[slug || "finanzas"] || categoryData.finanzas;

  const products = [
    {
      id: 1,
      type: "Programa",
      title: "Programa Avanzado en Finanzas Cuantitativas",
      instructor: "Dr. Carlos Mendoza",
      price: 1299,
      originalPrice: 1999,
      rating: 4.9,
      students: 1234,
      modality: "En vivo",
      duration: "12 semanas",
      startDate: "15 Mayo 2026",
      badge: "Bestseller"
    },
    {
      id: 2,
      type: "Curso Express",
      title: "Análisis Financiero con Python",
      instructor: "Ing. María López",
      price: 599,
      originalPrice: 999,
      rating: 4.8,
      students: 2345,
      modality: "En vivo",
      duration: "6 semanas",
      startDate: "22 Mayo 2026",
      badge: "Nuevo"
    },
    {
      id: 3,
      type: "Infoproducto",
      title: "Trading Algorítmico para Principiantes",
      instructor: "Lic. Roberto Sánchez",
      price: 299,
      originalPrice: 499,
      rating: 4.7,
      students: 3456,
      modality: "Grabado",
      duration: "4 semanas",
      startDate: "Acceso inmediato"
    },
    {
      id: 4,
      type: "Programa",
      title: "MBA en Finanzas Corporativas",
      instructor: "Dr. Ana Torres",
      price: 2499,
      originalPrice: 3999,
      rating: 5.0,
      students: 567,
      modality: "En vivo",
      duration: "24 semanas",
      startDate: "1 Junio 2026",
      badge: "Premium"
    },
    {
      id: 5,
      type: "Membresía",
      title: "Acceso Ilimitado - Finanzas Pro",
      instructor: "Múltiples instructores",
      price: 99,
      originalPrice: 199,
      rating: 4.9,
      students: 4567,
      modality: "Streaming",
      duration: "Mensual",
      startDate: "Acceso inmediato",
      badge: "Popular"
    },
    {
      id: 6,
      type: "Curso Express",
      title: "Valoración de Empresas",
      instructor: "MBA. Luis Ramírez",
      price: 499,
      originalPrice: 799,
      rating: 4.6,
      students: 1890,
      modality: "Grabado",
      duration: "5 semanas",
      startDate: "Acceso inmediato"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className={`bg-gradient-to-br ${category.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            {category.brand === "ciif" ? (
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{category.icon}</span>
              </div>
            ) : category.brand === "geomina" ? (
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Pickaxe className="w-12 h-12 text-white" />
              </div>
            ) : category.brand === "biomedi" ? (
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
            ) : (
              <span className="text-6xl">{category.icon}</span>
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{category.title}</h1>
              <p className="text-xl text-white/90">{category.longDescription || category.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom & Career Paths - Combined */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Para quién es */}
            <div>
              <h2 className="text-xl font-bold text-black mb-4">¿Para quién es?</h2>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-black text-sm">Profesionales en Activo</h3>
                  <p className="text-black text-xs">Que buscan especializarse y avanzar en su carrera</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-black text-sm">Emprendedores</h3>
                  <p className="text-black text-xs">Que necesitan habilidades financieras para sus negocios</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-black text-sm">Estudiantes</h3>
                  <p className="text-black text-xs">Que quieren prepararse para el mercado laboral</p>
                </div>
              </div>
            </div>

            {/* Salidas laborales */}
            <div>
              <h2 className="text-xl font-bold text-black mb-4">Salidas laborales</h2>
              <div className="grid grid-cols-2 gap-3">
                {["Analista Financiero", "Trader", "CFO", "Asesor de Inversiones", "Risk Manager", "Controller", "Tesorero", "Auditor Financiero"].map((job, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
                    <p className="font-medium text-black text-sm">{job}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar & Membership Button */}
          <div className="mb-8 flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar cursos, programas..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3E64DE] focus:border-transparent text-black"
              />
            </div>
            <Link to="/membresias">
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-3 shadow-lg shadow-orange-500/30">
                <Crown className="w-5 h-5 mr-2" />
                Membresías
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-black">Todos los productos ({products.length})</h2>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-gray-600" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] text-black">
                  <SelectValue placeholder="Ordenar por" className="text-black" />
                </SelectTrigger>
                <SelectContent className="text-black">
                  <SelectItem value="popular" className="text-black">Más populares</SelectItem>
                  <SelectItem value="price-low" className="text-black">Precio: bajo a alto</SelectItem>
                  <SelectItem value="price-high" className="text-black">Precio: alto a bajo</SelectItem>
                  <SelectItem value="rating" className="text-black">Mejor valorados</SelectItem>
                  <SelectItem value="newest" className="text-black">Más recientes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:block ${showFilters ? "block" : "hidden"}`}>
              <div className="bg-white p-6 rounded-lg sticky top-24 border border-gray-200">
                <h3 className="font-semibold text-black mb-4">Filtros</h3>

                {/* Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-black mb-3">Tipo de producto</h4>
                  <div className="space-y-2">
                    {["Programas en vivo", "Cursos Express", "Infoproductos", "Membresías"].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-black">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Level Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-black mb-3">Niveles</h4>
                  <div className="space-y-2">
                    {["Principiante", "Intermedio", "Avanzado", "Todos los niveles"].map((level) => (
                      <label key={level} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-black">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-black mb-3">Precio</h4>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger className="text-black">
                      <SelectValue placeholder="Seleccionar rango" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="0-500">$0 - $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                      <SelectItem value="2000+">$2,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Modality Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-black mb-3">Modalidad</h4>
                  <div className="space-y-2">
                    {["En vivo", "Grabado", "Streaming"].map((mod) => (
                      <label key={mod} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-black">{mod}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Limpiar filtros
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link key={product.id} to={`/curso/${product.id}`} className="group">
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-16 h-16 text-white opacity-80" />
                        </div>
                        {product.badge && (
                          <Badge className="absolute top-3 left-3 bg-yellow-500">
                            {product.badge}
                          </Badge>
                        )}
                        {product.modality === "En vivo" && (
                          <Badge className="absolute top-3 right-3 bg-red-500">
                            🔴 En vivo
                          </Badge>
                        )}
                      </div>
                      <div className="p-4">
                        <Badge variant="outline" className="mb-2 text-black">
                          {product.type}
                        </Badge>
                        <h3 className="font-semibold text-black mb-2 group-hover:text-[#3E64DE] line-clamp-2">
                          {product.title}
                        </h3>
                        <p className="text-sm text-black mb-3">{product.instructor}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-semibold text-black">{product.rating}</span>
                          </div>
                          <span className="text-sm text-black">({product.students})</span>
                        </div>
                        <div className="flex items-center gap-4 mb-3 text-sm text-black">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{product.duration}</span>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-2xl font-bold text-black">${product.price}</span>
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        </div>
                        <Button className="w-full bg-[#3E64DE] hover:bg-[#395BCA]">
                          Comprar ahora
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
