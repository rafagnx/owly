import { NextResponse } from "next/server";

export async function GET() {
  console.log("PING: Request received!");
  return NextResponse.json({ message: "pong", timestamp: new Date().toISOString() });
}
