import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getStore } from "@netlify/blobs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail" }, { status: 400 });
  }

  try {
    const store = getStore("cv-storage");
    const cvBuffer = await store.get("cv.pdf", { type: "arrayBuffer" });
    const cvBase64 = Buffer.from(cvBuffer).toString("base64");

    await resend.emails.send({
      from: "Milan Tyopity <hallo@milantyopity.com>",
      to: email,
      subject: "Dein angeforderter Lebenslauf",
      html: `
      <div style="
        font-family: 'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif;
        max-width: 500px;
        background-color: #1D1E22;
        color: #f5f2ec;
        padding: 32px;
        border-radius: 12px;
        border: 1px solid rgba(245, 242, 236, 0.1);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      ">

      <h2 style="
       color: #ddaa80;
       font-size: 24px;
       margin-top: 0;
       margin-bottom: 16px;
       letter-spacing: -0.5px;
       ">Hallo!
      </h2>

      <p style="
       color: #a6a2a0;
       font-size: 15px;
       line-height: 1.6;
       margin-bottom: 24px;
      ">
      Vielen Dank für dein Interesse. Im Anhang findest du meinen Lebenslauf.
      </p>

     <div style="
       border-top: 1px solid rgba(245, 242, 236, 0.1);
       padding-top: 16px;
    ">

     <p style="
      color: #f5f2ec;
      font-size: 14px;
      line-height: 1.5;
      margin: 0;
     ">
      Beste Grüße,<br/>
       <strong style="color: #6e8dc4; font-weight: 600;">Milan Tyopity</strong>
      </p>
    </div>
  </div>
      `,
      attachments: [
        {
          filename: "Lebenslauf_Milan_Tyopity.pdf",
          content: cvBase64,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Fehler beim Senden" }, { status: 500 });
  }
}
