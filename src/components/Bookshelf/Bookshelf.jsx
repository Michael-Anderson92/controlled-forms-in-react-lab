import { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros', bookId: 1 },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis', bookId: 2 },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '', bookId: Number });

  function handleInputChange(event) {
    console.log(event)
    // const { name, value } = event.target;

    // Update the newBook state with the input field values
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    // Keeps page from refreshing upon submit
    event.preventDefault();
    // Add the new book to the books state
    setBooks([...books, newBook]);
    // Clear the input fields
    setNewBook({ title: '', author: '', bookId: Number });
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="Author"
          />
          <input
          type="number"
          name="bookId"
          value={newBook.bookId}
          onChange={handleInputChange}
          placeholder="Book Id"> 
          </input>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <p>{book.bookId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
