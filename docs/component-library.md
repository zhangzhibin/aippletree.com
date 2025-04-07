# Component Library

## Overview

This document describes all UI components used in the AippleTree website. Each component includes its usage, properties, and examples.

## Base Components

### 1. Page Container

Container for page content with consistent width and padding.

```html
<div class="page-container">
  <div class="page-content">
    <!-- Content -->
  </div>
</div>
```

#### Properties

- `max-width`: var(--container-width)
- `padding`: var(--container-padding)

### 2. Content Article

Base structure for blog posts and project pages.

```html
<article class="content-article">
  <header class="content-header">
    <!-- Header content -->
  </header>
  <div class="content-body">
    <!-- Main content -->
  </div>
  <footer class="content-footer">
    <!-- Footer content -->
  </footer>
</article>
```

## Content Components

### 1. Blog Card

Card component for blog post previews.

```html
<article class="blog-card">
  <div class="blog-card-image">
    <img src="{{ thumbnail }}" alt="{{ title }}" />
  </div>
  <div class="blog-card-content">
    <h3 class="blog-card-title">{{ title }}</h3>
    <p class="blog-card-description">{{ description }}</p>
    <div class="blog-card-meta">
      <time>{{ date | formatDate }}</time>
      <span class="reading-time">{{ readingTime }} min read</span>
    </div>
  </div>
</article>
```

#### Properties

- `thumbnail`: Post thumbnail image
- `title`: Post title
- `description`: Post description
- `date`: Publication date
- `readingTime`: Estimated reading time

### 2. Project Card

Card component for project previews.

```html
<article class="project-card" style="--bg-color: {{ background_color }}">
  <div class="project-card-image">
    <img src="{{ thumbnail }}" alt="{{ title }}" />
  </div>
  <div class="project-card-content">
    <h3 class="project-card-title">{{ title }}</h3>
    <p class="project-card-description">{{ description }}</p>
    <div class="project-card-tech">
      {% for tech in techStack %}
      <span class="tech-tag">{{ tech }}</span>
      {% endfor %}
    </div>
  </div>
</article>
```

#### Properties

- `thumbnail`: Project thumbnail
- `title`: Project title
- `description`: Project description
- `techStack`: Array of technologies
- `background_color`: Card background color

## UI Components

### 1. Button

Basic button component with variants.

```html
<button class="button button-primary">Primary Button</button>
<button class="button button-secondary">Secondary Button</button>
<button class="button button-outline">Outline Button</button>
```

#### Variants

- `button-primary`: Primary action
- `button-secondary`: Secondary action
- `button-outline`: Outline style

### 2. Tag

Tag component for categories and labels.

```html
<span class="tag">Tag Name</span>
```

#### Modifiers

- `tag-primary`: Primary tag
- `tag-secondary`: Secondary tag

### 3. Author Info

Component for displaying author information.

```html
<div class="author-info">
  <img
    class="author-avatar"
    src="{{ author.avatar }}"
    alt="{{ author.name }}"
  />
  <div class="author-details">
    <h4 class="author-name">{{ author.name }}</h4>
    <p class="author-bio">{{ author.bio }}</p>
  </div>
</div>
```

#### Properties

- `avatar`: Author avatar image
- `name`: Author name
- `bio`: Author biography

## Layout Components

### 1. Grid

Responsive grid system.

```html
<div class="grid">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>
```

#### Modifiers

- `grid-2`: Two columns
- `grid-3`: Three columns
- `grid-4`: Four columns

### 2. Hero Section

Hero section for landing pages.

```html
<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">{{ title }}</h1>
    <p class="hero-subtitle">{{ subtitle }}</p>
    <div class="hero-actions">
      <!-- Action buttons -->
    </div>
  </div>
</section>
```

#### Properties

- `title`: Hero title
- `subtitle`: Hero subtitle
- `background`: Background image/color

## Form Components

### 1. Input

Text input component.

```html
<div class="input-group">
  <label for="input-id">Label</label>
  <input type="text" id="input-id" class="input" placeholder="Placeholder" />
</div>
```

#### Variants

- `input-text`: Text input
- `input-email`: Email input
- `input-search`: Search input

### 2. Newsletter Form

Newsletter subscription form.

```html
<form class="newsletter-form">
  <div class="input-group">
    <input type="email" class="input" placeholder="Enter your email" />
    <button type="submit" class="button button-primary">Subscribe</button>
  </div>
</form>
```

## Navigation Components

### 1. Main Navigation

Main site navigation.

```html
<nav class="nav">
  <div class="nav-content">
    <a href="/" class="nav-logo">Logo</a>
    <div class="nav-links">
      <!-- Navigation links -->
    </div>
  </div>
</nav>
```

### 2. Mobile Menu

Mobile navigation menu.

```html
<button class="mobile-menu-toggle">
  <span class="menu-icon"></span>
</button>
<div class="mobile-menu">
  <!-- Mobile navigation links -->
</div>
```

## Utility Components

### 1. Loading Spinner

Loading indicator.

```html
<div class="spinner"></div>
```

### 2. Alert

Alert messages.

```html
<div class="alert alert-success">Success message</div>
<div class="alert alert-error">Error message</div>
```

#### Variants

- `alert-success`: Success message
- `alert-error`: Error message
- `alert-warning`: Warning message
- `alert-info`: Information message

## Best Practices

### 1. Component Usage

- Use semantic HTML
- Follow accessibility guidelines
- Maintain consistent spacing
- Use appropriate class names

### 2. Responsive Design

- Mobile-first approach
- Use appropriate breakpoints
- Test on multiple devices

### 3. Performance

- Optimize images
- Minimize CSS
- Use appropriate animations

### 4. Accessibility

- Add ARIA labels
- Ensure keyboard navigation
- Maintain color contrast
- Test with screen readers
