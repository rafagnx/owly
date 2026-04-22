INSERT INTO "SuperAdmin" (id, username, password, name, email, "createdAt", "updatedAt")
VALUES (gen_random_uuid(), 'admin', '$2b$12$wrqZSOR645/tzufbxzWNjehbx3kQJA96j/e0Y33LHLGrGQzgN3KeK', 'Administrator', 'admin@owly.com', NOW(), NOW())
ON CONFLICT (username) DO NOTHING;

INSERT INTO "Plan" (id, name, slug, description, "priceMonthly", "maxMessagesMonth", "maxChannels", "maxUsers", "createdAt", "updatedAt")
VALUES 
('plan_starter', 'Starter', 'starter', 'Ideal para pequenos negócios', 197.00, 2000, 1, 2, NOW(), NOW()),
('plan_business', 'Business', 'business', 'O plano mais popular', 497.00, 10000, 5, 10, NOW(), NOW()),
('plan_enterprise', 'Enterprise', 'enterprise', 'Escala total para grandes operações', 997.00, 50000, 20, 50, NOW(), NOW())
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, "updatedAt" = NOW();

INSERT INTO "GlobalSettings" (id, "platformName", "platformDomain", "maintenanceMode", "updatedAt")
VALUES ('default', 'ClinicOS', '161.97.144.107', false, NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO "Tenant" (id, name, slug, "dbSchema", status, "customDomain", "createdAt", "updatedAt")
VALUES ('default-tenant-id', 'ClinicOS Demo', 'default', 'public', 'active', '161.97.144.107', NOW(), NOW())
ON CONFLICT (slug) DO NOTHING;
