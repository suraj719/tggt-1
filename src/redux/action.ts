export function sortPrice(order: string) {
  return {
    type: "SORT_PRICE",
    order: order,
  };
}

export function sortRating(from: number, to: number) {
  return {
    type: "SORT_RATING",
    from: from,
    to: to,
  };
}

export function sortCategory(categ: string) {
  return {
    type: "SORT_CATEGORY",
    categ: categ,
  };
}
export function search(term: any) {
  return {
    type: "SEARCH",
    term: term,
  };
}
