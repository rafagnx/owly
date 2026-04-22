export const dynamic = "force-dynamic";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, generateToken, setAuthCookie, isSetupComplete, hashPassword } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const text = await request.text();
    const body = JSON.parse(text);
    const { action, username, password } = body;

    if (action === "login") {
      const admin = await prisma.admin.findUnique({ where: { username } });
      if (!admin) return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });

      const valid = await verifyPassword(password, admin.password);
      if (!valid) return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });

      const token = generateToken(admin.id, admin.role);
      const cookie = setAuthCookie(token);

      return new Response(JSON.stringify({ success: true, user: { id: admin.id, username: admin.username, name: admin.name } }), {
        status: 200,
        headers: { 
            "Content-Type": "application/json",
            "Set-Cookie": `${cookie.name}=${cookie.value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${cookie.maxAge}`
        }
      });
    }
    
    if (action === "setup") {
      const setupDone = await isSetupComplete();
      if (setupDone) {
        return new Response(JSON.stringify({ error: "Setup already completed" }), { status: 400 });
      }

      const { name } = body;
      if (!name || !username || !password) {
        return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
      }

      const hashedPassword = await hashPassword(password);
      const admin = await prisma.admin.create({
        data: {
          name,
          username,
          password: hashedPassword,
          role: "admin"
        }
      });

      const token = generateToken(admin.id, admin.role);
      const cookie = setAuthCookie(token);

      return new Response(JSON.stringify({ success: true, user: { id: admin.id, username: admin.username, name: admin.name } }), {
        status: 200,
        headers: { 
            "Content-Type": "application/json",
            "Set-Cookie": `${cookie.name}=${cookie.value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${cookie.maxAge}`
        }
      });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), { status: 400 });
  } catch (error: any) {
    console.error("AUTH ERROR:", error.message);
    return new Response(JSON.stringify({ error: "Internal server error", message: error.message }), { status: 500 });
  }
}

export async function GET() {
  const setupDone = await isSetupComplete();
  return new Response(JSON.stringify({ authenticated: false, setupRequired: !setupDone }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
