import useCountUp from '../hooks/useCountUp';
import useTypewriter from '../hooks/useTypewriter';
import FadeIn from './FadeIn';

function StatItem({ end, suffix, label, decimal }: { end: number; suffix: string; label: string; decimal?: boolean }) {
  const { count, ref } = useCountUp(decimal ? end * 10 : end, 2200);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-[var(--font-heading)] text-[2rem] sm:text-[2.2rem] font-extrabold text-[var(--color-text-dark)] leading-none tracking-tight">
        {decimal ? (count / 10).toFixed(1) : count}
        <span className="text-[var(--color-blue-700)]">{suffix}</span>
      </div>
      <div className="text-[0.72rem] text-slate-400 mt-1 font-medium tracking-[0.06em] uppercase">{label}</div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(['Reach', 'Engagement', 'Leads', 'Revenue'], 80, 2200);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-[var(--color-blue-200)] to-blue-50" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-blue-700) 1px, transparent 1px), linear-gradient(90deg, var(--color-blue-700) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute right-[8%] top-[20%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(26,109,204,0.08)_0%,transparent_70%)] animate-float-slow pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[15%] w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(91,164,240,0.06)_0%,transparent_65%)] animate-float-medium pointer-events-none" />

      {/* Decorative shapes */}
      <div className="hidden lg:block absolute right-[12%] top-[22%] w-14 h-14 rounded-2xl border-2 border-[var(--color-blue-200)] opacity-30 animate-spin-slow" />
      <div className="hidden lg:block absolute right-[28%] top-[32%] w-3 h-3 rounded-full bg-[var(--color-blue-700)] opacity-20 animate-float-medium" />
      <div className="hidden lg:block absolute left-[12%] top-[25%] w-2.5 h-2.5 rounded-full bg-[var(--color-blue-500)] opacity-25 animate-float-slow" />
      <div className="hidden lg:block absolute right-[38%] bottom-[30%] w-6 h-6 rounded-md border border-[var(--color-blue-200)] opacity-20 rotate-45 animate-spin-slow" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-[5%] pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-[660px]">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2.5 bg-white/70 backdrop-blur-sm border border-[var(--color-blue-200)] text-[var(--color-blue-700)] px-4 py-2 rounded-full text-[0.78rem] font-semibold tracking-[0.05em] uppercase mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-blue-700)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-blue-700)]" />
              </span>
              AI-Powered Digital Marketing
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-[var(--font-heading)] text-[clamp(2.2rem,5.5vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-[var(--color-text-dark)] mb-5">
              Are You Looking for More
              <br />
              <span className="gradient-text inline-block min-w-[180px]">
                {typed}
                <span className="inline-block w-[3px] h-[0.8em] bg-[var(--color-blue-700)] ml-0.5 align-middle" style={{ animation: 'pulse-dot 1s step-end infinite' }} />
              </span>
              <br />
              <span className="text-slate-400 font-bold">&amp; Business Growth?</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[1.05rem] text-slate-500 max-w-[500px] mb-8 leading-relaxed">
              AI Digital is your one-stop solution for all your marketing needs — from high-converting websites to AI video production, Meta &amp; Google ads, and social media campaigns.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex gap-3 flex-wrap mb-12">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 bg-[var(--color-blue-700)] text-white px-7 py-3.5 rounded-full font-[var(--font-heading)] font-bold text-[0.95rem] no-underline shadow-[0_4px_18px_rgba(26,109,204,0.35)] hover:shadow-[0_8px_28px_rgba(26,109,204,0.5)] hover:-translate-y-1 hover:bg-[var(--color-blue-800)] transition-all duration-300"
              >
                Get Free Strategy Call
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 border-2 border-[var(--color-blue-700)]/25 text-[var(--color-blue-700)] px-7 py-3.5 rounded-full text-[0.95rem] font-semibold no-underline hover:bg-blue-50 hover:border-[var(--color-blue-700)]/40 transition-all duration-300"
              >
                Explore Services
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="flex gap-6 sm:gap-8 flex-wrap items-center">
              <StatItem end={200} suffix="+" label="Campaigns Delivered" />
              <div className="hidden sm:block w-px h-10 bg-slate-200/80" />
              <StatItem end={48} suffix="×" label="Avg. ROAS" decimal />
              <div className="hidden sm:block w-px h-10 bg-slate-200/80" />
              <StatItem end={50} suffix="+" label="Happy Clients" />
              <div className="hidden sm:block w-px h-10 bg-slate-200/80" />
              <StatItem end={2} suffix="Cr+" label="Ad Spend Managed" />
            </div>
          </FadeIn>
        </div>

        {/* Dashboard card (desktop) */}
        <div className="hidden xl:block absolute right-[5%] top-1/2 -translate-y-1/2 rotate-3">
          <FadeIn delay={0.7} direction="left">
            <DashboardCard />
          </FadeIn>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

function DashboardCard() {
  return (
    <div className="relative">
      <div className="w-[310px] bg-white/85 backdrop-blur-md rounded-2xl border border-white/60 shadow-[0_20px_50px_rgba(15,76,138,0.12)] p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-blue-700)] to-[var(--color-blue-500)] flex items-center justify-center text-white text-sm">📊</div>
          <div>
            <div className="font-[var(--font-heading)] font-bold text-[0.82rem] text-[var(--color-text-dark)]">Campaign Analytics</div>
            <div className="text-[0.7rem] text-slate-400">Live Dashboard</div>
          </div>
        </div>
        <div className="space-y-3">
          <BarRow label="Impressions" value="2.4M" width="82%" color="from-[var(--color-blue-700)] to-[var(--color-blue-500)]" />
          <BarRow label="CTR" value="4.8%" width="68%" color="from-emerald-400 to-emerald-500" valueColor="text-emerald-600" />
          <BarRow label="Conversions" value="1,247" width="55%" color="from-amber-400 to-orange-400" />
        </div>
      </div>

      {/* Floating ROAS badge */}
      <div className="absolute -left-7 top-3 bg-white rounded-xl shadow-lg px-3 py-1.5 border border-slate-100 animate-float-slow">
        <div className="flex items-center gap-2">
          <span className="text-base">🚀</span>
          <div>
            <div className="text-[0.6rem] text-slate-400 font-medium">ROAS</div>
            <div className="text-sm font-bold text-emerald-600">+4.8×</div>
          </div>
        </div>
      </div>

      {/* Floating Leads badge */}
      <div className="absolute -right-5 bottom-6 bg-white rounded-xl shadow-lg px-3 py-1.5 border border-slate-100 animate-float-medium" style={{ animationDelay: '1.5s' }}>
        <div className="flex items-center gap-2">
          <span className="text-base">📈</span>
          <div>
            <div className="text-[0.6rem] text-slate-400 font-medium">Leads</div>
            <div className="text-sm font-bold text-[var(--color-blue-700)]">+312%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarRow({ label, value, width, color, valueColor = 'text-[var(--color-text-dark)]' }: { label: string; value: string; width: string; color: string; valueColor?: string }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-[0.72rem] text-slate-500">{label}</span>
        <span className={`text-[0.72rem] font-bold ${valueColor}`}>{value}</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${color} rounded-full`} style={{ width, transition: 'width 1.5s ease-out' }} />
      </div>
    </div>
  );
}
