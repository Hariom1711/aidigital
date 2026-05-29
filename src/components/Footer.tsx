const serviceLinks = ['Website Development', 'Meta & Google Ads', 'AI Video Production', 'Social Media Marketing', 'SEO & Content', 'WhatsApp Marketing', 'Graphic Design'];
const industryLinks = ['Real Estate', 'Healthcare', 'Education', 'E-Commerce', 'Startups', 'Manufacturing'];
const companyLinks = ['Portfolio', 'Client Results', 'How It Works', 'Contact Us', 'Privacy Policy', 'Terms of Service'];
const socials = [
  { icon: '📸', label: 'Instagram' },
  { icon: '📘', label: 'Facebook' },
  { icon: '💼', label: 'LinkedIn' },
  { icon: '▶️', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white/70 pt-16 pb-8 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <a href="#" className="inline-flex items-center gap-1 no-underline mb-4">
              <span className="font-[var(--font-heading)] text-[1.25rem] font-extrabold text-white tracking-tight">AI</span>
              <span className="font-[var(--font-heading)] text-[1.25rem] font-extrabold text-[var(--color-blue-500)] tracking-tight">Digital</span>
            </a>
            <p className="text-[0.82rem] leading-[1.75] text-white/35 max-w-[260px] mb-5">
              Your one-stop growth partner for digital marketing, AI video production, and performance advertising. We turn clicks into customers.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/35 text-[0.82rem] no-underline hover:border-[var(--color-blue-500)] hover:text-[var(--color-blue-500)] hover:bg-[var(--color-blue-500)]/10 hover:-translate-y-0.5 transition-all duration-200"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Services" links={serviceLinks} href="#services" />
          <FooterCol title="Industries" links={industryLinks} href="#industries" />
          <FooterCol title="Company" links={companyLinks} href="#" />
        </div>

        <div className="border-t border-white/[0.07] pt-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-[0.78rem] text-white/25">
            © 2025 AI Digital. All rights reserved. Crafted with ♥ in Pune, India.
          </p>
          <a href="tel:+919096090701" className="text-[var(--color-blue-500)]/60 no-underline text-[0.78rem] hover:text-[var(--color-blue-500)] transition-colors">
            📞 +91 90960 90701
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, href }: { title: string; links: string[]; href: string }) {
  return (
    <div>
      <h5 className="font-[var(--font-heading)] text-[0.72rem] font-bold tracking-[0.1em] uppercase text-white/30 mb-4">{title}</h5>
      {links.map((link) => (
        <a key={link} href={href} className="block text-white/40 no-underline text-[0.85rem] mb-2 hover:text-[var(--color-blue-500)] transition-colors duration-200">{link}</a>
      ))}
    </div>
  );
}
