#!/bin/bash

echo "🧪 Testing Email Configuration"
echo "=============================="
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "❌ .env.local file not found!"
    echo "Please create .env.local with your SMTP credentials first."
    echo "See EMAIL_SETUP_INSTRUCTIONS.md for details."
    exit 1
fi

echo "✅ .env.local file found"
echo ""

# Test contact form API
echo "📧 Testing Contact Form API..."
CONTACT_RESPONSE=$(curl -s -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","subject":"Web Development","number":"1234567890","message":"This is a test message"}')

if echo "$CONTACT_RESPONSE" | grep -q "Email sent successfully"; then
    echo "✅ Contact form API: Working!"
else
    echo "❌ Contact form API: Failed"
    echo "Response: $CONTACT_RESPONSE"
fi

echo ""

# Test newsletter API
echo "📰 Testing Newsletter API..."
NEWSLETTER_RESPONSE=$(curl -s -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}')

if echo "$NEWSLETTER_RESPONSE" | grep -q "Successfully subscribed"; then
    echo "✅ Newsletter API: Working!"
else
    echo "❌ Newsletter API: Failed"
    echo "Response: $NEWSLETTER_RESPONSE"
fi

echo ""
echo "🎯 Test Complete!"
echo ""
echo "If both tests show ✅, your email service is working correctly!"
echo "If any test shows ❌, check your SMTP credentials in .env.local"
