---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<!-- Topic Filter Buttons -->
<div id="topic-filters" class="topic-filters">
  <button class="topic-btn active" data-topic="all">All</button>
  <button class="topic-btn" data-topic="Posterior Inference">Posterior Inference</button>
  <button class="topic-btn" data-topic="Constrained Optimization">Constrained Optimization</button>
  <button class="topic-btn" data-topic="Few-step Generative Models">Few-step Generative Models</button>
</div>

<script src="{{ '/assets/js/topic-filter.js' | relative_url }}"></script>

<div class="publications">

{% bibliography %}

</div>
