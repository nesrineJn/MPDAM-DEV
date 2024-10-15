import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Atomic Habits', author: 'James Clear' },
    { id: 2, title: 'The Slight Edge', author: 'Jeff Olsen' },
    { id: 3, title: 'La Gloire de mon Père', author: 'Marcel Pagnol' },
    { id: 4, title: 'Les Misérables', author: 'Victor Hugo' },
  ]);

  const addBook = (newBook) => {
    const lastId = books.length > 0 ? Math.max(...books.map(book => book.id)) : 0;
    const bookWithId = { ...newBook, id: lastId + 1 };
    setBooks([...books, bookWithId]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ListBooks books={books} deleteBook={deleteBook} />} />
          <Route path="/add" element={<AddBook addBook={addBook} />} />
          <Route path="/edit/:id" element={<EditBook books={books} updateBook={updateBook} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
