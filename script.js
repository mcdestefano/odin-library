const myLibrary = [];

const library = document.querySelector('.library');
const newButton = document.querySelector('.new');
const form = document.querySelector('.book-form');

newButton.addEventListener('click', () => {
  form.style.visibility = 'visible';
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
  myLibrary.forEach((book) => {
    const eBook = document.createElement('div');
    eBook.classList.add('book');
    eBook.textContent = book.info();
    library.appendChild(eBook);
  });
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
