import Card from '../../componentes/card/Card'
import { Link } from 'react-router-dom'
import "./productos.css"

export default function Productos() {
  return (
    <main className='contenedro-productos'>
        <Card nombre="Rem" img="/productos/producto1/rem-1.jpg" ciudad="Bogota" direccion="/vista-producto"/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <div className='regresar-home'>
            <Link to="/">Home</Link>
        </div>
    </main>
  )
}
