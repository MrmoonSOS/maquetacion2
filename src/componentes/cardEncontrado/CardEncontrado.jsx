import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
let apiClientes = "http://localhost:3001/clientes";
import "./cardEncontrado.css";
export default function CardEncontrado({ nombre, img, apellido, id }) {
  const [clientes, setClientes] = useState([]);

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

  const guardarClienteEnLocalStorage = () => {
    try {
      localStorage.setItem("cliente", JSON.stringify(buscarCliente()));
      console.log(`ID ${id} guardado en localStorage`);
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
          <button onClick={guardarClienteEnLocalStorage}>
            <Link to="/perfil">Ver</Link>
          </button>
        </section>
      </div>
    </div>
  );
}
