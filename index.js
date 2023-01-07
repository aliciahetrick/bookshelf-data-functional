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
