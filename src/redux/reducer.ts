import oridata from "../assets/data.json";
const initialState: any = {
  data: oridata,
};
function rootReducer(state: any = initialState, action: any) {
  if (action.type === "SORT_PRICE") {
    if (action.order === "rand") {
      return {
        data: oridata,
      };
    } else if (action.order === "inc") {
      return {
        data: oridata.slice().sort((a: any, b: any) => a.price - b.price),
      };
    } else if (action.order === "dec") {
      return {
        data: oridata.slice().sort((a: any, b: any) => b.price - a.price),
      };
    }
  }
  if (action.type === "SORT_RATING") {
    if (action.from && action.to) {
      return {
        data: oridata.filter(
          (pro: any) => pro.rating >= action.from && pro.rating <= action.to
        ),
      };
    } else {
      return {
        data: oridata,
      };
    }
  }
  if (action.type === "SORT_CATEGORY") {
    if (action.categ !== "rand") {
      return {
        data: oridata.filter((pro: any) =>
          pro.category.toLowerCase().includes(action.categ.toLocaleLowerCase())
        ),
      };
    } else {
      return {
        data: oridata,
      };
    }
  }
  if (action.type === "SEARCH") {
    if (action.term) {
      return {
        data: oridata.filter((pro: any) =>
          pro.name.toLowerCase().includes(action.term.toLocaleLowerCase())
        ),
      };
    } else {
      return { data: oridata };
    }
  } else {
    return state;
  }
}
export default rootReducer;
