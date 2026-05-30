import { Link } from "react-router";
import { Zap, Rocket, Crown, Check, ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export default function MembershipsSection() {
  const plans = [
    {
      id: "spark",
      name: "Spark",
      icon: Zap,
      price: 79,
      duration: "mes",
      color: "from-green-500 to-emerald-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      tagline: "Enciende tu potencial",
      highlights: [
        "Acceso a +50 cursos",
        "50% descuento en programas",
        "Certificados verificables"
      ]
    },
    {
      id: "levelup",
      name: "Level Up",
      icon: Rocket,
      price: 399,
      duration: "6 meses",
      color: "from-[#3E64DE] to-blue-700",
      iconBg: "bg-blue-100",
      iconColor: "text-[#3E64DE]",
      tagline: "Sube de nivel profesional",
      highlights: [
        "65% descuento en programas",
        "2 mentorías personalizadas",
        "Bolsa de empleo exclusiva"
      ],
      popular: true
    },
    {
      id: "prime",
      name: "Prime",
      icon: Crown,
      price: 799,
      duration: "12 meses",
      color: "from-purple-600 to-indigo-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      tagline: "Élite profesional absoluta",
      highlights: [
        "75% descuento en programas",
        "4 mentorías + headhunting",
        "1 programa gratis al año"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0a0b14] via-[#1a1b2e] to-[#0a0b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-[#3E64DE] to-blue-600 text-white text-base px-6 py-3 shadow-lg shadow-blue-500/20">
            <Star className="w-5 h-5 mr-2" />
            Membresías exclusivas
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Impulsa tu crecimiento
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3E64DE] to-blue-500 mt-2">con acceso ilimitado</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Formación continua, mentorías con expertos y una red de oportunidades laborales.
            Todo en un solo lugar, con descuentos de hasta 75%.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.id}
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-[#3E64DE] transform scale-105 shadow-xl shadow-blue-500/20 bg-white/10 backdrop-blur-xl'
                    : 'border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-[#3E64DE]/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#3E64DE] to-blue-600 text-white py-3 text-center font-bold text-sm shadow-lg">
                    ⭐ MÁS POPULAR
                  </div>
                )}

                <CardContent className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  {/* Icon and Name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${plan.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className={`w-7 h-7 ${plan.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      <p className="text-sm text-gray-400">{plan.tagline}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-400">S/</span>
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">/ {plan.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-4 mb-8">
                    {plan.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-200">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link to="/membresias">
                    <Button
                      className={`w-full py-7 font-bold text-lg shadow-lg transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#3E64DE] to-blue-600 hover:from-[#395BCA] hover:to-blue-700 shadow-blue-500/30 hover:shadow-blue-500/50'
                          : `bg-gradient-to-r ${plan.color} hover:opacity-90 shadow-black/20`
                      }`}
                    >
                      Ver plan completo
                      <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link to="/membresias">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#3E64DE]/50 bg-white/5 backdrop-blur-sm text-white hover:bg-[#3E64DE] hover:border-[#3E64DE] hover:text-white text-lg px-10 py-7 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
            >
              Comparar todos los beneficios
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
          <p className="mt-6 text-sm text-gray-400">
            ✓ Sin permanencia  ✓ Pago seguro  ✓ Acceso inmediato
          </p>
        </div>
      </div>
    </section>
  );
}
