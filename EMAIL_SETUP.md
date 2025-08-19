# Email Setup Guide for EV Charge Partners

## Overview
Your EV charging lead generation site now has full email functionality using Resend. This setup will send emails to both you (for new applications) and to applicants (confirmation emails).

## Step 1: Set up Resend Account

1. Go to [Resend.com](https://resend.com) and create a free account
2. Verify your domain `evchargepartner.com` in Resend
3. Get your API key from the Resend dashboard

## Step 2: Configure Environment Variables

1. Create a `.env.local` file in your project root (copy from `env.example`)
2. Add your Resend API key:
   ```
   RESEND_API_KEY=your_actual_api_key_here
   ```

## Step 3: Domain Configuration

### For Production (evchargepartner.com):
1. In your Resend dashboard, add `evchargepartner.com` as a domain
2. Follow the DNS configuration instructions provided by Resend
3. Update your environment variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://evchargepartner.com
   ```

### For Development:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Step 4: Test the Email System

1. Start your development server: `npm run dev`
2. Go to `/apply` and submit a test application
3. Check that you receive:
   - An email notification at `janell@evchargepartners.com`
   - A confirmation email to the test email address

## Email Templates

The system includes two types of emails:

### 1. Application Notifications (to your business)
- Sent to: `janell@evchargepartners.com`
- Subject: "New EV Station Application - [Business Name]"
- Includes all form data in a professional format

### 2. Confirmation Emails (to applicants)
- Sent to: The email address provided in the application
- Subject: "Thank you for your EV Station Application"
- Includes next steps and contact information

### 3. Blog Subscription Emails
- Notification to your business when someone subscribes
- Welcome email to new subscribers with blog content preview

## Customization

### Email Templates
You can customize the email templates in:
- `src/app/api/contact/route.ts` - Application emails
- `src/app/api/subscribe/route.ts` - Blog subscription emails

### Email Addresses
Update the "from" and "to" addresses in the API routes to match your preferences.

## Troubleshooting

### Common Issues:
1. **Emails not sending**: Check your Resend API key and domain verification
2. **Domain not verified**: Follow Resend's DNS setup instructions carefully
3. **Rate limiting**: Resend has generous free limits (3,000 emails/month)

### Testing:
- Use the development environment to test before deploying
- Check browser console for any JavaScript errors
- Verify API responses in the Network tab

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.example` file shows the required variables without actual values
- API keys are only used server-side and are secure

## Next Steps

1. Set up your Resend account and get your API key
2. Create the `.env.local` file with your credentials
3. Test the email functionality in development
4. Deploy to production and verify everything works
5. Consider setting up email analytics in Resend dashboard

## Support

If you encounter issues:
1. Check the Resend documentation
2. Verify your domain DNS settings
3. Test with a simple email first
4. Check the browser console and server logs for errors 