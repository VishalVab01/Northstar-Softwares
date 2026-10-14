const platforms = [
  { name: "Webflow", image: "/platforms/webflow.png", featured: true },
  { name: "WordPress", image: "/platforms/wordpress.png" },
  { name: "Wix", image: "/platforms/wix.png", wix: true },
  { name: "Framer", image: "/platforms/framer.png" },
  { name: "Hostinger", image: "/platforms/hostinger.png" },
  { name: "Squarespace", image: "/platforms/squarespace.png" },
  { name: "Shopify", image: "/platforms/shopify.png" },
  { name: "Figma", image: "/platforms/figma.png" },
];

export default function PlatformSection() {
  return (
    <section className="platform-section" id="platform-flexibility" aria-labelledby="platform-title">
      <div className="platform-copy">
        <video
          className="platform-starfield"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/platform-starfield.jpg"
          aria-hidden="true"
        >
          <source src="/platform-starfield.mp4" type="video/mp4" />
        </video>
        <div className="platform-copy-content">
          <h2 id="platform-title">Platform flexibility.<br />Design consistency.</h2>
          <p>No matter the platform, our design language stays consistent, refined, responsive, and built to perform.</p>
          <a className="platform-link" href="#works">See our work</a>
        </div>
      </div>
      <ul className="platform-grid" aria-label="Platforms and tools">
        {platforms.map((platform) => (
          <li className={`platform-tile${platform.featured ? " is-featured" : ""}`} key={platform.name}>
            <img className="platform-logo" src={platform.image} alt={platform.name} />
            {platform.wix && <img className="wix-partner-logo" src="/platforms/wix-partner.png" alt="Wix Legend Partner" />}
          </li>
        ))}
      </ul>
      <div className="service-marquee" aria-label="Website Design and Development, UI/UX Design, Brand Identity, Code Customization">
        <div className="service-marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="service-marquee-group" key={copy}>
              {["Website Design & Development", "UI/UX Design", "Brand Identity", "Code Customization"].map((service) => (
                <span className="service-marquee-item" key={service}>
                  <span>{service}</span><i>•</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
