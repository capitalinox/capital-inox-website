"use client";

import Link from "next/link";
import { Target, Eye, Award, Shield, Users, TrendingUp, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function NosotrosPage() {
  const valores = [
    {
      icon: Award,
      title: "Calidad",
      description: "Productos certificados con los más altos estándares internacionales",
    },
    {
      icon: Shield,
      title: "Integridad",
      description: "Transparencia y honestidad en todas nuestras relaciones comerciales",
    },
    {
      icon: Users,
      title: "Compromiso",
      description: "Dedicados a la satisfacción total de nuestros clientes",
    },
    {
      icon: TrendingUp,
      title: "Mejora Continua",
      description: "Innovación constante en procesos y servicios",
    },
  ];

  const stats = [
    { number: "10+", label: "Años de experiencia" },
    { number: "500+", label: "Clientes satisfechos" },
    { number: "1000+", label: "Productos disponibles" },
    { number: "100%", label: "Calidad garantizada" },
  ];

  const images = [
    { src: "/images/nosotros1.png", alt: "Productos Capital Inox 1" },
    { src: "/images/nosotros2.png", alt: "Productos Capital Inox 2" },
    { src: "/images/nosotros3.png", alt: "Productos Capital Inox 3" },
    { src: "/images/producto1.png", alt: "Productos Capital Inox 4" },
    { src: "/images/producto2.png", alt: "Productos Capital Inox 5" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Capital Inox
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Especialistas en suministros industriales de acero inoxidable,
              comprometidos con la excelencia y la satisfacción de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Quienes Somos */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Quiénes Somos?
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Somos una empresa especializada en la distribución y comercialización
                  de suministros industriales en acero inoxidable de la más alta calidad.
                  Estamos ubicados en <strong>Bogotá</strong>.
                </p>
                <p>
                  Contamos con un equipo de profesionales altamente capacitados,
                  enfocados en brindar asesoría técnica especializada y soluciones
                  personalizadas que optimizan los procesos y resultados de cada cliente.
                  Trabajamos con los mejores proveedores, garantizando productos duraderos,
                  resistentes a la corrosión y con las certificaciones que respaldan su calidad.
                </p>
                <p>
                  En Capitalinox, entendemos que la eficiencia y la confianza son clave
                  en las operaciones industriales. Por eso, ofrecemos entregas rápidas y
                  un servicio cercano y personalizado, adaptado a las necesidades
                  específicas de cada proyecto.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel de Imágenes */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Productos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Amplio catálogo de productos en acero inoxidable de alta calidad
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex gap-4">
                {images.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0">
                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-100 rounded-full p-4">
                  <Target className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Nuestra Misión</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Impulsar el crecimiento de nuestros clientes, de la industria, con
                suministros de acero inoxidable de alta calidad, respaldados por un
                servicio excepcional y asesoría técnica experta.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-100 rounded-full p-4">
                  <Eye className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Nuestra Visión</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ser referente en la industria Colombiana en la distribución de suministros
                en acero inoxidable, reconocida por su calidad, innovación, compromiso
                con la excelencia y capacidad para generar relaciones de confianza a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada una de nuestras acciones y decisiones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-red-50 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-red-500"
                >
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {valor.title}
                  </h3>
                  <p className="text-gray-600">{valor.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 font-semibold">
              Responsabilidad en cada uno de nuestros procesos y relaciones comerciales
            </p>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Somos su aliado estratégico en acero inoxidable en Bogotá y toda Colombia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">Asesoría Técnica Personalizada</h3>
              <p className="text-gray-300">
                Equipo de ingenieros especializados que garantizan la solución exacta
                para cada proyecto industrial.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">Calidad Certificada</h3>
              <p className="text-gray-300">
                Productos con certificaciones y estándares internacionales que respaldan
                su durabilidad y resistencia.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">Entregas Rápidas</h3>
              <p className="text-gray-300">
                Stock permanente y logística eficiente para atender sus necesidades
                en toda Colombia.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contacto"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Solicitar Asesoría
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
