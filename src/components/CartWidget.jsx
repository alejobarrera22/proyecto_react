import Carrito from "../components/images/icons8-carrito-de-compras-50.png"

const CartWidget = () =>{
    return(
        <div>
            <button type="button" class="btn btn-light position-relative">
                <img src={Carrito} width={30} alt="carro"/>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1
                    <span class="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget;
