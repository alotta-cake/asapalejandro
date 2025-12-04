#!/bin/bash
# Quick certificate fix for asapalejandro.com
# This generates a new certificate and updates Code Engine

DOMAIN="asapalejandro.com"
PROJECT_DIR="/mnt/c/Users/AlejandroPalumbo/Documents/Alotta-cake/AutomationAlejandro"

echo "🔐 Generating new certificate for $DOMAIN..."
echo ""
echo "Using HTTP validation (automatic - no DNS records needed)"
echo ""

# Generate certificate using HTTP validation (automatic)
sudo certbot certonly --standalone \
    --preferred-challenges=http \
    --email alottacakellc@gmail.com \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN \
    --http-01-port=8888

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Certificate generated!"
    echo "📁 Copying certificates to project directory..."
    
    # Copy to project directory
    sudo cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem $PROJECT_DIR/$DOMAIN.crt
    sudo cp /etc/letsencrypt/live/$DOMAIN/privkey.pem $PROJECT_DIR/$DOMAIN.key
    
    # Fix permissions
    sudo chown apalumbo:apalumbo $PROJECT_DIR/$DOMAIN.crt $PROJECT_DIR/$DOMAIN.key
    chmod 644 $PROJECT_DIR/$DOMAIN.crt
    chmod 600 $PROJECT_DIR/$DOMAIN.key
    
    echo "✅ Certificates copied!"
    echo ""
    echo "Next step: Update Code Engine secret"
    echo "Run: ibmcloud ce secret update --name asapalejandro-tls --from-file=tls.crt=$DOMAIN.crt --from-file=tls.key=$DOMAIN.key"
else
    echo "❌ Certificate generation failed"
    exit 1
fi

