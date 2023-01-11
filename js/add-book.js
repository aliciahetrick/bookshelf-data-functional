const addBookButton = document.querySelector('.add-book-button')

addBookButton.addEventListener('click', function () {
  addBook()
})

function addBook() {
  const titleInput = document.querySelector('.add-title-input')
  const authorInput = document.querySelector('.add-author-input')
  const languageInput = document.querySelector('.add-language-input')
  const topicsInput = document.querySelector('.add-topics-input')

  const newBookObject = {
    author: [authorInput.value],
    language: languageInput.value,
    subject: [topicsInput.value],
    title: titleInput.value,
  }

  arrOfBooks.unshift(newBookObject)

  // removes all children nodes
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  //removes all children in "nook-list"
  const bookList = document.querySelector('.book-list')
  removeAllChildNodes(bookList)

  renderBookshelf(arrOfBooks)
}
