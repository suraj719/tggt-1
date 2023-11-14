import { useDispatch } from "react-redux";
import { sortPrice } from "@/redux/action";

export default function Price() {
  const dispatch = useDispatch();
  const handlePrice = (e: any) => {
    dispatch(sortPrice(e.target.value));
  };
  return (
    <div>
      <label>Sort by price:</label>
      <select onChange={handlePrice} className="bg-gray-300 rounded-md p-2">
        <option value="random">Random</option>
        <option value="increasing">Increasing</option>
        <option value="decreasing">Decreasing</option>
      </select>
    </div>
  );
}
