import React from "react";
import { PP_DATA } from "./data.js";
import { I } from "./icons.jsx";

// ============= Emergency bar =============
function EmergencyBar() {
  return (
    <div className="emergency-bar">
      <span className="dot" />
      <span><b style={{ fontWeight: 600 }}>24/7 Emergency Service</b><span className="desktop-only"> — burst pipes, no hot water, sewer backups</span></span>
      <span className="sep">·</span>
      <a href={PP_DATA.brand.phoneHref}>Call {PP_DATA.brand.phone}</a>
    </div>
  );
}

// ============= Nav =============
function Nav({ onOpenMenu }) {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Us" },
    { href: "#reviews", label: "Reviews" },
    { href: "#area", label: "Service Area" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <div className="brand-mark">PP</div>
          <div>
            <div className="brand-name">Pipeline Pros</div>
            <div className="brand-tag">{PP_DATA.brand.tag}</div>
          </div>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href={PP_DATA.brand.phoneHref} className="btn btn-ghost">
            <I.Phone size={16} />
            <span className="nav-phone-label">{PP_DATA.brand.phone}</span>
          </a>
          <a href="#contact" className="btn btn-copper nav-book-btn" aria-label="Book now">
            <span className="nav-book-text">Book Now</span>
            <I.Arrow size={16} className="btn-arrow" aria-hidden />
          </a>
          <button className="menu-btn" onClick={onOpenMenu} aria-label="Open menu"><I.Menu /></button>
        </div>
      </div>
    </header>
  );
}

// ============= Mobile sheet =============
function MobileSheet({ open, onClose }) {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Us" },
    { href: "#reviews", label: "Reviews" },
    { href: "#area", label: "Service Area" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div className={`mobile-sheet ${open ? "open" : ""}`}>
      <div className="head">
        <a href="#top" onClick={onClose} className="brand">
          <div className="brand-mark">PP</div>
          <div><div className="brand-name">Pipeline Pros</div></div>
        </a>
        <button className="menu-btn" onClick={onClose} aria-label="Close"><I.X /></button>
      </div>
      <nav>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={onClose}>{l.label}</a>
        ))}
      </nav>
      <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 10 }}>
        <a href={PP_DATA.brand.phoneHref} className="btn btn-primary btn-lg" style={{ justifyContent: "center" }}>
          <I.Phone size={16} /> {PP_DATA.brand.phone}
        </a>
        <a href="#contact" onClick={onClose} className="btn btn-copper btn-lg" style={{ justifyContent: "center" }}>Book a Plumber</a>
      </div>
    </div>
  );
}

// ============= Hero =============
function renderHeadline(text) {
  // Italicize content wrapped in *asterisks*, allow \n for line breaks.
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("*") && p.endsWith("*")) {
      return <em key={i}>{p.slice(1, -1)}</em>;
    }
    // also turn \n into <br/>
    const lines = p.split("\n");
    return lines.map((ln, j) => (
      <React.Fragment key={`${i}-${j}`}>{ln}{j < lines.length - 1 ? <br/> : null}</React.Fragment>
    ));
  });
}

function Hero({ accent, headline }) {
  const h = headline || "Plumbing problems\nhandled like *family*.";
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">{PP_DATA.brand.tag.split("·")[0].trim()} · Family-owned plumbing co.</span>
          <h1>{renderHeadline(h)}</h1>
          <p className="hero-sub">
            Three generations of plumbers serving Oak Ridge and the surrounding towns. We answer the phone, show up on time, and charge what we quote — every time.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary btn-lg">Book a Plumber <I.Arrow size={16} className="btn-arrow" /></a>
            <a href={PP_DATA.brand.phoneHref} className="btn btn-ghost btn-lg"><I.Phone size={16} /> {PP_DATA.brand.phone}</a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <span className="num">4.9</span>
              <div>
                <div className="stars">
                  {[0,1,2,3,4].map(i => <I.Star key={i} />)}
                </div>
                <div style={{ fontSize: 12, marginTop: 2 }}>1,820+ reviews</div>
              </div>
            </div>
            <div className="trust-item">
              <I.Shield size={20} />
              <div>Licensed · Insured<br/><span style={{ fontSize: 12, opacity: 0.7 }}>License #PL-44219</span></div>
            </div>
            <div className="trust-item">
              <I.Clock size={20} />
              <div>38-min avg arrival<br/><span style={{ fontSize: 12, opacity: 0.7 }}>24/7 emergency</span></div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-slot">
            {/* user-fillable image slot */}
            <image-slot
              id="hero-photo"
              shape="rounded"
              radius="28"
              placeholder="Drop a hero photo — your team, a truck, a clean install."
              style={{ width: "100%", height: "100%", display: "block" }}
            ></image-slot>
          </div>
          <div className="hero-badge top-right">
            <div className="label">What we handle</div>
            <div className="val" style={{ color: accent }}>Drains · leaks · water heaters</div>
            <div style={{ fontSize: 12, color: "var(--ink-mute)" }}>Flat-rate quotes · Licensed & insured</div>
          </div>
          <div className="hero-badge bottom-left">
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--ink)", color: "var(--paper)", display: "grid", placeItems: "center" }}>
              <I.Check size={18} />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>100+ jobs completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= Marquee =============
function Marquee() {
  const items = [...PP_DATA.marquee, ...PP_DATA.marquee];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((m, i) => (
          <div className="marquee-item" key={i}>
            <span className="bullet" />
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============= Services =============
function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">What we do</span>
            <h2>Every job<br/><em>done right.</em></h2>
          </div>
          <p>
            From a dripping faucet to a full re-pipe, the same six plumbers handle every call. No subcontractors, no rotating crew, no surprise upcharges.
          </p>
        </div>
        <div className="services-grid reveal">
          {PP_DATA.services.map((s) => {
            const Ic = I[s.icon];
            return (
              <article className="service-card" key={s.n}>
                <div className="service-icon"><Ic size={22} /></div>
                <div className="num">{s.n} / 06</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <div className="price"><span>Starting</span> <b>{s.price}</b></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============= Why us =============
function WhyUs() {
  return (
    <section className="section tight" id="why">
      <div className="container">
        <div className="why">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div>
              <span className="eyebrow">Why Pipeline Pros</span>
              <h2>The numbers <em>add up</em>.</h2>
            </div>
            <p>
              No call centers. No commission-only sales pitches. Just licensed plumbers, transparent flat-rate pricing, and the same family name on the truck since 1992.
            </p>
          </div>
          <div className="why-grid">
            {PP_DATA.stats.map((s, i) => (
              <div className="why-stat" key={i}>
                <div className="num">{s.num}<sup>{s.sup}</sup></div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { EmergencyBar, Nav, MobileSheet, Hero, Marquee, Services, WhyUs };
