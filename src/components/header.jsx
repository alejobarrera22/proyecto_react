import Motorola from "../components/images/motorola.png"
import CartWidget from "./CartWidget";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import "../styles/estilos.css"

const Header = () =>{
    return(
        <div className="container-fluid head">
            <div className="row p-3">
                <div className="col-md-6 logo">
                    <Link to={"/"}><img src={Motorola} width={150} alt="logo motorola"/></Link>
                </div>
                <div className="col-md-6 text-end">
                    <Link to={"/"}>Suscribite</Link> | <Link to={"/"}>Soporte</Link> | <Link to={"/"}>Mi cuenta</Link>
                </div>
            </div>
            <div className="row p-3">
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
