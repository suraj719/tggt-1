export function sortPrice(orderType: string) {
  return {
    type: 'SORT_PRICE',
    orderType: orderType,
  };
}

export function sortRating(from: number, to: number) {
  return {
    type: 'SORT_RATING',
    from: from,
    to: to,
  };
}

export function sortCategory(category: string) {
  return {
    type: 'SORT_CATEGORY',
    category: category,
  };
}
export function search(searchTerm: string) {
  return {
    type: 'SEARCH',
    searchTerm: searchTerm,
  };
}
