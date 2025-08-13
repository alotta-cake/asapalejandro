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
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Tutorial
          </span>
          <span className="text-gray-500 text-sm">July 31, 2025</span>
          <span className="text-gray-500 text-sm">•</span>
          <span className="text-gray-500 text-sm">5 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Deploy Your Next.js App to IBM Cloud Code Engine: A Complete Guide
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Step-by-step guide to deploying containerized applications on IBM Cloud's serverless platform using the free tier.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          IBM Cloud Code Engine is a powerful serverless platform that makes deploying containerized applications simple and cost-effective. In this guide, I'll walk you through deploying a Next.js application using IBM Cloud's free tier, from account setup to production deployment.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Prerequisites</h2>
        <ul className="space-y-2 text-lg text-gray-700 mb-8">
          <li>• A Next.js application ready for deployment</li>
          <li>• IBM Cloud account (free tier available)</li>
          <li>• IBM Cloud CLI installed</li>
          <li>• Container tool (Docker or Podman)</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">1. Set Up IBM Cloud Account</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Start by creating your IBM Cloud account. The free tier includes generous resources for development and small applications.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4">Free Tier Benefits:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• $200 in cloud credits for 30 days</li>
            <li>• Always-free services (40+ products)</li>
            <li>• No credit card required for basic tier</li>
            <li>• Code Engine: 0.25 CPU, 500MB RAM per app</li>
          </ul>
        </div>

         <div className="my-8">
           <img 
             src="/images/ibm-cloud-free-tier.png" 
             alt="IBM Cloud Free Tier landing page"
             className="w-full rounded-lg shadow-lg"
             style={{ 
               width: '100%',
               height: 'auto',
               maxWidth: 'none',
               imageRendering: 'auto'
             }}
           />
           <p className="text-sm text-gray-500 mt-2 text-center">IBM Cloud Free Tier - Start with $200 in credits</p>
         </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <strong>Note:</strong> While the free tier is generous, you'll need to add a credit card for verification. You won't be charged for free tier usage, but it's required for account verification and potential scaling.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">2. Install and Configure IBM Cloud CLI</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Download and install the IBM Cloud CLI from the official website, then authenticate with your account.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">CLI Setup Commands:</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Login to IBM Cloud
ibmcloud login

# Set target region and resource group
ibmcloud target -r us-south
ibmcloud target -g Default

# Install Code Engine plugin
ibmcloud plugin install code-engine`}
          </pre>
        </div>

         <div className="my-8">
           <img 
             src="/images/ibm-cloud-dashboard.png" 
             alt="IBM Cloud Dashboard"
             className="w-full rounded-lg shadow-lg"
             style={{ 
               width: '100%',
               height: 'auto',
               maxWidth: 'none',
               imageRendering: 'auto'
             }}
           />
           <p className="text-sm text-gray-500 mt-2 text-center">IBM Cloud Dashboard - Your central hub for all services</p>
         </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">3. Containerize Your Application</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Create a Dockerfile for your Next.js application. Here's an optimized multi-stage build:
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">Dockerfile for Next.js:</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`FROM node:18-alpine AS base
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
RUN mkdir .next && chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]`}
          </pre>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">4. Set Up IBM Container Registry</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          IBM Container Registry provides secure, private storage for your container images with seamless integration to Code Engine.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">Registry Setup:</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Install container registry plugin
ibmcloud plugin install container-registry

# Login to registry
ibmcloud cr login

# Create namespace
ibmcloud cr namespace-add my-app

# Build and push image
podman build -t us.icr.io/my-namespace/my-app:latest .
podman push us.icr.io/my-namespace/my-app:latest`}
          </pre>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">5. Deploy to Code Engine</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Create a Code Engine project and deploy your application with proper authentication.
        </p>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">Deployment Commands:</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Create Code Engine project
ibmcloud ce project create --name my-app-project

# Create service ID for registry access
ibmcloud iam service-id-create my-app-ce

# Grant registry access
ibmcloud iam service-policy-create my-app-ce \\
  --roles Reader --service-name container-registry

# Create API key
ibmcloud iam service-api-key-create my-app-ce-key my-app-ce

# Create registry secret
ibmcloud ce registry create --name my-registry \\
  --server us.icr.io --username iamapikey \\
  --password [YOUR_API_KEY]

# Deploy application
ibmcloud ce app create --name my-app \\
  --image us.icr.io/my-namespace/my-app:latest \\
  --registry-secret my-registry \\
  --cpu 0.25 --memory 0.5G --port 3000`}
          </pre>
        </div>

         <div className="my-8">
           <img 
             src="/images/ibm-cloud-resources.png" 
             alt="IBM Cloud Resource List showing deployed containers"
             className="w-full rounded-lg shadow-lg"
             style={{ 
               width: '100%',
               height: 'auto',
               maxWidth: 'none',
               imageRendering: 'auto'
             }}
           />
           <p className="text-sm text-gray-500 mt-2 text-center">Resource List - View your deployed containers and applications</p>
         </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">6. Access Your Application</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Once deployed, your application will be available at a Code Engine URL. You can also configure custom domains.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">Check Deployment Status:</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Get application details
ibmcloud ce app get --name my-app

# View application logs
ibmcloud ce app logs --name my-app

# Update application
ibmcloud ce app update --name my-app \\
  --image us.icr.io/my-namespace/my-app:latest`}
          </pre>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Common Issues & Solutions</h2>
        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">Troubleshooting:</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Build Failures:</strong> Ensure all dependencies are included in your Dockerfile</li>
            <li><strong>Registry Authentication:</strong> Verify API keys and service account permissions</li>
            <li><strong>Resource Limits:</strong> Stay within free tier limits (0.25 CPU, 500MB RAM)</li>
            <li><strong>Port Configuration:</strong> Ensure your app listens on the correct port (3000)</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Scaling and Monitoring</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Code Engine automatically scales your application based on traffic. Monitor usage through the IBM Cloud dashboard and set up alerts for when you approach free tier limits.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-bold mb-4">Free Tier Limits:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• CPU: 0.25 cores per app instance</li>
            <li>• Memory: 500MB per app instance</li>
            <li>• Scaling: 0-10 instances per app</li>
            <li>• Storage: 400MB ephemeral storage</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Next Steps</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          With your application deployed, consider these enhancements:
        </p>
        <ul className="space-y-2 text-lg text-gray-700 mb-8">
          <li>• Set up custom domain with SSL certificate</li>
          <li>• Configure CI/CD pipeline with GitHub Actions</li>
          <li>• Add monitoring and alerting</li>
          <li>• Implement blue-green deployments</li>
        </ul>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg my-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Deploy?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Start with IBM Cloud's free tier and scale as your application grows.
          </p>
          <a 
            href="https://cloud.ibm.com/registration" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Started with IBM Cloud
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