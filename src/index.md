---
layout: base.njk
templateClass: template-home
bodyClass: page-home
seo:
  changefreq: daily
  priority: 1.0
  robots: index, follow
components:
  header: {}
  footer:
    showNewsletter: true
---

<article class="home-page">
    <header class="home-header">
        {% include "components/ui/page-title.njk" %}
    </header>

    <section class="featured-projects">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
            {% for project in collections.projects | reverse | limit(3) %}
                {% include "components/ui/project-card.njk" %}
            {% endfor %}
        </div>
    </section>

    <section class="latest-posts">
        <h2 class="section-title">Latest Posts</h2>
        <div class="blog-grid">
            {% for post in collections.blog | reverse | limit(3) %}
                {% include "components/ui/blog-card.njk" %}
            {% endfor %}
        </div>
    </section>

</article>
