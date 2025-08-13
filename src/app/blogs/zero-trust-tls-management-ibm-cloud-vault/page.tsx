import React from 'react';
import Link from 'next/link';

export default function ZeroTrustTLSBlog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/blogs" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Blogs
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zero-Trust TLS Management with IBM Cloud and Vault
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span>August 6, 2025</span>
            <span className="mx-2">•</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">DevOps</span>
            <span className="mx-2">•</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Security</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🔐 Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In our journey to deploy a production website on IBM Cloud Code Engine, we discovered the critical importance 
            of proper TLS certificate management. This blog post explores how to implement a zero-trust TLS strategy 
            using IBM Cloud services and HashiCorp Vault for secure certificate management.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We'll cover everything from initial setup to production deployment, including the challenges we faced 
            and the solutions we implemented.
          </p>
        </div>

        {/* What We Accomplished */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">✅ What We Accomplished</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Vault Setup & PKI Configuration</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Installed Vault v1.17.0 in WSL (Linux environment)</li>
                <li>• Configured PKI secrets engine for certificate management</li>
                <li>• Generated self-signed certificates for testing</li>
                <li>• Identified production limitations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">IBM Cloud Code Engine Integration</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Created TLS secrets in Code Engine</li>
                <li>• Attempted domain mapping with self-signed certificates</li>
                <li>• Learned about trusted certificate requirements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Challenge */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🚨 The Production Challenge</h2>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Self-Signed Certificate Rejection</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>IBM Cloud Code Engine rejected our Vault-generated self-signed certificates because they're not trusted by browsers and systems.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our initial approach using Vault's PKI engine to generate self-signed certificates worked perfectly for testing, 
            but IBM Cloud Code Engine requires trusted certificates for production use. This is actually a security feature 
            that protects users from potential security risks.
          </p>
        </div>

        {/* Production Solutions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🔧 Production TLS Solutions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
                         <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
               <h3 className="text-lg font-semibold text-blue-800 mb-3">Option 1: IBM Cloud Certificate Manager (Recommended)</h3>
               <ul className="text-blue-700 space-y-2 mb-4">
                 <li>✅ Fully managed by IBM</li>
                 <li>✅ Zero-trust compliance</li>
                 <li>✅ Automatic renewal</li>
                 <li>✅ Free tier available</li>
                 <li>✅ No complex setup</li>
               </ul>
               <div className="bg-white p-3 rounded text-sm">
                 <code className="text-blue-800">
                   IBM Cloud Console → Certificate Manager → Request Certificate
                 </code>
               </div>
             </div>
             
             <div className="border border-gray-200 rounded-lg p-4">
               <h3 className="text-lg font-semibold text-gray-800 mb-3">Option 2: Let's Encrypt (Alternative)</h3>
               <ul className="text-gray-700 space-y-2 mb-4">
                 <li>✅ 100% Free certificates</li>
                 <li>✅ Trusted by all browsers</li>
                 <li>✅ Automated renewal</li>
                 <li>✅ Industry standard</li>
               </ul>
               <div className="bg-gray-50 p-3 rounded text-sm">
                 <code className="text-gray-800">
                   sudo certbot certonly --manual --preferred-challenges=dns -d asapalejandro.com
                 </code>
               </div>
             </div>
          </div>
        </div>

                 {/* IBM Cloud Certificate Manager - The Simple Way */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
           <h2 className="text-2xl font-semibold text-gray-900 mb-4">🚀 IBM Cloud Certificate Manager - The Simple Way</h2>
           
           <p className="text-gray-700 leading-relaxed mb-6">
             For IBM Cloud users, the easiest approach is to use IBM Cloud Certificate Manager. This eliminates the complexity 
             of external certificate authorities and provides a seamless IBM Cloud experience.
           </p>

           <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
             <h3 className="text-lg font-semibold text-green-800 mb-2">IBM Cloud Certificate Manager Benefits</h3>
             <div className="text-sm text-green-700 space-y-2">
               <p><strong>✅ Zero Configuration:</strong> No need to install or configure external tools</p>
               <p><strong>✅ Fully Managed:</strong> IBM handles certificate generation and renewal</p>
               <p><strong>✅ Zero-Trust Compliant:</strong> Built-in security and compliance</p>
               <p><strong>✅ Free Tier:</strong> Available at no cost for basic usage</p>
               <p><strong>✅ IBM Cloud Native:</strong> Seamless integration with Code Engine</p>
             </div>
           </div>

           <div className="bg-blue-50 p-4 rounded-lg mb-6">
             <h4 className="font-semibold text-blue-800 mb-2">Step-by-Step Setup:</h4>
             <ol className="text-blue-700 space-y-2 text-sm">
               <li>1. Go to IBM Cloud Console → Community Registry → "Cloud automation for Secrets Manager public certificates engine"</li>
               <li>2. Create a new project (e.g., "asapalejandro-public-certs-project")</li>
               <li>3. Configure required inputs (prefix, service plan)</li>
               <li>4. Deploy and wait for validation (5-15 minutes)</li>
               <li>5. Configure domain mapping with Code Engine</li>
             </ol>
           </div>

           <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
             <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Real-World Experience</h3>
             <div className="text-sm text-yellow-700 space-y-2">
               <p><strong>Validation Time:</strong> The deployment process includes validation of multiple services (Key Protect, Object Storage) which can take 5-15 minutes.</p>
               <p><strong>User Experience:</strong> Limited progress feedback during validation - you'll see "Working..." and "Validating..." status messages.</p>
               <p><strong>Dependencies:</strong> The automation sets up multiple IBM Cloud services that need to be validated before completion.</p>
             </div>
           </div>
         </div>

         {/* Vault Integration */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
           <h2 className="text-2xl font-semibold text-gray-900 mb-4">🔄 Vault Integration for Secrets Management</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            While Vault's PKI engine isn't suitable for generating public-facing certificates, it excels at 
            storing and managing certificates securely. Here's how to integrate Vault with Let's Encrypt:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Production Vault Setup</h3>
            <div className="text-sm text-blue-700 space-y-2">
              <p><strong>1. Install Vault in Production Mode:</strong> Use file storage instead of in-memory</p>
              <p><strong>2. Initialize with Multiple Unseal Keys:</strong> Use Shamir's Secret Sharing</p>
              <p><strong>3. Configure for Certificate Storage:</strong> Store Let's Encrypt certificates securely</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Automated Certificate Renewal Script:</h4>
            <pre className="text-sm text-gray-700 overflow-x-auto">
{`#!/bin/bash
# renew-certificates.sh

# Renew Let's Encrypt certificates
certbot renew --quiet

# Store in Vault
vault kv put secret/asapalejandro-tls \\
    cert=@/etc/letsencrypt/live/asapalejandro.com/fullchain.pem \\
    key=@/etc/letsencrypt/live/asapalejandro.com/privkey.pem

# Update IBM Cloud Code Engine secret
ibmcloud ce secret update --name asapalejandro-tls \\
    --from-file=tls.crt=/etc/letsencrypt/live/asapalejandro.com/fullchain.pem \\
    --from-file=tls.key=/etc/letsencrypt/live/asapalejandro.com/privkey.pem`}
            </pre>
          </div>
        </div>

        {/* Complete Workflow */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🚀 Complete Production Workflow</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-gray-800">Generate Let's Encrypt Certificate</h3>
                <p className="text-gray-700">Use DNS challenge method for IBM Cloud Code Engine</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-gray-800">Store in Vault</h3>
                <p className="text-gray-700">Securely store certificate and private key</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-gray-800">Create IBM Cloud TLS Secret</h3>
                <p className="text-gray-700">Upload certificate to Code Engine</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
              <div>
                <h3 className="font-semibold text-gray-800">Configure Domain Mapping</h3>
                <p className="text-gray-700">Connect custom domain with TLS certificate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Zero-Trust Benefits */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🛡️ Zero-Trust Benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Security</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Trusted certificates from Let's Encrypt</li>
                <li>• Secure certificate storage in Vault</li>
                <li>• IBM Cloud's zero-trust infrastructure</li>
                <li>• Automated renewal prevents expiration</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Cost & Efficiency</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Free certificates from Let's Encrypt</li>
                <li>• IBM Cloud free tier available</li>
                <li>• No manual certificate management</li>
                <li>• Industry-standard tools</li>
              </ul>
            </div>
          </div>
        </div>

                 {/* What We Accomplished - Success Story */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
           <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎉 Success Story - What We Accomplished</h2>
           
           <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
             <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Complete TLS Setup Success</h3>
             <ol className="text-green-700 space-y-2">
               <li>1. Generated trusted Let's Encrypt certificate using DNS challenge</li>
               <li>2. Updated IBM Cloud Code Engine TLS secret with trusted certificates</li>
               <li>3. Created domain mapping for asapalejandro.com</li>
               <li>4. Stored certificates securely in Vault for ongoing management</li>
               <li>5. Successfully deployed HTTPS website with trusted TLS</li>
             </ol>
           </div>

           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
             <h3 className="text-lg font-semibold text-blue-800 mb-3">🚀 The Hybrid Approach That Worked</h3>
             <p className="text-blue-700 text-sm">
               <strong>Let's Encrypt:</strong> Generated trusted, browser-recognized certificates<br/>
               <strong>Vault:</strong> Securely stored certificates for ongoing management<br/>
               <strong>IBM Cloud Code Engine:</strong> Hosted the application with TLS termination<br/>
               <strong>Result:</strong> asapalejandro.com now accessible with trusted HTTPS
             </p>
           </div>
         </div>

         {/* Next Steps */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
           <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎯 Next Steps</h2>
           
           <div className="bg-green-50 border border-green-200 rounded-lg p-4">
             <h3 className="text-lg font-semibold text-green-800 mb-3">Implementation Roadmap</h3>
             <ol className="text-green-700 space-y-2">
               <li>1. Set up automated certificate renewal with Vault</li>
               <li>2. Create monitoring and alerting for certificate expiration</li>
               <li>3. Implement automated deployment pipeline for renewed certificates</li>
               <li>4. Monitor and maintain the zero-trust setup</li>
             </ol>
           </div>
         </div>

                 {/* Conclusion */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
           <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎉 Conclusion</h2>
           
           <p className="text-gray-700 leading-relaxed mb-4">
             We successfully implemented a zero-trust TLS management approach that combines the best of open source and 
             enterprise tools: trusted certificates from Let's Encrypt, secure storage with Vault, and reliable hosting 
             on IBM Cloud Code Engine.
           </p>
           
           <p className="text-gray-700 leading-relaxed mb-4">
             The key insight is that each tool serves its purpose: Let's Encrypt provides trusted, browser-recognized 
             certificates; Vault excels at secure certificate storage and management; and IBM Cloud Code Engine delivers 
             reliable hosting with built-in TLS termination.
           </p>
           
           <div className="bg-green-50 border border-green-200 rounded-lg p-4">
             <p className="text-green-800 font-semibold">
               ✅ Mission Accomplished: asapalejandro.com is now live with trusted HTTPS! 
               This hybrid approach demonstrates how to combine open source and enterprise tools 
               for a robust, secure, and cost-effective TLS solution.
             </p>
           </div>
         </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link href="/blogs/building-enterprise-website-cursor-watsonx" className="text-blue-600 hover:text-blue-800">
            ← Previous: Deploy Your Next.js App to IBM Cloud Code Engine
          </Link>
          <Link href="/blogs/custom-domain-namecheap-ibm-cloud" className="text-blue-600 hover:text-blue-800">
            Next: Connect Custom Domain to IBM Cloud Code Engine →
          </Link>
        </div>
      </div>
    </div>
  );
} 