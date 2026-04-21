"use client";

import { Header, Footer, C, EmailSignup } from "../_components/shared";

const RELEASES = [
  {
    id: "tiki-madness",
    title: "TIKI MADNESS",
    year: "2026",
    type: "Comedy Special & Album",
    description: "Brand new comedy special and album. Out now on YouTube via Macaw Studios.",
    platforms: [
      { label: "Watch on YouTube", url: "https://youtu.be/rXBHo63Iz0c" },
      { label: "Spotify", url: "https://open.spotify.com/album/4nzs5kqnBYN0PivHPS91DA" },
      { label: "Apple Music", url: "https://music.apple.com/us/album/tiki-madness/1876488088" },
      { label: "Amazon Music", url: "https://music.amazon.ca/albums/B0GMQ8GK18" },
      { label: "YouTube Music", url: "https://www.youtube.com/watch?v=RYD2kL-rCJY&list=OLAK5uy_mrfwtCgT2ibeo6Wjr4OuJR0-vR4JvPZfU" },
    ],
    artworkFile: "/images/tiki-madness.jpg",
  },
  {
    id: "captain-bones",
    title: "CAPTAIN BONES",
    year: "2022",
    type: "Comedy Special",
    description: "Chris Locke's critically acclaimed stand-up special. Originally premiered on Crave.",
    platforms: [
      { label: "Watch on Apple TV", url: "https://tv.apple.com/ca/show/chris-locke-captain-bones/umc.cmc.qqhl7459pcvgs4bz7ne5s7h7" },
      { label: "Watch on Prime Video", url: "https://www.primevideo.com/detail/Chris-Locke-Captain-Bones/0JQLOJNNHH18BV5GDWKDQ20BPP" },
    ],
    artworkFile: "/images/captain-bones.jpg",
  },
  {
    id: "chris-and-sean",
    title: "CHRIS & SEAN ARE TONY AND KEITH IN HORROR!",
    year: "2020",
    type: "Comedy Album",
    description: "A comedy album collaboration.",
    platforms: [
      { label: "YouTube Music", url: "https://www.youtube.com/watch?v=IuMoknaY9d4&list=OLAK5uy_k1akxEbALCF7I1urjYBAwhYJiAtdJP7SI" },
      { label: "Spotify", url: "https://open.spotify.com/artist/5nKDEO5biBXDNRNQ0iAW8Q" },
      { label: "Apple Music", url: "https://music.apple.com/search?term=chris+locke" },
    ],
    artworkFile: "/images/chris-and-sean.jpg",
  },
  {
    id: "demons",
    title: "DEMONS ARE EATING MY HEAD",
    year: "2016",
    type: "Comedy Album",
    description: "Comedy album.",
    platforms: [
      { label: "YouTube Music", url: "https://www.youtube.com/watch?v=Emyd-P0e60Q&list=OLAK5uy_kVv2YGgqAxfCGQuQh2PjmfkxKTKABj3go" },
      { label: "Spotify", url: "https://open.spotify.com/artist/5nKDEO5biBXDNRNQ0iAW8Q" },
      { label: "Apple Music", url: "https://music.apple.com/search?term=chris+locke" },
    ],
    artworkFile: "/images/demons.jpg",
  },
  {
    id: "world-embarrassing",
    title: "THE WORLD IS EMBARRASSING",
    year: "2014",
    type: "Comedy Album",
    description: "Debut comedy album.",
    platforms: [
      { label: "YouTube Music", url: "https://www.youtube.com/watch?v=58rkCKkvHOU&list=OLAK5uy_m8d2WKmXplw9-Gp2hP0Q5RYKouQA9TYWE" },
      { label: "Spotify", url: "https://open.spotify.com/artist/5nKDEO5biBXDNRNQ0iAW8Q" },
      { label: "Apple Music", url: "https://music.apple.com/search?term=chris+locke" },
    ],
    artworkFile: "/images/world-embarrassing.jpg",
  },
];

const PODCASTS = [
  {
    id: "evil-men",
    title: "EVIL MEN",
    type: "Podcast",
    description: "Co-hosted by Chris Locke on The Sonar Network.",
    artworkFile: "/images/podcast-evil-men.jpg",
    platforms: [
      { label: "Listen on The Sonar Network", url: "https://thesonarnetwork.com/evil-men/" },
    ],
  },
  {
    id: "happy-good",
    title: "HAPPY GOOD WITH CHRIS LOCKE",
    type: "Podcast",
    description: "Chris Locke's podcast on The Sonar Network.",
    artworkFile: "/images/podcast-happy-good.jpg",
    platforms: [
      { label: "Listen on The Sonar Network", url: "https://thesonarnetwork.com/happy-good-with-chris-locke/" },
    ],
  },
  {
    id: "utopia-to-me",
    title: "UTOPIA TO ME WITH CHRIS LOCKE",
    type: "Podcast",
    description: "Chris Locke's podcast on The Sonar Network.",
    artworkFile: "/images/podcast-utopia-to-me.jpg",
    platforms: [
      { label: "Listen on The Sonar Network", url: "https://thesonarnetwork.com/utopia-to-me-with-chris-locke/" },
    ],
  },
];

function AlbumPlaceholder({ id, title, artworkFile }: { id: string; title: string; artworkFile: string | null }) {
  if (artworkFile) {
    return (
      <img
        src={artworkFile}
        alt={title}
        style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }}
      />
    );
  }
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        backgroundColor: C.bgDeep,
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${C.border}`,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-bebas), Impact, sans-serif",
          fontSize: "clamp(1.2rem, 3vw, 2rem)",
          letterSpacing: "0.1em",
          color: C.light,
          textAlign: "center",
          padding: "16px",
        }}
      >
        {title}
      </span>
    </div>
  );
}



export default function ReleasesPage() {
  return (
    <>
      <Header activePath="/releases" />
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
            Specials &amp; Albums
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
            Releases
          </h1>
        </div>

        {/* Albums & Specials */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 32px 0" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.light, marginBottom: "32px", fontWeight: 400 }}>
            Specials &amp; Albums
          </p>
          {RELEASES.map((release, idx) => (
            <div
              key={release.id}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "40px",
                alignItems: "flex-start",
                marginBottom: idx < RELEASES.length - 1 ? "80px" : "64px",
                flexWrap: "wrap",
                paddingBottom: idx < RELEASES.length - 1 ? "80px" : 0,
                borderBottom: idx < RELEASES.length - 1 ? `1px solid ${C.border}` : "none",
              }}
            >
              {/* Left: album art */}
              <div style={{ flex: "0 0 240px", maxWidth: "280px", alignSelf: "flex-start" }}>
                <AlbumPlaceholder id={release.id} title={release.title} artworkFile={release.artworkFile} />
              </div>

              {/* Right: info + platform buttons */}
              <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "12px", alignSelf: "flex-start" }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.light, margin: 0 }}>
                  {release.type} · {release.year}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-bebas), Impact, sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    margin: 0,
                    lineHeight: 1.0,
                    color: C.text,
                  }}
                >
                  {release.title}
                </h2>
                {release.description && (
                  <p style={{ color: C.light, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}>{release.description}</p>
                )}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
                  {release.platforms.map((btn) => (
                    <a
                      key={btn.label}
                      href={btn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: `1px solid ${C.accent}`,
                        color: C.text,
                        textAlign: "center",
                        padding: "10px 0",
                        borderRadius: "999px",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        letterSpacing: "0.05em",
                        width: "260px",
                        display: "block",
                      }}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Podcasts */}
        <div style={{ backgroundColor: C.bgWarm, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 32px" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.light, marginBottom: "40px", fontWeight: 400 }}>
              Podcasts
            </p>
            {PODCASTS.map((podcast, idx) => (
              <div
                key={podcast.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "40px",
                  alignItems: "flex-start",
                  marginBottom: idx < PODCASTS.length - 1 ? "64px" : 0,
                  flexWrap: "wrap",
                  paddingBottom: idx < PODCASTS.length - 1 ? "64px" : 0,
                  borderBottom: idx < PODCASTS.length - 1 ? `1px solid ${C.border}` : "none",
                }}
              >
                {/* Left: podcast artwork */}
                <div style={{ flex: "0 0 240px", maxWidth: "280px", alignSelf: "flex-start" }}>
                  <img
                    src={podcast.artworkFile}
                    alt={podcast.title}
                    style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }}
                  />
                </div>

                {/* Right: info + link */}
                <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "12px", alignSelf: "flex-start" }}>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.light, margin: 0 }}>
                    {podcast.type}
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-bebas), Impact, sans-serif",
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      margin: 0,
                      lineHeight: 1.1,
                      color: C.text,
                    }}
                  >
                    {podcast.title}
                  </h2>
                  <p style={{ color: C.light, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}>{podcast.description}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                    {podcast.platforms.map((btn) => (
                      <a
                        key={btn.label}
                        href={btn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          border: `1px solid ${C.accent}`,
                          color: C.text,
                          textAlign: "center",
                          padding: "10px 0",
                          borderRadius: "999px",
                          fontSize: "0.85rem",
                          textDecoration: "none",
                          letterSpacing: "0.05em",
                          width: "260px",
                          display: "block",
                        }}
                      >
                        {btn.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <EmailSignup />
      <Footer />
    </>
  );
}
