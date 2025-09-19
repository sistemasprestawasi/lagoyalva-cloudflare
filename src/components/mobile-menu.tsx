"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Bloquea el scroll cuando está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Cierra al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Cierra al cambiar de ruta
  useEffect(() => {
    const handleRouteChange = () => {
      if (isOpen) onClose();
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Panel lateral */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[85vw] sm:w-[350px] bg-background border-l border-red-200 dark:border-red-800 z-50 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full p-4 sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b py-3 sm:py-4">
                <Link
                  href="/"
                  className="flex items-center gap-1.5 sm:gap-2"
                  onClick={onClose}
                >
                  <Image
                    src="https://res.cloudinary.com/dohuz9aym/image/upload/v1757026902/LOGO_WEB_50_50_sfxtfb.png"
                    alt="Logo"
                    width={45}
                    height={45}
                  />
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.2,
                    }}
                    className="flex flex-col"
                  >
                    <span className="text-base sm:text-lg font-bold">
                      Lago y Alva
                    </span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">
                      Inversión en Bienes Raíces.
                    </span>
                  </motion.div>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-8 w-8 sm:h-9 sm:w-9 bg-red-50 dark:bg-red-900/20"
                  type="button"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 dark:text-red-400" />
                  <span className="sr-only">Cerrar menú</span>
                </Button>
              </div>

              {/* Navegación */}
              <nav className="flex flex-col gap-4 sm:gap-6 py-6 sm:py-8 items-start text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.2,
                  }}
                  className="w-full"
                >
                  <Accordion type="single" collapsible className="w-full">
                    {/* Servicios */}
                    <AccordionItem value="services">
                      <AccordionTrigger className="text-lg font-medium text-left">
                        Servicios
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 items-start text-left pl-2">
                          <MobileSubNavItem
                            href="/services/corretaje"
                            label="Corretaje"
                            isActive={pathname === "/services/corretaje"}
                            onClick={onClose}
                          />
                          <MobileSubNavItem
                            href="/services/asesoria"
                            label="Asesoría"
                            isActive={pathname === "/services/asesoria"}
                            onClick={onClose}
                          />
                          <MobileSubNavItem
                            href="/services/busqueda-personalizada"
                            label="Búsqueda personalizada"
                            isActive={
                              pathname === "/services/busqueda-personalizada"
                            }
                            onClick={onClose}
                          />
                          <MobileSubNavItem
                            href="/services/inversiones"
                            label="Inversiones"
                            isActive={pathname === "/services/inversiones"}
                            onClick={onClose}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Proyectos */}
                    <AccordionItem value="projects">
                      <AccordionTrigger className="text-lg font-medium text-left">
                        Proyectos
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 items-start text-left pl-2">
                          <MobileSubNavItem
                            href="/projects/parque-real"
                            label="Parque Real"
                            isActive={pathname === "/projects/parque-real"}
                            onClick={onClose}
                          />
                          <MobileSubNavItem
                            href="/projects/ciudad-de-dios"
                            label="CIUDAD DE DIOS"
                            isActive={pathname === "/projects/ciudad-de-dios"}
                            onClick={onClose}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Sobre nosotros */}
                    <AccordionItem value="about">
                      <AccordionTrigger className="text-lg font-medium text-left">
                        Sobre nosotros
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 items-start text-left pl-2">
                          <MobileSubNavItem
                            href="/about"
                            label="Nosotros"
                            isActive={pathname === "/about"}
                            onClick={onClose}
                          />
                          <MobileSubNavItem
                            href="/blog"
                            label="Blog"
                            isActive={pathname === "/blog"}
                            onClick={onClose}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              </nav>

              {/* CTA */}
              <motion.div
                className="mt-auto border-t py-4 sm:py-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.7,
                }}
              >
                <Link href="/contact#quote-form" onClick={onClose}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <AnimatedButton
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-medium text-sm sm:text-base transition-all duration-300 py-5 sm:py-6"
                      hoverEffect="shine"
                      iconAnimation={true}
                    >
                      Obtenga una cotización gratuita
                      <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                    </AnimatedButton>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ------------------------------------------------------------------------------------------------------------------------------ */
/* SUB-ITEM (ACCORDION) */
function MobileSubNavItem({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href} // Ahora usa la prop correctamente
      className={`block text-sm sm:text-base py-2 px-3 rounded-lg transition-all duration-300 text-center ${
        isActive ? "text-red-500 bg-red-50 dark:bg-red-900/20" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
/* ------------------------------------------------------------------------------------------------------------------------------ */
