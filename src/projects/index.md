---
layout: projects.njk
title: Projects - AippleTree
date: 2024-03-21
description: Explore a collection of interesting projects showcasing web development, mobile apps, and open source contributions.
eleventyExcludeFromCollections: true
hero:
  title: Our Projects
  subtitle: Discover amazing web development, mobile apps, and open source projects
  primaryButton:
    url: "#projects"
    text: View Projects
  secondaryButton:
    url: https://github.com/zhangzhibin/aippletree.com/issues/new
    text: Submit Your Project
banner:
  text: Have an interesting project to share?
  button:
    url: https://github.com/zhangzhibin/aippletree.com/issues/new
    text: Submit via GitHub
projects:
  title: All Projects
  limit: 20
  viewAll: false
---

{% include "hero.njk" %}

{% include "submit-banner.njk" %}

{% set section = projects %}
{% include "project-grid.njk" %}
