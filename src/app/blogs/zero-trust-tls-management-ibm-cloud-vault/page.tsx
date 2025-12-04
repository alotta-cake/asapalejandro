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
            Zero-Trust TLS Management with IBM Cloud Certificate Manager
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
            using IBM Cloud Certificate Manager for enterprise-grade certificate management.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We'll cover everything from initial setup to production deployment, including how IBM Cloud Certificate Manager 
            simplifies certificate lifecycle management with automatic renewal and zero-trust compliance.
          </p>
        </div>

        {/* What We Accomplished */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">✅ What We Accomplished</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">IBM Cloud Certificate Manager</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Set up Certificate Manager instance</li>
                <li>• Requested trusted public certificate</li>
                <li>• Configured DNS validation</li>
                <li>• Enabled automatic renewal</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Code Engine Integration</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Integrated Certificate Manager with Code Engine</li>
                <li>• Configured domain mapping with trusted certificates</li>
                <li>• Achieved zero-trust TLS compliance</li>
                <li>• Zero manual certificate management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Challenge */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🚨 The Production Challenge</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            When deploying asapalejandro.com to IBM Cloud Code Engine, we needed trusted TLS certificates for production use. 
            Manual certificate management with Let's Encrypt required DNS challenges, renewal scripts, and ongoing maintenance. 
            We needed an enterprise-grade solution that would handle certificate lifecycle automatically.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">The Solution: IBM Cloud Certificate Manager</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>IBM Cloud Certificate Manager provides fully managed certificate lifecycle management with automatic renewal, 
                  zero-trust compliance, and seamless integration with Code Engine - eliminating manual certificate management entirely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Production Solution */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🔧 Production TLS Solution: IBM Cloud Certificate Manager</h2>
          
          <div className="border border-blue-200 rounded-lg p-6 bg-blue-50 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Why IBM Cloud Certificate Manager?</h3>
            <ul className="text-blue-700 space-y-2 mb-4">
              <li>✅ <strong>Fully Managed:</strong> IBM handles certificate generation, validation, and renewal</li>
              <li>✅ <strong>Zero-Trust Compliance:</strong> Built-in security and compliance features</li>
              <li>✅ <strong>Automatic Renewal:</strong> No manual intervention required</li>
              <li>✅ <strong>Free Tier Available:</strong> Cost-effective for personal and small projects</li>
              <li>✅ <strong>Seamless Integration:</strong> Direct integration with Code Engine</li>
              <li>✅ <strong>Enterprise-Grade:</strong> Production-ready from day one</li>
            </ul>
          </div>
        </div>

         {/* IBM Cloud Certificate Manager Setup */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
           <h2 className="text-2xl font-semibold text-gray-900 mb-4">🚀 Setting Up IBM Cloud Certificate Manager</h2>
           
           <p className="text-gray-700 leading-relaxed mb-6">
             Setting up IBM Cloud Certificate Manager is straightforward and can be done entirely through the IBM Cloud Console 
             or via CLI. Here's the complete process:
           </p>

           <div className="bg-blue-50 p-4 rounded-lg mb-6">
             <h4 className="font-semibold text-blue-800 mb-3">Step-by-Step Setup:</h4>
             <ol className="text-blue-700 space-y-3 text-sm">
               <li>
                 <strong>1. Create Certificate Manager Instance:</strong>
                 <div className="bg-white p-2 rounded mt-1 font-mono text-xs">
                   ibmcloud resource service-instance-create asapalejandro-cert-manager certificate-manager standard us-south
                 </div>
               </li>
               <li>
                 <strong>2. Request Certificate via Web Console:</strong>
                 <ul className="ml-4 mt-1 space-y-1">
                   <li>• Go to: <a href="https://cloud.ibm.com/catalog/services/certificate-manager" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">IBM Cloud Certificate Manager</a></li>
                   <li>• Select your instance → Click "Order" → "Public Certificate"</li>
                   <li>• Enter domain: asapalejandro.com</li>
                   <li>• Choose DNS validation method</li>
                   <li>• Add DNS TXT records to Namecheap when prompted</li>
                 </ul>
               </li>
               <li>
                 <strong>3. Configure Code Engine Domain Mapping:</strong>
                 <div className="bg-white p-2 rounded mt-1 font-mono text-xs">
                   ibmcloud ce domainmapping update --domain-name asapalejandro.com --cert-manager-instance asapalejandro-cert-manager
                 </div>
               </li>
             </ol>
           </div>

           <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
             <h3 className="text-lg font-semibold text-green-800 mb-2">✅ What Happens Next</h3>
             <div className="text-sm text-green-700 space-y-2">
               <p><strong>Automatic Renewal:</strong> Certificate Manager automatically renews certificates before expiration (typically 90-day cycle)</p>
               <p><strong>Zero Downtime:</strong> Certificate updates happen seamlessly without service interruption</p>
               <p><strong>No Manual Steps:</strong> Once configured, certificate management is fully automated</p>
             </div>
           </div>
         </div>

         {/* Optional: Vault Integration for Backup */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
           <h2 className="text-2xl font-semibold text-gray-900 mb-4">🔄 Optional: Vault Integration for Backup & Audit</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            While Certificate Manager handles certificate lifecycle automatically, you can optionally use Vault 
            to store certificates for backup, audit trails, or use by other services. This is completely optional 
            since Certificate Manager handles everything automatically.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Optional Vault Backup Setup</h3>
            <div className="text-sm text-blue-700 space-y-2">
              <p><strong>Use Case:</strong> Backup certificates, audit trail, or integration with other services</p>
              <p><strong>Note:</strong> Not required - Certificate Manager handles everything automatically</p>
              <p><strong>If Needed:</strong> Export certificates from Certificate Manager and store in Vault for backup</p>
            </div>
          </div>
        </div>

        {/* Complete Workflow */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🚀 Complete Production Workflow</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-gray-800">Create Certificate Manager Instance</h3>
                <p className="text-gray-700">Set up Certificate Manager service in IBM Cloud</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-gray-800">Request Certificate</h3>
                <p className="text-gray-700">Request public certificate via web console with DNS validation</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-gray-800">Configure Code Engine</h3>
                <p className="text-gray-700">Update domain mapping to use Certificate Manager</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
              <div>
                <h3 className="font-semibold text-gray-800">Automatic Renewal</h3>
                <p className="text-gray-700">Certificate Manager automatically renews certificates - no manual steps needed</p>
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
                <li>• Trusted certificates from Certificate Manager</li>
                <li>• IBM Cloud's zero-trust infrastructure</li>
                <li>• Automatic renewal prevents expiration</li>
                <li>• Enterprise-grade security compliance</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Efficiency & Cost</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Free tier available for Certificate Manager</li>
                <li>• Zero manual certificate management</li>
                <li>• Fully automated lifecycle</li>
                <li>• Seamless IBM Cloud integration</li>
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
               <li>1. Created IBM Cloud Certificate Manager instance</li>
               <li>2. Requested trusted public certificate with DNS validation</li>
               <li>3. Configured Code Engine domain mapping with Certificate Manager</li>
               <li>4. Enabled automatic certificate renewal</li>
               <li>5. Successfully deployed HTTPS website with zero-trust TLS</li>
             </ol>
           </div>

           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
             <h3 className="text-lg font-semibold text-blue-800 mb-3">🚀 The Enterprise Approach That Works</h3>
             <p className="text-blue-700 text-sm">
               <strong>IBM Cloud Certificate Manager:</strong> Fully managed certificate lifecycle with automatic renewal<br/>
               <strong>Code Engine Integration:</strong> Seamless TLS termination and domain management<br/>
               <strong>Zero Manual Steps:</strong> Once configured, certificates renew automatically<br/>
               <strong>Result:</strong> asapalejandro.com with enterprise-grade TLS management
             </p>
           </div>
         </div>

         {/* Next Steps */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
           <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎯 Next Steps</h2>
           
           <div className="bg-green-50 border border-green-200 rounded-lg p-4">
             <h3 className="text-lg font-semibold text-green-800 mb-3">Ongoing Management</h3>
             <ol className="text-green-700 space-y-2">
               <li>1. Certificate Manager automatically renews certificates (no action needed)</li>
               <li>2. Monitor certificate status in IBM Cloud Console</li>
               <li>3. Optional: Set up Vault backup for audit trail (if needed)</li>
               <li>4. Enjoy zero-trust TLS with zero manual maintenance</li>
             </ol>
           </div>
         </div>

         {/* Conclusion */}
         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
           <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎉 Conclusion</h2>
           
           <p className="text-gray-700 leading-relaxed mb-4">
             We successfully implemented a zero-trust TLS management approach using IBM Cloud Certificate Manager, 
             providing enterprise-grade certificate lifecycle management with automatic renewal and seamless integration 
             with IBM Cloud Code Engine.
           </p>
           
           <p className="text-gray-700 leading-relaxed mb-4">
             The key advantage of Certificate Manager is its simplicity: fully managed by IBM, automatic renewal, 
             zero-trust compliance, and seamless integration with Code Engine - eliminating all manual certificate 
             management overhead.
           </p>
           
           <div className="bg-green-50 border border-green-200 rounded-lg p-4">
             <p className="text-green-800 font-semibold">
               ✅ Mission Accomplished: asapalejandro.com uses enterprise-grade TLS management! 
               Certificate Manager provides a robust, secure, and maintenance-free TLS solution that scales 
               from personal projects to enterprise deployments.
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