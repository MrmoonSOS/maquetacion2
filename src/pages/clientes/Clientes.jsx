import ClientesProductos from "../../componentes/clientesProductos/ClientesProductos";
let apiClientes = "http://localhost:3001/clientes";
import "./clientes.css";

export default function Clientes() {
  return (
    <main className="contenedor-clientes">
      <ClientesProductos api={apiClientes} redireccion="/perfil"/>
    </main>
  );
}
