import {Link } from "react-router-dom"
import "./NavBar.css"
const Navbar = () =>{
    return(
        <div className="nav">
        <h1>Metanoia</h1>
        <nav>
            <div className='opciones'>
                <Link to='/' className="Opcion"><button>Inicio</button></Link>
                <Link to='/Lista' className="Opcion"><button>Lista</button></Link>
                
            </div>

        </nav>
        </div>
    )
}
//<Link to='/Propuestas' className="Opcion"><button>Propuestas</button></Link>
export default Navbar