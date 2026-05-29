import { useState, useEffect } from 'react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'How It Works', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[301]"
        style={{
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, #1a6dcc, #5ba4f0, #2e86de)',
          transition: 'width 0.1s linear',
        }}
      />

      <nav
        className={`fixed top-[3px] left-0 right-0 z-[200] flex items-center justify-between px-[5%] h-[72px] transition-all duration-500 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl shadow-[0_4px_30px_rgba(15,76,138,0.08)] border-b border-slate-200/60'
            : 'bg-white/60 backdrop-blur-md border-b border-transparent'
        }`}
        style={{ WebkitBackdropFilter: 'blur(16px)' }}
      >
        <a href="#" className="flex items-center gap-1 no-underline group">
          <span className="font-[var(--font-heading)] text-[1.35rem] font-extrabold tracking-tight text-[var(--color-text-dark)]">AI</span>
          <span className="font-[var(--font-heading)] text-[1.35rem] font-extrabold tracking-tight text-[var(--color-blue-700)]">Digital</span>
          <span className="w-2 h-2 rounded-full bg-[var(--color-blue-700)] group-hover:scale-150 transition-transform duration-300" />
        </a>

        <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-slate-500 no-underline text-[0.88rem] font-medium px-4 py-2 rounded-lg hover:text-[var(--color-blue-700)] hover:bg-blue-50 transition-all duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-[var(--color-blue-700)] text-white px-5 py-2.5 rounded-full font-[var(--font-heading)] font-semibold text-[0.85rem] no-underline shadow-[0_4px_14px_rgba(26,109,204,0.3)] hover:bg-[var(--color-blue-800)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(26,109,204,0.4)] transition-all duration-300"
        >
          Free Strategy Call <span className="text-xs">→</span>
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer z-[250]"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-slate-700 rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-slate-700 rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-slate-700 rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[190] bg-white flex flex-col items-center justify-center gap-6 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-text-dark)] no-underline hover:text-[var(--color-blue-700)] transition-all duration-300"
            style={{
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileOpen ? 1 : 0,
              transition: `all 0.4s ease ${i * 0.08}s`,
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-4 bg-[var(--color-blue-700)] text-white px-8 py-3 rounded-full font-[var(--font-heading)] font-bold text-lg no-underline shadow-lg"
          style={{
            transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: mobileOpen ? 1 : 0,
            transition: 'all 0.4s ease 0.5s',
          }}
        >
          Free Strategy Call →
        </a>
      </div>
    </>
  );
}
