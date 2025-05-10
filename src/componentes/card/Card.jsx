import { Link } from 'react-router-dom'
import "./card.css"

export default function CardProducto({nombre, img, ciudad, direccion}) {
  return (
    <div className='producto'>
        <h3>{nombre}</h3>
        <img src={img} alt="" />
        <p className='ciudad'>ciudad: {ciudad}</p>
        <Link to={direccion}>Ver</Link>
    </div>
  )
}
