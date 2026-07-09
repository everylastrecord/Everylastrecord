const toggleButton = document.getElementById("toggleReviews");
const hiddenReviews = document.querySelectorAll(".hidden-review");

toggleButton.addEventListener("click", () => {
  hiddenReviews.forEach(review => review.classList.toggle("show"));

  toggleButton.textContent =
    toggleButton.textContent === "Show Less"
      ? "View More Reviews"
      : "Show Less";
});



Add above body in index

<script src="script.js"></script>
