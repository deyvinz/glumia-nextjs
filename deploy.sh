#!/bin/bash

# Glumia Solutions VPS Deployment Script
# This script deploys the Next.js app to a VPS with existing nginx/SSL

set -e

echo "🚀 Starting Glumia Solutions VPS Deployment"
echo "============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env.production exists
if [ ! -f ".env.production" ]; then
    print_warning ".env.production file not found!"
    print_status "Creating .env.production from template..."
    cp env.production.template .env.production
    print_warning "Please edit .env.production with your actual values before continuing."
    print_status "Run: nano .env.production"
    exit 1
fi

# Check if SMTP variables are set to placeholder values
if grep -q "your-email@domain.com" .env.production || grep -q "your-smtp-password" .env.production; then
    print_error "SMTP configuration not set!"
    print_warning "Please edit .env.production and replace placeholder values with actual SMTP credentials."
    print_status "Required variables:"
    print_status "  - SMTP_USER: Your email address"
    print_status "  - SMTP_PASS: Your email password or app password"
    print_status "  - SMTP_FROM: Sender email address"
    print_status "Run: nano .env.production"
    exit 1
fi

# Set the application port
APP_PORT=3002

# Check if port 3002 is available
if netstat -tuln | grep -q ":3002 "; then
    print_warning "Port 3002 is already in use!"
    print_status "Stopping existing container if running..."
    docker-compose down 2>/dev/null || true
fi

print_status "Using port $APP_PORT for the application"

# Build and start the application
print_status "Building Docker image..."
docker-compose build

print_status "Starting application..."
docker-compose up -d

# Wait for application to start
print_status "Waiting for application to start..."
sleep 10

# Check if application is running
print_status "Checking application status..."
docker-compose ps

# Test application
print_status "Testing application..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost:$APP_PORT | grep -q "200"; then
    print_status "✅ Application is running on port $APP_PORT!"
else
    print_error "Application is not responding. Check logs with: docker-compose logs"
fi

print_status "🎉 Deployment completed!"
print_status ""
print_status "Next steps:"
print_status "1. Configure your existing nginx to proxy to this container"
print_status "2. Add this configuration to your nginx:"
print_status ""
echo "server {"
echo "    listen 443 ssl http2;"
echo "    server_name glumia.com www.glumia.com;"
echo ""
echo "    # Your existing SSL configuration"
echo "    ssl_certificate /path/to/your/certificate;"
echo "    ssl_certificate_key /path/to/your/private/key;"
echo ""
echo "    location / {"
echo "        proxy_pass http://127.0.0.1:$APP_PORT;"
echo "        proxy_http_version 1.1;"
echo "        proxy_set_header Upgrade \$http_upgrade;"
echo "        proxy_set_header Connection 'upgrade';"
echo "        proxy_set_header Host \$host;"
echo "        proxy_set_header X-Real-IP \$remote_addr;"
echo "        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;"
echo "        proxy_set_header X-Forwarded-Proto \$scheme;"
echo "        proxy_cache_bypass \$http_upgrade;"
echo "    }"
echo "}"
print_status ""
print_status "Application is running on port: $APP_PORT"
print_status ""
print_status "Useful commands:"
print_status "  View logs: docker-compose logs -f"
print_status "  Stop application: docker-compose down"
print_status "  Restart application: docker-compose restart"
print_status "  Update application: ./deploy.sh"
