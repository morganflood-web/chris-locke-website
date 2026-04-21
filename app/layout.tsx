import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Chris Locke | Comedian, Actor & Writer",
  description:
    "Chris Locke is an award-winning comedian, actor, and writer from Toronto. Canadian Comedy Award winner. Watch TIKI MADNESS on YouTube and CAPTAIN BONES on Crave. Recurring roles on Run the Burbs (CBC), What We Do in the Shadows (FX), and more.",
  openGraph: {
    title: "Chris Locke | Comedian, Actor & Writer",
    description:
      "Award-winning Canadian comedian. Watch TIKI MADNESS on YouTube and CAPTAIN BONES on Crave.",
    url: "https://www.chrislockecomedy.com",
    siteName: "Chris Locke",
    images: [
      {
        url: "/images/tiki-madness.jpg",
        width: 1200,
        height: 630,
        alt: "Chris Locke — Comedian",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Locke | Comedian, Actor & Writer",
    description:
      "Award-winning Canadian comedian. Watch TIKI MADNESS on YouTube and CAPTAIN BONES on Crave.",
    images: ["/images/tiki-madness.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${inter.className}`}
        style={{ backgroundColor: "#EEF6FA", color: "#1A3040", margin: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
