(function () {
  "use strict";

  var dividers = document.querySelectorAll(".divider");
  if ("IntersectionObserver" in window && dividers.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    dividers.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    dividers.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
