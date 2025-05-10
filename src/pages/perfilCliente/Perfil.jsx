import { Link } from "react-router-dom"
import "./perfil.css"

export default function Perfil() {
  return (
    <main className="contenedor-perfil">
        <section className='info-cliente'>
            <div className="contenedor-foto-perfil">
                <img className="foto-perfil" src="/perfiles/jack-el-destripador.jpg" alt="" />
                <h3 className="nombre-perfil">Nombre</h3>
            </div>
            <p className="descripcion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam quia doloremque vitae consectetur sint voluptatem 
                reiciendis facere voluptatibus tenetur, mollitia vel sequi quas 
                autem facilis pariatur voluptatum magnam neque similique.
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam quia doloremque vitae consectetur sint voluptatem 
                reiciendis facere voluptatibus tenetur.
            </p>
        </section>
        <section className="regresar-a-lista">
          <Link to="/clientes">Listado Clientes</Link>
        </section>

    </main>
  )
}
