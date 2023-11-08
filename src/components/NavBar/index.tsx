export default function NavBar() {
  return (
    <div className="flex justify-center gap-5 flex-wrap items-center pb-10">
      <div>
        <label>Sort by price:</label>
        <select 
        // onChange={handleprice} 
        className="bg-gray-300 rounded-md p-2">
          <option value="select">select</option>
          <option value="inc">Increasing</option>
          <option value="dec">Decreasing</option>
        </select>
      </div>
      <div>
        <label>Sort by rating:</label>
        <select 
        // onChange={handleRating} 
        className="bg-gray-300 rounded-md p-2">
          <option value="select">select</option>
          <option value="4to5">4 to 5</option>
          <option value="3to4">3 to 4</option>
          <option value="2to3">2 to 3</option>
          <option value="1to2">1 to 2</option>
        </select>
      </div>
      <div>
        <label>Sort by category:</label>
        <select 
        // onChange={handlecateg} 
        className="bg-gray-300 rounded-md p-2">
          <option value="select">select</option>
          <option value="Fiction">Fiction</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
        </select>
      </div>
      <div>
          <input
            placeholder="Search"
            type="search"
            className="bg-gray-300 py-3 px-5 rounded-md"
            // onChange={handleSearch}
            // onChange={(e) => setSearch(e.target.value)}
          />
        </div>
    </div>
  );
}
