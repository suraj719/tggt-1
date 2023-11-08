import { useState } from "react";
import NavBar from "../../components/NavBar";
import data from "../../assets/data.json";
import BookCard from "../../components/BookCard.tsx";
import Pagination from "../../components/Pagination/index.tsx";

export default function HomePage() {
  const [currentPage, setCurrpage] = useState(1);
  const [postsPerPage, SetPostsPerPage] = useState(8);

  const idlastp = currentPage * postsPerPage;
  const idfirstp = idlastp - postsPerPage;
  const [books, setBooks] = useState(data);
  const currentbooks = books.slice(idfirstp, idlastp);
  const paginate = (pagenum: any) => setCurrpage(pagenum);
  const [search, setSearch] = useState("");
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    if (search.length) {
      setBooks(
        data.filter((pro) =>
          pro.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
        )
      );
    } else {
      setBooks(data);
    }
  };

  const handlecateg = (e: any) => {
    const cat = e.target.value;
    if (cat !== "select") {
      setBooks(
        data.filter((pro) =>
          pro.category.toLowerCase().includes(cat.toLocaleLowerCase())
        )
      );
    } else {
      setBooks(data);
    }
  };

  const handleprice = (e: any) => {
    const { value } = e.target;
    let sortedData;
    if (value === "inc") {
      sortedData = data.slice().sort((a, b) => a.price - b.price);
    } else if (value === "dec") {
      sortedData = data.slice().sort((a, b) => b.price - a.price);
    } else {
      sortedData = [...data]; // No sorting, just use the original data
    }
    setBooks(sortedData);
  };

  const handleRating = (e: any) => {
    const { value } = e.target;
    if (value === "4to5") {
      setBooks(
        data.filter((pro) => {
          return pro.rating >= 4 && pro.rating <= 5;
        })
      );
    } else if (value === "3to4") {
      setBooks(
        data.filter((pro) => {
          return pro.rating >= 3 && pro.rating <= 4;
        })
      );
    } else if (value === "2to3") {
      setBooks(
        data.filter((pro) => {
          return pro.rating >= 2 && pro.rating <= 3;
        })
      );
    } else if (value === "1to2") {
      setBooks(
        data.filter((pro) => {
          return pro.rating >= 1 && pro.rating <= 2;
        })
      );
    } else {
      setBooks(data);
    }
  };
  return (
    <>
      {/* <NavBar /> */}
      <div className="flex justify-center gap-5 flex-wrap items-center pb-10">
        <div>
          <label>Sort by price:</label>
          <select onChange={handleprice} className="bg-gray-300 rounded-md p-2">
            <option value="select">select</option>
            <option value="inc">Increasing</option>
            <option value="dec">Decreasing</option>
          </select>
        </div>
        <div>
          <label>Sort by rating:</label>
          <select
            onChange={handleRating}
            className="bg-gray-300 rounded-md p-2"
          >
            <option value="select">select</option>
            <option value="4to5">4 to 5</option>
            <option value="3to4">3 to 4</option>
            <option value="2to3">2 to 3</option>
            <option value="1to2">1 to 2</option>
          </select>
        </div>
        <div>
          <label>Sort by category:</label>
          <select onChange={handlecateg} className="bg-gray-300 rounded-md p-2">
            <option value="select">select</option>
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
            // onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {books.length > 0 ? (
        <div>
          <div className="flex justify-center items-center flex-wrap gap-5">
            {currentbooks.map((book, index) => (
              <>
                <BookCard
                  key={index + 1}
                  name={book.name}
                  price={book.price}
                  rating={book.rating}
                  category={book.category}
                />
              </>
            ))}
          </div>
          <Pagination
            PostsPerPage={postsPerPage}
            totalPosts={books.length}
            paginate={paginate}
          />
        </div>
      ) : (
        <p className="text-center font-bold">no results found</p>
      )}
    </>
  );
}
