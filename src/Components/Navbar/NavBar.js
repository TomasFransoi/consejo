import {Link } from "react-router-dom"
import "./Nav.css"
import logo from "./logo.png"
const Navbar = () =>{
    return(
        <>
        <div className="nav">
        
        <img className="logo" src={logo} alt="logo"/>
        <h1 className="meta">Metanoia</h1>
        <nav>
                <Link to='/' className="Opcion"><div className="button"><h2>Inicio</h2></div></Link>
                <Link to='/Lista' className="Opcion"><div className="button"><h2>Lista</h2></div></Link>
        </nav>
        </div>
        </>
    )
}
//<Link to='/Propuestas' className="Opcion"><button>Propuestas</button></Link>
export default Navbar