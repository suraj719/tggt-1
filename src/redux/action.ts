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
  // console.log(term);
  // debounces(term)
  return {
    type: "SEARCH",
    term: term,
  };
}

// export function debounce (term:any)  {
//     // return (dispatch:any) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 // Assuming oridata is defined somewhere in your code
//                 // const oridata = [/* your data */];
//                 resolve("done");
//             }, 1000);
//         })
//         .then((done) => {
//             // dispatch(search(term));
//             search(term)
//         })
//     // };
// }

export async function debounces(term: any) {
  // console.log("sgs");
  setTimeout(() => {}, 5000);
}
