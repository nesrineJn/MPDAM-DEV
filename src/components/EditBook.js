import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditBook({ books, updateBook }) {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const book = books.find((b) => b.id === parseInt(id));
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
    }
  }, [id, books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook({ id: parseInt(id), title, author });
    navigate('/');
  };

  return (
    <div>
      <h2>Editer le livre</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default EditBook;
