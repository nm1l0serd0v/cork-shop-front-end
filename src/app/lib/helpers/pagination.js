export const currentPageRangeFrom = (currentPage, perPage) => {
  return currentPage * perPage - perPage + 1
}

export const currentPageRangeTo = (currentPage, perPage) => {
  return currentPage * perPage
}
