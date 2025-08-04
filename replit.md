# Overview

This is a portfolio website for Abhishek Rohit, a Java Backend Developer at Tata Consultancy Services. The application showcases his Java backend development expertise, technical skills, projects, achievements, and educational background through a modern, responsive web interface. The portfolio emphasizes his specialization in Java backend development, Spring Boot, microservices, and enterprise systems, targeting Software Developer and SDE roles rather than full-stack positions.

# User Preferences

Preferred communication style: Simple, everyday language.
Career focus: Java backend development, Software Developer/SDE roles (avoid full-stack positioning).
Portfolio emphasis: Backend systems, microservices, enterprise Java development.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with a single portfolio page and 404 fallback
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI components
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Modular component design with separate sections (Hero, About, Experience, Projects, Skills, Achievements, Education, Contact)

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Architecture Pattern**: RESTful API design with `/api` prefix for all backend routes
- **Development Setup**: Hot reload with Vite integration in development mode
- **Storage Interface**: Abstracted storage layer with in-memory implementation and PostgreSQL schema definitions

## Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL connection
- **Current Implementation**: In-memory storage for development with PostgreSQL schema ready for production
- **Schema Design**: User-focused with username/password authentication structure

## Authentication and Authorization
- **Current State**: Basic user schema defined with username and password fields
- **Database Setup**: PostgreSQL users table with UUID primary keys and unique username constraints
- **Session Management**: Infrastructure prepared with connect-pg-simple for PostgreSQL session storage
- **Security**: Foundation laid for JWT-based authentication and role-based access control

## Build and Deployment
- **Development**: TypeScript compilation with tsx for server-side execution
- **Production Build**: Vite builds client assets, esbuild bundles server code for Node.js deployment
- **Asset Management**: Static file serving with Vite in development, Express static serving in production
- **Environment**: Configured for both local development and cloud deployment (Replit-optimized)

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Backend**: Express.js, Node.js HTTP server
- **TypeScript**: Full-stack TypeScript support with strict configuration

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Modern icon library for UI elements
- **PostCSS**: CSS processing with Autoprefixer

## Database and ORM
- **Drizzle ORM**: Type-safe PostgreSQL ORM with schema-first approach
- **Neon Database**: Serverless PostgreSQL hosting service
- **Drizzle Kit**: Database migration and schema management tools
- **Zod Integration**: Runtime type validation with drizzle-zod

## Development Tools
- **Vite**: Fast build tool with React plugin and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **TanStack React Query**: Server state management and caching
- **Date-fns**: Modern date utility library

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for validation libraries
- **Class Variance Authority**: Utility for component variant management

## Session and Authentication Infrastructure
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **Crypto**: Node.js built-in module for UUID generation and security functions

## Development Environment
- **Replit Integration**: Custom plugins for Replit development environment
- **Runtime Error Handling**: Development error overlay for better debugging experience
- **Font Integration**: Google Fonts (Inter) and Font Awesome icons