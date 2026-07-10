document.addEventListener("DOMContentLoaded", function () {
  const toggleReviews = document.getElementById("toggleReviews");
  const hiddenReviews = document.querySelectorAll(".hidden-review");

  if (toggleReviews) {
    toggleReviews.addEventListener("click", function () {
      hiddenReviews.forEach(function (review) {
        review.classList.toggle("show");
      });

      toggleReviews.textContent =
        toggleReviews.textContent === "Show Less"
          ? "View More Reviews"
          : "Show Less";
    });
  }

  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");
  const navLinks = siteNav ? siteNav.querySelectorAll("a") : [];

  function closeMenu() {
    if (!menuToggle || !siteNav) return;

    menuToggle.classList.remove("open");
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = siteNav.classList.toggle("open");

      menuToggle.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }
});
