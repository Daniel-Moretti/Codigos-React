import estilo from "./Header.module.css"

function Header() {

    return (
        <header>
            <section className={estilo.Section}>
                <h1>CALCULADORA MULTI TELAS</h1>
            </section>
        </header>
    )
}

export default Header