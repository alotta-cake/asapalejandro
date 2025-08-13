# 🔐 Automated Certificate Renewal with Vault Integration

## 🎯 **What We've Built:**

- ✅ **Trusted TLS certificates** for `asapalejandro.com`
- ✅ **Vault integration** for secure certificate storage
- ✅ **Automated renewal script** that updates both Vault and IBM Cloud
- ✅ **Zero-trust certificate management** workflow

## 🚀 **Setting Up Automated Renewal:**

### **Step 1: Test the Renewal Script**
```bash
./renew-certificates-vault.sh
```

### **Step 2: Set Up Cron Job for Daily Checks**
```bash
# Open crontab for editing
crontab -e

# Add this line for daily certificate checks (runs at 2 AM)
0 2 * * * /mnt/c/Users/AlejandroPalumbo/Documents/Alotta-cake/AutomationAlejandro/renew-certificates-vault.sh >> /tmp/cert-renewal.log 2>&1
```

### **Step 3: Verify Cron Job**
```bash
# List current cron jobs
crontab -l

# Check if the job is scheduled
systemctl status cron
```

## 📅 **Renewal Schedule:**

- **Let's Encrypt certificates** expire after 90 days
- **Our script checks daily** but only renews when needed (within 30 days of expiration)
- **Vault automatically stores** renewed certificates
- **IBM Cloud Code Engine** gets updated automatically

## 🔍 **Monitoring and Logs:**

### **Check Renewal Logs:**
```bash
tail -f /tmp/cert-renewal.log
```

### **Verify Vault Storage:**
```bash
vault kv get secret/asapalejandro-tls
```

### **Check Certificate Expiration:**
```bash
openssl x509 -in asapalejandro.com.crt -text -noout | grep "Not After"
```

## 🛡️ **Security Features:**

- **Vault encryption** for certificate storage
- **Automatic permission management** (600 for private keys, 644 for certificates)
- **IBM Cloud integration** for seamless deployment
- **Error handling** and logging for troubleshooting

## 📝 **Blog Content:**

This setup demonstrates:
- **Hybrid approach** combining open source and enterprise tools
- **Automated security** with zero manual intervention
- **Enterprise-grade** certificate management
- **Cost-effective** TLS solution using trusted tools

## 🎉 **Result:**

Your `asapalejandro.com` now has:
- ✅ **Trusted HTTPS** with Let's Encrypt
- ✅ **Secure storage** in Vault
- ✅ **Automated renewal** every 90 days
- ✅ **Zero-trust certificate management**
- ✅ **Professional-grade security** setup 