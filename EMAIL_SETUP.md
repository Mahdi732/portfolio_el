# Email Configuration Guide

To enable email sending in your portfolio, follow these steps:

## Prerequisites
- Gmail account or SMTP-compatible email service
- Node.js environment variables configured

## Gmail Setup (Recommended)

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account (myaccount.google.com)
2. Select "Security" in the left panel
3. Under "How you sign in to Google", enable "2-Step Verification"

### Step 2: Generate App Password
1. Go to Google Account Security settings
2. Find "App passwords" (appears only if 2FA is enabled)
3. Select "Mail" and "Windows Computer" (or your device)
4. Google will generate a 16-character password
5. Copy this password

### Step 3: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
```

Replace:
- `your-email@gmail.com` with your Gmail address
- `your-16-character-app-password` with the password from Step 2

### Step 4: Test Email Sending
1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your inbox for the email

## Using Other Email Services

### SendGrid
1. Create SendGrid account and generate API key
2. Update the email route to use SendGrid's SDK
3. Set environment variables: `SENDGRID_API_KEY`

### Resend
1. Sign up at Resend.com
2. Get your API key
3. Install: `npm install resend`
4. Update the email route to use Resend

### Custom SMTP
Update `app/api/send-email/route.ts` and modify the transporter:

```typescript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})
```

## Important Security Notes

- Never commit `.env.local` to Git
- Keep your app password private
- Consider using environment variables managed by Vercel if deploying
- Use "Reply-To" headers to direct responses correctly

## Troubleshooting

### Emails go to spam
- Check email headers for proper authentication
- Verify sender domain configuration
- Ensure proper SPF/DKIM records if using custom domain

### "Authentication failed"
- Verify email credentials are correct
- Check if 2FA is enabled (required for Gmail)
- Ensure app-specific password is used (not regular password)

### "Failed to send email"
- Check server logs for detailed error messages
- Verify internet connection
- Ensure email service is not rate-limited

## Production Deployment

When deploying to Vercel:
1. Add environment variables in Vercel Project Settings
2. Never expose email credentials in client-side code
3. Consider email sending limits for your service plan
4. Monitor email delivery via service dashboard

For more help, consult the email service documentation or Nodemailer docs.
