import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    await sql`UPDATE releases SET sort_order = 0 WHERE id = 'r1'`;
    await sql`UPDATE releases SET sort_order = 1 WHERE id = 'r-captain-bones'`;
    await sql`UPDATE releases SET sort_order = 2 WHERE id = 'r2'`;
    await sql`UPDATE releases SET sort_order = 3 WHERE id = 'r3'`;
    await sql`UPDATE releases SET sort_order = 4 WHERE id = 'r4'`;
    const r = await sql`SELECT id, title, sort_order FROM releases ORDER BY sort_order ASC`;
    return NextResponse.json({ ok: true, order: r.rows.map((x: Record<string,unknown>) => x.sort_order + ": " + x.title) });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
