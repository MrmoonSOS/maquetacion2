import React from "react";
import CardEncontrado from "../../componentes/cardEncontrado/CardEncontrado";
import "./buscarProducto.css";
import { Link } from "react-router-dom";
export default function BuscarProducto() {
  return (
    <main className="contenedor">
      <section className="form-container">
        <div className="logo-container">Buscar Producto</div>
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
          <button className="form-submit-btn">
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
        <section>
            <CardEncontrado nombre={"nombre"} img={""}/>
        </section>
        <section className="ver-todos">
          <Link to="/productos">ver todos</Link>
        </section>
      </section>
    </main>
  );
}