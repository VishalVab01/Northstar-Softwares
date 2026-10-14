"use client";

import { useEffect, useRef, type ReactNode } from "react";

const discoveryImages = ["agency.jpg", "lumora.jpg", "watches.jpg", "greenearth.jpg", "guardianvets.jpg"];
const cmsEntries = [
  ["Smart Theme Switch ~ Framer Component", "10 July 2026", "cms-1.png"],
  ["StyleSync ~ Import Styles", "27 June 2026", "cms-2.jpg"],
  ["Advanced CMS Slideshow for Framer", "31 May 2026", "cms-3.jpg"],
  ["Smart Animated Counters in Wix Studio", "10 January 2026", "cms-4.jpg"],
  ["How to Add Smooth Scroll in a Wix Website", "1 February 2025", "cms-5.jpg"],
  ["How to Create an Editable Vector Text Effect", "31 January 2025", "cms-6.jpg"],
  ["Smooth Wix Studio Preloader Animation", "29 January 2025", "cms-7.jpg"],
];

function CardCopy({ title, children, light = false }: { title: string; children: ReactNode; light?: boolean }) {
  return (
    <div className={`approach-card-copy${light ? " is-light" : ""}`}>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      section.classList.toggle("is-visible", entry.isIntersecting);
    }, { rootMargin: "100px" });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="approach-section" id="approach" aria-labelledby="approach-title">
      <div className="approach-inner">
        <h2 id="approach-title">Our Approach</h2>
        <div className="approach-rows">
          <div className="approach-row approach-row-one">
            <article className="approach-card approach-discovery">
              <CardCopy title="Discovery First">We begin by <strong>defining clear goals,</strong> understanding your audience, and aligning with your brand voice to set a strong foundation.</CardCopy>
              <div className="discovery-gallery" aria-hidden="true">
                {[0, 1].map((copy) => (
                  <div className="discovery-gallery-run" key={copy}>
                    {discoveryImages.map((image) => (
                      <div className="discovery-shot" key={`${copy}-${image}`}><span className="browser-dots"><i /><i /><i /></span><img src={`/approach/${image}`} alt="" loading="lazy" decoding="async" /></div>
                    ))}
                  </div>
                ))}
              </div>
            </article>

            <article className="approach-card approach-mobile">
              <CardCopy title="Mobile-First Design" light>Every layout is designed for <strong>seamless mobile-first experiences,</strong> ensuring performance across all devices.</CardCopy>
              <div className="phone-pair" aria-hidden="true">
                <img src="/approach/phone-a.webp" alt="" loading="lazy" decoding="async" />
                <img src="/approach/phone-b.webp" alt="" loading="lazy" decoding="async" />
              </div>
            </article>
          </div>

          <div className="approach-row approach-row-two">
            <article className="approach-card approach-conversion">
              <CardCopy title="Conversion-Driven">Websites built with strategy, designed to engage audiences, and crafted to turn <strong>visitors into customers.</strong></CardCopy>
              <div className="approach-laptop" aria-hidden="true">
                <div className="laptop-screen"><img src="/approach/dashboard.webp" alt="" loading="lazy" decoding="async" /><img className="laptop-rail" src="/approach/rail.webp" alt="" loading="lazy" decoding="async" /><img className="laptop-lid" src="/approach/laptop-lid.webp" alt="" loading="lazy" decoding="async" /></div>
                <img className="laptop-base" src="/approach/laptop-base.webp" alt="" loading="lazy" decoding="async" />
              </div>
            </article>

            <article className="approach-card approach-pixel">
              <CardCopy title="Pixel-Perfect Development">Designed and developed with <strong>pixel-perfect precision</strong>, delivering high performance and easy updates.</CardCopy>
              <div className="browser-showcase" aria-hidden="true">
                <div className="browser-showcase-bar"><span>▶</span><b>Desktop</b></div>
                <div className="browser-showcase-images">
                  {["site-a.webp", "site-b.webp", "site-c.webp", "site-d.webp"].map((image) => <img src={`/approach/${image}`} alt="" key={image} loading="lazy" decoding="async" />)}
                </div>
                <img className="browser-panel" src="/approach/panel.webp" alt="" loading="lazy" decoding="async" />
              </div>
            </article>
          </div>

          <div className="approach-row approach-row-three">
            <article className="approach-card approach-cms">
              <CardCopy title="Seamless CMS Launch" light>Launched seamlessly with a powerful CMS, allowing you to <strong>update and manage your website</strong> content effortlessly after going live.</CardCopy>
              <div className="cms-preview" aria-label="CMS article list preview">
                <div className="cms-table-head"><span>Title</span><span>Date</span><span>Image</span></div>
                {cmsEntries.map(([title, date, image]) => (
                  <div className="cms-table-row" key={title}>
                    <span className="cms-title"><i aria-hidden="true">▤</i>{title}</span><span className="cms-date">{date}</span><img src={`/approach/${image}`} alt="" loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </article>

            <article className="approach-card approach-future">
              <CardCopy title="Future-Ready">Websites designed to be <strong>scalable and future-ready,</strong> adapting as your business grows.</CardCopy>
              <div className="watch-face" aria-hidden="true">
                <img className="watch-dial" src="/approach/dial.webp" alt="" loading="lazy" decoding="async" />
                <img className="watch-hour" src="/approach/hand-hour.webp" alt="" loading="lazy" decoding="async" />
                <img className="watch-minute" src="/approach/hand-minute.webp" alt="" loading="lazy" decoding="async" />
                <img className="watch-second" src="/approach/hand-second.webp" alt="" loading="lazy" decoding="async" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
