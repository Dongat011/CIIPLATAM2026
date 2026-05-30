import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  CheckCircle,
  Star,
  Clock,
  Play,
  Download,
  Calendar,
  Award,
  ArrowRight,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function PostPurchase() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const purchasedCourse = {
    title: "Programa Avanzado en Finanzas Cuantitativas",
    instructor: "Dr. Carlos Mendoza",
    startDate: "15 Mayo 2026",
    accessLink: "/curso/1/acceso"
  };

  const upsellOffer = {
    title: "Pack Completo: Finanzas + IA + Data Science",
    originalPrice: 3999,
    specialPrice: 1999,
    discount: 50,
    courses: [
      "Programa Avanzado en Finanzas Cuantitativas ✅",
      "Machine Learning e IA Avanzada",
      "Data Science con Python",
      "Business Intelligence con Power BI"
    ],
    benefits: [
      "4 programas completos",
      "Ahorra $2,000",
      "Acceso de por vida",
      "Certificaciones incluidas"
    ]
  };

  const recommendedCourses = [
    {
      id: 2,
      title: "Machine Learning e IA Avanzada",
      instructor: "Dr. Juan Pérez",
      price: 1499,
      originalPrice: 2299,
      rating: 5.0,
      students: 987,
      discount: 35
    },
    {
      id: 3,
      title: "Data Science con Python",
      instructor: "Ing. María López",
      price: 899,
      originalPrice: 1499,
      rating: 4.8,
      students: 2345,
      discount: 40
    },
    {
      id: 4,
      title: "Business Intelligence con Power BI",
      instructor: "Lic. Ana Torres",
      price: 599,
      originalPrice: 999,
      rating: 4.7,
      students: 3456,
      discount: 40
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 animate-in zoom-in duration-500">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¡Felicitaciones! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Tu compra ha sido procesada exitosamente
          </p>
          <p className="text-gray-600">
            Hemos enviado los detalles de acceso a tu correo electrónico
          </p>
        </div>

        {/* Purchased Course Card */}
        <Card className="mb-8 border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-6 h-6 text-green-600" />
              Tu nuevo programa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{purchasedCourse.title}</h3>
                <p className="text-gray-700 mb-1">Instructor: {purchasedCourse.instructor}</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Inicia: {purchasedCourse.startDate}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1 bg-green-600 hover:bg-green-700 text-lg py-6">
                <Play className="w-5 h-5 mr-2" />
                Acceder al curso ahora
              </Button>
              <Button variant="outline" className="flex-1 py-6">
                <Download className="w-5 h-5 mr-2" />
                Descargar material
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Limited Time Upsell */}
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

          <div className="relative">
            <Badge className="bg-yellow-500 text-yellow-900 mb-4">
              <Sparkles className="w-4 h-4 mr-1" />
              OFERTA EXCLUSIVA - SOLO HOY
            </Badge>

            <h2 className="text-3xl font-bold mb-4">
              ¡Completa tu formación ahora!
            </h2>

            <p className="text-xl mb-6 text-white/90">
              Aprovecha esta oferta exclusiva solo para nuevos estudiantes
            </p>

            {/* Timer */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6 inline-block">
              <p className="text-sm mb-2">⏰ Esta oferta expira en:</p>
              <div className="flex gap-3">
                <div className="text-center">
                  <div className="bg-white text-purple-600 rounded-lg px-4 py-3 font-bold text-3xl min-w-[70px]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <p className="text-xs mt-1">Minutos</p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-purple-600 rounded-lg px-4 py-3 font-bold text-3xl min-w-[70px]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <p className="text-xs mt-1">Segundos</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* What's Included */}
              <div>
                <h3 className="font-semibold text-lg mb-4">📚 Incluye:</h3>
                <ul className="space-y-2">
                  {upsellOffer.courses.map((course, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="font-semibold text-lg mb-4">✨ Beneficios:</h3>
                <ul className="space-y-2">
                  {upsellOffer.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="w-5 h-5 mt-0.5 flex-shrink-0 fill-yellow-400 text-yellow-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-white/80 mb-1">Precio normal:</p>
                  <p className="text-2xl line-through text-white/60">${upsellOffer.originalPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/80 mb-1">Tu precio HOY:</p>
                  <p className="text-4xl font-bold">${upsellOffer.specialPrice}</p>
                </div>
              </div>
              <div className="bg-yellow-400 text-yellow-900 rounded-lg px-4 py-2 font-bold text-center">
                ¡Ahorras ${upsellOffer.originalPrice - upsellOffer.specialPrice}! ({upsellOffer.discount}% OFF)
              </div>
            </div>

            {/* CTA */}
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xl py-8 shadow-xl hover:shadow-2xl transition-all">
              Sí, quiero el pack completo
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>

            <p className="text-center text-sm text-white/80 mt-4">
              ✓ Garantía de devolución de 14 días
            </p>
          </div>
        </div>

        {/* Recommended Courses */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cursos recomendados para ti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-80" />
                  </div>

                  <Badge className="mb-3 bg-red-500">{course.discount}% OFF</Badge>

                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({course.students})</span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                    <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                  </div>

                  <Link to={`/curso/${course.id}`}>
                    <Button className="w-full bg-[#3E64DE] hover:bg-[#395BCA]">
                      Ver programa
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle>Próximos pasos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-[#3E64DE] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Revisa tu correo</h4>
                  <p className="text-gray-700">Hemos enviado toda la información de acceso y bienvenida</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-[#3E64DE] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Únete a la comunidad</h4>
                  <p className="text-gray-700">Conéctate con otros estudiantes en nuestro grupo exclusivo</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-[#3E64DE] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Prepara tu entorno</h4>
                  <p className="text-gray-700">Descarga el material y configura las herramientas necesarias</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Message */}
        <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-700">
            ¿Tienes preguntas? Nuestro equipo está aquí para ayudarte
          </p>
          <Button variant="link" className="text-[#3E64DE]">
            Contactar soporte
          </Button>
        </div>
      </div>
    </div>
  );
}
