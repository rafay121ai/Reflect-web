import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import type { WebhookPayload } from "./defs.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_ROLE_KEY =
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

// Keep in sync with the frontend's fetchWaitlistPosition offset
const POSITION_OFFSET = 1300;

Deno.serve(async (req) => {
  try {
    const payload: WebhookPayload = await req.json();

    if (payload.type !== "INSERT") {
      return new Response("OK", { status: 200 });
    }

    const { email, name } = payload.record;

    if (!email) {
      console.error("send-welcome-email: no email in record, skipping");
      return new Response("OK", { status: 200 });
    }

    const firstName = name ? name.trim().split(/\s+/)[0] : null;

    // Fetch current waitlist count to determine position
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { count, error: countError } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (countError) {
      console.error("send-welcome-email: failed to fetch count:", countError);
    }

    const position = count !== null ? count + POSITION_OFFSET : null;

    await sendWelcomeEmail({ email, firstName, position });
  } catch (err) {
    // Fail silently — never let an email error affect the signup response
    console.error("send-welcome-email: unhandled error:", err);
  }

  return new Response("OK", { status: 200 });
});

async function sendWelcomeEmail({
  email,
  firstName,
  position,
}: {
  email: string;
  firstName: string | null;
  position: number | null;
}) {
  const greeting = firstName ? `Hi ${firstName},` : "Hi,";
  const positionLine =
    position !== null ? `You're #${position.toLocaleString()} on the list.` : "";

  const textBody = [
    greeting,
    "",
    `You're on the Reflect waitlist.${positionLine ? " " + positionLine : ""}`,
    "",
    "Reflect is a quiet, private space for self-reflection — gentle questions, a mirror of your thoughts, no judgment.",
    "",
    "We're in open beta and rolling out access soon. You'll hear from us when your spot opens up.",
    "",
    "In the meantime, follow our journey at ireflect.app",
    "",
    "— The Reflect team",
  ].join("\n");

  const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You're on the Reflect waitlist ✦</title>
</head>
<body style="margin:0;padding:0;background:#FAFAF8;font-family:Georgia,'Iowan Old Style',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAFAF8;padding:48px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0"
          style="max-width:520px;background:#FFFFFF;border-radius:18px;padding:40px 36px;box-shadow:0 4px 24px rgba(74,85,104,0.08);">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:24px;border-bottom:1px solid rgba(113,128,150,0.1);">
              <p style="margin:0;font-size:12px;letter-spacing:0.15em;text-transform:uppercase;
                         color:#8B7D6B;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
                REFLECT
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding-top:32px;">
              <p style="margin:0 0 20px;font-size:17px;color:#4A5568;line-height:1.7;">${greeting}</p>

              <p style="margin:0 0 20px;font-size:17px;color:#4A5568;line-height:1.7;">
                You're on the Reflect waitlist.${
                  position !== null
                    ? ` <strong style="color:#2D3748;">${positionLine}</strong>`
                    : ""
                }
              </p>

              <p style="margin:0 0 20px;font-size:16px;color:#718096;line-height:1.75;">
                Reflect is a quiet, private space for self-reflection — gentle questions,
                a mirror of your thoughts, no judgment.
              </p>

              <p style="margin:0 0 32px;font-size:16px;color:#718096;line-height:1.75;">
                We're in open beta and rolling out access soon.
                You'll hear from us when your spot opens up.
              </p>

              <p style="margin:0;font-size:15px;color:#A0AEC0;line-height:1.7;">
                In the meantime, follow our journey at
                <a href="https://ireflect.app" style="color:#8B7D6B;text-decoration:none;">ireflect.app</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:32px;border-top:1px solid rgba(113,128,150,0.1);">
              <p style="margin:0;font-size:13px;color:#A0AEC0;
                         font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
                — The Reflect team
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "REFLECT <hello@ireflect.app>",
      to: [email],
      subject: "You're on the Reflect waitlist ✦",
      text: textBody,
      html: htmlBody,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`send-welcome-email: Resend error ${res.status}:`, body);
  } else {
    console.log(`send-welcome-email: email sent to ${email}`);
  }
}
