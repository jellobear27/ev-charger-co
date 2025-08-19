import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      businessName, 
      contactName, 
      email, 
      phone, 
      address, 
      city, 
      zipCode, 
      businessType, 
      parkingSpaces, 
      message 
    } = body

    // Validate required fields
    if (!businessName || !contactName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to your business
    const { data, error } = await resend.emails.send({
      from: 'EV Charge Partners <hello@evchargepartner.com>',
      to: ['hello@evchargepartner.com'],
      subject: `New EV Station Application - ${businessName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">New EV Station Application</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Business Information</h3>
            <p><strong>Business Name:</strong> ${businessName}</p>
            <p><strong>Contact Name:</strong> ${contactName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Business Type:</strong> ${businessType || 'Not specified'}</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Location Details</h3>
            <p><strong>Address:</strong> ${address || 'Not provided'}</p>
            <p><strong>City:</strong> ${city || 'Not provided'}</p>
            <p><strong>ZIP Code:</strong> ${zipCode || 'Not provided'}</p>
            <p><strong>Parking Spaces:</strong> ${parkingSpaces || 'Not specified'}</p>
          </div>

          ${message ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Additional Message</h3>
            <p>${message}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This application was submitted from your website at ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Send confirmation email to the applicant
    await resend.emails.send({
      from: 'EV Charge Partners <hello@evchargepartner.com>',
      to: [email],
      subject: 'Thank you for your EV Station Application',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">Thank You for Your Application!</h2>
          
          <p>Dear ${contactName},</p>
          
          <p>Thank you for your interest in hosting an EV charging station at ${businessName}. We've received your application and our team will review it within 24-48 hours.</p>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
            <h3 style="margin-top: 0; color: #16a34a;">What's Next?</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Our team will review your location and business details</li>
              <li>We'll contact you to discuss the installation process</li>
              <li>We'll provide a customized proposal for your business</li>
              <li>Once approved, we'll schedule the installation</li>
            </ul>
          </div>
          
          <p>If you have any questions in the meantime, please don't hesitate to reach out to us at <a href="mailto:hello@evchargepartner.com">hello@evchargepartner.com</a> or call us at (555) 123-4567.</p>
          
          <p>Best regards,<br>
          The EV Charge Partners Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              EV Charge Partners<br>
              California, USA<br>
              <a href="mailto:hello@evchargepartner.com">hello@evchargepartner.com</a>
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 