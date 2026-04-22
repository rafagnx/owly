export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { requireAuth, isAuthenticated } from "@/lib/route-auth";

export async function POST(request: NextRequest) {
  const auth = await requireAuth(request, "automation:execute");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma } = auth;

  try {
    const body = await request.json();
    const { nodeId, flowId, nodeData, context } = body;

    if (!nodeId || !flowId) {
      return NextResponse.json(
        { error: "nodeId and flowId are required" },
        { status: 400 }
      );
    }

    const flow = await tenantPrisma.flow.findUnique({
      where: { id: flowId },
    });

    if (!flow) {
      return NextResponse.json({ error: "Flow not found" }, { status: 404 });
    }

    const nodes = flow.nodes as Array<{
      id: string;
      type: string;
      method?: string;
      url?: string;
      headers?: Record<string, string>;
      body?: string;
      timeout?: number;
    }>;
    const node = nodes.find((n) => n.id === nodeId);

    if (!node || node.type !== "http") {
      return NextResponse.json({ error: "HTTP node not found" }, { status: 404 });
    }

    const { method = "POST", url, headers = {}, body: requestBody, timeout = 30000 } = node;

    if (!url) {
      return NextResponse.json({ error: "URL is required for HTTP node" }, { status: 400 });
    }

    const processedBody = typeof requestBody === "string"
      ? requestBody.replace(/\{\{(\w+)\}\}/g, (_, key) => context?.[key] || "")
      : JSON.stringify(requestBody || {});

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...(method !== "GET" && { body: processedBody }),
      signal: controller.signal,
    }).finally(() => clearTimeout(timeoutId));

    const responseData = await response.text().catch(() => "");

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      data: responseData,
      headers: Object.fromEntries(response.headers.entries()),
    });
  } catch (error) {
    logger.error("HTTP node execution failed:", error);
    return NextResponse.json(
      { error: "HTTP request failed", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}