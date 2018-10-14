import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
	
	render() {
		let shelfName = this.props.shelfName;
		let shelfBooks = this.props.books;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title"> {shelfName} </h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
					{ shelfBooks.length > 0 && shelfBooks.map((book, index) => (
						<li key={index}>
								<Book book={book} shelf={shelfName} author={book.authors.join(', ')} changeShelf={this.props.changeShelf} style={{ width: 128, height: 192, backgroundImage: ("url(" + book.imageLinks.thumbnail + ")")}} />
						</li>
					))}
					</ol>
				</div>
			</div>
		)
	}
}

export default Bookshelf
