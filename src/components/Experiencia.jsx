export const Experiencia = () => {
  return (
    <section className="experiencia-profesional">
        <h1 className="experiencia__title">
          Experiencia <strong>Profesional</strong>
        </h1>
      <div className="experiencia-card">
        <h4 className="periodo-de-trabajo">
            Enero 2023 - Junio 2023
        </h4>
        <div className="job-description">
            <h2 className="job-title">
                DevOps practicante ● <strong>Cencosud</strong>
            </h2>
            <h5 className="job-details">
                <h4>Practica profesional en el <strong>Cloud Core Team</strong>.</h4>
                <ul className="job-details__list">
                    <li>Desarrollo de herramientas para la automatización de procesos.</li>
                    <li>Desarrollo de herramientas para la administración de recursos en la nube.</li>
                    <li>Desarrollo del portal web interno del equipo.</li>
                </ul>
            </h5>
            <div className="tecnologies-tags">
                <span className="tecnology-tag">Python</span>
                <span className="tecnology-tag">Angular</span>
                <span className="tecnology-tag">Firebase</span>
                <span className="tecnology-tag">AWS</span>
                <span className="tecnology-tag">GCP</span>
                <span className="tecnology-tag">Azure</span>
                <span className="tecnology-tag">Oracle</span>
                <span className="tecnology-tag">Git</span>
            </div>
        </div>
      </div>
    </section>
  );
};
