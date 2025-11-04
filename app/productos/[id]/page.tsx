"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Package, Wrench, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const productos: Record<string, {
  id: string;
  name: string;
  categoria: string;
  description: string;
  detailedDescription: string;
  images: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  variants?: { name: string; sku: string }[];
}> = {
  "tuberia-a312": {
    id: "tuberia-a312",
    name: "Tubería ASTM A312",
    categoria: "tuberia",
    description: "Tubería de acero inoxidable para alta presión y temperatura",
    detailedDescription: "La tubería ASTM A312 es fabricada en acero inoxidable austenítico, ideal para aplicaciones que requieren resistencia a altas presiones y temperaturas. Cumple con los más altos estándares de calidad y es ampliamente utilizada en industrias químicas, petroquímicas y de procesamiento de alimentos.",
    images: ["/images/productos/tuberia-a312.png"],
    features: ["Resistencia a alta presión y temperatura", "Norma ASTM A312", "Acero inoxidable austenítico", "Excelente resistencia a la corrosión"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 304/316" },
      { label: "Norma", value: "ASTM A312" },
      { label: "Diámetros", value: "1/2\" - 12\"" },
      { label: "Temperatura", value: "Hasta 870°C" }
    ],
    applications: ["Industria química", "Procesamiento de alimentos", "Sistemas de vapor", "Aplicaciones petroquímicas"],
    variants: [
      { name: "Tubería 1/2\" Schedule 10S", sku: "A312-1/2-10S" },
      { name: "Tubería 3/4\" Schedule 10S", sku: "A312-3/4-10S" },
      { name: "Tubería 1\" Schedule 40S", sku: "A312-1-40S" },
      { name: "Tubería 2\" Schedule 40S", sku: "A312-2-40S" },
      { name: "Tubería 3\" Schedule 40S", sku: "A312-3-40S" },
      { name: "Tubería 4\" Schedule 40S", sku: "A312-4-40S" }
    ]
  },
  "tuberia-a554": {
    id: "tuberia-a554",
    name: "Tubería ASTM A554",
    categoria: "tuberia",
    description: "Tubería con acabado mecánico pulido para uso estructural",
    detailedDescription: "Tubería de acero inoxidable con acabado mecánico pulido según norma ASTM A554. Perfecta para aplicaciones arquitectónicas y estructurales donde se requiere un acabado estético superior. Su superficie pulida facilita la limpieza y proporciona una apariencia moderna y profesional.",
    images: ["/images/productos/tuberia-a554.png"],
    features: ["Acabado mecánico pulido", "Uso estructural y decorativo", "Fácil limpieza", "Apariencia estética superior"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 304/316" },
      { label: "Norma", value: "ASTM A554" },
      { label: "Acabado", value: "Pulido mecánico" },
      { label: "Forma", value: "Redonda, cuadrada, rectangular" }
    ],
    applications: ["Barandas y pasamanos", "Estructuras arquitectónicas", "Mobiliario urbano", "Decoración interior"],
    variants: [
      { name: "Tubería Redonda 1\" pulida", sku: "A554-R-1" },
      { name: "Tubería Redonda 1.5\" pulida", sku: "A554-R-1.5" },
      { name: "Tubería Cuadrada 1\" pulida", sku: "A554-C-1" },
      { name: "Tubería Rectangular 1\"x2\" pulida", sku: "A554-RT-1x2" }
    ]
  },
  "tuberia-a270": {
    id: "tuberia-a270",
    name: "Tubería ASTM A270",
    categoria: "tuberia",
    description: "Tubería sanitaria certificada para industria alimenticia",
    detailedDescription: "Tubería de acero inoxidable sanitaria fabricada bajo norma ASTM A270. Diseñada específicamente para aplicaciones sanitarias en la industria alimenticia, farmacéutica y de bebidas. Su superficie interior ultra lisa evita la acumulación de bacterias y facilita los procesos de limpieza CIP.",
    images: ["/images/productos/tuberia-a270.png"],
    features: ["Certificación sanitaria", "Superficie interior ultra lisa", "Fácil limpieza CIP", "Libre de contaminación"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 316L" },
      { label: "Norma", value: "ASTM A270" },
      { label: "Acabado", value: "Sanitario pulido" },
      { label: "Rugosidad", value: "Ra ≤ 0.8 μm" }
    ],
    applications: ["Industria láctea", "Procesamiento de bebidas", "Industria farmacéutica", "Biotecnología"],
    variants: [
      { name: "Tubería Sanitaria 1\" 316L", sku: "A270-1-316L" },
      { name: "Tubería Sanitaria 1.5\" 316L", sku: "A270-1.5-316L" },
      { name: "Tubería Sanitaria 2\" 316L", sku: "A270-2-316L" },
      { name: "Tubería Sanitaria 3\" 316L", sku: "A270-3-316L" }
    ]
  },
  "valvula-bola-2pc": {
    id: "valvula-bola-2pc",
    name: "Válvula de Bola 2 Piezas",
    categoria: "valvulas",
    description: "Válvula de bola en dos piezas con diseño robusto",
    detailedDescription: "Válvula de bola de dos piezas fabricada en acero inoxidable 316. Su diseño robusto y confiable la hace ideal para aplicaciones industriales que requieren control de flujo on-off. Fácil mantenimiento y larga vida útil.",
    images: ["/images/productos/valvula-bola-2pc.png"],
    features: ["Diseño robusto de 2 piezas", "Acero inoxidable 316", "Operación manual o neumática", "Bajo torque de operación"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 316" },
      { label: "Presión", value: "1000 PSI" },
      { label: "Conexión", value: "Roscada NPT" },
      { label: "Temperatura", value: "-20°C a 180°C" }
    ],
    applications: ["Control de flujo industrial", "Sistemas de agua", "Líneas de proceso", "Industria química"],
    variants: [
      { name: "Válvula 1/2\" NPT 1000 PSI", sku: "VB2PC-1/2-1000" },
      { name: "Válvula 3/4\" NPT 1000 PSI", sku: "VB2PC-3/4-1000" },
      { name: "Válvula 1\" NPT 1000 PSI", sku: "VB2PC-1-1000" },
      { name: "Válvula 2\" NPT 1000 PSI", sku: "VB2PC-2-1000" }
    ]
  },
  "valvula-bola-4torn": {
    id: "valvula-bola-4torn",
    name: "Válvula de Bola 4 Tornillos",
    categoria: "valvulas",
    description: "Válvula de bola con sistema de 4 tornillos para mayor seguridad",
    detailedDescription: "Válvula de bola con cuerpo de 4 tornillos que proporciona mayor seguridad y hermeticidad. Su diseño permite fácil mantenimiento sin necesidad de desmontar la válvula de la línea. Ideal para aplicaciones críticas.",
    images: ["/images/productos/valvula-bola-4torn.png"],
    features: ["Sistema de 4 tornillos", "Mayor seguridad y hermeticidad", "Fácil mantenimiento in-situ", "Diseño modular"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 316" },
      { label: "Presión", value: "1500 PSI" },
      { label: "Conexión", value: "Bridada" },
      { label: "Certificación", value: "ISO 5211" }
    ],
    applications: ["Industria petroquímica", "Sistemas críticos", "Alta presión", "Mantenimiento preventivo"]
  },
  "valvula-mariposa-clamp": {
    id: "valvula-mariposa-clamp",
    name: "Válvula Mariposa Tipo Clamp",
    categoria: "valvulas",
    description: "Válvula mariposa sanitaria con conexión tipo clamp",
    detailedDescription: "Válvula mariposa sanitaria con conexión tipo clamp (abrazadera) ideal para la industria alimenticia y farmacéutica. Su diseño higiénico y fácil desmontaje facilita los procesos de limpieza y mantenimiento.",
    images: ["/images/productos/valvula-mariposa-clamp.png"],
    features: ["Conexión tipo clamp sanitaria", "Instalación y desmontaje rápido", "Diseño higiénico", "Cumple normas 3-A"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 316L" },
      { label: "Conexión", value: "Clamp (Tri-clamp)" },
      { label: "Norma", value: "3-A Sanitary" },
      { label: "Sellado", value: "EPDM / Viton" }
    ],
    applications: ["Industria láctea", "Cervecerías", "Procesamiento de alimentos", "Farmacéutica"],
    variants: [
      { name: "Válvula Mariposa 1.5\" Tri-Clamp", sku: "VMC-1.5-TC" },
      { name: "Válvula Mariposa 2\" Tri-Clamp", sku: "VMC-2-TC" },
      { name: "Válvula Mariposa 3\" Tri-Clamp", sku: "VMC-3-TC" },
      { name: "Válvula Mariposa 4\" Tri-Clamp", sku: "VMC-4-TC" }
    ]
  },
  "valvula-mariposa-wafer": {
    id: "valvula-mariposa-wafer",
    name: "Válvula Mariposa Tipo Wafer",
    categoria: "valvulas",
    description: "Válvula mariposa compacta tipo wafer",
    detailedDescription: "Válvula mariposa tipo wafer con diseño ultra compacto que se instala entre bridas. Ahorra espacio y peso en la instalación. Excelente para aplicaciones de control de flujo en espacios reducidos.",
    images: ["/images/productos/valvula-mariposa-wafer.png"],
    features: ["Diseño compacto tipo wafer", "Ahorro de espacio significativo", "Peso ligero", "Instalación entre bridas"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 316" },
      { label: "Norma", value: "API 609" },
      { label: "Presión", value: "Class 150" },
      { label: "Tipo", value: "Wafer / Lug" }
    ],
    applications: ["Sistemas HVAC", "Agua y efluentes", "Industria general", "Espacios reducidos"]
  },
  "codo-90": {
    id: "codo-90",
    name: "Codo 90°",
    categoria: "accesorios-roscar",
    description: "Codo de 90° con rosca NPT para cambios de dirección",
    detailedDescription: "Accesorio codo de 90 grados con rosca NPT fabricado en acero inoxidable. Permite cambios precisos de dirección en instalaciones de tuberías. Ángulo exacto de 90° garantizado.",
    images: ["/images/productos/codo-90.png"],
    features: ["Ángulo 90° preciso", "Rosca NPT estándar", "Acero inoxidable 316", "Resistente a la corrosión"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 316" },
      { label: "Conexión", value: "Rosca NPT" },
      { label: "Clase", value: "150#, 300#" },
      { label: "Tamaños", value: "1/4\" - 4\"" }
    ],
    applications: ["Cambios de dirección", "Instalaciones industriales", "Sistemas de tuberías", "Conexiones"],
    variants: [
      { name: "Codo 90° 1/4\" NPT 150#", sku: "C90-1/4-150" },
      { name: "Codo 90° 1/2\" NPT 150#", sku: "C90-1/2-150" },
      { name: "Codo 90° 3/4\" NPT 150#", sku: "C90-3/4-150" },
      { name: "Codo 90° 1\" NPT 150#", sku: "C90-1-150" },
      { name: "Codo 90° 2\" NPT 150#", sku: "C90-2-150" }
    ]
  },
  "cap-tapon": {
    id: "cap-tapon",
    name: "Cap (Tapón)",
    categoria: "accesorios-roscar",
    description: "Tapón roscado para cierre hermético de tuberías",
    detailedDescription: "Tapón (cap) con rosca NPT para cierre hermético de extremos de tubería. Fabricado en acero inoxidable, proporciona un sellado confiable y permanente. Fácil instalación con herramientas estándar.",
    images: ["/images/productos/cap-tapon.png"],
    features: ["Cierre hermético garantizado", "Fácil instalación", "Rosca NPT", "Acero inoxidable resistente"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 316" },
      { label: "Conexión", value: "Rosca NPT" },
      { label: "Clase", value: "150#, 300#" },
      { label: "Tamaños", value: "1/8\" - 4\"" }
    ],
    applications: ["Cierre de líneas", "Terminaciones", "Mantenimiento", "Pruebas hidrostáticas"]
  },
  "niples": {
    id: "niples",
    name: "Niples",
    categoria: "accesorios-roscar",
    description: "Niples roscados para extensión de tuberías",
    detailedDescription: "Niples roscados en acero inoxidable disponibles en múltiples longitudes. Permiten extensiones y conexiones entre accesorios. Fabricados con precisión para garantizar sellado perfecto.",
    images: ["/images/productos/niples.png"],
    features: ["Múltiples longitudes disponibles", "Alta resistencia", "Rosca precisa", "Acero inoxidable 316"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 316" },
      { label: "Conexión", value: "Rosca NPT" },
      { label: "Longitudes", value: "1\" - 12\"" },
      { label: "Tipos", value: "Corto, largo, barril" }
    ],
    applications: ["Extensiones", "Conexiones entre accesorios", "Ajuste de longitudes", "Reparaciones"]
  },
  "tee": {
    id: "tee",
    name: "Tee",
    categoria: "accesorios-roscar",
    description: "Conexión en T para derivaciones de tubería",
    detailedDescription: "Accesorio Tee (T) con rosca NPT para crear derivaciones en 90° en sistemas de tuberías. Fabricado según norma ASME en acero inoxidable 316. Permite ramificaciones precisas y confiables.",
    images: ["/images/productos/tee.png"],
    features: ["Conexión en T perfecta", "Norma ASME", "Tres salidas roscadas", "Acero inoxidable 316"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 316" },
      { label: "Conexión", value: "Rosca NPT" },
      { label: "Norma", value: "ASME B16.11" },
      { label: "Clase", value: "150#, 300#" }
    ],
    applications: ["Derivaciones", "Ramificaciones", "Distribución de fluidos", "Tomas auxiliares"]
  },
  "union": {
    id: "union",
    name: "Unión",
    categoria: "accesorios-roscar",
    description: "Unión desmontable para mantenimiento",
    detailedDescription: "Unión roscada desmontable que permite separar secciones de tubería sin necesidad de cortar. Ideal para facilitar mantenimiento y reparaciones. Diseño reutilizable y confiable.",
    images: ["/images/productos/union.png"],
    features: ["Desmontable sin herramientas especiales", "Reutilizable", "Sellado con O-ring", "Ahorro en mantenimiento"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 316" },
      { label: "Conexión", value: "Rosca NPT" },
      { label: "Sellado", value: "O-ring PTFE" },
      { label: "Tamaños", value: "1/4\" - 4\"" }
    ],
    applications: ["Puntos de mantenimiento", "Conexiones desmontables", "Facilita reparaciones", "Inspecciones"]
  },
  "union-universal": {
    id: "union-universal",
    name: "Unión Universal",
    categoria: "accesorios-roscar",
    description: "Unión universal con conexión flexible y giratoria",
    detailedDescription: "Unión universal que permite conexión flexible entre tuberías con ligera desalineación. Su diseño giratorio facilita el montaje y absorbe vibraciones. Ideal para equipos rotativos.",
    images: ["/images/productos/union-universal.jpg"],
    features: ["Conexión giratoria 360°", "Absorbe desalineación", "Compensa vibraciones", "Facilita montaje"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 316" },
      { label: "Conexión", value: "Rosca NPT" },
      { label: "Rango angular", value: "±5°" },
      { label: "Presión", value: "1000 PSI" }
    ],
    applications: ["Conexión a equipos", "Compensación de movimientos", "Bombas y motores", "Reducción de vibraciones"]
  },
  "codo-soldar-90-45": {
    id: "codo-soldar-90-45",
    name: "Codo 90° y 45°",
    categoria: "accesorios-soldar",
    description: "Codos para soldar en ángulos de 90° y 45°",
    detailedDescription: "Codos para soldadura a tope en ángulos de 90° y 45° fabricados según norma ASME B16.9. Disponibles en radio largo y corto. Ideales para instalaciones permanentes de alta presión.",
    images: ["/images/productos/codo-soldar-90-45.png"],
    features: ["Ángulos 90° y 45°", "Soldadura a tope", "Radio largo y corto", "Norma ASME B16.9"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 304/316" },
      { label: "Norma", value: "ASME B16.9" },
      { label: "Tipo", value: "Butt weld" },
      { label: "Schedule", value: "10S, 40S, 80S" }
    ],
    applications: ["Instalaciones permanentes", "Alta presión", "Plantas industriales", "Sistemas críticos"]
  },
  "cap-soldar": {
    id: "cap-soldar",
    name: "Cap (Tapón) Soldar",
    categoria: "accesorios-soldar",
    description: "Tapón para soldar y cierre permanente",
    detailedDescription: "Tapón (cap) para soldadura que proporciona un cierre permanente y hermético. Fabricado para soldadura a tope según normas ASME. Ideal para terminaciones definitivas de líneas.",
    images: ["/images/productos/cap-soldar.png"],
    features: ["Conexión permanente", "Cierre hermético soldado", "Soldadura a tope", "Alta integridad"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 304/316" },
      { label: "Norma", value: "ASME B16.9" },
      { label: "Tipo", value: "Butt weld" },
      { label: "Tamaños", value: "1/2\" - 24\"" }
    ],
    applications: ["Cierre definitivo", "Terminaciones", "Sistemas de alta presión", "Sellado permanente"]
  },
  "reduccion-concentrica": {
    id: "reduccion-concentrica",
    name: "Reducción Concéntrica",
    categoria: "accesorios-soldar",
    description: "Reducción concéntrica para cambio de diámetro",
    detailedDescription: "Reducción concéntrica para soldadura que permite cambio de diámetro manteniendo el eje central. Transición suave que minimiza turbulencias y pérdidas de carga. Fabricada según ASME B16.9.",
    images: ["/images/productos/reduccion-concentrica.png"],
    features: ["Cambio de diámetro gradual", "Eje central alineado", "Transición suave", "Mínima pérdida de carga"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 304/316" },
      { label: "Norma", value: "ASME B16.9" },
      { label: "Tipo", value: "Concéntrica" },
      { label: "Reducciones", value: "Todas las combinaciones" }
    ],
    applications: ["Cambio de diámetros", "Optimización de flujo", "Conexión equipos", "Reducción de velocidad"]
  },
  "tee-soldar": {
    id: "tee-soldar",
    name: "Tee Soldar",
    categoria: "accesorios-soldar",
    description: "Conexión en T para soldar y derivación permanente",
    detailedDescription: "Tee para soldadura a tope que permite crear derivaciones permanentes en 90°. Fabricada según norma ASME B16.9 con alta durabilidad. Ideal para instalaciones industriales de larga vida útil.",
    images: ["/images/productos/tee-soldar.png"],
    features: ["Conexión en T soldada", "Alta durabilidad", "Sin fugas", "Norma ASME B16.9"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 304/316" },
      { label: "Norma", value: "ASME B16.9" },
      { label: "Tipo", value: "Butt weld" },
      { label: "Configuración", value: "Equal / Reducing" }
    ],
    applications: ["Derivaciones permanentes", "Ramificaciones", "Distribución", "Plantas industriales"]
  },
  "bridas-slip-on": {
    id: "bridas-slip-on",
    name: "Bridas Slip-On",
    categoria: "bridas",
    description: "Bridas deslizantes de fácil instalación",
    detailedDescription: "Bridas tipo Slip-On que se deslizan sobre la tubería y se sueldan. Económicas y fáciles de instalar, son ideales para aplicaciones de baja a media presión. Cumplen con estándares ANSI.",
    images: ["/images/producto3.png"],
    features: ["Fácil instalación", "Económicas", "Deslizamiento sobre tubería", "Norma ANSI B16.5"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 304/316" },
      { label: "Norma", value: "ANSI B16.5" },
      { label: "Clase", value: "150#, 300#" },
      { label: "Tipo", value: "Slip-On" }
    ],
    applications: ["Sistemas de baja presión", "Instalaciones económicas", "Agua y vapor", "Aplicaciones generales"]
  },
  "bridas-welding-neck": {
    id: "bridas-welding-neck",
    name: "Bridas Welding Neck",
    categoria: "bridas",
    description: "Bridas con cuello para alta resistencia",
    detailedDescription: "Bridas Welding Neck con cuello largo reforzado que proporciona la mayor resistencia a presión y fatiga. Ideal para aplicaciones críticas de alta presión y temperatura. El cuello cónico distribuye las tensiones uniformemente.",
    images: ["/images/producto1.png"],
    features: ["Alta resistencia mecánica", "Cuello reforzado", "Máxima presión", "Menor concentración de esfuerzos"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 304/316" },
      { label: "Norma", value: "ANSI B16.5" },
      { label: "Clase", value: "150# - 2500#" },
      { label: "Tipo", value: "Welding Neck" }
    ],
    applications: ["Alta presión y temperatura", "Sistemas críticos", "Petroquímica", "Plantas de proceso"]
  },
  "bridas-blind": {
    id: "bridas-blind",
    name: "Bridas Ciegas",
    categoria: "bridas",
    description: "Bridas ciegas para cierre y aislamiento de sistemas",
    detailedDescription: "Bridas ciegas (blind flanges) sin perforación central, utilizadas para cerrar extremos de tuberías o para aislar secciones de sistemas. Facilitan inspecciones y mantenimiento. Diseño robusto que soporta presión completa del sistema.",
    images: ["/images/producto2.png"],
    features: ["Cierre hermético de sistemas", "Facilita inspección", "Aislamiento de secciones", "Diseño sin perforación"],
    specifications: [
      { label: "Material", value: "Acero Inoxidable 304/316" },
      { label: "Norma", value: "ANSI B16.5" },
      { label: "Clase", value: "150# - 2500#" },
      { label: "Tipo", value: "Blind" }
    ],
    applications: ["Cierre de líneas", "Puntos de inspección", "Aislamiento temporal", "Pruebas hidrostáticas"]
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  const producto = productos[productId];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(producto?.variants?.[0]);
  const [variantMenuOpen, setVariantMenuOpen] = useState(false);

  if (!producto) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Producto no encontrado
          </h1>
          <Link
            href="/productos"
            className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver a Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Section */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </button>
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-red-600">Inicio</Link>
            {" / "}
            <Link href="/productos" className="hover:text-red-600">Productos</Link>
            {" / "}
            <span className="text-gray-900">{producto.name}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              {/* Main Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={producto.images[currentImageIndex]}
                  alt={producto.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Image Thumbnails (si hay más de una imagen) */}
              {producto.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {producto.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
                        currentImageIndex === index
                          ? 'border-red-500 ring-2 ring-red-500 ring-offset-2'
                          : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-300'
                      } transition-all`}
                    >
                      <Image
                        src={image}
                        alt={`${producto.name} - Vista ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="25vw"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Product Info Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {producto.name}
              </h1>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                {producto.description}
              </p>
              <p className="text-base text-gray-700 mb-8 leading-relaxed border-l-4 border-red-500 pl-4 bg-red-50 py-3">
                {producto.detailedDescription}
              </p>

              {/* Variant Selector (si hay variantes) */}
              {producto.variants && producto.variants.length > 0 && (
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Seleccionar Referencia:
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setVariantMenuOpen(!variantMenuOpen)}
                      className="w-full flex items-center justify-between bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-left hover:border-red-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all"
                    >
                      <span className="font-medium text-gray-900">
                        {selectedVariant?.name || producto.variants[0].name}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          variantMenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {variantMenuOpen && (
                      <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                        {producto.variants.map((variant, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedVariant(variant);
                              setVariantMenuOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 hover:bg-red-50 transition-colors ${
                              selectedVariant?.sku === variant.sku
                                ? 'bg-red-100 text-red-700 font-semibold'
                                : 'text-gray-700'
                            }`}
                          >
                            <div className="font-medium">{variant.name}</div>
                            <div className="text-sm text-gray-500">SKU: {variant.sku}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {selectedVariant && (
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-semibold">Referencia seleccionada:</span> {selectedVariant.sku}
                    </p>
                  )}
                </div>
              )}

              {/* Features Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  Características Principales
                </h2>
                <div className="space-y-3">
                  {producto.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/573224032578?text=${encodeURIComponent(
                    `Hola, estoy interesado en ${producto.name}${selectedVariant ? ` - ${selectedVariant.name} (SKU: ${selectedVariant.sku})` : ''}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Cotizar por WhatsApp
                </a>
                <Link
                  href="/contacto"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone className="h-5 w-5" />
                  Contactar
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Information Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Specifications Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Package className="h-6 w-6" />
                  Especificaciones Técnicas
                </h2>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {producto.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-gray-200 pb-4 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                    >
                      <span className="font-semibold text-gray-700">{spec.label}:</span>
                      <span className="text-gray-900 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Applications Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Wrench className="h-6 w-6" />
                  Aplicaciones
                </h2>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {producto.applications.map((app, index) => (
                    <li key={index} className="flex items-start gap-3 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
                      <Shield className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Productos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Object.values(productos)
                .filter(p => p.categoria === producto.categoria && p.id !== producto.id)
                .slice(0, 4)
                .map((relacionado) => (
                  <Link
                    key={relacionado.id}
                    href={`/productos/${relacionado.id}`}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={relacionado.images[0]}
                        alt={relacionado.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {relacionado.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">{relacionado.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
