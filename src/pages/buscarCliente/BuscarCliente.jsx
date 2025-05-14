import { useState, useEffect } from "react";
import CardEncontrado from "../../componentes/cardEncontrado/CardEncontrado";
import "./buscarCliente.css";
import { Link } from "react-router-dom";
let apiClientes = "http://localhost:3001/clientes";

export default function BuscarCliente() {
  const [getNombre, setNombre] = useState("");
  const [clientes, setClientes] = useState([]);
  const [buscoClientes, setbuscoClientes] = useState(false);

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
    let clienteEncontrado = clientes.filter(
      (cliente) => getNombre == cliente.nombre
    );
    return clienteEncontrado;
  }

  function mostrarClientesEncontrados() {
    setbuscoClientes(true)
  }
  return (
    <main className="contenedor">
      <section className="form-container">
        <div className="logo-container">Buscar cliente</div>
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
            onClick={mostrarClientesEncontrados}
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
      <section className="clientes-encontrados">
        <h2>Clientes encontrados</h2>
        {
        buscoClientes ? buscarCliente().map((clienteEncontrado) => (
              <section
                key={`cliente-${clienteEncontrado.id}`}
                className="cliente-card"
              >
                <CardEncontrado
                  nombre={clienteEncontrado.nombre}
                  img={clienteEncontrado.img1}
                  apellido={clienteEncontrado.apellido}
                  id={clienteEncontrado.id}
                  redireccion="/perfil"
                />
              </section>
            ))
          : <p>Ingresa el nombre del cliente que quieras encontrar.</p>}
        <section className="ver-todos">
          <Link to="/clientes">ver todos</Link>
        </section>
      </section>
    </main>
  );
}
