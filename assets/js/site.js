(function () {
  // Colour theme: follows the system until the visitor picks one.
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      if (!current) {
        current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  // Attribution trace illustration on the home page.
  var source = document.getElementById("trace-source");
  var output = document.getElementById("trace-output");
  if (!source || !output) return;

  var spans = source.querySelectorAll("span");
  var buttons = output.querySelectorAll("button");

  function parse(str) {
    var weights = {};
    str.split(",").forEach(function (pair) {
      var parts = pair.split(":");
      weights[parseInt(parts[0], 10)] = parseFloat(parts[1]);
    });
    return weights;
  }

  var perToken = Array.prototype.map.call(buttons, function (b) {
    return parse(b.getAttribute("data-w"));
  });

  // Whole-summary view: total dependence of the summary on each source word, scaled so the top word reaches 0.75.
  var overall = {};
  var top = 0;
  perToken.forEach(function (w) {
    Object.keys(w).forEach(function (k) {
      overall[k] = (overall[k] || 0) + w[k];
      top = Math.max(top, overall[k]);
    });
  });
  Object.keys(overall).forEach(function (k) {
    overall[k] = (overall[k] / top) * 0.75;
  });

  function paint(weights) {
    spans.forEach(function (s, i) {
      var w = weights[i] || 0;
      s.style.setProperty("--w", w.toFixed(2));
      s.classList.toggle("strong", w >= 0.7);
    });
  }

  function select(index) {
    buttons.forEach(function (b, i) {
      b.setAttribute("aria-pressed", i === index ? "true" : "false");
    });
    paint(index === null ? overall : perToken[index]);
  }

  buttons.forEach(function (b, i) {
    b.setAttribute("aria-pressed", "false");
    b.setAttribute("aria-controls", "trace-source");
    b.addEventListener("mouseenter", function () {
      select(i);
    });
    b.addEventListener("focus", function () {
      select(i);
    });
    b.addEventListener("click", function () {
      select(i);
    });
  });

  output.addEventListener("mouseleave", function () {
    if (!output.contains(document.activeElement)) select(null);
  });

  // One reveal on load: the source fills in with the whole-summary attribution.
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      select(null);
    });
  });
})();
