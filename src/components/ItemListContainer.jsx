import { useEffect, useState } from "react";
import productos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) =>{
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() =>{    
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos)
            }, 2000);
        });

        promesa.then(data => {
            setItems(data);
        })

    }, [id]);

    return(
        <div className="container my-5">
            <div className="row">
                    <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;