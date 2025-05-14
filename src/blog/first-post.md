---
title: My First Blog Post!
date: 2025-05-05 # Use YYYY-MM-DD format, or use "Last Modified" for Eleventy to use file mod date
tags: post
layout: layouts/post.njk # Tell it to use the post layout
excerpt: "This is a custom, concise summary of my first blog post, designed to grab the reader's attention on the blog listing page."
permalink: "/blog/{{ page.date.getFullYear() }}/{{ page.fileSlug }}/"
---

## Welcome

This is content written in **Markdown**. Eleventy converts this to HTML.

You can create lists:
* Item 1
* Item 2

Add code blocks:
```js
console.log('Hello, Eleventy!');
```