#!/bin/bash

# Let's Encrypt Staging Certificate Setup
# This uses the staging environment for testing

echo "🧪 Let's Encrypt Staging Certificate Setup"
echo "=========================================="

# Install certbot if not available
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing certbot..."
    sudo apt update
    sudo apt install certbot -y
fi

echo "🔧 Setting up staging certificate..."
echo "📝 This will use Let's Encrypt staging environment (not trusted by browsers)"
echo ""

# Use staging environment
sudo certbot certonly \
    --staging \
    --manual \
    --preferred-challenges=dns \
    --email alottacakellc@gmail.com \
    --agree-tos \
    --no-eff-email \
    -d asapalejandro.com

echo ""
echo "✅ Staging certificate generated!"
echo "📁 Location: /etc/letsencrypt/live/asapalejandro.com/"
echo ""
echo "🔧 Next: Copy certificates and test with IBM Cloud" 