import React from "react";
import StarIcon from "./StarIcon";

const Rating = () => {
  return (
    <div className="flex items-center space-x-1">
      {[0, 1, 2, 3, 4].map((index) => (
        <StarIcon key={index}></StarIcon>
      ))}
    </div>
  );
};

export default Rating;
