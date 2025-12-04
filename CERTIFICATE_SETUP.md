# 🔐 Certificate Management

## Quick Fix for Expired Certificate

Your certificate has expired. Here's how to fix it:

### IBM Cloud Certificate Manager (Recommended)

1. **Create Certificate Manager instance:**
   ```bash
   ibmcloud resource service-instance-create asapalejandro-cert-manager certificate-manager standard us-south
   ```

2. **Request certificate via web console:**
   - Go to: https://cloud.ibm.com/catalog/services/certificate-manager
   - Create instance → Order certificate → DNS validation
   - Add DNS TXT records to Namecheap

3. **Configure Code Engine:**
   ```bash
   ibmcloud ce domainmapping update --domain-name asapalejandro.com --cert-manager-instance asapalejandro-cert-manager
   ```

## Automated Renewal

Certificate Manager handles automatic renewal - no additional setup needed.

