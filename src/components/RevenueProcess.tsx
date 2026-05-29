import FadeIn from './FadeIn';

const steps = [
  { n: '01', title: 'Drive Website Traffic', items: ['SEO Services', 'Local SEO Services', 'E-Commerce SEO', 'Content Marketing'] },
  { n: '02', title: 'Powerful Ad Campaigns', items: ['PPC Management', 'Social Advertising', 'Programmatic Ads', 'Geofencing Ads'] },
  { n: '03', title: 'Collect & Analyze Data', items: ['Marketing Analytics', 'CRM Integration', 'Call Tracking', 'Lead Management'] },
  { n: '04', title: 'Improve & Convert', items: ['Website Design', 'CRO Services', 'Landing Page Design', 'Social Media Mgmt'] },
];

export default function RevenueProcess() {
  return (
    <section className="py-20 px-[5%] bg-slate-50/60" id="revenue">
      <div className="max-w-6xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[var(--color-blue-700)] mb-3 justify-center">
            <span className="w-5 h-0.5 bg-[var(--color-blue-700)] rounded-full" />
            How We Drive Revenue
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-[var(--color-text-dark)] mb-2">
            Our Proven Process to <span className="gradient-text">Maximize Your Growth</span>
          </h2>
          <p className="text-slate-500 text-base max-w-[540px] mx-auto">
            We combine traffic, ads, analytics, and conversion to drive measurable business growth.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 text-left">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group bg-white border border-slate-200/80 rounded-2xl p-6 h-full hover:border-[var(--color-blue-200)] hover:shadow-[0_10px_36px_rgba(15,76,138,0.07)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-2 -top-4 text-[4.5rem] font-[var(--font-heading)] font-extrabold text-slate-50 group-hover:text-blue-50 transition-colors pointer-events-none leading-none select-none">
                  {s.n}
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1 bg-blue-50 border border-[var(--color-blue-200)] text-[var(--color-blue-700)] text-[0.7rem] font-bold px-3 py-1 rounded-full tracking-[0.06em] uppercase mb-3">
                    Step {s.n}
                  </div>
                  <h4 className="font-[var(--font-heading)] font-bold text-[0.92rem] text-[var(--color-text-dark)] mb-3">{s.title}</h4>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[0.82rem] text-slate-500">
                        <span className="text-[var(--color-blue-700)] font-bold shrink-0 mt-px">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
