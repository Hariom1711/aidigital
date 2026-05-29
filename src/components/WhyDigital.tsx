import FadeIn from './FadeIn';

const cards = [
  { icon: '🎯', title: 'Audience Reach', desc: 'Reach thousands of potential customers through search, social, and ads tailored to your audience.' },
  { icon: '📊', title: 'Targeted Ads', desc: 'Deliver personalized campaigns to users based on intent, behavior, and demographics.' },
  { icon: '📈', title: 'Measurable Results', desc: 'Track traffic, conversions, and ROI in real time. Optimize campaigns for consistent growth.' },
  { icon: '💰', title: 'Cost Effective', desc: 'Data-driven strategies that lower acquisition costs and increase customer lifetime value.' },
];

export default function WhyDigital() {
  return (
    <section className="py-20 px-[5%] bg-slate-50/60" id="why">
      <div className="max-w-6xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[var(--color-blue-700)] mb-3 justify-center">
            <span className="w-5 h-0.5 bg-[var(--color-blue-700)] rounded-full" />
            Why Digital Marketing
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-[var(--color-text-dark)] mb-2">
            Reach the Right Customers <span className="gradient-text">at the Right Time</span>
          </h2>
          <p className="text-slate-500 text-base max-w-[540px] mx-auto">
            Digital marketing helps you drive measurable growth, improve ROI, and make your brand stand out online.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {cards.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group text-center p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-[var(--color-blue-200)] hover:shadow-[0_12px_40px_rgba(15,76,138,0.07)] hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-13 h-13 rounded-xl bg-blue-50 border border-[var(--color-blue-200)] flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  {c.icon}
                </div>
                <h4 className="font-[var(--font-heading)] font-bold text-[0.95rem] text-[var(--color-text-dark)] mb-2">{c.title}</h4>
                <p className="text-[0.83rem] text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
