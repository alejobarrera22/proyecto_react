import { useContext, useEffect, useState } from "react";
import ItemCount from "./itemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext);
    const [item, setItem] = useState({});

    const onAdd = (quantity) =>{
        addItem(item, quantity);
    }

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
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;