import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
  const log: Record<string, unknown> = {};
  try {
    // Add new schema columns needed by the current releases page
    for (const stmt of [
      "ALTER TABLE releases ADD COLUMN IF NOT EXISTS cover_image TEXT NOT NULL DEFAULT '/images/release-placeholder.svg'",
      "ALTER TABLE releases ADD COLUMN IF NOT EXISTS platforms JSONB NOT NULL DEFAULT '[]'",
      "ALTER TABLE releases ADD COLUMN IF NOT EXISTS sort_order INTEGER NOT NULL DEFAULT 0",
      "ALTER TABLE releases ADD COLUMN IF NOT EXISTS award_text TEXT",
      "ALTER TABLE releases ADD COLUMN IF NOT EXISTS prime_video_url TEXT",
    ]) {
      try {
        await sql.query(stmt);
        log[stmt.split(' ')[4]] = 'ok';
      } catch (e) { log[stmt.split(' ')[4]] = String(e).slice(0, 120); }
    }

    // Verify actual columns in table
    const cols = await sql`
      SELECT column_name FROM information_schema.columns
      WHERE table_name = 'releases' ORDER BY ordinal_position
    `;
    log.columns = cols.rows.map((r: Record<string,unknown>) => r.column_name);

    // Test the exact getReleases() SELECT
    try {
      const test = await sql`
        SELECT id, title, year, type, cover_image, platforms, sort_order, award_text,
               youtube_url, spotify_url, apple_music_url, apple_tv_url,
               amazon_music_url, youtube_music_url
        FROM releases ORDER BY created_at ASC LIMIT 3
      `;
      log.select_ok = true;
      log.row_count = test.rowCount;
      log.sample = test.rows.map((r: Record<string,unknown>) => ({id: r.id, title: r.title, cover_image: r.cover_image}));
    } catch (e) { log.select_ok = false; log.select_error = String(e).slice(0, 200); }

    return NextResponse.json({ ok: true, log });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
