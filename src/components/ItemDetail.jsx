//import { useEffect, useState } from "react";
import ItemCount from "./itemCount";

const ItemDetail = ({producto}) => {
    //const [setItem] = useState({});

    //useEffect(() => {
    //    setItem(producto);
    //}, [producto]);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-3">
                    <img src={producto.imagen} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-4">
                    <h1>{producto.titulo}</h1>
                    <h2>{producto.descripcion} </h2>
                    <h3> <b> </b>Precio: ${producto.precio} <b/> </h3>
                    <ItemCount stock={producto.stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;