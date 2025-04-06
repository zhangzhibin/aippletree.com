# Project Architecture

## Overview

AippleTree is a static website built with Eleventy (11ty), focusing on showcasing projects and blog posts with AI integration capabilities.

## Technology Stack

### Core Technologies

- **Static Site Generator**: Eleventy (11ty)
- **Template Engine**: Nunjucks
- **CSS**: Custom CSS (No Tailwind)
- **JavaScript**: Vanilla JS
- **Build Tool**: npm scripts

### Development Tools

- **Version Control**: Git
- **Package Manager**: npm
- **Development Server**: Eleventy serve
- **Linting**: ESLint
- **Formatting**: Prettier

## Directory Structure

```
aippletree/
├── src/                    # Source files
│   ├── _data/             # Global data files
│   ├── _includes/         # Reusable components
│   ├── _layouts/          # Layout templates
│   ├── blog/              # Blog posts
│   ├── projects/          # Project pages
│   ├── css/               # Stylesheets
│   │   ├── main.css      # Global styles
│   │   ├── components.css # Component styles
│   │   └── layouts.css   # Layout styles
│   └── js/               # JavaScript files
├── docs/                  # Documentation
├── _site/                # Generated site
└── .eleventy.js         # Eleventy config
```

## Build Process

1. **Data Collection**

   - Load global data from `_data/`
   - Process frontmatter from content files
   - Generate collections (blog, projects)

2. **Template Processing**

   - Apply layouts from `_layouts/`
   - Include components from `_includes/`
   - Process Nunjucks templates

3. **Asset Processing**

   - Compile CSS
   - Bundle JavaScript
   - Optimize images
   - Copy static assets

4. **Site Generation**
   - Generate HTML files
   - Create sitemap
   - Generate RSS feed

## Data Flow

1. **Content Creation**

   - Markdown files with frontmatter
   - Global data files
   - Component data

2. **Data Processing**

   - Frontmatter processing
   - Collection generation
   - Filter application
   - Data transformation

3. **Template Rendering**
   - Layout application
   - Component inclusion
   - Data injection

## Component Architecture

1. **Base Components**

   - Layout templates
   - Navigation
   - Footer
   - Common UI elements

2. **Content Components**

   - Blog cards
   - Project cards
   - Author info
   - Tags

3. **UI Components**
   - Buttons
   - Cards
   - Forms
   - Modals

## CSS Architecture

1. **Global Styles**

   - Variables
   - Reset
   - Typography
   - Grid system

2. **Component Styles**

   - Modular components
   - Utility classes
   - Theme variations

3. **Layout Styles**
   - Page layouts
   - Grid systems
   - Responsive design

## JavaScript Architecture

1. **Core Functionality**

   - Navigation
   - Search
   - Theme switching
   - Animations

2. **AI Integration**
   - Content generation
   - Content review
   - Metadata handling

## Build Configuration

1. **Eleventy Config**

   - Collections
   - Filters
   - Shortcodes
   - Passthrough copy

2. **Development Tools**
   - ESLint config
   - Prettier config
   - npm scripts

## Deployment Strategy

1. **Build Process**

   - Production build
   - Asset optimization
   - Cache busting

2. **Deployment Options**
   - Static hosting
   - CDN integration
   - Cache configuration

## Performance Considerations

1. **Asset Optimization**

   - Image optimization
   - CSS minification
   - JavaScript bundling
   - Cache strategies

2. **Loading Performance**
   - Critical CSS
   - Lazy loading
   - Resource hints
   - Performance monitoring

## Security Considerations

1. **Content Security**

   - CSP headers
   - XSS prevention
   - Input sanitization

2. **Asset Security**
   - SRI hashes
   - Secure headers
   - HTTPS enforcement

## Monitoring and Maintenance

1. **Performance Monitoring**

   - Core Web Vitals
   - Error tracking
   - Analytics

2. **Maintenance Tasks**
   - Dependency updates
   - Content updates
   - Performance optimization
   - Security patches
