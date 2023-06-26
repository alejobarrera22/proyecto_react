import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";

const Checkout = ()=>{
    const[nombre, setNombre] = useState("");
    const[email, setEmail] = useState("");
    const[telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, sumTotal} = useContext(CartContext);

    const generarOrden = ()=>{
        if(nombre.length === 0){
            return false
        }
        if(email.length === 0){
            return false
        }
        if(telefono.length === 0){
            return false
        }

        const buyer = {name:nombre, phone:telefono, email:email};
        const items = cart.map(item => ({id:item.id, title:item.titulo, precio:item.precio}));
        const fecha = new Date();
        const date =`${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()}-${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumTotal();
        const order = {buyer:buyer, items:items, date:date, total:total};
        console.log(order);

        //Inserción en Firestore
        const db = getFirestore();
        const OrdersCollection = collection(db, "orders");
        addDoc(OrdersCollection, order).then(resultado =>{
            setOrderId(resultado.id);
        })
        .catch(resultado => {
            console.log("error")
        })
    }

    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Nombre</label>
                            <input className="form-control" onInput={(e) => {setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Email</label>
                            <input className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Teléfono</label>
                            <input className="form-control" onInput={(e) => {setTelefono(e.target.value)}}/>
                        </div>
                        <button type="button" className="btn btn-light" onClick={generarOrden}>Enviar</button>
                    </form>
                </div>
                <div className="col-md-6">
                <table className="table table-bordered">
                        {
                            cart.map(item => (
                                <tr>
                                    <td><img src={item.imagen} alt={item.titulo} width={100}></img></td>
                                    <td>{item.titulo}</td>
                                    <td >{item.cantidad} x ${item.precio}</td>
                                    <td className="text-center">${item.cantidad * item.precio}</td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={3} className="text-end">Total a pagar</td>
                            <td className="text-center">${sumTotal()}</td>
                            <td colSpan={4}>&nbsp;</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId ? 
                    <div class="alert alert-info" role="alert">
                        <h1>Gracias por tu compra!</h1>
                        <p>Tu Nº de Compra es: {orderId}</p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout