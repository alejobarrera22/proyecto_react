import {NavLink} from "react-router-dom";

const Navbar = () =>{
    return(
        <ul className="nav justify-content-start">
            <li className="nav-item">
                <NavLink className="nav-link active" to={"/category/smartphones"}>Smartphones</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to={"/category/smarttv"}>SmartTV</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to={"/category/accesorios"}>Accesorios</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to={"/category/smartphones"}>MotoCare</NavLink>
            </li>
        </ul>
    )
}

export default Navbar;
