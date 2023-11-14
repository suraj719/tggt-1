import { useDispatch } from "react-redux";
import { sortCategory } from "@/redux/action";

export default function Category() {
  const dispatch = useDispatch();
  const handleCategory = (e: any) => {
    dispatch(sortCategory(e.target.value));
  };
  return (
    <div>
      <label>Sort by category:</label>
      <select onChange={handleCategory} className="bg-gray-300 rounded-md p-2">
        <option value="random">Random</option>
        <option value="Fiction">Fiction</option>
        <option value="Dystopian">Dystopian</option>
        <option value="Mystery">Mystery</option>
        <option value="Romance">Romance</option>
      </select>
    </div>
  );
}
