---
layout: post.njk
title: Mastering Vue 3 Composition API
date: 2024-03-11
tags: ["Vue.js", "JavaScript", "Frontend"]
description: Learn how to leverage Vue 3 Composition API to build more maintainable and scalable applications.
readingTime: 16
---

## Introduction to Composition API

The Composition API provides a more flexible way to organize component logic in Vue 3.

## Basic Setup

```vue
<script setup>
import { ref, onMounted } from "vue";

const count = ref(0);
const increment = () => count.value++;

onMounted(() => {
  console.log("Component mounted");
});
</script>

<template>
  <button @click="increment">Count: {{ count }}</button>
</template>
```

## Composables

```typescript
// useCounter.ts
import { ref } from "vue";

export function useCounter(initial = 0) {
  const count = ref(initial);
  const increment = () => count.value++;
  const decrement = () => count.value--;

  return {
    count,
    increment,
    decrement,
  };
}
```

[继续阅读...]
