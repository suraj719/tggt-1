declare interface Book {
  bookName: string;
  price: number;
  rating: number;
  category: string;
}
declare interface BookState {
  books: Book[];
}
declare interface ActionType {
  type: string;
  order: string;
  from: number;
  to: number;
  category: string;
  searchTerm: string;
}
