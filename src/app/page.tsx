"use client";

import { useState } from "react";
import StudioPreview from "@/components/studio-preview";
import ToolStrip from "@/components/tool-strip";
import IntroShowcase from "@/components/intro-showcase";
import SpiralCarousel from "@/components/spiral-carousel";
import ServicesSection from "@/components/services-section";
import PlatformSection from "@/components/platform-section";
import PricingSection from "@/components/pricing-section";
import ApproachSection from "@/components/approach-section";
import TestimonialsSection from "@/components/testimonials-section";
import FaqSection from "@/components/faq-section";
import SiteFooter from "@/components/site-footer";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How we work", href: "#approach" },
  { label: "About", href: "#company" },
];

export default function HomePage() {
  const [isLight, setIsLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={`site-shell${isLight ? " theme-light" : ""}`} id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Northstar Software home">
          <svg
            className="brand-mark"
            viewBox="0 0 32 32"
            aria-hidden="true"
            fill="none"
          >
            <defs>
              <linearGradient id="northstar-header-face" x1="5" y1="4" x2="27" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" />
                <stop offset=".48" stopColor="#d8d8d8" />
                <stop offset=".72" stopColor="#fff" />
                <stop offset="1" stopColor="#bcbcbc" />
              </linearGradient>
            </defs>
            <path d="M16 1.8 19.4 12.6 30.2 16l-10.8 3.4L16 30.2l-3.4-10.8L1.8 16l10.8-3.4L16 1.8Z" transform="translate(0 1.3)" fill="#666" />
            <path d="M16 1.8 19.4 12.6 30.2 16l-10.8 3.4L16 30.2l-3.4-10.8L1.8 16l10.8-3.4L16 1.8Z" transform="translate(0 .55)" fill="#c7c7c7" />
            <path d="M16 1.8 19.4 12.6 30.2 16l-10.8 3.4L16 30.2l-3.4-10.8L1.8 16l10.8-3.4L16 1.8Z" fill="url(#northstar-header-face)" stroke="#fff" strokeWidth=".45" />
            <circle cx="16" cy="16" r="2.6" fill="var(--site-bg)" />
          </svg>
          <span>Northstar<span className="brand-light"> Software</span></span>
        </a>

        <nav
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item, index) => (
            <a
              className={index === 0 ? "is-current" : ""}
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="mobile-connect" href="#contact" onClick={() => setMenuOpen(false)}>
            Discuss your project <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            role="switch"
            aria-checked={isLight}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            onClick={() => setIsLight((current) => !current)}
          >
            <span className="toggle-knob" />
          </button>
          <a className="header-cta" href="#contact">
            Let’s connect
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow-left" aria-hidden="true" />
        <div className="hero-glow hero-glow-right" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Digital product engineering</p>
          <h1 className="hero-title" id="hero-title">
            <span className="title-line">
              <span>Software</span> <em>built</em>
            </span>
            <span className="title-line">
              <em>around</em> <span>your business.</span>
            </span>
          </h1>
          <p className="hero-copy">
            Thoughtful software for the work your business needs to do, from the
            first product idea to the systems you rely on every day.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Discuss your project <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="#approach">
              Explore our approach
            </a>
          </div>
        </div>
        <div className="showcase">
          <StudioPreview />
          <ToolStrip />
        </div>
        <IntroShowcase />
        <SpiralCarousel />
        <ServicesSection />
        <PlatformSection />
        <PricingSection />
        <ApproachSection />
        <TestimonialsSection />
        <FaqSection />
        <SiteFooter />
      </section>
    </main>
  );
}
