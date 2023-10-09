import { FaLinkedin, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";

export const Contacto = () => {
  return (
    <section className="contacto">
      <h1 className="contacto__title">
        <strong>Contacto</strong>
      </h1>
      <div className="contacto__card">
        <div className="contacto__card__details">
          <h4 className="contacto__card__title">
            <strong>Correo</strong>: d.vsquezojeda@uandresbello.edu
          </h4>
          <h4 className="contacto__card__title">
            <strong>Telefono</strong>: +569 86155521
          </h4>
        </div>
        <div className="redes__card">
            <a
                href="https://www.linkedin.com/in/danyaelvasquez/"
                target="_blank"
                rel="noreferrer"
                className="redes__card__link"
            >
                <FaLinkedin className="redes__card__icon" size={40} />
                <FaSquareInstagram className="redes__card__icon" size={40} />
                <FaSquareGithub className="redes__card__icon" size={40} />
            </a>
        </div>
      </div>
    </section>
  );
};
