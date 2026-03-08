export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { name, email, company, details, turnstileToken } = body;

    if (!name || !email || !details || !turnstileToken) {
      return Response.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Validate Turnstile token
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET,
          response: turnstileToken,
          remoteip: request.headers.get("CF-Connecting-IP") || "",
        }),
      }
    );

    const verification = await verifyRes.json();

    if (!verification.success) {
      return Response.json(
        { success: false, error: "Turnstile verification failed." },
        { status: 403 }
      );
    }

    // TODO: forward to CRM / webhook
    console.log("[ZAI] Contact form:", { name, email, company, details });

    return Response.json(
      { success: true, message: "Message received successfully." },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
