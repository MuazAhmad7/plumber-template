import React, { useState } from "react";
import { I } from "./icons.jsx";
import { PP_DATA } from "./data.js";

// ============= Contact =============
function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "Leak / pipe repair", urgency: "Within 48 hours", notes: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => {
    setForm((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) errs.phone = "Enter a 10-digit phone";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.notes.trim()) errs.notes = "Tell us what's going on";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2>Book a plumber<br/>in <em>under a minute</em>.</h2>
          </div>
          <p>
            Tell us what's happening and we'll text you a confirmed time slot — usually within 15 minutes during business hours. Or just call. We answer.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-block">
              <div className="ic"><I.Phone size={20} /></div>
              <div>
                <div className="label">Call dispatch</div>
                <a href={PP_DATA.brand.phoneHref} className="val">{PP_DATA.brand.phone}</a>
                <div className="sub">Mon–Sun, 24 hours. A real person answers.</div>
              </div>
            </div>
            <div className="contact-block">
              <div className="ic"><I.Mail size={20} /></div>
              <div>
                <div className="label">Email</div>
                <a href={`mailto:${PP_DATA.brand.email}`} className="val">{PP_DATA.brand.email}</a>
                <div className="sub">Quotes, scheduling, follow-ups. Replies within 2 business hours.</div>
              </div>
            </div>
            <div className="contact-block">
              <div className="ic"><I.Pin size={20} /></div>
              <div>
                <div className="label">Workshop</div>
                <div className="val">{PP_DATA.brand.address}</div>
                <div className="sub">Walk-ins welcome 8a–5p weekdays.</div>
              </div>
            </div>
            <div className="contact-block">
              <div className="ic"><I.Clock size={20} /></div>
              <div>
                <div className="label">Hours</div>
                <div className="val" style={{ fontSize: 17 }}>Office: Mon–Fri 7a–6p<br/>Dispatch: 24/7/365</div>
                <div className="sub">No overtime fees on nights, weekends, or holidays.</div>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="form-success reveal">
              <div className="ok-icon"><I.Check size={28} /></div>
              <h3>Got it, {form.name.split(" ")[0]}.</h3>
              <p>
                We've got your request for <b>{form.service.toLowerCase()}</b>.<br/>
                We'll text {form.phone} with a confirmed time slot in under 15 minutes.
              </p>
              <div style={{ marginTop: 22 }}>
                <button className="btn btn-ghost" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "Leak / pipe repair", urgency: "Within 48 hours", notes: "" }); }}>Submit another</button>
              </div>
            </div>
          ) : (
            <form className="form reveal" onSubmit={submit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Sam Whitlock"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className={errors.name ? "invalid" : ""}
                  />
                  {errors.name && <span className="err">{errors.name}</span>}
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input
                    type="tel"
                    placeholder="(555) 014-7382"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className={errors.phone ? "invalid" : ""}
                  />
                  {errors.phone && <span className="err">{errors.phone}</span>}
                </div>
              </div>
              <div className="field">
                <label>Email (optional)</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={errors.email ? "invalid" : ""}
                />
                {errors.email && <span className="err">{errors.email}</span>}
              </div>
              <div className="field">
                <label>What needs fixing?</label>
                <div className="service-pills">
                  {PP_DATA.serviceOptions.map((s) => (
                    <button
                      type="button"
                      key={s}
                      className={`pill ${form.service === s ? "active" : ""}`}
                      onClick={() => set("service", s)}
                    >{s}</button>
                  ))}
                </div>
              </div>
              <div className="field">
                <label>When do you need us?</label>
                <select value={form.urgency} onChange={(e) => set("urgency", e.target.value)}>
                  <option>Emergency — right now</option>
                  <option>Today, if possible</option>
                  <option>Within 48 hours</option>
                  <option>This week</option>
                  <option>Planned project — quote first</option>
                </select>
              </div>
              <div className="field">
                <label>What's going on?</label>
                <textarea
                  placeholder="Describe the problem — symptoms, when it started, location in the house, anything we should know before we arrive."
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  className={errors.notes ? "invalid" : ""}
                />
                {errors.notes && <span className="err">{errors.notes}</span>}
              </div>
              <div className="form-foot">
                <span className="hint">We never share your info. Reply via text or call.</span>
              </div>
              <button type="submit" className="btn btn-copper btn-lg submit-btn">
                Request a plumber <I.Arrow size={16} className="btn-arrow" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ============= Footer =============
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand">
              <div className="brand-mark">PP</div>
              <div>
                <div className="brand-name">Pipeline Pros</div>
                <div className="brand-tag">{PP_DATA.brand.tag}</div>
              </div>
            </a>
            <p className="footer-blurb">
              Family-run plumbing co. in Oak Ridge. Licensed, insured, and answering the phone since 1992.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <a href={PP_DATA.brand.phoneHref} className="btn btn-copper">
                <I.Phone size={14} /> {PP_DATA.brand.phone}
              </a>
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {PP_DATA.services.slice(0, 6).map((s) => (
                <li key={s.n}><a href="#services">{s.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#area">Service area</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href={`mailto:${PP_DATA.brand.email}`}>{PP_DATA.brand.email}</a></li>
              <li>{PP_DATA.brand.address}</li>
              <li>Office: Mon–Fri 7a–6p</li>
              <li>Dispatch: 24/7/365</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Pipeline Pros, Inc. · License #PL-44219 · EIN 82-0000000</div>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Contact, Footer };
