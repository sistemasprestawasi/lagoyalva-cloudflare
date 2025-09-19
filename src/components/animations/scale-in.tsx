"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type React from "react";

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;
  once?: boolean;
  threshold?: number;
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  scale = 0.95,
  once = true,
  threshold = 0.1,
}: ScaleInProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      scale,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  // Variante mínima para accesibilidad
  const reducedVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: Math.min(Math.max(threshold, 0), 1) }}
      variants={prefersReducedMotion ? reducedVariants : variants}
    >
      {children}
    </motion.div>
  );
}
