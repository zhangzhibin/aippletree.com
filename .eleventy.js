module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");

  // Add collections for blog posts and projects
  eleventyConfig.addCollection("blog", function(collection) {
    const posts = collection.getFilteredByGlob([
      "src/blog/**/*.md",
      "!src/blog/index.md"
    ]);
    console.log('Blog Posts:', posts.map(p => ({
      title: p.data.title,
      date: p.date,
      url: p.url
    })));
    return posts;
  });

  eleventyConfig.addCollection("projects", function(collection) {
    return collection.getFilteredByGlob("src/projects/**/*.md");
  });

  eleventyConfig.addCollection("featured_projects", function(collection) {
    const projects = collection.getFilteredByGlob("src/projects/**/*.md")
      .filter(item => item.data.featured);
    console.log('Featured Projects:', projects.map(p => ({
      title: p.data.title,
      featured: p.data.featured,
      url: p.url
    })));
    return projects;
  });

  // Add debug filter
  eleventyConfig.addFilter("debug", function(value) {
    // 只显示关键数据，避免循环引用
    const safeValue = {
      title: value.title,
      data: value.data ? {
        title: value.data.title,
        description: value.data.description,
        featured: value.data.featured,
        background_color: value.data.background_color,
        techStack: value.data.techStack
      } : undefined,
      url: value.url
    };
    return `<pre style="font-size: 12px; padding: 10px; background: #f5f5f5; margin: 10px 0; white-space: pre-wrap;">${JSON.stringify(safeValue, null, 2)}</pre>`;
  });

  // Add date formatting filter
  eleventyConfig.addFilter("formatDate", function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addFilter("formatISO", function(date) {
    return new Date(date).toISOString();
  });

  // Add limit filter
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  // Add markdown-it plugin for better markdown support
  const markdownIt = require("markdown-it");
  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  };

  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));

  // Handle custom slugs
  eleventyConfig.addTransform("slug", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const data = this.page.data;
      // Only modify URL if slug is provided
      if (data && data.slug) {
        this.page.url = `/${outputPath.split("/").slice(0, -1).join("/")}/${data.slug}/`;
      }
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true
  };
}; 