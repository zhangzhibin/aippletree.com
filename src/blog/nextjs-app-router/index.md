---
layout: post.njk
title: Next.js App Router Deep Dive
date: 2024-03-06
tags: ["Next.js", "React", "Frontend"]
description: Comprehensive guide to building modern web applications with Next.js 14 App Router and Server Components.
readingTime: 18
---

## Introduction

Next.js App Router introduces a new paradigm for building React applications with enhanced performance and developer experience.

## Server Components

```tsx
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch("https://api.example.com/posts");
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <article key={post.id} className="p-4 border rounded">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="mt-2">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

## Route Handlers

```typescript
// app/api/posts/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const data = await request.json();
  const post = await prisma.post.create({
    data,
  });
  return NextResponse.json(post);
}
```

[继续阅读...]
