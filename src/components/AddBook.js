import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

function AddBook({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author };  
    addBook(newBook);  
    navigate('/');
  };
  

  return (
    <div>
      <h2>Ajouter un livre</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Auteur"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddBook;
