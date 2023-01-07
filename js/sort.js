//sort books by dropdown
const sortButton = document.querySelector('.sort-button')
const sortButtonContainer = document.querySelector('sort-button-container')

// when clicking "sort books by" button
sortButton.addEventListener('click', function () {
  console.log('clicked')
  sortButton.disabled = true

  // disable button
  sortButton.setAttribute('disabled', '')

  // create dropdown options
  const ascendTitleButton = document.createElement('button')
  const descendTitleButton = document.createElement('button')
  const ascendAuthorButton = document.createElement('button')
  const descendAuthorButton = document.createElement('button')
  const sortByTopicsButton = document.createElement('button')

  // set text on dropdown button
  ascendTitleButton.textContent = 'title (A to Z)'
  descendTitleButton.textContent = 'title (Z to A)'
  ascendAuthorButton.textContent = 'author (A to Z)'
  descendAuthorButton.textContent = 'author (Z to A)'
  sortByTopicsButton.textContent = 'sort by most topics'

  // append sort by buttons to sort by button
  sortButton.append(
    ascendTitleButton,
    descendTitleButton,
    ascendAuthorButton,
    descendAuthorButton,
    sortByTopicsButton
  )

  function removeSort() {
    ascendTitleButton.remove()
    descendTitleButton.remove()
    ascendAuthorButton.remove()
    descendAuthorButton.remove()
    sortByTopicsButton.remove()
  }

  // sort by title ascending
  ascendTitleButton.addEventListener('click', function () {
    console.log('A to z Title Button')
    arrOfBooks = arrOfBooks.sort((a, b) => (a.title < b.title ? -1 : 1))
    renderBookshelf()
    removeSort()
    // TODO:
    // when sort by option clicked, sort button becomes clickable again
    // sortButton.disabled = false
    // sortButton.setAttribute('disabled', 'false')
  })

  // sort by title descending
  descendTitleButton.addEventListener('click', function () {
    arrOfBooks = arrOfBooks.sort((a, b) => (a.title > b.title ? -1 : 1))
    renderBookshelf()
    removeSort()
  })

  // sort by author ascending
  ascendAuthorButton.addEventListener('click', function () {
    console.log('A to Z Author Button')
    arrOfBooks = arrOfBooks.sort((a, b) => (a.author[0] < b.author[0] ? -1 : 1))
    renderBookshelf()
    removeSort()
  })

  // sort by author descending
  descendAuthorButton.addEventListener('click', function () {
    console.log('Z to A Author Button')
    arrOfBooks = arrOfBooks.sort((a, b) => (a.author[0] > b.author[0] ? -1 : 1))
    renderBookshelf()
    removeSort()
  })

  // sort by most topics
  sortByTopicsButton.addEventListener('click', function () {
    console.log('Sort By Topics')
    arrOfBooks = arrOfBooks.sort((a, b) => (a.subject.length > b.subject.length ? -1 : 1))
    renderBookshelf()
    removeSort()
  })

  // //sortButton style
  sortButton.style.display = 'flex'
  sortButton.style.flexDirection = 'column'

  let selectStyle = [
    ascendTitleButton,
    descendTitleButton,
    ascendAuthorButton,
    descendAuthorButton,
    sortByTopicsButton,
  ]

  selectStyle.map((element) => {
    element.style.all = 'unset'
    element.style.color = 'rgb(231, 217, 249)'
    element.style.backgroundColor = 'rgb(100, 118, 239'
    element.style.fontFamily = 'raleway'
    element.style.padding = '10px'
  })
})
