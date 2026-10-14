const services = [
  { name: <>Crafted<br />Websites</>, label: "Crafted Websites", icon: "crafted-websites", href: "#contact" },
  { name: <>Website<br />Redesign</>, label: "Website Redesign", icon: "website-redesign", href: "#contact" },
  { name: <>eCommerce<br />Website Design</>, label: "eCommerce Website Design", icon: "ecommerce-website-design", href: "#contact" },
  { name: <>CMS &amp;<br />Dynamic Websites</>, label: "CMS & Dynamic Websites", icon: "cms-and-dynamic-websites", href: "#contact" },
  { name: <>Landing Pages<br />&amp; Microsites</>, label: "Landing Pages & Microsites", icon: "landing-pages-and-microsites", href: "#contact" },
  { name: <>Consistent<br />Identity</>, label: "Consistent Identity", icon: "consistent-identity", href: "#contact" },
  { name: <>Motion &amp;<br />Interaction Design</>, label: "Motion & Interaction Design", icon: "motion-and-interaction-design", href: "#contact" },
  { name: <>UX Centric<br />Strategy</>, label: "UX Centric Strategy", icon: "ux-centric-strategy", href: "#contact" },
  { name: <>Performance<br />Optimization</>, label: "Performance Optimization", icon: "performance-optimization", href: "#contact" },
  { name: <>Maintenance &amp;<br />Ongoing Support</>, label: "Maintenance & Ongoing Support", icon: "maintenance-and-ongoing-support", href: "#contact" },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-inner">
        <div className="services-heading-row">
          <h2 id="services-heading">Elevate your<br />digital footprint.</h2>
          <div className="services-actions">
            <a className="services-button services-button-primary" href="#services">View all services</a>
            <a className="services-button services-button-secondary" href="#contact">Start a project</a>
          </div>
        </div>
        <ul className="services-grid">
          {services.map((service) => (
            <li key={service.label}>
              <a className="service-card" href={service.href} aria-label={service.label}>
                <span className="service-card-shine" aria-hidden="true" />
                <span className="service-card-content">
                  <img className="service-card-icon" src={`/services/${service.icon}.svg`} alt="" />
                  <span className="service-card-label">{service.name}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
