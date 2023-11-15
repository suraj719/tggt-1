import { useState } from 'react';

interface UsePaginationProps {
  itemsPerPage: number;
  books: Book[];
}

interface UsePaginationResult {
  currentItems: Book[];
  paginate: (pageNumber: number) => void;
}

const usePagination = ({ itemsPerPage, books }: UsePaginationProps): UsePaginationResult => {
  const [currentPage, setCurrentPage] = useState(1);
  const LastItemID = currentPage * itemsPerPage;
  const FirstItemID = LastItemID - itemsPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const currentItems = books.slice(FirstItemID, LastItemID);

  return {
    currentItems,
    paginate,
  };
};

export default usePagination;
