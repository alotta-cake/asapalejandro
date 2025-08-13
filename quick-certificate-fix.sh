#!/bin/bash

# Quick Certificate Fix for asapalejandro.com
# This script will help you get a trusted certificate quickly

echo "🔐 Quick Certificate Fix for asapalejandro.com"
echo "=============================================="

# Check if we're in WSL
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo "✅ Running in Linux environment"
else
    echo "❌ Please run this in WSL (Linux environment)"
    exit 1
fi

# Install certbot if not available
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing certbot..."
    sudo apt update
    sudo apt install certbot -y
fi

echo ""
echo "🚀 Starting certificate generation..."
echo "⚠️  You will need to add DNS records to your Namecheap domain"
echo ""

# Generate certificate using DNS challenge
sudo certbot certonly \
    --manual \
    --preferred-challenges=dns \
    --email alottacakellc@gmail.com \
    --agree-tos \
    --no-eff-email \
    -d asapalejandro.com

echo ""
echo "✅ Certificate generation complete!"
echo "📁 Certificates are stored in /etc/letsencrypt/live/asapalejandro.com/"
echo ""
echo "🔧 Next steps:"
echo "1. Copy certificates to your project directory"
echo "2. Create IBM Cloud Code Engine TLS secret"
echo "3. Configure domain mapping"
echo ""
echo "📋 Commands to run after certificate generation:"
echo "sudo cp /etc/letsencrypt/live/asapalejandro.com/fullchain.pem ./asapalejandro.com.crt"
echo "sudo cp /etc/letsencrypt/live/asapalejandro.com/privkey.pem ./asapalejandro.com.key"
echo "ibmcloud ce secret update --name asapalejandro-tls --from-file=tls.crt=asapalejandro.com.crt --from-file=tls.key=asapalejandro.com.key"
echo "ibmcloud ce domainmapping create --domain-name asapalejandro.com --target alejandro-website --target-type application --tls-secret asapalejandro-tls" 