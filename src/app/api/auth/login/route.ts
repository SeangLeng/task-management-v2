import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const requestBody = await req.json();
  const { email, password } = requestBody;
  try {
    if (email && password) {
      const user =
        await sql`SELECT * FROM users WHERE email = ${email} OR username = ${email} AND password = ${password}`;
      return NextResponse.json({
        user: {
          id: user.rows[0].id,
          email: user.rows[0].email,
          username: user.rows[0].username,
        },
        message: "login successfully",
        code: 200,
      });
    }
  } catch (err: any) {
    return NextResponse.json({
      message: "something went wrong",
    });
  }
}
