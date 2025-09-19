"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import type { FC } from "react";

type ServiceCardProps = {
  title: string;
  desc: string;
};

const ServiceCard: FC<ServiceCardProps> = ({ title, desc }) => (
  <Card className="border">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-gray-700 dark:text-gray-200">
      {desc}
    </CardContent>
  </Card>
);

const services: ServiceCardProps[] = [
  {
    title: "Asesoría Inmobiliaria",
    desc: "Te ayudamos a evaluar proyectos, revisar contratos y optimizar tu decisión de compra o inversión.",
  },
  {
    title: "Asesoría Financiera",
    desc: "Análisis de viabilidad, opciones de financiamiento y estrategias para maximizar rentabilidad.",
  },
  {
    title: "Asesoría Contable",
    desc: "Cumplimiento tributario, planeamiento fiscal y reportes para una inversión segura.",
  },
];

const AsesoriaPage: FC = () => {
  return (
    <main className="min-h-screen dark:bg-neutral-900">
      {/* HERO CON IMAGEN COMPLETA */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://res.cloudinary.com/dohuz9aym/image/upload/v1757546263/xMae-Gestion-Desarrollo-Inmobiliario-modulo-04.jpg.pagespeed.ic.9DURvJbHz6_sfensy.webp"
          alt="Asesoría inmobiliaria y financiera"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Asesoría Profesional para Inversiones Seguras
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Contamos con un <strong>staff de profesionales</strong> que podrán
              brindarte asesoría inmobiliaria, financiera y contable para{" "}
              <strong>garantizar tu inversión</strong>.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-indigo-700 text-white">
                Solicitar Asesoría
              </Button>
              <Button variant="outline" asChild>
                <a href="/contacto">Hablar con un experto</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Beneficios */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Servicios y Beneficios
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">
              Nuestros expertos te acompañan en cada etapa de tu inversión para
              que tomes decisiones seguras y rentables.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Evaluación integral de proyectos antes de invertir.",
                "Optimización de impuestos y costos financieros.",
                "Revisión de contratos y documentos legales.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tarjetas */}
          <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 shadow-lg">
            <Card className="dark:bg-neutral-800">
              <CardHeader>
                <CardTitle>Servicios de Asesoría</CardTitle>
                <CardDescription>
                  Nuestro equipo está preparado para cubrir todas las áreas de
                  tu inversión
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {services.map((service, i) => (
                  <ServiceCard
                    key={i}
                    title={service.title}
                    desc={service.desc}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AsesoriaPage;
