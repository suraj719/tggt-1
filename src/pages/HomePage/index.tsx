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
  return (
    <>
      <NavBar />
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
    </>
  );
}
