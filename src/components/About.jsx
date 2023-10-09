import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAngular,
  FaSquareJs,
} from "react-icons/fa6";

export const About = () => {
  return (
    <section className="about">
      <left className="about__left">
        <header className="about__header">
          <ul className="about__tecnologias">
            <li>
              <FaHtml5 color="red" size={50} />
            </li>
            <li>
              <FaCss3 color="red" size={50} />
            </li>
            <li>
              <FaReact color="red" size={50} />
            </li>
            <li>
              <FaNodeJs color="red" size={50} />
            </li>
            <li>
              <FaDatabase color="red" size={50} />
            </li>
            <li>
              <FaAngular color="red" size={50} />
            </li>
            <li>
              <FaSquareJs color="red" size={50} />
            </li>
          </ul>
        </header>
        <div className="about__details">
          <h2 className="about__title">
            Hola, Soy <strong>Danyael Vasquez</strong>
          </h2>
          <p className="about__description">
            <strong>Ingeniero Civil en Informatica</strong> con experiencia en el desarrollo
            de <strong>aplicaciones web</strong> en <strong>Front-end</strong> con React, Angular
            y <strong>Back-end</strong> con Node.js, MongoDB, MariaDB,
            PostgressSQL.
          </p>
          <p className="about__description">
            Me considero una persona responsable, creativa, con facilidad para
            trabajar en equipo y muy <strong>proactiva</strong>.
          </p>
        </div>
      </left>
      <right className="about__right">
        <img src="./foto-linkedin-sf-pht.png" alt="profile" />
      </right>
    </section>
  );
};
