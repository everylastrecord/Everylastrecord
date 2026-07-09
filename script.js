document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleReviews");
  const hiddenReviews = document.querySelectorAll(".hidden-review");

  toggleButton.addEventListener("click", function () {
    hiddenReviews.forEach(function (review) {
      review.classList.toggle("show");
    });

    toggleButton.textContent =
      toggleButton.textContent === "Show Less"
        ? "View More Reviews"
        : "Show Less";
  });
});
