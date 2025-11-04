"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft, CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

function ProductosContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Detectar parámetro de categoría en la URL
  useEffect(() => {
    const categoria = searchParams.get('categoria');
    if (categoria) {
      setSelectedCategory(categoria);
    }
  }, [searchParams]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const categories = [
    {
      id: "tuberia",
      name: "Tubería",
      description: "Tuberías en acero inoxidable ASTM A312, A554 y A270",
      icon: "🔧",
    },
    {
      id: "valvulas",
      name: "Válvulas",
      description: "Válvulas industriales de alta calidad",
      icon: "⚙️",
    },
    {
      id: "accesorios-roscar",
      name: "Accesorios Roscar",
      description: "Codos, tapones, niples, tees y más",
      icon: "🔩",
    },
    {
      id: "accesorios-soldar",
      name: "Accesorios Soldar",
      description: "Accesorios para soldadura industrial",
      icon: "🔥",
    },
    {
      id: "bridas",
      name: "Bridas",
      description: "Bridas en acero inoxidable",
      icon: "⭕",
    },
  ];

  const productos: Record<string, Array<{id: string, name: string, description: string, image: string, features: string[]}>> = {
    tuberia: [
      { id: "tuberia-a312", name: "Tubería ASTM A312", description: "Para alta presión y temperatura", image: "/images/productos/tuberia-a312.png", features: ["Alta presión y temperatura", "Norma ASTM A312"] },
      { id: "tuberia-a554", name: "Tubería ASTM A554", description: "Acabado mecánico y pulido", image: "/images/productos/tuberia-a554.png", features: ["Acabado mecánico pulido", "Uso estructural"] },
      { id: "tuberia-a270", name: "Tubería ASTM A270", description: "Tubería sanitaria", image: "/images/productos/tuberia-a270.png", features: ["Uso sanitario certificado", "Fácil limpieza"] },
    ],
    valvulas: [
      { id: "valvula-bola-2pc", name: "Válvula de Bola 2 Piezas", description: "Diseño robusto y durable", image: "/images/productos/valvula-bola-2pc.png", features: ["Diseño robusto 2 piezas", "Acero inoxidable 316"] },
      { id: "valvula-bola-4torn", name: "Válvula de Bola 4 Tornillos", description: "Mayor seguridad", image: "/images/productos/valvula-bola-4torn.png", features: ["Mayor seguridad", "Fácil mantenimiento"] },
      { id: "valvula-mariposa-clamp", name: "Válvula Mariposa Tipo Clamp", description: "Aplicación sanitaria", image: "/images/productos/valvula-mariposa-clamp.png", features: ["Tipo Clamp sanitaria", "Instalación rápida"] },
      { id: "valvula-mariposa-wafer", name: "Válvula Mariposa Tipo Wafer", description: "Diseño compacto", image: "/images/productos/valvula-mariposa-wafer.png", features: ["Diseño compacto", "Ahorro de espacio"] },
    ],
    "accesorios-roscar": [
      { id: "codo-90", name: "Codo 90°", description: "Para cambios de dirección", image: "/images/productos/codo-90.png", features: ["Ángulo 90° preciso", "Rosca NPT"] },
      { id: "cap-tapon", name: "Cap (Tapón)", description: "Cierre hermético", image: "/images/productos/cap-tapon.png", features: ["Cierre hermético", "Fácil instalación"] },
      { id: "niples", name: "Niples", description: "Extensión de tuberías", image: "/images/productos/niples.png", features: ["Múltiples longitudes", "Alta resistencia"] },
      { id: "tee", name: "Tee", description: "Conexión en T", image: "/images/productos/tee.png", features: ["Conexión en T", "Norma ASME"] },
      { id: "union", name: "Unión", description: "Unión desmontable", image: "/images/productos/union.png", features: ["Desmontable", "Reutilizable"] },
      { id: "union-universal", name: "Unión Universal", description: "Conexión flexible", image: "/images/productos/union-universal.jpg", features: ["Conexión giratoria", "Absorbe desalineación"] },
    ],
    "accesorios-soldar": [
      { id: "codo-soldar-90-45", name: "Codo 90° y 45°", description: "Para soldar", image: "/images/productos/codo-soldar-90-45.png", features: ["Ángulos 90° y 45°", "Soldadura a tope"] },
      { id: "cap-soldar", name: "Cap (Tapón) Soldar", description: "Conexión permanente", image: "/images/productos/cap-soldar.png", features: ["Conexión permanente", "Cierre hermético"] },
      { id: "reduccion-concentrica", name: "Reducción Concéntrica", description: "Cambio de diámetro", image: "/images/productos/reduccion-concentrica.png", features: ["Cambio de diámetro", "Eje centrado"] },
      { id: "tee-soldar", name: "Tee Soldar", description: "Conexión en T permanente", image: "/images/productos/tee-soldar.png", features: ["Conexión en T", "Alta durabilidad"] },
    ],
    bridas: [
      { id: "bridas-slip-on", name: "Bridas Slip-On", description: "Fácil instalación", image: "/images/producto3.png", features: ["Fácil instalación", "Económicas"] },
      { id: "bridas-welding-neck", name: "Bridas Welding Neck", description: "Alta resistencia", image: "/images/producto1.png", features: ["Alta resistencia", "Cuello reforzado"] },
      { id: "bridas-blind", name: "Bridas Ciegas", description: "Cierre de sistemas", image: "/images/producto2.png", features: ["Cierre de sistemas", "Fácil inspección"] },
    ],
  };

  // Vista de Categorías
  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nuestros Productos
              </h1>
              <p className="text-xl text-gray-300">
                Selecciona una categoría para ver los productos disponibles
              </p>
            </div>
          </div>
        </section>

        {/* Categorías Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-500 text-left group"
                >
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="inline-flex items-center text-red-600 font-semibold">
                    Ver productos
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Necesitas asesoría personalizada?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Nuestro equipo técnico está listo para ayudarte a encontrar el producto perfecto
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contactar Ahora
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Vista de Productos de una Categoría
  const categoryData = categories.find(c => c.id === selectedCategory);
  const categoryProducts = productos[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section con botón de regreso */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center gap-2 text-white hover:text-red-400 transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver a categorías
          </button>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {categoryData?.name}
            </h1>
            <p className="text-xl text-gray-300">
              {categoryData?.description}
            </p>
          </div>
        </div>
      </section>

      {/* Carrusel de Categorías */}
      <section className="py-8 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative px-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex-[0_0_auto] min-w-0 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="whitespace-nowrap">{category.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 shadow-xl transition-all z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 shadow-xl transition-all z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Product Cards con Imágenes */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Productos Disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((producto) => (
              <Link
                key={producto.id}
                href={`/productos/${producto.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-500 overflow-hidden"
              >
                {/* Imagen del Producto */}
                <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                  <Image
                    src={producto.image}
                    alt={producto.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Información del Producto */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    {producto.name}
                  </h3>

                  {/* Características con iconos de check */}
                  <div className="space-y-3 mb-5">
                    {producto.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-red-600 font-semibold">
                    Ver detalles
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas más información?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Solicita una cotización personalizada para tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Solicitar Cotización
            </Link>
            <a
              href="https://wa.me/573224032578?text=Hola,%20estoy%20interesado%20en%20uno%20de%20sus%20productos,%20necesito%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProductosPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-xl">Cargando productos...</div></div>}>
      <ProductosContent />
    </Suspense>
  );
}
