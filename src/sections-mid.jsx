import React, { useState } from "react";
import { I } from "./icons.jsx";
import { PP_DATA } from "./data.js";

// ============= Reviews =============
function Reviews() {
  const sources = [
    { name: "Google", icon: <I.Google />, score: "4.9 · 920 reviews" },
    { name: "Yelp", icon: <I.Yelp />, score: "5.0 · 412 reviews" },
    { name: "Angi", icon: <I.Angi />, score: "4.9 · 488 reviews" },
  ];
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Word of mouth</span>
            <h2>1,800+ neighbors<br/><em>keep coming back.</em></h2>
          </div>
          <p>
            Most of our work comes from referrals — a clean job and a fair invoice tends to travel. Here's what people are saying.
          </p>
        </div>

        <div className="reviews-hero reveal">
          <div className="review-aggregate">
            <div className="big">4.9<small>/5</small></div>
            <div className="stars" style={{ marginTop: 8 }}>
              {[0,1,2,3,4].map(i => <I.Star key={i} size={18} />)}
            </div>
            <div className="count">Based on 1,820 verified customer reviews</div>
            <div className="sources">
              {sources.map((s) => (
                <span key={s.name}>{s.icon} {s.name} · {s.score}</span>
              ))}
            </div>
          </div>

          <div className="reviews-quote">
            <div className="mark">“</div>
            <blockquote>
              {PP_DATA.featuredReview.quote}
            </blockquote>
            <div className="author">
              <div className="avatar">{PP_DATA.featuredReview.initial}</div>
              <div className="author-meta">
                <div className="name">{PP_DATA.featuredReview.name}</div>
                <div className="meta">{PP_DATA.featuredReview.meta}</div>
              </div>
              <div style={{ marginLeft: "auto" }} className="stars">
                {[0,1,2,3,4].map(i => <I.Star key={i} size={14} />)}
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-grid reveal">
          {PP_DATA.reviews.map((r, i) => (
            <article className="review-card" key={i}>
              <div className="head">
                <div className="stars">
                  {[...Array(r.stars)].map((_, j) => <I.Star key={j} />)}
                </div>
                <span className="tag">{r.tag}</span>
              </div>
              <p className="body">"{r.body}"</p>
              <div className="foot">
                <div className="avatar" style={{ width: 36, height: 36, fontSize: 15 }}>{r.initial}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-mute)" }}>{r.meta}</div>
                </div>
                <span className="src">{r.src}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= About =============
function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-image reveal">
          <image-slot
            id="about-photo"
            shape="rounded"
            radius="28"
            placeholder="Drop a team or owner portrait."
            style={{ width: "100%", height: "100%", display: "block" }}
          ></image-slot>
        </div>
        <div className="reveal">
          <span className="eyebrow">Our story</span>
          <h2>Three generations<br/><em>under one truck.</em></h2>
          <div className="about-body">
            <p>
              Frank Senior started Pipeline Pros out of a garage in 1992 with one promise: pick up the phone, show up when you say you will, and never charge for a guess. Thirty-four years later, his granddaughter Sam runs the shop — and that promise hasn't changed.
            </p>
            <p>
              We're not a franchise. We don't have a call center in another state. When you call, you're talking to someone who works in the building next to the trucks, who knows every plumber on the schedule by name.
            </p>
          </div>
          <div className="signature">— Sam Whitlock, Owner</div>
          <div className="about-meta">
            <div><b style={{ color: "var(--ink)" }}>1992</b> · founded</div>
            <div><b style={{ color: "var(--ink)" }}>14</b> · plumbers on staff</div>
            <div><b style={{ color: "var(--ink)" }}>$2M</b> · liability coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= Service area =============
function ServiceArea() {
  // simple pin positions on the placeholder map
  const pins = [
    { x: 35, y: 42 }, { x: 52, y: 36 }, { x: 60, y: 50 }, { x: 45, y: 58 },
    { x: 70, y: 44 }, { x: 28, y: 55 }, { x: 50, y: 70 }, { x: 65, y: 65 },
    { x: 40, y: 30 }, { x: 75, y: 58 },
  ];
  return (
    <section className="section" id="area">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Service area</span>
            <h2>If you can see<br/>our trucks, <em>we're nearby</em>.</h2>
          </div>
          <p>
            Based in the Foundry District, we cover Oak Ridge and ten neighboring towns. Same flat-rate pricing across the whole map — no fuel surcharges, no zone fees.
          </p>
        </div>
        <div className="area-grid reveal">
          <div className="map">
            <svg viewBox="0 0 100 75" preserveAspectRatio="none" aria-hidden="true">
              {/* schematic grid + roads */}
              <defs>
                <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <path d="M 5 0 L 0 0 0 5" fill="none" stroke="var(--line)" strokeWidth="0.15" />
                </pattern>
              </defs>
              <rect width="100" height="75" fill="url(#grid)" />
              {/* river */}
              <path d="M 0 50 Q 25 40 50 52 T 100 48" fill="none" stroke="var(--ink-mute)" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
              {/* major roads */}
              <path d="M 0 25 L 100 30" stroke="var(--line)" strokeWidth="0.6" />
              <path d="M 30 0 L 36 75" stroke="var(--line)" strokeWidth="0.6" />
              <path d="M 65 0 L 72 75" stroke="var(--line)" strokeWidth="0.6" />
              <path d="M 10 60 Q 50 65 90 55" fill="none" stroke="var(--line)" strokeWidth="0.4" />
              {/* coverage circle */}
              <circle cx="50" cy="48" r="38" fill="var(--copper)" fillOpacity="0.08" stroke="var(--copper)" strokeOpacity="0.35" strokeWidth="0.25" strokeDasharray="1 1" />
              {/* HQ marker */}
              <circle cx="50" cy="48" r="1.2" fill="var(--ink)" />
              <text x="52" y="46" fontSize="2.4" fontFamily="JetBrains Mono, monospace" fill="var(--ink)">HQ</text>
            </svg>
            {pins.map((p, i) => (
              <div key={i} className="pin" style={{ left: `${p.x}%`, top: `${p.y}%` }} />
            ))}
          </div>
          <div className="area-list">
            <h3>Towns we serve</h3>
            <ul className="area-cols">
              {PP_DATA.areas.map((a) => (
                <li key={a.name}>
                  <span>{a.name}</span>
                  <span className="badge">{a.time}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 18, paddingTop: 18, borderTop: "1px solid var(--line)", fontSize: 13, color: "var(--ink-mute)" }}>
              Don't see your town? Call us — we cover most of the metro.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= FAQ =============
function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Common questions</span>
            <h2>Before you<br/><em>pick up the phone.</em></h2>
          </div>
          <p>
            Pricing, warranties, response time, insurance — the stuff you actually want to know before you let a stranger turn off your water.
          </p>
        </div>
        <div className="faq-list reveal">
          {PP_DATA.faqs.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="icon"><I.Plus size={14} /></span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= CTA Banner =============
function CTABanner() {
  return (
    <section className="section tight">
      <div className="container">
        <div className="cta-banner reveal">
          <div>
            <span className="eyebrow no-rule" style={{ color: "oklch(1 0 0 / 0.7)" }}>Pipe burst? No hot water?</span>
            <h2 style={{ marginTop: 14 }}>
              We'll be there <em>before</em> the kettle boils.
            </h2>
            <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.55, opacity: 0.9, maxWidth: 520 }}>
              38-minute average response time, 24 hours a day. Flat-rate pricing, no overtime surcharges, real plumber on the phone.
            </p>
          </div>
          <div className="actions">
            <a href={PP_DATA.brand.phoneHref} className="btn btn-primary btn-lg">
              <I.Phone size={16} /> {PP_DATA.brand.phone}
            </a>
            <a href="#contact" className="btn btn-ghost btn-lg">Book online instead</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Reviews, About, ServiceArea, FAQ, CTABanner };
