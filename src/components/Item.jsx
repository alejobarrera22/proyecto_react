import { Link } from "react-router-dom"
import "../styles/card.css"

const Item = ({item}) => {
    return (
        <>
            <div className="card">
                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                    <img src={item.imagen} className="card-img-top" alt={item.titulo}/>
                    <div className="card-body">
                        <h3>{item.titulo}</h3>
                        <p className="card-text"> <span className="text-secondary">{item.descripcion}</span> <br /> ${item.precio} </p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Item