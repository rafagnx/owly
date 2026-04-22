export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tenantId = searchParams.get("tenantId");

    if (!tenantId) {
      return NextResponse.json({ error: "tenantId is required" }, { status: 400 });
    }

    return NextResponse.json({
      s3Bucket: process.env.S3_BUCKET || "",
      s3Region: process.env.S3_REGION || "us-east-1",
      retentionDays: 90,
      configured: !!process.env.S3_BUCKET,
    });
  } catch (error) {
    logger.error("Failed to fetch storage status:", error);
    return NextResponse.json({ error: "Failed to fetch storage status" }, { status: 500 });
  }
}