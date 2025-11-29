(function () {
  "use strict";

  var htmlEl = document.documentElement;
  if (htmlEl.classList.contains("no-js")) {
    htmlEl.classList.remove("no-js");
    htmlEl.classList.add("js");
  }

  initExplainers();
  initBlogListing();

  function initExplainers() {
    var explainers = document.querySelectorAll("explain");
    if (!explainers.length) return;

    explainers.forEach(function (node, idx) {
      var title = node.dataset.title || "More info";
      var rawContent = node.innerHTML.trim();
      node.innerHTML = "";
      node.classList.add("explain-root");
      var triggerId = "explain-trigger-" + idx;

      var trigger = document.createElement("button");
      trigger.type = "button";
      trigger.id = triggerId;
      trigger.className = "explain-trigger";
      trigger.textContent = title;
      trigger.setAttribute("aria-expanded", "false");
      trigger.setAttribute("aria-controls", "explain-popover-" + idx);

      var popover = document.createElement("div");
      popover.className = "explain-popover";
      popover.id = "explain-popover-" + idx;
      popover.innerHTML =
        '<div class="explain-popover-header">' +
        title +
        '</div><div class="explain-popover-body">' +
        rawContent +
        '</div><button class="explain-close" type="button" aria-label="Close">Close</button>';

      var fallback = document.createElement("details");
      fallback.className = "explain-fallback";
      var summary = document.createElement("summary");
      summary.textContent = title;
      var fallbackBody = document.createElement("div");
      fallbackBody.innerHTML = rawContent;
      fallback.appendChild(summary);
      fallback.appendChild(fallbackBody);

      node.appendChild(trigger);
      node.appendChild(popover);
      node.appendChild(fallback);

      function closePopover() {
        popover.classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
      }

      trigger.addEventListener("click", function (ev) {
        ev.stopPropagation();
        var isOpen = popover.classList.toggle("open");
        trigger.setAttribute("aria-expanded", String(isOpen));
      });

      popover.querySelector(".explain-close").addEventListener("click", function () {
        closePopover();
      });

      document.addEventListener("click", function (ev) {
        if (!popover.classList.contains("open")) return;
        var isInside = node.contains(ev.target);
        if (!isInside) {
          closePopover();
        }
      });
    });
  }

  function initBlogListing() {
    var container = document.getElementById("posts-grid");
    if (!container) return;

    var searchInput = document.getElementById("blog-search");
    var tagBadges = document.querySelectorAll("#tag-badges .tag-badge");
    var resultsCount = document.getElementById("results-count");
    var selectedTag = "all";
    var posts = (window.BLOG_POSTS || []).slice();
    var searchIndex = null;
    var searchDocs = [];
    var basePath = (window.BLOG_BASE_PATH || "").replace(/\/$/, "");

    fetch((window.BLOG_SEARCH_PATH || "/assets/search.json"))
      .then(function (resp) { return resp.json(); })
      .then(function (data) {
        searchDocs = data;
        buildIndex(data);
      })
      .catch(function () {
        // fall back silently; simple search will run on posts only
      })
      .finally(function () {
        render(posts);
      });

    function buildIndex(docs) {
      if (!window.lunr || !docs || !docs.length) return;
      searchIndex = window.lunr(function () {
        this.ref("url");
        this.field("title");
        this.field("tags");
        this.field("content");
        this.field("summary");
        docs.forEach(function (doc) {
          this.add({
            url: doc.url,
            title: doc.title,
            tags: (doc.tags || []).join(" "),
            content: doc.content,
            summary: doc.summary
          });
        }, this);
      });
    }

    function filterPosts(query) {
      var results = posts;
      var trimmed = (query || "").trim();
      if (trimmed) {
        if (searchIndex && searchDocs.length) {
          var hits = searchIndex.search(trimmed + "*");
          var hitRefs = new Set(hits.map(function (h) { return h.ref; }));
          results = posts.filter(function (p) { return hitRefs.has(p.url); });
        } else {
          var term = trimmed.toLowerCase();
          results = posts.filter(function (p) {
            var inTitle = p.title && p.title.toLowerCase().indexOf(term) !== -1;
            var inTags = (p.tags || []).some(function (t) { return t.toLowerCase().indexOf(term) !== -1; });
            var inSummary = p.summary && p.summary.toLowerCase().indexOf(term) !== -1;
            return inTitle || inTags || inSummary;
          });
        }
      }
      if (selectedTag !== "all") {
        results = results.filter(function (p) {
          return (p.tags || []).indexOf(selectedTag) !== -1;
        });
      }
      render(results, trimmed);
    }

    function render(list, query) {
      var html = list.map(function (post) {
        var tagsHtml = (post.tags || []).map(function (tag) {
          return '<a class="tag-badge" href="' + basePath + "/tag/" + tag + '/">' + tag + "</a>";
        }).join("");
        return (
          '<article class="post-card" itemscope itemtype="http://schema.org/BlogPosting">' +
            '<div class="post-meta">' +
              '<time datetime="' + post.date + '">' + post.display_date + "</time>" +
              '<div class="tag-row">' + tagsHtml + "</div>" +
            "</div>" +
            '<h2 class="post-title"><a href="' + post.url + '" itemprop="url"><span itemprop="headline">' + post.title + "</span></a></h2>" +
            '<p class="post-excerpt">' + post.summary + "</p>" +
          "</article>"
        );
      }).join("");
      container.innerHTML = html || '<p class="empty-state">No posts match ' + (query ? '"' + query + '"' : "your filter") + ".</p>";
      var countText = list.length + " post" + (list.length === 1 ? "" : "s");
      if (selectedTag !== "all") {
        countText += ' tagged with "' + selectedTag + '"';
      }
      if (query) {
        countText += " for search \"" + query + "\"";
      }
      resultsCount.textContent = countText;
    }

    function setActiveTag(tag) {
      selectedTag = tag;
      tagBadges.forEach(function (btn) {
        var isActive = btn.dataset.tag === tag;
        btn.classList.toggle("active", isActive);
      });
      filterPosts(searchInput.value);
    }

    searchInput.addEventListener("input", function () {
      filterPosts(this.value);
    });
    searchInput.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") {
        ev.preventDefault();
        filterPosts(this.value);
      }
    });

    tagBadges.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setActiveTag(this.dataset.tag);
      });
    });
  }
})();
