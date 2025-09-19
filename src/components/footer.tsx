"use client";

import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FooterPopup } from "./footer-popup";

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Cambia este número al de tu empresa
  const whatsappNumber = "51905479186"; // formato internacional: 51 + número sin símbolos
  const whatsappMessage =
    "Hola, me interesa conocer más sobre las oportunidades de inversión en Lago y Alva.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  const footerSections = [
    {
      id: "servicios",
      title: "Servicios",
      items: [
        "Inversión en Bienes Raíces",
        "Gestión de Proyectos",
        "Desarrollo de Terrenos",
        "Asesoría Legal",
        "Optimización de Rentabilidad",
        "Consultoría Estratégica",
      ],
    },
    {
      id: "empresa",
      title: "Empresa",
      items: [
        "Nosotros",
        "Portafolio",
        "Proyectos",
        "Nuestro Proceso",
        "Trabaja con Nosotros",
        "Blog",
      ],
    },
    {
      id: "recursos",
      title: "Recursos",
      items: [
        "Preguntas Frecuentes",
        "Soporte",
        "Noticias del Sector",
        "Guías de Inversión",
        "Transparencia",
        "Descargas",
      ],
    },
    {
      id: "legal",
      title: "Legal",
      items: [
        "Política de Privacidad",
        "Términos y Condiciones",
        "Uso de Cookies",
        "Cumplimiento Legal",
        "Accesibilidad",
        "Licencias",
      ],
    },
  ];

  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-border/50 relative overflow-hidden">
      {/* Fondo con código simulando innovación */}
      <div className="absolute inset-0 opacity-5">
        <pre className="text-xs text-primary/30 font-mono leading-relaxed transform rotate-6 scale-150 absolute -top-20 -left-20">
          {`function invertirConExito() {
  const oportunidades = [];
  
  // Inversión Segura
  oportunidades.push({
    tipo: 'Bienes Raíces',
    ubicacion: 'Perú',
    retorno: 'Alto',
    riesgo: 'Bajo'
  });
  
  // Crecimiento Patrimonial
  oportunidades.push({
    estrategia: 'Compra de Terrenos',
    modelo: 'Desarrollo',
    objetivo: 'Rentabilidad Sostenida'
  });
}`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Footer en Desktop */}
        <div className="hidden md:flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              <Image
                src="/img/logo.png"
                alt="Logo Lago y Alva"
                width={45}
                height={45}
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold">
                  Lago y Alva
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">
                  Inversión en Bienes Raíces.
                </span>
              </div>
            </Link>
            <FooterPopup />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Lago y Alva. Todos los derechos
              reservados.
            </div>

            <div className="flex items-center gap-4">
              {/* Bloque con logo MVCS */}
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dohuz9aym/image/upload/v1758300248/PCM-Vivienda_q2zezf.webp"
                  alt="Ministerio de Vivienda, Construcción y Saneamiento"
                  width={180}
                  height={140}
                  className="object-contain"
                />
                <span className="text-xs text-muted-foreground">
                  MVCS – PJ-1238
                </span>
              </div>
              {/* BOTÓN DE WHATSAPP */}
              <Button
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-4 py-2 text-sm"
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Footer en Mobile */}
        <div className="md:hidden space-y-6">
          {/* Logo e información */}
          <div className="text-center space-y-4">
            <Image
              src="/img/logo.png"
              alt="Logo Lago y Alva"
              width={45}
              height={45}
            />
            <div className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Lago y Alva. Todos los derechos
              reservados.
            </div>
          </div>

          {/* Secciones colapsables */}
          <div className="space-y-2">
            {footerSections.map((section) => (
              <div
                key={section.id}
                className="border border-border/30 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 bg-background/50 hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium text-sm">{section.title}</span>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 space-y-2 border-t border-border/30">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={index}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Boletín y botón de WhatsApp */}
          <div className="text-center space-y-4 pt-4 border-t border-border/30">
            {/* Bloque con logo MVCS */}
            <div className="flex items-center gap-2">
              <Image
                src="/img/minu.webp"
                alt="Ministerio de Vivienda, Construcción y Saneamiento"
                width={180}
                height={140}
                className="object-contain mx-auto"
              />
              <span className="text-xs text-muted-foreground">
                MVCS – PJ-1238
              </span>
            </div>
            <Button
              onClick={openWhatsApp}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-4 py-2 text-sm"
            >
              <FaWhatsapp className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
