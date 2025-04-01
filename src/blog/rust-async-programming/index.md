---
layout: post.njk
title: Async Programming in Rust
date: 2024-03-05
tags: ["Rust", "Async", "Programming"]
description: A comprehensive guide to asynchronous programming in Rust using tokio and async/await syntax.
readingTime: 22
featured: true
---

## Introduction

Rust's async/await syntax and ecosystem provide powerful tools for writing efficient concurrent applications.

## Basic Async/Await

```rust
use tokio;

#[tokio::main]
async fn main() {
    let result = fetch_data().await;
    println!("Result: {:?}", result);
}

async fn fetch_data() -> Result<String, Box<dyn std::error::Error>> {
    // Simulated async operation
    tokio::time::sleep(std::time::Duration::from_secs(1)).await;
    Ok("Data fetched successfully".to_string())
}
```

## Concurrent Tasks

```rust
use futures::future::join_all;

async fn process_items(items: Vec<i32>) -> Vec<i32> {
    let tasks: Vec<_> = items
        .into_iter()
        .map(|item| tokio::spawn(async move {
            // Simulate processing
            tokio::time::sleep(std::time::Duration::from_millis(100)).await;
            item * 2
        }))
        .collect();

    let results = join_all(tasks).await;
    results.into_iter()
           .filter_map(|r| r.ok())
           .collect()
}
```

[继续阅读...]
