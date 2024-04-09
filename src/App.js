import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log('nedd to add book with', title);
  }

  return (
    <BookCreate onCreate={createBook} />
  );

}

export default App;