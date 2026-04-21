"use client";

import Link from "next/link";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────

export const C = {
  bg: "#EEF6FA",        // pale sky blue — base
  bgAlt: "#D6ECF5",    // soft water blue — alternating sections
  bgDeep: "#C2E0EF",   // slightly deeper blue — high contrast
  bgWarm: "#F5FBFD",   // almost white with blue tint
  text: "#1A3040",     // dark navy — main text
  light: "#5A7A8A",    // muted text
  accent: "#2A8FB5",   // medium ocean blue — CTA
  accentHover: "#1E6E8E",
  border: "#B0D4E5",
};

export const SOCIALS = {
  instagram: "https://www.instagram.com/chrislockefun/",
  youtube: "https://www.youtube.com/@chrislockeonline",
  tiktok: "https://www.tiktok.com/@chrislockeonline",
  spotify: "https://open.spotify.com/artist/5nKDEO5biBXDNRNQ0iAW8Q",
};

export const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "LIVE", href: "/live" },
  { label: "RELEASES", href: "/releases" },
  { label: "BIO", href: "/bio" },
  { label: "CONTACT", href: "/contact" },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────

export function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
    </svg>
  );
}

export function YouTubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function SpotifyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

// ─── HEADER ───────────────────────────────────────────────────────────────────

export function Header({ activePath }: { activePath?: string }) {
  return (
    <header
      style={{
        backgroundColor: C.bg,
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: `1px solid ${C.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        height: "52px",
      }}
    >
      {/* Left: Nav */}
      <nav style={{ display: "flex", flexWrap: "wrap", gap: "0", alignItems: "center" }}>
        {NAV_ITEMS.map((item, i) => (
          <span key={item.href} style={{ display: "flex", alignItems: "center" }}>
            {i > 0 && <span style={{ color: C.border, margin: "0 10px", fontSize: "0.65rem" }}>|</span>}
            <Link
              href={item.href}
              style={{
                color: activePath === item.href ? C.accent : C.light,
                textDecoration: "none",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Link>
          </span>
        ))}
      </nav>

      {/* Centre: Name */}
      <Link
        href="/"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(1rem, 3vw, 1.4rem)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          textDecoration: "none",
          color: C.text,
          fontFamily: "var(--font-bebas), Impact, sans-serif",
          whiteSpace: "nowrap",
        }}
      >
        CHRIS LOCKE
      </Link>

      {/* Right: Socials */}
      <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
        <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" style={{ color: C.light }} aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" style={{ color: C.light }} aria-label="TikTok">
          <TikTokIcon />
        </a>
        <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" style={{ color: C.light }} aria-label="YouTube">
          <YouTubeIcon />
        </a>
      </div>
    </header>
  );
}

// ─── EMAIL SIGNUP ───────────────────────────────────────────────────────────────

export function EmailSignup() {
  return (
    <section style={{ backgroundColor: C.bgDeep, padding: "64px 32px", textAlign: "center", borderTop: `1px solid ${C.border}` }}>
      <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "12px" }}>
        Stay in the Loop
      </p>
      <h2 style={{ fontFamily: "var(--font-bebas), Impact, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.15em", color: C.text, marginBottom: "16px" }}>
        Join the Mailing List
      </h2>
      <p style={{ color: C.light, marginBottom: "32px", fontSize: "0.95rem" }}>
        Be the first to know about new shows, releases, and announcements.
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdpUXd56SrLM8VV9wITlkbKDCxbDc2ij1Z8XxFbBi96p1kv9g/viewform"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: C.accent,
          color: "#FFFFFF",
          padding: "14px 40px",
          borderRadius: "999px",
          fontWeight: 700,
          fontSize: "0.85rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textDecoration: "none",
        }}
      >
        Sign Up
      </a>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer style={{ backgroundColor: C.bgAlt, padding: "40px 32px", textAlign: "center", borderTop: `1px solid ${C.border}` }}>
      <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginBottom: "16px" }}>
        <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" style={{ color: C.light }} aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" style={{ color: C.light }} aria-label="TikTok">
          <TikTokIcon />
        </a>
        <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" style={{ color: C.light }} aria-label="YouTube">
          <YouTubeIcon />
        </a>
      </div>
      <p style={{ color: C.light, fontSize: "0.75rem", letterSpacing: "0.1em" }}>© 2026 Chris Locke</p>
    </footer>
  );
}
