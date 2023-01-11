const searchButton = document.querySelector('.search-button')
const searchInput = document.querySelector('.search-input')

// filters books based on user's input when search button clicked
searchButton.addEventListener('click', function () {
  const searchQuery = searchInput.value.toLowerCase()
  console.group(searchInput.value)

  if (searchInput.value.length === 0) {
    renderBookshelf(arrOfBooks)
    visibleBooks = arrOfBooks
  } else {
    visibleBooks = arrOfBooks
    visibleBooks = visibleBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery) ||
        book.author[0].toLowerCase().includes(searchQuery) ||
        book.subject[0].toLowerCase().includes(searchQuery)
    )

    renderBookshelf(visibleBooks)
  }
})
