import { useState, useEffect } from "react";
import Card from "../../componentes/card/Card";
import { Link } from "react-router-dom";
import "./clientesProductos.css"

export default function ClientesProductos({api, redireccion}) {
  const [elementos, setElementos] = useState([]);

  function getElementos() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setElementos(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getElementos();
  }, []);

  return (
    <>
      <section className="contenedor-cards">
      {elementos.map((elemento) => (
        <Card
          key={elemento.id}
          nombre={elemento.nombre}
          img={elemento.img1}
          ciudad={elemento.ciudad}
          precio={elemento.precio}
          redireccion={redireccion}
          api={api}
          id={elemento.id}
        />
      ))}
      </section>
      <div className="regresar-home">
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
