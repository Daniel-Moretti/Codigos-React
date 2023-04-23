import estilo from './Header.module.css'

function Header() {
    return (
        <header className={estilo.posHeader}>
            <div className={estilo.titulo}>
                <img src="./assets/calcular.png" alt="" width='95' height='35' />
                <h4>Ferramenta de aprendizagem de calculo</h4>
            </div>

            <div className={estilo.data}>
                <p>19/04/2023</p>
            </div>

        </header>
    )
}

export default Header