const sortDropdown = document.querySelector('.sort-dropdown')

// sorts books when dropdown option changed
sortDropdown.addEventListener('change', function () {
  // sorts by ascending title
  if (sortDropdown.value === 'ascending-title') {
    visibleBooks = visibleBooks.sort((a, b) => (a.title < b.title ? -1 : 1))
    arrOfBooks = arrOfBooks.sort((a, b) => (a.title < b.title ? -1 : 1))
    if (searchInput.value.length === 0) {
      renderBookshelf(arrOfBooks)
    } else {
      renderBookshelf(visibleBooks)
    }
    // sorts by descending title
  } else if (sortDropdown.value === 'descending-title') {
    visibleBooks = visibleBooks.sort((a, b) => (a.title > b.title ? -1 : 1))
    arrOfBooks = arrOfBooks.sort((a, b) => (a.title > b.title ? -1 : 1))
    if (searchInput.value.length === 0) {
      renderBookshelf(arrOfBooks)
    } else {
      renderBookshelf(visibleBooks)
    }
    // sorts by ascending author
  } else if (sortDropdown.value === 'ascending-author') {
    visibleBooks = visibleBooks.sort((a, b) => (a.author[0] < b.author[0] ? -1 : 1))
    arrOfBooks = arrOfBooks.sort((a, b) => (a.author[0] < b.author[0] ? -1 : 1))
    if (searchInput.value.length === 0) {
      renderBookshelf(arrOfBooks)
    } else {
      renderBookshelf(visibleBooks)
    }
    // sorts by descending author
  } else if (sortDropdown.value === 'descending-author') {
    visibleBooks = visibleBooks.sort((a, b) => (a.author[0] > b.author[0] ? -1 : 1))
    arrOfBooks = arrOfBooks.sort((a, b) => (a.author[0] > b.author[0] ? -1 : 1))
    if (searchInput.value.length === 0) {
      renderBookshelf(arrOfBooks)
    } else {
      renderBookshelf(visibleBooks)
    }
    // sorts by least topics
  } else if (sortDropdown.value === 'sort-by-least-topics') {
    visibleBooks = visibleBooks.sort((a, b) => (a.subject.length < b.subject.length ? -1 : 1))
    arrOfBooks = arrOfBooks.sort((a, b) => (a.subject.length < b.subject.length ? -1 : 1))
    if (searchInput.value.length === 0) {
      renderBookshelf(arrOfBooks)
    } else {
      renderBookshelf(visibleBooks)
    }
    // sorts by most topics
  } else if (sortDropdown.value === 'sort-by-most-topics') {
    visibleBooks = visibleBooks.sort((a, b) => (a.subject.length > b.subject.length ? -1 : 1))
    arrOfBooks = arrOfBooks.sort((a, b) => (a.subject.length > b.subject.length ? -1 : 1))
    if (searchInput.value.length === 0) {
      renderBookshelf(arrOfBooks)
    } else {
      renderBookshelf(visibleBooks)
    }
  }
})
