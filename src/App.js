import {BrowserRouter,Route,Routes} from "react-router-dom"
import "./App.css"
import Navbar from "./Components/Navbar/NavBar"
import Inicio from "./Components/inicio/Inicio";
import Contact from "./Components/Contact/Contact";
import Lista from "./Components/Lista/Lista"
import Propuestas from "./Components/Propuestas/Propuestas"
import Footer from "./Components/Footer/Footer"
function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Navbar />
                    <Inicio/>
                    <Lista/>
                    <Contact/>
                    <Footer/>
                </BrowserRouter>
            </div>
        </>
  );
}

export default App;
//<Route exact path='/' element={<Inicio/>}/>
//<Route exact path='/Lista' element={<Lista/>} />
//<Route exact path='/Propuestas' element={<Propuestas/>} />  
//</Routes>
