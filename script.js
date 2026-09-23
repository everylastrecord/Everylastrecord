document.addEventListener("DOMContentLoaded", function () {

  // REVIEWS
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


  // MOBILE MENU
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

const reviewSearch = document.getElementById("reviewSearch");
const genreFilters = document.querySelectorAll(".genre-filter");
const reviewCards = document.querySelectorAll(".review-card");
const noResults = document.getElementById("noResults");

let activeGenre = "all";

function filterReviews() {
  const searchTerm = reviewSearch
    ? reviewSearch.value.toLowerCase().trim()
    : "";

  let visibleCount = 0;

  reviewCards.forEach(function(card) {
    const artist = (card.dataset.artist || "").toLowerCase();
    const album = (card.dataset.album || "").toLowerCase();
    const genre = (card.dataset.genre || "").toLowerCase();

    const matchesSearch =
      artist.includes(searchTerm) ||
      album.includes(searchTerm);

    const matchesGenre =
      activeGenre === "all" ||
      genre === activeGenre;

    if (matchesSearch && matchesGenre) {
      card.style.display = "";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (noResults) {
    noResults.style.display =
      visibleCount === 0 ? "block" : "none";
  }
}

if (reviewSearch) {
  reviewSearch.addEventListener("input", filterReviews);
}

genreFilters.forEach(function(button) {
  button.addEventListener("click", function() {

    genreFilters.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    activeGenre = button.dataset.genre;

    filterReviews();
  });
});
