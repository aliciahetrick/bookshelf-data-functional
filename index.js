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

    const comments = document.createElement('p')
    if (book.comments) {
      comments.textContent = `Comments: ${book.comments}`
    } else {
      book.comments = []
      comments.textContent = `Comments: none`
    }
    comments.classList.add('book-comments')

    const addCommentButton = document.createElement('button')
    addCommentButton.classList.add('add-comment-button')
    addCommentButton.textContent = 'Add Comment'

    // creates and sets comment new comment text area
    const textArea = document.createElement('textarea')
    textArea.setAttribute('maxlength', 280)

    const textAreaSubmitButton = document.createElement('button')
    textAreaSubmitButton.textContent = 'Send'

    // creates and sets book topics
    const subject = document.createElement('p')
    subject.textContent = `Topics: ${book.subject}`
    subject.classList.add('book-genre')
    subject.style.textTransform = 'uppercase'

    const cardLeft = document.createElement('section')
    cardLeft.classList.add('card-left')

    const cardRightContainer = document.createElement('section')
    cardRightContainer.classList.add('card-right-container')

    // creates card navbar container
    const cardRightNav = document.createElement('section')
    cardRightNav.classList.add('card-nav')

    // creates card body container
    const cardRightBody = document.createElement('section')
    cardRightBody.classList.add('card-body')

    // creates and sets toggle topic button on
    const toggleSubjectsOnButton = document.createElement('button')
    toggleSubjectsOnButton.textContent = 'Toggle topics '
    toggleSubjectsOnButton.classList.add('toggle-topics')

    // creates and sets toggle topic button off
    const toggleSubjectsOffButton = document.createElement('button')
    toggleSubjectsOffButton.textContent = 'Toggle Author'
    toggleSubjectsOffButton.classList.add('toggle-topics')

    addCommentButton.addEventListener('click', function () {
      language.remove()
      toggleSubjectsOnButton.remove()
      favBook.remove()
      title.remove()
      author.remove()
      comments.remove()

      addCommentButton.remove()

      cardRightBody.append(textArea, textAreaSubmitButton)
      bookCard.append(cardRightBody)

      textAreaSubmitButton.style.all = 'unset'
      textAreaSubmitButton.style.color = '#fff5fa'
      textAreaSubmitButton.style.backgroundColor = 'rgb(100, 118, 239)'
      textAreaSubmitButton.style.borderRadius = '1em'
      textAreaSubmitButton.style.padding = '0.5em'
      textAreaSubmitButton.style.paddingLeft = '3em'
      textAreaSubmitButton.style.paddingRight = '3em'
      textAreaSubmitButton.style.margin = '1em'
    })

    textAreaSubmitButton.addEventListener('click', function () {
      // removes elements from card
      textArea.remove()
      textAreaSubmitButton.remove()

      // adds new comment to corresponsing house comment array
      book.comments.push(` ${textArea.value}`)
      console.log(comments)

      //re-renders home cards
      renderBookshelf()

      console.log(comments)

      // appends the right home card nav information
      cardRightContainer.append(cardRightNav, cardRightBody)
      cardRightNav.append(language, toggleSubjectsOnButton, favBook)
      cardRightBody.append(title, author, comments, addCommentButton)
      bookCard.append(cardLeft, cardRightContainer)
    })

    toggleSubjectsOnButton.addEventListener('click', function () {
      // remove elements
      author.remove()
      toggleSubjectsOnButton.remove()

      // append elements

      cardLeft.append(image)
      cardRightContainer.append(cardRightNav, cardRightBody)
      cardRightNav.append(language, toggleSubjectsOffButton, favBook)
      cardRightBody.append(subject)
      bookCard.append(cardLeft, cardRightContainer)

      // styling
      subject.style.paddingLeft = '1em'
      subject.style.paddingRight = '1em'
    })

    toggleSubjectsOffButton.addEventListener('click', function () {
      // remove elements
      subject.remove()
      toggleSubjectsOffButton.remove()

      // append elements
      cardLeft.append(image)
      cardRightContainer.append(cardRightNav, cardRightBody)
      cardRightNav.append(language, toggleSubjectsOnButton, favBook)
      cardRightBody.append(title, author)
      bookCard.append(cardLeft, cardRightContainer)
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
    cardLeft.append(image)
    cardRightContainer.append(cardRightNav, cardRightBody)
    cardRightNav.append(language, toggleSubjectsOnButton, favBook)
    cardRightBody.append(title, author, comments, addCommentButton)
    bookCard.append(cardLeft, cardRightContainer)

    return bookCard
  })

  // selects and replaces main with rendered book elements
  const main = document.querySelector('main')
  main.replaceChildren(...arrOfBooksCreateDOMElements)
}

renderBookshelf()
