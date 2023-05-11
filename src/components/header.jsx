import Motorola from "../components/images/motorola.png"
import CartWidget from "./CartWidget";
import Navbar from "./Navbar";

const Header = () =>{
    return(
        <div className="container-fluid">
            <div className="row bg-primary-subtle p-3">
                <div className="col-md-6">
                    <img src={Motorola} width={150}/>
                </div>
                <div className="col-md-6 text-end">
                    <a href="#">Suscribite</a> | <a href="#">Soporte</a> | <a href="#">Mi cuenta</a>
                </div>
            </div>
            <div className="row bg-primary-subtle p-3">
                <div className="col-md-6">
                    <Navbar/>
                </div>
                <div className="col-md-6 text-end">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}

export default Header;
