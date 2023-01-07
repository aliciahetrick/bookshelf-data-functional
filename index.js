let arrOfBooks = []

/**
 * creates instances of every book using book-data.js
 */
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

/**
 * returns the book card elements and renders them to a bookshelf
 */
function renderBookshelf() {
  const arrOfBooksCreateDOMElements = arrOfBooks.map((book) => {
    const bookCard = document.createElement('section')
    bookCard.classList.add('book-card')

    // creates and sets book title
    const title = document.createElement('p')
    title.textContent = book.title
    title.classList.add('book-title')
    const slicedTitle = document.createElement('p')
    slicedTitle.textContent = `${book.title.slice(0, 50)}...`
    slicedTitle.classList.add('book-title')

    // creates and sets book image
    const image = document.createElement('img')
    image.src = 'book.png'
    image.classList.add('book-image')

    // creates and sets book author
    const author = document.createElement('p')
    author.textContent = book.author
    author.classList.add('book-author')

    // creates and sets book topics
    const subject = document.createElement('p')
    subject.textContent = `Topics: ${book.subject}`
    subject.classList.add('book-genre')

    // creates toggle topic buttton
    const toggleSubjectsOnButton = document.createElement('button')
    toggleSubjectsOnButton.textContent = 'Toggle topics '
    toggleSubjectsOnButton.classList.add('toggle-topics')

    const toggleSubjectsOffButton = document.createElement('button')
    toggleSubjectsOffButton.textContent = 'Toggle book '
    toggleSubjectsOffButton.classList.add('toggle-topics')

    toggleSubjectsOnButton.addEventListener('click', function () {
      slicedTitle.remove()
      image.remove()
      author.remove()

      toggleSubjectsOnButton.remove()

      bookCard.append(toggleSubjectsOffButton)
      bookCard.append(title, subject)
    })

    toggleSubjectsOffButton.addEventListener('click', function () {
      toggleSubjectsOffButton.remove()

      bookCard.append(toggleSubjectsOnButton)
      bookCard.append(toggleSubjectsOnButton, slicedTitle, image, author)

      subject.remove()
      title.remove()
    })

    // creates and sets book language
    const language = document.createElement('p')
    language.textContent = book.language
    language.classList.add('book-language')

    // creates and renders favorite button
    const favBook = document.createElement('p')
    favBook.classList.add('fav-book-heart-button')
    favBook.textContent = book.isFavorite ? '♥' : '♡'
    bookCard.append(favBook)

    // toggles favorite button
    favBook.addEventListener('click', () => {
      book.isFavorite = !book.isFavorite
      favBook.textContent = book.isFavorite ? '♥' : '♡'
      updateFavBookCount()
    })

    // appends book card elements to book card
    const cardNav = document.createElement('section')
    cardNav.classList.add('card-nav')
    cardNav.append(language, toggleSubjectsOnButton, favBook)
    bookCard.append(cardNav, image, slicedTitle, author)

    return bookCard
  })

  // selects and replaces main with rendered book elements
  const main = document.querySelector('main')
  main.replaceChildren(...arrOfBooksCreateDOMElements)
}

renderBookshelf()
