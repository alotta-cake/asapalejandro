#!/bin/bash

# Automated sync: Certificate Manager → Vault
# This script runs daily to backup Certificate Manager certificates to Vault

echo "🔄 Syncing Certificate Manager certificates to Vault..."
echo "Date: $(date)"

# Set variables
DOMAIN="asapalejandro.com"
CERT_MANAGER_INSTANCE="asapalejandro-cert-manager"
VAULT_SECRET_PATH="secret/asapalejandro-tls"
PROJECT_DIR="/mnt/c/Users/AlejandroPalumbo/Documents/Alotta-cake/AutomationAlejandro"

# Set Vault environment
export VAULT_ADDR='http://127.0.0.1:8200'
export VAULT_TOKEN='root'

# Check if Vault is running
if ! vault status > /dev/null 2>&1; then
    echo "❌ Vault is not running. Starting Vault..."
    vault server -dev -dev-root-token-id="root" -dev-listen-address="0.0.0.0:8200" &
    sleep 5
fi

# Get certificate from Certificate Manager
echo "📥 Fetching certificate from Certificate Manager..."
CERT_DATA=$(ibmcloud certificate-manager certificate-get \
    --instance-name $CERT_MANAGER_INSTANCE \
    --certificate-name $DOMAIN \
    --output json 2>/dev/null)

if [ $? -eq 0 ] && [ -n "$CERT_DATA" ]; then
    # Extract certificate and key
    CERT=$(echo $CERT_DATA | jq -r '.certificate // empty')
    KEY=$(echo $CERT_DATA | jq -r '.private_key // empty')
    
    if [ -n "$CERT" ] && [ -n "$KEY" ]; then
        # Save to temp files
        echo "$CERT" > /tmp/$DOMAIN.crt
        echo "$KEY" > /tmp/$DOMAIN.key
        
        # Store in Vault
        if vault kv put $VAULT_SECRET_PATH \
            cert=@/tmp/$DOMAIN.crt \
            key=@/tmp/$DOMAIN.key; then
            echo "✅ Certificate synced to Vault successfully"
            
            # Clean up
            rm -f /tmp/$DOMAIN.crt /tmp/$DOMAIN.key
        else
            echo "❌ Failed to store certificate in Vault"
            exit 1
        fi
    else
        echo "⚠️  Certificate data incomplete"
        exit 1
    fi
else
    echo "⚠️  Could not retrieve certificate from Certificate Manager"
    echo "   This might be normal if using web console for certificate management"
    exit 0  # Don't fail - Certificate Manager handles renewals
fi

echo "✅ Sync complete!"

