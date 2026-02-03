import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Configure nodemailer with Gmail
// You'll need to set up an app password for Gmail
// https://support.google.com/accounts/answer/185833
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// HTML email template
const emailTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%); color: #d4af37; padding: 30px; text-align: center; border-radius: 8px; margin-bottom: 30px; }
    .content { background: #f8f8f8; padding: 25px; border-radius: 8px; margin-bottom: 20px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #0f0f0f; margin-bottom: 5px; font-size: 14px; }
    .value { color: #525252; line-height: 1.6; }
    .footer { text-align: center; color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
    .button-link { display: inline-block; background: #d4af37; color: #0f0f0f; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
      <p>From your portfolio website</p>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${name}</div>
      </div>
      
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      
      <div class="field">
        <div class="label">Message:</div>
        <div class="value" style="white-space: pre-wrap;">${message}</div>
      </div>
    </div>
    
    <div class="footer">
      <p>This email was sent from your portfolio contact form.</p>
      <p style="margin-top: 10px; font-size: 11px;">Sender's email: ${email}</p>
    </div>
  </div>
</body>
</html>
`

export async function POST(request: NextRequest) {
  // Only allow POST requests
  if (request.method !== "POST") {
    return NextResponse.json({ success: false, error: "Method not allowed" }, { status: 405 })
  }

  try {
    const body = await request.json()
    const { to, name, email, message } = body

    // Validate required fields
    if (!to || !name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 },
      )
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.warn(
        "Email credentials not configured. Set EMAIL_USER and EMAIL_PASSWORD environment variables.",
      )
      // For development, still return success but log the message
      console.log("Email received (dev mode):", {
        to,
        from: email,
        name,
        message,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json(
        {
          success: true,
          message: "Message received. Email service is in development mode.",
        },
        { status: 200 },
      )
    }

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailTemplate(name, email, message),
      headers: {
        "X-Priority": "3",
        "X-MSMail-Priority": "Normal",
      },
    })

    console.log("Email sent successfully:", {
      to,
      from: email,
      name,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully. I'll get back to you soon!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Please try again later.",
      },
      { status: 500 },
    )
  }
}
