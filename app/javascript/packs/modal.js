document.addEventListener("turbolinks:load", function () {
  let addReviewButton = document.getElementById("button-add-review");
  let overlay = document.getElementById("overlay");

  if (addReviewButton) {
    addReviewButton.addEventListener("click", function () {
      overlay.classList.toggle("hidden");
      overlay.classList.toggle("block");
    });
  }

  if (overlay) {
    overlay.onclick = function (event) {
      if (event.target == overlay) {
        overlay.classList.toggle("hidden");
        overlay.classList.toggle("block");
      }
    };
  }
});
