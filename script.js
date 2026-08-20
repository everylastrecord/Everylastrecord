document.addEventListener("DOMContentLoaded", function () {
 const toggleReviews = document.getElementById("toggleReviews");
const reviewCards = document.querySelectorAll(".episode-grid .card");

if (toggleReviews && reviewCards.length > 6) {

  reviewCards.forEach(function (card, index) {
    card.classList.remove("show");

    if (index >= 6) {
      card.classList.add("hidden-review");
    } else {
      card.classList.remove("hidden-review");
    }
  });

  toggleReviews.addEventListener("click", function () {
    const hiddenReviews = document.querySelectorAll(".hidden-review");

    const isExpanded = toggleReviews.textContent === "Show Less";

    hiddenReviews.forEach(function (review) {
      if (isExpanded) {
        review.classList.remove("show");
      } else {
        review.classList.add("show");
      }
    });

    toggleReviews.textContent =
      isExpanded ? "View More Reviews" : "Show Less";
  });

} else if (toggleReviews) {
  toggleReviews.style.display = "none";
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

