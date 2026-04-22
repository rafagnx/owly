/**
 * Billing Gateway Factory — Routes to ASAAS or Stripe based on config
 */

import { createAsaasCustomer, createAsaasSubscription, cancelAsaasSubscription, type AsaasConfig } from "./asaas";
import { createStripeCustomer, createStripeCheckoutSession, cancelStripeSubscription, type StripeConfig } from "./stripe";

export type BillingGateway = "asaas" | "stripe";

export interface BillingConfig {
  gateway: BillingGateway;
  apiKey: string;
  webhookSecret: string;
  sandbox?: boolean;
}

function getAsaasConfig(config: BillingConfig): AsaasConfig {
  return { apiKey: config.apiKey, sandbox: config.sandbox };
}

function getStripeConfig(config: BillingConfig): StripeConfig {
  return { secretKey: config.apiKey, webhookSecret: config.webhookSecret };
}

/**
 * Create a customer in the billing gateway
 */
export async function createBillingCustomer(config: BillingConfig, customer: {
  name: string;
  email: string;
  document?: string; // CPF/CNPJ for ASAAS
  tenantId: string;
}): Promise<{ customerId: string }> {
  if (config.gateway === "asaas") {
    const result = await createAsaasCustomer(getAsaasConfig(config), {
      name: customer.name,
      email: customer.email,
      cpfCnpj: customer.document || "",
      externalReference: customer.tenantId,
    });
    return { customerId: result.id };
  }

  if (config.gateway === "stripe") {
    const result = await createStripeCustomer(getStripeConfig(config), {
      name: customer.name,
      email: customer.email,
      metadata: { tenantId: customer.tenantId },
    });
    return { customerId: result.id };
  }

  throw new Error(`Unsupported billing gateway: ${config.gateway}`);
}

/**
 * Create a subscription
 */
export async function createBillingSubscription(config: BillingConfig, subscription: {
  customerId: string;
  planValue: number;
  cycle: "monthly" | "yearly";
  tenantId: string;
  successUrl?: string;
  cancelUrl?: string;
  priceId?: string; // Stripe only
}): Promise<{ subscriptionId: string; checkoutUrl?: string }> {
  if (config.gateway === "asaas") {
    const result = await createAsaasSubscription(getAsaasConfig(config), {
      customer: subscription.customerId,
      billingType: "PIX",
      value: subscription.planValue,
      cycle: subscription.cycle === "monthly" ? "MONTHLY" : "YEARLY",
      externalReference: subscription.tenantId,
    });
    return { subscriptionId: result.id };
  }

  if (config.gateway === "stripe") {
    if (!subscription.priceId || !subscription.successUrl || !subscription.cancelUrl) {
      throw new Error("Stripe requires priceId, successUrl, and cancelUrl");
    }
    const result = await createStripeCheckoutSession(getStripeConfig(config), {
      customerId: subscription.customerId,
      priceId: subscription.priceId,
      successUrl: subscription.successUrl,
      cancelUrl: subscription.cancelUrl,
    });
    return { subscriptionId: result.subscription || "", checkoutUrl: result.url };
  }

  throw new Error(`Unsupported billing gateway: ${config.gateway}`);
}

/**
 * Cancel a subscription
 */
export async function cancelBillingSubscription(config: BillingConfig, subscriptionId: string): Promise<void> {
  if (config.gateway === "asaas") {
    await cancelAsaasSubscription(getAsaasConfig(config), subscriptionId);
    return;
  }

  if (config.gateway === "stripe") {
    await cancelStripeSubscription(getStripeConfig(config), subscriptionId);
    return;
  }

  throw new Error(`Unsupported billing gateway: ${config.gateway}`);
}

/**
 * Get billing config from environment
 */
export function getBillingConfig(): BillingConfig | null {
  const gateway = process.env.BILLING_GATEWAY as BillingGateway;
  const apiKey = process.env.BILLING_API_KEY;
  const webhookSecret = process.env.BILLING_WEBHOOK_SECRET || "";

  if (!gateway || !apiKey) return null;

  return {
    gateway,
    apiKey,
    webhookSecret,
    sandbox: process.env.NODE_ENV !== "production",
  };
}
