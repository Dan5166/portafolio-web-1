import { Navbar } from "./components/NavBar";
import { About } from "./components/About";
import { Experiencia } from "./components/Experiencia";
import { Proyectos } from "./components/Proyectos";
import { Contacto } from "./components/Contacto";

const App = () => {
  return (
    <main>
        <Navbar />
        <About />
        <Experiencia />
        <Proyectos />
        <Contacto />
    </main>
  );
};
export default App;
