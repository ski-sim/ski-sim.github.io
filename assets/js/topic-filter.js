document.addEventListener("DOMContentLoaded", function () {
  var filterBtns = document.querySelectorAll(".topic-btn");
  if (!filterBtns.length) return;

  // Attach topic data from .row[data-topics] to each <li>
  document.querySelectorAll(".bibliography > li").forEach(function (li) {
    var row = li.querySelector(".row");
    li.dataset.topics = row && row.dataset.topics ? row.dataset.topics : "";
  });

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
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
