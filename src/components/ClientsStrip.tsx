const items = ['Real Estate', 'Healthcare', 'Education', 'E-Commerce', 'Startups', 'Manufacturing', 'Logistics', 'Automotive'];

export default function ClientsStrip() {
  return (
    <div className="bg-white border-y border-slate-100 py-5 overflow-hidden">
      <div className="flex items-center gap-8 px-[5%]">
        <span className="text-[0.72rem] font-semibold text-slate-400 uppercase tracking-[0.08em] whitespace-nowrap shrink-0">
          Trusted by
        </span>
        <div className="overflow-hidden flex-1 relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...items, ...items].map((it, i) => (
              <span key={i} className="inline-flex items-center gap-2 mx-6 text-slate-400 font-[var(--font-heading)] font-bold text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-blue-200)]" />
                {it}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
