const sortDropdown = document.querySelector('.sort-dropdown')

// sorts books when dropdown option selected
sortDropdown.addEventListener('change', function () {
  if (sortDropdown.value === 'ascending-title') {
    arrOfBooks = arrOfBooks.sort((a, b) => (a.title < b.title ? -1 : 1))
    renderBookshelf()
  } else if (sortDropdown.value === 'descending-title') {
    arrOfBooks = arrOfBooks.sort((a, b) => (a.title > b.title ? -1 : 1))
    renderBookshelf()
  } else if (sortDropdown.value === 'ascending-author') {
    arrOfBooks = arrOfBooks.sort((a, b) => (a.author[0] < b.author[0] ? -1 : 1))
    renderBookshelf()
  } else if (sortDropdown.value === 'descending-author') {
    arrOfBooks = arrOfBooks.sort((a, b) => (a.author[0] > b.author[0] ? -1 : 1))
    renderBookshelf()
  } else if (sortDropdown.value === 'sort-by-least-topics') {
    arrOfBooks = arrOfBooks.sort((a, b) => (a.subject.length < b.subject.length ? -1 : 1))
    renderBookshelf()
  } else if (sortDropdown.value === 'sort-by-most-topics') {
    arrOfBooks = arrOfBooks.sort((a, b) => (a.subject.length > b.subject.length ? -1 : 1))
    renderBookshelf()
  }
})
