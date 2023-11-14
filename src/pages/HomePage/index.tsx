import { useState } from "react";
import BookCard from "@/components/BookCard.tsx";
import Pagination from "@/components/Pagination/index.tsx";
import { useSelector } from "react-redux";
import SortingElements from "@/containers/SortingElements";
export default function HomePage() {
  const [currentPage, setCurrpage] = useState(1);
  const postsPerPage = 8;
  const idlastp = currentPage * postsPerPage;
  const idfirstp = idlastp - postsPerPage;
  const books = useSelector((state: BookState) => state.books);
  const currentbooks = books.slice(idfirstp, idlastp);
  const paginate = (pagenum: number) => setCurrpage(pagenum);
  return (
    <>
      <SortingElements />
      {books.length > 0 ? (
        <>
          <div className="flex justify-center items-center flex-wrap gap-5">
            {currentbooks.map((book: Book, index: number) => (
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
        </>
      ) : (
        <p className="text-center font-bold">no results found</p>
      )}
    </>
  );
}
