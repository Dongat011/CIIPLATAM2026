import { useState } from "react";
import {
  LayoutDashboard,
  Link as LinkIcon,
  DollarSign,
  TrendingUp,
  FileText,
  Trophy,
  HelpCircle,
  User,
  Copy,
  ExternalLink,
  Download,
  Eye,
  MousePointerClick,
  ShoppingCart,
  CheckCircle,
  Calendar
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { toast } from "sonner";

export default function AffiliateDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [copiedLink, setCopiedLink] = useState(false);

  const stats = {
    clicks: 1247,
    sales: 23,
    conversion: 1.84,
    commissions: 4567,
    pending: 1234,
    available: 3333
  };

  const affiliateLinks = [
    {
      id: 1,
      product: "Programa Finanzas Cuantitativas",
      link: "https://edumarket.com/ref/JD892K3",
      clicks: 456,
      sales: 12,
      commission: 1890
    },
    {
      id: 2,
      product: "Data Science con Python",
      link: "https://edumarket.com/ref/PL234M8",
      clicks: 389,
      sales: 8,
      commission: 1456
    },
    {
      id: 3,
      product: "Machine Learning Avanzado",
      link: "https://edumarket.com/ref/XY567N2",
      clicks: 402,
      sales: 3,
      commission: 1221
    }
  ];

  const salesHistory = [
    {
      id: 1,
      product: "Programa Finanzas Cuantitativas",
      buyer: "Juan P.",
      date: "2026-04-18",
      amount: 1299,
      commission: 389.70,
      status: "Aprobado"
    },
    {
      id: 2,
      product: "Data Science con Python",
      buyer: "María G.",
      date: "2026-04-17",
      amount: 899,
      commission: 269.70,
      status: "Aprobado"
    },
    {
      id: 3,
      product: "Machine Learning Avanzado",
      buyer: "Carlos R.",
      date: "2026-04-16",
      amount: 1499,
      commission: 449.70,
      status: "Pendiente"
    },
    {
      id: 4,
      product: "Business Intelligence",
      buyer: "Ana T.",
      date: "2026-04-15",
      amount: 599,
      commission: 179.70,
      status: "Aprobado"
    }
  ];

  const rankings = [
    { rank: 1, name: "Pedro López", sales: 156, commissions: 45678 },
    { rank: 2, name: "Laura Martínez", sales: 143, commissions: 42890 },
    { rank: 3, name: "Tú", sales: 23, commissions: 4567, isUser: true },
    { rank: 4, name: "Roberto Silva", sales: 19, commissions: 3890 },
    { rank: 5, name: "Ana Torres", sales: 15, commissions: 2456 }
  ];

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(true);
    toast.success("¡Link copiado al portapapeles!");
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const menuItems = [
    { id: "dashboard", label: "Inicio", icon: LayoutDashboard },
    { id: "links", label: "Enlaces", icon: LinkIcon },
    { id: "sales", label: "Ventas", icon: ShoppingCart },
    { id: "commissions", label: "Comisiones", icon: DollarSign },
    { id: "materials", label: "Material", icon: FileText },
    { id: "ranking", label: "Ranking", icon: Trophy },
    { id: "support", label: "Soporte", icon: HelpCircle },
    { id: "profile", label: "Perfil", icon: User }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0">
          <div className="p-6 border-b border-gray-200">
            <h2 className="font-bold text-xl text-gray-900">Panel Afiliado</h2>
            <p className="text-sm text-gray-600 mt-1">Bienvenido, Juan</p>
          </div>
          <nav className="p-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-50 text-[#3E64DE]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeSection === "dashboard" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Clics Totales</CardTitle>
                    <MousePointerClick className="w-4 h-4 text-[#3E64DE]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">{stats.clicks}</div>
                    <p className="text-xs text-green-600 mt-1">+12% vs mes anterior</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Ventas</CardTitle>
                    <ShoppingCart className="w-4 h-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">{stats.sales}</div>
                    <p className="text-xs text-green-600 mt-1">+8% vs mes anterior</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Conversión</CardTitle>
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">{stats.conversion}%</div>
                    <p className="text-xs text-gray-600 mt-1">Promedio: 1.5%</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Comisiones</CardTitle>
                    <DollarSign className="w-4 h-4 text-yellow-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">${stats.commissions}</div>
                    <p className="text-xs text-green-600 mt-1">+15% vs mes anterior</p>
                  </CardContent>
                </Card>
              </div>

              {/* Earnings Overview */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Estado de Comisiones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-sm text-yellow-800 mb-1">Pendiente de aprobación</p>
                      <p className="text-2xl font-bold text-yellow-900">${stats.pending}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800 mb-1">Disponible para retiro</p>
                      <p className="text-2xl font-bold text-green-900">${stats.available}</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800 mb-1">Total ganado</p>
                      <p className="text-2xl font-bold text-blue-900">${stats.commissions}</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-[#3E64DE] hover:bg-[#395BCA]">
                    Solicitar retiro
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Sales */}
              <Card>
                <CardHeader>
                  <CardTitle>Ventas Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Producto</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Monto</TableHead>
                        <TableHead>Comisión</TableHead>
                        <TableHead>Estado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {salesHistory.slice(0, 5).map((sale) => (
                        <TableRow key={sale.id}>
                          <TableCell className="font-medium">{sale.product}</TableCell>
                          <TableCell>{sale.date}</TableCell>
                          <TableCell>${sale.amount}</TableCell>
                          <TableCell className="font-semibold text-green-600">${sale.commission}</TableCell>
                          <TableCell>
                            <Badge className={sale.status === "Aprobado" ? "bg-green-500" : "bg-yellow-500"}>
                              {sale.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === "links" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Mis Enlaces de Afiliado</h1>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Generador de Enlaces</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Buscar producto..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E64DE] focus:border-transparent"
                    />
                    <Button className="bg-[#3E64DE] hover:bg-[#395BCA]">
                      Generar enlace
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {affiliateLinks.map((link) => (
                  <Card key={link.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{link.product}</h3>
                          <div className="flex items-center gap-2 mb-3">
                            <input
                              type="text"
                              value={link.link}
                              readOnly
                              className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded text-sm"
                            />
                            <Button
                              size="sm"
                              onClick={() => copyToClipboard(link.link)}
                              className="bg-[#3E64DE] hover:bg-[#395BCA]"
                            >
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MousePointerClick className="w-4 h-4" />
                              <span>{link.clicks} clics</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ShoppingCart className="w-4 h-4" />
                              <span>{link.sales} ventas</span>
                            </div>
                            <div className="flex items-center gap-1 text-green-600 font-semibold">
                              <DollarSign className="w-4 h-4" />
                              <span>${link.commission}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === "sales" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Historial de Ventas</h1>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Todas las Ventas</CardTitle>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Exportar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Producto</TableHead>
                        <TableHead>Comprador</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Monto</TableHead>
                        <TableHead>Comisión</TableHead>
                        <TableHead>Estado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {salesHistory.map((sale) => (
                        <TableRow key={sale.id}>
                          <TableCell>#{sale.id}</TableCell>
                          <TableCell className="font-medium">{sale.product}</TableCell>
                          <TableCell>{sale.buyer}</TableCell>
                          <TableCell>{sale.date}</TableCell>
                          <TableCell>${sale.amount}</TableCell>
                          <TableCell className="font-semibold text-green-600">${sale.commission}</TableCell>
                          <TableCell>
                            <Badge className={sale.status === "Aprobado" ? "bg-green-500" : "bg-yellow-500"}>
                              {sale.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === "materials" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Material Promocional</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Banners</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded"></div>
                            <div>
                              <p className="font-medium text-sm">Banner {i} - 728x90</p>
                              <p className="text-xs text-gray-600">JPG - 245 KB</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Textos Promocionales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700 mb-2">
                          "Transforma tu carrera con los mejores programas de educación en línea. ¡40% OFF!"
                        </p>
                        <Button size="sm" variant="outline" onClick={() => copyToClipboard("Transforma tu carrera...")}>
                          <Copy className="w-4 h-4 mr-2" />
                          Copiar
                        </Button>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700 mb-2">
                          "Aprende de expertos de Google, Microsoft y más. Certificación internacional incluida."
                        </p>
                        <Button size="sm" variant="outline" onClick={() => copyToClipboard("Aprende de expertos...")}>
                          <Copy className="w-4 h-4 mr-2" />
                          Copiar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeSection === "ranking" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Ranking de Afiliados</h1>

              <Card>
                <CardHeader>
                  <CardTitle>Top Afiliados del Mes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {rankings.map((affiliate) => (
                      <div
                        key={affiliate.rank}
                        className={`flex items-center justify-between p-4 rounded-lg ${
                          affiliate.isUser ? "bg-blue-50 border-2 border-[#3E64DE]/30" : "bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            affiliate.rank === 1 ? "bg-yellow-400 text-yellow-900" :
                            affiliate.rank === 2 ? "bg-gray-300 text-gray-900" :
                            affiliate.rank === 3 ? "bg-orange-400 text-orange-900" :
                            "bg-gray-200 text-gray-700"
                          }`}>
                            {affiliate.rank}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {affiliate.name}
                              {affiliate.isUser && <Badge className="ml-2 bg-[#3E64DE]">Tú</Badge>}
                            </p>
                            <p className="text-sm text-gray-600">{affiliate.sales} ventas</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">${affiliate.commissions}</p>
                          <p className="text-sm text-gray-600">en comisiones</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
