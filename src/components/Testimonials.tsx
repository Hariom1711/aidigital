import FadeIn from './FadeIn';

const items = [
  { quote: '"AI Digital transformed our real estate lead generation. The AI walkthrough videos combined with Meta ads brought us more qualified leads in 60 days than we had in 6 months prior."', initials: 'RK', name: 'Rajesh Kulkarni', role: 'Director, LuxeHomes Realty · Mumbai' },
  { quote: '"Our admission numbers 5x\'d. Their team understood education marketing completely — the cartoon explainers they made for us went viral in our city. Highly recommended!"', initials: 'PM', name: 'Priya Mehta', role: 'Founder, EduEdge Academy · Pune' },
  { quote: '"From website to Google Ads to WhatsApp campaigns — AI Digital handles everything. Our clinic\'s patient footfall is up and we spend less per acquisition than ever before."', initials: 'DS', name: 'Dr. Deepak Sharma', role: 'CareFirst Multi-Specialty Clinic · Nashik' },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 px-[5%] bg-slate-50/60" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[var(--color-blue-700)] mb-3 justify-center">
            <span className="w-5 h-0.5 bg-[var(--color-blue-700)] rounded-full" />
            Client Results
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-[var(--color-text-dark)]">
            What Our Clients <span className="gradient-text">Say &amp; Achieve</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 text-left">
          {items.map((t, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="group bg-white border border-slate-200/80 rounded-2xl p-7 h-full hover:shadow-[0_10px_36px_rgba(15,76,138,0.07)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -top-3 -left-1 text-[5rem] font-serif text-blue-50 leading-none select-none pointer-events-none">&ldquo;</div>
                <div className="relative z-10">
                  <Stars />
                  <p className="text-[0.88rem] text-[var(--color-text-body)] leading-[1.75] mb-5 italic">{t.quote}</p>
                  <div className="h-px bg-slate-100 mb-4" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-blue-700)] to-[var(--color-blue-500)] flex items-center justify-center font-[var(--font-heading)] font-bold text-[0.8rem] text-white shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-[var(--font-heading)] font-bold text-[0.88rem] text-[var(--color-text-dark)]">{t.name}</div>
                      <div className="text-[0.75rem] text-slate-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
