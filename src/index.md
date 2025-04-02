---
layout: home.njk
title: AIppleTree - Project Showcase & Blog
description: AIppleTree is a platform for sharing interesting projects and insights about web development, software engineering, and technology. Join our community to discover amazing projects and learn from experienced developers.

# 页面各个部分的配置
sections:
  # 英雄区配置
  hero:
    title: Welcome to AIppleTree
    subtitle: Discover Amazing Projects & Insights
    primaryButton:
      url: "#featured-projects"
      text: Explore Projects
    secondaryButton:
      url: "#latest-posts"
      text: Read Articles

  # 特色项目区配置
  featured_projects:
    id: "featured-projects"
    title: Featured Projects
    class: "featured-projects"
    limit: 6
    viewAll:
      url: /projects
      text: View All Projects →

  # 最新文章区配置
  latest_posts:
    id: "latest-posts"
    title: Latest Articles
    class: "latest-posts"
    limit: 3
    viewAll:
      url: /blog
      text: View All Articles →
---

{% set hero = sections.hero %}
{% include "components/sections/hero.njk" %}

{% set submitBanner = global.components.submitBanner %}
{% include "components/ui/submit-banner.njk" %}

{% set section = sections.featured_projects %}
{% include "components/sections/project-grid.njk" %}

{% set section = sections.latest_posts %}
{% include "components/sections/blog-grid.njk" %}
