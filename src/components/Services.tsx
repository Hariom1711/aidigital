import FadeIn from './FadeIn';

const services = [
  { icon: '🌐', title: 'Website Design & Development', desc: 'High-converting websites, e-commerce stores, and portals — built for speed, SEO, and user experience.', tags: ['Static Sites', 'E-Commerce', 'Portals', 'Landing Pages'] },
  { icon: '🎯', title: 'Meta & Google Ads', desc: 'Performance-driven paid campaigns with smart bidding and continuous optimization for maximum ROAS.', tags: ['Facebook Ads', 'Instagram Ads', 'Google Search', 'Shopping Ads'] },
  { icon: '📱', title: 'Social Media Marketing', desc: 'End-to-end social strategy, content creation, and campaign management across every major platform.', tags: ['Facebook', 'Instagram', 'LinkedIn', 'X / Twitter'] },
  { icon: '🔍', title: 'Search Engine Optimization', desc: 'Rank higher, get found faster. Technical SEO, local SEO, and content strategies that compound over time.', tags: ['On-Page SEO', 'Local SEO', 'E-Commerce SEO'] },
  { icon: '✉️', title: 'WhatsApp, SMS & RCS', desc: 'Direct messaging campaigns that cut through noise — bulk WhatsApp, SMS, and rich messaging for high open rates.', tags: ['WhatsApp API', 'Bulk SMS', 'RCS'] },
  { icon: '🎨', title: 'Graphic Design & Hosting', desc: 'Scroll-stopping visuals for ads, social posts, and brand identity — plus fast, reliable hosting services.', tags: ['Social Creatives', 'Ad Banners', 'Hosting'] },
];

const sectors = ['🏠 Real Estate', '🏥 Healthcare', '🎓 Education', '🎬 Animation', '🛒 E-Commerce', '🏢 Corporate'];

export default function Services() {
  return (
    <section className="py-20 px-[5%]" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[var(--color-blue-700)] mb-3">
              <span className="w-5 h-0.5 bg-[var(--color-blue-700)] rounded-full" />
              Our Core Services
            </div>
            <h2 className="font-[var(--font-heading)] text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-[var(--color-text-dark)]">
              Everything You Need to <span className="gradient-text">Grow Online</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a href="#contact" className="group inline-flex items-center gap-2 border-2 border-[var(--color-blue-700)]/25 text-[var(--color-blue-700)] px-5 py-2.5 rounded-full text-[0.88rem] font-semibold no-underline hover:bg-blue-50 transition-all duration-300 whitespace-nowrap">
              Discuss Your Project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="group relative bg-white border border-slate-200/80 rounded-2xl p-6 h-full hover:border-[var(--color-blue-200)] hover:shadow-[0_14px_44px_rgba(15,76,138,0.09)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-blue-700)] to-[var(--color-blue-500)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-[var(--color-blue-200)] flex items-center justify-center text-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-[0.95rem] text-[var(--color-text-dark)] mb-2 tracking-[-0.02em]">{s.title}</h3>
                <p className="text-[0.84rem] text-slate-500 leading-[1.7] mb-3">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="bg-blue-50 text-[var(--color-blue-700)] text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full border border-[var(--color-blue-200)]">{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* AI Video Banner */}
        <FadeIn delay={0.15} className="mt-8">
          <div className="relative bg-gradient-to-br from-[var(--color-blue-800)] via-[var(--color-blue-700)] to-[var(--color-blue-600)] rounded-3xl p-7 md:p-10 grid md:grid-cols-2 gap-8 items-center overflow-hidden">
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute right-16 -bottom-16 w-48 h-48 rounded-full bg-white/[0.03] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-white/55 text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-3">
                <span className="w-5 h-0.5 bg-white/40 rounded-full" />
                New Service
              </div>
              <h3 className="font-[var(--font-heading)] text-[clamp(1.4rem,3vw,1.9rem)] font-extrabold text-white tracking-[-0.04em] leading-[1.15] mb-3">
                AI-Generated Video Production for Every Industry
              </h3>
              <p className="text-white/65 text-[0.92rem] leading-[1.7] mb-5 max-w-lg">
                We create stunning AI-powered promotional and explainer videos tailored to your sector — real estate walkthroughs, healthcare explainers, educational content, and cartoon-style brand videos.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {sectors.map((p) => (
                  <span key={p} className="bg-white/10 border border-white/20 text-white text-[0.78rem] font-semibold px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors cursor-default">{p}</span>
                ))}
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-[var(--color-blue-800)] px-6 py-3 rounded-full font-[var(--font-heading)] font-bold text-[0.88rem] no-underline shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300">
                Get a Sample Video
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* Video mockup */}
            <div className="relative z-10 bg-white/[0.07] backdrop-blur-sm border border-white/15 rounded-2xl p-5">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="relative aspect-video bg-white/[0.05] border border-white/[0.08] rounded-xl flex items-center justify-center mb-3 overflow-hidden cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-blue-800)]/20 to-transparent" />
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[var(--color-blue-800)] text-xl shadow-[0_4px_16px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-300">
                  ▶
                </div>
                <div className="absolute top-3 right-3 bg-[var(--color-blue-800)]/90 text-white text-[0.62rem] font-bold px-2.5 py-1 rounded-md tracking-[0.06em] uppercase">
                  AI Generated
                </div>
                <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm text-white text-[0.62rem] font-semibold px-2.5 py-1 rounded-md">
                  Real Estate Walkthrough
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[0.72rem] text-white/45 font-mono">0:23</span>
                <div className="flex-1 h-1 bg-white/15 rounded-full overflow-hidden">
                  <div className="h-full w-[38%] bg-white/65 rounded-full" />
                </div>
                <span className="text-[0.72rem] text-white/45 font-mono">1:45</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
