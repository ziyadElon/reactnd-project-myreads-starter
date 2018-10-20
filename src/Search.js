import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book' 
class Search extends Component {
	
	state = {
		query : '',
		books : [],
	}

	filterSearchResults = (e) => {
		let libraryBooks = this.props.books;
		let libraryBookTitles = this.props.books.map((book) => book.title);
		let searchTerm = e.target.value.trim();
		this.setState({ query: searchTerm });
		this.clearSearchResults();
		if(this.state.query){
			BooksAPI.search(this.state.query.trim())
			.then((bookList) => {
				if(bookList.length > 0) {
					let newList = bookList.map((book) => {
						if(libraryBookTitles.includes(book.title)){
							let copy = libraryBooks.filter((b) => b.title === book.title);
							book.shelf = copy[0].shelf;
						}
						else {
							book.shelf = 'none';							
						}
						return book;
					});
					this.setState({ books: newList });
				}
				else {
					this.setState({ books : [] });
				}
			});
		}
		else {
			this.setState({ books : [] });
		}
	}

	clearSearchResults = () => {
		if(this.state.query === ''){
			this.setState({ books: [] });
			console.log(this.state.books);
		}
	}
	
	//searchTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						{/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
						<input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.filterSearchResults(event)}/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{ this.state.books.map((book) => {
							return book.authors && book.imageLinks && <Book key={book.id} book={book} shelf={book.shelf} author={book.authors.join(', ')} changeShelf={this.props.changeShelf} style={{ width: 128, height: 192, backgroundImage: ("url(" + book.imageLinks.thumbnail + ")")}}/>
						})}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search
