export default function BookCard({ name, price, rating, category }: any) {
  // const
  return (
    <>
      <div className="w-[20rem] bg-gray-200 rounded-md p-5 text-center">
        <p className="font-bold">{name}</p>
        <p>Price: {price}</p>
        <p>rating: {rating}</p>
        <p>category: {category}</p>
      </div>
    </>
  );
}
