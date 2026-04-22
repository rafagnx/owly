export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { requireAuth, isAuthenticated } from "@/lib/route-auth";

export async function GET(request: NextRequest) {
  const auth = await requireAuth(request, "customers:read");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const fields = await tenantPrisma.customField.findMany({
      orderBy: { name: "asc" },
    });

    return NextResponse.json(fields);
  } catch (error) {
    logger.error("Failed to fetch custom fields:", error);
    return NextResponse.json({ error: "Failed to fetch fields" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const auth = await requireAuth(request, "settings:update");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const body = await request.json();
    const { name, label, type, placeholder, options, required, visibleInCard } = body;

    if (!name || !label) {
      return NextResponse.json(
        { error: "Name and label are required" },
        { status: 400 }
      );
    }

    const validTypes = ["text", "number", "date", "select", "checkbox", "textarea"];
    if (type && !validTypes.includes(type)) {
      return NextResponse.json(
        { error: `Invalid type. Must be one of: ${validTypes.join(", ")}` },
        { status: 400 }
      );
    }

    const field = await tenantPrisma.customField.create({
      data: {
        name: name.trim(),
        label: label.trim(),
        type: type || "text",
        placeholder: placeholder || "",
        options: options || "",
        required: required || false,
        visibleInCard: visibleInCard !== false,
      },
    });

    return NextResponse.json(field, { status: 201 });
  } catch (error) {
    logger.error("Failed to create custom field:", error);
    return NextResponse.json(
      { error: "Failed to create field" },
      { status: 500 }
    );
  }
}