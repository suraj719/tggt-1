
interface PaginationProps {
  PostsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ PostsPerPage, totalPosts, paginate }) => {
  const PageNums = Array.from(
    { length: Math.ceil(totalPosts / PostsPerPage) },
    (_, index) => index + 1,
  );

  return (
    <>
      <div className="flex justify-center mt-10">
        <ul className="pagination gap-3 flex">
          {PageNums.map((pageNumber) => (
            <li key={pageNumber} className="page-item">
              <a
                onClick={() => paginate(pageNumber)}
                href="#"
                className="font-bold bg-gray-800 text-white p-3 rounded-md"
              >
                {pageNumber}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;