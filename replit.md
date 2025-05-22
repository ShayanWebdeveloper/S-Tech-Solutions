# S Tech Solution - Digital Marketing Agency

## Overview

This is a full-stack web application for S Tech Solution, a digital marketing agency. The application is built with React, TypeScript, and Express.js, featuring a modern landing page with contact functionality and blog posts. It uses PostgreSQL for data storage with Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Contact Inquiries**: Stores user contact form submissions with name, email, service, message, and timestamp
- **Blog Posts**: Stores blog content with title, content, excerpt, author, category, and timestamp
- **Validation**: Zod schemas for type-safe data validation

## Key Components

### Frontend Components
- **Landing Page**: Single-page application with sections for hero, services, about, portfolio, testimonials, and contact
- **Navigation**: Sticky navigation with smooth scrolling to sections
- **Contact Form**: Form with validation for user inquiries
- **Service Showcase**: Grid layout displaying digital marketing services
- **Portfolio**: Project showcase with metrics and case studies
- **Testimonials**: Customer feedback display

### Backend Services
- **Storage Layer**: Abstracted storage interface with in-memory implementation (designed for database migration)
- **API Routes**: RESTful endpoints for contact inquiries and blog posts
- **Request Logging**: Detailed logging for API requests with response times
- **Development Server**: Hot reload with Vite integration

## Data Flow

1. **User Interaction**: Users interact with the React frontend components
2. **Form Submission**: Contact forms use React Hook Form with Zod validation
3. **API Requests**: TanStack Query manages API calls to Express backend
4. **Data Processing**: Express routes validate and process incoming requests
5. **Database Operations**: Drizzle ORM handles database queries and mutations
6. **Response Handling**: Structured JSON responses with error handling
7. **UI Updates**: React Query automatically updates UI based on server responses

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Form Handling**: React Hook Form with Hookform Resolvers
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion for smooth transitions
- **Routing**: Wouter for lightweight routing

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation
- **Session Store**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Database Migrations**: Drizzle Kit for schema management
- **Code Quality**: TypeScript with strict configuration
- **Development Experience**: Replit integration with runtime error overlay

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with PostgreSQL 16
- **Development Server**: Vite dev server with Express API proxy
- **Hot Reload**: File watching with automatic reload
- **Error Handling**: Runtime error overlay for development debugging

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Static Assets**: Served directly by Express in production
- **Environment**: Autoscale deployment target with health checks

### Database Management
- **Schema**: Defined in `shared/schema.ts` with Drizzle ORM
- **Migrations**: Generated and applied using Drizzle Kit
- **Connection**: Environment-based DATABASE_URL configuration
- **Session Storage**: PostgreSQL-backed session store for scalability

### Replit Configuration
- **Modules**: Node.js, web development, and PostgreSQL support
- **Port Configuration**: Internal port 5000 mapped to external port 80
- **Workflow**: Parallel execution with automatic port detection
- **Hidden Files**: Build artifacts and dependencies excluded from editor