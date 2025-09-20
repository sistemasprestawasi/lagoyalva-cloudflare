import { ArrowRight, CheckCircle, Eye, Lightbulb, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Nosotros | Lagoyalva",
  description:
    "Conoce la misión, visión y enfoque de Lagoyalva, trabajando para transformar la construcción y generar valor sostenible para nuestros clientes y comunidades.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/img/conpani.webp"
          alt="Equipo de construcción Lagoyalva"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Misión & Visión
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Guiados por nuestros valores, trabajamos para transformar la
            construcción y generar valor sostenible para nuestros clientes y la
            comunidad.
          </p>
        </div>
      </section>

      {/* Misión & Visión */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-full text-sm font-medium mb-4">
              Nuestro Propósito
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Misión & Visión
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Trabajamos para elevar los estándares de calidad en la
              construcción, promoviendo la innovación, sostenibilidad y el
              bienestar de las comunidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Misión */}
            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 dark:bg-red-900 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-7 w-7 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Brindar servicios de construcción que superen las expectativas,
                combinando innovación, calidad y compromiso. Nos enfocamos en:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Diseñar y ejecutar proyectos seguros, sostenibles y
                    funcionales que mejoren la calidad de vida de las personas.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Impulsar una cultura de excelencia, mejora continua y
                    crecimiento profesional en nuestro equipo.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Construir relaciones sólidas con clientes, aliados y
                    comunidades basadas en confianza y ética.
                  </p>
                </li>
              </ul>
            </div>

            {/* Visión */}
            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 dark:bg-red-900 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-7 w-7 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Nuestra Visión
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Convertirnos en la empresa constructora más confiable e
                innovadora, destacada por:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Elevar los estándares de calidad, seguridad y satisfacción
                    del cliente en cada proyecto.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Implementar prácticas sostenibles que reduzcan el impacto
                    ambiental y aumenten la eficiencia.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Generar impacto positivo en las comunidades mediante
                    desarrollo responsable y compromiso social.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Enfoque */}
          <div className="mt-16 text-center">
            <div className="bg-red-50 dark:bg-red-900/30 p-8 rounded-2xl max-w-3xl mx-auto">
              <div className="bg-red-100 dark:bg-red-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-7 w-7 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Nuestro Enfoque
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                Creemos que el éxito en la construcción se basa en la
                colaboración, la innovación y la atención al detalle. Combinamos
                la experiencia técnica con tecnología de vanguardia para
                entregar proyectos que perduren en el tiempo.
              </p>
              <Link href="/contacto">
                <Button className="bg-red-500 hover:bg-red-600 text-black font-semibold">
                  Trabaja con Nosotros
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Historia / Propuesta de Valor */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-full text-sm font-medium mb-4">
                Nuestra Propuesta
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Rentabilidad Segura e Innovación
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                Ofrecemos inversiones respaldadas en bienes raíces, con retornos
                atractivos y contratos transparentes que garantizan seguridad y
                confianza.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nuestro equipo de expertos te acompaña en cada paso, ayudándote
                a tomar decisiones de inversión informadas y rentables.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Apostamos por proyectos innovadores que generan valor y
                confianza para nuestros clientes e inversionistas.
              </p>
              <Link href="/contacto">
                <Button className="bg-red-500 hover:bg-red-600 text-black font-semibold">
                  Contáctanos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="img/IMG_20191208_162751.jpg"
                alt="Proyectos Lagoyalva"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
