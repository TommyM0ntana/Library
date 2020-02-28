//Book Class : rappresent a Book
//creating a book whit the method 
class Book {
  constructor(title, author, isbn) {
    //passing all the paramethers asign it to the property of the object 
    //using this. will set the title whatever the title is set to
this.title = title 
this.author = author
this.isbn = isbn
  }
}


//UI Class: Handle UI Tasks

class UI {
static displayBooks() {
//hard coded array of books put it in the variable called StoredBooks
//pretend that is a local storage
const StoredBooks = [
  { 
    title:  'Functional Programming',
    author: 'Sarah Uryelah',
    isbn:   '3881137078'
  },
  {
    title:  'BackEnd Tips',
    author: 'Abiodun Ajidade',
    isbn:   '377263849'

  }
]
//books variable 
const books = StoredBooks
 
//and then we wanna call the method addBookToList to list to UI class
//loops throught all the array using the arrow Function whit the each method 
books.forEach((book) => UI.addBookToList(book))
  }
//creating a method to add a book to the list
static addBookToList(book){
//create the row to put it into the tbody whit the id of book-list
// get element also document.getElement
const list = document.querySelector('#book-list')
//create a table row element to insert the tr tag in there
const row = document.createElement('tr')
//add the colons using back ticks
row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
`;

//we have our list tooked from the DOM and we created new row
//now we have to append to the row to the list


//should call displayBooks loop and add each one to the list 
list.appendChild(row)

  }
}

//Store Class: Handles Storage

//Event: Display Books


//soon as the DOM loades then we are gonna call UI displaybooks
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Event: Add a book
//to submit the book-form and add book to the list
//we already have displayBooks from the 
//we doing that taking it by id on this case #book-form
//arrow function whit un event paramether
document.querySelector('#book-form').addEventListener('submit', (e) =>{


  //prevet the submit


  e.preventDefault()
  //get book-form values so .value


  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const isbn = document.querySelector('#isbn').value

const book = new Book(title, author, isbn)

//instantiate books

//Add book to list

UI.addBookToList(book)


})


//Event:remove a book