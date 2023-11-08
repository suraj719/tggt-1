import { useState } from "react";
import NavBar from "../../components/NavBar";
import data from "../../assets/data.json";
import BookCard from "../../components/BookCard.tsx";

export default function HomePage() {
  const [books, setBooks] = useState(data);

  return (
    <>
      <NavBar />
      <div className="flex justify-evenly items-center flex-wrap gap-5">
          {books.map((book, index) => (
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
    </>
  );
}
