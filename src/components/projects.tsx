"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Terrenos en Carabayllo",
    category: "Parque Real",
    image:
      "/img/project01.jpg",
  },
  {
    title: "Ciudad de Dios",
    category: "Rodas Consolidate",
    image:
      "/img/project02.jpg",
  },
];

export default function ProjectsGallery() {
  return (
    <section className="py-12 md:py-20 bg-neutral-100 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-none text-sm font-medium mb-3 md:mb-4">
            Nuestro Portafolio
          </div>
          <h2 className="text-2xl sm:text-3xl dark:text-neutral-50 md:text-4xl font-bold mb-3 md:mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-200">
            Conoce nuestros proyectos más recientes y destacados en el mercado
            inmobiliario.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <Card className="group relative overflow-hidden rounded-2xl shadow-lg border-0">
                {/* Imagen */}
                <div className="relative h-[250px] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlay con degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                {/* Contenido */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.category}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
