export default function NavBar() {
  return (
    <>
      <div className="flex justify-center gap-5 flex-wrap items-center pb-10">
        <div>
          <label>Sort by price:</label>
          <select className="bg-gray-300 rounded-md p-2">
            <option>Increasing</option>
            <option>Decreasing</option>
          </select>
        </div>
        <div>
          <label>Sort by rating:</label>
          <select className="bg-gray-300 rounded-md p-2">
            <option>4 to 5</option>
            <option>3 to 4</option>
            <option>2 to 3</option>
            <option>1 to 2</option>
          </select>
        </div>
        <div>
          <label>Sort by category:</label>
          <select className="bg-gray-300 rounded-md p-2">
            <option>Increasing</option>
            <option>Decreasing</option>
          </select>
        </div>
        <div>
          <input
            placeholder="Search"
            type="search"
            className="bg-gray-300 py-3 px-5 rounded-md"
          />
        </div>
      </div>
    </>
  );
}
