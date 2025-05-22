import { apiRequest } from "./queryClient";
import type { InsertContactInquiry, ContactInquiry, BlogPost } from "@shared/schema";

export const contactApi = {
  submit: async (inquiry: InsertContactInquiry): Promise<ContactInquiry> => {
    const response = await apiRequest("POST", "/api/contact", inquiry);
    return response.json();
  },

  getAll: async (): Promise<ContactInquiry[]> => {
    const response = await apiRequest("GET", "/api/contact");
    return response.json();
  },

  getById: async (id: number): Promise<ContactInquiry> => {
    const response = await apiRequest("GET", `/api/contact/${id}`);
    return response.json();
  },
};

export const blogApi = {
  getAll: async (category?: string): Promise<BlogPost[]> => {
    const url = category ? `/api/blog?category=${encodeURIComponent(category)}` : "/api/blog";
    const response = await apiRequest("GET", url);
    return response.json();
  },

  getById: async (id: number): Promise<BlogPost> => {
    const response = await apiRequest("GET", `/api/blog/${id}`);
    return response.json();
  },
};
