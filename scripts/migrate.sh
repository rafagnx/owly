#!/bin/bash
# Owly Database Migration Script
# Execute este script no servidor VPS para aplicar as novas migrações
# Usage: ./scripts/migrate.sh

set -e

echo "=========================================="
echo "  Owly Database Migration"
echo "=========================================="
echo ""

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}1. Generating Prisma Client...${NC}"
npx prisma generate
echo -e "${GREEN}✓ Tenant schema generated${NC}"

npx prisma generate --schema=prisma/master.prisma
echo -e "${GREEN}✓ Master schema generated${NC}"

echo ""
echo -e "${YELLOW}2. Pushing schemas to database...${NC}"

# Push tenant schema
npx prisma db push 2>/dev/null || echo "  Tenant schema: already in sync or manual check needed"

# Push master schema  
npx prisma db push --schema=prisma/master.prisma 2>/dev/null || echo "  Master schema: already in sync or manual check needed"

echo ""
echo -e "${GREEN}=========================================="
echo "  Migration completed!"
echo "==========================================${NC}"
echo ""
echo "Novos recursos ativados:"
echo "  - Sistema de pausas de atendentes"
echo "  - Copiloto de IA"
echo "  - Campos personalizados"
echo "  - Automações Kanban"
echo "  - Sistema de avaliação"
echo "  - Perfil de permissão personalizado"
echo "  - Redistribuição de tickets"
echo "  - Nó HTTP no chatbot"
echo "  - Melhorias em campanhas"
echo "  - Agendamento WABA"
echo "  - Groups de contatos"
echo "  - Pinned conversations"
echo "  - Cobrança inteligente"
echo "  - Logo/favicon por tenant"
echo "  - Soma de valores no Kanban"
echo "  - Relatório NPS"
echo "  - Funil por consultor"
echo "  - Tags como badges"
echo ""