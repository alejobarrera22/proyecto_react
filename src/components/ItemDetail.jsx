import { useEffect, useState } from "react";
import ItemCount from "./itemCount";

const ItemDetail = ({producto}) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-3">
                    <img src={item.imagen} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-4">
                    <h1>{item.titulo}</h1>
                    <h2>{item.descripcion} </h2>
                    <h3> <b> </b>Precio: ${item.precio} <b/> </h3>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;