import BuscarCliente from "../pages/buscarCliente/BuscarCliente"
import BuscarProducto from "../pages/buscarProducto/BuscarProducto"
import Productos from "../pages/productos/Productos"
import Clientes from "../pages/clientes/Clientes"
import Perfil from "../pages/perfilCliente/Perfil"
import VistaProducto from "../pages/vistaProducto/VistaProducto"
export let enrutador = [
    {
        path: '/',
        element: <BuscarCliente />
    },
    {
        path: '/buscar-producto',
        element: <BuscarProducto />
    },
    {
        path: '/productos',
        element: <Productos />
    },
    {
        path: '/clientes',
        element: <Clientes />
    },
    {
        path: '/perfil',
        element: <Perfil />
    },
    {
        path: '/vista-producto',
        element: <VistaProducto />
    }
    
]