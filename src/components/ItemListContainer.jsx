import { useEffect, useState } from "react";
//import productos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
//import { getFirestore, collection, getDocs, where, query, addDoc, getDocFromCache} from "firebase/firestore";
import { getFirestore, collection, getDocs, where, query} from "firebase/firestore";

const ItemListContainer = ({greeting}) =>{
    const [items, setItems] = useState([]);
    const {id} = useParams();

    // useEffect(() =>{    
    //     const promesa = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(id ? productos.filter(item => item.categoria === id) : productos)
    //         }, 2000);
    //     });

    //     promesa.then(data => {
    //         setItems(data);
    //     })

    // }, [id]);

    // Proceso de importación --> SE EJECUTA UNA SOLA VEZ
    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");

    //     productos.forEach(producto => {
    //         addDoc(itemsCollection, producto);
    //     });

    //     console.log("Productos cargando en Firestore");
    // }, []);

    // Acceder a una colección dsde firestore
    useEffect(() =>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado =>{
            if(resultado.size > 0){
                setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
            } else {
                console.error("Error! No se encontraron productos en la colección!");
            }
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