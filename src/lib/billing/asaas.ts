/**
 * ASAAS Payment Gateway Integration
 * https://docs.asaas.com/
 */

const ASAAS_API_BASE = "https://api.asaas.com/v3";
const ASAAS_SANDBOX_API_BASE = "https://sandbox.asaas.com/api/v3";

export interface AsaasConfig {
  apiKey: string;
  sandbox?: boolean;
}

function getBaseUrl(config: AsaasConfig): string {
  return config.sandbox ? ASAAS_SANDBOX_API_BASE : ASAAS_API_BASE;
}

async function asaasRequest(config: AsaasConfig, method: string, path: string, body?: unknown) {
  const url = `${getBaseUrl(config)}${path}`;
  
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      "access_token": config.apiKey,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(`ASAAS API error: ${JSON.stringify(data)}`);
  }

  return data;
}

/**
 * Create customer in ASAAS
 */
export async function createAsaasCustomer(config: AsaasConfig, customer: {
  name: string;
  email: string;
  cpfCnpj: string;
  phone?: string;
  externalReference?: string;
}) {
  return asaasRequest(config, "POST", "/customers", customer);
}

/**
 * Create a subscription (recurring payment)
 */
export async function createAsaasSubscription(config: AsaasConfig, subscription: {
  customer: string; // ASAAS customer ID
  billingType: "BOLETO" | "CREDIT_CARD" | "PIX";
  value: number;
  cycle: "MONTHLY" | "YEARLY";
  description?: string;
  externalReference?: string;
  nextDueDate?: string; // YYYY-MM-DD
}) {
  return asaasRequest(config, "POST", "/subscriptions", subscription);
}

/**
 * Cancel subscription
 */
export async function cancelAsaasSubscription(config: AsaasConfig, subscriptionId: string) {
  return asaasRequest(config, "DELETE", `/subscriptions/${subscriptionId}`);
}

/**
 * Get subscription details
 */
export async function getAsaasSubscription(config: AsaasConfig, subscriptionId: string) {
  return asaasRequest(config, "GET", `/subscriptions/${subscriptionId}`);
}

/**
 * Create a one-time charge
 */
export async function createAsaasCharge(config: AsaasConfig, charge: {
  customer: string;
  billingType: "BOLETO" | "CREDIT_CARD" | "PIX";
  value: number;
  dueDate: string; // YYYY-MM-DD
  description?: string;
  externalReference?: string;
}) {
  return asaasRequest(config, "POST", "/payments", charge);
}

/**
 * Get payment details
 */
export async function getAsaasPayment(config: AsaasConfig, paymentId: string) {
  return asaasRequest(config, "GET", `/payments/${paymentId}`);
}

/**
 * Get PIX QR Code for a payment
 */
export async function getAsaasPixQrCode(config: AsaasConfig, paymentId: string) {
  return asaasRequest(config, "GET", `/payments/${paymentId}/pixQrCode`);
}

/**
 * Parse ASAAS webhook event
 */
export function parseAsaasWebhook(body: unknown): AsaasWebhookEvent {
  const data = body as Record<string, unknown>;
  const payment = data.payment as Record<string, unknown> | undefined;

  return {
    event: data.event as string,
    payment: payment ? {
      id: payment.id as string,
      customer: payment.customer as string,
      value: payment.value as number,
      status: payment.status as string,
      billingType: payment.billingType as string,
      externalReference: payment.externalReference as string || "",
      confirmedDate: payment.confirmedDate as string || "",
      paymentDate: payment.paymentDate as string || "",
    } : null,
  };
}

export interface AsaasWebhookEvent {
  event: string; // PAYMENT_RECEIVED, PAYMENT_OVERDUE, PAYMENT_CONFIRMED, etc.
  payment: {
    id: string;
    customer: string;
    value: number;
    status: string;
    billingType: string;
    externalReference: string;
    confirmedDate: string;
    paymentDate: string;
  } | null;
}

/**
 * Map ASAAS payment status to subscription status
 */
export function mapPaymentStatus(asaasEvent: string): "active" | "past_due" | "cancelled" {
  switch (asaasEvent) {
    case "PAYMENT_RECEIVED":
    case "PAYMENT_CONFIRMED":
      return "active";
    case "PAYMENT_OVERDUE":
      return "past_due";
    case "PAYMENT_DELETED":
    case "PAYMENT_REFUNDED":
      return "cancelled";
    default:
      return "active";
  }
}
