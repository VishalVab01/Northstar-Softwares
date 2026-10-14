"use client";

import { useEffect, useRef, useState } from "react";
import type { Globe } from "cobe";

const reviews = [
  {
    quote: "I've worked with Northstar Software on several different occasions and it's always a pleasure. They go through every detail and deliver according to your desires.",
    name: "Lasada Pippen",
    role: "Keynote Speaker & Communication Coach",
    avatar: "/approach/testimonial-lp.png",
  },
  {
    quote: "Great work overall. The design feels premium, the layout is well structured, and everything is responsive. They made the changes I requested quickly and didn't drag the process. Would definitely work again.",
    name: "Lucas M.",
    role: "United States",
  },
  {
    quote: "Talented, creative, and most importantly trustworthy. They completed the revisions even after the project was marked complete on Contra weeks earlier.",
    name: "Saleh Al Zamil",
    role: "Tamkene Saudi Training Center",
    avatar: "/approach/testimonial-saleh.avif",
  },
];

function GlobeBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    let globe: Globe | undefined;
    let frame = 0;
    let phi = 0;
    let width = 0;
    let lastFrame = 0;
    let visible = false;
    let pageVisible = !document.hidden;
    let disposed = false;
    let loading = false;
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowPowerDevice = (navigator.hardwareConcurrency || 4) <= 4;

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const render = (time: number) => {
      frame = 0;
      if (!globe || !visible || !pageVisible || reducedMotion || lowPowerDevice) return;
      if (time - lastFrame < 1000 / 30) {
        frame = window.requestAnimationFrame(render);
        return;
      }
      lastFrame = time;
      phi += 0.0024;
      globe.update({ phi });
      frame = window.requestAnimationFrame(render);
    };

    const start = () => {
      if (frame || !globe || !visible || !pageVisible || reducedMotion || lowPowerDevice) return;
      frame = window.requestAnimationFrame(render);
    };

    const create = async () => {
      if (disposed || !visible || loading) return;
      const nextWidth = Math.max(1, Math.round(host.clientWidth));
      if (globe && Math.abs(nextWidth - width) < 32) return;
      loading = true;
      stop();
      globe?.destroy();
      globe = undefined;
      width = nextWidth;
      try {
        const { default: createGlobe } = await import("cobe");
        if (disposed || !visible) return;
        const pixelRatio = lowPowerDevice ? 0.8 : 1;
        globe = createGlobe(canvas, {
          devicePixelRatio: pixelRatio,
          width,
          height: width,
          phi,
          theta: 0.28,
          mapSamples: lowPowerDevice ? 4500 : 7000,
          mapBrightness: 4.6,
          diffuse: 0.55,
          dark: 1,
          baseColor: [0.32, 0.34, 0.38],
          glowColor: [0.09, 0.11, 0.15],
          markerColor: [0, 0.6, 1],
          opacity: 0.9,
        });
        if (reducedMotion || lowPowerDevice) globe.update({ phi });
        else start();
      } finally {
        loading = false;
      }
    };

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) void create();
      else stop();
    }, { rootMargin: "100px" });
    intersection.observe(host);
    const observer = new ResizeObserver(() => { if (visible) void create(); });
    observer.observe(host);
    const visibilityChange = () => {
      pageVisible = !document.hidden;
      if (pageVisible) start(); else stop();
    };
    document.addEventListener("visibilitychange", visibilityChange);
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      reducedMotion = motionPreference.matches;
      if (motionPreference.matches || lowPowerDevice) { stop(); globe?.update({ phi }); }
      else start();
    };
    motionPreference.addEventListener("change", updateMotion);

    return () => {
      disposed = true;
      stop();
      intersection.disconnect();
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibilityChange);
      motionPreference.removeEventListener("change", updateMotion);
      globe?.destroy();
    };
  }, []);

  return <div className="testimonial-globe-wrap" aria-hidden="true"><canvas ref={canvasRef} className="testimonial-globe" /></div>;
}

function QuoteMarks() {
  return <svg viewBox="0 0 44 32" className="testimonial-quote-mark" fill="currentColor" aria-hidden="true"><path d="M18 4v10c0 7.7-4.6 12.9-11.4 14.9L5 25.6c3.6-1.3 5.8-3.7 6.4-6.6H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12Z" /><path d="M18 4v10c0 7.7-4.6 12.9-11.4 14.9L5 25.6c3.6-1.3 5.8-3.7 6.4-6.6H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12Z" transform="translate(24 0)" /></svg>;
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStart = useRef<number | null>(null);
  const current = reviews[active];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "100px" });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timeout = window.setTimeout(() => setActive((index) => (index + 1) % reviews.length), 7000);
    return () => window.clearTimeout(timeout);
  }, [active, paused]);

  const move = (direction: number) => setActive((index) => (index + direction + reviews.length) % reviews.length);

  return (
    <section ref={sectionRef} className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonial-globe-layer"><GlobeBackdrop /></div>
      <div className="testimonial-globe-veil" aria-hidden="true" />
      <div className="testimonials-inner">
        <h2 id="testimonials-heading">Testimonials</h2>
        <div className="testimonial-layout" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)} onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => {
          const end = event.changedTouches[0]?.clientX;
          if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 50) move(end < touchStart.current ? 1 : -1);
          touchStart.current = null;
        }}>
          <aside className="testimonial-stats" aria-label="Company results">
            <div><strong>30<span>+</span></strong><p>Projects delivered</p></div>
            <div><strong>98<span>%</span></strong><p>Client satisfaction</p></div>
            <div><strong>12<span>+</span></strong><p>Years combined experience</p></div>
          </aside>
          <div className="testimonial-quote-card" aria-live="polite">
            <div className="testimonial-topline">
              <div><p><span>{String(active + 1).padStart(2, "0")}</span> <i>/ {String(reviews.length).padStart(2, "0")}</i></p><b /></div>
              <QuoteMarks />
            </div>
            <div className="testimonial-review" key={active}>
              <div className="testimonial-stars" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((star) => <svg key={star} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3-5.6-3.3-5.6 3.3 1.4-6.3L3 9.1l6.4-.6L12 2.6Z" /></svg>)}</div>
              <blockquote>“{current.quote}”</blockquote>
              <div className="testimonial-author">
                {current.avatar ? <img src={current.avatar} alt="" /> : <span className="testimonial-initial">L</span>}
                <span><strong>{current.name}</strong><small>{current.role}</small></span>
              </div>
            </div>
            <div className="testimonial-controls">
              <button type="button" aria-label="Previous testimonial" onClick={() => move(-1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg></button>
              <button type="button" aria-label="Next testimonial" onClick={() => move(1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
