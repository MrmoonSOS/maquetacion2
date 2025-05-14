import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
let apiClientes = "http://localhost:3001/clientes";
let apiProductos = "http://localhost:3001/productos"
import "./cardEncontrado.css";
export default function CardEncontrado({ nombre, img, apellido, id, redireccion }) {
  const [clientes, setClientes] = useState([]);
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

  function getClientes() {
    fetch(apiClientes)
      .then((response) => response.json())
      .then((data) => setClientes(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getClientes();
  }, []);

  function buscarCliente() {
    let cliente = clientes.find(
      (cliente) => id == cliente.id );
    return cliente;
  }

  function buscarProductos() {
    let producto = productos.find(
      (producto) => id == producto.id );
    return producto;
  }

  const guardarClienteProductoEnLocalStorage = () => {
    try {
      if (redireccion == "/perfil") {
        localStorage.setItem("cliente", JSON.stringify(buscarCliente()));
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
          <button onClick={guardarClienteProductoEnLocalStorage}>
            <Link to={redireccion}>Ver</Link>
          </button>
        </section>
      </div>
    </div>
  );
}
