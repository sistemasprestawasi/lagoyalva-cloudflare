"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ rotate: 15 }}
      whileTap={{ scale: 0.9, rotate: 30 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="bg-gray-100 dark:bg-gray-800 p-1.5 sm:p-2 rounded-full"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            {theme === "dark" ? (
              <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neutral-500" />
            ) : (
              <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-700 dark:text-gray-300" />
            )}
          </motion.div>
        </AnimatePresence>
      </Button>
    </motion.div>
  );
}
