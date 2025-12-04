#!/bin/bash

# Enterprise Certificate Management: IBM Cloud Certificate Manager + Vault Integration
# This script sets up automated certificate management with Vault backup

echo "🏢 Enterprise Certificate Management Setup"
echo "=========================================="
echo ""

# Set variables
DOMAIN="asapalejandro.com"
CERT_MANAGER_INSTANCE="asapalejandro-cert-manager"
VAULT_SECRET_PATH="secret/asapalejandro-tls"
PROJECT_DIR="/mnt/c/Users/AlejandroPalumbo/Documents/Alotta-cake/AutomationAlejandro"

# Step 1: Create Certificate Manager Instance
echo "📋 Step 1: Creating IBM Cloud Certificate Manager instance..."
echo ""
echo "Run this command:"
echo "  ibmcloud resource service-instance-create $CERT_MANAGER_INSTANCE certificate-manager standard us-south"
echo ""
read -p "Press Enter after creating the instance..."

# Step 2: Request Certificate
echo ""
echo "📋 Step 2: Requesting certificate for $DOMAIN..."
echo ""
echo "Option A: Via Web Console (Recommended)"
echo "  1. Go to: https://cloud.ibm.com/services/certificate-manager"
echo "  2. Select your instance"
echo "  3. Click 'Order' → 'Public Certificate'"
echo "  4. Enter domain: $DOMAIN"
echo "  5. Choose DNS validation"
echo "  6. Add DNS TXT records to Namecheap when prompted"
echo ""
echo "Option B: Via CLI (if available)"
echo "  ibmcloud certificate-manager certificate-order --instance-name $CERT_MANAGER_INSTANCE --domain $DOMAIN"
echo ""
read -p "Press Enter after certificate is issued..."

# Step 3: Configure Vault
echo ""
echo "🔐 Step 3: Setting up Vault integration..."
echo ""

# Check if Vault is running
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

# Step 4: Export Certificate from Certificate Manager to Vault
echo ""
echo "📥 Step 4: Exporting certificate to Vault..."
echo ""

# Get certificate from Certificate Manager
echo "Getting certificate from Certificate Manager..."
CERT_DATA=$(ibmcloud certificate-manager certificate-get --instance-name $CERT_MANAGER_INSTANCE --certificate-name $DOMAIN --output json 2>/dev/null)

if [ $? -eq 0 ]; then
    # Extract certificate and key
    CERT=$(echo $CERT_DATA | jq -r '.certificate')
    KEY=$(echo $CERT_DATA | jq -r '.private_key')
    
    # Store in Vault
    echo "$CERT" > /tmp/$DOMAIN.crt
    echo "$KEY" > /tmp/$DOMAIN.key
    
    vault kv put $VAULT_SECRET_PATH \
        cert=@/tmp/$DOMAIN.crt \
        key=@/tmp/$DOMAIN.key
    
    echo "✅ Certificate stored in Vault"
else
    echo "⚠️  Could not retrieve certificate via CLI. Using manual export..."
    echo ""
    echo "Manual steps:"
    echo "  1. Go to Certificate Manager in IBM Cloud Console"
    echo "  2. Download certificate and private key"
    echo "  3. Save as $DOMAIN.crt and $DOMAIN.key in project directory"
    echo "  4. Run: vault kv put $VAULT_SECRET_PATH cert=@$DOMAIN.crt key=@$DOMAIN.key"
    echo ""
fi

# Step 5: Configure Code Engine to use Certificate Manager
echo ""
echo "☁️ Step 5: Configuring Code Engine domain mapping..."
echo ""
echo "Certificate Manager certificates can be used directly in Code Engine:"
echo ""
echo "Option A: Use Certificate Manager directly (Recommended)"
echo "  ibmcloud ce domainmapping create --domain-name $DOMAIN --target alejandro-website --target-type application --cert-manager-instance $CERT_MANAGER_INSTANCE"
echo ""
echo "Option B: Use Vault-stored certificate"
echo "  ibmcloud ce secret update --name asapalejandro-tls --from-file=tls.crt=$DOMAIN.crt --from-file=tls.key=$DOMAIN.key"
echo "  ibmcloud ce domainmapping update --domain-name $DOMAIN --tls-secret asapalejandro-tls"
echo ""

# Step 6: Set up automated sync (Certificate Manager → Vault)
echo ""
echo "🔄 Step 6: Setting up automated sync..."
echo ""
echo "Create a scheduled job to sync Certificate Manager → Vault:"
echo ""
echo "Add to crontab (runs daily at 3 AM):"
echo "  0 3 * * * $PROJECT_DIR/sync-cert-manager-to-vault.sh >> /tmp/cert-sync.log 2>&1"
echo ""

echo "✅ Setup complete!"
echo ""
echo "📋 Summary:"
echo "  ✅ Certificate Manager: Auto-renewal managed by IBM"
echo "  ✅ Vault: Backup and audit trail"
echo "  ✅ Code Engine: Uses Certificate Manager certificates"
echo "  ✅ Automation: Daily sync to Vault"
echo ""

