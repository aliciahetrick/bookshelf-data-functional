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
    subject.textContent = `Genre: ${book.subject}`
    subject.classList.add('book-genre')

    //create and set book language
    const language = document.createElement('p')
    language.textContent = book.language
    language.classList.add('book-language')

    //append book cards to bookCards section
    bookCard.append(language, title, image, author, subject)

    const favBook = document.createElement('p')
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
// search box using filter

// const searchButton = document.querySelector('.search-button')

// searchButton.addEventListener('click', function () {
//   console.log('yay, I did it!')
//   filterBooks(arrOfBooks)
// })

// // function filterBooks(arrOfBooks) {
// //   const searchInput = document.querySelector('.search-input')
// //   arrOfBooks.filter(function book() {
// //     book.title.toLowerCase().includes(searchInput.value.toLowerCase())
// //   })
// // }

// const searchInput = document.querySelector('.search-input')

// const filterBooks = (arrayOfBooks) =>
//   arrayOfBooks.filter((book) => book.title.toLowerCase().includes(searchInput.value.toLowerCase()))

// SORTBY Dropdown Menu
// Options :  Sort by Title (Ascending & Descending),
//            Sort by Author: (Ascending & Descending),
//            Sort by number of topics
//            (5 total)
// Clicking on an option will .sort() the arrOfBooks

const sortButton = document.querySelector('.sort-button')
const sortButtonContainer = document.querySelector('sort-button-container')

// when click on sort button
// disable the sort button
// create 5 options that are buttons themself
sortButton.addEventListener('click', function () {
  console.log('clicked')
  sortButton.disabled = true

  sortButton.setAttribute('disabled', '')

  // const sortButtonContainer = document.querySelector('.sort-button-container')
  // const sortButton = document.querySelector('sort-button')
  // console.log(sortButtonContainer)
  // sortButton.setAttribute('disabled', '')

  const ascendTitleButton = document.createElement('button')
  const descendTitleButton = document.createElement('button')
  const ascendAuthorButton = document.createElement('button')
  const descendAuthorButton = document.createElement('button')
  const sortByTopicsButton = document.createElement('button')

  ascendTitleButton.textContent = 'title (A to Z)'
  descendTitleButton.textContent = 'title (Z to A)'
  ascendAuthorButton.textContent = 'author (A to Z)'
  descendAuthorButton.textContent = 'author (Z to A)'
  sortByTopicsButton.textContent = 'sort by most topics'

  // console.log(AscendTitleButton)
  console.log(sortButton)

  sortButton.append(
    ascendTitleButton,
    descendTitleButton,
    ascendAuthorButton,
    descendAuthorButton,
    sortByTopicsButton
  )

  ascendTitleButton.addEventListener('click', function () {
    console.log('A to z Title Button')
    arrOfBooks = arrOfBooks.sort((a, b) => (a.title < b.title ? -1 : 1))
    renderBookshelf()
  })
  descendTitleButton.addEventListener('click', function () {
    arrOfBooks = arrOfBooks.sort((a, b) => (a.title > b.title ? -1 : 1))
    renderBookshelf()
  })
  ascendAuthorButton.addEventListener('click', function () {
    console.log('A to Z Author Button')
    arrOfBooks = arrOfBooks.sort((a, b) => (a.author[0] < b.author[0] ? -1 : 1))
    renderBookshelf()
  })
  descendAuthorButton.addEventListener('click', function () {
    console.log('Z to A Author Button')
    arrOfBooks = arrOfBooks.sort((a, b) => (a.author[0] > b.author[0] ? -1 : 1))
    renderBookshelf()
  })
  sortByTopicsButton.addEventListener('click', function () {
    console.log('Sort By Topics')
    arrOfBooks = arrOfBooks.sort((a, b) => (a.subject.length > b.subject.length ? -1 : 1))
    renderBookshelf()
  })

  // //sortButton style

  sortButton.style.display = 'flex'
  sortButton.style.flex_direction = 'column'

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
    element.backgroundColor = 'rgb(100, 118, 239'
    element.fontFamily = 'raleway'
  })
  ascendTitleButton.style.all = 'unset'
  ascendTitleButton.style.color = 'rgb(231, 217, 249)'
  ascendTitleButton.backgroundColor = 'rgb(100, 118, 239'
  ascendTitleButton.fontFamily = 'raleway'

  // .sort-button {
  //   display: flex;
  //   flex-direction: column;

  //   all: unset;
  //   color: rgb(231, 217, 249);
  //   background-color: rgb(100, 118, 239);
  //   font-family: Raleway;
  //   font-weight: 600;
  //   font-size: 15px;
  //   text-transform: uppercase;
  // }
})
