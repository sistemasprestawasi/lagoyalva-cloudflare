//  Extiende Navigator para evitar error de deviceMemory
declare global {
  interface Navigator {
    deviceMemory?: number;
    hardwareConcurrency?: number;
  }
}

/**
 * Utility functions for performance optimization
 */

//  Debounce function con tipado seguro
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

//  Throttle function con tipado seguro
export function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  let lastFunc: ReturnType<typeof setTimeout> | null = null;
  let lastRan = 0;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      lastRan = Date.now();
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
        if (lastFunc) {
          clearTimeout(lastFunc);
          lastFunc = null;
        }
      }, limit);
    } else {
      if (lastFunc) clearTimeout(lastFunc);

      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

//  Detecta si es un dispositivo de gama baja
export function isLowEndDevice(): boolean {
  if (typeof navigator !== "undefined") {
    if (navigator.deviceMemory !== undefined && navigator.deviceMemory < 4) {
      return true;
    }
    if (
      navigator.hardwareConcurrency !== undefined &&
      navigator.hardwareConcurrency < 4
    ) {
      return true;
    }
  }
  return false;
}

//  Tipado seguro para capacidades del navegador
export function getBrowserCapabilities() {
  return {
    supportsIntersectionObserver:
      typeof window !== "undefined" && "IntersectionObserver" in window,
    supportsResizeObserver:
      typeof window !== "undefined" && "ResizeObserver" in window,
    supportsWebP: false, // Se actualiza async
    supportsTouchEvents:
      typeof window !== "undefined" && "ontouchstart" in window,
    prefersReducedMotion:
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    devicePixelRatio:
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
    isLowEndDevice: isLowEndDevice(),
  };
}

//  Chequeo de soporte WebP
export async function checkWebPSupport(): Promise<boolean> {
  if (typeof self === "undefined" || !self.createImageBitmap) return false;

  const webpData =
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  const blob = await fetch(webpData).then((r) => r.blob());

  return createImageBitmap(blob).then(
    () => true,
    () => false
  );
}

//  Tipado seguro para medir performance
export function measurePerformance<T extends (...args: unknown[]) => unknown>(
  fn: T,
  label: string
): (...args: Parameters<T>) => ReturnType<T> {
  return (...args: Parameters<T>): ReturnType<T> => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();

    console.log(`${label} took ${end - start}ms`);

    return ((result as ReturnType<T>) || undefined) as ReturnType<T>;
  };
}
