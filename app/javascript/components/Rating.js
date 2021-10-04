import React from "react";
import StarIcon from "./StarIcon";

const baseStarStyle = "text-gray-200";
const yellowStarStyle = "text-yellow-400";

const Rating = () => {
  const [currentStarIndex, setCurrentStarIndex] = React.useState(0);
  const [ratingValue, setRatingValue] = React.useState(0);

  const onClick = (index) => {
    setCurrentStarIndex(index);
    setRatingValue(index);
  };

  const starColor = (index) => {
    if (ratingValue >= index) {
      return ratingValue >= index ? yellowStarStyle : baseStarStyle;
    } else {
      return currentStarIndex >= index ? yellowStarStyle : baseStarStyle;
    }
  };

  return (
    <div className="flex items-center space-x-2 md:space-x-1">
      <input
        id="rating-input"
        type="hidden"
        name="review[rating]"
        value={ratingValue}
      />
      {[1, 2, 3, 4, 5].map((index) => (
        <StarIcon
          key={index}
          onClick={() => onClick(index)}
          onMouseEnter={() => setCurrentStarIndex(index)}
          onMouseLeave={() => setCurrentStarIndex(0)}
          classNames={starColor(index)}
        ></StarIcon>
      ))}
    </div>
  );
};

export default Rating;
