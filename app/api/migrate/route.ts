import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    await sql`UPDATE releases SET cover_image='/images/tiki-madness.jpg' WHERE title ILIKE '%TIKI MADNESS%'`;
    await sql`UPDATE releases SET cover_image='/images/chris-and-sean.jpg' WHERE title ILIKE '%CHRIS%SEAN%' OR title ILIKE '%TONY%KEITH%'`;
    await sql`UPDATE releases SET cover_image='/images/demons.jpg' WHERE title ILIKE '%DEMONS%'`;
    await sql`UPDATE releases SET cover_image='/images/world-embarrassing.jpg' WHERE title ILIKE '%WORLD%EMBARRASS%'`;
    await sql`UPDATE releases SET cover_image='/images/captain-bones.jpg' WHERE title ILIKE '%CAPTAIN BONES%'`;
    const r = await sql`SELECT id, title, cover_image FROM releases ORDER BY created_at ASC`;
    return NextResponse.json({ ok: true, releases: r.rows });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
