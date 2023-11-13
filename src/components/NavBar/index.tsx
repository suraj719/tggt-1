import Category from "./Category";
import Price from "./Price";
import Rating from "./Rating";
import Searchbar from "./Searchbar";

export default function NavBar() {
  return (
    <div className="flex justify-center gap-5 flex-wrap items-center pb-10">
      <Price />
      <Rating />
      <Category />
      <Searchbar />
    </div>
  );
}
