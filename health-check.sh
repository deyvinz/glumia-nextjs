#!/bin/bash

# Health Check Script for Glumia Solutions
# This script checks the health of all services

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[HEALTHY]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[UNHEALTHY]${NC} $1"
}

echo "🏥 Glumia Solutions Health Check"
echo "================================"

# Check Docker services
echo ""
echo "📦 Docker Services:"
if docker-compose ps | grep -q "Up"; then
    print_status "Docker services are running"
    docker-compose ps
else
    print_error "Docker services are not running"
    exit 1
fi

# Check application health
echo ""
echo "🌐 Application Health:"
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"; then
    print_status "Application is responding on port 3000"
else
    print_error "Application is not responding on port 3000"
fi

# Check HTTPS
echo ""
echo "🔒 HTTPS/SSL Health:"
if curl -s -o /dev/null -w "%{http_code}" https://glumia.com | grep -q "200"; then
    print_status "HTTPS is working (glumia.com)"
else
    print_warning "HTTPS might not be working (glumia.com)"
fi

# Check SSL certificate
echo ""
echo "🔐 SSL Certificate:"
if openssl s_client -connect glumia.com:443 -servername glumia.com < /dev/null 2>/dev/null | grep -q "Verify return code: 0"; then
    print_status "SSL certificate is valid"
    
    # Check certificate expiration
    EXPIRY=$(echo | openssl s_client -connect glumia.com:443 -servername glumia.com 2>/dev/null | openssl x509 -noout -dates | grep "notAfter" | cut -d= -f2)
    EXPIRY_EPOCH=$(date -d "$EXPIRY" +%s)
    CURRENT_EPOCH=$(date +%s)
    DAYS_LEFT=$(( (EXPIRY_EPOCH - CURRENT_EPOCH) / 86400 ))
    
    if [ $DAYS_LEFT -gt 30 ]; then
        print_status "SSL certificate expires in $DAYS_LEFT days"
    elif [ $DAYS_LEFT -gt 7 ]; then
        print_warning "SSL certificate expires in $DAYS_LEFT days (renewal recommended)"
    else
        print_error "SSL certificate expires in $DAYS_LEFT days (URGENT: renewal required)"
    fi
else
    print_error "SSL certificate is invalid or expired"
fi

# Check Nginx
echo ""
echo "🔄 Nginx Health:"
if curl -s -o /dev/null -w "%{http_code}" http://localhost/health | grep -q "200"; then
    print_status "Nginx is responding to health checks"
else
    print_warning "Nginx health check endpoint not responding"
fi

# Check API endpoints
echo ""
echo "📡 API Health:"
if curl -s -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Health Check","email":"health@test.com","subject":"Health Check","number":"1234567890","message":"Health check test"}' \
  | grep -q "Email service not configured\|Email sent successfully"; then
    print_status "Contact API is responding"
else
    print_error "Contact API is not responding"
fi

# Check disk space
echo ""
echo "💾 Disk Space:"
DISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $DISK_USAGE -lt 80 ]; then
    print_status "Disk usage: ${DISK_USAGE}%"
else
    print_warning "Disk usage: ${DISK_USAGE}% (cleanup recommended)"
fi

# Check memory usage
echo ""
echo "🧠 Memory Usage:"
MEMORY_USAGE=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')
if [ $MEMORY_USAGE -lt 80 ]; then
    print_status "Memory usage: ${MEMORY_USAGE}%"
else
    print_warning "Memory usage: ${MEMORY_USAGE}% (monitor closely)"
fi

# Check Docker logs for errors
echo ""
echo "📋 Recent Errors:"
ERROR_COUNT=$(docker-compose logs --tail=100 2>&1 | grep -i "error\|exception\|failed" | wc -l)
if [ $ERROR_COUNT -eq 0 ]; then
    print_status "No recent errors found in logs"
else
    print_warning "Found $ERROR_COUNT recent errors in logs"
    echo "Recent errors:"
    docker-compose logs --tail=20 2>&1 | grep -i "error\|exception\|failed" | tail -5
fi

echo ""
echo "✅ Health check completed!"
echo ""
echo "For detailed logs, run:"
echo "  docker-compose logs -f"
echo ""
echo "To restart services:"
echo "  docker-compose restart"
echo ""
echo "To update application:"
echo "  ./deploy.sh"
