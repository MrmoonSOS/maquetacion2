import React from "react";
import "./cardEncontrado.css";
import { Link } from "react-router-dom";
export default function CardEncontrado({ nombre, img }) {
  return (
    <div className="contenedor-card">
      <div className="encontrado">
        <section className="info">
          <img src={img} alt="" />
            <h3>{nombre}</h3>
        </section>
        <section className="boton">
          <Link>Ver</Link>
        </section>
      </div>
    </div>
  );
}
