import { Link } from "react-router-dom"
import "./perfil.css"

export default function Perfil() {
  let comic = JSON.parse(localStorage.getItem("comic"))

  return (
    <main className="contenedor-perfil">
        <section className='info-comic'>
            <div className="contenedor-foto-perfil">
                <img className="foto-perfil" src={comic.img1} alt="" />
                <h3 className="nombre-perfil">{comic.nombre}</h3>
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
          <Link to="/comics">Listado comics</Link>
        </section>

    </main>
  )
}
