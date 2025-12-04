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
    title: "Blogs",
    content: "From Idea to URL in a Day: Buying a Domain on Namecheap, Scaffolding with Cursor & Watsonx, and Deploying to IBM Cloud Code Engine. How I launched asapalejandro.com as my personal hub, demonstrating IBM's modern tooling and client-engineering mindset in a single day. The IBM Client Engineering Methodology: From Idea to Production. Exploring how IBM's Pilot Engineering Methodology accelerates time-to-value for enterprise clients. AI & Automation Pilots: Real-World Success Stories. Case studies and insights from successful AI and automation pilot implementations. Cloud Pak for Integration: Best Practices and Implementation. Deep dive into IBM Cloud Pak for Integration and how to maximize its value for your organization.",
    url: "/blogs",
    category: "Blog",
    tags: ["Blog", "IBM", "Client Engineering", "Automation", "Cloud Pak", "Watson", "Development", "Tutorials"]
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