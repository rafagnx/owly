import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rate-limit";

const API_VERSION = "2026-04-22";
const BASE_DOMAIN = process.env.BASE_DOMAIN || "localhost";
const SUPERADMIN_SUBDOMAIN = "admin";

const SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "X-API-Version": API_VERSION,
};

const CORS_ORIGIN = process.env.CORS_ORIGIN || "";

function generateRequestId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function addHeaders(
  response: NextResponse,
  requestId: string,
  rateLimit?: { limit: number; remaining: number; resetAt: number }
): NextResponse {
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value);
  }

  response.headers.set("X-Request-Id", requestId);

  if (rateLimit) {
    response.headers.set("X-RateLimit-Limit", String(rateLimit.limit));
    response.headers.set("X-RateLimit-Remaining", String(Math.max(0, rateLimit.remaining)));
    response.headers.set("X-RateLimit-Reset", String(Math.ceil(rateLimit.resetAt / 1000)));
  }

  if (CORS_ORIGIN) {
    response.headers.set("Access-Control-Allow-Origin", CORS_ORIGIN);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-API-Key, X-Request-Id, X-Tenant-Id");
    response.headers.set("Access-Control-Expose-Headers", "X-Request-Id, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-API-Version, X-Tenant-Id");
    response.headers.set("Access-Control-Max-Age", "86400");
  }

  return response;
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function extractSubdomain(hostname: string): string | null {
  const host = hostname.split(":")[0];
  if (host === "localhost" || host === "127.0.0.1") return null;
  if (host.endsWith(".localhost")) {
    const sub = host.replace(".localhost", "");
    if (sub && sub !== "www" && sub !== "app") return sub;
    return null;
  }
  if (BASE_DOMAIN && host.endsWith(`.${BASE_DOMAIN}`)) {
    const sub = host.replace(`.${BASE_DOMAIN}`, "");
    if (sub && sub !== "www" && sub !== "app") return sub;
    return null;
  }
  if (host === BASE_DOMAIN) return null;
  return null;
}

function getContextType(hostname: string): "superadmin" | "tenant" | "landing" | "custom_domain" {
  const subdomain = extractSubdomain(hostname);
  if (subdomain === SUPERADMIN_SUBDOMAIN) return "superadmin";
  if (subdomain) return "tenant";
  const host = hostname.split(":")[0];
  if (host !== "localhost" && host !== "127.0.0.1" && host !== BASE_DOMAIN && !host.endsWith(".localhost")) {
    return "custom_domain";
  }
  return "landing";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestId = request.headers.get("x-request-id") || generateRequestId();
  const hostname = request.headers.get("host") || "localhost";

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg")
  ) {
    return NextResponse.next();
  }

  if (request.method === "OPTIONS" && CORS_ORIGIN) {
    return addHeaders(new NextResponse(null, { status: 204 }), requestId);
  }

  const contextType = getContextType(hostname);
  const subdomain = extractSubdomain(hostname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-request-id", requestId);
  requestHeaders.set("x-context-type", contextType);
  
  if (subdomain && contextType === "tenant") {
    requestHeaders.set("x-tenant-slug", subdomain);
  }
  if (contextType === "custom_domain") {
    requestHeaders.set("x-custom-domain", hostname.split(":")[0]);
  }

  // ========== SUPERADMIN ROUTES ==========
  if (contextType === "superadmin") {
    // Rewrite all non-API paths that don't start with /superadmin
    if (!pathname.startsWith("/superadmin") && !pathname.startsWith("/api")) {
      const url = request.nextUrl.clone();
      url.pathname = `/superadmin${pathname}`;
      return addHeaders(NextResponse.rewrite(url, { request: { headers: requestHeaders } }), requestId);
    }
    return addHeaders(NextResponse.next({ request: { headers: requestHeaders } }), requestId);
  }

  // ========== LANDING PAGE & OTHERS ==========
  // Allow landing page to fall through to authentication check for now
  // since the root is currently the dashboard.

  // ========== TENANT & CUSTOM DOMAIN ROUTES ==========
  const publicPaths = ["/login", "/setup", "/api/auth", "/api/health", "/api/openapi.json", "/api/ping"];
  const isPublic = publicPaths.some((p) => pathname.startsWith(p));
  
  // Allow webhook/channel endpoints without auth
  if (
    pathname.startsWith("/api/channels/whatsapp") ||
    pathname.startsWith("/api/channels/phone/") ||
    pathname.startsWith("/api/channels/sms") ||
    pathname.startsWith("/api/channels/telegram") ||
    pathname.startsWith("/api/channels/whatsapp-cloud") ||
    pathname.startsWith("/api/channels/instagram") ||
    pathname.startsWith("/api/channels/messenger")
  ) {
    return addHeaders(NextResponse.next({ request: { headers: requestHeaders } }), requestId);
  }

  if (isPublic) {
    return addHeaders(NextResponse.next({ request: { headers: requestHeaders } }), requestId);
  }

  let apiRateInfo: { limit: number; remaining: number; resetAt: number } | undefined;
  if (pathname.startsWith("/api/")) {
    const ip = getClientIp(request);
    const tenantKey = subdomain || "default";
    const rateResult = checkRateLimit(`api:${tenantKey}:${ip}`, RATE_LIMITS.api);

    if (!rateResult.allowed) {
      const response = NextResponse.json(
        { error: { code: "RATE_LIMIT_EXCEEDED", message: "Too many requests. Please try again later.", requestId } },
        { status: 429 }
      );
      response.headers.set("Retry-After", String(Math.ceil((rateResult.resetAt - Date.now()) / 1000)));
      return addHeaders(response, requestId, { limit: RATE_LIMITS.api.maxRequests, remaining: 0, resetAt: rateResult.resetAt });
    }

    apiRateInfo = {
      limit: RATE_LIMITS.api.maxRequests,
      remaining: rateResult.remaining,
      resetAt: rateResult.resetAt,
    };
  }

  const token = request.cookies.get("owly-token")?.value;
  const apiKey = request.headers.get("x-api-key");
  
  // Skip auth check for public channel webhooks
  const isChannelWebhook = 
    pathname.startsWith("/api/channels/whatsapp") ||
    pathname.startsWith("/api/channels/whatsapp-cloud") ||
    pathname.startsWith("/api/channels/telegram") ||
    pathname.startsWith("/api/channels/phone/") ||
    pathname.startsWith("/api/channels/sms") ||
    pathname.startsWith("/api/channels/instagram") ||
    pathname.startsWith("/api/channels/messenger");

  if (!token && !apiKey && !isChannelWebhook) {
    if (pathname.startsWith("/api/")) {
      return addHeaders(
        NextResponse.json(
          { error: { code: "UNAUTHORIZED", message: "Authentication required", requestId } },
          { status: 401 }
        ),
        requestId,
        apiRateInfo
      );
    }
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return addHeaders(NextResponse.next({ request: { headers: requestHeaders } }), requestId, apiRateInfo);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
