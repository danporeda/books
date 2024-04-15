import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ onEdit, book, onDelete }) {
  const [showEdit, setshowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setshowEdit(!showEdit)
  };

  const handleSubmit = (id, newTitle) => {
    setshowEdit(false);
    onEdit(id, newTitle)
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book}/>;
  }

  return <div className="book-show">
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