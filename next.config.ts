// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Permitir carga de imágenes desde YouTube (miniaturas) y Cloudinary
    domains: ["i.ytimg.com", "res.cloudinary.com", "img.clerk.com"],
    formats: ["image/avif", "image/webp"], // optimización moderna
  },
};

export default nextConfig;
