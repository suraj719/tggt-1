const Pagination = ({ PostsPerPage, totalPosts, paginate }: any) => {
  let PageNums = [];
  for (let i = 1; i <= Math.ceil(totalPosts / PostsPerPage); i++) {
    PageNums.push(i);
  }
  return (
    <>
      <div className="flex justify-center mt-10">
        <ul className="pagination gap-3 flex">
          {PageNums.map((num) => {
            return (
              <li key={num} className="page-item">
                <a
                  onClick={() => paginate(num)}
                  href="#"
                  className="font-bold bg-gray-800 text-white p-3 rounded-md"
                >
                  {num}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
