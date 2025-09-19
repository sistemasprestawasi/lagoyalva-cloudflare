"use client";

import {
  AnimatePresence,
  motion,
  Transition,
  useReducedMotion,
  Variants,
} from "framer-motion";
import React from "react";

interface MobileMenuAnimationProps {
  children: React.ReactNode;
  isOpen: boolean;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  className?: string;
}

export function MobileMenuAnimation({
  children,
  isOpen,
  delay = 0,
  direction = "right",
  duration = 0.3,
  className,
}: MobileMenuAnimationProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={className}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Definimos animaciones según dirección
  const getAnimationProps = () => {
    switch (direction) {
      case "left":
        return {
          initial: { x: -100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: -100, opacity: 0 },
        };
      case "right":
        return {
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: 100, opacity: 0 },
        };
      case "up":
        return {
          initial: { y: -100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: -100, opacity: 0 },
        };
      case "down":
        return {
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: 100, opacity: 0 },
        };
      default:
        return {
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: 100, opacity: 0 },
        };
    }
  };

  const animationProps = getAnimationProps();

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={animationProps.initial}
          animate={animationProps.animate}
          exit={animationProps.exit}
          transition={{
            type: "spring" as const,
            stiffness: 300,
            damping: 30,
            mass: 0.8,
            delay,
            duration,
          }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Animación con "stagger" para hijos
export function StaggeredItems({
  children,
  staggerDelay = 0.05,
  initialDelay = 0,
  direction = "up",
  className,
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const getItemProps = () => {
    switch (direction) {
      case "left":
        return {
          initial: { x: -20, opacity: 0 },
          animate: { x: 0, opacity: 1 },
        };
      case "right":
        return {
          initial: { x: 20, opacity: 0 },
          animate: { x: 0, opacity: 1 },
        };
      case "up":
        return {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
        };
      case "down":
        return {
          initial: { y: -20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
        };
      default:
        return {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
        };
    }
  };

  // Tipamos explícitamente como Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: getItemProps().initial,
    show: {
      ...getItemProps().animate,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      } satisfies Transition,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
