import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { t, LOCALES } from "./i18n";

const TURNSTILE_SITE_KEY = "0x4AAAAAACn4TuRMPoyZb75_";

const CONTACT_ID = "contato";

function scrollToContact(e) {
  e.preventDefault();
  document.getElementById(CONTACT_ID)?.scrollIntoView({ behavior: "smooth" });
}

/* ── Language Selector ────────────────────────────────────── */

function LangSelector({ locale, setLocale }) {
  return (
    <div className="flex items-center gap-1 rounded-md border border-zinc-700 p-0.5">
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`rounded px-2 py-1 font-mono text-xs font-medium transition ${
            locale === l
              ? "bg-accent text-zinc-950"
              : "text-zinc-400 hover:text-white"
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
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="font-mono text-lg font-bold tracking-tight text-white">
          ZAI<span className="text-accent">.</span>Development
        </a>
        <div className="flex items-center gap-4">
          <LangSelector locale={locale} setLocale={setLocale} />
          <a
            href={`#${CONTACT_ID}`}
            onClick={scrollToContact}
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-accent-hover sm:inline-block"
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
          {tr.hero.tag}
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {tr.hero.headline1}
          <br />
          <span className="text-accent">{tr.hero.headline2}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {tr.hero.sub}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`#${CONTACT_ID}`}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-zinc-950 transition hover:bg-accent-hover"
          >
            {tr.hero.cta}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Services ─────────────────────────────────────────────── */

const serviceIcons = [
  <svg key="dev" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>,
  <svg key="arch" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>,
  <svg key="ai" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>,
];

function Services({ locale }) {
  const tr = t(locale);
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm tracking-widest text-accent uppercase">
          {tr.services.tag}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {tr.services.title}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tr.services.items.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-accent/40 hover:bg-zinc-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                {serviceIcons[i]}
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact Form ─────────────────────────────────────────── */

function ContactForm({ locale }) {
  const tr = t(locale);
  const turnstileRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = Object.fromEntries(new FormData(e.target));
    const turnstileToken = formData["cf-turnstile-response"];

    if (!turnstileToken) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          details: formData.details,
          turnstileToken,
        }),
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
        turnstileRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent";

  return (
    <section id={CONTACT_ID} className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-sm tracking-widest text-accent uppercase">
          {tr.contact.tag}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {tr.contact.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          {tr.contact.sub}
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
                {tr.contact.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={tr.contact.namePh}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
                {tr.contact.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={tr.contact.emailPh}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-zinc-300">
              {tr.contact.company}
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder={tr.contact.companyPh}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-zinc-300">
              {tr.contact.details}
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              required
              placeholder={tr.contact.detailsPh}
              className={inputClass + " resize-none"}
            />
          </div>

          <Turnstile
            ref={turnstileRef}
            siteKey={TURNSTILE_SITE_KEY}
            options={{ theme: "dark", size: "normal" }}
          />

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-zinc-950 transition hover:bg-accent-hover disabled:opacity-50 sm:w-auto"
            >
              {status === "sending" ? "..." : tr.contact.submit}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>

            {status === "success" && (
              <span className="text-sm font-medium text-accent">
                {locale === "en" ? "Sent!" : locale === "es" ? "Enviado!" : "Enviado!"}
              </span>
            )}
            {status === "error" && (
              <span className="text-sm font-medium text-red-400">
                {locale === "en" ? "Error. Try again." : locale === "es" ? "Error. Intenta de nuevo." : "Erro. Tente novamente."}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────── */

function Footer({ locale }) {
  const tr = t(locale);
  return (
    <footer className="border-t border-zinc-800/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} ZAI Development. {tr.footer.rights}
        </p>
        <a
          href={`#${CONTACT_ID}`}
          onClick={scrollToContact}
          className="font-mono text-sm text-zinc-400 transition hover:text-accent"
        >
          renato@zaidevelopment.com
        </a>
      </div>
    </footer>
  );
}

/* ── App ──────────────────────────────────────────────────── */

export default function App() {
  const [locale, setLocale] = useState("pt");

  return (
    <>
      <Header locale={locale} setLocale={setLocale} />
      <main>
        <Hero locale={locale} />
        <Services locale={locale} />
        <ContactForm locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
