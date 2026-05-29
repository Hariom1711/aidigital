import { useState } from 'react';
import FadeIn from './FadeIn';

const items = [
  { cat: 'realestate', wide: true, bg: 'from-blue-100 to-blue-200', emoji: '🏢', sector: 'Real Estate · Mumbai', title: 'LuxeHomes — 3× Lead Surge in 60 Days', desc: 'Full funnel: AI walkthrough videos + Meta lead ads + WhatsApp drip sequences. 312 qualified leads in 2 months.', tags: ['Meta Ads', 'AI Video', 'WhatsApp', 'Landing Page'], result: '↑ 312 Qualified Leads in 60 Days' },
  { cat: 'education', wide: false, bg: 'from-sky-100 to-sky-200', emoji: '🎓', sector: 'Education · Pune', title: 'EduEdge Academy — 5× Admissions', desc: 'Google Ads + animated explainer videos. 40% reduction in cost-per-enrollment.', tags: ['Google Ads', 'Animation', 'SEO'], result: '↑ 5× Admission Growth' },
  { cat: 'healthcare', wide: false, bg: 'from-cyan-100 to-cyan-200', emoji: '🏥', sector: 'Healthcare · Nashik', title: 'CareFirst Clinic — 280% OPD Growth', desc: 'Local SEO + patient-focused AI explainer videos. Appointment bookings up 280% in 3 months.', tags: ['Local SEO', 'AI Video', 'Meta Ads'], result: '↑ 280% More Appointments' },
  { cat: 'ecom', wide: false, bg: 'from-emerald-50 to-emerald-100', emoji: '🛍️', sector: 'E-Commerce · Pan India', title: 'StyleNow — 4.2× ROAS on Meta', desc: 'Full creative strategy, product video ads, and retargeting funnels. ₹8L ad spend managed.', tags: ['Meta Ads', 'Creatives', 'Retargeting'], result: '↑ 4.2× Return on Ad Spend' },
  { cat: 'education', wide: false, bg: 'from-purple-50 to-purple-100', emoji: '🎭', sector: 'Entertainment · Online', title: 'KidsWorld — Cartoon Series Launch', desc: '10-episode AI cartoon series + social campaign. 2.5 lakh organic views in the first month.', tags: ['AI Video', 'Cartoon', 'Social Media'], result: '↑ 2.5L Organic Views Month 1' },
];

const cats: Record<string, string> = { all: 'All', realestate: 'Real Estate', healthcare: 'Healthcare', education: 'Education', ecom: 'E-Commerce' };

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? items : items.filter((p) => p.cat === filter);

  return (
    <section className="py-20 px-[5%] bg-slate-50/60" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[var(--color-blue-700)] mb-3">
              <span className="w-5 h-0.5 bg-[var(--color-blue-700)] rounded-full" />
              Our Work
            </div>
            <h2 className="font-[var(--font-heading)] text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-[var(--color-text-dark)]">
              Results We're <span className="gradient-text">Proud Of</span>
            </h2>
          </FadeIn>
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(cats).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-full text-[0.8rem] font-medium border cursor-pointer transition-all duration-300 ${
                  filter === key
                    ? 'bg-[var(--color-blue-700)] border-[var(--color-blue-700)] text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-[var(--color-blue-700)] hover:text-[var(--color-blue-700)]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className={`group border border-slate-200/80 rounded-2xl overflow-hidden bg-white hover:shadow-[0_14px_44px_rgba(15,76,138,0.09)] hover:-translate-y-1 transition-all duration-400 cursor-pointer ${
                p.wide ? 'lg:col-span-2' : ''
              }`}
              style={{ animation: `fadeSlideIn 0.5s ease ${i * 0.06}s both` }}
            >
              <div className={`aspect-video bg-gradient-to-br ${p.bg} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-4xl relative z-10 group-hover:scale-125 transition-transform duration-500">{p.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-[0.7rem] font-bold tracking-[0.08em] uppercase text-[var(--color-blue-700)] mb-1">{p.sector}</div>
                <div className="font-[var(--font-heading)] font-bold text-[0.95rem] text-[var(--color-text-dark)] mb-1.5 tracking-[-0.02em]">{p.title}</div>
                <div className="text-[0.82rem] text-slate-500 leading-relaxed">{p.desc}</div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tags.map((t) => (
                    <span key={t} className="bg-slate-100 text-slate-500 text-[0.68rem] font-medium px-2 py-0.5 rounded-md">{t}</span>
                  ))}
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[0.73rem] font-bold px-3 py-1 rounded-full">
                  {p.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
