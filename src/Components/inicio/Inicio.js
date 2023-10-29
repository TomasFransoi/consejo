import "./Inicio.css"
import img from "./img.jpeg"
const Inicio = ()=>{
    return(
        <>
        <section className="Inicio">
            <div className="QS">
                <div className="SI">
                    <img src={img}/>
                </div>
                <div className="ST">
                    <h1>¿Quienes somos?</h1>
                    <p>Somos postulantes para el consejo de Estudiantes del colegio FASTA villa eucarística, el máximo órgano de representación estudiantil del colegio.Es muy importante que estemos en estos órganos,sino porque debemos defender una educación que sea de calidad, además de promover un colegio lleno de proyectos interesantes.</p>
                </div>
            </div>


        </section>
        </>
    )
}
export default Inicio