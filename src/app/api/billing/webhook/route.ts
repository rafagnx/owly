import { NextRequest, NextResponse } from "next/server";
import { parseAsaasWebhook, mapPaymentStatus } from "@/lib/billing/asaas";
import { parseStripeWebhook, mapStripeStatus } from "@/lib/billing/stripe";
import { masterPrisma } from "@/lib/tenant/resolver";

// POST /api/billing/webhook — Handle payment gateway webhooks
export async function POST(request: NextRequest) {
  const body = await request.json();
  const gateway = process.env.BILLING_GATEWAY || "";

  try {
    if (gateway === "asaas") {
      const event = parseAsaasWebhook(body);
      
      if (event.payment) {
        const tenantId = event.payment.externalReference;
        const status = mapPaymentStatus(event.event);

        if (tenantId) {
          // Update subscription status
          await masterPrisma.subscription.updateMany({
            where: { tenantId },
            data: { status },
          });

          // If payment confirmed, ensure tenant is active
          if (status === "active") {
            await masterPrisma.tenant.updateMany({
              where: { id: tenantId },
              data: { status: "active" },
            });
          }

          // If payment overdue/cancelled, suspend after grace period
          if (status === "past_due" || status === "cancelled") {
            await masterPrisma.tenant.updateMany({
              where: { id: tenantId },
              data: { status: status === "cancelled" ? "suspended" : "active" },
            });
          }

          // Record payment
          if (event.event === "PAYMENT_RECEIVED" || event.event === "PAYMENT_CONFIRMED") {
            await masterPrisma.payment.create({
              data: {
                tenantId,
                amount: event.payment.value,
                status: "paid",
                gatewayId: event.payment.id,
                gatewayProvider: "asaas",
                paidAt: new Date(),
              },
            });
          }
        }
      }
    }

    if (gateway === "stripe") {
      const event = parseStripeWebhook(body);
      
      if (event.object) {
        const tenantId = event.object.metadata?.tenantId || "";
        const status = mapStripeStatus(event.type);

        if (tenantId) {
          await masterPrisma.subscription.updateMany({
            where: { tenantId },
            data: { status },
          });

          if (status === "active") {
            await masterPrisma.tenant.updateMany({
              where: { id: tenantId },
              data: { status: "active" },
            });
          }

          if (status === "cancelled") {
            await masterPrisma.tenant.updateMany({
              where: { id: tenantId },
              data: { status: "suspended" },
            });
          }
        }
      }
    }
  } catch (error) {
    console.error("[Billing Webhook] Error:", error);
  }

  return NextResponse.json({ received: true });
}
