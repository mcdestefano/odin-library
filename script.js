const myLibrary = [];

const library = document.querySelector('.library');
const newButton = document.querySelector('.new');
const form = document.querySelector('.book-form');
const submitButton = document.querySelector('.submit');

newButton.addEventListener('click', () => {
  form.style.visibility = 'visible';
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const read = document.querySelector('#read');
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    read.checked
  );
  addBookToLibrary(newBook);
  displayBooks();
  form.style.visibility = 'hidden';
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (read) {
      return `${title} by ${author}, ${pages} pages, read.`;
    }
    return `${title} by ${author}, ${pages} pages, not read yet.`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  library.textContent = null;
  myLibrary.forEach((book) => {
    const spot = document.createElement('div');
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.textContent = 'Remove book from library';
    removeButton.addEventListener('click', () => {
      // should remove corresponding spot from DOM and book from library
    });
    const eBook = document.createElement('p');
    spot.classList.add('book');
    const num = myLibrary.indexOf(book);
    const label = 'book' + num;
    eBook.classList.add(label);
    eBook.textContent = book.info();
    spot.appendChild(eBook);
    spot.appendChild(removeButton);
    library.appendChild(spot);
  });
}

function removeBook(book) {
  const index = myLibrary.indexOf(book);
  myLibrary.splice(index, 1);
  displayBooks();
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const theGreatGatsby = new Book(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  208,
  false
);
const oneHundredYearsOfSolitude = new Book(
  'One Hundred Years Of Solitude',
  'Gabriel Garcia Marquez',
  448,
  false
);

addBookToLibrary(theHobbit);
addBookToLibrary(theGreatGatsby);
addBookToLibrary(oneHundredYearsOfSolitude);

console.log(theHobbit.info());

displayBooks();
