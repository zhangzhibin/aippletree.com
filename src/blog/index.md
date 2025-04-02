---
layout: blog.njk
title: Blog - AippleTree
description: Read our latest articles about web development, software engineering, and technology. Learn from experienced developers and stay updated with the latest trends.

# 页面各个部分的配置
sections:
  # 英雄区配置
  hero:
    title: Our Blog
    subtitle: Insights, tutorials, and stories from the development community
    primaryButton:
      url: "#latest-posts"
      text: Read Articles
    secondaryButton:
      url: https://github.com/zhangzhibin/aippletree.com/issues/new
      text: Submit Article

  # 文章列表配置
  posts:
    id: "latest-posts"
    title: Latest Articles
    class: "blog-grid"
    limit: 12
    viewAll: false
---

{% include "components/sections/hero.njk" with sections.hero %}

{% include "components/ui/submit-banner.njk" with global.components.submitBanner %}

{% set section = sections.posts %}
{% include "components/sections/blog-grid.njk" %}
