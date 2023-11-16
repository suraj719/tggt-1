import BookCard from '@/containers/CardContainer';
import Pagination from '@/containers/Pagination';
import SortingElements from '@/containers/SortingElements';
import Heading from '@/components/base/Heading';
import { useFetchBooks } from '@/hooks/useFetchBooks';
import usePagination from '@/hooks/usePagination';
import { itemsPerPage } from '@/lib/constants';

export default function HomePage() {
  const books = useFetchBooks();
  const { currentItems, paginate } = usePagination({
    itemsPerPage: itemsPerPage,
    books: books,
  });
  return (
    <>
      <SortingElements />
      {books.length > 0 ? (
        <>
          <div className="flex justify-center items-center flex-wrap gap-5">
            {currentItems.map((book: Book, index: number) => (
              <BookCard
                key={index}
                bookName={book.bookName}
                price={book.price}
                rating={book.rating}
                category={book.category}
              />
            ))}
          </div>
          <Pagination PostsPerPage={itemsPerPage} totalPosts={books.length} paginate={paginate} />
        </>
      ) : (
        <Heading value="no results found" />
      )}
    </>
  );
}
