"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe, { type Globe } from "cobe";

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
    let width = Math.max(1, host.clientWidth);
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = () => {
      if (!globe) return;
      if (!reducedMotion) phi += 0.0032;
      globe.update({ phi, width: width * 2, height: width * 2 });
      frame = window.requestAnimationFrame(render);
    };

    const create = () => {
      width = Math.max(1, host.clientWidth);
      globe?.destroy();
      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi,
        theta: 0.28,
        mapSamples: 16000,
        mapBrightness: 4.6,
        diffuse: 0.55,
        dark: 1,
        baseColor: [0.32, 0.34, 0.38],
        glowColor: [0.09, 0.11, 0.15],
        markerColor: [0, 0.6, 1],
        opacity: 0.9,
      });
    };

    create();
    frame = window.requestAnimationFrame(render);
    const observer = new ResizeObserver(create);
    observer.observe(host);
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => { reducedMotion = motionPreference.matches; };
    motionPreference.addEventListener("change", updateMotion);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
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
  const touchStart = useRef<number | null>(null);
  const current = reviews[active];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timeout = window.setTimeout(() => setActive((index) => (index + 1) % reviews.length), 7000);
    return () => window.clearTimeout(timeout);
  }, [active, paused]);

  const move = (direction: number) => setActive((index) => (index + direction + reviews.length) % reviews.length);

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
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
