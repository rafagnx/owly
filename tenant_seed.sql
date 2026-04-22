INSERT INTO "Admin" (id, username, password, name, role, "createdAt", "updatedAt")
VALUES (gen_random_uuid(), 'admin', '$2b$12$wrqZSOR645/tzufbxzWNjehbx3kQJA96j/e0Y33LHLGrGQzgN3KeK', 'Admin User', 'admin', NOW(), NOW())
ON CONFLICT (username) DO NOTHING;

INSERT INTO "Settings" (id, "businessName", "welcomeMessage", "createdAt", "updatedAt")
VALUES ('default', 'ClinicOS Demo', 'Bem-vindo ao ClinicOS!', NOW(), NOW())
ON CONFLICT (id) DO NOTHING;
