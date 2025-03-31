---
layout: base.njk
title: AippleTree - Project Showcase & Blog
date: 2024-03-21
changefreq: daily
priority: 1.0
---

<section class="hero">
    <div class="container">
        <h1 class="hero-title">Welcome to AippleTree</h1>
        <p class="hero-subtitle">Discover Amazing Projects & Insights</p>
        <div class="hero-actions">
            <a href="#projects" class="hero-button">Explore Projects</a>
            <a href="#articles" class="hero-button secondary">Read Articles</a>
        </div>
    </div>
</section>

<section class="submit-banner">
    <div class="container">
        <p>Have an interesting project or article to share?</p>
        <a href="https://github.com/yourusername/aippletree" class="submit-button" target="_blank">
            <span class="github-icon">{% include "icons/github.svg" %}</span>
            Submit via GitHub
        </a>
    </div>
</section>

<section id="projects" class="section">
    <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="project-grid">
            {% for project in collections.featured_projects | reverse | limit(6) %}
            {% include "project-card.njk" %}
            {% endfor %}
        </div>
        <div class="section-footer">
            <a href="/projects" class="view-all">View All Projects →</a>
        </div>
    </div>
</section>

<section id="articles" class="section">
    <div class="container">
        <h2 class="section-title">Latest Articles</h2>
        <div class="blog-grid">
            {% for post in collections.posts | reverse | limit(6) %}
            {% include "blog-card.njk" %}
            {% endfor %}
        </div>
        <div class="section-footer">
            <a href="/blog" class="view-all">View All Articles →</a>
        </div>
    </div>
</section>

<section class="about-section">
    <div class="container">
        <h2 class="section-title">About AippleTree</h2>
        <div class="about-content">
            <p>AippleTree is a platform for sharing interesting projects and insights about web development, software engineering, and technology. Join our community to discover amazing projects and learn from experienced developers.</p>
        </div>
    </div>
</section>

<style>
    .hero {
        text-align: center;
        padding: 4rem 0;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        margin-bottom: 2rem;
    }

    .hero-title {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: white;
    }

    .hero-subtitle {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        opacity: 0.9;
    }

    .hero-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    .hero-button {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        border-radius: var(--border-radius);
        background: white;
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .hero-button.secondary {
        background: transparent;
        color: white;
        border: 2px solid white;
    }

    .hero-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        text-decoration: none;
    }

    .submit-banner {
        background: var(--background-color);
        padding: 2rem 0;
        text-align: center;
        margin-bottom: 2rem;
    }

    .submit-banner p {
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }

    .submit-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background: #24292e;
        color: white;
        border-radius: var(--border-radius);
        text-decoration: none;
        font-weight: 500;
        transition: transform 0.2s ease;
    }

    .submit-button:hover {
        transform: translateY(-2px);
        text-decoration: none;
    }

    .github-icon {
        width: 20px;
        height: 20px;
    }

    .section {
        padding: 3rem 0;
    }

    .section-title {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2rem;
    }

    .project-grid, .blog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
    }

    .section-footer {
        text-align: center;
    }

    .view-all {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
        transition: transform 0.2s ease;
    }

    .view-all:hover {
        transform: translateX(5px);
        text-decoration: none;
    }

    .about-section {
        padding: 4rem 0;
        background: var(--background-color);
    }

    .about-content {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        font-size: 1.1rem;
        line-height: 1.8;
    }

    @media (max-width: 768px) {
        .hero {
            padding: 3rem 0;
        }

        .hero-title {
            font-size: 2.5rem;
        }

        .hero-subtitle {
            font-size: 1.1rem;
        }

        .section {
            padding: 2rem 0;
        }

        .section-title {
            font-size: 1.75rem;
        }

        .about-content {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        .hero {
            padding: 2rem 0;
        }

        .hero-title {
            font-size: 2rem;
        }

        .hero-actions {
            flex-direction: column;
        }

        .hero-button {
            width: 100%;
        }

        .project-grid, .blog-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
