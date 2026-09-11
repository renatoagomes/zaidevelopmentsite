import { useEffect, useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { t, LOCALES, DEFAULT_LOCALE, detectLocale } from "./i18n";
import AgentFlow from "./AgentFlow";

const TURNSTILE_SITE_KEY = "0x4AAAAAACn4TuRMPoyZb75_";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkjwqgeb";
const CONTACT_EMAIL = "contact@zaidevelopment.com";
const LOCALE_STORAGE_KEY = "zai:locale";

const SECTIONS = {
  pillars: "pilares",
  caseStudy: "case-study",
  method: "metodologia",
  contact: "contato",
};

function scrollToSection(id) {
  return (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
}

/* ── Reveal on scroll ─────────────────────────────────────── */

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ── Primitives ───────────────────────────────────────────── */

function EyebrowTag({ children }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
      {children}
    </p>
  );
}

function SectionHeading({ tag, title, sub, className = "" }) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      <EyebrowTag>{tag}</EyebrowTag>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {sub && <p className="mt-5 text-lg leading-relaxed text-zinc-400">{sub}</p>}
    </Reveal>
  );
}

function Chip({ children }) {
  return (
    <span className="glass rounded-full px-3 py-1.5 font-mono text-xs text-zinc-300">
      {children}
    </span>
  );
}

function ArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/* ── Language selector ────────────────────────────────────── */

function LangSelector({ locale, setLocale }) {
  return (
    <div
      className="glass flex items-center gap-0.5 rounded-lg p-0.5"
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-md px-2.5 py-1 font-mono text-xs font-medium transition ${
            locale === l
              ? "bg-accent text-zinc-950"
              : "text-zinc-500 hover:text-zinc-200"
          }`}
        >
          {t(l).label}
        </button>
      ))}
    </div>
  );
}

/* ── Header ───────────────────────────────────────────────── */

function Header({ locale, setLocale }) {
  const tr = t(locale);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    [tr.nav.pillars, SECTIONS.pillars],
    [tr.nav.caseStudy, SECTIONS.caseStudy],
    [tr.nav.method, SECTIONS.method],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/[0.07] bg-ink/70 backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="font-mono text-[15px] font-bold tracking-tight text-white"
        >
          ZAI<span className="text-accent">.</span>Development
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={scrollToSection(id)}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSelector locale={locale} setLocale={setLocale} />
          <a
            href={`#${SECTIONS.contact}`}
            onClick={scrollToSection(SECTIONS.contact)}
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_-6px_var(--color-accent)] transition hover:bg-accent-hover hover:shadow-[0_0_32px_-4px_var(--color-accent)] sm:inline-block"
          >
            {tr.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */

function Hero({ locale }) {
  const tr = t(locale);

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-28 pb-24 lg:pt-32 lg:pb-32"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_45%_30%,#000,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-10">
        {/* ── Copy ── */}
        <div className="relative z-10 lg:pr-4">
          <Reveal className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-300">
              {tr.hero.tag}
            </span>
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-8 text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.028em] text-white sm:text-[3.3rem] lg:text-[3.6rem]"
          >
            {tr.hero.headline1}
            <br />
            <span className="text-gradient">{tr.hero.headline2}</span>
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mt-7 max-w-lg text-lg leading-relaxed text-zinc-400"
          >
            {tr.hero.sub}
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`#${SECTIONS.contact}`}
              onClick={scrollToSection(SECTIONS.contact)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-zinc-950 shadow-[0_0_36px_-8px_var(--color-accent)] transition hover:bg-accent-hover hover:shadow-[0_0_44px_-6px_var(--color-accent)]"
            >
              {tr.hero.ctaPrimary}
              <ArrowRight />
            </a>
            <a
              href={`#${SECTIONS.caseStudy}`}
              onClick={scrollToSection(SECTIONS.caseStudy)}
              className="glass glass-hover inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-base font-medium text-zinc-200"
            >
              {tr.hero.ctaSecondary}
            </a>
          </Reveal>

          <Reveal delay={320} className="mt-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-600">
              {tr.hero.chipsLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {tr.hero.chips.map((chip) => (
                <span
                  key={chip}
                  className="font-mono text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Live governance pipeline ── */}
        <Reveal delay={180} className="relative lg:-mr-6">
          <AgentFlow locale={locale} />
          <p className="mt-5 max-w-md text-center text-sm leading-relaxed text-zinc-600 lg:text-left">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              {tr.hero.flow.title}
            </span>
            <span className="mt-1.5 block">{tr.hero.flow.caption}</span>
          </p>
        </Reveal>

      </div>
    </section>
  );
}

/* ── Pillars ──────────────────────────────────────────────── */

/* One icon per engineering layer, drawn on the same 24px stroke grid
   as the hero pipeline so the two sections read as one system. */
function PillarIcon({ index }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    "aria-hidden": true,
  };

  if (index === 0)
    return (
      <svg {...common}>
        <path d="M12 2.8 4.6 6v6c0 4.5 3.1 8.7 7.4 10 4.3-1.3 7.4-5.5 7.4-10V6L12 2.8Z" />
        <path d="m9 12.1 2.1 2.1L15 10.3" />
      </svg>
    );

  if (index === 1)
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5.6" rx="7.2" ry="2.8" />
        <path d="M4.8 5.6v5.8c0 1.5 3.2 2.8 7.2 2.8s7.2-1.3 7.2-2.8V5.6" />
        <path d="M4.8 11.4v5.8c0 1.5 3.2 2.8 7.2 2.8 1.2 0 2.4-.1 3.4-.3" />
        <circle cx="18.4" cy="17.4" r="2.6" />
        <path d="m20.4 19.4 1.4 1.4" />
      </svg>
    );

  if (index === 2)
    return (
      <svg {...common}>
        <circle cx="4.8" cy="12" r="2.3" />
        <circle cx="19.2" cy="5.4" r="2.3" />
        <circle cx="19.2" cy="18.6" r="2.3" />
        <circle cx="12" cy="12" r="2.3" />
        <path d="M7.1 12h2.6M14.3 10.9l2.8-4.3M14.3 13.1l2.8 4.3" />
      </svg>
    );

  return (
    <svg {...common}>
      <path d="M7 18.5h9.8a3.7 3.7 0 0 0 .5-7.4 5.6 5.6 0 0 0-10.8-1.5A3.9 3.9 0 0 0 7 18.5Z" />
      <path d="M9.6 21.4h6.2M12.7 18.6v2.8" />
    </svg>
  );
}

function Pillars({ locale }) {
  const tr = t(locale);

  return (
    <section id={SECTIONS.pillars} className="relative border-t border-hairline px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-[-12%] top-1/4 h-[440px] w-[540px] rounded-full bg-accent/[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-[-10%] h-[400px] w-[500px] rounded-full bg-cyan/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading tag={tr.pillars.tag} title={tr.pillars.title} sub={tr.pillars.sub} />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {tr.pillars.items.map((item, i) => (
            <Reveal
              key={item.index}
              delay={i * 70}
              className="glass glass-hover rim-glow group relative overflow-hidden rounded-2xl p-8 sm:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="glass flex h-11 w-11 items-center justify-center rounded-xl text-accent transition-colors duration-500 group-hover:text-cyan">
                  <PillarIcon index={i} />
                </span>
                <span className="font-mono text-xs text-zinc-600 transition-colors duration-500 group-hover:text-zinc-500">
                  {item.index}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">{item.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.bullets.map((b) => (
                  <span
                    key={b}
                    className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] leading-tight text-zinc-400 transition-colors duration-500 group-hover:border-accent/25 group-hover:text-zinc-300"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Case study ───────────────────────────────────────────── */

function FlowDiagram({ label, nodes }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-600">
        {label}
      </p>
      <div className="-mx-2 mt-4 overflow-x-auto px-2 pb-2">
        <div className="flex min-w-max items-center gap-2">
          {nodes.map((node, i) => (
            <div key={node} className="flex items-center gap-2">
              <span className="glass whitespace-nowrap rounded-lg px-3.5 py-2 font-mono text-xs text-zinc-200">
                {node}
              </span>
              {i < nodes.length - 1 && (
                <span className="font-mono text-xs text-cyan/70" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseStudy({ locale }) {
  const tr = t(locale);
  const cs = tr.caseStudy;

  return (
    <section id={SECTIONS.caseStudy} className="relative border-t border-hairline px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tag={cs.tag} title={cs.title} />

        <Reveal className="glass rim-glow is-lit relative mt-12 overflow-hidden rounded-2xl">
          {/* Depth without raster: layered light and a hairline canvas grid */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_15%_0%,#000,transparent)]" />
            <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-accent/12 blur-[130px]" />
            <div className="absolute -bottom-32 -right-20 h-96 w-[26rem] rounded-full bg-cyan/10 blur-[140px]" />
          </div>

          <div className="relative p-8 sm:p-10 lg:p-14">
            {/* Client header */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-xs font-medium text-accent">
                {cs.client}
              </span>
              <span className="text-sm text-zinc-500">{cs.clientDesc}</span>
            </div>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {cs.lead}
            </p>

            {/* Challenge */}
            <div className="mt-12 border-l-2 border-accent/40 pl-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                {cs.challengeLabel}
              </p>
              <p className="mt-3 max-w-3xl leading-relaxed text-zinc-400">{cs.challenge}</p>
            </div>

            {/* Architecture */}
            <div className="mt-14">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                {cs.architectureLabel}
              </p>
              <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {cs.architecture.map((a, i) => (
                  <div key={a.title}>
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs text-accent/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="text-[15px] font-semibold text-white">{a.title}</h4>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow */}
            <div className="mt-14 border-t border-white/[0.07] pt-10">
              <FlowDiagram label={cs.flowLabel} nodes={cs.flow} />
            </div>

            {/* Impact */}
            <div className="mt-14">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                {cs.impactLabel}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cs.impact.map((im) => (
                  <div key={im.title} className="glass rounded-xl p-6">
                    <h4 className="text-[15px] font-semibold text-accent">{im.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{im.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="mt-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-600">
                {cs.stackLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cs.stack.map((x) => (
                  <Chip key={x}>{x}</Chip>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Method ───────────────────────────────────────────────── */

function Method({ locale }) {
  const tr = t(locale);

  return (
    <section id={SECTIONS.method} className="border-t border-hairline px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tag={tr.method.tag} title={tr.method.title} sub={tr.method.sub} />

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[13px] hidden h-px bg-gradient-to-r from-accent/60 via-cyan/30 to-transparent lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {tr.method.steps.map((step, i) => (
              <Reveal key={step.index} delay={i * 90} className="relative">
                <div className="flex items-center gap-3">
                  <span className="relative z-10 flex h-[26px] w-[26px] items-center justify-center rounded-full border border-accent/40 bg-ink font-mono text-[10px] font-bold text-accent shadow-[0_0_18px_-4px_var(--color-accent)]">
                    {step.index}
                  </span>
                  <span className="h-px flex-1 bg-hairline lg:hidden" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {step.outputs.map((o) => (
                    <li key={o} className="font-mono text-xs text-zinc-500">
                      <span className="text-accent/60">└</span> {o}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Contact ──────────────────────────────────────────────── */

const inputClass =
  "w-full rounded-lg border border-white/[0.08] bg-white/[0.035] px-4 py-3 text-sm text-white placeholder-zinc-600 backdrop-blur-xl outline-none transition focus:border-accent/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_14%,transparent)]";

function Field({ id, label, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactForm({ locale }) {
  const tr = t(locale);
  const c = tr.contact;
  const turnstileRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | turnstile

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = Object.fromEntries(new FormData(form));
    const turnstileToken = formData["cf-turnstile-response"];

    if (!turnstileToken) {
      setStatus("turnstile");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          details: formData.details,
          locale,
          turnstileToken,
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        turnstileRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id={SECTIONS.contact} className="relative border-t border-hairline px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[150px]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
        {/* Aside */}
        <div>
          <SectionHeading tag={c.tag} title={c.title} sub={c.sub} />

          <Reveal delay={120} className="glass rim-glow is-lit relative mt-10 overflow-hidden rounded-xl p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              {c.asideTitle}
            </p>
            <ol className="mt-5 space-y-4">
              {c.asideSteps.map((step, i) => (
                <li key={step} className="flex gap-3.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/30 font-mono text-[10px] text-accent">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-zinc-400">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-white/[0.07] pt-5 text-xs text-zinc-600">
              {c.asideNote}
            </p>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={80} className="lg:pt-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label={c.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={c.namePh}
                  className={inputClass}
                />
              </Field>
              <Field id="email" label={c.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={c.emailPh}
                  className={inputClass}
                />
              </Field>
            </div>

            <Field id="company" label={c.company}>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder={c.companyPh}
                className={inputClass}
              />
            </Field>

            <Field id="details" label={c.details}>
              <textarea
                id="details"
                name="details"
                rows={6}
                required
                placeholder={c.detailsPh}
                className={`${inputClass} resize-none`}
              />
            </Field>

            <Turnstile
              ref={turnstileRef}
              siteKey={TURNSTILE_SITE_KEY}
              options={{ theme: "dark", size: "flexible" }}
            />

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-zinc-950 shadow-[0_0_36px_-8px_var(--color-accent)] transition hover:bg-accent-hover hover:shadow-[0_0_44px_-6px_var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
              >
                {status === "sending" ? c.sending : c.submit}
                {status !== "sending" && <ArrowRight />}
              </button>

              <p aria-live="polite" className="text-sm font-medium">
                {status === "success" && <span className="text-accent">{c.success}</span>}
                {status === "error" && <span className="text-red-400">{c.error}</span>}
                {status === "turnstile" && (
                  <span className="text-amber-400">{c.turnstileError}</span>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────── */

function Footer({ locale }) {
  const tr = t(locale);

  return (
    <footer className="border-t border-hairline px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[15px] font-bold tracking-tight text-white">
            ZAI<span className="text-accent">.</span>Development
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500">
            {tr.footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-mono text-sm text-zinc-300 transition hover:text-accent"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} ZAI Development. {tr.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── App ──────────────────────────────────────────────────── */

function readStoredLocale() {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && LOCALES.includes(stored)) return stored;
  } catch {
    /* storage unavailable — fall through to detection */
  }
  return detectLocale();
}

export default function App() {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  // Resolve the preferred locale on the client only, so the first paint is stable.
  useEffect(() => {
    setLocale(readStoredLocale());
  }, []);

  // Keep <html lang>, the document title and the meta description in sync.
  useEffect(() => {
    const tr = t(locale);
    document.documentElement.lang = tr.htmlLang;
    document.title = tr.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", tr.meta.description);

    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      /* storage unavailable — the locale simply is not persisted */
    }
  }, [locale]);

  return (
    <>
      <Header locale={locale} setLocale={setLocale} />
      <main>
        <Hero locale={locale} />
        <Pillars locale={locale} />
        <CaseStudy locale={locale} />
        <Method locale={locale} />
        <ContactForm locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
