import { useSelector } from 'react-redux';

export function useFetchBooks() {
  const books = useSelector((state: BookState) => state.books);

  return books;
}
