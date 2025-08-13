#!/bin/bash

# Let's Encrypt Certificate Generation Script
# This script uses DNS challenge method for IBM Cloud Code Engine

echo "🔐 Let's Encrypt Certificate Generation for asapalejandro.com"
echo "=========================================================="

# Check if certbot is available
if ! command -v certbot &> /dev/null; then
    echo "❌ Certbot not found. Installing..."
    sudo apt update
    sudo apt install certbot -y
fi

# Generate certificate using DNS challenge
echo "📝 Generating certificate using DNS challenge..."
echo "⚠️  You will need to add DNS records to your Namecheap domain"
echo ""

# Use certbot with DNS challenge
sudo certbot certonly \
    --manual \
    --preferred-challenges=dns \
    --email alottacakellc@gmail.com \
    --agree-tos \
    --no-eff-email \
    -d asapalejandro.com \
    -d *.asapalejandro.com

echo ""
echo "✅ Certificate generation complete!"
echo "📁 Certificates are stored in /etc/letsencrypt/live/asapalejandro.com/"
echo ""
echo "🔧 Next steps:"
echo "1. Copy certificates to your project directory"
echo "2. Create IBM Cloud Code Engine TLS secret"
echo "3. Configure domain mapping" 