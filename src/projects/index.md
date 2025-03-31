---
layout: base.njk
title: Projects - AippleTree
date: 2024-03-21
---

## Featured Projects

Here are some of my recent projects. Each project showcases different aspects of my skills and experience.

### Web Development

#### [Personal Portfolio Website](/projects/personal-portfolio/)

A modern, responsive portfolio website built with 11ty and styled with custom CSS. Features include smooth animations, dark mode support, and optimized performance.

**Tech Stack**: 11ty, Nunjucks, CSS, JavaScript

### Mobile Development

#### [Task Management App](/projects/task-manager/)

A cross-platform mobile application for task management and productivity tracking. Built with React Native and Firebase.

**Tech Stack**: React Native, Firebase, Redux

### Open Source Contributions

#### [Weather Widget](/projects/weather-widget/)

A customizable weather widget component for web applications. Supports multiple weather APIs and theme customization.

**Tech Stack**: JavaScript, CSS, OpenWeather API

#### [UI Component Library](/projects/ui-components/)

A collection of reusable UI components with a focus on accessibility and customization.

**Tech Stack**: TypeScript, React, Storybook

## Project Categories

- **Web Development**: Full-stack web applications and websites
- **Mobile Development**: iOS and Android applications
- **Open Source**: Libraries and tools for the developer community
- **Design**: UI/UX design projects and prototypes

## All Projects

{% for project in collections.projects %}

- [{{ project.data.title }}]({{ project.url }}) ({{ project.data.date | dateFormat }})
  {% endfor %}
