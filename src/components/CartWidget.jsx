import { Link } from "react-router-dom";
import Carrito from "../components/images/icons8-carrito-de-compras-50.png"
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () =>{
    const {cartTotal} = useContext(CartContext);

    return(
        (cartTotal() > 0) ? 
            <Link to={"/cart"} class="btn btn-light position-relative">
                <img src={Carrito} width={30} alt="carro"/>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
            </Link> : ""
    )
}

export default CartWidget;
