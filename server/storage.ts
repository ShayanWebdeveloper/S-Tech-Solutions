import { 
  contactInquiries, 
  blogPosts,
  type ContactInquiry, 
  type InsertContactInquiry,
  type BlogPost,
  type InsertBlogPost
} from "@shared/schema";

export interface IStorage {
  // Contact Inquiries
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  getContactInquiry(id: number): Promise<ContactInquiry | undefined>;
  
  // Blog Posts
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostsByCategory(category: string): Promise<BlogPost[]>;
}

export class MemStorage implements IStorage {
  private contactInquiries: Map<number, ContactInquiry>;
  private blogPosts: Map<number, BlogPost>;
  private currentContactId: number;
  private currentBlogId: number;

  constructor() {
    this.contactInquiries = new Map();
    this.blogPosts = new Map();
    this.currentContactId = 1;
    this.currentBlogId = 1;
    
    // Initialize with some sample blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "5 Essential Digital Marketing Trends for 2024",
        content: "Digital marketing continues to evolve rapidly. Here are the key trends that will shape the industry in 2024...",
        excerpt: "Discover the top digital marketing trends that will drive success in 2024, from AI-powered personalization to voice search optimization.",
        author: "S Tech Solution Team",
        category: "Digital Marketing"
      },
      {
        title: "How to Optimize Your Google Ads for Maximum ROI",
        content: "Google Ads can be a powerful tool for driving qualified traffic to your business. Here's how to optimize your campaigns...",
        excerpt: "Learn proven strategies to maximize your Google Ads ROI with better targeting, compelling ad copy, and smart bidding.",
        author: "S Tech Solution Team",
        category: "Google Ads"
      },
      {
        title: "The Power of Social Media Management for Small Businesses",
        content: "Social media management isn't just about posting content. It's about building relationships and driving business growth...",
        excerpt: "Discover how effective social media management can transform your small business's online presence and customer engagement.",
        author: "S Tech Solution Team",
        category: "Social Media"
      }
    ];

    samplePosts.forEach(post => {
      this.createBlogPost(post);
    });
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentContactId++;
    const inquiry: ContactInquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date()
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getContactInquiry(id: number): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogId++;
    const post: BlogPost = {
      ...insertPost,
      id,
      createdAt: new Date()
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.category.toLowerCase() === category.toLowerCase())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}

export const storage = new MemStorage();
