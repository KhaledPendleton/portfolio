---
title: "Khaled's Featured Work"
layout: 'layouts/feed.html'
pagination:
    data: collections.featuredWork
    size: 10
permalink: 'work{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
# paginationPrevText: 'Newer work'
# paginationNextText: 'Older work'
# paginationAnchor: '#work-list'
---

My latest work, demonstrating my design-thinking, strategy, and expertise.
