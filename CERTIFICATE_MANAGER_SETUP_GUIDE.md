# 🔐 IBM Cloud Certificate Manager Setup Guide

## 🎯 **Goal:**
Fix the expired certificate for asapalejandro.com using IBM Cloud Certificate Manager

## 📋 **Step-by-Step Instructions:**

### **Step 1: Create Certificate Manager Instance**

**Via Web Console (Recommended):**
1. Go to: https://cloud.ibm.com/catalog/services/certificate-manager
2. Click "Create" or "Get started"
3. Fill in:
   - **Service name**: `asapalejandro-cert-manager`
   - **Resource group**: Default
   - **Region**: us-south
   - **Plan**: Standard (or Free tier if available)
4. Click "Create"

**Via CLI (if service name is correct):**
```bash
ibmcloud resource service-instance-create asapalejandro-cert-manager \
    certificate-manager \
    standard \
    us-south
```

### **Step 2: Request Certificate**

1. Go to your Certificate Manager instance in IBM Cloud Console
2. Click "Order" or "Add Certificate"
3. Select "Public Certificate"
4. Enter domain: `asapalejandro.com`
5. Choose **DNS validation** method
6. Click "Order"

### **Step 3: Complete DNS Validation**

1. Certificate Manager will provide DNS TXT records
2. Go to Namecheap DNS management
3. Add the TXT record(s) provided
4. Wait 5-15 minutes for DNS propagation
5. Return to Certificate Manager and click "Validate"

### **Step 4: Configure Code Engine**

Once certificate is issued:

```bash
# Update domain mapping to use Certificate Manager
ibmcloud ce domainmapping update \
    --domain-name asapalejandro.com \
    --cert-manager-instance asapalejandro-cert-manager
```

**OR via Web Console:**
1. Go to Code Engine → Domain Mappings
2. Edit `asapalejandro.com` domain mapping
3. Select Certificate Manager instance
4. Save

### **Step 5: Verify**

1. Wait 5-10 minutes for changes to propagate
2. Visit https://asapalejandro.com
3. Check browser shows "Secure" (lock icon)
4. Certificate should be valid

## ✅ **Success Criteria:**

- ✅ Certificate Manager instance created
- ✅ Certificate issued and validated
- ✅ Code Engine domain mapping updated
- ✅ Website shows as "Secure" in browser
- ✅ No certificate warnings

## 🔄 **Automatic Renewal:**

Certificate Manager automatically renews certificates - no manual steps needed!



