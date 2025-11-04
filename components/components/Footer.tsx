import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Descripción */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Capital Inox</h3>
            <p className="text-sm text-gray-400 max-w-md">
              Especialistas en suministros industriales de acero inoxidable.
              Calidad garantizada, entrega rápida y asesoría técnica experta.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-red-500 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-red-500 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-red-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Bogotá, Colombia</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+573224032578" className="text-sm hover:text-red-400 transition-colors">
                  +57 322 403 2578
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:ventas@capitalinox.com" className="text-sm hover:text-red-400 transition-colors">
                  ventas@capitalinox.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Capital Inox. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
