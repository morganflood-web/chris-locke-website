import { Header, Footer, C, EmailSignup } from "../_components/shared";
import { getReleases } from "@/lib/data";

export const dynamic = "force-dynamic";


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



export default async function ReleasesPage() {
  const releases = await getReleases();
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
          {releases.map((release, idx) => (
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
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "12px", textAlign: "center" }}>
              Podcasts
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas), Impact, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: C.text,
                margin: "0 0 40px",
                textAlign: "center",
              }}
            >
              Podcasts
            </h2>
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
