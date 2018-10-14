import React, { Component } from 'react';

class Book extends Component {

	render() {
		let title = this.props.book.title;
		let author = this.props.author;
		let style = this.props.style; 
		let splitShelfName = this.props.shelf.split(' ');
		let first = splitShelfName.shift().toLowerCase();
		let others = splitShelfName.join('');
		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={ style }></div>
					<div className="book-shelf-changer">
						<select value={first+others} onChange={(e) => this.props.changeShelf(this.props.book, e.target.value)}>
							<option value="move" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want To Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{author}</div>
			</div>
		)
	}
}

export default Book
