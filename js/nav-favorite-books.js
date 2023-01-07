// display and update favorite book count
function updateFavBookCount() {
  const count = document.querySelector('.fav-books-count')
  const totalFavCount = arrOfBooks.reduce(function (accumulator, currentBook) {
    if (currentBook.isFavorite) {
      return accumulator + 1
    } else {
      return accumulator
    }
  }, 0)

  count.textContent = totalFavCount
}
