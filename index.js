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

  const AscendTitleButton = document.createElement('button')
  const DescendTitleButton = document.createElement('button')
  const AscendAuthorButton = document.createElement('button')
  const DescendAuthorButton = document.createElement('button')
  const sortByTopicsButton = document.createElement('button')

  AscendTitleButton.textContent = 'title (A to Z)'
  DescendTitleButton.textContent = 'title (Z to A)'
  AscendAuthorButton.textContent = 'author (A to Z)'
  DescendAuthorButton.textContent = 'author (Z to A)'
  sortByTopicsButton.textContent = 'sort by most topics'

  // console.log(AscendTitleButton)

  sortButton.append(
    AscendTitleButton,
    DescendTitleButton,
    AscendAuthorButton,
    DescendAuthorButton,
    sortByTopicsButton
  )

  AscendTitleButton.addEventListener('click', function () {
    console.log('A to z Title Button')
    arrOfBooks = arrOfBooks.sort((a, b) => (a.title < b.title ? -1 : 1))
    renderBookshelf()
  })
  DescendTitleButton.addEventListener('click', function () {
    arrOfBooks = arrOfBooks.sort((a, b) => (a.title > b.title ? -1 : 1))
    renderBookshelf()
  })
  AscendAuthorButton.addEventListener('click', function () {
    console.log('A to Z Author Button')
    arrOfBooks = arrOfBooks.sort((a, b) => (a.author[0] < b.author[0] ? -1 : 1))
    renderBookshelf()
  })
  DescendAuthorButton.addEventListener('click', function () {
    console.log('Z to A Author Button')
    arrOfBooks = arrOfBooks.sort((a, b) => (a.author[0] > b.author[0] ? -1 : 1))
    renderBookshelf()
  })
  sortByTopicsButton.addEventListener('click', function () {
    console.log('Sort By Topics')
    arrOfBooks = arrOfBooks.sort((a, b) => (a.subject.length > b.subject.length ? -1 : 1))
    renderBookshelf()
  })
})
