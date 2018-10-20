import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf';
import Search from './Search';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  
  state = {
    books : []
  }

  addNewBooks = (book, shelf) => {
    book.shelf = shelf;    
    this.setState((state) => {
    state.books.push(book);
    console.log(state);
      return {
        books : state.books
      }
    });
  }

  changeShelf = (book, value) => {
    this.setState((state) => {
      let newState = state.books.map((b) => {
        if(b === book){
          b.shelf = value;
        }
        return b;
      });
      return {
        books : newState
      }   
    });
    BooksAPI.update(book, value);
  }

  filterBooks(books, shelf) {
    console.log(books);
    return books.filter((book) => book.shelf.toLowerCase() === shelf);
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books : books });
    });
  }

  render() {
    let allBooks = this.state.books;
    let shelves = ["Currently Reading", "Want To Read", "Read"];
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search books={this.state.books} changeShelf={this.addNewBooks}/>
        )} />
          
         <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  shelves.map((shelf) => {
                    return <Bookshelf key={shelf} shelfName={shelf} changeShelf={this.changeShelf} books={this.filterBooks(allBooks, shelf.split(' ').join('').toLowerCase())} />
                  })
                }
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
         )} />
      </div>
    )
  }
}

export default BooksApp
