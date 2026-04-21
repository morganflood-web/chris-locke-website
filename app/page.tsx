"use client";

import Link from "next/link";
import { Header, Footer, EmailSignup, C } from "./_components/shared";

// ─── DATA ────────────────────────────────────────────────────────────────────

const UPCOMING_SHOWS = [
  // BC Tour
  { date: "Wed, Apr 22, 2026", venue: "OK Dope Comedy", city: "Smithers, BC", note: "", ticketUrl: "https://www.jumpcomedy.com/e/ok-dope-presents-stand-up-comedy-live-in-smithers?variant_id=variant_019aefb3-56b8-7fb3-a731-3041f54fa079", soldOut: false },
  { date: "Thu, Apr 23, 2026", venue: "OK Dope Comedy", city: "Terrace, BC", note: "", ticketUrl: "https://www.jumpcomedy.com/e/ok-dope-presents-stand-up-comedy-live-in-terrace", soldOut: false },
  { date: "Fri, Apr 24, 2026", venue: "OK Dope Comedy", city: "Terrace, BC", note: "", ticketUrl: "https://www.jumpcomedy.com/e/ok-dope-presents-stand-up-comedy-live-in-terrace", soldOut: false },
  { date: "Sat, Apr 25, 2026", venue: "OK Dope Comedy", city: "Kitimat, BC", note: "", ticketUrl: "https://www.jumpcomedy.com/e/ok-dope-presents-stand-up-comedy-live-in-kitimat?variant_id=variant_019aefb6-c03e-7c3c-9e5a-6acbf6e85291", soldOut: false },
  // Hell: A Stand-Up Comedy Show — recurring monthly at Comedy Bar
  { date: "Wed, Apr 29, 2026", venue: "Comedy Bar", city: "Toronto, ON", note: "Hell: A Stand-Up Comedy Show", ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke", soldOut: false },
  { date: "Wed, May 27, 2026", venue: "Comedy Bar", city: "Toronto, ON", note: "Hell: A Stand-Up Comedy Show", ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke", soldOut: false },
  { date: "Wed, Jun 24, 2026", venue: "Comedy Bar", city: "Toronto, ON", note: "Hell: A Stand-Up Comedy Show", ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke", soldOut: false },
  { date: "Wed, Jul 29, 2026", venue: "Comedy Bar", city: "Toronto, ON", note: "Hell: A Stand-Up Comedy Show", ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke", soldOut: false },
  { date: "Wed, Aug 26, 2026", venue: "Comedy Bar", city: "Toronto, ON", note: "Hell: A Stand-Up Comedy Show", ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke", soldOut: false },
  { date: "Wed, Sep 30, 2026", venue: "Comedy Bar", city: "Toronto, ON", note: "Hell: A Stand-Up Comedy Show", ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke", soldOut: false },
  { date: "Wed, Oct 28, 2026", venue: "Comedy Bar", city: "Toronto, ON", note: "Hell: A Stand-Up Comedy Show", ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke", soldOut: false },
  { date: "Wed, Nov 25, 2026", venue: "Comedy Bar", city: "Toronto, ON", note: "Hell: A Stand-Up Comedy Show", ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke", soldOut: false },
  { date: "Wed, Dec 30, 2026", venue: "Comedy Bar", city: "Toronto, ON", note: "Hell: A Stand-Up Comedy Show", ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke", soldOut: false },
];

// Show first 5 on home page
const HOME_SHOWS = UPCOMING_SHOWS.slice(0, 5);

const TIKI_MADNESS_PLATFORMS = [
  { label: "Watch on YouTube", url: "https://youtu.be/rXBHo63Iz0c" },
  { label: "Spotify", url: "https://open.spotify.com/album/4nzs5kqnBYN0PivHPS91DA" },
  { label: "Apple Music", url: "https://music.apple.com/us/album/tiki-madness/1876488088" },
  { label: "Amazon Music", url: "https://music.amazon.ca/albums/B0GMQ8GK18" },
  { label: "YouTube Music", url: "https://www.youtube.com/watch?v=RYD2kL-rCJY&list=OLAK5uy_mrfwtCgT2ibeo6Wjr4OuJR0-vR4JvPZfU" },
];

// ─── FEATURED RELEASE ────────────────────────────────────────────────────────

function FeaturedReleaseSection() {
  return (
    <section style={{ backgroundColor: C.bgAlt, padding: "60px 32px", borderBottom: `1px solid ${C.border}` }}>
      <p style={{ textAlign: "center", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "32px" }}>
        New Comedy Special &amp; Album — Out Now
      </p>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap-reverse",
          alignItems: "center",
          gap: "64px",
        }}
      >
        {/* LEFT: text + streaming buttons */}
        <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <h2 style={{ fontFamily: "var(--font-bebas), Impact, sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "0.05em", lineHeight: 1.0, margin: 0, color: C.text }}>
            TIKI MADNESS
          </h2>
          <p style={{ fontSize: "0.9rem", color: C.light, margin: 0 }}>2026 · Comedy Special &amp; Album</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
            {TIKI_MADNESS_PLATFORMS.map((btn) => (
              <a
                key={btn.label}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: `1px solid ${C.accent}`,
                  color: C.text,
                  textAlign: "center",
                  padding: "10px 24px",
                  borderRadius: "999px",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  maxWidth: "400px",
                  width: "100%",
                }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
        {/* RIGHT: hero image */}
        <div style={{ flex: "1.3 1 420px", display: "flex", justifyContent: "center" }}>
          <img
            src="/images/hero.jpg"
            alt="Chris Locke — Tiki Madness"
            style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── UPCOMING SHOWS ──────────────────────────────────────────────────────────

function UpcomingShowsSection() {
  return (
    <section style={{ backgroundColor: C.bg, padding: "80px 32px", borderBottom: `1px solid ${C.border}` }}>
      <h2 style={{ textAlign: "center", fontFamily: "var(--font-bebas), Impact, sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: C.text, marginBottom: "48px" }}>
        Upcoming Shows
      </h2>
      <div style={{ borderTop: `1px solid ${C.border}`, maxWidth: "900px", margin: "0 auto" }}>
        {HOME_SHOWS.map((show, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: `1px solid ${C.border}`, gap: "16px" }}>
            <div style={{ flex: 2 }}>
              <span style={{ fontSize: "0.9rem", color: C.text, display: "block" }}>{show.date} — {show.venue}</span>
              {show.note && <span style={{ fontSize: "0.78rem", color: C.light, display: "block", marginTop: "2px" }}>{show.note}</span>}
            </div>
            <span style={{ flex: 1, textAlign: "center", fontSize: "0.9rem", color: C.light }}>{show.city}</span>
            <span style={{ flex: 0, textAlign: "right" }}>
              {show.soldOut ? (
                <span style={{ color: C.light, fontSize: "0.8rem", letterSpacing: "0.1em" }}>SOLD OUT</span>
              ) : (
                <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer" style={{ border: `1px solid ${C.accent}`, color: C.accent, padding: "4px 16px", borderRadius: "999px", fontSize: "0.8rem", whiteSpace: "nowrap", textDecoration: "none" }}>
                  Tickets
                </a>
              )}
            </span>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "36px" }}>
        <Link href="/live" style={{ border: `1px solid ${C.accent}`, color: C.accent, padding: "10px 28px", borderRadius: "999px", fontSize: "0.85rem", textDecoration: "none", letterSpacing: "0.1em" }}>
          All Dates →
        </Link>
      </div>
    </section>
  );
}

// ─── BOOKING ─────────────────────────────────────────────────────────────────

function BookingSection() {
  return (
    <section style={{ backgroundColor: C.bgAlt, padding: "80px 32px", borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-bebas), Impact, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: C.text, marginBottom: "12px" }}>
          Booking
        </h2>
        <p style={{ fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.light, marginBottom: "32px" }}>
          Grand Wave Entertainment
        </p>
        <div style={{ display: "flex", gap: "48px", justifyContent: "center", flexWrap: "wrap" }}>
          <div>
            <p style={{ color: C.text, fontSize: "0.95rem", marginBottom: "4px" }}>Morgan Flood &amp; Carolyn Sterling</p>
            <p style={{ color: C.light, fontSize: "0.85rem", marginBottom: "8px" }}>Canada</p>
            <a href="mailto:morgan@grandwaveentertainment.com" style={{ color: C.accent, fontSize: "0.85rem", textDecoration: "none", display: "block" }}>
              morgan@grandwaveentertainment.com
            </a>
            <a href="mailto:carolyn@grandwaveentertainment.com" style={{ color: C.accent, fontSize: "0.85rem", textDecoration: "none", display: "block", marginTop: "4px" }}>
              carolyn@grandwaveentertainment.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Header activePath="/" />
      <main>
        <FeaturedReleaseSection />
        <UpcomingShowsSection />
        <BookingSection />
        <EmailSignup />
      </main>
      <Footer />
    </>
  );
}
