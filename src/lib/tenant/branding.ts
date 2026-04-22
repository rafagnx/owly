/**
 * Tenant Branding — Resolves and applies white-label customization
 */

import type { ResolvedTenant } from "./resolver";

export interface TenantBranding {
  companyName: string;
  logo: string;
  favicon: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  cssVariables: string;
}

const DEFAULT_BRANDING: TenantBranding = {
  companyName: "Owly",
  logo: "/owly.png",
  favicon: "/favicon.ico",
  primaryColor: "#6366f1",
  secondaryColor: "#8b5cf6",
  accentColor: "#06b6d4",
  cssVariables: "",
};

/**
 * Generate CSS variables from tenant branding
 */
function generateCssVariables(tenant: ResolvedTenant): string {
  return `
    :root {
      --brand-primary: ${tenant.primaryColor};
      --brand-secondary: ${tenant.secondaryColor};
      --brand-accent: ${tenant.accentColor};
      --brand-primary-rgb: ${hexToRgb(tenant.primaryColor)};
      --brand-secondary-rgb: ${hexToRgb(tenant.secondaryColor)};
      --brand-accent-rgb: ${hexToRgb(tenant.accentColor)};
    }
  `.trim();
}

/**
 * Convert hex color to RGB values string
 */
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "99, 102, 241";
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}

/**
 * Get branding for a tenant
 */
export function getTenantBranding(tenant: ResolvedTenant | null): TenantBranding {
  if (!tenant) return DEFAULT_BRANDING;

  return {
    companyName: tenant.name,
    logo: tenant.logo || DEFAULT_BRANDING.logo,
    favicon: tenant.favicon || DEFAULT_BRANDING.favicon,
    primaryColor: tenant.primaryColor || DEFAULT_BRANDING.primaryColor,
    secondaryColor: tenant.secondaryColor || DEFAULT_BRANDING.secondaryColor,
    accentColor: tenant.accentColor || DEFAULT_BRANDING.accentColor,
    cssVariables: generateCssVariables(tenant),
  };
}

/**
 * Generate meta tags for tenant branding
 */
export function getTenantMetadata(tenant: ResolvedTenant | null) {
  const branding = getTenantBranding(tenant);
  return {
    title: `${branding.companyName} | Atendimento`,
    description: `${branding.companyName} — Sistema de atendimento multi-canal`,
    icons: { icon: branding.favicon },
    themeColor: branding.primaryColor,
  };
}
