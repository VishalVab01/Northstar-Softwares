"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      anchors: true,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    let frame = 0;
    const advanceLenis = (time: number) => {
      frame = 0;
      lenis.raf(time);
      if (lenis.isScrolling === "smooth") frame = window.requestAnimationFrame(advanceLenis);
    };
    const start = () => {
      if (!frame && !document.hidden) {
        frame = window.requestAnimationFrame(advanceLenis);
      }
    };
    const onInput = () => start();
    const onVisibilityChange = () => {
      if (document.hidden && frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      } else start();
    };

    lenis.on("scroll", updateScrollTrigger);
    window.addEventListener("wheel", onInput, { passive: true });
    window.addEventListener("touchmove", onInput, { passive: true });
    window.addEventListener("keydown", onInput);
    window.addEventListener("click", onInput);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
      window.removeEventListener("wheel", onInput);
      window.removeEventListener("touchmove", onInput);
      window.removeEventListener("keydown", onInput);
      window.removeEventListener("click", onInput);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (frame) window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
