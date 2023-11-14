export default function BookCard({ bookName, price, rating, category }: Book) {
  return (
    <>
      <div className="w-[20rem] h-[10rem] bg-gray-200 rounded-md p-5 text-center">
        <p className="font-bold">{bookName}</p>
        <p>Price: {price}</p>
        <p>rating: {rating}</p>
        <p>category: {category}</p>
      </div>
    </>
  );
}
