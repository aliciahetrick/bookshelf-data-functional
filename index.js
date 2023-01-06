let arrOfBooks = []

function createBooks() {
  for (let i = 0; i < bookData.length; i++) {
    let book = {
      author: bookData[i].author,
      language: bookData[i].language,
      subject: bookData[i].subject,
      title: bookData[i].title,
    }
    arrOfBooks.push(book)
  }
}

createBooks()

console.log(arrOfBooks)

// arrOfBooks.map(renderBooks)

function renderBook() {
  arrOfBooks.map((book) => {
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

    const bookList = document.createElement('section')
    bookList.append(bookCard)
    const main = document.querySelector('main')
    bookList.classList.add('book-list')
    main.append(bookList)

    return bookCard
  })
}

renderBook()
