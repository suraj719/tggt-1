import Heading from '@/components/base/Heading';
import Text from '@/components/base/Text';

export default function BookCard({ bookName, price, rating, category }: Book) {
  return (
    <>
      <div className="w-[20rem] h-[10rem] bg-gray-200 rounded-md p-5 text-center">
        <Heading value={bookName} />
        <Text label="price" value={price.toString()} />
        <Text label="rating" value={rating.toString()} />
        <Text label="category" value={category} />
      </div>
    </>
  );
}
