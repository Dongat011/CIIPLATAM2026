import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function FloatingMascot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      {/* Mascota flotante */}
      <div className="fixed bottom-8 right-8 z-40 animate-bounce-slow">
        <div
          className="relative cursor-pointer group"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Mascota con laptop y redes sociales */}
          <div className="w-40 h-40 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

            {/* Mascota principal con laptop */}
            <div className="relative w-full h-full bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center overflow-visible transform group-hover:scale-110 transition-transform duration-300 border-4 border-white/20">
              {/* Cuerpo de la mascota */}
              <div className="relative">
                {/* Cara */}
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-full mb-2 relative">
                  {/* Ojos */}
                  <div className="absolute top-6 left-3 flex gap-3">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                  {/* Sonrisa */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-8 h-4 border-b-2 border-gray-900 rounded-full"></div>
                </div>

                {/* Laptop con iconos de redes sociales */}
                <div className="relative -mt-4">
                  {/* Laptop screen */}
                  <div className="w-24 h-16 bg-gray-800 rounded-t-lg border-2 border-gray-700 p-1 shadow-xl">
                    {/* Pantalla con iconos de redes */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-sm flex items-center justify-center gap-1 p-1">
                      {/* Facebook icon */}
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        f
                      </div>
                      {/* Twitter/X icon */}
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        𝕏
                      </div>
                      {/* Instagram icon */}
                      <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        📷
                      </div>
                    </div>
                  </div>
                  {/* Laptop base */}
                  <div className="w-28 h-2 bg-gray-700 rounded-b-lg -mt-0.5"></div>
                </div>
              </div>
            </div>

            {/* Badge de notificación */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse border-2 border-white shadow-lg">
              !
            </div>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
              ¡Síguenos en redes! 👋
              <div className="absolute top-full right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel de ayuda */}
      {isOpen && (
        <div className="fixed bottom-48 right-8 z-40 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <Card className="w-80 border-2 border-[#3E64DE]/30 bg-white/95 backdrop-blur-xl shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">CIIF Bot</h3>
                    <p className="text-xs text-gray-600">Aquí para ayudarte</p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-700">
                  👋 ¡Hola! ¿En qué puedo ayudarte hoy?
                </p>

                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left text-sm hover:bg-[#3E64DE]/10 hover:border-[#3E64DE]"
                  >
                    📚 Ver programas disponibles
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left text-sm hover:bg-[#3E64DE]/10 hover:border-[#3E64DE]"
                  >
                    💎 Conocer membresías
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left text-sm hover:bg-[#3E64DE]/10 hover:border-[#3E64DE]"
                  >
                    📞 Hablar con asesor
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left text-sm hover:bg-[#3E64DE]/10 hover:border-[#3E64DE]"
                  >
                    🎁 Ver promociones
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
