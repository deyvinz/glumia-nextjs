#!/bin/bash

# Glumia Solutions Deployment Script
# This script deploys the application to a VPS with Docker

set -e

echo "🚀 Starting Glumia Solutions Deployment"
echo "======================================"

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

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    print_error "Please do not run this script as root"
    exit 1
fi

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

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p certbot/conf
mkdir -p certbot/www

# Set proper permissions
print_status "Setting up permissions..."
sudo chown -R $USER:$USER certbot/
chmod -R 755 certbot/

# Build and start services
print_status "Building Docker images..."
docker-compose build

print_status "Starting services..."
docker-compose up -d

# Wait for services to start
print_status "Waiting for services to start..."
sleep 10

# Check if services are running
print_status "Checking service status..."
docker-compose ps

# Test SSL certificate
print_status "Testing SSL certificate..."
if curl -s -o /dev/null -w "%{http_code}" https://glumia.com | grep -q "200"; then
    print_status "✅ SSL certificate is working!"
else
    print_warning "SSL certificate might not be ready yet. It can take a few minutes."
fi

# Test application
print_status "Testing application..."
if curl -s -o /dev/null -w "%{http_code}" https://glumia.com | grep -q "200"; then
    print_status "✅ Application is running!"
else
    print_error "Application is not responding. Check logs with: docker-compose logs"
fi

print_status "🎉 Deployment completed!"
print_status "Your application is now running at: https://glumia.com"
print_status ""
print_status "Useful commands:"
print_status "  View logs: docker-compose logs -f"
print_status "  Stop services: docker-compose down"
print_status "  Restart services: docker-compose restart"
print_status "  Update application: ./deploy.sh"
