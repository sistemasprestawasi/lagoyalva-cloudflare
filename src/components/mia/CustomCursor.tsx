"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${position.x - 15}px, ${position.y - 15}px)`,
      }}
    >
      <div className="w-8 h-8 rounded-full border border-neutral-900/60 dark:border-white bg-white/5 backdrop-blur-sm"></div>
    </div>
  );
}
