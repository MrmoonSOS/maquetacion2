import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
let apiComics = "http://localhost:3001/comics";
let apiProductos = "http://localhost:3001/productos"
import "./cardEncontrado.css";
export default function CardEncontrado({ nombre, img, apellido, id, redireccion }) {
  const [comics , setComic] = useState([]);
  const [productos, setProductos] = useState([]);

  function getProductos() {
    fetch(apiProductos)
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getProductos();
  }, []);

  function getComic() {
    fetch(apiComics)
      .then((response) => response.json())
      .then((data) => setComic(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getComic();
  }, []);

  function buscarComic() {
    let comic = comics.find(
      (comic) => id == comic.id );
    return comic;
  }

  function buscarProductos() {
    let producto = productos.find(
      (producto) => id == producto.id );
    return producto;
  }

  const guardarComicProductoEnLocalStorage = () => {
    try {
      if (redireccion == "/perfil") {
        localStorage.setItem("comic", JSON.stringify(buscarComic()));
        console.log(`ID ${id} guardado en localStorage cliente`);
      }else{
        localStorage.setItem("producto", JSON.stringify(buscarProductos()));
        console.log(`ID ${id} guardado en localStorage producto`);
      }
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  };

  return (
    <div className="contenedor-card">
      <div className="encontrado">
        <section className="info">
          <img src={img} alt="" />
          <h3>
            {nombre} {apellido}
          </h3>
        </section>
        <section className="boton">
          <button onClick={guardarComicProductoEnLocalStorage}>
            <Link to={redireccion}>Ver</Link>
          </button>
        </section>
      </div>
    </div>
  );
}
