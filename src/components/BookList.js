import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList({ onEdit, books, onDelete }) {
  const value = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete} />;
  });

  return <div className="book-list">{value}
  {renderedBooks}</div>;
}

export default BookList;