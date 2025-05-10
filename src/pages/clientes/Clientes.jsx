import Card from '../../componentes/card/Card'
import { Link } from 'react-router-dom'
import "./clientes.css"

export default function Clientes() {
  return (
    <main className='contenedro-clientes'>
        <Card nombre="simon" img="/perfiles/jack-el-destripador.jpg" ciudad="Caracas" direccion="/perfil"/>
        <Card nombre="simon" img="/perfiles/jack-el-destripador.jpg" ciudad="Caracas" direccion="/perfil"/>
        <Card nombre="simon" img="/perfiles/jack-el-destripador.jpg" ciudad="Caracas" direccion="/perfil"/>
        <Card nombre="simon" img="/perfiles/jack-el-destripador.jpg" ciudad="Caracas" direccion="/perfil"/>
        <Card nombre="simon" img="/perfiles/jack-el-destripador.jpg" ciudad="Caracas" direccion="/perfil"/>
        <Card nombre="simon" img="/perfiles/jack-el-destripador.jpg" ciudad="Caracas" direccion="/perfil"/>
        <Card nombre="simon" img="/perfiles/jack-el-destripador.jpg" ciudad="Caracas" direccion="/perfil"/>
        <Card nombre="simon" img="/perfiles/jack-el-destripador.jpg" ciudad="Caracas" direccion="/perfil"/>
        <Card nombre="simon" img="/perfiles/jack-el-destripador.jpg" ciudad="Caracas" direccion="/perfil"/>
        <Card nombre="simon" img="/perfiles/jack-el-destripador.jpg" ciudad="Caracas" direccion="/perfil"/>
        <div className='regresar-home'>
            <Link to="/">Home</Link>
        </div>
    </main>
  )
}