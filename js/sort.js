const sortButton = document.querySelector('.sort-button')

const sortButtonContainer = document.querySelector('sort-button-container')
const navbar = document.querySelector('.navbar')

const topicContainer = document.createElement('section')

// creates dropdown options
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

// creates and displays sropbown options when "sort books by..." button is clicked
sortButton.addEventListener('click', function () {
  sortButton.remove()
  navbar.prepend(sortButton)
  // disables sort button
  sortButton.disabled = !sortButton.disabled

  // appends sort by buttons to main sort by button
  sortButton.after(topicContainer)

  topicContainer.append(
    ascendTitleButton,
    descendTitleButton,
    ascendAuthorButton,
    descendAuthorButton,
    sortByTopicsButton
  )

  console.log(sortButton)

  topicContainer.style.display = 'flex'
  topicContainer.style.flexDirection = 'column'
})

// removes all dropdown sort options
function removeSort() {
  ascendTitleButton.remove()
  descendTitleButton.remove()
  ascendAuthorButton.remove()
  descendAuthorButton.remove()
  sortByTopicsButton.remove()
}

function toggleSort() {
  // TODO: does not work
  // when sort by option clicked, sort button becomes clickable again
  // sortButton.disabled = false
  // sortButton.setAttribute('disabled', 'false')
}

// sorts by title ascending
ascendTitleButton.addEventListener('click', function () {
  console.log('A to z Title Button')
  arrOfBooks = arrOfBooks.sort((a, b) => (a.title < b.title ? -1 : 1))
  renderBookshelf()
  removeSort()
  sortButton.remove()
  navbar.prepend(sortButton)
  sortButton.removeAttribute('disabled')
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

// sort button style
sortButton.style.display = 'flex'
sortButton.style.flexDirection = 'column'
sortButton.style.border = '1px solid red'

// sort dropdown option style
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
  element.style.textTransform = 'uppercase'
})
