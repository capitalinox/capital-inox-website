"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productosOpen, setProductosOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Productos", href: "/productos" },
    { name: "Contacto", href: "/contacto" },
  ];

  const categorias = [
    { id: "tuberia", name: "Tubería", icon: "🔧" },
    { id: "valvulas", name: "Válvulas", icon: "⚙️" },
    { id: "accesorios-roscar", name: "Accesorios Roscar", icon: "🔩" },
    { id: "accesorios-soldar", name: "Accesorios Soldar", icon: "🔥" },
    { id: "bridas", name: "Bridas", icon: "⭕" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 md:h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Capital Inox"
              width={180}
              height={72}
              className="h-12 w-auto md:h-14 md:w-auto"
              priority
            />
          </Link>

          {/* Spacer to push content to the right */}
          <div className="flex-1"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 md:mr-8">
            {navigation.map((item) => {
              // Productos con dropdown
              if (item.name === "Productos") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setProductosOpen(true)}
                    onMouseLeave={() => setProductosOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 text-lg py-2"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productosOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    {/* Dropdown Menu con padding-top invisible para cerrar el gap */}
                    {productosOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3">
                          {categorias.map((categoria) => (
                            <Link
                              key={categoria.id}
                              href={`/productos?categoria=${categoria.id}`}
                              className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                            >
                              <span className="text-2xl">{categoria.icon}</span>
                              <span className="font-medium">{categoria.name}</span>
                            </Link>
                          ))}
                          <div className="border-t border-gray-100 mt-2 pt-2">
                            <Link
                              href="/productos"
                              className="flex items-center justify-center px-5 py-2 text-red-600 hover:bg-red-50 font-semibold transition-colors"
                            >
                              Ver Todas las Categorías
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Resto de items normales
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 text-lg"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/contacto"
              className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Cotizar
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => {
                // Productos con submenu en móvil
                if (item.name === "Productos") {
                  return (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between text-gray-700 hover:text-red-600 font-medium text-lg py-2 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                        {categorias.map((categoria) => (
                          <Link
                            key={categoria.id}
                            href={`/productos?categoria=${categoria.id}`}
                            className="flex items-center gap-2 text-gray-600 hover:text-red-600 py-2 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="text-xl">{categoria.icon}</span>
                            <span>{categoria.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 font-medium text-lg py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/contacto"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cotizar
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
