---
layout: base.njk
title: AIppleTree - Project Showcase & Blog
date: 2024-03-21
changefreq: daily
priority: 1.0
hero:
  title: Welcome to AIppleTree
  subtitle: Discover Amazing Projects & Insights
  primaryButton:
    url: "#projects"
    text: Explore Projects
  secondaryButton:
    url: "#articles"
    text: Read Articles
banner:
  text: Have an interesting project or article to share?
  button:
    url: https://github.com/zhangzhibin/aippletree.com/issues/new
    text: Submit via GitHub
projects:
  title: Featured Projects
  limit: 6
  viewAll:
    url: /projects
    text: View All Projects →
articles:
  title: Latest Articles
  limit: 6
  viewAll:
    url: /blog
    text: View All Articles →
about:
  title: About AIppleTree
  content: AIppleTree is a platform for sharing interesting projects and insights about web development, software engineering, and technology. Join our community to discover amazing projects and learn from experienced developers.
---

{% include "hero.njk" %}

{% include "submit-banner.njk" %}

{% set section = projects %}
{% include "project-grid.njk" %}

{% set section = articles %}
{% include "blog-grid.njk" %}

{% set section = about %}
{% include "about-section.njk" %}
