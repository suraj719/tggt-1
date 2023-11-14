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

export function sortCategory(category: string) {
  return {
    type: "SORT_CATEGORY",
    category: category,
  };
}
export function search(searchTerm: String) {
  return {
    type: "SEARCH",
    searchTerm: searchTerm,
  };
}
