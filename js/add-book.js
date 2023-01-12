const addBookButton = document.querySelector('.add-book-button')

// when add book buton clicked...
addBookButton.addEventListener('click', function () {
  addBook()
})

/**
 * adds book to bookshelf based on user input
 */
function addBook() {
  const titleInput = document.querySelector('.add-title-input')
  const authorInput = document.querySelector('.add-author-input')
  const languageInput = document.querySelector('.add-language-input')
  const topicsInput = document.querySelector('.add-topics-input')

  //creates a new book object using user input values
  const newBookObject = {
    author: [authorInput.value],
    language: languageInput.value,
    subject: [topicsInput.value],
    title: titleInput.value,
  }

  // add new book object to beginning of books array
  arrOfBooks.unshift(newBookObject)

  /**
   * removes all children nodes of parent
   */
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  //removes all children in "book-list"
  const bookList = document.querySelector('.book-list')
  removeAllChildNodes(bookList)

  renderBookshelf(arrOfBooks)
}
