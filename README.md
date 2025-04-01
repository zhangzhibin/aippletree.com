# AippleTree Portfolio Website

A modern, responsive portfolio website built with 11ty (Eleventy) and styled with custom CSS. The site features a clean, minimalist design with smooth animations and a focus on content presentation.

## Features

- 🎨 **Modern Design**: Clean and minimalist interface with Ghibli-style decorative elements
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Optimized for speed with minimal JavaScript
- 🔍 **SEO Friendly**: Built with semantic HTML and proper meta tags
- 📝 **Easy Content Management**: Content managed through markdown files
- 🌙 **Dark Mode Support**: Automatic theme switching based on system preferences
- 🎭 **Beautiful Animations**: Subtle transitions and hover effects
- 📊 **Project Showcase**: Dedicated sections for projects and blog posts

## Tech Stack

- **Static Site Generator**: 11ty (Eleventy)
- **Template Engine**: Nunjucks
- **Styling**: Custom CSS with CSS Variables
- **Markdown Support**: markdown-it
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zhangzhibin/aippletree.com.git
   cd aippletree.com
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
aippletree.com/
├── src/
│   ├── _layouts/        # Template files
│   ├── _includes/       # Reusable components
│   ├── _data/          # Global data files
│   ├── blog/           # Blog posts
│   ├── projects/       # Project pages
│   ├── images/         # Image assets
│   └── css/           # Stylesheets
├── docs/              # Documentation
├── .eleventy.js       # 11ty configuration
└── package.json
```

## Content Management

For detailed information about content structure and frontmatter properties, please refer to the [Data Models Documentation](docs/data-models.md).

### Quick Start

1. **Blog Posts**: Create a new directory in `src/blog/[slug]/` and add an `index.md` file
2. **Projects**: Create a new directory in `src/projects/[slug]/` and add an `index.md` file
3. **Pages**: Add new `.md` files directly in the `src/` directory

## Customization

### Colors and Theme

The site uses CSS custom properties for theming. You can modify the colors in `src/css/main.css`:

```css
:root {
  --primary-color: #4a90e2;
  --secondary-color: #f39c12;
  --text-color: #2c3e50;
  --background-color: #ffffff;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --border-radius: 8px;
}
```

### Layouts

The site includes several layouts:

- `base.njk`: Base layout with common elements
- `post.njk`: Layout for blog posts
- `project.njk`: Layout for project pages
- `page.njk`: Layout for standard pages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Website: [aippletree.com](https://aippletree.com)
- Email: hello@aippletree.com
- GitHub: [@zhangzhibin](https://github.com/zhangzhibin)
