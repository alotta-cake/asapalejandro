# Alejandro Palumbo - IBM Client Engineering Website

A modern, enterprise-grade website showcasing IBM Client Engineering services and Alejandro Palumbo's expertise in AI & Automation. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring AI-powered development tools and IBM Cloud deployment.

## 🚀 Live Site

**Website**: [asapalejandro.com](https://asapalejandro.com)  
**Deployed on**: IBM Cloud Code Engine

## ✨ Features

### 🏠 **Homepage**
- Professional hero section with IBM Client Engineering messaging
- Personal introduction with IBM journey highlights
- Fun facts and personal background
- Social media integration (YouTube, LinkedIn, TikTok, Instagram, Twitter)

### 🧭 **Navigation**
- IBM-style header with dropdown navigation
- Product categories: Application Development, Application Integration, Infrastructure Automation, Network Management, Identity & Access Management, IT Automation & FinOps, Asset Lifecycle Management
- Home dropdown with: About, Events, Workshops, Pilots, My Work, Blogs
- Responsive design for desktop and mobile
- Search functionality (coming soon)

### 📄 **Pages & Sections**
- **About**: Detailed professional background and IBM journey
- **Events**: Upcoming speaking engagements and conferences
- **Workshops**: Available training sessions and technical workshops
- **Pilots**: Request pilot services with process overview
- **My Work**: Portfolio of projects and content
- **Blogs**: Technical articles and thought leadership content

### 📝 **Blog System**
- Featured blog post: "From Idea to URL in a Day"
- Sample posts for future content
- Newsletter signup functionality
- Professional typography and layout
- Category organization

### 🛠 **Technical Stack**
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Deployment**: IBM Cloud Code Engine
- **Development**: Cursor AI + IBM Watsonx

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AutomationAlejandro
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── about/page.tsx          # About page
│   ├── events/page.tsx         # Events page
│   ├── workshops/page.tsx      # Workshops page
│   ├── pilots/page.tsx         # Pilots page
│   ├── my-work/page.tsx        # My Work page
│   ├── blogs/
│   │   ├── page.tsx            # Blog listing
│   │   └── building-enterprise-website-cursor-watsonx/
│   │       └── page.tsx        # Featured blog post
│   ├── products/               # Product pages (auto-generated)
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/
│   └── Header.tsx              # Navigation component
└── public/
    └── avatar.png              # Profile image
```

## 🎨 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update the navigation in `src/components/Header.tsx`

### Adding Blog Posts
1. Create a new folder in `src/app/blogs/`
2. Add a `page.tsx` file with your content
3. Update the blog listing in `src/app/blogs/page.tsx`

### Styling
- Uses Tailwind CSS for styling
- Custom styles in `src/app/globals.css`
- Responsive design with mobile-first approach

## 🚀 Deployment

### IBM Cloud Code Engine
This site is deployed on IBM Cloud Code Engine for enterprise-grade reliability and scalability.

### Deployment Commands
```bash
# Build and push to IBM Container Registry
docker build -t us.icr.io/your-namespace/asapalejandro .
docker push us.icr.io/your-namespace/asapalejandro

# Deploy to IBM Cloud Code Engine
ibmcloud ce app create --name asapalejandro \
  --image us.icr.io/your-namespace/asapalejandro \
  --port 3000 \
  --env NODE_ENV=production

# Bind custom domain
ibmcloud ce domain create --name asapalejandro.com
```

## 🔧 Development Notes

### Key Technologies Used
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Cursor AI**: AI-powered code editor
- **IBM Watsonx**: Enterprise AI platform
- **IBM Cloud Code Engine**: Containerized deployment

### Common Issues & Solutions
- **Hydration errors**: Resolved with client-side checks
- **Tailwind configuration**: Using stable v3 with proper PostCSS setup
- **Font Awesome**: CDN integration for icons
- **use client directive**: Required for components with React hooks

## 📈 Future Enhancements

### Planned Features
- [ ] Contentlayer MDX blog integration
- [ ] CI/CD pipeline with GitHub Actions
- [ ] Analytics with IBM Instana
- [ ] Search functionality with Watsonx
- [ ] Advanced blog features
- [ ] Contact forms and lead capture

### Content Roadmap
- [ ] IBM Client Engineering methodology deep-dive
- [ ] AI & Automation pilot case studies
- [ ] Cloud Pak implementation guides
- [ ] Technical tutorials and best practices

## 👨‍💻 About the Developer

**Alejandro Palumbo**  
IBM Platform Engineer National Market Focal  
U.S. West Region

### Connect
- **LinkedIn**: [alejandro-palumbo](https://www.linkedin.com/in/alejandro-palumbo/)
- **YouTube**: [@IBMAlejandro](https://youtube.com/@IBMAlejandro)
- **TikTok**: [@asapalejandro](https://tiktok.com/@asapalejandro)
- **Instagram**: [@asapalejandro](https://instagram.com/asapalejandro)
- **Twitter**: [@925alejandro](https://x.com/925alejandro)

## 📄 License

This project is part of IBM Client Engineering initiatives and showcases enterprise-grade development practices.

---

**Built with ❤️ using IBM technologies and AI-powered development tools**
