// src/API/api.js

// ─── Config ──────────────────────────────────────────────────────────────────
const baseUrl = import.meta.env.VITE_RAISUITE_API_BASE || "https://staging-api.raihsuite.com/v1";
const tenantId = Number(import.meta.env.VITE_TENANT_ID || 45);

// ─── sendEnquiry ─────────────────────────────────────────────────────────────
// Full URL: https://staging-api.raihsuite.com/v1/crm/enquiries/
// Body:     { name, mobile, email, message, tenant }
//
// @param {{ name: string, mobile: string, email: string, message: string }} data

export async function sendEnquiry(data) {
  const response = await fetch(`${baseUrl}/crm/enquiries/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      tenant: tenantId,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const message = errorBody.message || errorBody.detail || `Server error (${response.status})`;
    throw new Error(message);
  }

  return response.json();
}

export default { sendEnquiry };