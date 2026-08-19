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

const reviewSearch = document.getElementById("reviewSearch");
const genreFilter = document.getElementById("genreFilter");
const reviewCards = document.querySelectorAll(".review-card");
const noResults = document.getElementById("noResults");

function filterReviews() {
  if (!reviewSearch || !genreFilter) return;

  const searchTerm = reviewSearch.value.toLowerCase().trim();
  const selectedGenre = genreFilter.value;

  let visibleCount = 0;

  reviewCards.forEach(function(card) {
    const artist = card.dataset.artist.toLowerCase();
    const album = card.dataset.album.toLowerCase();
    const genre = card.dataset.genre;

    const matchesSearch =
      artist.includes(searchTerm) ||
      album.includes(searchTerm);

    const matchesGenre =
      selectedGenre === "all" ||
      genre === selectedGenre;

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

if (genreFilter) {
  genreFilter.addEventListener("change", filterReviews);
}
