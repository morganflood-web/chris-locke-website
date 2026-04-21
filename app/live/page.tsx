"use client";

import { Header, Footer, C, EmailSignup } from "../_components/shared";

const UPCOMING_SHOWS = [
  // BC Tour
  {
    date: "Wed, Apr 22, 2026",
    venue: "OK Dope Comedy",
    city: "Smithers, BC",
    note: "",
    ticketUrl: "https://www.jumpcomedy.com/e/ok-dope-presents-stand-up-comedy-live-in-smithers?variant_id=variant_019aefb3-56b8-7fb3-a731-3041f54fa079",
    soldOut: false,
  },
  {
    date: "Thu, Apr 23, 2026",
    venue: "OK Dope Comedy",
    city: "Terrace, BC",
    note: "",
    ticketUrl: "https://www.jumpcomedy.com/e/ok-dope-presents-stand-up-comedy-live-in-terrace",
    soldOut: false,
  },
  {
    date: "Fri, Apr 24, 2026",
    venue: "OK Dope Comedy",
    city: "Terrace, BC",
    note: "",
    ticketUrl: "https://www.jumpcomedy.com/e/ok-dope-presents-stand-up-comedy-live-in-terrace",
    soldOut: false,
  },
  {
    date: "Sat, Apr 25, 2026",
    venue: "OK Dope Comedy",
    city: "Kitimat, BC",
    note: "",
    ticketUrl: "https://www.jumpcomedy.com/e/ok-dope-presents-stand-up-comedy-live-in-kitimat?variant_id=variant_019aefb6-c03e-7c3c-9e5a-6acbf6e85291",
    soldOut: false,
  },
  // Hell: A Stand-Up Comedy Show — last Wednesday of every month at Comedy Bar
  {
    date: "Wed, Apr 29, 2026",
    venue: "Comedy Bar",
    city: "Toronto, ON",
    note: "Hell: A Stand-Up Comedy Show — 9:30 PM · $25 GA · 945 Bloor St W",
    ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke",
    soldOut: false,
  },
  {
    date: "Wed, May 27, 2026",
    venue: "Comedy Bar",
    city: "Toronto, ON",
    note: "Hell: A Stand-Up Comedy Show — 9:30 PM · $25 GA · 945 Bloor St W",
    ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke",
    soldOut: false,
  },
  {
    date: "Wed, Jun 24, 2026",
    venue: "Comedy Bar",
    city: "Toronto, ON",
    note: "Hell: A Stand-Up Comedy Show — 9:30 PM · $25 GA · 945 Bloor St W",
    ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke",
    soldOut: false,
  },
  {
    date: "Wed, Jul 29, 2026",
    venue: "Comedy Bar",
    city: "Toronto, ON",
    note: "Hell: A Stand-Up Comedy Show — 9:30 PM · $25 GA · 945 Bloor St W",
    ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke",
    soldOut: false,
  },
  {
    date: "Wed, Aug 26, 2026",
    venue: "Comedy Bar",
    city: "Toronto, ON",
    note: "Hell: A Stand-Up Comedy Show — 9:30 PM · $25 GA · 945 Bloor St W",
    ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke",
    soldOut: false,
  },
  {
    date: "Wed, Sep 30, 2026",
    venue: "Comedy Bar",
    city: "Toronto, ON",
    note: "Hell: A Stand-Up Comedy Show — 9:30 PM · $25 GA · 945 Bloor St W",
    ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke",
    soldOut: false,
  },
  {
    date: "Wed, Oct 28, 2026",
    venue: "Comedy Bar",
    city: "Toronto, ON",
    note: "Hell: A Stand-Up Comedy Show — 9:30 PM · $25 GA · 945 Bloor St W",
    ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke",
    soldOut: false,
  },
  {
    date: "Wed, Nov 25, 2026",
    venue: "Comedy Bar",
    city: "Toronto, ON",
    note: "Hell: A Stand-Up Comedy Show — 9:30 PM · $25 GA · 945 Bloor St W",
    ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke",
    soldOut: false,
  },
  {
    date: "Wed, Dec 30, 2026",
    venue: "Comedy Bar",
    city: "Toronto, ON",
    note: "Hell: A Stand-Up Comedy Show — 9:30 PM · $25 GA · 945 Bloor St W",
    ticketUrl: "https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke",
    soldOut: false,
  },
];

export default function LivePage() {
  return (
    <>
      <Header activePath="/live" />
      <main style={{ backgroundColor: C.bg, minHeight: "80vh" }}>
        {/* Page header */}
        <div
          style={{
            padding: "60px 32px 40px",
            textAlign: "center",
            backgroundColor: C.bgAlt,
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "12px" }}>
            On Tour
          </p>
          <h1
            style={{
              fontFamily: "var(--font-bebas), Impact, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: C.text,
              margin: 0,
            }}
          >
            Live Dates
          </h1>
        </div>

        {/* Upcoming shows */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 32px 32px" }}>
          <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.light, marginBottom: "24px", fontWeight: 400 }}>
            Upcoming
          </h2>
          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {UPCOMING_SHOWS.map((show, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: `1px solid ${C.border}`,
                  gap: "16px",
                }}
              >
                <div style={{ flex: 2 }}>
                  <span style={{ fontSize: "0.9rem", color: C.text, display: "block" }}>
                    {show.date} — {show.venue}
                  </span>
                  {show.note && (
                    <span style={{ fontSize: "0.78rem", color: C.light, display: "block", marginTop: "2px" }}>
                      {show.note}
                    </span>
                  )}
                </div>
                <span style={{ flex: 1, textAlign: "center", fontSize: "0.9rem", color: C.light }}>
                  {show.city}
                </span>
                <span style={{ flex: 0, textAlign: "right" }}>
                  {show.soldOut ? (
                    <span style={{ color: C.light, fontSize: "0.8rem", letterSpacing: "0.1em" }}>SOLD OUT</span>
                  ) : (
                    <a
                      href={show.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: `1px solid ${C.accent}`,
                        color: C.accent,
                        padding: "4px 16px",
                        borderRadius: "999px",
                        fontSize: "0.8rem",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                      }}
                    >
                      Tickets
                    </a>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 32px 80px", textAlign: "center" }}>
          <p style={{ color: C.light, fontSize: "0.9rem", marginBottom: "8px" }}>
            Interested in booking Chris for your event?
          </p>
          <a
            href="/contact"
            style={{
              color: C.accent,
              textDecoration: "none",
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              borderBottom: `1px solid ${C.accent}`,
              paddingBottom: "2px",
            }}
          >
            Contact Grand Wave Entertainment →
          </a>
        </div>
      </main>
      <EmailSignup />
      <Footer />
    </>
  );
}
