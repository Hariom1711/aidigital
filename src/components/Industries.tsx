import FadeIn from './FadeIn';

const list = [
  { icon: '🏠', title: 'Real Estate', desc: 'Property listings, AI tours, lead funnels & targeted ads.' },
  { icon: '🏥', title: 'Healthcare', desc: 'Patient acquisition, local SEO, appointment systems.' },
  { icon: '🎓', title: 'Education', desc: 'Student acquisition, course pages, CRM integration.' },
  { icon: '🛒', title: 'E-Commerce', desc: 'Product ads, checkout optimization, conversion rate.' },
  { icon: '🚀', title: 'Startups', desc: 'Launch-ready funnels, growth playbooks, branding.' },
  { icon: '🏭', title: 'Manufacturing', desc: 'B2B portals, product catalogs, lead qualification.' },
  { icon: '🚚', title: 'Logistics', desc: 'Enquiry flows, dashboards, performance tracking.' },
  { icon: '🚗', title: 'Automotive', desc: 'Dealer sites, inventory UX, test-drive conversions.' },
  { icon: '🍽️', title: 'Food & Beverage', desc: 'Menu UX, online ordering, local visibility.' },
  { icon: '⚖️', title: 'Professional Services', desc: 'Lead gen, thought leadership, nurture funnels.' },
  { icon: '🌾', title: 'Agriculture', desc: 'Marketplace UX, stakeholder outreach, campaigns.' },
  { icon: '✨', title: 'Other Industries', desc: "Don't see your sector? We'll tailor a custom plan." },
];

export default function Industries() {
  return (
    <section className="py-20 px-[5%]" id="industries">
      <div className="max-w-6xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[var(--color-blue-700)] mb-3 justify-center">
            <span className="w-5 h-0.5 bg-[var(--color-blue-700)] rounded-full" />
            Industries We Serve
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-[var(--color-text-dark)] mb-2">
            Deep Expertise Across <span className="gradient-text">Every Sector</span>
          </h2>
          <p className="text-slate-500 text-base max-w-[540px] mx-auto">
            We partner with businesses across sectors to craft tailored websites, campaigns, and growth strategies.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 text-left">
          {list.map((ind, i) => (
            <FadeIn key={i} delay={i * 0.03}>
              <div className="group border border-slate-200/80 rounded-xl p-4 bg-white hover:border-[var(--color-blue-700)] hover:bg-blue-50 hover:shadow-md transition-all duration-300 cursor-default h-full">
                <span className="text-xl mb-2 block group-hover:scale-115 transition-transform duration-300">{ind.icon}</span>
                <h4 className="font-[var(--font-heading)] font-bold text-[0.88rem] text-[var(--color-text-dark)] mb-1">{ind.title}</h4>
                <p className="text-[0.76rem] text-slate-500 leading-snug">{ind.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
