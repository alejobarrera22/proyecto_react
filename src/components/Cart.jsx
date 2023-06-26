import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import trash from "../components/images/trash.svg"
import { Link } from "react-router-dom";

const Cart = ()  =>{
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);

    if(cartTotal() === 0){
        return (
            <div className="container my-4">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">
                            No se encontraron productos
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Productos Elegidos</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <table className="table table-bordered">
                        <tr>
                            <td colSpan={4}>&nbsp;</td>
                            <td className="text-end"><button className="btn btn-light" onClick={()=>{clear()}} title="Vaciar Carrito">Limpiar Carrito</button></td>
                        </tr>
                        {
                            cart.map(item => (
                                <tr>
                                    <td><img src={item.imagen} alt={item.titulo} width={100}></img></td>
                                    <td>{item.titulo}</td>
                                    <td >{item.cantidad} x ${item.precio}</td>
                                    <td className="text-center">${item.cantidad * item.precio}</td>
                                    <td className="text-end"><button className="btn btn-light" onClick={() => {removeItem(item.id)}}><img src={trash} alt="trash" width={40} /></button></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={3} className="text-end">Total a pagar</td>
                            <td className="text-center">${sumTotal()}</td>
                            <td className="text-end"><Link to={"/checkout"} className="btn btn-light" title="Vaciar Carrito">Finalizar Compra</Link></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;