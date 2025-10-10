import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        // Validate input
        if (!email) {
            return NextResponse.json(
                { error: 'Email address is required.' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        // Check if email credentials are configured
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.log('Email credentials not configured for newsletter subscription.');
            return NextResponse.json(
                { error: 'Newsletter service not available. Please try again later.' },
                { status: 503 }
            );
        }

        // Configure SMTP settings (using same as contact form)
        const transporter = nodemailer.createTransport({
            host: 'smtppro.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Email details for newsletter subscription
        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.SMTP_SUBSCRIPTION_BOX || 'newsletter@glumia.com',
            subject: 'New Newsletter Subscription',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #055fa3;">New Newsletter Subscription</h2>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subscription Date:</strong> ${new Date().toLocaleDateString()}</p>
                        <p><strong>Source:</strong> Website Footer Newsletter Form</p>
                    </div>
                    <p style="margin-top: 20px; color: #666; font-size: 12px;">
                        This subscription was created from the Glumia Solutions website footer.
                    </p>
                </div>
            `,
            text: `
                New Newsletter Subscription
                
                Email: ${email}
                Subscription Date: ${new Date().toLocaleDateString()}
                Source: Website Footer Newsletter Form
                
                ---
                This subscription was created from the Glumia Solutions website footer.
            `
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Successfully subscribed to newsletter!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing newsletter subscription:', error);

        // Provide more specific error messages
        if (error && typeof error === 'object' && 'code' in error && error.code === 'EAUTH') {
            return NextResponse.json(
                { error: 'Newsletter service authentication failed. Please try again later.' },
                { status: 503 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to subscribe to newsletter. Please try again later.' },
            { status: 500 }
        );
    }
}
