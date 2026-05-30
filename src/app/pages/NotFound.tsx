import { Link } from "react-router";
import { Home, Search } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#3E64DE] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Página no encontrada
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-[#3E64DE] hover:bg-[#395BCA]">
              <Home className="w-5 h-5 mr-2" />
              Volver al inicio
            </Button>
          </Link>
          <Button variant="outline">
            <Search className="w-5 h-5 mr-2" />
            Buscar cursos
          </Button>
        </div>
      </div>
    </div>
  );
}
