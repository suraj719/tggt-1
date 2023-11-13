import { useDispatch } from "react-redux";
import { sortPrice } from "../../redux/action";

export default function Price() {
  const dispatch = useDispatch();
  const handleprice = (e: any) => {
    dispatch(sortPrice(e.target.value));
  };
  return (
    <div>
      <label>Sort by price:</label>
      <select onChange={handleprice} className="bg-gray-300 rounded-md p-2">
        <option value="rand">Random</option>
        <option value="inc">Increasing</option>
        <option value="dec">Decreasing</option>
      </select>
    </div>
  );
}
