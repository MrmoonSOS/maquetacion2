import ClientesProductos from "../../componentes/comicsProductos/ComicsProductos";
let apiComics = "http://localhost:3001/comics";
import "./comic.css";

export default function Comics() {
  return (
    <main className="contenedor-comic">
      <ClientesProductos api={apiComics} redireccion="/perfil"/>
    </main>
  );
}
