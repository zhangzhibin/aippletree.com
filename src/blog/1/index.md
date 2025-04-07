---
layout: blog.njk
pagination:
  data: collections.pagedBlog
  size: 1
  alias: paged
permalink: "/blog/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/{% else %}1/{% endif %}"
date: 2024-03-31
eleventyExcludeFromCollections: true
---
