---
layout: page.njk
title: Contact
description: Get in touch with me for collaborations, questions, or just to say hello!
---

## Let's Connect

I'm always excited to hear from fellow developers, potential clients, or anyone interested in my work. Feel free to reach out through any of the following channels:

### Email

[hello@aippletree.com](mailto:hello@aippletree.com)

### Social Media

- [GitHub](https://github.com/aippletree)
- [Twitter](https://twitter.com/aippletree)
- [LinkedIn](https://linkedin.com/in/aippletree)

### Location

I'm currently based in San Francisco, California, but I work with clients worldwide.

## Send a Message

If you'd like to send me a message directly, you can use the form below:

<form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required>
    </div>
    
    <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    
    <button type="submit" class="submit-button">Send Message</button>
</form>

<style>
    .contact-form {
        max-width: 600px;
        margin: 2rem auto;
        padding: 2rem;
        background: var(--background-color);
        border-radius: var(--border-radius);
        box-shadow: 0 4px 12px var(--shadow-color);
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-color);
        font-weight: 500;
    }

    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid var(--shadow-color);
        border-radius: var(--border-radius);
        background: white;
        font-family: inherit;
        font-size: 1rem;
        transition: all 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.1);
    }

    .submit-button {
        display: block;
        width: 100%;
        padding: 1rem;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: var(--border-radius);
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .submit-button:hover {
        background: var(--accent-color);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px var(--shadow-color);
    }
</style>
