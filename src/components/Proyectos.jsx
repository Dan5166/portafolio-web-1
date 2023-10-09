export const Proyectos = () => {
    return (
        <section className="proyectos">
            <h1 className="proyectos__title">
                <strong>Proyectos</strong>
            </h1>
            <div className="proyecto__card">
                <img src="./tic-tac-toe.png" alt="logo" />
                <div className="proyecto__card__details">
                <h3 className="proyecto__card__title">
                    <strong>Tic-Tac-Toe</strong>
                    <button className="proyecto__card__button">Probar</button>
                </h3>
                <h5 className="proyecto__card__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                    volup
                </h5>
                <div className="tecnologies-tags">
                    <span className="tecnology-tag">React</span>
                    <span className="tecnology-tag">Node</span>
                    <span className="tecnology-tag">MongoDB</span>
                </div>
                </div>
                
            </div>
            </section>
    )
}