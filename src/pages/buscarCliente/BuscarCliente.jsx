import React from "react";
import CardEncontrado from "../../componentes/cardEncontrado/CardEncontrado";
import "./buscarCliente.css";
import { Link } from "react-router-dom";
export default function BuscarCliente() {
  return (
    <main className="contenedor">
      <section className="form-container">
        <div className="logo-container">Buscar cliente</div>
        <form className="form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Escribe el nombre"
              required
            />
          </div>
          <button className="form-submit-btn">Buscar</button>
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
        <section>
          <CardEncontrado nombre={"nombre"} img={""} />
        </section>
        <section className="ver-todos">
          <Link to="/clientes">ver todos</Link>
        </section>
      </section>
    </main>
  );
}
