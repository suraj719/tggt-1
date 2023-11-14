import RatingSelect from "@/components/custom/RatingSelect";
import { sortRating } from "@/redux/action";
import React from "react";
import { useDispatch } from "react-redux";

const index: React.FC = () => {
  const dispatch = useDispatch();
  const handleRating = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const [minRating, maxRating] = event.target.value.split("-").map(Number);
    dispatch(sortRating(minRating, maxRating));
  };

  return (
    <div>
      <RatingSelect onChange={handleRating} />
    </div>
  );
};

export default index;
