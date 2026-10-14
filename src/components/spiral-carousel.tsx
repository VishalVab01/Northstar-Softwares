"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";

const projects = [
  { name: "Alvara House", image: "alvara-house.jpg" },
  { name: "Horizone", image: "horizone.jpg" },
  { name: "Aveline Dental", image: "aveline-dental.jpg" },
  { name: "4Dolfins", image: "4dolfins.jpg" },
  { name: "Orvel", image: "orvel.jpg" },
  { name: "Tarn", image: "tarn.jpg" },
  { name: "Stillroom", image: "stillroom.jpg" },
  { name: "Averleigh", image: "averleigh.jpg" },
  { name: "Valden", image: "valden.jpg" },
  { name: "Norholm Freight", image: "norholm-freight.jpg" },
  { name: "Upwell", image: "upwell.jpg" },
];

export default function SpiralCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const ring = ringRef.current;
    if (!section || !stage || !ring) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let targetRotation = 0;
    let rotation = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let tiltX = 0;
    let tiltY = 0;
    let frame = 0;
    let scrollFrame = 0;
    let active = false;
    let sectionStart = 0;
    let scrollableDistance = 1;
    let lastProgress = -1;

    const measureSection = () => {
      sectionStart = section.getBoundingClientRect().top + window.scrollY;
      scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight);
    };

    const render = () => {
      frame = 0;
      rotation += (targetRotation - rotation) * (reduceMotion ? 1 : 0.11);
      tiltX += (targetTiltX - tiltX) * (reduceMotion ? 1 : 0.08);
      tiltY += (targetTiltY - tiltY) * (reduceMotion ? 1 : 0.08);
      ring.style.setProperty("--ring-rotation", `${rotation}deg`);
      ring.style.setProperty("--ring-tilt-x", `${tiltX}deg`);
      ring.style.setProperty("--ring-tilt-y", `${tiltY}deg`);

      if (
        Math.abs(targetRotation - rotation) > 0.05 ||
        Math.abs(targetTiltX - tiltX) > 0.02 ||
        Math.abs(targetTiltY - tiltY) > 0.02
      ) {
        frame = window.requestAnimationFrame(render);
      } else {
        active = false;
      }
    };

    const scheduleRender = () => {
      if (!active) {
        active = true;
        frame = window.requestAnimationFrame(render);
      }
    };

    const updateScroll = () => {
      scrollFrame = 0;
      const progress = Math.min(1, Math.max(0, (window.scrollY - sectionStart) / scrollableDistance));
      if (Math.abs(progress - lastProgress) < 0.0001) return;
      lastProgress = progress;
      const turn = reduceMotion ? 180 : 540;
      targetRotation = -progress * turn;

      const step = 360 / projects.length;
      const nextIndex = Math.round((progress * turn) / step) % projects.length;
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
      scheduleRender();
    };

    const syncScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScroll);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reduceMotion || event.pointerType === "touch") return;
      const bounds = stage.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      targetTiltX = -y * 7;
      targetTiltY = x * 7;
      scheduleRender();
    };

    const resetPointer = () => {
      targetTiltX = 0;
      targetTiltY = 0;
      scheduleRender();
    };

    const onResize = () => {
      measureSection();
      syncScroll();
    };

    window.addEventListener("scroll", syncScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerleave", resetPointer);
    measureSection();
    updateScroll();

    return () => {
      window.removeEventListener("scroll", syncScroll);
      window.removeEventListener("resize", onResize);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerleave", resetPointer);
      if (frame) window.cancelAnimationFrame(frame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="spiral-section"
      id="work"
      aria-labelledby="spiral-title"
    >
      <div className="spiral-stage" ref={stageRef}>
        <header className="spiral-heading">
          <p>Featured work</p>
          <h2 id="spiral-title">Our Works</h2>
        </header>

        <div className="spiral-view" role="list" aria-label="Featured project carousel">
          <div className="spiral-orbit" ref={ringRef}>
            {projects.map((project, index) => (
              <article
                className="spiral-card-slot"
                key={project.name}
                style={{ "--card-angle": `${(index * 360) / projects.length}deg` } as CSSProperties}
                role="listitem"
                aria-label={project.name}
              >
                <Image
                  src={`/spiral/${project.image}`}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 38vw, 220px"
                  loading="lazy"
                  decoding="async"
                />
              </article>
            ))}
          </div>

          <article className="spiral-featured" aria-live="polite" aria-atomic="true">
            <div className="spiral-featured-image">
              <Image
                key={projects[activeIndex].image}
                src={`/spiral/${projects[activeIndex].image}`}
                alt={projects[activeIndex].name}
                fill
                sizes="(max-width: 700px) 56vw, 360px"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p>{projects[activeIndex].name}</p>
          </article>
        </div>

        <p className="spiral-scroll-cue"><span aria-hidden="true">↓</span> Scroll to explore</p>
      </div>
    </section>
  );
}
