"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, Variants } from "framer-motion";
import React from "react";

interface StaggerInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  threshold?: number; // lo mantenemos por compatibilidad con props
}

export function StaggerIn({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.5,
  direction = "up",
  distance = 20,
  once = true,
  threshold = 0.1,
}: StaggerInProps) {
  const prefersReducedMotion = useReducedMotion();

  const getDirectionOffset = () => {
    if (prefersReducedMotion) return {};

    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return {};
    }
  };

  // ✅ Tipamos los variants para evitar errores en TS
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1.0], // Animación suave
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }} // ✅ actualizado: "threshold" -> "amount"
      variants={prefersReducedMotion ? {} : containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={prefersReducedMotion ? {} : itemVariants}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
