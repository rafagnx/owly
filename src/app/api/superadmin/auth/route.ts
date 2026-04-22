import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { masterPrisma } from "@/lib/tenant/resolver";

const JWT_SECRET = process.env.JWT_SECRET || "build-time-placeholder";
const TOKEN_NAME = "owly-superadmin-token";

// POST /api/superadmin/auth — SuperAdmin login
export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json(
      { error: { code: "VALIDATION_ERROR", message: "Username and password are required" } },
      { status: 400 }
    );
  }

  const admin = await masterPrisma.superAdmin.findUnique({
    where: { username },
  });

  if (!admin) {
    return NextResponse.json(
      { error: { code: "INVALID_CREDENTIALS", message: "Invalid username or password" } },
      { status: 401 }
    );
  }

  const valid = await bcrypt.compare(password, admin.password);
  if (!valid) {
    return NextResponse.json(
      { error: { code: "INVALID_CREDENTIALS", message: "Invalid username or password" } },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { userId: admin.id, role: "superadmin", type: "superadmin" },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  const response = NextResponse.json({
    data: {
      user: { id: admin.id, username: admin.username, name: admin.name },
      message: "Login successful",
    },
  });

  response.cookies.set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}

// DELETE /api/superadmin/auth — SuperAdmin logout
export async function DELETE() {
  const response = NextResponse.json({ data: { message: "Logged out" } });
  response.cookies.set(TOKEN_NAME, "", { maxAge: 0, path: "/" });
  return response;
}
