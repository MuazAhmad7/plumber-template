import React from "react";

// Inline SVG icons — single-stroke, line style, currentColor.

const Icon = ({ children, size = 20, stroke = 1.6, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);

export const I = {
  Phone: (p) => (
    <Icon {...p}>
      <path d="M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </Icon>
  ),
  Mail: (p) => (
    <Icon {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Icon>
  ),
  Pin: (p) => (
    <Icon {...p}>
      <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </Icon>
  ),
  Clock: (p) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Icon>
  ),
  Star: ({ size = 14, filled = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l2.6 5.6 6.1.6-4.6 4.2 1.4 6L12 16.8 6.5 19.4l1.4-6L3.3 9.2l6.1-.6z" />
    </svg>
  ),
  Plus: (p) => (
    <Icon {...p}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  ),
  Arrow: (p) => (
    <Icon {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  ),
  Check: (p) => (
    <Icon {...p}>
      <path d="m5 12 5 5L20 7" />
    </Icon>
  ),
  Shield: (p) => (
    <Icon {...p}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  ),
  Menu: (p) => (
    <Icon {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  ),
  X: (p) => (
    <Icon {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
  ),
  Moon: (p) => (
    <Icon {...p}>
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 1 0 11.5 11.5z" />
    </Icon>
  ),
  Sun: (p) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </Icon>
  ),

  // Service icons
  Drip: (p) => (
    <Icon {...p} size={p.size || 22}>
      <path d="M12 3c0 0-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z" />
      <path d="M9 13a3 3 0 0 0 3 3" />
    </Icon>
  ),
  Boiler: (p) => (
    <Icon {...p} size={p.size || 22}>
      <rect x="5" y="3" width="14" height="14" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M8 21h8M10 17v4M14 17v4" />
    </Icon>
  ),
  Pipe: (p) => (
    <Icon {...p} size={p.size || 22}>
      <path d="M3 7h7v4h4V7h7" />
      <path d="M3 17h7v-4h4v4h7" />
    </Icon>
  ),
  Drain: (p) => (
    <Icon {...p} size={p.size || 22}>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4v16M7 7l10 10M17 7 7 17" />
    </Icon>
  ),
  Bath: (p) => (
    <Icon {...p} size={p.size || 22}>
      <path d="M4 11h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M7 11V6a2 2 0 0 1 2-2h1M3 19l1 2M21 19l-1 2" />
    </Icon>
  ),
  Wrench: (p) => (
    <Icon {...p} size={p.size || 22}>
      <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
    </Icon>
  ),
  Google: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 11v3.2h5.4c-.2 1.4-1.6 4.1-5.4 4.1A6.3 6.3 0 1 1 12 5.7c2 0 3.3.8 4 1.6l2.7-2.6C16.8 3.2 14.6 2.2 12 2.2 6.5 2.2 2 6.7 2 12.2s4.5 10 10 10c5.8 0 9.6-4 9.6-9.8 0-.7-.1-1.2-.2-1.7H12z" />
    </svg>
  ),
  Yelp: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 14.5v6.7c0 .7-.5 1.2-1.2 1.1-1.4-.1-3.4-1-4.2-1.7-.5-.5-.5-1-.1-1.5l4-5.2c.5-.6 1.5-.3 1.5.6zM11 11.7V2.4c0-.8-.7-1.4-1.5-1.2C7.8 1.7 5 3 3.5 4.6c-.5.5-.5 1.2-.1 1.7l6.2 6c.7.7 1.4.4 1.4-.6zM13.7 13l5.6 1.8c.7.2 1 1 .6 1.6-.7 1.2-2 2.6-3 3.1-.6.3-1.2.1-1.5-.5l-2.4-5.1c-.3-.7.2-1.2 1-.9zM13.6 10.4l4-6.3c.4-.6.2-1.4-.5-1.6-1.3-.5-3.4-.8-4.4-.6-.7.1-1 .7-.9 1.4l.6 6.5c.1.8.8 1.1 1.2.6z" />
    </svg>
  ),
  Angi: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 2 22h4l2-4h8l2 4h4L12 2zm-2.5 12L12 8l2.5 6h-5z" />
    </svg>
  ),
};
