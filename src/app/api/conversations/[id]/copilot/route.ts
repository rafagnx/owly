export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { requireAuth, isAuthenticated } from "@/lib/route-auth";
import { detectIntent, analyzeSentiment, generateSuggestedRepliesPrompt } from "@/lib/ai/guardrails";
import { prisma as defaultPrisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireAuth(request, "conversations:read");
  if (!isAuthenticated(auth)) return auth;

  const { tenantPrisma = defaultPrisma } = auth;

  try {
    const { id } = await params;
    const conversation = await tenantPrisma.conversation.findUnique({
      where: { id },
      include: {
        messages: { orderBy: { createdAt: "asc" }, take: 20 },
        tickets: { select: { id: true, title: true, status: true } },
      },
    });

    if (!conversation) {
      return NextResponse.json({ error: "Conversation not found" }, { status: 404 });
    }

    const messages = conversation.messages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    const lastUserMessage = messages.filter((m) => m.role === "customer").pop();

    const intent = lastUserMessage
      ? detectIntent(lastUserMessage.content)
      : { intent: "general", confidence: 0 };

    const sentiment = lastUserMessage
      ? analyzeSentiment(lastUserMessage.content)
      : { sentiment: "neutral", score: 0 };

    const cannedResponses = await tenantPrisma.cannedResponse.findMany({
      where: { isActive: true },
      take: 5,
      orderBy: { usageCount: "desc" },
    });

    const suggestions = await generateAISuggestions(
      messages,
      cannedResponses.map((c) => ({ title: c.title, content: c.content })),
      intent.intent
    );

    return NextResponse.json({
      intent,
      sentiment,
      suggestions,
      meta: {
        messageCount: messages.length,
        aiEnabled: true,
      },
    });
  } catch (error) {
    logger.error("AI copilot failed:", error);
    return NextResponse.json({ error: "AI service unavailable" }, { status: 500 });
  }
}

async function generateAISuggestions(
  messages: { role: string; content: string }[],
  cannedResponses: { title: string; content: string }[],
  intent: string
): Promise<string[]> {
  const systemCanned: Record<string, string[]> = {
    support: [
      "Entendi. Vou verificar isso para você.",
      "Peço desculpas pelo transtorno. Vou resolver isso agora.",
      "Gracias por reportar. Estou verificando a situação.",
    ],
    billing: [
      "Vou verificar sua fatura.",
      "Entendi. Deixe-me analisar sua cobrança.",
      "Posso ajudar com isso. Um momento.",
    ],
    sales: [
      "Fico feliz em ajudar! Vou apresentar as opções.",
      "Teremos prazer em atender. Quais informações precisa?",
      "Vamos encontrar a melhor solução para você.",
    ],
    complaint: [
      "Lamento muito por isso. Vou pessoalmente acompanhar seu caso.",
      "Entendemos sua frustration. Vamos resolver.",
      "Peço desculpas. Isso não deveria acontecer.",
    ],
    cancellation: [
      "Entendo. Posso verificar as opções antes de cancelamento?",
      "Lamento que decida sair. Há algo que possamos fazer?",
      "Antes do cancelamento, gostaria de entender o motivo?",
    ],
    information: [
      " fic happy to help!",
      "Posso fornecer essas informações.",
      "Vou buscar os detalhes.",
    ],
    greeting: [
      "Olá! Bom dia/Boa tarde! Como posso ajudar?",
      "Olá! Em que posso ser útil?",
      "Oi! Bem-vindo! Como posso ajudar?",
    ],
    feedback: [
      "Obrigado pelo feedback! Isso é muito importante.",
      "Agradecemos! Vamos considerar sua sugestão.",
      "Важное feedback. Obrigado!",
    ],
  };

  const defaults = [
    "Obrigado pela mensagem! Em que posso ajudar?",
    "Entendi. Pode me dar mais detalhes?",
    "Vou verificar e retorno em breve.",
  ];

  let replies = systemCanned[intent] || systemCanned.information;

  if (replies.length === 0) {
    replies = defaults;
  }

  return replies.slice(0, 3);
}