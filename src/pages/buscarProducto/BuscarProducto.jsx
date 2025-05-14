import { useState, useEffect } from "react";
import CardEncontrado from "../../componentes/cardEncontrado/CardEncontrado";
import "./buscarProducto.css";
import { Link } from "react-router-dom";
let apiProductos = "http://localhost:3001/productos";

export default function BuscarProducto() {
  const [getNombre, setNombre] = useState("");
  const [productos, setProductos] = useState([]);
  const [buscoProducto, setbuscoProducto] = useState(false);

  function getProductos() {
    fetch(apiProductos)
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getProductos();
  }, []);

  function buscarProducto() {
  // Si no hay término de búsqueda, retornar array vacío
  if (!getNombre || getNombre.trim() === '') return [];
  
  const terminoBusqueda = getNombre.toLowerCase().trim();
  
  return productos.filter(producto => {
    // Verificar que el producto tenga nombre
    if (!producto.nombre || typeof producto.nombre !== 'string') return false;
    
    // Búsqueda insensible a mayúsculas/minúsculas y parcial
    return producto.nombre.toLowerCase().includes(terminoBusqueda);
  });
}

  function mostrarProductosEncontrados() {
    setbuscoProducto(true);
  }

  return (
    <main className="contenedor">
      <section className="form-container">
        <div className="logo-container">Buscar Producto</div>
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
            onClick={mostrarProductosEncontrados}
          >
            Buscar
          </button>
        </form>
        <p className="signup-link">
          <Link to="/" className="signup-link link">
            {" "}
            Buscar Cliente
          </Link>
        </p>
      </section>
      <section className="producto-encontrados">
        <h2>Productos encontrados</h2>
        {buscoProducto ? (
          buscarProducto().map((productoEncontrado) => (
            <section
              key={`cliente-${productoEncontrado.id}`}
              className="cliente-card"
            >
              <CardEncontrado
                nombre={productoEncontrado.nombre}
                img={productoEncontrado.img1}
                id={productoEncontrado.id}
                redireccion="/vista-producto"
              />
            </section>
          ))
        ) : (
          <p>Ingresa el nombre del producto que quieras encontrar.</p>
        )}
        <section className="ver-todos">
          <Link to="/productos">ver todos</Link>
        </section>
      </section>
    </main>
  );
}
