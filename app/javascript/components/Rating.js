import React from "react";
import StarIcon from "./StarIcon";

const grayStyle = "text-gray-200";
const yellowStyle = "text-yellow-400";
const BIG_ELEMENT_WIDTH = 20;
const HALF = 0.5;

const Rating = () => {
  const [currentStar, setCurrentStar] = React.useState(0);
  const [currentRating, setCurrentRating] = React.useState(0);

  const onClick = (index) => {
    const i = moreThanHalf() ? index : index - HALF;
    setCurrentStar(i);
    setCurrentRating(i);
  };

  const setStarPosition = (index) => {
    const i = moreThanHalf() ? index : index - HALF;
    setCurrentStar(i);
  };

  const resetStarPosition = () => setCurrentStar(0);

  const starColor = (index) => {
    if (currentRating + HALF >= index) {
      return yellowStyle;
    } else {
      return currentStar + HALF >= index ? yellowStyle : grayStyle;
    }
  };

  const moreThanHalf = () => {
    let { target } = event;
    let mouseAt = event.clientX - target.getBoundingClientRect().left;
    let size = target.getBoundingClientRect().width;
    mouseAt = Math.round(Math.abs(mouseAt));
    const divider = size > BIG_ELEMENT_WIDTH ? 2 : 4;
    return mouseAt > size / divider;
  };

  const isHalf = (index) => {
    const isHalfOnEnding = index - currentRating === HALF;
    const isHoveredOnHalf = index - currentStar === HALF;

    return currentStar <= currentRating ? isHalfOnEnding : isHoveredOnHalf;
  };

  return (
    <div className="flex items-center space-x-2 md:space-x-1 relative">
      <input
        id="rating-input"
        type="hidden"
        name="review[rating]"
        value={currentRating}
      />
      {[1, 2, 3, 4, 5].map((index) => (
        <StarIcon
          key={index}
          isHalf={isHalf(index)}
          color={starColor(index)}
          onClick={() => onClick(index)}
          onMouseEnter={() => setStarPosition(index)}
          onMouseLeave={resetStarPosition}
          onMouseMove={() => setStarPosition(index)}
        ></StarIcon>
      ))}
    </div>
  );
};

export default Rating;
