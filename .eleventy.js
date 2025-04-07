module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");

  // Add default values filter
  eleventyConfig.addFilter("defaultTechStack", function(techStack) {
    return techStack || ["Not specified"];
  });

  eleventyConfig.addFilter("defaultThumbnail", function(thumbnail, type = "project") {
    if (thumbnail) return thumbnail;
    
    const width = 800;
    const height = 450;
    const bgColor = type === "project" ? "4A90E2" : "50E3C2";
    const textColor = "FFFFFF";
    
    return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}`;
  });

  // Add collections for blog posts and projects
  eleventyConfig.addCollection("blog", function(collection) {
    const posts = collection.getFilteredByGlob("src/blog/**/*.md");
    return posts.sort((a, b) => b.date - a.date); // Sort by date, newest first
  });

  // Configure pagination for blog
  eleventyConfig.addCollection("pagedBlog", function(collection) {
    const posts = collection.getFilteredByGlob("src/blog/**/*.md")
      .filter(post => !post.data.eleventyExcludeFromCollections)
      .sort((a, b) => b.date - a.date);
    
    const postsPerPage = 9; // Number of posts per page
    const totalPages = Math.ceil(posts.length / postsPerPage);
    
    console.log(`[Pagination] Total posts: ${posts.length}, Pages needed: ${totalPages}`);
    
    // Create array of page data first
    const pages = Array.from({ length: totalPages }, (_, i) => {
      const start = i * postsPerPage;
      const end = start + postsPerPage;
      const pageNumber = i + 1; // 从 1 开始
      
      // 验证页码是否有效
      if (pageNumber > totalPages) {
        console.log(`[Pagination] Skip invalid page ${pageNumber} > ${totalPages}`);
        return null;
      }
      
      const pageContent = posts.slice(start, end);
      console.log(`[Pagination] Page ${pageNumber}: ${pageContent.length} posts`);
      
      return {
        posts: pageContent,
        pageNumber: pageNumber,
        totalPages: totalPages,
        href: {
          next: pageNumber < totalPages ? `/blog/${pageNumber + 1}/` : null,
          previous: pageNumber > 1 ? `/blog/${pageNumber - 1}/` : '/blog/',
        },
        hrefs: Array.from({ length: totalPages }, (_, j) => `/blog/${j + 1}/`),
      };
    }).filter(page => page !== null); // 过滤掉无效的页面

    return pages;
  });

  eleventyConfig.addCollection("projects", function(collection) {
    return collection.getFilteredByGlob("src/projects/**/*.md")
      .sort((a, b) => b.date - a.date); // Sort by date, newest first
  });

  eleventyConfig.addCollection("featuredProjects", function(collection) {
    return collection.getFilteredByGlob("src/projects/**/*.md")
      .filter(item => item.data.featured === true)
      .sort((a, b) => b.date - a.date);
  });

  // Add collection for blog categories
  eleventyConfig.addCollection("categories", function(collection) {
    const categories = new Set();
    const posts = collection.getFilteredByGlob("src/blog/**/*.md");
    
    posts.forEach(post => {
      if (post.data.categories) {
        post.data.categories.forEach(category => {
          categories.add(category);
        });
      }
    });
    
    return Array.from(categories).sort();
  });

  // Add collection for project categories
  eleventyConfig.addCollection("projectCategories", function(collection) {
    const categories = new Set();
    const projects = collection.getFilteredByGlob("src/projects/**/*.md");
    
    projects.forEach(project => {
      if (project.data.category) {
        categories.add(project.data.category);
      }
    });
    
    return Array.from(categories).sort();
  });

  // Add collection for technologies
  eleventyConfig.addCollection("technologies", function(collection) {
    const technologies = new Set();
    const projects = collection.getFilteredByGlob("src/projects/**/*.md");
    
    projects.forEach(project => {
      if (project.data.techStack) {
        project.data.techStack.forEach(tech => {
          technologies.add(tech);
        });
      }
    });
    
    return Array.from(technologies).sort();
  });

  // Add collection for related posts
  eleventyConfig.addCollection("relatedPosts", function(collection) {
    const posts = collection.getFilteredByGlob("src/blog/**/*.md");
    return posts.slice(0, 3); // Return first 3 posts as related
  });

  // Add collection for related projects
  eleventyConfig.addCollection("relatedProjects", function(collection) {
    const projects = collection.getFilteredByGlob("src/projects/**/*.md");
    return projects.slice(0, 3); // Return first 3 projects as related
  });

  // Add date formatting filters
  eleventyConfig.addFilter("dateToISO", function(date) {
    return new Date(date).toISOString().split('T')[0];
  });

  eleventyConfig.addFilter("date", function(date, format) {
    const d = new Date(date);
    const months = ["January", "February", "March", "April", "May", "June", 
                   "July", "August", "September", "October", "November", "December"];
    
    format = format.replace("%B", months[d.getMonth()]);
    format = format.replace("%d", d.getDate());
    format = format.replace("%Y", d.getFullYear());
    
    return format;
  });

  eleventyConfig.addFilter("formatDate", function(date, format) {
    const d = new Date(date);
    
    if (format === "iso") {
      return d.toISOString();
    } else if (format === "year") {
      return d.getFullYear().toString();
    } else if (format === "month") {
      return d.toLocaleString('en-US', { month: 'long' });
    } else if (format === "day") {
      return d.getDate().toString();
    } else {
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  });

  // Add limit filter
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  // Add filter to find items by property
  eleventyConfig.addFilter("find", function(array, key, value) {
    return array.find(item => item.data[key] === value);
  });

  // Add filter to join arrays
  eleventyConfig.addFilter("join", function(array, separator) {
    return array.join(separator || ', ');
  });

  // Add absoluteUrl filter
  eleventyConfig.addFilter("absoluteUrl", function(url) {
    const baseUrl = "https://aippletree.com"; // 替换为你的实际网站URL
    return url ? `${baseUrl}${url}` : baseUrl;
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

  // Configure pagination for projects
  eleventyConfig.addCollection("pagedProjects", function(collection) {
    const projects = collection.getFilteredByGlob("src/projects/**/*.md")
      .filter(project => !project.data.eleventyExcludeFromCollections)
      .sort((a, b) => b.date - a.date);
    
    const projectsPerPage = 9;
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    
    console.log(`[Pagination] Total projects: ${projects.length}, Pages needed: ${totalPages}`);
    
    const pages = Array.from({ length: totalPages }, (_, i) => {
      const start = i * projectsPerPage;
      const end = start + projectsPerPage;
      const pageNumber = i + 1; // 从 1 开始
      
      // 验证页码是否有效
      if (pageNumber > totalPages) {
        console.log(`[Pagination] Skip invalid page ${pageNumber} > ${totalPages}`);
        return null;
      }
      
      const pageContent = projects.slice(start, end);
      console.log(`[Pagination] Page ${pageNumber}: ${pageContent.length} projects`);
      
      return {
        projects: pageContent,
        pageNumber: pageNumber,
        totalPages: totalPages,
        href: {
          next: pageNumber < totalPages ? `/projects/${pageNumber + 1}/` : null,
          previous: pageNumber > 1 ? `/projects/${pageNumber - 1}/` : '/projects/',
        },
        hrefs: Array.from({ length: totalPages }, (_, j) => `/projects/${j + 1}/`),
      };
    }).filter(page => page !== null); // 过滤掉无效的页面

    return pages;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}; 