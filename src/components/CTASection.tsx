import FadeIn from './FadeIn';

export default function CTASection() {
  return (
    <section className="relative py-20 px-[5%] text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-blue-800)] to-[var(--color-blue-700)]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-white/[0.02] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-white/55 text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-4 justify-center">
            <span className="w-5 h-0.5 bg-white/35 rounded-full" />
            Free Strategy Call
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-[-0.04em] leading-[1.1] mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-white/60 text-[1.02rem] max-w-lg mx-auto mb-8 leading-relaxed">
            We build websites and campaigns that increase traffic, generate qualified leads, and convert visitors into customers. Book a free 30-minute strategy call — no obligations.
          </p>
          <div className="flex flex-wrap gap-3 justify-center items-center mb-4">
            <a href="#contact" className="group inline-flex items-center gap-2 bg-white text-[var(--color-blue-800)] px-7 py-3.5 rounded-full font-[var(--font-heading)] font-bold text-[0.95rem] no-underline shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300">
              Schedule a Free Call
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="tel:+919096090701" className="inline-flex items-center gap-2 border-2 border-white/25 text-white px-7 py-3.5 rounded-full text-[0.95rem] font-semibold no-underline hover:bg-white/10 hover:border-white/45 transition-all duration-300">
              📞 Call +91 90960 90701
            </a>
          </div>
          <p className="text-white/30 text-[0.8rem]">Free strategy call · 30 minutes · Online · No obligations</p>
        </FadeIn>
      </div>
    </section>
  );
}
