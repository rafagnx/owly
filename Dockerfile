# ---- Builder Stage ----
FROM node:22-slim AS builder

WORKDIR /app

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy project files
COPY . .

# Generate Prisma Client (uses dummy ENV to bypass validation)
ENV DATABASE_URL=postgresql://postgres:postgres@localhost:5432/owly?schema=public
ENV JWT_SECRET=Rafa040388-secure-jwt-secret-2026
ENV NEXT_PUBLIC_APP_URL=http://localhost:3000
RUN npx prisma generate

# Build Next.js (standalone output)
RUN npm run build

# ---- Runner Stage ----
FROM node:22-slim AS runner

WORKDIR /app

# Install openssl for Prisma at runtime
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
# Copy Prisma migrations and schema for 'migrate deploy'
COPY --from=builder /app/prisma ./prisma

# Expose port
EXPOSE 3000

# Start command: run migrations then the server
CMD ["sh", "-c", "npx prisma migrate deploy && node server.js"]
