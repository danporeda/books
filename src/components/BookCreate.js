import { useState } from 'react';

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
  }

  return (
    <div>
      Add a Book
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default BookCreate;