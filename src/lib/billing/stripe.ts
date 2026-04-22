/**
 * Stripe Payment Gateway Integration
 */

const STRIPE_API_BASE = "https://api.stripe.com/v1";

export interface StripeConfig {
  secretKey: string;
  webhookSecret: string;
}

async function stripeRequest(config: StripeConfig, method: string, path: string, body?: Record<string, string>) {
  const url = `${STRIPE_API_BASE}${path}`;

  const response = await fetch(url, {
    method,
    headers: {
      "Authorization": `Bearer ${config.secretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body ? new URLSearchParams(body).toString() : undefined,
  });

  return response.json();
}

export async function createStripeCustomer(config: StripeConfig, customer: { name: string; email: string; metadata?: Record<string, string> }) {
  const body: Record<string, string> = { name: customer.name, email: customer.email };
  if (customer.metadata) {
    Object.entries(customer.metadata).forEach(([key, value]) => {
      body[`metadata[${key}]`] = value;
    });
  }
  return stripeRequest(config, "POST", "/customers", body);
}

export async function createStripeCheckoutSession(config: StripeConfig, session: {
  customerId: string;
  priceId: string;
  successUrl: string;
  cancelUrl: string;
  mode?: "subscription" | "payment";
}) {
  return stripeRequest(config, "POST", "/checkout/sessions", {
    customer: session.customerId,
    "line_items[0][price]": session.priceId,
    "line_items[0][quantity]": "1",
    mode: session.mode || "subscription",
    success_url: session.successUrl,
    cancel_url: session.cancelUrl,
  });
}

export async function cancelStripeSubscription(config: StripeConfig, subscriptionId: string) {
  return stripeRequest(config, "DELETE", `/subscriptions/${subscriptionId}`);
}

export async function getStripeSubscription(config: StripeConfig, subscriptionId: string) {
  return stripeRequest(config, "GET", `/subscriptions/${subscriptionId}`);
}

export function parseStripeWebhook(body: unknown): StripeWebhookEvent {
  const data = body as Record<string, unknown>;
  const object = data.data as Record<string, unknown>;
  const eventObject = object?.object as Record<string, unknown>;

  return {
    type: data.type as string,
    object: eventObject ? {
      id: eventObject.id as string,
      customer: eventObject.customer as string,
      status: eventObject.status as string,
      currentPeriodEnd: eventObject.current_period_end as number,
      canceledAt: eventObject.canceled_at as number | null,
      metadata: eventObject.metadata as Record<string, string> || {},
    } : null,
  };
}

export interface StripeWebhookEvent {
  type: string;
  object: {
    id: string;
    customer: string;
    status: string;
    currentPeriodEnd: number;
    canceledAt: number | null;
    metadata: Record<string, string>;
  } | null;
}

export function mapStripeStatus(eventType: string): "active" | "past_due" | "cancelled" {
  switch (eventType) {
    case "invoice.paid":
    case "customer.subscription.updated":
      return "active";
    case "invoice.payment_failed":
      return "past_due";
    case "customer.subscription.deleted":
      return "cancelled";
    default:
      return "active";
  }
}
