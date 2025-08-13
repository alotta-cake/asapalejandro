# Blog 3: Zero-Trust TLS Management with IBM Cloud and Vault

## 🎯 **Complete Production TLS Workflow**

### **What We've Accomplished:**

✅ **Vault Setup & PKI Configuration**
- Installed Vault v1.17.0 in WSL (Linux environment)
- Configured PKI secrets engine for certificate management
- Generated self-signed certificates for testing
- Identified production limitations

✅ **IBM Cloud Code Engine Integration**
- Created TLS secrets in Code Engine
- Attempted domain mapping with self-signed certificates
- Learned about trusted certificate requirements

✅ **Production Security Considerations**
- Identified why self-signed certificates don't work for production
- Explored Let's Encrypt as the industry standard
- Planned IBM Cloud Certificate Manager integration

## 🔐 **Production TLS Options**

### **Option 1: Let's Encrypt (Recommended)**

**Setup Steps:**
```bash
# Install certbot
sudo apt update && sudo apt install certbot -y

# Generate certificate using DNS challenge
sudo certbot certonly \
    --manual \
    --preferred-challenges=dns \
    --email your-email@domain.com \
    --agree-tos \
    --no-eff-email \
    -d asapalejandro.com \
    -d *.asapalejandro.com
```

**DNS Challenge Process:**
1. Certbot provides DNS records to add
2. Add TXT records to Namecheap DNS
3. Certbot validates domain ownership
4. Certificate is generated

### **Option 2: IBM Cloud Certificate Manager**

**Benefits:**
- ✅ Fully managed by IBM
- ✅ Automatic renewal
- ✅ Zero-trust compliance
- ✅ Free tier available

**Setup:**
1. Create Certificate Manager instance in IBM Cloud Console
2. Request certificate for your domain
3. Configure automatic renewal
4. Integrate with Code Engine

## 🔄 **Vault Integration for Secrets Management**

### **Production Vault Setup:**

**1. Install Vault in Production Mode:**
```bash
# Download and install Vault
wget https://releases.hashicorp.com/vault/1.17.0/vault_1.17.0_linux_amd64.zip
unzip vault_1.17.0_linux_amd64.zip
sudo mv vault /usr/local/bin/

# Create production configuration
sudo mkdir -p /etc/vault.d
sudo tee /etc/vault.d/vault.hcl <<EOF
storage "file" {
  path = "/opt/vault/data"
}

listener "tcp" {
  address     = "0.0.0.0:8200"
  tls_disable = 1
}

api_addr = "http://0.0.0.0:8200"
cluster_addr = "https://0.0.0.0:8201"

ui = true
EOF
```

**2. Initialize Vault:**
```bash
# Initialize with multiple unseal keys
vault operator init -key-shares=5 -key-threshold=3

# Store unseal keys securely
# Unseal vault
vault operator unseal
```

**3. Configure PKI for Certificate Storage:**
```bash
# Enable PKI
vault secrets enable pki

# Configure for certificate storage (not generation)
vault write pki/config/urls \
    issuing_certificates="http://vault.example.com:8200/v1/pki/ca" \
    crl_distribution_points="http://vault.example.com:8200/v1/pki/crl"
```

### **CI/CD Integration:**

**1. Store Let's Encrypt Certificates in Vault:**
```bash
# Store certificate and private key
vault kv put secret/asapalejandro-tls \
    cert=@/etc/letsencrypt/live/asapalejandro.com/fullchain.pem \
    key=@/etc/letsencrypt/live/asapalejandro.com/privkey.pem
```

**2. Automated Renewal Script:**
```bash
#!/bin/bash
# renew-certificates.sh

# Renew Let's Encrypt certificates
certbot renew --quiet

# Store in Vault
vault kv put secret/asapalejandro-tls \
    cert=@/etc/letsencrypt/live/asapalejandro.com/fullchain.pem \
    key=@/etc/letsencrypt/live/asapalejandro.com/privkey.pem

# Update IBM Cloud Code Engine secret
ibmcloud ce secret update --name asapalejandro-tls \
    --from-file=tls.crt=/etc/letsencrypt/live/asapalejandro.com/fullchain.pem \
    --from-file=tls.key=/etc/letsencrypt/live/asapalejandro.com/privkey.pem
```

## 🚀 **Complete Production Workflow**

### **Step 1: Let's Encrypt Certificate Generation**
```bash
# Generate trusted certificate
sudo certbot certonly --manual --preferred-challenges=dns \
    --email alottacakellc@gmail.com --agree-tos --no-eff-email \
    -d asapalejandro.com
```

### **Step 2: Store in Vault**
```bash
# Store certificate securely
vault kv put secret/asapalejandro-tls \
    cert=@/etc/letsencrypt/live/asapalejandro.com/fullchain.pem \
    key=@/etc/letsencrypt/live/asapalejandro.com/privkey.pem
```

### **Step 3: Create IBM Cloud TLS Secret**
```bash
# Create TLS secret in Code Engine
ibmcloud ce secret create --name asapalejandro-tls \
    --from-file=tls.crt=/etc/letsencrypt/live/asapalejandro.com/fullchain.pem \
    --from-file=tls.key=/etc/letsencrypt/live/asapalejandro.com/privkey.pem
```

### **Step 4: Configure Domain Mapping**
```bash
# Create domain mapping with trusted certificate
ibmcloud ce domainmapping create \
    --domain-name asapalejandro.com \
    --target alejandro-website \
    --target-type application \
    --tls-secret asapalejandro-tls
```

## 🔧 **Automation with Cron Jobs**

**Set up automatic renewal:**
```bash
# Add to crontab
0 12 * * * /path/to/renew-certificates.sh
```

## 📊 **Zero-Trust Benefits**

✅ **Let's Encrypt**: Free, trusted certificates
✅ **Vault**: Secure certificate storage and management
✅ **IBM Cloud**: Managed hosting with zero-trust compliance
✅ **Automation**: No manual certificate renewal
✅ **Cost-effective**: Free certificates + IBM Cloud free tier

## 🎯 **Next Steps**

1. **Generate Let's Encrypt certificate** using DNS challenge
2. **Set up production Vault** for certificate storage
3. **Create automated renewal** pipeline
4. **Configure domain mapping** with trusted certificate
5. **Monitor and maintain** the zero-trust setup

---

**This approach gives you the best of both worlds: trusted certificates from Let's Encrypt and secure management with Vault, all running on IBM Cloud's zero-trust infrastructure!** 🚀 