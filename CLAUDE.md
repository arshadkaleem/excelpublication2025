# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 website for Excel Publishing House, an academic journal publisher established in 2011. The site provides information about their engineering and management science journals, author guidelines, and submission processes.

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4.1.9 with custom configuration
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Fonts**: Poppins (sans-serif) and Merriweather (serif) from Google Fonts
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **CMS**: Contentful (headless CMS)

## Architecture

### Route Structure

The application uses Next.js App Router with the following pages:
- `/` - Home page with journal information and hero section
- `/about` - About Excel Publishing House
- `/author-guidelines` - Guidelines for manuscript submission
- `/publication-ethics` - Publication ethics information
- `/reviewer-guidelines` - Guidelines for reviewers
- `/journals` - Journal listings
- `/contact` - Contact information
- `/issues` - Issues listing (dynamic, pulls from Contentful)
- `/issues/[slug]` - Individual issue detail pages (dynamic)
- `/authors/[slug]` - Author profile pages (dynamic)

### Component Organization

- **Layout Components**:
  - `components/navbar.tsx` - Main navigation with mobile menu support
  - `components/footer.tsx` - Footer with contact info and links
  - `app/layout.tsx` - Root layout with font configuration and Analytics

- **UI Components**: Located in `components/ui/` - shadcn/ui components following the "new-york" style variant

- **Custom Components**:
  - `components/Author.tsx` - Author card/profile component
  - `components/BlogCard.tsx` - Blog/article card component
  - `components/IssueCard.tsx` - Issue card for displaying journal issues
  - `components/IssueList.tsx` - List container for issues

- **Utilities**: `lib/utils.ts` - Contains the `cn()` helper for merging Tailwind classes using clsx and tailwind-merge

### Contentful CMS Integration

The project uses Contentful as a headless CMS for managing dynamic content. Key integration points:

- **Contentful Client**: `lib/contentful.ts` - Creates and exports Contentful clients (regular and preview)
- **Type Definitions**: `lib/contentful-types.ts` - TypeScript types for all Contentful content models
- **Services Layer**: `services/` directory contains service functions for fetching content:
  - `author.service.ts` - Functions for fetching author data
  - `blog.service.ts` - Functions for fetching blog/article data
  - `issue.service.ts` - Functions for fetching journal issues
  - `issueList.service.ts` - Functions for fetching issue lists and related data

**Content Types**:
- `Author` - Author profiles with name, description, and slug
- `BlogPage` - Blog posts with title, body (rich text), image, and recommended posts
- `Issues` - Journal issues with title, volume, date, subtitle (rich text), and current issue flag
- `IssueList` - Individual articles within issues, linking to Issues and Authors, with PDFs

**Environment Variables Required**:
- `CONTENTFUL_SPACE_ID` - Contentful space identifier
- `CONTENTFUL_ACCESS_TOKEN` - Contentful delivery API token
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN` (optional) - For preview/draft content
- `CONTENTFUL_ENVIRONMENT` (optional, defaults to "master")

### Styling Conventions

- Uses Tailwind CSS with custom CSS variables defined in `app/globals.css`
- Component styling uses utility classes with the `cn()` helper for conditional classes
- Color scheme:
  - Primary: Blue tones (`slate-900`, `blue-900`, `blue-600`)
  - Accent: Yellow/Orange gradient (`yellow-400`, `orange-400`)
  - Background: White with slate gray variations
- Responsive design using Tailwind's breakpoints (sm, md, lg)
- Custom animations defined in `globals.css` for fade-in, scale-in, and gradient effects

### Path Aliases

The project uses TypeScript path aliases configured in `tsconfig.json`:
```typescript
"@/*" => "./*"
```

This allows imports like:
```typescript
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
```

## Important Configuration Details

### Next.js Config

- TypeScript build errors are ignored (`ignoreBuildErrors: true`)
- Image optimization is disabled (`unoptimized: true`)

### Fonts Configuration

Two Google Fonts are configured in `app/layout.tsx`:
- **Poppins**: Weights 400, 500, 600, 700 - used as the default sans-serif
- **Merriweather**: Weights 400, 700 - used for headings (font-serif class)

### Component Library

Uses shadcn/ui with the following configuration (`components.json`):
- Style: "new-york"
- RSC: enabled
- Tailwind CSS variables: enabled
- Icon library: lucide-react

## Content and Branding

### Journal Information

The site publishes journals covering:
- **Engineering**: Civil, Chemical, Mechanical, Electrical, Electronics, Computer Science, Information Technology
- **Management Science**: General Management, Finance, Marketing, Human Resource, Production

### Key Features

- Half-yearly publication schedule
- ISSN registered journal
- Peer-reviewed content
- International reach with indexing in IIFC and IJIndex

### Manuscript Guidelines

- Maximum 7 pages (A4 size)
- Single-spaced, Times New Roman, font size 12
- Abstract: max 150 words
- English language required
- Complete author details and affiliations required

## Development Notes

- All page components use `"use client"` directive
- Navigation is responsive with mobile hamburger menu
- Footer contains commented-out newsletter section code for future implementation
- Social media links in footer are placeholder (`href="#"`)
- Several pages reference routes that may not be implemented yet (e.g., `/subscription`, `/call-for-papers`, `/advertisement`, `/managing-editors`)
- Rich text content from Contentful should be rendered using `@contentful/rich-text-react-renderer`
- When working with Contentful data, always use the service layer functions rather than calling the Contentful client directly
