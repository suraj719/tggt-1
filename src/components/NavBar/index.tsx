import { useDispatch } from "react-redux";
import {
  debounces,
  search,
  sortCategory,
  sortPrice,
  sortRating,
} from "../../redux/action";
export default function NavBar() {
  const dispatch = useDispatch();
  const handleprice = (e: any) => {
    dispatch(sortPrice(e.target.value));
  };
  const handleRating = (e: any) => {
    const [minRating, maxRating] = e.target.value.split("-").map(Number);
    dispatch(sortRating(minRating, maxRating));
  };

  const handlecateg = (e: any) => {
    dispatch(sortCategory(e.target.value));
  };
  const handleSearch = (e: any) => {
    dispatch(search(e.target.value));
    // dispatch(debounces(e.target.value))
    // debounces(e.target.value)
  };

  return (
    <div className="flex justify-center gap-5 flex-wrap items-center pb-10">
      <div>
        <label>Sort by price:</label>
        <select onChange={handleprice} className="bg-gray-300 rounded-md p-2">
          <option value="rand">Random</option>
          <option value="inc">Increasing</option>
          <option value="dec">Decreasing</option>
        </select>
      </div>
      <div>
        <label>Sort by rating:</label>
        <select onChange={handleRating} className="bg-gray-300 rounded-md p-2">
          <option value="rand">Random</option>
          <option value="4-5">4 to 5</option>
          <option value="3-4">3 to 4</option>
          <option value="2-3">2 to 3</option>
          <option value="1-2">1 to 2</option>
        </select>
      </div>
      <div>
        <label>Sort by category:</label>
        <select onChange={handlecateg} className="bg-gray-300 rounded-md p-2">
          <option value="rand">Random</option>
          <option value="Fiction">Fiction</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
        </select>
      </div>
      <div>
        <input
          placeholder="Search"
          type="search"
          className="bg-gray-300 py-3 px-5 rounded-md"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
