import { useState, useContext } from 'react';
import BooksContext from '../context/books';
import BookEdit from './BookEdit';

function BookShow({ onEdit, book }) {
  const [showEdit, setshowEdit] = useState(false);
  const { deleteBookById, editBookById } = useContext(BooksContext);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setshowEdit(!showEdit)
  };

  const handleSubmit = () => {
    setshowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book}/>;
  }

  return <div className="book-show">
    <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
    <div>{content}</div>
    <div className="actions">
      <button className="edit" onClick={handleEditClick}>
        Edit
      </button>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
    
  </div>;
}
export default BookShow;