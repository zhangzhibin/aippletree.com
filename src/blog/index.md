---
layout: base.njk
title: Blog - AippleTree
date: 2024-03-21
---

## Latest Posts

Here are my latest blog posts about web development, mobile development, and design.

{% for post in collections.blog | reverse %}

### [{{ post.data.title }}]({{ post.url }})

{{ post.data.date | dateFormat }}

{% if post.data.description %}
{{ post.data.description }}
{% endif %}

{% endfor %}

## Categories

### Web Development

- Building Modern Web Applications
- Frontend Frameworks
- Backend Development
- Performance Optimization

### Mobile Development

- iOS Development
- Android Development
- Cross-platform Solutions
- Mobile UI/UX

### Design

- UI/UX Principles
- Design Systems
- Accessibility
- Visual Design

### Tutorials

- Step-by-step Guides
- Best Practices
- Tips and Tricks
- Code Examples

## Archive

### Recent Posts

{% for post in collections.blog | reverse %}

- [{{ post.data.title }}]({{ post.url }}) ({{ post.data.date | dateFormat }})
  {% endfor %}
