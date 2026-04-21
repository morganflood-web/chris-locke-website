"use client";

import { Header, Footer, C, EmailSignup } from "../_components/shared";

export default function BioPage() {
  return (
    <>
      <Header activePath="/bio" />
      <main style={{ backgroundColor: C.bg }}>
        {/* Page header */}
        <div style={{ padding: "60px 32px 40px", textAlign: "center", backgroundColor: C.bgAlt, borderBottom: `1px solid ${C.border}` }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "12px" }}>Comedian · Actor · Writer</p>
          <h1 style={{ fontFamily: "var(--font-bebas), Impact, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "0.08em", textTransform: "uppercase", color: C.text, margin: 0 }}>Bio</h1>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "64px",
            padding: "60px 32px 80px",
            maxWidth: "1100px",
            margin: "0 auto",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Photo */}
          <div style={{ flex: "1 1 280px", maxWidth: "400px" }}>
            <img
              src="/images/bio.jpg"
              alt="Chris Locke"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px", objectPosition: "top" }}
            />
          </div>

          {/* Text */}
          <div style={{ flex: "2 1 380px" }}>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "12px" }}>
              About
            </p>
            <h1
              style={{
                fontFamily: "var(--font-bebas), Impact, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "32px",
                lineHeight: 1.0,
                color: C.text,
              }}
            >
              Chris Locke
            </h1>

            <p style={{ color: C.text, lineHeight: 1.8, marginBottom: "20px", fontSize: "1rem" }}>
              Chris Locke is an award-winning and critically acclaimed comedian, actor and writer hailing from Toronto, Canada. Described by Vice as &ldquo;One of Canada&apos;s most staggeringly original comedians,&rdquo; Chris is a Canadian Comedy Award winner who regularly headlines clubs, theatres, and festivals.
            </p>

            <p style={{ color: C.text, lineHeight: 1.8, marginBottom: "20px", fontSize: "1rem" }}>
              Chris had a recurring role on RUN THE BURBS (CBC), and a recurring role on the upcoming show SLO PITCH (CRAVE). He has appeared in the Emmy Award winning CBC series WORKIN&apos; MOMS, WHAT WE DO IN THE SHADOWS (FX/Hulu), MRS. AMERICA (FX), UMBRELLA ACADEMY (Netflix). Chris starred in the critically acclaimed feature film WHO&apos;S YER FATHER? for which he was nominated for a Canadian Screen Award. This Spring (2026), Chris will again be filming a starring role in a feature film, HI, MY NAME&apos;S MIKE!, shooting in London, Ontario.
            </p>

            <p style={{ color: C.text, lineHeight: 1.8, marginBottom: "20px", fontSize: "1rem" }}>
              Chris is also the creator, writer, and star of his own series LEARNING NATURE (Funny or Die) and has appeared in several sketch comedy series including KIDS IN THE HALL (Amazon), BARONESS VON SKETCH SHOW (CBC), and TALLBOYZ (CBC). He is a co-host of the podcast Evil Men. As a stand-up comic he has performed at the prestigious Just For Laughs comedy festival in Montreal, the Winnipeg Comedy Festival, and Just for Laughs Toronto.
            </p>

            <p style={{ color: C.text, lineHeight: 1.8, marginBottom: "32px", fontSize: "1rem" }}>
              Currently, you can see Chris&apos; stand-up comedy special CAPTAIN BONES on Crave, and his brand new special TIKI MADNESS on YouTube (Macaw Studios).
            </p>

            {/* Highlights */}
            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "28px" }}>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.light, marginBottom: "16px" }}>
                Highlights
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "Canadian Comedy Award Winner",
                  "Canadian Screen Award Nominee — WHO'S YER FATHER?",
                  "Described by Vice as \"One of Canada's most staggeringly original comedians\"",
                ].map((item) => (
                  <p
                    key={item}
                    style={{
                      color: C.light,
                      fontSize: "0.9rem",
                      margin: 0,
                      lineHeight: 1.6,
                      paddingLeft: "12px",
                      borderLeft: `2px solid ${C.accent}`,
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <EmailSignup />
      <Footer />
    </>
  );
}
