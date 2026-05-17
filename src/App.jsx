import React, { useState, useEffect } from "react";
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakRadio,
  TweakToggle,
  TweakText,
} from "./tweaks-panel.jsx";
import {
  EmergencyBar,
  Nav,
  MobileSheet,
  Hero,
  Marquee,
  Services,
  WhyUs,
} from "./sections-top.jsx";
import { Reviews, About, ServiceArea, FAQ, CTABanner } from "./sections-mid.jsx";
import { Contact, Footer } from "./sections-end.jsx";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  accent: "#2A6FDB",
  headline: "Plumbing\n*done right*.",
  showEmergencyBar: true,
  fontPairing: "Industrial",
  darkHero: false,
}/*EDITMODE-END*/;

function applyAccent(hex) {
  const root = document.documentElement;
  root.style.setProperty("--copper", hex);
  root.style.setProperty("--copper-deep", hex);
  root.style.setProperty("--copper-soft", hex + "1f");
}

function applyFontPairing(name) {
  const root = document.documentElement;
  if (name === "Editorial") {
    root.style.setProperty("--font-display", '"Instrument Serif", serif');
    root.style.setProperty("--font-ui", '"Geist", "Inter", system-ui, sans-serif');
  } else if (name === "Modern") {
    root.style.setProperty("--font-display", '"Bricolage Grotesque", "Geist", sans-serif');
    root.style.setProperty("--font-ui", '"Geist", "Inter", system-ui, sans-serif');
  } else if (name === "Industrial") {
    root.style.setProperty("--font-display", '"Archivo Black", "Arial Black", system-ui, sans-serif');
    root.style.setProperty(
      "--font-ui",
      '"IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
    );
  }
}

function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    applyAccent(tweaks.accent);
  }, [tweaks.accent]);
  useEffect(() => {
    applyFontPairing(tweaks.fontPairing);
  }, [tweaks.fontPairing]);

  useScrollReveal();

  return (
    <>
      {tweaks.showEmergencyBar && <EmergencyBar />}
      <Nav onOpenMenu={() => setMenuOpen(true)} />
      <MobileSheet open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero accent={tweaks.accent} headline={tweaks.headline} />
        <Marquee />
        <Services />
        <WhyUs />
        <Reviews />
        <About />
        <ServiceArea />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand accent">
          <TweakColor
            label="Accent color"
            value={tweaks.accent}
            onChange={(v) => setTweak("accent", v)}
            options={["#C97A40", "#2A6FDB", "#1F8A5B", "#D4A017", "#B5391C"]}
          />
        </TweakSection>
        <TweakSection label="Typography">
          <TweakRadio
            label="Font pairing"
            value={tweaks.fontPairing}
            onChange={(v) => setTweak("fontPairing", v)}
            options={["Editorial", "Modern", "Industrial"]}
          />
        </TweakSection>
        <TweakSection label="Headline">
          <TweakText label="H1 copy" value={tweaks.headline} onChange={(v) => setTweak("headline", v)} />
        </TweakSection>
        <TweakSection label="Layout">
          <TweakToggle
            label="Show emergency banner"
            value={tweaks.showEmergencyBar}
            onChange={(v) => setTweak("showEmergencyBar", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}
