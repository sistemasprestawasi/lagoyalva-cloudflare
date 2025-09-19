"use client";

import { Navbar } from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatePresence, motion } from "framer-motion";
import { Montserrat, Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import type React from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div
        suppressHydrationWarning
        className={`flex min-h-screen flex-col ${montserrat.variable} ${poppins.variable} ${poppins.className} antialiased`}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex-grow"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
