---
layout: post.njk
title: Building Modern CI/CD Pipelines
date: 2024-03-09
tags: ["DevOps", "CI/CD", "Automation"]
description: A comprehensive guide to building modern CI/CD pipelines using GitHub Actions, Jenkins, and other popular tools.
readingTime: 22
---

## Introduction

Modern CI/CD pipelines are essential for delivering software efficiently and reliably.

## GitHub Actions Example

```yaml
name: Node.js CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build
```

## Jenkins Pipeline

```groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh './deploy.sh'
            }
        }
    }
}
```

[继续阅读...]
