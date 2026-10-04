import { sql } from '@vercel/postgres';
import type { Show, Release, Bio } from './db';

// Neon free tier suspends compute after ~5min of inactivity.
// First request can time out while the compute wakes up, causing a 500.
// This wrapper retries once after a short delay — by then Neon is warm.
async function withRetry<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch {
    await new Promise((r) => setTimeout(r, 2500));
    return await fn();
  }
}

export async function getShows(): Promise<Show[]> {
  const rows = await withRetry(async () => {
    const result = await sql`
      SELECT id, date, venue, city, ticket_url, sold_out
      FROM shows
      ORDER BY created_at ASC
    `;
    return result.rows;
  });
  return rows.map((row) => ({
    id: row.id,
    date: row.date,
    venue: row.venue,
    city: row.city,
    ticketUrl: row.ticket_url,
    soldOut: row.sold_out,
  }));
}

function parsePlatforms(raw: unknown): import('./db').PlatformLink[] {
  if (!Array.isArray(raw)) return [];
  return (raw as { label?: string; url?: string }[])
    .filter((x) => typeof x?.label === 'string' && typeof x?.url === 'string')
    .map((x) => ({ label: x.label!, url: x.url! }));
}


export async function getReleases(): Promise<Release[]> {
  const rows = await withRetry(async () => {
    const result = await sql`
      SELECT id, title, year, type, cover_image, platforms, sort_order, award_text,
             youtube_url, spotify_url, apple_music_url, apple_tv_url,
             amazon_music_url, youtube_music_url
      FROM releases
      ORDER BY created_at ASC
    `;
    return result.rows;
  });
  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    year: row.year,
    type: (row.type ?? null) as string | null,
    awardText: (row.award_text ?? null) as string | null,
    coverImage: row.cover_image ?? '/images/release-placeholder.svg',
    platforms: parsePlatforms(row.platforms),
    sortOrder: row.sort_order ?? 0,
    youtubeUrl: row.youtube_url,
    spotifyUrl: row.spotify_url,
    appleMusicUrl: row.apple_music_url,
    appleTvUrl: row.apple_tv_url,
    amazonMusicUrl: row.amazon_music_url,
    youtubeMusicUrl: row.youtube_music_url,
  }));
}

export async function getBio(): Promise<Bio> {
  const result = await withRetry(() => sql`SELECT text FROM bio WHERE id = 'main'`);
  return { text: result.rows[0]?.text ?? '' };
}
