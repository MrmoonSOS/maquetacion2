import { useState, useEffect } from "react";
import CardEncontrado from "../../componentes/cardEncontrado/CardEncontrado";
import "./buscarComic.css";
import { Link } from "react-router-dom";
let apiComics = "http://localhost:3001/comics";

export default function BuscarComic() {
  const [getNombre, setNombre] = useState("");
  const [comic, setComic] = useState([]);
  const [buscoComic, setbuscoComic] = useState(false);

  function getComic() {
    fetch(apiComics)
      .then((response) => response.json())
      .then((data) => setComic(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getComic();
  }, []);

  function BuscarComic() {
    let comicEncontrado = comic.filter(
      (comic) => getNombre == comic.nombre
    );
    return comicEncontrado;
  }

  function mostrarComicEncontrados() {
    setbuscoComic(true)
  }
  return (
    <main className="contenedor">
      <section className="form-container">
        <div className="logo-container">Buscar Comic</div>
        <form className="form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              onChange={(e) => setNombre(e.target.value.toLowerCase().trim())}
              type="text"
              name="nombre"
              placeholder="Escribe el nombre"
              required
            />
          </div>
          <button
            className="form-submit-btn"
            type="button"
            onClick={mostrarComicEncontrados}
          >
            Buscar
          </button>
        </form>
        <p className="signup-link">
          <Link to="/buscar-producto" className="signup-link link">
            {" "}
            Buscar Producto
          </Link>
        </p>
      </section>
      <section className="comics-encontrados">
        <h2>Comics encontrados</h2>
        {
        buscoComic ? BuscarComic().map((comicEncontrado) => (
              <section
                key={`cliente-${comicEncontrado.id}`}
                className="comic-card"
              >
                <CardEncontrado
                  nombre={comicEncontrado.nombre}
                  img={comicEncontrado.img1}
                  apellido={comicEncontrado.apellido}
                  id={comicEncontrado.id}
                  redireccion="/perfil"
                />
              </section>
            ))
          : <p>Ingresa el nombre del comic que quieras encontrar.</p>}
        <section className="ver-todos">
          <Link to="/comics">ver todos</Link>
        </section>
      </section>
    </main>
  );
}
