"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { MobileMenu } from "@/components/mobile-menu";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";
import { DropdownNavItem } from "./DropdownNavItem";
import { NavItem } from "./NavItem";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const pathname = usePathname();

  // Scroll y montaje
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + 5) setScrollDirection("down");
      else if (currentScrollY < lastScrollY - 5) setScrollDirection("up");

      setScrolled(currentScrollY > 10);
      if (currentScrollY < 50) setScrollDirection("up");
      setLastScrollY(currentScrollY);
    };

    const handleRouteChange = () => setMobileMenuOpen(false);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = useCallback(
    () => setMobileMenuOpen((prev) => !prev),
    []
  );
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const shouldShowNavbar =
    scrollDirection === "up" || !scrolled || lastScrollY < 50;

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-300 ${
          scrolled ? "bg-background/95 shadow-md" : "bg-background/80"
        } safe-top`}
        initial="visible"
        animate={shouldShowNavbar ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-[1920px]">
          <div className="flex h-14 sm:h-16 md:h-18 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
              <Image
                src="https://res.cloudinary.com/dohuz9aym/image/upload/v1757026902/LOGO_WEB_50_50_sfxtfb.png"
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

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center justify-center">
              <ul className="flex items-center space-x-0.5 sm:space-x-1 lg:space-x-2">
                <DropdownNavItem
                  label="Servicios"
                  items={[
                    { href: "/services/corretaje", label: "Corretaje" },
                    { href: "/services/asesoria", label: "Asesoría" },
                    {
                      href: "/services/commercial",
                      label: "Búsqueda personalizada",
                    },
                    { href: "/services/industrial", label: "Inversiones" },
                  ]}
                  pathname={pathname}
                  imageSrc="https://res.cloudinary.com/dohuz9aym/image/upload/v1757546263/xMae-Gestion-Desarrollo-Inmobiliario-modulo-04.jpg.pagespeed.ic.9DURvJbHz6_sfensy.webp"
                />

                <NavItem
                  href="/projects"
                  label="Proyectos"
                  isActive={pathname === "/projects"}
                  onHover={() => setHoveredItem("projects")}
                  onLeave={() => setHoveredItem(null)}
                  isHovered={hoveredItem === "projects"}
                />

                <NavItem
                  href="/about"
                  label="Sobre nosotros"
                  isActive={pathname === "/about"}
                  onHover={() => setHoveredItem("about")}
                  onLeave={() => setHoveredItem(null)}
                  isHovered={hoveredItem === "about"}
                />
              </ul>
            </nav>

            {/* Right Desktop */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              <Link href="/contact#quote-form">
                <AnimatedButton
                  className="bg-red-600 hover:bg-red-700 text-white font-medium text-sm sm:text-base h-9 sm:h-10 transition-all duration-300 shadow-md hover:shadow-lg"
                  hoverEffect="lift"
                  iconAnimation
                >
                  Obtenga una cotización
                </AnimatedButton>
              </Link>

              {mounted && <ThemeToggle />}
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
              {mounted && <ThemeToggle />}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-9 sm:w-9 bg-neutral-50 dark:bg-neutral-900/20 "
                onClick={toggleMobileMenu}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
              >
                <List />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
