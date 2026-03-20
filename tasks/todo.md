# Task: Resend confirmation email integration

## Status: Complete

## What was built
- `supabase/functions/send-welcome-email/index.ts` — Supabase Edge Function
- `supabase/functions/send-welcome-email/defs.ts` — Webhook payload types

## How it works
1. A Supabase Database Webhook fires on every INSERT into the `waitlist` table
2. The webhook POSTs the new row's data to the Edge Function URL
3. The function fetches the total waitlist count (service role key → Supabase JS client)
4. Position = count + 1300 (matches the frontend's offset, avoids showing low numbers to early signups)
5. Calls Resend HTTP API to send the welcome email
6. Returns 200 regardless of email outcome — signup flow is never blocked

## Deploy checklist

### Supabase secrets (run once in your project)
```bash
supabase secrets set RESEND_API_KEY=re_xxxx
```
SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are injected automatically by the runtime.

### Deploy the function
```bash
supabase functions deploy send-welcome-email --no-verify-jwt
```
`--no-verify-jwt` is required because the caller is Supabase's own webhook infrastructure (not a user JWT).

### Create the Database Webhook
In the Supabase Dashboard → Database → Webhooks → Create a new webhook:
- **Name:** send-welcome-email
- **Table:** public.waitlist
- **Events:** Insert
- **Type:** HTTP Request
- **URL:** `https://<your-project-ref>.supabase.co/functions/v1/send-welcome-email`
- **HTTP Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer <your-service-role-key>` *(or leave empty if --no-verify-jwt)*

### Verify domain in Resend ⚠️
Before emails can send, `ireflect.app` must be verified in your Resend dashboard
(Dashboard → Domains → Add domain → add the DNS records shown).
The `from` address is set to `hello@ireflect.app`.

## What to test
- [ ] Submit a new waitlist entry via the landing page
- [ ] Check Supabase Edge Function logs for "email sent to …"
- [ ] Confirm the email arrives with correct name, position, and styling
- [ ] Submit with a duplicate email — confirm error in UI, no second email sent
