import CategorySort from "@/containers/CategorySort";
import PriceSort from "@/containers/PriceSort";
import RatingSort from "@/containers/RatingSort";
import SearchBar from "@/containers/SearchBar";
export default function index() {
  return (
    <div className="flex justify-center gap-5 flex-wrap items-center pb-10">
      <CategorySort />
      <PriceSort />
      <RatingSort />
      <SearchBar />
    </div>
  );
}
