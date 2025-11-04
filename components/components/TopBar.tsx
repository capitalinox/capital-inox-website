import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white py-2 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a
              href="tel:+573224032578"
              className="flex items-center gap-2 hover:text-red-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+57 322 403 2578</span>
            </a>
            <a
              href="mailto:ventas@capitalinox.com"
              className="flex items-center gap-2 hover:text-red-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>ventas@capitalinox.com</span>
            </a>
          </div>
          <div className="text-gray-400">
            Bogotá, Colombia - Entrega Nacional
          </div>
        </div>
      </div>
    </div>
  );
}
