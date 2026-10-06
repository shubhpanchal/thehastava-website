import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";

// Simple HTML entity escaper to prevent injection
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();

    // 1. Zod Server-side Validation
    const parseResult = contactSchema.safeParse(json);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parseResult.error.flatten().fieldErrors,
          message: "Please correct the errors in the form.",
        },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      company,
      phone,
      automationTarget,
      volume,
      context,
      botField,
    } = parseResult.data;

    // 2. Honeypot check for bots
    if (botField && botField.trim().length > 0) {
      // Quietly succeed to fool spam bots without sending emails
      return NextResponse.json({
        success: true,
        message: "Thanks — your inquiry has been received.",
      });
    }

    // 3. Sanitized values for HTML emails
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safePhone = phone ? escapeHtml(phone) : "Not provided";
    const safeTarget = escapeHtml(automationTarget);
    const safeVolume = volume ? escapeHtml(volume) : "Not specified";
    const safeContext = context ? escapeHtml(context) : "None";

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Fallback in case RESEND_API_KEY is not configured yet in local/preview env
      console.warn(
        "⚠️ [HASTAVA Inquiry] RESEND_API_KEY is not configured. Inquiry payload:",
        {
          name,
          email,
          company,
          phone,
          automationTarget,
          volume,
          context,
          receivedAt: new Date().toISOString(),
        }
      );

      return NextResponse.json({
        success: true,
        message: "Thanks — your inquiry has been received. We'll get back to you within 24 business hours.",
      });
    }

    const resend = new Resend(apiKey);
    const fromAddress = process.env.RESEND_FROM_EMAIL || "HASTAVA Inquiries <onboarding@resend.dev>";
    const toAddress = process.env.HASTAVA_INQUIRY_EMAIL || "hello@thehastava.com";

    // 4. Send Notification to HASTAVA Team
    const internalEmail = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject: `New HASTAVA Discovery Inquiry — ${company}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a; line-height: 1.6;">
          <div style="background-color: #061326; padding: 24px; border-radius: 12px 12px 0 0; text-align: left;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 700;">New Discovery Call Inquiry</h1>
            <p style="color: #22d3ee; font-size: 13px; margin: 6px 0 0 0; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">HASTAVA Client Acquisition</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 28px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <div style="margin-bottom: 20px;">
              <h2 style="font-size: 13px; text-transform: uppercase; color: #64748b; margin: 0 0 6px 0; font-weight: 700;">Prospect Details</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Name:</strong></td>
                  <td style="padding: 6px 0; color: #0f172a;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #64748b;"><strong>Work Email:</strong></td>
                  <td style="padding: 6px 0;"><a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #64748b;"><strong>Company:</strong></td>
                  <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${safeCompany}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #64748b;"><strong>Phone:</strong></td>
                  <td style="padding: 6px 0; color: #0f172a;">${safePhone}</td>
                </tr>
              </table>
            </div>

            <div style="margin-bottom: 20px; padding: 16px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0;">
              <h3 style="font-size: 12px; text-transform: uppercase; color: #0284c7; margin: 0 0 8px 0; font-weight: 700;">Process to Automate</h3>
              <p style="margin: 0; font-size: 14px; color: #1e293b; white-space: pre-wrap;">${safeTarget}</p>
            </div>

            <div style="margin-bottom: 20px; font-size: 13px; color: #475569;">
              <p style="margin: 4px 0;"><strong>Approximate Volume / Frequency:</strong> ${safeVolume}</p>
              <p style="margin: 4px 0;"><strong>Additional Context:</strong> ${safeContext}</p>
            </div>

            <div style="padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
              <span>Submitted on: ${new Date().toUTCString()}</span>
            </div>
          </div>
        </div>
      `,
    });

    if (internalEmail.error) {
      console.error("Resend internal email error:", internalEmail.error);
    }

    // 5. Send Confirmation to Prospect
    const confirmationEmail = await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject: "We received your HASTAVA inquiry",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a; line-height: 1.6;">
          <div style="background-color: #061326; padding: 24px; border-radius: 12px 12px 0 0; text-align: left;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 700;">HASTAVA</h1>
            <p style="color: #22d3ee; font-size: 13px; margin: 4px 0 0 0; font-weight: 600;">AI • DATA • AUTOMATION</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 32px 28px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 16px 0; font-size: 15px; color: #0f172a;">Hi ${safeName},</p>
            
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #334155; line-height: 1.6;">
              Thank you for reaching out to HASTAVA regarding your workflow automation objectives for <strong>${safeCompany}</strong>.
            </p>

            <div style="margin: 20px 0; padding: 16px; background-color: #f8fafc; border-left: 3px solid #0284c7; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #475569;">
                <strong>Summary of Inquiry:</strong><br/>
                ${safeTarget}
              </p>
            </div>

            <p style="margin: 0 0 20px 0; font-size: 14px; color: #334155; line-height: 1.6;">
              Our engineering team is reviewing your process requirements. We will get back to you within <strong>24 business hours</strong> to schedule a practical discovery call.
            </p>

            <div style="padding-top: 24px; border-top: 1px solid #f1f5f9; font-size: 13px; color: #64748b;">
              <p style="margin: 0 0 4px 0; font-weight: 600; color: #0f172a;">HASTAVA Engineering Team</p>
              <p style="margin: 0;"><a href="mailto:hello@thehastava.com" style="color: #2563eb; text-decoration: none;">hello@thehastava.com</a> • <a href="https://www.thehastava.com" style="color: #2563eb; text-decoration: none;">www.thehastava.com</a></p>
            </div>
          </div>
        </div>
      `,
    });

    if (confirmationEmail.error) {
      console.error("Resend confirmation email error:", confirmationEmail.error);
    }

    return NextResponse.json({
      success: true,
      message: "Thanks — your inquiry has been received. We'll get back to you within 24 business hours.",
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while sending your inquiry. Please try again or email us directly at hello@thehastava.com.",
      },
      { status: 500 }
    );
  }
}
