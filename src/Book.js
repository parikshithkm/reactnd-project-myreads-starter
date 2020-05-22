import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookCover from './BookCover';
import BookDescription from './BookDescription';

class Book extends Component {
    changeShelf = (event) => {
        this.props.changeShelf(this.props.book, event.target.value);
    };
    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <BookCover book = {this.props.book} />
                        <div className="book-shelf-changer">
                            <select onChange={this.changeShelf} value = {this.props.book.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>    
                    </div>
                    <BookDescription book = {this.props.book} />
                </div>
            </li>
        )
    }
}

Book.propTypes = {
    book : PropTypes.object.isRequired,
    changeShelf : PropTypes.func.isRequired,
}
export default Book;
