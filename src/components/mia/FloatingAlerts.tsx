"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const alerts = [
  {
    id: 1,
    title: "Lago & Alva",
    message: "Proyectos inmobiliarios seguros y rentables.",
    url: "https://lagoyalva.com/",
    image:
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1755889009/samples/people/smiling-man.jpg",
  },
  {
    id: 2,
    title: "Rentabilízate",
    message: "Haz crecer tu dinero con inversiones inteligentes.",
    url: "http://rentabilizate.pe/",
    image:
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1755889008/samples/people/kitchen-bar.jpg",
  },
  {
    id: 3,
    title: "Prestawasi",
    message: "Préstamos para impulsar tus proyectos.",
    url: "https://prestawasi.com/",
    image:
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1755889017/samples/smile.jpg",
  },
];

export default function FloatingAlerts() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  // Rotar alertas cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % alerts.length);
      setVisible(true);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  const alert = alerts[current];

  return (
    <div className="fixed bottom-4 left-4 z-50 w-[280px] sm:w-[320px]">
      {visible && (
        <div className="bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden relative animate-in fade-in slide-in-from-left-5">
          {/* Botón cerrar */}
          <Button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 z-10"
          >
            <X className="w-4 h-4" />
          </Button>

          {/* Imagen rectangular */}
          <Link href={alert.url} target="_blank" className="block">
            <Image
              src={alert.image}
              alt={alert.title}
              width={320}
              height={80}
              className="w-full h-20 object-cover"
            />
          </Link>

          {/* Texto debajo */}
          <div className="p-3">
            <h3 className="text-sm font-semibold text-red-600">
              {alert.title}
            </h3>
            <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-2">
              {alert.message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
