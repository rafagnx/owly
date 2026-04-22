# Plan: Stabilize Owly AI Production Deploy

## 📋 Goal
Resolve the "Cannot read properties of undefined (reading 'clientModules')" error and ensure the application is 100% accessible on the VPS.

## 🛠️ Strategy: Host-Built Standalone Container
Instead of building inside Docker (which fails due to DB isolation), we will build on the VPS host and package the result as a lightweight "standalone" container.

## 📝 Phases

### Phase 1: Pure Linux Build on Host
1. [x] Ensure DB is running on VPS (Docker) and accessible via port 5434.
2. [x] Run `npx prisma generate` on host.
3. [x] Run `npx next build` on host (produces `.next/standalone`).

### Phase 2: Lightweight Runner Image
1. [ ] Update `Dockerfile` to simply COPY pre-built files:
    - `.next/standalone`
    - `.next/static`
    - `public`
    - `node_modules/.prisma` (The secret sauce for binary compatibility)
2. [ ] Remove any build steps from `Dockerfile`.

### Phase 3: Environment Sync
1. [ ] Ensure `DATABASE_URL` in `docker-compose.yml` points to `db:5432` (internal Docker network).

### Phase 4: Verification
1. [ ] Check logs for `Ready in ...ms`.
2. [ ] Browser test.

## 🚀 Execution
Run the "Master Deploy" command.
