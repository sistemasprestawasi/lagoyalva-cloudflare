"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { HoverButton } from "../ui/hover-button";

// 👇 Tus imágenes del hero
const slides = [
  {
    id: 1,
    image:
      "/img/pp1.jpg",
    title: "Invierte en tu futuro con Lago & Alva",
    subtitle:
      "Proyectos inmobiliarios que combinan rentabilidad y seguridad para hacer crecer tu inversión.",
  },
  {
    id: 2,
    image:
      "/img/pp2.webp",
    title: "Construimos confianza en cada proyecto",
    subtitle:
      "Nuestro compromiso es ofrecer proyectos con calidad y alta rentabilidad.",
  },
  {
    id: 3,
    image:
      "/img/pp3.png",
    title: "Tu inversión, nuestra prioridad",
    subtitle:
      "Descubre cómo invertir en inmuebles de manera segura y estratégica.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-play cada 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Contenido */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            key={slides[current].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md"
          >
            {slides[current].title}
          </motion.h1>
          <motion.p
            key={slides[current].subtitle}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-10 max-w-xl md:max-w-2xl mx-auto drop-shadow-md"
          >
            {slides[current].subtitle}
          </motion.p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contacto">
              <HoverButton
                size="lg"
                variant="outline"
                className="text-black bg-red-600 dark:text-white border-white hover:bg-white/20 hover:text-white font-semibold px-6 sm:px-8 w-full sm:w-auto backdrop-blur-sm"
                hoverEffect="glow"
                rippleColor="rgba(255, 255, 255, 0.3)"
              >
                Quiero Vender
              </HoverButton>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <HoverButton
                size="lg"
                variant="outline"
                className="text-black dark:text-white border-white hover:bg-white/20 hover:text-white font-semibold px-6 sm:px-8 w-full sm:w-auto backdrop-blur-sm"
                hoverEffect="glow"
                rippleColor="rgba(255, 255, 255, 0.3)"
              >
                Quiero Comprar
              </HoverButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Controles izquierda / derecha */}
      <Button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </section>
  );
}
