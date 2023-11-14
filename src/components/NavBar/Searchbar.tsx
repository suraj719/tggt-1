import { useDispatch } from "react-redux";
import { search } from "../../redux/action";
export default function Searchbar() {
  const dispatch = useDispatch();
  function debounce(func: any, delay: number) {
    let timeoutId: any;

    return function (...args: any) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(args);
      }, delay);
    };
  }
  function handleSearch(e: any) {
    dispatch(search(e[0].target.value));
  }
  const debouncedSearch = debounce(handleSearch, 1000);
  return (
    <div>
      <input
        placeholder="Search"
        type="search"
        className="bg-gray-300 py-3 px-5 rounded-md"
        onChange={debouncedSearch}
      />
    </div>
  );
}