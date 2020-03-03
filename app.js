//Book class: rapresents a BOOK

//start to be in use when we add a book
//constructor method runs when we add a book
//assign it the property(title,author and isbn) of that object using this
class Book {
  constructor(title, author, isbn){
  this.title = title
  this.author = author
  this.isbn = isbn 
  
  }
}

// will class contain few methods 
//add,dipslay,remove book,show alert
//UI class: handle UI tasks
class UI {
static displayBooks(){
  
const books = Store.getBooks()


// o function(book)
books.forEach((book) => UI.addBookToList(book))

//array set books to the array loop through ,call the method 
//an passing book 
}
 //create the table row element tr tag
  //to put in the tbody so #book-list  
//get.element is the same

static addBookToList(book){
const list = document.querySelector('#book-list')

const row = document.createElement('tr')

row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
`
list.appendChild(row)
  }

static showAlert(message, className){
  const div = document.createElement('div')
  div.className = `alert alert-${className}`
  div.appendChild(document.createTextNode(message))
  const container = document.querySelector('.container')
  const form = document.querySelector('#book-form')
  container.insertBefore(div, form)

  //vanish in 3 sec
  setTimeout(() => document.querySelector('.alert').remove(),4000) 

  
}


  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

static deleteBook(el) {
  if(el.classList.contains('delete'))
  el.parentElement.parentElement.remove()
 }
}

class Store{
  static getBooks(){
let books
if(localStorage.getItem('books') === null){
  books = []
} else {
  books = JSON.parse(localStorage.getItem('books'))
}
return books
  }
  static addBook(book){
  const books = Store.getBooks()
  books.push(book)
  localStorage.setItem('books', JSON.stringify(books))
  }

  static removeBook(isbn){
   const books = Store.getBooks()

   books.forEach((book, index) => {
   if(book.isbn === isbn){
   books.splice(index, 1)
    }
   } )

   localStorage.setItem('books', JSON.stringify(books))
  }
}


//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

 //to submit the form and add the book to the list 
 //should make it take all the text ad to the book-form
 //and make it add to the book-list
//Event: Add a book
document.querySelector('#book-form').addEventListener('submit',(e)=> {
   e.preventDefault()
   //get form values
   const title = document.querySelector('#title').value
   const author = document.querySelector('#author').value
   const isbn = document.querySelector('#isbn').value

//validate 
if (title === '' || author === '' || isbn === '') {
  UI.showAlert('Please fill in all the fields','warning')
} else {
  //Instatiate book
   const book = new Book(title, author, isbn)

   UI.addBookToList(book)

//add book to store

Store.addBook(book)



   //clear fields

//Show success message
UI.showAlert('Book Added', 'success')
   UI.clearFields()
   }
 })
//remove book from the list
document.querySelector('#book-list').addEventListener('click', (e)=>{
  UI.deleteBook(e.target)

//remove book from locale store
Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

  UI.showAlert('Book Removed', 'primary')
})
//Store class : Handle Storage


