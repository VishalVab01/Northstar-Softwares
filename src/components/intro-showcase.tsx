"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tracks = [
  {
    className: "intro-track intro-track-top",
    images: ["84a40757", "e9076ff8", "9f6f6a01", "ff048242", "f3ec6156", "a295b880", "36e5a4f3", "da002a67", "84a40757", "e9076ff8"],
  },
  {
    className: "intro-track intro-track-middle",
    images: ["f3ec6156", "da002a67", "23b28990", "2a53921c", "36e5a4f3", "84a40757", "816a7ff2", "3e3d732f", "f3ec6156", "da002a67"],
  },
  {
    className: "intro-track intro-track-bottom",
    images: ["a295b880", "5fa548c7", "f5b3fbda", "36e5a4f3", "816a7ff2", "3e3d732f", "f3ec6156", "ff048242", "e9076ff8"],
  },
];

export default function IntroShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".intro-row", section);
      const tracks = gsap.utils.toArray<HTMLElement>(".intro-track", section);

      tracks.forEach((track, index) => {
        const row = rows[index];
        if (!row) return;

        const distance = () => Math.max(0, Math.min(track.scrollWidth - row.clientWidth, 1500));
        const fromX = index === 1 ? () => -distance() : 0;
        const toX = index === 1 ? 0 : () => -distance();

        gsap.fromTo(
          track,
          { x: fromX },
          {
            x: toX,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          },
        );
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="intro-showcase" aria-labelledby="intro-heading">
      <div className="intro-inner">
        <div className="intro-mosaic" aria-hidden="true">
          {tracks.map((track) => (
            <div className="intro-row" key={track.className}>
              <div className={track.className}>
                {track.images.map((image, index) => (
                  <Image
                    className="intro-image"
                    src={`/intro/${image}.webp`}
                    alt=""
                    width={720}
                    height={540}
                    sizes="(max-width: 700px) 74vw, 360px"
                    key={`${image}-${index}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="intro-left-vignette" aria-hidden="true" />
        <div className="intro-copy">
          <h2 id="intro-heading">Design that speaks.<br />Delivery that converts.</h2>
          <p>
            Northstar Software crafts focused digital experiences that captivate audiences and drive growth. Combining bold design with smart strategy, we elevate your brand to win and convert—seamlessly.
          </p>
          <div className="intro-actions">
            <a className="intro-button intro-button-primary" href="#company">About Us</a>
            <a className="intro-button intro-button-secondary" href="#work">See our work</a>
          </div>
        </div>
        <div className="intro-edge-vignette" aria-hidden="true" />
      </div>
    </section>
  );
}
