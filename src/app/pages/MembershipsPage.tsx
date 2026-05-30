import { Link } from "react-router";
import {
  Check,
  Crown,
  Zap,
  Rocket,
  Award,
  Users,
  Calendar,
  TrendingUp,
  Shield,
  X,
  CheckCircle2,
  Star,
  Sparkles,
  Video,
  BookOpen,
  GraduationCap,
  Target
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader } from "../components/ui/card";

export default function MembershipsPage() {
  const plans = [
    {
      id: "spark",
      name: "Spark",
      icon: Zap,
      price: 79,
      duration: "mes",
      discount: 50,
      color: "from-green-500 to-emerald-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      description: "Enciende tu potencial profesional",
      features: [
        "Acceso a +50 cursos especializados",
        "50% descuento en todos los programas",
        "Certificados verificables",
        "Acceso a comunidad exclusiva",
        "Recursos descargables",
        "Soporte por correo"
      ],
      cta: "Comenzar ahora",
      popular: false
    },
    {
      id: "levelup",
      name: "Level Up",
      icon: Rocket,
      price: 399,
      duration: "6 meses",
      discount: 65,
      color: "from-[#3E64DE] to-blue-700",
      iconBg: "bg-blue-100",
      iconColor: "text-[#3E64DE]",
      description: "Sube de nivel en tu carrera profesional",
      features: [
        "Todo de Impulso +",
        "65% descuento en programas",
        "2 mentorías personalizadas",
        "Acceso prioritario a eventos",
        "Bolsa de empleo exclusiva",
        "Certificaciones premium",
        "Networking mensual",
        "Soporte prioritario"
      ],
      cta: "¡Quiero avanzar!",
      popular: true,
      badge: "MÁS POPULAR"
    },
    {
      id: "prime",
      name: "Prime",
      icon: Crown,
      price: 799,
      duration: "12 meses",
      discount: 75,
      color: "from-purple-600 to-indigo-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      description: "Membresía élite para profesionales de primer nivel",
      features: [
        "Todo de Avanza +",
        "75% descuento en programas",
        "4 mentorías personalizadas",
        "Acceso VIP a todos los eventos",
        "Headhunting activo",
        "Programa de liderazgo exclusivo",
        "Networking internacional",
        "1 programa gratis al año",
        "Soporte 24/7 dedicado"
      ],
      cta: "Ser líder ahora",
      popular: false,
      badge: "MÁXIMO VALOR"
    }
  ];

  const globalBenefits = [
    {
      icon: GraduationCap,
      title: "Certificaciones Reconocidas",
      description: "Certificados verificables internacionalmente que impulsan tu CV"
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "+10,000 profesionales compartiendo experiencias y oportunidades"
    },
    {
      icon: Video,
      title: "Mentorías Personalizadas",
      description: "Sesiones 1 a 1 con expertos de empresas líderes"
    },
    {
      icon: Target,
      title: "Empleabilidad",
      description: "Acceso a bolsa de empleo y conexiones directas con empresas"
    },
    {
      icon: Calendar,
      title: "Eventos Exclusivos",
      description: "Webinars, talleres y networking con líderes de industria"
    },
    {
      icon: BookOpen,
      title: "Contenido Ilimitado",
      description: "Biblioteca completa de cursos, recursos y material descargable"
    }
  ];

  const comparison = [
    { feature: "Acceso a cursos especializados", spark: true, levelup: true, prime: true },
    { feature: "Certificaciones verificables", spark: true, levelup: true, prime: true },
    { feature: "Comunidad exclusiva", spark: true, levelup: true, prime: true },
    { feature: "Descuento en programas", spark: "50%", levelup: "65%", prime: "75%" },
    { feature: "Mentorías personalizadas", spark: false, levelup: "2", prime: "4" },
    { feature: "Bolsa de empleo", spark: false, levelup: true, prime: true },
    { feature: "Eventos prioritarios", spark: false, levelup: true, prime: true },
    { feature: "Networking internacional", spark: false, levelup: false, prime: true },
    { feature: "Programa gratis anual", spark: false, levelup: false, prime: true },
    { feature: "Headhunting activo", spark: false, levelup: false, prime: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0b14] via-[#141523] to-[#0a0b14]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a0b14] via-[#1a1b2e] to-[#0a0b14] text-white py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#3E64DE] rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-[100px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-500 rounded-full filter blur-[90px] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 border-0 text-base px-6 py-3 shadow-lg shadow-yellow-500/20">
            <Sparkles className="w-5 h-5 mr-2" />
            Invierte en tu futuro profesional
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
            Membresías que transforman
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 mt-2">
              tu carrera profesional
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Accede a formación ilimitada, mentorías personalizadas y una red de oportunidades que acelerarán tu crecimiento
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-lg px-10 py-7 shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300">
              Ver planes
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-[#3E64DE] font-bold text-lg px-10 py-7 transition-all duration-300">
              Comparar beneficios
            </Button>
          </div>
        </div>
      </section>

      {/* What is Membership Section */}
      <section className="py-24 bg-gradient-to-br from-[#0a0b14] via-[#141523] to-[#0a0b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              ¿Qué te ofrece nuestra membresía?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              No es solo acceso a cursos. Es tu plataforma completa de crecimiento profesional:
              formación continua, mentorías con expertos, networking estratégico y conexión directa
              con oportunidades laborales que multiplican tu valor en el mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-[#3E64DE]/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#3E64DE] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/30">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Acelera tu Carrera</h3>
                <p className="text-gray-300">
                  Aumenta tu empleabilidad y accede a mejores oportunidades con formación de élite
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-[#3E64DE]/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/30">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Red de Contactos</h3>
                <p className="text-gray-300">
                  Conecta con profesionales exitosos y empresas que buscan talento como tú
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-[#3E64DE]/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/30">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ahorro Inteligente</h3>
                <p className="text-gray-600">
                  Hasta 75% de descuento en programas premium que normalmente costarían miles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Elige el plan perfecto para ti
            </h2>
            <p className="text-xl text-gray-600">
              Todos los planes incluyen acceso ilimitado. Solo elige cuánto tiempo quieres invertir en ti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={plan.id}
                  className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                    plan.popular ? 'border-4 border-[#3E64DE] scale-105 md:scale-110' : 'border-2 border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#3E64DE] to-blue-700 text-white py-2 text-center font-bold text-sm">
                      ⭐ {plan.badge}
                    </div>
                  )}
                  {!plan.popular && plan.badge && (
                    <div className="absolute top-0 left-0 right-0 bg-purple-600 text-white py-2 text-center font-bold text-sm">
                      👑 {plan.badge}
                    </div>
                  )}

                  <CardContent className={`p-8 ${plan.badge ? 'pt-14' : ''}`}>
                    <div className={`w-16 h-16 ${plan.iconBg} rounded-full flex items-center justify-center mb-4`}>
                      <Icon className={`w-8 h-8 ${plan.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-gray-500">S/</span>
                        <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600">/ {plan.duration}</span>
                      </div>
                      <Badge className="mt-2 bg-green-100 text-green-700 border-0">
                        {plan.discount}% descuento en programas
                      </Badge>
                    </div>

                    <Button
                      className={`w-full py-6 text-lg font-bold mb-6 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#3E64DE] to-blue-700 hover:from-[#395BCA] hover:to-blue-800'
                          : `bg-gradient-to-r ${plan.color}`
                      }`}
                    >
                      {plan.cta}
                    </Button>

                    <div className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compara todos los beneficios
            </h2>
            <p className="text-xl text-gray-600">
              Visualiza rápidamente qué incluye cada plan
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Beneficio</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                      <div className="flex flex-col items-center">
                        <Zap className="w-5 h-5 text-green-600 mb-1" />
                        Impulso
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-[#3E64DE] bg-blue-50">
                      <div className="flex flex-col items-center">
                        <Rocket className="w-5 h-5 mb-1" />
                        Avanza
                        <Badge className="mt-1 bg-[#3E64DE] text-xs">POPULAR</Badge>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                      <div className="flex flex-col items-center">
                        <Crown className="w-5 h-5 text-purple-600 mb-1" />
                        Lidera
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparison.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.impulso === 'boolean' ? (
                          row.impulso ? (
                            <Check className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-semibold text-gray-900">{row.impulso}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-50/50">
                        {typeof row.avanza === 'boolean' ? (
                          row.avanza ? (
                            <Check className="w-5 h-5 text-[#3E64DE] mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-semibold text-[#3E64DE]">{row.avanza}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.lidera === 'boolean' ? (
                          row.lidera ? (
                            <Check className="w-5 h-5 text-purple-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-semibold text-purple-600">{row.lidera}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Global Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Beneficios incluidos en todos los planes
            </h2>
            <p className="text-xl text-gray-600">
              Sin importar qué plan elijas, siempre tendrás acceso a
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-2 border-gray-100 hover:border-[#3E64DE] hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-[#3E64DE] mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Discount System */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Sistema de descuentos progresivos
            </h2>
            <p className="text-xl text-blue-100">
              Mientras más te comprometes, más ahorras en tu formación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">50%</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Plan Impulso</h3>
                <p className="text-blue-100 mb-4">Ahorra la mitad en todos los programas</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Programa de S/2,000 → S/1,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Ideal para empezar</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#3E64DE] to-blue-700 border-4 border-yellow-400 transform scale-105">
              <CardContent className="p-6 text-center">
                <Badge className="mb-3 bg-yellow-400 text-gray-900">MÁS ELEGIDO</Badge>
                <div className="w-20 h-20 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">65%</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Plan Avanza</h3>
                <p className="text-blue-100 mb-4">El mejor balance valor-beneficios</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Programa de S/2,000 → S/700</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>+ Mentorías y networking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">75%</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Plan Lidera</h3>
                <p className="text-blue-100 mb-4">Máximo ahorro + beneficios VIP</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Programa de S/2,000 → S/500</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>+ 1 programa gratis al año</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>+ Headhunting exclusivo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pago 100% Seguro</h3>
                <p className="text-gray-600">
                  Procesamos pagos con tecnología encriptada. Tu información está protegida.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-[#3E64DE] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sin Permanencia</h3>
                <p className="text-gray-600">
                  Cancela cuando quieras. Mantienes acceso hasta finalizar tu periodo pagado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Garantía de Acceso</h3>
                <p className="text-gray-600">
                  Todo el contenido disponible desde el día 1. Sin restricciones ni sorpresas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#3E64DE] to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empieza hoy tu crecimiento profesional
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Miles de profesionales ya transformaron su carrera. Es tu turno.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xl px-12 py-8">
              Elegir mi plan ahora
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-xl px-12 py-8">
              Hablar con asesor
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Sin permanencia</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Pago seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Acceso inmediato</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
