document.addEventListener("turbolinks:load", function () {
  const stars = document.getElementsByClassName("star");
  const ratingInput = document.getElementById("rating-input");
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  const elementIndex = (el) => parseInt(el.getAttribute("data-index"));
  const addStarColor = (el) => el.classList.add("text-yellow-400");
  const removeStarColor = (el) => el.classList.remove("text-yellow-400");
  const setInputRatingValue = (el) =>
    (ratingInput.value = elementIndex(el) + 1);

  const paintStarsYellow = (stars, lastIndex) => {
    for (i = 0; i < stars.length; i++) {
      if (elementIndex(stars[i]) <= lastIndex) {
        addStarColor(stars[i]);
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
      const currentStar = stars[i];

      currentStar.addEventListener("click", function () {
        setInputRatingValue(currentStar);
        paintStarsYellow(stars, elementIndex(currentStar));
        removeStarsYellow(stars, ratingInput.value);
      });

      if (isDesktop) {
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
  }
});
