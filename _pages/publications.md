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

<div class="publications">

{% bibliography %}

</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  // Attach topic data to each li
  document.querySelectorAll(".bibliography > li").forEach(function (li) {
    var topicEl = li.querySelector(".paper-topic");
    if (topicEl) {
      li.dataset.topics = topicEl.textContent.toLowerCase();
    } else {
      li.dataset.topics = "";
    }
  });

  var activeBtn = document.querySelector(".topic-btn.active");

  document.querySelectorAll(".topic-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".topic-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      this.classList.add("active");

      var topic = this.dataset.topic.toLowerCase();

      document.querySelectorAll(".bibliography > li").forEach(function (li) {
        if (topic === "all" || li.dataset.topics.includes(topic)) {
          li.classList.remove("unloaded");
        } else {
          li.classList.add("unloaded");
        }
      });
    });
  });
});
</script>
