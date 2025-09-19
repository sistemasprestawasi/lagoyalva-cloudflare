"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export function FooterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: "services",
      title: "Servicios",
      items: [
        { label: "Asesoría de Inversiones", href: "/services/inversiones" },
        { label: "Garantías Hipotecarias", href: "/services/garantias" },
        { label: "Gestión de Bienes Raíces", href: "/services/bienes-raices" },
        { label: "Consultoría Financiera", href: "/services/consultoria" },
        // Agrega o quita según lo que ofrezcan
      ],
    },
    {
      id: "empresa",
      title: "Empresa",
      items: [
        { label: "Quienes Somos", href: "/about" },
        { label: "Nuestra Misión", href: "/mission" },
        { label: "Portfolio / Casos de Éxito", href: "/portfolio" },
        { label: "Blog / Noticias", href: "/blog" },
        { label: "Contacto", href: "/contact" },
      ],
    },
    {
      id: "recursos",
      title: "Recursos",
      items: [
        { label: "FAQs", href: "/faq" },
        { label: "Guías", href: "/resources/guides" },
        { label: "Noticias", href: "/blog" },
        // etc
      ],
    },
    {
      id: "soporte",
      title: "Soporte",
      items: [
        { label: "Centro de ayuda", href: "/support" },
        { label: "Consultas", href: "/contact" },
        { label: "Estado del sitio", href: "/status" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@lagoyalva.com", // ejemplo provisional
      href: "mailto:soporte@lagoyalva.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+51 905479186", // ejemplo provisional
      href: "tel:015104904",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Lima, Perú", // verificar dirección real
      href: "#",
    },
  ];

  return (
    <div className="relative">
      {/* Trigger button */}
      <Button
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center justify-center w-12 h-12 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <ArrowUp className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
      </Button>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Popup content */}
            <motion.div
              initial={{ y: "100%", opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: "100%", opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onMouseLeave={() => setIsOpen(false)}
              className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border/50 max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                  <div className="flex items-center space-x-4">
                    <Link
                      href="/"
                      className="flex items-center gap-1.5 sm:gap-2"
                    >
                      <Image
                        src="/img/logo.png"
                        alt="Logo"
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
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-muted/50 transition-colors self-end md:self-start"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>

                {/* Desktop: Grid layout */}
                <div className="hidden md:grid md:grid-cols-4 gap-8 mb-8">
                  {sections.map((section) => (
                    <div key={section.id} className="space-y-4">
                      <h4 className="font-semibold text-primary text-lg">
                        {section.title}
                      </h4>
                      <div className="space-y-3">
                        {section.items.map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 hover:pl-2 group flex items-center"
                          >
                            <span>{item.label}</span>
                            <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile: Collapsible sections */}
                <div className="md:hidden space-y-2 mb-8">
                  {sections.map((section) => (
                    <div
                      key={section.id}
                      className="bg-muted/10 rounded-lg overflow-hidden border border-border/30"
                    >
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between p-4 hover:bg-muted/20 transition-colors"
                      >
                        <h4 className="font-semibold text-primary text-left">
                          {section.title}
                        </h4>
                        {expandedSection === section.id ? (
                          <ChevronUp className="w-4 h-4 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 flex-shrink-0" />
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
                            <div className="p-4 pt-0 space-y-3 border-t border-border/30">
                              {section.items.map((item, index) => (
                                <motion.a
                                  key={index}
                                  href={item.href}
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:pl-2 flex items-center group"
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <span>{item.label}</span>
                                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Contact Information */}
                <div className="pt-6 border-t border-border/50">
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                        <span>Todos los sistemas operativos</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} LagoyAlva. Todos los
                        derechos reservados.
                      </span>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                      {contactInfo.map((contact, index) => (
                        <a
                          key={index}
                          href={contact.href}
                          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <contact.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span>{contact.value}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
