import { useEffect, useState } from "react"

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementarStock = () =>{
        if (items < itemStock){
            setItems(items + 1);
        }
    }

    const decrementarStock = () =>{
        if (items > 0){
            setItems(items - 1);
        }
    }

    const onAdd = () =>{
        if (items <= itemStock){
            setItemStock(itemStock - items);
            setItems(1);
        }
    }

    useEffect(() => {
        setItemStock(itemStock);
    }, [itemStock]);

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
                    <button type="button" className="btn btn-outline-primary my-2" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount