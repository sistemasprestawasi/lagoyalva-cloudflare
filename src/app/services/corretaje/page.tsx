"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import type { FC } from "react";

type CardItemProps = {
  title: string;
  desc: string;
};

const CardItem: FC<CardItemProps> = ({ title, desc }) => (
  <Card className="border">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{desc}</CardContent>
  </Card>
);

const serviceCards: CardItemProps[] = [
  {
    title: "Estrategia Comercial",
    desc: "Definimos canales, precios, cronograma de ventas y KPIs para tu preventa y postventa.",
  },
  {
    title: "Marketing y Creatividad",
    desc: "Material fotográfico, renders, landing pages, campañas pagadas y lead nurturing.",
  },
  {
    title: "Red de Agentes & Alianzas",
    desc: "Acceso a socios, brokers y una base de potenciales compradores/inversionistas.",
  },
];

const Page: FC = () => {
  return (
    <main className="min-h-screen dark:bg-neutral-900">
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Texto principal */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Corretaje especializado en proyectos de habilitación y
              multifamiliares
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-amber-50">
              Si eres un desarrollador inmobiliario de habilitación urbana en
              Lima, o te dedicas a la construcción de departamentos
              multifamiliares medianos o pequeños, podemos ayudarte a
              comercializar tu proyecto <strong>en tiempo récord</strong> con un
              servicio profesional y completo.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                {
                  title: "Comercialización 360°:",
                  text: "estrategia digital, ventas presenciales, alianzas y gestión de portafolios.",
                },
                {
                  title: "Resultados rápidos:",
                  text: "equipo con experiencia en ventas por fases y preventa para acortar tiempos de venta.",
                },
                {
                  title: "Servicio integral:",
                  text: "desde branding y material comercial hasta coordinación con brokers y atención al cliente.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="inline-block mt-1 w-3 h-3 bg-blue-600 rounded-full" />
                  <span>
                    <strong>{item.title}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 ">
              <Button className="bg-blue-600 hover:bg-indigo-700 text-white">
                Quiero comercializar mi proyecto
              </Button>
              <Button variant="outline" asChild>
                <a href="https://lagoyalva.com/" rel="noreferrer">
                  Registrarse
                </a>
              </Button>
            </div>
          </div>

          {/* Imagen y tarjetas */}
          <div className="rounded-2xl bg-white dark:bg-neutral-800 p-6 shadow-lg">
            <Image
              src="https://res.cloudinary.com/dohuz9aym/image/upload/v1757546263/xMae-Gestion-Desarrollo-Inmobiliario-modulo-04.jpg.pagespeed.ic.9DURvJbHz6_sfensy.webp"
              alt="Proyecto inmobiliario en Lima"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
              priority
            />

            <div className="mt-6 ">
              <Card className="dark:bg-neutral-800">
                <CardHeader>
                  <CardTitle>Servicios principales</CardTitle>
                  <CardDescription>
                    Servicios pensados para desarrolladores y constructoras
                    pequeñas/medianas en Lima
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                  {serviceCards.map((card, i) => (
                    <CardItem key={i} title={card.title} desc={card.desc} />
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
