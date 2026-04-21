import { sql } from '@vercel/postgres';

export async function setupDb() {
  // Shows table
  await sql`
    CREATE TABLE IF NOT EXISTS shows (
      id TEXT PRIMARY KEY,
      date TEXT NOT NULL,
      venue TEXT NOT NULL,
      city TEXT NOT NULL,
      ticket_url TEXT NOT NULL,
      sold_out BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  // Releases table
  await sql`
    CREATE TABLE IF NOT EXISTS releases (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      year TEXT NOT NULL,
      type TEXT NOT NULL,
      youtube_url TEXT,
      spotify_url TEXT,
      apple_music_url TEXT,
      apple_tv_url TEXT,
      amazon_music_url TEXT,
      youtube_music_url TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  // Bio table (single row)
  await sql`
    CREATE TABLE IF NOT EXISTS bio (
      id TEXT PRIMARY KEY DEFAULT 'main',
      text TEXT NOT NULL DEFAULT ''
    )
  `;

  // Awards table
  await sql`
    CREATE TABLE IF NOT EXISTS awards (
      id TEXT PRIMARY KEY,
      text TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0
    )
  `;

  // Seed shows if empty
  const showsCount = await sql`SELECT COUNT(*) FROM shows`;
  if (parseInt(showsCount.rows[0].count) === 0) {
    await sql`
      INSERT INTO shows (id, date, venue, city, ticket_url, sold_out) VALUES
      ('s1',  'Wed, Apr 22, 2026', 'OK Dope Comedy', 'Smithers, BC',  'https://www.jumpcomedy.com/e/ok-dope-presents-stand-up-comedy-live-in-smithers?variant_id=variant_019aefb3-56b8-7fb3-a731-3041f54fa079', false),
      ('s2',  'Thu, Apr 23, 2026', 'OK Dope Comedy', 'Terrace, BC',   'https://www.jumpcomedy.com/e/ok-dope-presents-stand-up-comedy-live-in-terrace', false),
      ('s3',  'Fri, Apr 24, 2026', 'OK Dope Comedy', 'Terrace, BC',   'https://www.jumpcomedy.com/e/ok-dope-presents-stand-up-comedy-live-in-terrace', false),
      ('s4',  'Sat, Apr 25, 2026', 'OK Dope Comedy', 'Kitimat, BC',   'https://www.jumpcomedy.com/e/ok-dope-presents-stand-up-comedy-live-in-kitimat?variant_id=variant_019aefb6-c03e-7c3c-9e5a-6acbf6e85291', false),
      ('s5',  'Wed, Apr 29, 2026', 'Comedy Bar',     'Toronto, ON',   'https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke', false),
      ('s6',  'Wed, May 27, 2026', 'Comedy Bar',     'Toronto, ON',   'https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke', false),
      ('s7',  'Wed, Jun 24, 2026', 'Comedy Bar',     'Toronto, ON',   'https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke', false),
      ('s8',  'Wed, Jul 29, 2026', 'Comedy Bar',     'Toronto, ON',   'https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke', false),
      ('s9',  'Wed, Aug 26, 2026', 'Comedy Bar',     'Toronto, ON',   'https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke', false),
      ('s10', 'Wed, Sep 30, 2026', 'Comedy Bar',     'Toronto, ON',   'https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke', false),
      ('s11', 'Wed, Oct 28, 2026', 'Comedy Bar',     'Toronto, ON',   'https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke', false),
      ('s12', 'Wed, Nov 25, 2026', 'Comedy Bar',     'Toronto, ON',   'https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke', false),
      ('s13', 'Wed, Dec 30, 2026', 'Comedy Bar',     'Toronto, ON',   'https://comedybar.ca/shows/hell-a-stand-up-comedy-show-hosted-by-chris-locke', false)
    `;
  }

  // Seed releases if empty
  const releasesCount = await sql`SELECT COUNT(*) FROM releases`;
  if (parseInt(releasesCount.rows[0].count) === 0) {
    await sql`
      INSERT INTO releases (id, title, year, type, youtube_url, spotify_url, apple_music_url, apple_tv_url, amazon_music_url, youtube_music_url) VALUES
      ('r1', 'TIKI MADNESS', '2026', 'Comedy Special & Album',
        'https://youtu.be/rXBHo63Iz0c',
        'https://open.spotify.com/album/4nzs5kqnBYN0PivHPS91DA',
        'https://music.apple.com/us/album/tiki-madness/1876488088',
        NULL,
        'https://music.amazon.ca/albums/B0GMQ8GK18',
        'https://www.youtube.com/watch?v=RYD2kL-rCJY&list=OLAK5uy_mrfwtCgT2ibeo6Wjr4OuJR0-vR4JvPZfU'),
      ('r2', 'CHRIS & SEAN ARE TONY AND KEITH IN HORROR!', '2020', 'Comedy Album',
        NULL,
        'https://open.spotify.com/artist/5nKDEO5biBXDNRNQ0iAW8Q',
        'https://music.apple.com/search?term=chris+locke',
        NULL, NULL,
        'https://www.youtube.com/watch?v=IuMoknaY9d4&list=OLAK5uy_k1akxEbALCF7I1urjYBAwhYJiAtdJP7SI'),
      ('r3', 'DEMONS ARE EATING MY HEAD', '2016', 'Comedy Album',
        NULL,
        'https://open.spotify.com/artist/5nKDEO5biBXDNRNQ0iAW8Q',
        'https://music.apple.com/search?term=chris+locke',
        NULL, NULL,
        'https://www.youtube.com/watch?v=Emyd-P0e60Q&list=OLAK5uy_kVv2YGgqAxfCGQuQh2PjmfkxKTKABj3go'),
      ('r4', 'THE WORLD IS EMBARRASSING', '2014', 'Comedy Album',
        NULL,
        'https://open.spotify.com/artist/5nKDEO5biBXDNRNQ0iAW8Q',
        'https://music.apple.com/search?term=chris+locke',
        NULL, NULL,
        'https://www.youtube.com/watch?v=58rkCKkvHOU&list=OLAK5uy_m8d2WKmXplw9-Gp2hP0Q5RYKouQA9TYWE')
    `;
  }

  // Seed bio if empty
  const bioCount = await sql`SELECT COUNT(*) FROM bio`;
  if (parseInt(bioCount.rows[0].count) === 0) {
    await sql`
      INSERT INTO bio (id, text) VALUES (
        'main',
        'Chris Locke is an award-winning and critically acclaimed comedian, actor and writer hailing from Toronto, Canada. Described by Vice as "One of Canada''s most staggeringly original comedians," Chris is a Canadian Comedy Award winner who regularly headlines clubs, theatres, and festivals.\n\nChris had a recurring role on RUN THE BURBS (CBC), and a recurring role on the upcoming show SLO PITCH (CRAVE). He has appeared in the Emmy Award winning CBC series WORKIN'' MOMS, WHAT WE DO IN THE SHADOWS (FX/Hulu), MRS. AMERICA (FX), UMBRELLA ACADEMY (Netflix). Chris starred in the critically acclaimed feature film WHO''S YER FATHER? for which he was nominated for a Canadian Screen Award. This Spring (2026), Chris will again be filming a starring role in a feature film, HI, MY NAME''S MIKE!, shooting in London, Ontario.\n\nChris is also the creator, writer, and star of his own series LEARNING NATURE (Funny or Die) and has appeared in several sketch comedy series including KIDS IN THE HALL (Amazon), BARONESS VON SKETCH SHOW (CBC), and TALLBOYZ (CBC). He is a co-host of the podcast Evil Men. As a stand-up comic he has performed at the prestigious Just For Laughs comedy festival in Montreal, the Winnipeg Comedy Festival, and Just for Laughs Toronto.\n\nCurrently, you can see Chris'' stand-up comedy special CAPTAIN BONES on Crave, and his brand new special TIKI MADNESS on YouTube (Macaw Studios).'
      )
    `;
  }

  // Seed awards if empty
  const awardsCount = await sql`SELECT COUNT(*) FROM awards`;
  if (parseInt(awardsCount.rows[0].count) === 0) {
    await sql`
      INSERT INTO awards (id, text, sort_order) VALUES
      ('a1', 'Canadian Comedy Award Winner', 1),
      ('a2', 'Canadian Screen Award Nominee — WHO''S YER FATHER?', 2),
      ('a3', 'Described by Vice as "One of Canada''s most staggeringly original comedians"', 3)
    `;
  }
}

// ─── Type exports ───────────────────────────────────────────────────────────

export interface Show {
  id: string;
  date: string;
  venue: string;
  city: string;
  ticketUrl: string;
  soldOut: boolean;
}

export interface Release {
  id: string;
  title: string;
  year: string;
  type: string;
  youtubeUrl?: string | null;
  spotifyUrl?: string | null;
  appleMusicUrl?: string | null;
  appleTvUrl?: string | null;
  amazonMusicUrl?: string | null;
  youtubeMusicUrl?: string | null;
}

export interface Bio {
  text: string;
}

export interface Award {
  id: string;
  text: string;
  sortOrder: number;
}
