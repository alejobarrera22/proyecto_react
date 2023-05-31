import Motorola from "../components/images/motorola.png"
import Facebook from "../components/images/icons8-facebook.svg"
import Twitter from "../components/images/icons8-twitter.svg"
import Instagram from "../components/images/icons8-instagram.svg"
import Newsletter from "../components/images/newsletter-email.png"
import { Link } from "react-router-dom"

const Footer = () =>{
    return(
        <div className="container-fluid">
            <div className="row mt-2 bg-light text-dark">
                <div className="col-md-4">
                    <img src={Newsletter} width={60}/>
                </div>
                <div className="col-md-4">
                    suscribite
                </div>
                <div className="col-md-4">
                    boton
                </div>
            </div>
            <div className="row mt-2 bg-light text-dark">
                <div className="col-md-4">
                    <img src={Motorola} width={150} />
                </div>
                <div className="col-md-4">
                    <Link to={"https://www.facebook.com/MotorolaInAR/"}><img src={Facebook} width={30} /></Link>  
                    <Link to={"https://twitter.com/motorola_ar"}><img src={Twitter} width={30} /></Link>
                    <Link to={"https://www.instagram.com/motorola_ar/"}><img src={Instagram} width={30} /></Link>
                </div>
                <div className="col-md-4">
                    ubicacion
                </div>
            </div>
            <div className="row mt-2 bg-light text-dark">
                <div className="col-md-2">
                    Sobre nosotros
                </div>
                <div className="col-md-2">
                    modelos
                </div>
                <div className="col-md-2">
                    venta online
                </div>
                <div className="col-md-2">
                    soporte
                </div>
                <div className="col-md-4">
                    medios de pago
                </div>
            </div>
        </div>
    )
}

export default Footer;
