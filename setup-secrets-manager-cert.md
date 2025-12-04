# Setup Secrets Manager Certificate for asapalejandro.com

## Current Status:
✅ Secrets Manager instance created: `asapalejandro-secrets-manager`

## Next Steps (via IBM Cloud Console):

1. **Access Secrets Manager:**
   - Go to: https://cloud.ibm.com/resources
   - Find: `asapalejandro-secrets-manager`
   - Click to open

2. **Configure Let's Encrypt ACME Account:**
   - Go to "Configuration" → "Public certificates"
   - Add Let's Encrypt ACME account
   - Email: alottacakellc@gmail.com

3. **Order Certificate:**
   - Go to "Secrets" → "Order a public certificate"
   - Domain: `asapalejandro.com`
   - Certificate Authority: Let's Encrypt
   - DNS Provider: Manual (we'll add DNS record once)
   - Enable auto-renewal: ✅

4. **Complete DNS Validation:**
   - Secrets Manager will provide a DNS TXT record
   - Add it to Namecheap DNS (one-time)
   - Secrets Manager will validate automatically

5. **After Certificate is Issued:**
   - Certificate will auto-renew (no manual steps)
   - We'll configure Code Engine to use it

## Result:
- ✅ Fully automated certificate renewal
- ✅ No manual DNS updates after initial setup
- ✅ Enterprise-grade certificate management



