import { FaFileArrowDown } from "react-icons/fa6";

export const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="./logo.png" alt="logo" />
                <h1>Danyael</h1>
            </div>
            <ul>
                <li className="active"><a href="#">Inicio</a></li>
                <li><a href="#">Experiencia laboral</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="./CV.pdf" download="CV.pdf"><FaFileArrowDown /></a></li>
            </ul>
        </nav>
    )
}