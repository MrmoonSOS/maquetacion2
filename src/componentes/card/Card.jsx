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
  const [clientes, setClientes] = useState([]);

  function getClientes() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setClientes(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getClientes();
  }, []);

  function buscarCliente() {
    let cliente = clientes.find((cliente) => id == cliente.id);
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
        <button onClick={guardarClienteEnLocalStorage}>Ver</button>
      </Link>
    </div>
  );
}
