import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const[itemAdded, setItemAdded] = useState(false);

    const incrementarStock = () =>{
        if (items < itemStock){
            setItems(items + 1);
        }
    }

    const decrementarStock = () =>{
        if (items > 1){
            setItems(items - 1);
        }
    }

    const addToCart = () =>{
        if (items <= itemStock){
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{items}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-outline-primary my-2">Finalizar Compra</Link> : <button type="button" className="btn btn-outline-primary my-2" onClick={addToCart}>Agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount