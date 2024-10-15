import { Link } from "react-router-dom";
import '../App.css'

function ListBooks({ books, deleteBook }) {
    return (
      <div className="container">
        <h1>Application de gestion des livres électroniques</h1>
        <Link to="/add">
          <button className="add">Ajouter un livre</button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Editer</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Link to={`/edit/${book.id}`}>
                    <button className="edit">Editer</button>
                  </Link>
                </td>
                <td>
                  <button className="delete" onClick={() => deleteBook(book.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ListBooks;