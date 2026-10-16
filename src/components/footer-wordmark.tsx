"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const letters = "NORTHSTAR".split("");

export default function FooterWordmark() {
  const markRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mark = markRef.current;
    if (!mark) return;

    const letterNodes = gsap.utils.toArray<HTMLElement>(".footer-wordmark-letter", mark);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(letterNodes, { yPercent: 0, autoAlpha: 1 });
      return;
    }

    gsap.set(letterNodes, { yPercent: 115, autoAlpha: 0 });
    const reveal = gsap.to(letterNodes, {
      yPercent: 0,
      autoAlpha: 1,
      duration: 0.65,
      stagger: 0.14,
      ease: "power3.out",
      paused: true,
    });
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) reveal.play();
      else reveal.reverse();
    }, { threshold: 0.32 });
    observer.observe(mark);

    return () => {
      observer.disconnect();
      reveal.kill();
      gsap.set(letterNodes, { clearProps: "all" });
    };
  }, []);

  return (
    <div className="footer-wordmark" ref={markRef} role="img" aria-label="Northstar">
      {letters.map((letter, index) => (
        <span className="footer-wordmark-slot" key={`${letter}-${index}`} aria-hidden="true">
          <span className="footer-wordmark-letter">{letter}</span>
        </span>
      ))}
    </div>
  );
}
