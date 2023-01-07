// TODO:
// currently only searches through clean words
//(ex: words after a space, not string of letters within a word)

// search through books for search input match
const searchButton = document.querySelector('.search-button')
const searchInput = document.querySelector('.search-input')

searchButton.addEventListener('click', function () {
  const searchQuery = searchInput.value.toLowerCase()

  arrOfBooks = arrOfBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery) ||
      book.author[0].toLowerCase().includes(searchQuery) ||
      book.subject[0].toLowerCase().includes(searchQuery)
  )

  renderBookshelf()
})
