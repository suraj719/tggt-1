import { originalData } from '@/assets/data';
const initialState: BookState = {
  books: originalData,
};
function rootReducer(state: BookState = initialState, action: ActionType) {
  if (action.type === 'SORT_PRICE') {
    if (action.orderType === 'random') {
      return {
        books: originalData,
      };
    } else if (action.orderType === 'increasing') {
      return {
        books: originalData.slice().sort((a: Book, b: Book) => a.price - b.price),
      };
    } else if (action.orderType === 'decreasing') {
      return {
        books: originalData.slice().sort((a: Book, b: Book) => b.price - a.price),
      };
    }
  }
  if (action.type === 'SORT_RATING') {
    if (action.from && action.to) {
      return {
        books: originalData.filter((book: Book) => book.rating >= action.from && book.rating <= action.to),
      };
    } else {
      return {
        books: originalData,
      };
    }
  }
  if (action.type === 'SORT_CATEGORY') {
    if (action.category !== 'random') {
      return {
        books: originalData.filter((book: Book) =>
          book.category.toLowerCase().includes(action.category.toLocaleLowerCase()),
        ),
      };
    } else {
      return {
        books: originalData,
      };
    }
  }
  if (action.type === 'SEARCH') {
    if (action.searchTerm) {
      return {
        books: originalData.filter((book: Book) =>
          book.bookName.toLowerCase().includes(action.searchTerm.toLocaleLowerCase()),
        ),
      };
    } else {
      return { books: originalData };
    }
  } else {
    return state;
  }
}
export default rootReducer;
