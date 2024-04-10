import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  try {
    const data =
      await sql`INSERT INTO users (username, email, password) VALUES (${email}, ${email}, ${password}) RETURNING *`;
    return NextResponse.json({
      code: 201,
      message: `Success registered user`,
      data,
    });
  } catch (err: any) {
    return NextResponse.json(err.message);
  }
}
