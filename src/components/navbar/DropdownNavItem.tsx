"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function DropdownNavItem({
  label,
  items,
  pathname,
  imageSrc,
}: {
  label: string;
  items: { href: string; label: string }[];
  pathname: string;
  imageSrc?: string;
}) {
  const isActive = items.some((item) => item.href === pathname);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className={`flex items-center gap-1 px-0 py-2 text-sm sm:text-base font-medium rounded-md transition-colors ${
            isActive ? "text-foreground" : "text-muted-foreground"
          } hover:text-foreground`}
        >
          <motion.span
            animate={isOpen ? { y: -2 } : { y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-flex items-center gap-1"
          >
            {label}
            <motion.div
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.span>
        </button>
      </PopoverTrigger>

      <AnimatePresence>
        {isOpen && (
          <PopoverContent
            className="p-3 w-80 sm:w-[420px] rounded-xl shadow-lg border bg-popover grid grid-cols-2 gap-3"
            align="start"
            forceMount
            asChild
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid grid-cols-2 gap-3"
            >
              {/* Columna de links */}
              <div className="flex flex-col">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm sm:text-base py-2 px-3 rounded-md hover:bg-muted transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Columna de imagen */}
              {imageSrc && (
                <div className="relative overflow-hidden rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={imageSrc}
                      alt={`Imagen de ${label}`}
                      fill
                      className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                    />

                    {/* Overlay para dar contraste */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/0" />

                    {/* Texto encima de la imagen */}
                    <div className="absolute bottom-2 left-2 text-white text-sm sm:text-base font-medium drop-shadow">
                      {label}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </PopoverContent>
        )}
      </AnimatePresence>
    </Popover>
  );
}
