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
    subject.style.textTransform = 'uppercase'

    // creates card navbar container
    const cardNav = document.createElement('section')
    cardNav.classList.add('card-nav')

    // creates card body container
    const cardBody = document.createElement('section')
    cardBody.classList.add('card-body')

    // creates and sets toggle topic button on
    const toggleSubjectsOnButton = document.createElement('button')
    toggleSubjectsOnButton.textContent = 'Toggle topics '
    toggleSubjectsOnButton.classList.add('toggle-topics')

    // creates and sets toggle topic button off
    const toggleSubjectsOffButton = document.createElement('button')
    toggleSubjectsOffButton.textContent = 'Toggle Author'
    toggleSubjectsOffButton.classList.add('toggle-topics')

    toggleSubjectsOnButton.addEventListener('click', function () {
      // remove elements
      author.remove()
      toggleSubjectsOnButton.remove()

      // append elements
      cardNav.append(language, toggleSubjectsOffButton, favBook)
      cardBody.append(subject)
      bookCard.append(cardNav, cardBody)
    })

    toggleSubjectsOffButton.addEventListener('click', function () {
      // remove elements
      subject.remove()
      toggleSubjectsOffButton.remove()

      // append elements
      cardNav.append(language, toggleSubjectsOnButton, favBook)
      cardBody.append(author)
      bookCard.append(cardNav, cardBody)
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
      'clicked heart'
      book.isFavorite = !book.isFavorite
      favBook.textContent = book.isFavorite ? '♥' : '♡'
      updateFavBookCount()
    })

    /**
     * updates favorite book counter
     */
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

    // appends book card elements to book card
    cardNav.append(language, toggleSubjectsOnButton, favBook)
    cardBody.append(image, title, author)
    bookCard.append(cardNav, cardBody)

    return bookCard
  })

  // selects and replaces main with rendered book elements
  const main = document.querySelector('main')
  main.replaceChildren(...arrOfBooksCreateDOMElements)
}

renderBookshelf()
