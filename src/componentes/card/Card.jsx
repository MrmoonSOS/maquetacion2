import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card({
  nombre,
  img,
  ciudad,
  precio,
  redireccion,
  api,
  id,
}) {
  const [comics, setComic] = useState([]);
  const [productos, setProductos] = useState([]);

  function getProductos() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getProductos();
  }, []);

  function getComic() {
    fetch(api)
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
        console.log(`ID ${id} guardado en localStorage comic`);
      }else{
        localStorage.setItem("producto", JSON.stringify(buscarProductos()));
        console.log(`ID ${id} guardado en localStorage producto`);
      }
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  };

  return (
    <div className="producto">
      <h3>{nombre}</h3>
      <img src={img} alt="" />
      <div className="producto-detalles">
        {ciudad && <p className="producto-ciudad">{ciudad}</p>}

        {precio && (
          <p className="producto-precio">
            {precio.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            })}
          </p>
        )}
      </div>
      <Link to={redireccion}>
        <button onClick={guardarComicProductoEnLocalStorage}>Ver</button>
      </Link>
    </div>
  );
}
