import { Link } from "react-router-dom";
import "./vistaProducto.css";

export default function VistaProducto() {
  return (
    <main className="producto-main">
      <section className="productos-img">
        <div>
          <img
            src="/productos/producto1/rem-1.jpg"
            alt="Producto 1 - Vista frontal"
          />
        </div>
        <div>
          <img
            src="/productos/producto1/rem-2.jpg"
            alt="Producto 1 - Vista lateral"
          />
        </div>
      </section>
      <section className="regresar-a-lista">
        <Link to="/productos">Listado Clientes</Link>
      </section>
    </main>
  );
}
