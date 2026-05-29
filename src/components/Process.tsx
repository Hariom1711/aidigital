import FadeIn from './FadeIn';

const steps = [
  { n: '01', icon: '🔎', title: 'Discovery Call', desc: 'We audit your presence, understand your goals and audience, then build a tailored growth plan.' },
  { n: '02', icon: '🎨', title: 'Build & Create', desc: 'Our team builds creatives, landing pages, and ad campaigns — before spending a single rupee.' },
  { n: '03', icon: '🚀', title: 'Launch & Optimize', desc: 'Campaigns go live across all channels. We monitor daily, A/B test, and scale what works fast.' },
  { n: '04', icon: '📊', title: 'Report & Grow', desc: "Weekly dashboards show exactly what's performing — CAC, ROAS, leads, and growth metrics." },
];

export default function Process() {
  return (
    <section className="py-20 px-[5%]" id="process">
      <div className="max-w-6xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[var(--color-blue-700)] mb-3 justify-center">
            <span className="w-5 h-0.5 bg-[var(--color-blue-700)] rounded-full" />
            How It Works
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-[var(--color-text-dark)]">
            From Strategy to <span className="gradient-text">Real Results</span>
          </h2>
        </FadeIn>

        <div className="relative mt-14">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[var(--color-blue-200)] via-[var(--color-blue-700)] to-[var(--color-blue-200)]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="text-center px-2 group">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-[var(--color-blue-700)] flex flex-col items-center justify-center shadow-[0_4px_16px_rgba(26,109,204,0.12)] group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(26,109,204,0.2)] transition-all duration-300">
                      <span className="text-[0.55rem] font-[var(--font-heading)] font-extrabold text-[var(--color-blue-500)] tracking-[0.06em] uppercase leading-none">{s.n}</span>
                      <span className="text-lg leading-none">{s.icon}</span>
                    </div>
                  </div>
                  <h3 className="font-[var(--font-heading)] font-bold text-[0.92rem] text-[var(--color-text-dark)] mb-2">{s.title}</h3>
                  <p className="text-[0.82rem] text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
