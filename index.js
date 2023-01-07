let arrOfBooks = []

//generating the arrayOfBooks
function createBooks() {
  for (let i = 0; i < bookData.length; i++) {
    let book = {
      author: bookData[i].author,
      language: bookData[i].language,
      subject: bookData[i].subject,
      title: bookData[i].title,
      isFavorite: false,
    }
    arrOfBooks.push(book)
  }
}

createBooks()

//rendering the bookshelf
function renderBookshelf() {
  const arrOfBooksCreateDOMElements = arrOfBooks.map((book) => {
    const bookCard = document.createElement('section')
    bookCard.classList.add('book-card')

    //create and set book title
    const title = document.createElement('p')
    title.textContent = book.title
    title.classList.add('book-title')
    // console.log(title.textContent)

    //create and set book image
    const image = document.createElement('img')
    image.src = 'book.png'
    image.classList.add('book-image')

    //create and set book author
    const author = document.createElement('p')
    author.textContent = book.author
    author.classList.add('book-author')

    //create and set book genre
    const subject = document.createElement('p')
    subject.textContent = `Topics: ${book.subject}`
    subject.classList.add('book-genre')

    //create and set book language
    const language = document.createElement('p')
    language.textContent = book.language
    language.classList.add('book-language')

    //append book cards to bookCards section
    bookCard.append(language, title, image, author, subject)

    const favBook = document.createElement('p')
    favBook.classList.add('fav-book-heart-button')
    favBook.textContent = book.isFavorite ? '♥' : '♡'
    bookCard.prepend(favBook)

    favBook.addEventListener('click', () => {
      book.isFavorite = !book.isFavorite
      favBook.textContent = book.isFavorite ? '♥' : '♡'
      updateFavBookCount()
    })

    return bookCard
  })

  //select and replace main with book DOM elements
  const main = document.querySelector('main')
  main.replaceChildren(...arrOfBooksCreateDOMElements)
}

renderBookshelf()

//display and update favorit book count
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

// TODO:
// search using filter
const searchButton = document.querySelector('.search-button')

const searchInput = document.querySelector('.search-input')
searchButton.addEventListener('click', function () {
  console.log('Searching...')
  const searchQuery = searchInput.value.toLowerCase()
  // TODO:
  // add search for

  // try to return all filtered items using a loop instead of .filter
  // let filteredArr = []
  // for (const book of arrOfBooks) {
  //   if (book.title.toLowerCase().includes(searchQuery)) {
  //     filteredArr.push(book)
  //   } else if () {

  //   }
  //   console.log(filteredArr)
  // }

  // works
  arrOfBooks = arrOfBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery) ||
      book.author[0].toLowerCase().includes(searchQuery)
  )

  //does not work
  // for (let i = 0; i < book.subject.length; i ++) {
  //   book.subject[i].toLowerCase().includes(searchQuery)
  // }
  // book.subject.toLowerCase().includes(searchQuery)
  // )
  console.log(arrOfBooks)
  console.log(arrOfBooks[0].subject[0])

  renderBookshelf()
})

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

  // TODO:
  // Change dropdown to display column
  sortButton.style.display = 'flex'
  sortButton.style.flexDirection = 'column'
  sortButton.st

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

//once you click on
