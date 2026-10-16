import FooterHands from "@/components/footer-hands";
import FooterWordmark from "@/components/footer-wordmark";

const groups = [
  { title: "Company", links: [["About", "#approach"], ["Work", "#works"], ["Privacy Policy", "#contact"], ["Terms and conditions", "#contact"]] },
  { title: "Services", links: [["Crafted Websites", "#services"], ["Website Redesign", "#services"], ["eCommerce Design", "#services"], ["CMS & Dynamic Sites", "#services"]] },
  { title: "Resources", links: [["Blog", "#home"], ["Templates", "#home"], ["Cookies", "#contact"], ["FAQs", "#faqs"]] },
];

const socialLinks = [
  { name: "Instagram", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg> },
  { name: "LinkedIn", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 2H3.55A1.53 1.53 0 0 0 2 3.51v16.98A1.53 1.53 0 0 0 3.55 22h16.9A1.53 1.53 0 0 0 22 20.49V3.51A1.53 1.53 0 0 0 20.45 2ZM8.02 18.34H5.07V9.5h2.95v8.84ZM6.54 8.29a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.4 10.05h-2.94v-4.3c0-1.03-.02-2.35-1.43-2.35-1.44 0-1.66 1.12-1.66 2.28v4.37H9.98V9.5h2.82v1.21h.04a3.1 3.1 0 0 1 2.78-1.53c2.98 0 3.53 1.96 3.53 4.5v4.66Z"/></svg> },
  { name: "Twitter", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 5.9a7.6 7.6 0 0 1-2.2.6 3.85 3.85 0 0 0 1.69-2.12c-.74.44-1.56.76-2.43.93a3.83 3.83 0 0 0-6.62 2.62c0 .3.03.59.1.87A10.87 10.87 0 0 1 4.15 4.8a3.83 3.83 0 0 0 1.19 5.11c-.63-.02-1.22-.19-1.74-.48v.05a3.83 3.83 0 0 0 3.07 3.75c-.3.09-.63.13-.97.13-.24 0-.47-.02-.69-.07a3.83 3.83 0 0 0 3.58 2.66A7.69 7.69 0 0 1 2.9 17.5a10.84 10.84 0 0 0 5.87 1.72c7.04 0 10.9-5.84 10.9-10.9l-.01-.5a7.77 7.77 0 0 0 1.84-1.92Z"/></svg> },
  { name: "WhatsApp", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg> },
];

function Arrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>; }

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-content">
        <ul className="footer-socials">
          {socialLinks.map((item) => <li key={item.name}><a href="#home" aria-label={item.name}>{item.icon}<span>{item.name}</span><span className="footer-social-arrow"><Arrow /></span></a></li>)}
        </ul>
        <div className="footer-link-grid">
          {groups.map((group) => <div className="footer-link-group" key={group.title}><h3>{group.title}</h3><ul>{group.links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul></div>)}
          <div className="footer-link-group"><h3>Contact</h3><ul><li><a href="mailto:hello@northstarsoftware.example">Email: hello@northstarsoftware.example</a></li><li><span>Phone: Available on request</span></li><li><span>Based in India</span></li><li><span>Serving the US, UK &amp; worldwide</span></li></ul></div>
        </div>
      </div>
      <FooterHands />
      <FooterWordmark />
      <p className="footer-copyright">© 2026 Northstar Software. All rights reserved.</p>
    </footer>
  );
}
