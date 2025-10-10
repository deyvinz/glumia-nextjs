import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { name, email, message, subject, number } = await request.json();

        // Validate input
        if (!name || !email || !message || !subject || !number) {
            return NextResponse.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
        }

        // Check if email credentials are configured
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.log('Email credentials not configured. Please set SMTP_USER and SMTP_PASS environment variables.');
            return NextResponse.json(
                { error: 'Email service not configured. Please contact us directly at info@glumia.com' },
                { status: 503 }
            );
        }

        // Configure SMTP settings
        const transporter = nodemailer.createTransport({
            host: 'smtppro.zoho.com',
            port: 465,
            secure: true, // Use false for TLS (port 587)
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Email details
        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.SMTP_TO || 'info@glumia.com',
            subject: `New Contact Form Submission - ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #055fa3;">New Contact Form Submission</h2>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${number}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong></p>
                        <p style="background-color: white; padding: 15px; border-radius: 3px; border-left: 4px solid #055fa3;">${message}</p>
                    </div>
                    <p style="margin-top: 20px; color: #666; font-size: 12px;">
                        This message was sent from the Glumia Solutions contact form.
                    </p>
                </div>
            `,
            text: `
                New Contact Form Submission - ${subject}
                
                Name: ${name}
                Email: ${email}
                Phone: ${number}
                Subject: ${subject}
                
                Message:
                ${message}
                
                ---
                This message was sent from the Glumia Solutions contact form.
            `
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);

        // Provide more specific error messages
        if (error && typeof error === 'object' && 'code' in error && error.code === 'EAUTH') {
            return NextResponse.json(
                { error: 'Email authentication failed. Please contact us directly at info@glumia.com' },
                { status: 503 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to send email. Please try again later or contact us directly at info@glumia.com' },
            { status: 500 }
        );
    }
}
