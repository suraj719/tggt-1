import { originalData } from "@/assets/data";
const initialState: BookState = {
  books: originalData,
};
function rootReducer(state: BookState = initialState, action: ActionType) {
  if (action.type === "SORT_PRICE") {
    if (action.order === "random") {
      return {
        books: originalData,
      };
    } else if (action.order === "increasing") {
      return {
        books: originalData
          .slice()
          .sort((a: Book, b: Book) => a.price - b.price),
      };
    } else if (action.order === "decreasing") {
      return {
        books: originalData.slice().sort((a: any, b: any) => b.price - a.price),
      };
    }
  }
  if (action.type === "SORT_RATING") {
    if (action.from && action.to) {
      return {
        books: originalData.filter(
          (pro: any) => pro.rating >= action.from && pro.rating <= action.to,
        ),
      };
    } else {
      return {
        books: originalData,
      };
    }
  }
  if (action.type === "SORT_CATEGORY") {
    if (action.category !== "random") {
      return {
        books: originalData.filter((pro: any) =>
          pro.category
            .toLowerCase()
            .includes(action.category.toLocaleLowerCase()),
        ),
      };
    } else {
      return {
        books: originalData,
      };
    }
  }
  if (action.type === "SEARCH") {
    if (action.searchTerm) {
      return {
        books: originalData.filter((pro: any) =>
          pro.name
            .toLowerCase()
            .includes(action.searchTerm.toLocaleLowerCase()),
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
