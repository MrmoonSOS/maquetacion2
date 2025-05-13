import ClientesProductos from "../../componentes/clientesProductos/ClientesProductos";
let apiProductos = "http://localhost:3001/productos";
import "./productos.css";

export default function Productos() {
  return (
    <main className='contenedro-productos'>
          <ClientesProductos api={apiProductos} redireccion="/vista-producto"/>
    </main>
  )
}
