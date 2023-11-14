import { useDispatch } from "react-redux";
import { sortRating } from "@/redux/action";

export default function Rating() {
  const dispatch = useDispatch();
  const handleRating = (e: any) => {
    const [minRating, maxRating] = e.target.value.split("-").map(Number);
    dispatch(sortRating(minRating, maxRating));
  };
  return (
    <div>
      <label>Sort by rating:</label>
      <select onChange={handleRating} className="bg-gray-300 rounded-md p-2">
        <option value="random">Random</option>
        <option value="4-5">4 to 5</option>
        <option value="3-4">3 to 4</option>
        <option value="2-3">2 to 3</option>
        <option value="1-2">1 to 2</option>
      </select>
    </div>
  );
}
