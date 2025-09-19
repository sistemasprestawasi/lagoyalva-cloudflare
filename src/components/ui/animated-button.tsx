"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { RepeatType } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface AnimatedButtonProps extends ButtonProps {
  hoverScale?: number;
  tapScale?: number;
  hoverEffect?:
    | "scale"
    | "lift"
    | "glow"
    | "pulse"
    | "bounce"
    | "shine"
    | "none";
  iconAnimation?: boolean;
  iconRotate?: boolean;
}

export function AnimatedButton({
  children,
  className,
  hoverScale = 1.05,
  tapScale = 0.95,
  hoverEffect = "scale",
  iconAnimation = false,
  iconRotate = false,
  ...props
}: AnimatedButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Button className={cn("text-white", className)} {...props}>
        {children}
      </Button>
    );
  }

  // ✅ Corregido: Tipamos repeatType como RepeatType para evitar error
  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case "scale":
        return { scale: hoverScale, transition: { duration: 0.2 } };
      case "lift":
        return {
          y: -5,
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        };
      case "glow":
        return { boxShadow: "0 0 15px 2px rgba(245, 158, 11, 0.6)" };
      case "pulse":
        return {
          scale: [1, 1.05, 1],
          transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop" as RepeatType,
          },
        };
      case "bounce":
        return {
          y: [0, -6, 0],
          transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatType: "loop" as RepeatType,
          },
        };
      case "shine":
        return {
          backgroundPosition: ["200% 0", "0% 0", "200% 0"],
          backgroundImage:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          backgroundSize: "200% 100%",
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop" as RepeatType,
          },
        };
      case "none":
      default:
        return {};
    }
  };

  // Procesar hijos si hay animación de icono
  const processChildren = () => {
    if (!iconAnimation && !iconRotate) return children;

    return React.Children.map(children, (child, index) => {
      if (
        index === React.Children.count(children) - 1 &&
        React.isValidElement(child)
      ) {
        return (
          <motion.div
            animate={iconRotate ? { rotate: 360 } : { x: [0, 4, 0] }}
            transition={{
              repeat: iconRotate ? 1 : 3,
              repeatType: "loop" as RepeatType,
              duration: 0.6,
              ease: "easeInOut",
              repeatDelay: 0.2,
            }}
          >
            {child}
          </motion.div>
        );
      }
      return child;
    });
  };

  return (
    <motion.div
      whileHover={getHoverAnimation()}
      whileTap={{ scale: tapScale }}
      className="inline-block"
    >
      <Button className={cn("text-white", className)} {...props}>
        {processChildren()}
      </Button>
    </motion.div>
  );
}
