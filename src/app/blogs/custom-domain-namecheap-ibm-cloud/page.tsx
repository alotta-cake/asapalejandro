import React from 'react';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/blogs" className="text-blue-600 hover:text-blue-700">
          ← Back to Blog
        </Link>
      </nav>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Domain Setup
          </span>
          <span className="text-gray-500 text-sm">August 1, 2025</span>
          <span className="text-gray-500 text-sm">•</span>
          <span className="text-gray-500 text-sm">8 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Connect Your Namecheap Domain to IBM Cloud Code Engine
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Replace the long IBM Cloud URL with your own custom domain and get free SSL certificates automatically.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Now that your Next.js application is deployed on IBM Cloud Code Engine, let's give it a professional custom domain. This guide will walk you through connecting your Namecheap domain to IBM Cloud, including DNS configuration and automatic SSL certificate setup.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Prerequisites</h2>
        <ul className="space-y-2 text-lg text-gray-700 mb-8">
          <li>• A domain purchased from Namecheap</li>
          <li>• IBM Cloud Code Engine application already deployed</li>
          <li>• Access to Namecheap domain management</li>
          <li>• IBM Cloud CLI configured</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">1. Get Your Code Engine Application URL</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          First, let's get the current URL of your deployed application. This will be used for DNS configuration.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">Get Application URL:</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Get your application details
ibmcloud ce app get --name alejandro-website

# The URL will look like:
# https://alejandro-website.1yhtlxzsnvl3.us-south.codeengine.appdomain.cloud`}
          </pre>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">2. Configure Namecheap DNS Settings</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Log into your Namecheap account and navigate to your domain's DNS settings. We'll need to create a CNAME record that points your domain to the Code Engine URL.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4">Namecheap DNS Configuration:</h3>
          <ol className="space-y-3 text-gray-700">
            <li><strong>1.</strong> Log into Namecheap account</li>
            <li><strong>2.</strong> Go to "Domain List" → Select your domain</li>
            <li><strong>3.</strong> Click "Manage" → "Advanced DNS"</li>
            <li><strong>4.</strong> Add a new CNAME record:</li>
          </ol>
          <div className="mt-4 p-4 bg-white rounded border">
            <p><strong>Type:</strong> CNAME Record</p>
            <p><strong>Host:</strong> @ (or leave blank for root domain)</p>
            <p><strong>Value:</strong> alejandro-website.1yhtlxzsnvl3.us-south.codeengine.appdomain.cloud</p>
            <p><strong>TTL:</strong> Automatic</p>
          </div>
        </div>

        <div className="my-8">
          <img 
            src="/images/namecheap-dns-configuration.png" 
            alt="Namecheap Advanced DNS configuration showing CNAME records for IBM Cloud Code Engine"
            className="w-full rounded-lg shadow-lg"
            style={{ 
              width: '100%',
              height: 'auto',
              maxWidth: 'none',
              imageRendering: 'auto'
            }}
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Namecheap Advanced DNS - CNAME records pointing to IBM Cloud Code Engine</p>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">3. Alternative: Use www Subdomain</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          If you prefer to use www.yourdomain.com instead of the root domain, create a CNAME record for the www subdomain.
        </p>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">www Subdomain Setup:</h3>
          <div className="p-4 bg-white rounded border">
            <p><strong>Type:</strong> CNAME Record</p>
            <p><strong>Host:</strong> www</p>
            <p><strong>Value:</strong> alejandro-website.1yhtlxzsnvl3.us-south.codeengine.appdomain.cloud</p>
            <p><strong>TTL:</strong> Automatic</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">4. Configure Custom Domain in Code Engine</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Now we'll tell Code Engine about your custom domain. This will automatically provision an SSL certificate.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">Code Engine Domain Configuration:</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Add custom domain to your application
ibmcloud ce domain create --name yourdomain.com --app alejandro-website

# Or for www subdomain
ibmcloud ce domain create --name www.yourdomain.com --app alejandro-website

# Check domain status
ibmcloud ce domain list`}
          </pre>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">5. Verify DNS Propagation</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          DNS changes can take up to 48 hours to propagate globally, but usually happen within a few hours. You can check the status using online tools.
        </p>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">DNS Verification Commands:</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Check DNS propagation (replace with your domain)
nslookup yourdomain.com
dig yourdomain.com

# Or use online tools:
# - whatsmydns.net
# - dnschecker.org
# - mxtoolbox.com`}
          </pre>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">6. SSL Certificate Verification</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          IBM Cloud automatically provisions SSL certificates for custom domains. Let's verify the certificate is working properly.
        </p>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">SSL Certificate Check:</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Check domain status in Code Engine
ibmcloud ce domain get --name yourdomain.com

# The status should show "Ready" when everything is configured correctly`}
          </pre>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">7. Test Your Custom Domain</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Once DNS has propagated and the SSL certificate is provisioned, test your custom domain to ensure everything is working.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">Testing Checklist:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Domain resolves to your application</li>
            <li>✅ HTTPS works with valid SSL certificate</li>
            <li>✅ All pages load correctly</li>
            <li>✅ Images and assets load properly</li>
            <li>✅ Navigation works as expected</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Common Issues & Solutions</h2>
        <div className="bg-red-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">Troubleshooting:</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>DNS Not Propagated:</strong> Wait up to 48 hours, check with online DNS tools</li>
            <li><strong>SSL Certificate Pending:</strong> Ensure DNS is properly configured first</li>
            <li><strong>Domain Not Found:</strong> Verify CNAME record is correct in Namecheap</li>
            <li><strong>Mixed Content Errors:</strong> Ensure all resources use HTTPS</li>
            <li><strong>Domain Already in Use:</strong> Remove domain from other services first</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">8. Optional: Redirect www to Root Domain</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          If you want to redirect www.yourdomain.com to yourdomain.com (or vice versa), you can set up redirects in Namecheap.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">Redirect Setup in Namecheap:</h3>
          <ol className="space-y-2 text-gray-700">
            <li>Go to "Domain List" → "Manage" → "Redirect Domain"</li>
            <li>Choose redirect type (www to non-www or vice versa)</li>
            <li>Set redirect to your main domain</li>
            <li>Enable "Permanent redirect (301)" for SEO benefits</li>
          </ol>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">9. Monitor and Maintain</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Keep your domain and SSL certificate healthy with regular monitoring.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">Maintenance Tasks:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Monitor SSL certificate expiration (auto-renewed by IBM Cloud)</li>
            <li>• Check domain status periodically</li>
            <li>• Monitor application uptime</li>
            <li>• Keep Namecheap domain renewed</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Next Steps</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          With your custom domain configured, consider these enhancements:
        </p>
        <ul className="space-y-2 text-lg text-gray-700 mb-8">
          <li>• Set up email forwarding for your domain</li>
          <li>• Configure subdomains for different services</li>
          <li>• Set up monitoring and uptime alerts</li>
          <li>• Implement CI/CD pipeline for automated deployments</li>
        </ul>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg my-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Your Professional Website is Ready!</h3>
          <p className="text-lg text-gray-700 mb-6">
            You now have a professional website with a custom domain and SSL certificate, all running on IBM Cloud's reliable infrastructure.
          </p>
          <a 
            href="https://cloud.ibm.com/catalog/services/code-engine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Explore IBM Cloud Code Engine
          </a>
        </div>
      </article>

      {/* Article Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Written by Alejandro Palumbo</p>
            <p className="text-sm text-gray-500">IBM Platform Engineer</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/alejandro-palumbo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://youtube.com/@IBMAlejandro" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 