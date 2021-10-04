document.addEventListener("turbolinks:load", function () {
  let stars = document.getElementsByClassName("star");
  let ratingInput = document.getElementById("rating-input");

  const elementIndex = (el) => parseInt(el.getAttribute("data-index"));
  const setStarColor = (el) => el.classList.add("text-yellow-400");
  const removeStarColor = (el) => el.classList.remove("text-yellow-400");
  const setInputRatingValue = (el) =>
    (ratingInput.value = elementIndex(el) + 1);

  const paintStarsYellow = (stars, lastIndex) => {
    for (i = 0; i < stars.length; i++) {
      if (elementIndex(stars[i]) <= lastIndex) {
        setStarColor(stars[i]);
      }
    }
  };

  const removeStarsYellow = (stars, lastIndex) => {
    for (i = 0; i < stars.length; i++) {
      if (elementIndex(stars[i]) >= lastIndex) {
        removeStarColor(stars[i]);
      }
    }
  };

  if (stars) {
    for (i = 0; i < stars.length; i++) {
      let currentStar = stars[i];

      currentStar.addEventListener("click", function () {
        setInputRatingValue(currentStar);
        paintStarsYellow(stars, elementIndex(currentStar));
      });

      currentStar.addEventListener("mouseenter", () =>
        paintStarsYellow(stars, elementIndex(currentStar))
      );

      currentStar.addEventListener("mouseleave", function () {
        ratingInput.value
          ? removeStarsYellow(stars, ratingInput.value)
          : removeStarsYellow(stars, 0); // if end index is 0, removes yellow from all stars
      });
    }
  }
});
