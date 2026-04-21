import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

/**
 * GET /api/migrate
 * Idempotent migrations — adds missing records without touching existing data.
 */
export async function GET() {
  try {
    // Add prime_video_url column if it doesn't exist
    await sql`
      ALTER TABLE releases ADD COLUMN IF NOT EXISTS prime_video_url TEXT
    `;

    // Add Captain Bones if not already in DB
    const existing = await sql`SELECT id FROM releases WHERE id = 'r-captain-bones'`;
    if (existing.rows.length === 0) {
      await sql`
        INSERT INTO releases (id, title, year, type, apple_tv_url, prime_video_url, youtube_url, spotify_url, apple_music_url, amazon_music_url, youtube_music_url)
        VALUES (
          'r-captain-bones',
          'CAPTAIN BONES',
          '2022',
          'Comedy Special',
          'https://tv.apple.com/ca/show/chris-locke-captain-bones/umc.cmc.qqhl7459pcvgs4bz7ne5s7h7',
          'https://www.primevideo.com/detail/Chris-Locke-Captain-Bones/0JQLOJNNHH18BV5GDWKDQ20BPP',
          NULL, NULL, NULL, NULL, NULL
        )
      `;
    }

    return NextResponse.json({ ok: true, message: 'Migration complete — Captain Bones added.' });
  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
