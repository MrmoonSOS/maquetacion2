import { Link } from "react-router-dom";
import "./vistaProducto.css";

export default function VistaProducto() {
  let producto = JSON.parse(localStorage.getItem("producto"))
  return (
    <main className="producto-main">
      <section className="productos-img">
        <div>
          <img
            src={producto.img1}
            alt="Producto 1 - Vista frontal"
          />
        </div>
        <div>
          <img
            src={producto.img2}
            alt="Producto 1 - Vista lateral"
          />
        </div>
      </section>
      <section className="regresar-a-lista">
        <Link to="/productos">Listado Productos</Link>
      </section>
    </main>
  );
}
