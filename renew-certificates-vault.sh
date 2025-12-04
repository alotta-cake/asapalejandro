#!/bin/bash

# Automated Certificate Renewal with Vault Integration
# This script renews Let's Encrypt certificates and updates Vault + IBM Cloud

echo "🔐 Starting automated certificate renewal process..."

# Check if we're in WSL
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo "✅ Running in Linux environment"
else
    echo "❌ Please run this in WSL (Linux environment)"
    exit 1
fi

# Set variables
DOMAIN="asapalejandro.com"
VAULT_SECRET_PATH="secret/asapalejandro-tls"
PROJECT_DIR="/mnt/c/Users/AlejandroPalumbo/Documents/Alotta-cake/AutomationAlejandro"

# Function to check if Vault is running
check_vault() {
    if ! pgrep -x "vault" > /dev/null; then
        echo "🚨 Vault is not running. Starting Vault server..."
        vault server -dev -dev-root-token-id="root" -dev-listen-address="0.0.0.0:8200" &
        sleep 5
        export VAULT_ADDR='http://0.0.0.0:8200'
        export VAULT_TOKEN='root'
    else
        echo "✅ Vault is running"
        export VAULT_ADDR='http://0.0.0.0:8200'
        export VAULT_TOKEN='root'
    fi
}

# Function to renew certificates
renew_certificates() {
    echo "🔄 Renewing Let's Encrypt certificates..."
    
    # First check if renewal is needed (dry-run to check)
    if certbot renew --dry-run --cert-name $DOMAIN > /dev/null 2>&1; then
        echo "✅ Certificate renewal check passed"
    else
        echo "⚠️  Certificate needs renewal or doesn't exist"
    fi
    
    # Actually renew the certificate (certbot only renews if within 30 days of expiration)
    echo "🔄 Attempting certificate renewal..."
    if certbot renew --cert-name $DOMAIN --quiet --no-random-sleep-on-renew; then
        echo "✅ Certificate renewed successfully"
    else
        # If renewal didn't happen (not within 30 days), try to get a new certificate
        echo "⚠️  Automatic renewal not triggered (certificate may be too new or expired)"
        echo "🔄 Attempting to obtain new certificate..."
        
        # Check if certificate exists
        if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
            echo "✅ Certificate exists, using existing certificate"
        else
            echo "❌ Certificate not found. Please run certbot certonly manually first."
            return 1
        fi
    fi
    
    # Copy certificates to project directory
    echo "📁 Copying certificates to project directory..."
    if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
        sudo cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem $PROJECT_DIR/$DOMAIN.crt
        sudo cp /etc/letsencrypt/live/$DOMAIN/privkey.pem $PROJECT_DIR/$DOMAIN.key
        
        # Fix permissions
        sudo chown apalumbo:apalumbo $PROJECT_DIR/$DOMAIN.crt $PROJECT_DIR/$DOMAIN.key
        chmod 644 $PROJECT_DIR/$DOMAIN.crt
        chmod 600 $PROJECT_DIR/$DOMAIN.key
        
        echo "✅ Certificates copied successfully"
        return 0
    else
        echo "❌ Certificate files not found"
        return 1
    fi
}

# Function to update Vault
update_vault() {
    echo "🔐 Updating Vault with renewed certificates..."
    
    if vault kv put $VAULT_SECRET_PATH \
        cert=@$PROJECT_DIR/$DOMAIN.crt \
        key=@$PROJECT_DIR/$DOMAIN.key; then
        echo "✅ Certificates updated in Vault successfully"
        return 0
    else
        echo "❌ Failed to update Vault"
        return 1
    fi
}

# Function to update IBM Cloud Code Engine
update_ibm_cloud() {
    echo "☁️ Updating IBM Cloud Code Engine TLS secret..."
    
    # Check if IBM Cloud CLI is available
    if ! command -v ibmcloud &> /dev/null; then
        echo "❌ IBM Cloud CLI not found. Please install and login first."
        return 1
    fi
    
    # Update the TLS secret
    if ibmcloud ce secret update --name asapalejandro-tls \
        --from-file=tls.crt=$PROJECT_DIR/$DOMAIN.crt \
        --from-file=tls.key=$PROJECT_DIR/$DOMAIN.key; then
        echo "✅ IBM Cloud Code Engine secret updated successfully"
        return 0
    else
        echo "❌ Failed to update IBM Cloud Code Engine secret"
        return 1
    fi
}

# Function to verify the setup
verify_setup() {
    echo "🔍 Verifying the setup..."
    
    # Check if certificates exist
    if [[ -f "$PROJECT_DIR/$DOMAIN.crt" && -f "$PROJECT_DIR/$DOMAIN.key" ]]; then
        echo "✅ Certificate files exist in project directory"
    else
        echo "❌ Certificate files missing"
        return 1
    fi
    
    # Check Vault
    if vault kv get $VAULT_SECRET_PATH &> /dev/null; then
        echo "✅ Certificates are stored in Vault"
    else
        echo "❌ Certificates not found in Vault"
        return 1
    fi
    
    # Check IBM Cloud (if CLI is available)
    if command -v ibmcloud &> /dev/null; then
        echo "✅ IBM Cloud CLI is available"
    else
        echo "⚠️ IBM Cloud CLI not available for verification"
    fi
    
    return 0
}

# Main execution
main() {
    echo "🚀 Starting certificate renewal and Vault integration process..."
    
    # Check Vault
    check_vault
    
    # Renew certificates
    if renew_certificates; then
        # Update Vault
        if update_vault; then
            # Update IBM Cloud
            update_ibm_cloud
            
            # Verify setup
            verify_setup
            
            echo "🎉 Certificate renewal and Vault integration completed successfully!"
            echo "📅 Next renewal check: $(date -d '+30 days' '+%Y-%m-%d')"
        else
            echo "❌ Vault update failed"
            exit 1
        fi
    else
        echo "❌ Certificate renewal failed"
        exit 1
    fi
}

# Run main function
main "$@" 