"use client";

import { Header, Footer, C, EmailSignup } from "../_components/shared";

export default function ContactPage() {
  return (
    <>
      <Header activePath="/contact" />
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
            Get in Touch
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
            Contact
          </h1>
        </div>

        {/* Booking info */}
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 32px", textAlign: "center" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.light, marginBottom: "8px" }}>
            Represented by
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas), Impact, sans-serif",
              fontSize: "2rem",
              letterSpacing: "0.2em",
              color: C.text,
              marginBottom: "40px",
            }}
          >
            Grand Wave Entertainment
          </h2>

          <div style={{ display: "flex", gap: "64px", justifyContent: "center", flexWrap: "wrap" }}>
            {/* Morgan */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
              <p style={{ color: C.text, fontSize: "1rem", fontWeight: 600, margin: 0 }}>Morgan Flood</p>
              <a
                href="mailto:morgan@grandwaveentertainment.com"
                style={{ color: C.accent, fontSize: "0.85rem", textDecoration: "none" }}
                onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none"; }}
              >
                morgan@grandwaveentertainment.com
              </a>
            </div>
            {/* Carolyn */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
              <p style={{ color: C.text, fontSize: "1rem", fontWeight: 600, margin: 0 }}>Carolyn Sterling</p>
              <a
                href="mailto:carolyn@grandwaveentertainment.com"
                style={{ color: C.accent, fontSize: "0.85rem", textDecoration: "none" }}
                onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none"; }}
              >
                carolyn@grandwaveentertainment.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <EmailSignup />
      <Footer />
    </>
  );
}
