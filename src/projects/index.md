---
layout: projects.njk
title: Projects - AippleTree
description: Explore a collection of interesting projects showcasing web development, mobile apps, and open source contributions.

# 页面各个部分的配置
sections:
  # 英雄区配置
  hero:
    title: Our Projects
    subtitle: Discover amazing web development, mobile apps, and open source projects
    primaryButton:
      url: "#projects"
      text: View Projects
    secondaryButton:
      url: https://github.com/zhangzhibin/aippletree.com/issues/new
      text: Submit Your Project

  # 项目列表配置
  projects:
    id: "projects"
    title: All Projects
    class: "projects-grid"
    limit: 20
    viewAll: false
---

{% set hero = sections.hero %}
{% include "components/sections/hero.njk" %}

{% set submitBanner = global.components.submitBanner %}
{% include "components/ui/submit-banner.njk" %}

{% set section = sections.projects %}
{% include "components/sections/project-grid.njk" %}
