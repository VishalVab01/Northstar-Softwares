const plans = [
  {
    name: "Business Website",
    price: "20,000",
    description: "The full presence — three core pages designed from the ground up, on a CMS you run yourself.",
    features: [
      "3 core pages, custom design",
      "CMS for your own updates",
      "Animation and interactions",
      "Basic SEO setup",
    ],
  },
  {
    name: "eCommerce Store",
    price: "50,000",
    description: "A complete store — catalogue, cart and checkout, with a dashboard you can actually run.",
    features: [
      "Product, cart and checkout pages",
      "Payment and shipping integration",
      "Store management dashboard",
      "Mobile-first shopping experience",
    ],
  },
  {
    name: "Custom Build",
    price: "1,00,000",
    description: "Larger platforms and long-running partnerships — scoped together before anything is quoted.",
    features: [
      "Discovery and scoping first",
      "Multi-collection CMS architecture",
      "Advanced motion and interaction",
      "Maintenance and support plans",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="pricing-section" id="pricing" aria-labelledby="pricing-heading">
      <div className="pricing-inner">
        <h2 id="pricing-heading">Pricing</h2>
        <div className="pricing-cards">
          {plans.map((plan) => (
            <article className="pricing-card" key={plan.name}>
              <span className="pricing-card-topline" aria-hidden="true" />
              <span className="pricing-card-lift" aria-hidden="true" />
              <span className="pricing-card-shine pricing-card-shine-a" aria-hidden="true" />
              <span className="pricing-card-shine pricing-card-shine-b" aria-hidden="true" />
              <div className="pricing-card-content">
                <p className="pricing-plan-name">{plan.name}</p>
                <div className="pricing-amount"><span>from</span><strong>₹{plan.price}</strong></div>
                <p className="pricing-description">{plan.description}</p>
                <ul className="pricing-features">
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <div className="pricing-card-actions">
                  <a className="pricing-start" href="#contact">Start a project</a>
                  <a className="pricing-details" href="#services">Details <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
