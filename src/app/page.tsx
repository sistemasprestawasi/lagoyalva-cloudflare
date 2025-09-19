"use client";

import { CountUp } from "@/components/animations/count-up";
import { FadeIn } from "@/components/animations/fade-in";
import { HoverCard } from "@/components/animations/hover-card";
import { ScaleIn } from "@/components/animations/scale-in";
import { ScrollProgress } from "@/components/animations/scroll-progress";
import { StaggerIn } from "@/components/animations/stagger-in";
import HeroSlider from "@/components/mia/HeroSlider";
import ProjectsGallery from "@/components/projects";
import { AnimatedButton } from "@/components/ui/animated-button";
import { HoverButton } from "@/components/ui/hover-button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Eye,
  Lightbulb,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <HeroSlider />
      <ProjectsGallery />

      {/* Rest of the page content remains the same */}
      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-400 rounded-full text-sm font-medium mb-3 md:mb-4">
                Nuestro Propósito
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                Misión & Visión
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Guiados por nuestros valores, trabajamos para transformar la
                construcción y generar valor sostenible para nuestros clientes y
                la comunidad.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Misión */}
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-md">
                <div className="flex items-center mb-4 md:mb-6 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-red-100 dark:bg-red-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4"
                  >
                    <Target className="h-6 w-6 md:h-7 md:w-7 text-red-600 dark:text-red-400" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    Nuestra Misión
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm sm:text-base text-center sm:text-left">
                  Brindar servicios de construcción que superen las
                  expectativas, combinando innovación, calidad y compromiso. Nos
                  enfocamos en:
                </p>
                <StaggerIn direction="up" staggerDelay={0.1}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Diseñar y ejecutar proyectos seguros, sostenibles y
                      funcionales que mejoren la calidad de vida de las personas
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Impulsar una cultura de excelencia, mejora continua y
                      crecimiento profesional en nuestro equipo
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Construir relaciones sólidas con clientes, aliados y
                      comunidades basadas en confianza y ética
                    </p>
                  </div>
                </StaggerIn>
              </div>
            </FadeIn>

            {/* Visión */}
            <FadeIn direction="right" delay={0.4}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-md">
                <div className="flex items-center mb-4 md:mb-6 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-red-100 dark:bg-red-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4"
                  >
                    <Eye className="h-6 w-6 md:h-7 md:w-7 text-red-600 dark:text-red-400" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    Nuestra Visión
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm sm:text-base text-center sm:text-left">
                  Convertirnos en la empresa constructora más confiable e
                  innovadora, destacada por:
                </p>
                <StaggerIn direction="up" staggerDelay={0.1}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Elevar los estándares de calidad, seguridad y satisfacción
                      del cliente en cada proyecto
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Implementar prácticas sostenibles que reduzcan el impacto
                      ambiental y aumenten la eficiencia
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Generar impacto positivo en las comunidades mediante
                      desarrollo responsable y compromiso social
                    </p>
                  </div>
                </StaggerIn>
              </div>
            </FadeIn>
          </div>

          {/* Enfoque */}
          <ScaleIn delay={0.6}>
            <div className="mt-10 md:mt-16 text-center">
              <div className="bg-red-50 dark:bg-red-900/30 p-6 md:p-8 rounded-2xl max-w-3xl mx-auto">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-red-100 dark:bg-red-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Lightbulb className="h-6 w-6 md:h-7 md:w-7 text-red-600 dark:text-red-400" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
                  Nuestro Enfoque
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-5 md:mb-6">
                  Creemos que el éxito en la construcción se basa en la
                  colaboración, la innovación y la atención al detalle.
                  Combinamos la experiencia técnica con tecnología de vanguardia
                  para entregar proyectos que perduren en el tiempo.
                </p>
                <Link href="/contact">
                  <AnimatedButton
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold"
                    hoverEffect="shine"
                    iconRotate={true}
                  >
                    Trabaja con Nosotros
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <StaggerIn direction="up" staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Rentabilidad Segura */}
              <HoverCard>
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-red-100 dark:bg-red-900 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <ShieldCheck className="h-7 w-7 md:h-8 md:w-8 text-red-600 dark:text-red-400" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    Rentabilidad Segura
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Inversiones respaldadas en bienes raíces, con retornos
                    atractivos y garantizados por contratos transparentes.
                  </p>
                </div>
              </HoverCard>

              {/* Asesoría Personalizada */}
              <HoverCard>
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-red-100 dark:bg-red-900 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Users className="h-7 w-7 md:h-8 md:w-8 text-red-600 dark:text-red-400" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    Asesoría Personalizada
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Nuestro equipo experto te acompaña en cada paso, ayudándote
                    a tomar decisiones de inversión seguras y rentables.
                  </p>
                </div>
              </HoverCard>

              {/* Innovación y Confianza */}
              <HoverCard className="sm:col-span-2 md:col-span-1">
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-red-100 dark:bg-red-900 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <TrendingUp className="h-7 w-7 md:h-8 md:w-8 text-red-600 dark:text-red-400" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    Innovación y Confianza
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Apostamos por proyectos innovadores que generan valor y
                    confianza en nuestros clientes e inversionistas.
                  </p>
                </div>
              </HoverCard>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 bg-red-500 dark:bg-red-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center max-w-5xl mx-auto">
            {/* Inversión gestionada */}
            <FadeIn direction="up" delay={0.1}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={10} suffix="M+" />
                </div>
                <p className="text-black dark:text-gray-100 font-medium text-sm md:text-base">
                  Inversión Gestionada
                </p>
              </div>
            </FadeIn>

            {/* Años de experiencia */}
            <FadeIn direction="up" delay={0.2}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={15} suffix="+" />
                </div>
                <p className="text-black dark:text-gray-100 font-medium text-sm md:text-base">
                  Años de Experiencia
                </p>
              </div>
            </FadeIn>

            {/* Clientes satisfechos */}
            <FadeIn direction="up" delay={0.3}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={500} suffix="+" />
                </div>
                <p className="text-black dark:text-gray-100 font-medium text-sm md:text-base">
                  Clientes Satisfechos
                </p>
              </div>
            </FadeIn>

            {/* Nivel de confianza */}
            <FadeIn direction="up" delay={0.4}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={98} suffix="%" />
                </div>
                <p className="text-black dark:text-gray-100 font-medium text-sm md:text-base">
                  Nivel de Confianza
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-12 md:py-20 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              ¿Listo para invertir en tu futuro inmobiliario?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto mb-6 md:mb-10">
              En <span className="font-semibold text-red-400">Lago & Alva</span>{" "}
              te ayudamos a rentabilizar tu inversión a través de proyectos
              inmobiliarios de alta calidad. Contáctanos y recibe una asesoría
              personalizada para encontrar la mejor oportunidad para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              {/* Botón principal */}
              <Link href="/contact" className="w-full sm:w-auto">
                <HoverButton
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 md:px-8 w-full sm:w-auto"
                  hoverEffect="ripple"
                >
                  Solicitar Asesoría
                  <ChevronRight className="ml-2 h-4 w-4" />
                </HoverButton>
              </Link>

              {/* Botón secundario */}
              <Link href="/proyectos" className="w-full sm:w-auto">
                <HoverButton
                  size="lg"
                  variant="outline"
                  className="text-black dark:text-white border-white hover:bg-white/20 hover:text-black dark:hover:text-white font-semibold px-6 sm:px-8 w-full sm:w-auto backdrop-blur-sm"
                  hoverEffect="glow"
                  rippleColor="rgba(255, 255, 255, 0.3)"
                >
                  Ver Proyectos
                  <ChevronRight className="ml-2 h-4 w-4" />
                </HoverButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
