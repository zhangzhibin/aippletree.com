# Page Structure Documentation

This document describes the detailed structure of each page type in the AippleTree website.

## Base Layout Structure

All pages inherit from `base.njk` which provides the following structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Meta tags, title, CSS -->
  </head>
  <body>
    <div class="layout">
      <header class="layout-header">
        <!-- Navigation -->
      </header>

      <main class="layout-content">
        <div class="container">
          <div class="page-container">
            <div class="page-content">
              <!-- Page specific content -->
            </div>
          </div>
        </div>
      </main>

      <footer class="layout-footer">
        <!-- Footer content -->
      </footer>
    </div>
  </body>
</html>
```

## Blog List Page (`blog.njk`)

Structure for the blog listing page:

```html
<article class="blog-page">
  <header class="blog-header">
    <!-- Page title -->
    <!-- Submit banner (optional) -->
  </header>

  <section class="blog-grid">
    <!-- Blog cards -->
  </section>
</article>
```

### Components

1. Page Title

   - Title
   - Description
   - Optional subtitle

2. Submit Banner (Optional)

   - Banner text
   - Call-to-action button

3. Blog Grid
   - Responsive grid layout
   - Blog cards with:
     - Thumbnail
     - Title
     - Description
     - Date
     - Tags
     - Reading time
     - Author info (if available)

## Projects List Page (`projects.njk`)

Structure for the projects listing page:

```html
<article class="projects-page">
  <header class="projects-header">
    <!-- Page title -->
  </header>

  <section class="projects-grid">
    <!-- Project cards -->
  </section>
</article>
```

### Components

1. Page Title

   - Title
   - Description
   - Optional subtitle

2. Projects Grid
   - Responsive grid layout
   - Project cards with:
     - Thumbnail
     - Title
     - Description
     - Tech stack
     - Tags
     - Demo/GitHub links
     - Background color (optional)

## Blog Post Page (`post.njk`)

Structure for individual blog posts:

```html
<article class="content-article">
  <header class="content-header">
    <h1 class="content-title"><!-- Title --></h1>
    <div class="content-meta">
      <!-- Date -->
      <!-- Tags -->
    </div>
  </header>

  <div class="content-body">
    <!-- Post content -->
  </div>

  <footer class="content-footer">
    <!-- Author info -->
  </footer>
</article>
```

### Components

1. Content Header

   - Title
   - Publication date
   - Tags

2. Content Body

   - Main content
   - Headings (h2, h3)
   - Paragraphs
   - Lists
   - Code blocks
   - Images

3. Content Footer
   - Author information
   - Social links
   - Related posts (optional)

## Project Page (`project.njk`)

Structure for individual project pages:

```html
<article class="content-article">
  <header class="content-header">
    <h1 class="content-title"><!-- Title --></h1>
    <div class="content-meta">
      <!-- Date -->
      <!-- Tags -->
    </div>
  </header>

  <div class="content-body">
    <!-- Project content -->
  </div>

  <footer class="content-footer">
    <!-- Project features -->
    <!-- Tech stack -->
    <!-- Links -->
  </footer>
</article>
```

### Components

1. Content Header

   - Title
   - Publication date
   - Tags

2. Content Body

   - Project description
   - Features
   - Implementation details
   - Screenshots/demos
   - Code examples

3. Content Footer
   - Project features list
   - Technology stack
   - Demo link
   - GitHub repository link

## Responsive Design

All pages follow a mobile-first approach with the following breakpoints:

1. Mobile (< 480px)

   - Single column layout
   - Reduced font sizes
   - Simplified navigation
   - Stacked components

2. Tablet (480px - 768px)

   - Two column grid for lists
   - Adjusted spacing
   - Full navigation menu

3. Desktop (> 768px)
   - Multi-column grid for lists
   - Maximum content width
   - Full feature set

## Common Elements

1. Navigation

   - Logo
   - Main menu
   - Mobile menu toggle
   - Search (optional)

2. Footer

   - Site links
   - Social media
   - Newsletter signup
   - Copyright info

3. Background Elements
   - Cloud decorations
   - Gradient overlays
   - Pattern backgrounds
