import { useState } from "react";
import {
  Users,
  ShoppingBag,
  DollarSign,
  CreditCard,
  FileText,
  BarChart3,
  Settings,
  Search,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export default function AdminPanel() {
  const [activeModule, setActiveModule] = useState("overview");

  const stats = {
    totalRevenue: 125678,
    revenueGrowth: 12.5,
    totalSales: 456,
    salesGrowth: 8.3,
    activeAffiliates: 234,
    affiliatesGrowth: 15.2,
    pendingPayouts: 45678,
    payoutsGrowth: -3.2
  };

  const menuItems = [
    { id: "overview", label: "Resumen", icon: BarChart3 },
    { id: "affiliates", label: "Afiliados", icon: Users },
    { id: "products", label: "Productos", icon: ShoppingBag },
    { id: "sales", label: "Ventas", icon: DollarSign },
    { id: "commissions", label: "Comisiones", icon: CreditCard },
    { id: "payouts", label: "Pagos", icon: FileText },
    { id: "settings", label: "Configuración", icon: Settings }
  ];

  const affiliates = [
    { id: 1, name: "Pedro López", email: "pedro@example.com", sales: 156, commissions: 45678, status: "Activo", joined: "2025-01-15" },
    { id: 2, name: "Laura Martínez", email: "laura@example.com", sales: 143, commissions: 42890, status: "Activo", joined: "2025-02-20" },
    { id: 3, name: "Juan Rodríguez", email: "juan@example.com", sales: 23, commissions: 4567, status: "Activo", joined: "2026-03-10" },
    { id: 4, name: "Ana Torres", email: "ana@example.com", sales: 15, commissions: 2456, status: "Pendiente", joined: "2026-04-01" }
  ];

  const products = [
    { id: 1, name: "Programa Finanzas Cuantitativas", price: 1299, commission: 30, sales: 234, status: "Activo" },
    { id: 2, name: "Data Science con Python", price: 899, commission: 30, sales: 345, status: "Activo" },
    { id: 3, name: "Machine Learning Avanzado", price: 1499, commission: 35, sales: 156, status: "Activo" },
    { id: 4, name: "Business Intelligence", price: 599, commission: 25, sales: 456, status: "Pausado" }
  ];

  const recentSales = [
    { id: 1, product: "Programa Finanzas", affiliate: "Pedro López", amount: 1299, commission: 389.70, date: "2026-04-20 10:23", status: "Completado" },
    { id: 2, product: "Data Science", affiliate: "Laura Martínez", amount: 899, commission: 269.70, date: "2026-04-20 09:15", status: "Completado" },
    { id: 3, product: "Machine Learning", affiliate: "Juan Rodríguez", amount: 1499, commission: 449.70, date: "2026-04-19 18:45", status: "Pendiente" },
    { id: 4, product: "Business Intelligence", affiliate: "Ana Torres", amount: 599, commission: 179.70, date: "2026-04-19 14:30", status: "Completado" }
  ];

  const pendingPayouts = [
    { id: 1, affiliate: "Pedro López", amount: 12345, sales: 45, period: "Abril 2026", dueDate: "2026-05-01" },
    { id: 2, affiliate: "Laura Martínez", amount: 11890, sales: 42, period: "Abril 2026", dueDate: "2026-05-01" },
    { id: 3, affiliate: "Juan Rodríguez", amount: 3456, sales: 12, period: "Abril 2026", dueDate: "2026-05-01" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white min-h-screen sticky top-0">
          <div className="p-6 border-b border-gray-800">
            <h2 className="font-bold text-xl">Admin Panel</h2>
            <p className="text-sm text-gray-400 mt-1">EduMarket</p>
          </div>
          <nav className="p-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveModule(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                    activeModule === item.id
                      ? "bg-[#3E64DE] text-white"
                      : "text-gray-300 hover:bg-gray-800"
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
          {activeModule === "overview" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Resumen General</h1>
                <Button className="bg-[#3E64DE] hover:bg-[#395BCA]">
                  <Plus className="w-4 h-4 mr-2" />
                  Exportar Reporte
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Ingresos Totales</CardTitle>
                    <DollarSign className="w-4 h-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600">+{stats.revenueGrowth}% este mes</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Ventas Totales</CardTitle>
                    <ShoppingBag className="w-4 h-4 text-[#3E64DE]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">{stats.totalSales}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600">+{stats.salesGrowth}% este mes</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Afiliados Activos</CardTitle>
                    <Users className="w-4 h-4 text-purple-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">{stats.activeAffiliates}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600">+{stats.affiliatesGrowth}% este mes</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Pagos Pendientes</CardTitle>
                    <CreditCard className="w-4 h-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">${stats.pendingPayouts.toLocaleString()}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingDown className="w-4 h-4 text-red-600" />
                      <span className="text-xs text-red-600">{stats.payoutsGrowth}% este mes</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Sales */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Ventas Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Producto</TableHead>
                        <TableHead>Afiliado</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Monto</TableHead>
                        <TableHead>Comisión</TableHead>
                        <TableHead>Estado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentSales.map((sale) => (
                        <TableRow key={sale.id}>
                          <TableCell className="font-medium">{sale.product}</TableCell>
                          <TableCell>{sale.affiliate}</TableCell>
                          <TableCell>{sale.date}</TableCell>
                          <TableCell>${sale.amount}</TableCell>
                          <TableCell className="text-green-600 font-semibold">${sale.commission}</TableCell>
                          <TableCell>
                            <Badge className={sale.status === "Completado" ? "bg-green-500" : "bg-yellow-500"}>
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

          {activeModule === "affiliates" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Gestión de Afiliados</h1>
                <Button className="bg-[#3E64DE] hover:bg-[#395BCA]">
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo Afiliado
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Buscar afiliados..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E64DE] focus:border-transparent"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Ventas</TableHead>
                        <TableHead>Comisiones</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Fecha de Registro</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {affiliates.map((affiliate) => (
                        <TableRow key={affiliate.id}>
                          <TableCell className="font-medium">{affiliate.name}</TableCell>
                          <TableCell>{affiliate.email}</TableCell>
                          <TableCell>{affiliate.sales}</TableCell>
                          <TableCell className="font-semibold text-green-600">${affiliate.commissions}</TableCell>
                          <TableCell>
                            <Badge className={affiliate.status === "Activo" ? "bg-green-500" : "bg-yellow-500"}>
                              {affiliate.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{affiliate.joined}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="w-4 h-4 mr-2" />
                                  Ver detalles
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="w-4 h-4 mr-2" />
                                  Editar
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Eliminar
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeModule === "products" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Gestión de Productos</h1>
                <Button className="bg-[#3E64DE] hover:bg-[#395BCA]">
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo Producto
                </Button>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Producto</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Comisión</TableHead>
                        <TableHead>Ventas</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>${product.price}</TableCell>
                          <TableCell>{product.commission}%</TableCell>
                          <TableCell>{product.sales}</TableCell>
                          <TableCell>
                            <Badge className={product.status === "Activo" ? "bg-green-500" : "bg-gray-500"}>
                              {product.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Edit className="w-4 h-4 mr-2" />
                                  Editar
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Eye className="w-4 h-4 mr-2" />
                                  Ver ventas
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Eliminar
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeModule === "payouts" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Pagos Pendientes</h1>
                <Button className="bg-[#3E64DE] hover:bg-[#395BCA]">
                  Procesar Todos
                </Button>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Afiliado</TableHead>
                        <TableHead>Monto</TableHead>
                        <TableHead>Ventas</TableHead>
                        <TableHead>Período</TableHead>
                        <TableHead>Vencimiento</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingPayouts.map((payout) => (
                        <TableRow key={payout.id}>
                          <TableCell className="font-medium">{payout.affiliate}</TableCell>
                          <TableCell className="font-semibold text-green-600">${payout.amount}</TableCell>
                          <TableCell>{payout.sales} ventas</TableCell>
                          <TableCell>{payout.period}</TableCell>
                          <TableCell>{payout.dueDate}</TableCell>
                          <TableCell>
                            <Button size="sm" className="bg-[#3E64DE] hover:bg-[#395BCA]">
                              Pagar
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
