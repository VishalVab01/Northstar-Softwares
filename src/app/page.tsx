import SiteFrame from "@/components/site-frame";
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

export default function HomePage() {
  return (
    <SiteFrame>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow-left" aria-hidden="true" />
        <div className="hero-glow hero-glow-right" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Digital product engineering</p>
          <h1 className="hero-title" id="hero-title">
            <span className="title-line"><span>Software</span> <em>built</em></span>
            <span className="title-line"><em>around</em> <span>your business.</span></span>
          </h1>
          <p className="hero-copy">
            Thoughtful software for the work your business needs to do, from the
            first product idea to the systems you rely on every day.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Discuss your project <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="#approach">Explore our approach</a>
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
    </SiteFrame>
  );
}
