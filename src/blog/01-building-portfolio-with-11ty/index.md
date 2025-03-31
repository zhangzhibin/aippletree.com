---
layout: post.njk
title: Building a Modern Portfolio with 11ty
date: 2024-03-21
tags: ["Web Development", "11ty", "Tutorial"]
description: Learn how to create a beautiful and performant portfolio website using 11ty, modern CSS, and best practices for static site generation.
slug: "how-to-build-portfolio-with-11ty"
---

## Introduction

In this tutorial, I'll guide you through the process of building a modern portfolio website using 11ty (Eleventy), a simple and flexible static site generator. We'll create a beautiful, responsive site with smooth animations and a focus on content presentation.

## Why 11ty?

11ty is an excellent choice for portfolio websites because:

- **Simplicity**: Easy to learn and use
- **Performance**: Generates static HTML files
- **Flexibility**: Supports multiple template languages
- **Content-First**: Great for managing content in markdown
- **Active Community**: Well-maintained with regular updates

## Getting Started

First, let's set up our project:

```bash
# Create a new directory and initialize
mkdir my-portfolio
cd my-portfolio
npm init -y

# Install 11ty and dependencies
npm install @11ty/eleventy
```

## Project Structure

Here's the recommended project structure:

```
my-portfolio/
├── src/
│   ├── _layouts/        # Template files
│   ├── _includes/       # Reusable components
│   ├── blog/           # Blog posts
│   ├── projects/       # Project pages
│   ├── images/         # Image assets
│   └── css/           # Stylesheets
├── .eleventy.js       # 11ty configuration
└── package.json
```

## Styling with Modern CSS

Let's create a clean, modern design using CSS custom properties:

```css
:root {
  --primary-color: #4a90e2;
  --secondary-color: #f39c12;
  --text-color: #2c3e50;
  --background-color: #ffffff;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --border-radius: 8px;
}

body {
  font-family: "Quicksand", sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background: var(--background-color);
}

.card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px var(--shadow-color);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
}
```

## Adding Dynamic Features

11ty provides powerful features for dynamic content:

```javascript
// .eleventy.js
module.exports = function (eleventyConfig) {
  // Add collections for blog posts and projects
  eleventyConfig.addCollection("blog", function (collection) {
    return collection.getFilteredByGlob("src/blog/**/*.md");
  });

  eleventyConfig.addCollection("projects", function (collection) {
    return collection.getFilteredByGlob("src/projects/**/*.md");
  });
};
```

## Performance Optimization

To ensure fast loading times:

1. Optimize images using responsive srcset
2. Implement lazy loading
3. Minify CSS and JavaScript
4. Use proper caching headers

## Conclusion

Building a portfolio with 11ty is a great choice for developers who want a fast, maintainable, and beautiful website. The combination of markdown content, flexible templating, and modern CSS makes it easy to create a professional portfolio that stands out.

Remember to:

- Keep your content organized
- Optimize for performance
- Maintain consistent styling
- Regular updates and maintenance

Happy coding! 🚀
