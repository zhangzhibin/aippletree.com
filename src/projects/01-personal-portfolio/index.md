---
layout: project.njk
title: Personal Portfolio Website
date: 2024-03-21
description: A modern, responsive portfolio website built with 11ty and styled with custom CSS. Features clean design and smooth animations.
tags: ["Web Development", "11ty", "CSS"]
techStack: ["11ty", "Nunjucks", "CSS", "JavaScript"]
demoUrl: "https://aippletree.com"
githubUrl: "https://github.com/aippletree/portfolio"
permalink: "/projects/portfolio-website/"
featured: true
background_color: "#4a90e2"
---

## Overview

A modern, responsive portfolio website built with 11ty and styled with custom CSS. The site features a clean, minimalist design with smooth animations and a focus on content presentation.

## Features

- **Responsive Design**: Adapts seamlessly to all device sizes
- **Fast Performance**: Optimized for speed with minimal JavaScript
- **SEO Friendly**: Built with semantic HTML and proper meta tags
- **Easy Maintenance**: Content managed through markdown files
- **Beautiful Animations**: Subtle transitions and hover effects
- **Dark Mode Support**: Automatic theme switching based on system preferences

## Development Process

The project was developed with a focus on simplicity and performance. Here's how it was built:

1. **Setup**: Initialized with 11ty and configured for optimal build performance
2. **Structure**: Created a modular layout system using Nunjucks templates
3. **Styling**: Implemented custom CSS with CSS variables for easy theming
4. **Content**: Organized content using markdown files for easy updates
5. **Optimization**: Added image optimization and lazy loading
6. **Deployment**: Set up automated deployment through GitHub Actions

## Technical Highlights

- Used CSS Grid and Flexbox for responsive layouts
- Implemented CSS custom properties for theming
- Added smooth scroll behavior and page transitions
- Optimized images with responsive srcset
- Implemented proper meta tags for SEO

## Screenshots

<div class="project-screenshots">
    <img src="/images/projects/portfolio/home.png" alt="Portfolio Homepage" class="screenshot">
    <img src="/images/projects/portfolio/projects.png" alt="Projects Page" class="screenshot">
    <img src="/images/projects/portfolio/blog.png" alt="Blog Page" class="screenshot">
</div>

<style>
    .project-screenshots {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
    }

    .screenshot {
        width: 100%;
        height: auto;
        border-radius: var(--border-radius);
        box-shadow: 0 4px 12px var(--shadow-color);
        transition: transform 0.3s ease;
    }

    .screenshot:hover {
        transform: translateY(-4px);
    }
</style>
