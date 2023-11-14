import { useState } from "react";
import NavBar from "../../components/NavBar";
import BookCard from "../../components/BookCard.tsx";
import Pagination from "../../components/Pagination/index.tsx";
import { useSelector } from "react-redux";

export default function HomePage() {
  const [currentPage, setCurrpage] = useState(1);
  const postsPerPage = 8;
  const idlastp = currentPage * postsPerPage;
  const idfirstp = idlastp - postsPerPage;
  const books = useSelector((state: any) => state.books);
  const currentbooks = books.slice(idfirstp, idlastp);
  const paginate = (pagenum: any) => setCurrpage(pagenum);
  return (
    <>
      <NavBar />
      {books.length > 0 ? (
        <div>
          <div className="flex justify-center items-center flex-wrap gap-5">
            {currentbooks.map((book: any, index: number) => (
              <BookCard
                key={index + 1}
                bookName={book.bookName}
                price={book.price}
                rating={book.rating}
                category={book.category}
              />
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
