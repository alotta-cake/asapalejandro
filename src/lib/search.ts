export interface SearchResult {
  title: string;
  excerpt: string;
  url: string;
  category: string;
  readTime?: string;
  date?: string;
}

export interface SearchData {
  title: string;
  content: string;
  url: string;
  category: string;
  tags: string[];
}

// Search data for all pages
export const searchData: SearchData[] = [
  {
    title: "Alejandro Palumbo - IBM Platform Engineer",
    content: "National Market Platform Engineering Focal at IBM. MS in Computer Science. 5+ years accelerating enterprise outcomes with IBM's automation and integration stack. Proven record guiding Fortune-500 & public-sector teams from legacy frameworks to cloud-native architectures. Trusted advisor on AI-driven modernization, cost-optimization, and developer experience.",
    url: "/",
    category: "Home",
    tags: ["IBM", "Platform Engineer", "Automation", "Integration", "Cloud", "AI", "Enterprise"]
  },
  {
    title: "About Me",
    content: "Hi, I'm Alejandro Palumbo. My journey in tech began as a datacenter intern, where I first experienced the power of enterprise technology. I later became a delivery consultant and solution architect, working directly with clients to solve complex integration challenges. I hold a B.A. in Economics from San Francisco State University and an M.S. in Computer Science from CSU Channel Islands. 2024 → Now Client Engineering, National Market (West) Platform Engineer. Born in Houston, Texas. I am Italian, Spanish, and Colombian. Outside of work I love to exercise, boxing, yoga, pilates, eating good food, traveling and seeing the world, and spending time with my loved ones. I love music and going to concerts. I am Christian and speak English and Spanish. Calvin and Hobbes is my favorite cartoon.",
    url: "/about",
    category: "About",
    tags: ["Alejandro Palumbo", "IBM", "Platform Engineer", "Client Engineering", "Career", "Background"]
  },
  {
    title: "My Work",
    content: "Explore my portfolio of successful IBM Client Engineering projects, pilot implementations, and thought leadership content. Recent Pilots: AI-powered process automation, Cloud Pak integration solutions, Watson x™ implementation projects, DevOps transformation initiatives. Content & Thought Leadership: Technical blog posts, Conference presentations, YouTube tutorials, LinkedIn insights.",
    url: "/my-work",
    category: "Portfolio",
    tags: ["IBM", "Client Engineering", "Pilots", "Automation", "Cloud Pak", "Watson", "DevOps", "Portfolio"]
  },
  {
    title: "Blogs",
    content: "From Idea to URL in a Day: Buying a Domain on Namecheap, Scaffolding with Cursor & Watsonx, and Deploying to IBM Cloud Code Engine. How I launched asapalejandro.com as my personal hub, demonstrating IBM's modern tooling and client-engineering mindset in a single day. The IBM Client Engineering Methodology: From Idea to Production. Exploring how IBM's Pilot Engineering Methodology accelerates time-to-value for enterprise clients. AI & Automation Pilots: Real-World Success Stories. Case studies and insights from successful AI and automation pilot implementations. Cloud Pak for Integration: Best Practices and Implementation. Deep dive into IBM Cloud Pak for Integration and how to maximize its value for your organization.",
    url: "/blogs",
    category: "Blog",
    tags: ["Blog", "IBM", "Client Engineering", "Automation", "Cloud Pak", "Watson", "Development", "Tutorials"]
  },
  {
    title: "Events",
    content: "Join me at upcoming IBM events, conferences, and workshops where I'll be sharing insights on AI & Automation, Client Engineering methodologies, and real-world pilot success stories. Stay tuned for upcoming events and speaking engagements.",
    url: "/events",
    category: "Events",
    tags: ["Events", "IBM", "Conferences", "Workshops", "Speaking", "AI", "Automation"]
  },
  {
    title: "Workshops",
    content: "Interactive workshops designed to help you understand IBM's AI & Automation capabilities and how to implement them in your organization. Available Workshops: IBM Automation Platform Overview, Pilot Engineering Methodology, Watson x™ Data & AI Portfolio, Cloud Pak Implementation Strategies.",
    url: "/workshops",
    category: "Workshops",
    tags: ["Workshops", "IBM", "Automation", "AI", "Watson", "Cloud Pak", "Training", "Education"]
  },
  {
    title: "Data & AI",
    content: "IBM Data & AI solutions including AI Assistants, AI/MLOps, Databases, Data Intelligence, Data Integration, Data Security. Watson x™ portfolio and enterprise AI capabilities.",
    url: "/data-ai",
    category: "Products",
    tags: ["Data", "AI", "Watson", "Machine Learning", "Databases", "Data Intelligence", "Data Integration", "Data Security"]
  },
  {
    title: "Automation",
    content: "IBM Automation solutions including Application Development, Application Integration, Infrastructure Automation, Network Management, Identity & Access Management, IT Automation & FinOps, Asset Lifecycle Management.",
    url: "/automation",
    category: "Products",
    tags: ["Automation", "Application Development", "Integration", "Infrastructure", "Network Management", "Identity", "FinOps", "Asset Management"]
  },
  {
    title: "Building Enterprise Website with Cursor & Watsonx",
    content: "From Idea to URL in a Day: Buying a Domain on Namecheap, Scaffolding with Cursor & Watsonx, and Deploying to IBM Cloud Code Engine. How I launched asapalejandro.com as my personal hub, demonstrating IBM's modern tooling and client-engineering mindset in a single day. This project showcases the end-to-end execution that IBM Client Engineering is known for: from initial concept to production deployment in record time. It's a perfect example of how we turn ideas into runnable solutions quickly, using the latest AI & Automation powered development tools and IBM's cloud infrastructure.",
    url: "/blogs/building-enterprise-website-cursor-watsonx",
    category: "Blog",
    tags: ["Development", "IBM", "Client Engineering", "Cursor", "Watsonx", "Cloud", "Deployment", "Tutorial"]
  }
];

export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  const results: SearchResult[] = [];
  
  for (const item of searchData) {
    const titleMatch = item.title.toLowerCase().includes(searchTerm);
    const contentMatch = item.content.toLowerCase().includes(searchTerm);
    const tagMatch = item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    
    if (titleMatch || contentMatch || tagMatch) {
      // Calculate relevance score
      let score = 0;
      if (titleMatch) score += 3;
      if (contentMatch) score += 1;
      if (tagMatch) score += 2;
      
      // Create excerpt
      const excerpt = item.content.length > 150 
        ? item.content.substring(0, 150) + "..."
        : item.content;
      
      results.push({
        title: item.title,
        excerpt,
        url: item.url,
        category: item.category,
        readTime: item.category === "Blog" ? "5 min read" : undefined,
        date: item.category === "Blog" ? "December 2024" : undefined
      });
    }
  }
  
  // Sort by relevance (title matches first, then content matches)
  return results.sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    const aExcerpt = a.excerpt.toLowerCase();
    const bExcerpt = b.excerpt.toLowerCase();
    
    const aTitleMatch = aTitle.includes(searchTerm);
    const bTitleMatch = bTitle.includes(searchTerm);
    const aExcerptMatch = aExcerpt.includes(searchTerm);
    const bExcerptMatch = bExcerpt.includes(searchTerm);
    
    if (aTitleMatch && !bTitleMatch) return -1;
    if (!aTitleMatch && bTitleMatch) return 1;
    if (aExcerptMatch && !bExcerptMatch) return -1;
    if (!aExcerptMatch && bExcerptMatch) return 1;
    
    return 0;
  });
} 