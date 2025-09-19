"use client";

import { useCallback, useEffect, useRef } from "react";

type AnimationFrameCallback = (time: number) => void;

export function useAnimationFrame(
  callback: AnimationFrameCallback,
  active = true
) {
  //  useRef debe tener un valor inicial (null) y aceptar number | null
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const callbackRef = useRef<AnimationFrameCallback>(callback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the animation loop
  const animate = useCallback((time: number) => {
    if (previousTimeRef.current !== null) {
      callbackRef.current(time);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  // Start and stop the animation loop based on active state
  useEffect(() => {
    if (active) {
      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current !== null) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }
  }, [animate, active]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
}
