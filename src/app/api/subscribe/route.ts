import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create transporter for Gmail SMTP (using your Gmail account)
const createTransport = () => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return null
  }
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Check if Gmail SMTP is configured
    const transporter = createTransport()
    if (!transporter) {
      console.log('Gmail SMTP not configured. Subscription logged:', email)
      return NextResponse.json({ 
        success: true,
        message: 'Subscription received (email service not configured)'
      })
    }

    // Send notification to your business (will forward to your Gmail)
    await transporter.sendMail({
      from: `"EV Charge Partners" <${process.env.GMAIL_USER}>`,
      to: 'janell@evchargepartners.com', // This will forward to your Gmail
      subject: 'New Blog Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">New Blog Subscription</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p>This person has subscribed to your EV charging insights blog.</p>
        </div>
      `,
    })

    // Send welcome email to subscriber
    await transporter.sendMail({
      from: `"EV Charge Partners" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Welcome to EV Charge Partners Blog!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">Welcome to EV Charge Partners!</h2>
          
          <p>Thank you for subscribing to our blog! You'll now receive the latest insights on:</p>
          
          <ul style="margin: 20px 0; padding-left: 20px;">
            <li>EV charging business opportunities in California</li>
            <li>Passive income strategies for business owners</li>
            <li>Industry trends and market analysis</li>
            <li>Success stories from our partners</li>
            <li>Installation and maintenance tips</li>
          </ul>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
            <h3 style="margin-top: 0; color: #16a34a;">Ready to Earn Passive Income?</h3>
            <p>If you own a business in California, you could be earning 10% commission on every EV charge at your location. <a href="https://evchargepartner.com/apply" style="color: #16a34a; font-weight: bold;">Apply now to host an EV charging station!</a></p>
          </div>
          
          <p>Best regards,<br>
          The EV Charge Partners Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              EV Charge Partners<br>
              California, USA<br>
              <a href="mailto:janell@evchargepartners.com">janell@evchargepartners.com</a>
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
