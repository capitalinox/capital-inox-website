import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Truck, Award, Users, ArrowRight, Phone, MessageCircle, BookOpen } from "lucide-react";
import ProductCarousel from "@/components/ProductCarousel";

export default function HomePage() {
  const features = [
    {
      icon: Users,
      title: "Asesoría Experta",
      description: "Equipo técnico especializado a su servicio",
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Logística eficiente en toda Colombia",
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Productos certificados con estándares internacionales",
    },
    {
      icon: CheckCircle,
      title: "Experiencia",
      description: "Cumplimos lo que prometemos",
    },
  ];

  const productos = [
    {
      nombre: "Tubería",
      descripcion: "Tuberías de acero inoxidable para uso industrial",
      href: "/productos#tuberia",
    },
    {
      nombre: "Válvulas",
      descripcion: "Válvulas industriales de alta calidad",
      href: "/productos#valvulas",
    },
    {
      nombre: "Accesorios Roscar",
      descripcion: "Codos, tapones, niples, tees y más",
      href: "/productos#accesorios-roscar",
    },
    {
      nombre: "Accesorios Soldar",
      descripcion: "Accesorios para soldadura industrial",
      href: "/productos#accesorios-soldar",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="Productos de Acero Inoxidable"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/70"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Suministros de{" "}
              <span className="text-red-500">Acero Inoxidable</span> de Alta
              Calidad
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Especialistas en tubería, accesorios y válvulas de acero
              inoxidable para soluciones industriales. Equipo de ingenieros
              brindando asesoría técnica especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/productos"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Ver Catálogo Completo
              </Link>
              <a
                href="https://wa.me/573224032578?text=Hola,%20estoy%20interesado%20en%20uno%20de%20sus%20productos,%20necesito%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#25D366',
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Banner */}
      <section className="bg-red-600 text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              ¡Despachamos nuestros productos a nivel nacional!
            </h2>
            <p className="text-lg text-red-100">
              Entrega rápida y segura en toda Colombia
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Text + Stats Cards */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Sobre Capital Inox
              </h2>
              <p className="text-base text-gray-600 mb-4 leading-relaxed">
                Somos una empresa Colombiana dedicada a la distribución y comercialización
                de suministros industriales de alta calidad en acero inoxidable.
              </p>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Brindamos asesoría técnica personalizada para garantizar soluciones
                eficientes y seguras. Combinamos experiencia y compromiso para ofrecer
                productos duraderos y entregas rápidas.
              </p>
              <Link
                href="/nosotros"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 mb-8"
              >
                Conocer más sobre nosotros
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-red-600 mb-1">10+</div>
                  <div className="text-sm text-gray-600">Años de experiencia</div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-red-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Clientes satisfechos</div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-red-600 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">Productos disponibles</div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-red-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Soporte técnico</div>
                </div>
              </div>
            </div>

            {/* Right Column: Carousel */}
            <div className="order-1 lg:order-2">
              <ProductCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nuestros Productos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Amplio catálogo de productos en acero inoxidable con certificaciones
              y estándares internacionales
            </p>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/productos"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Ver Catálogo Completo
              </Link>
              <a
                href="https://wa.me/573224032578?text=Hola,%20estoy%20interesado%20en%20uno%20de%20sus%20productos,%20necesito%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#25D366',
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {productos.map((producto) => (
              <Link
                key={producto.nombre}
                href={producto.href}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-red-50 hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-red-500"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 mb-4">{producto.descripcion}</p>
                <span className="inline-flex items-center text-red-600 font-medium">
                  Ver más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesita asesoría técnica especializada?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarle a encontrar la
              solución perfecta para su proyecto
            </p>
          </div>

          {/* Netlify Form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            {/* Hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                  placeholder="Mi Empresa S.A.S"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                  placeholder="correo@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                  placeholder="+57 300 123 4567"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                placeholder="Cuéntenos sobre su proyecto o necesidades..."
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Enviar Consulta
              </button>
              <a
                href="https://wa.me/573224032578?text=Hola,%20estoy%20interesado%20en%20uno%20de%20sus%20productos,%20necesito%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                style={{
                  backgroundColor: '#25D366',
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Directo
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
