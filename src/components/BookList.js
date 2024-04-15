import BookShow from './BookShow';

function BookList({ onEdit, books, onDelete }) {
  const renderedBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}
export default BookList;