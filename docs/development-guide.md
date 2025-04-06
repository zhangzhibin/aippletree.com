# Development Guide

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/zhangzhibin/aippletree.git
   cd aippletree
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

## Development Workflow

### 1. Branch Management

- `main`: Production branch
- `develop`: Development branch
- Feature branches: `feature/feature-name`
- Bug fixes: `fix/bug-name`
- Documentation: `docs/doc-name`

### 2. Code Style

#### HTML/Nunjucks

```html
<!-- Good -->
{%- if condition -%}
<div class="component">{{ content | safe }}</div>
{%- endif -%}

<!-- Bad -->
{% if condition %}
<div class="component">{{content}}</div>
{% endif %}
```

#### CSS

```css
/* Good */
.component {
  /* Properties */
}

.component-child {
  /* Properties */
}

/* Bad */
.component {
  property: value;
}
.component .child {
  property: value;
}
```

#### JavaScript

```javascript
// Good
function handleClick() {
  // Implementation
}

// Bad
function handleClick() {}
```

### 3. File Organization

#### Content Files

- Blog posts: `src/blog/[slug]/index.md`
- Projects: `src/projects/[slug]/index.md`
- Pages: `src/[slug]/index.md`

#### Components

- Layouts: `src/_layouts/`
- Includes: `src/_includes/`
- UI Components: `src/_includes/components/ui/`

#### Styles

- Global: `src/css/main.css`
- Components: `src/css/components.css`
- Layouts: `src/css/layouts.css`

### 4. Development Process

1. **Create Feature Branch**

   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make Changes**

   - Follow code style guidelines
   - Write tests if applicable
   - Update documentation

3. **Commit Changes**

   ```bash
   git add .
   git commit -m "feat: description of changes"
   ```

4. **Push Changes**

   ```bash
   git push origin feature/your-feature
   ```

5. **Create Pull Request**
   - Link related issues
   - Provide clear description
   - Request reviews

### 5. Testing

#### Content Testing

- Validate frontmatter
- Check markdown syntax
- Verify links
- Test images

#### Component Testing

- Visual testing
- Responsive testing
- Accessibility testing

### 6. Building

#### Development Build

```bash
npm run dev
```

#### Production Build

```bash
npm run build
```

#### Preview Build

```bash
npm run preview
```

## Common Tasks

### 1. Creating New Blog Post

```bash
npm run new:post "Post Title"
```

### 2. Creating New Project

```bash
npm run new:project "Project Title"
```

### 3. Adding New Component

1. Create component file in `src/_includes/components/ui/`
2. Add component styles in `src/css/components.css`
3. Update component documentation

### 4. Updating Dependencies

```bash
npm update
npm audit fix
```

## Troubleshooting

### Common Issues

1. **Build Errors**

   - Check frontmatter syntax
   - Verify template syntax
   - Clear build cache

2. **Style Issues**

   - Check CSS specificity
   - Verify class names
   - Inspect responsive breakpoints

3. **Content Issues**
   - Validate markdown
   - Check image paths
   - Verify frontmatter

### Debug Tools

1. **Browser DevTools**

   - Elements inspector
   - Console
   - Network tab
   - Performance tab

2. **Eleventy Debug**
   ```bash
   DEBUG=Eleventy* npm run dev
   ```

## Best Practices

### 1. Performance

- Optimize images
- Minimize CSS/JS
- Use lazy loading
- Implement caching

### 2. Accessibility

- Use semantic HTML
- Add ARIA labels
- Ensure keyboard navigation
- Test with screen readers

### 3. SEO

- Use proper heading structure
- Add meta descriptions
- Optimize images
- Create sitemap

### 4. Security

- Sanitize user input
- Use HTTPS
- Implement CSP
- Regular security audits

## Resources

### Documentation

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Markdown Guide](https://www.markdownguide.org/)

### Tools

- [VS Code Extensions](/.vscode/extensions.json)
- [GitHub Actions](/.github/workflows/)
- [npm Scripts](/package.json)
