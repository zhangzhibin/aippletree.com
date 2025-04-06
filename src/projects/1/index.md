---
layout: projects.njk
pagination:
  data: collections.pagedProjects
  size: 1
  alias: paged
permalink: "/projects/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/{% else %}1/{% endif %}"
date: 2024-03-31
eleventyExcludeFromCollections: true
---
