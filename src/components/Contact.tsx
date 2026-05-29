import { useState, type FormEvent } from 'react';
import FadeIn from './FadeIn';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-[5%]" id="contact">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[var(--color-blue-700)] mb-3">
            <span className="w-5 h-0.5 bg-[var(--color-blue-700)] rounded-full" />
            Get In Touch
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-[var(--color-text-dark)] mb-2">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-slate-500 text-base max-w-[540px] mb-8">
            Tell us about your project and we'll respond within one business day.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-start">
          {/* Left */}
          <FadeIn delay={0.15} direction="right">
            <div>
              <h3 className="font-[var(--font-heading)] text-[1.3rem] font-extrabold text-[var(--color-text-dark)] mb-3 tracking-[-0.03em]">Talk to Our Team</h3>
              <p className="text-slate-500 text-[0.92rem] leading-[1.75] mb-8">
                Whether you need a high-converting website, a campaign that delivers ROI, or an AI video to stand out — we're here to make it happen.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: '📞', primary: '+91 90960 90701', secondary: 'Mon–Sat, 9am–7pm IST' },
                  { icon: '📧', primary: 'hello@aidigital.biz', secondary: 'We reply within 1 business day' },
                  { icon: '📍', primary: 'Pune, Maharashtra', secondary: 'Serving clients across India' },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-[var(--color-blue-200)] flex items-center justify-center text-base shrink-0 group-hover:bg-[var(--color-blue-700)] group-hover:border-transparent group-hover:text-white transition-all duration-300">
                      <span className="group-hover:brightness-200 group-hover:grayscale transition-all">{d.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[0.88rem] text-[var(--color-text-dark)]">{d.primary}</div>
                      <div className="text-[0.78rem] text-slate-400">{d.secondary}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="p-4 rounded-xl bg-blue-50 border border-[var(--color-blue-200)]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {['RK', 'PM', 'DS'].map((init, i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-blue-700)] to-[var(--color-blue-500)] flex items-center justify-center text-white text-[0.6rem] font-bold border-2 border-white">
                        {init}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-[0.8rem] text-slate-600">
                  Trusted by <strong className="text-[var(--color-text-dark)]">50+ businesses</strong> across India with <strong className="text-[var(--color-text-dark)]">4.9★</strong> average rating.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right - Form */}
          <FadeIn delay={0.25} direction="left">
            <div className="bg-white border border-slate-200 rounded-3xl p-7 md:p-8 shadow-[0_6px_24px_rgba(15,76,138,0.06)]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-18 h-18 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
                  <h3 className="font-[var(--font-heading)] text-xl font-bold text-[var(--color-text-dark)] mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto">Thank you for reaching out. We'll get back to you within 1 business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <InputField label="First Name" placeholder="Rahul" required />
                    <InputField label="Last Name" placeholder="Sharma" required />
                  </div>
                  <InputField label="Email Address" type="email" placeholder="rahul@company.com" required />
                  <InputField label="Phone Number" type="tel" placeholder="+91 98765 43210" />
                  <div className="mb-4">
                    <label className="block text-[0.76rem] font-semibold tracking-[0.05em] uppercase text-slate-500 mb-1.5">Service of Interest</label>
                    <select
                      required
                      defaultValue=""
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[0.88rem] text-[var(--color-text-dark)] outline-none focus:border-[var(--color-blue-700)] focus:ring-2 focus:ring-[var(--color-blue-700)]/10 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service…</option>
                      <option>Website Design &amp; Development</option>
                      <option>Meta Ads (Facebook / Instagram)</option>
                      <option>Google Ads (Search / Display)</option>
                      <option>Social Media Marketing</option>
                      <option>AI Video Production</option>
                      <option>SEO &amp; Content Marketing</option>
                      <option>WhatsApp / SMS Marketing</option>
                      <option>Graphic Design &amp; Creatives</option>
                      <option>Full Digital Marketing Package</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="block text-[0.76rem] font-semibold tracking-[0.05em] uppercase text-slate-500 mb-1.5">Tell Us About Your Project</label>
                    <textarea
                      placeholder="What are your goals? Budget? Timeline?…"
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[0.88rem] text-[var(--color-text-dark)] outline-none focus:border-[var(--color-blue-700)] focus:ring-2 focus:ring-[var(--color-blue-700)]/10 focus:bg-white transition-all duration-200 resize-y min-h-[100px] placeholder:text-slate-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[var(--color-blue-700)] text-white border-none rounded-full py-3.5 font-[var(--font-heading)] font-bold text-[0.95rem] cursor-pointer shadow-[0_4px_16px_rgba(26,109,204,0.3)] hover:bg-[var(--color-blue-800)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,109,204,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                  <p className="text-center text-[0.72rem] text-slate-400 mt-3">🔒 Your data is secure. We never share your information.</p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function InputField({ label, type = 'text', placeholder, required }: { label: string; type?: string; placeholder: string; required?: boolean }) {
  return (
    <div className="mb-4">
      <label className="block text-[0.76rem] font-semibold tracking-[0.05em] uppercase text-slate-500 mb-1.5">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[0.88rem] text-[var(--color-text-dark)] outline-none focus:border-[var(--color-blue-700)] focus:ring-2 focus:ring-[var(--color-blue-700)]/10 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
      />
    </div>
  );
}
