import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | BuildMaster Construction",
  description:
    "Get in touch with BuildMaster Construction for inquiries, quotes, or to discuss your construction project needs.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}

      <section className="relative h-[450px] md:h-[500px] w-full overflow-hidden">
        {/* Overlay oscuro con degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />

        {/* Imagen de fondo */}
        <Image
          src="https://res.cloudinary.com/dohuz9aym/image/upload/v1755889020/main-sample.png"
          alt="Contact us"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Contenido centrado */}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6">
            Contacta con nosotros
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            Póngase en contacto con nuestro equipo para analizar las necesidades
            de su proyecto o solicitar un presupuesto personalizado.
          </p>

          {/* Botón CTA */}
          <Link href="/contact">
            <button className="px-6 md:px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95">
              Solicitar Cotización
            </button>
          </Link>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Info */}
            <div>
              <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-md text-sm font-medium mb-4">
                Contáctanos
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Estamos para ayudarte
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-10 text-lg">
                En{" "}
                <span className="font-semibold text-red-600">Lago & Alva</span>
                nos especializamos en inversiones seguras, rentables y a la
                medida de tus objetivos. Escríbenos y nuestro equipo se pondrá
                en contacto contigo.
              </p>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-md mr-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Nuestra Oficina
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Av. Javier Prado Este 1234, San Isidro, Lima - Perú
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-md mr-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Teléfono
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      +51 987 654 321
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-md mr-4">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Correo
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      contacto@lagoyalva.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-md mr-4">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Horario de Atención
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Sábados: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <div id="quote-form" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Solicita una Asesoría
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Completa este formulario y un asesor de{" "}
                  <span className="font-semibold text-red-600">
                    Lago & Alva
                  </span>
                  se comunicará contigo para resolver tus dudas o brindarte un
                  plan de inversión a tu medida.
                </p>
                <form className="bg-gray-50 dark:bg-gray-800 p-10 rounded-md shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-red-600">
                    Envíanos un Mensaje
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-red-600 mb-2"
                      >
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Ej: Juan Pérez"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-red-600 mb-2"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="ejemplo@correo.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-red-600 mb-2"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="+51 987 654 321"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-red-600 mb-2"
                    >
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Consulta sobre inversión"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-red-600 mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Cuéntanos más sobre lo que buscas..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-none">
                    Enviar Mensaje
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
