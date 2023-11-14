import Category from "@/components/NavBar/Category";
import Price from "@/components/NavBar/Price";
import Rating from "@/components/NavBar/Rating";
import Searchbar from "@/components/NavBar/Searchbar";

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
