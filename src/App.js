import {BrowserRouter,Route,Routes} from "react-router-dom"
import "./App.css"
import Navbar from "./Components/Navbar/NavBar"
import Inicio from "./Components/inicio/Inicio";
import Lista from "./Components/Lista/Lista"
import Propuestas from "./Components/Propuestas/Propuestas"
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <>
    <META HTTP-EQUIV="REFRESH" CONTENT="5;URL=https://lolaameercado.wixsite.com/metanoia"></META>
    <div className="App">
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route exact path='/' element={<Inicio/>}/>
                    <Route exact path='/Lista' element={<Lista/>} />
                    <Route exact path='/Propuestas' element={<Propuestas/>} />  
                </Routes>
            <Footer/>
            </BrowserRouter>
    </div></>
  );
}

export default App;

