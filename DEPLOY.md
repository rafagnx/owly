# Owly - Guia de Deploy e Operações

## Scripts Disponíveis

### 1. Migração de Banco de Dados
```bash
./scripts/migrate.sh
```
Aplica as novas migrações Prisma (tenant + master schema).

### 2. Teste de APIs
```bash
./scripts/test-api.sh           # ambiente local
./scripts/test-api.sh production
./scripts/test-api.sh staging
```
Testa os endpoints das novas funcionalidades.

### 3. Deploy Completo
```bash
./scripts/deploy.sh            # deploy normal
./scripts/deploy.sh rollback  # rollback
```

---

## Novas APIs Criadas

| Endpoint | Método | Descrição |
|----------|--------|----------|
| `/api/pause` | GET, POST | Sistema de pausas |
| `/api/custom-fields` | GET, POST | Campos personalizados |
| `/api/customer-groups` | GET, POST | Grupos de contatos |
| `/api/pipeline/stages` | GET, POST | Estágios Kanban |
| `/api/pipeline/kanban/sum` | GET | Soma valores |
| `/api/pipeline/my-funnel` | GET | Funil por consultor |
| `/api/analytics/nps` | GET | Relatório NPS |
| `/api/flows/http` | POST | Nó HTTP chatbot |
| `/api/tickets/redistribute` | POST | Redistribuição |
| `/api/conversations/[id]/copilot` | GET | Copiloto IA |
| `/api/conversations/[id]/pin` | PATCH | Fixar conversa |
| `/api/superadmin/storage` | GET | Status S3 |

---

## Quick Start (VPS)

```bash
# 1. Atualizar código
git pull origin main

# 2. Rodar migrações
./scripts/migrate.sh

# 3. Testar APIs
./scripts/test-api.sh production

# 4. Build e restart
npm run build
pm2 restart owly
```

---

## Troubleshooting

### Erro de conexão com banco
```bash
# Verificar status PostgreSQL
sudo systemctl status postgresql

# Reconectar
pg_isready -h db -p 5432
```

### Erro Prisma
```bash
# Regenerar client
npx prisma generate
npx prisma generate --schema=prisma/master.prisma
```

### Verificar logs
```bash
# Next.js / PM2
pm2 logs owly --lines 100

# PostgreSQL
sudo tail -f /var/log/postgresql/postgresql-*.log
```