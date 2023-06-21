import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Link } from 'react-router-dom'

function Header() {

    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <header>
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/Cadastrar" >Cadastrar</Link>
                <Link to="/ListarTarefas" >Listar</Link>
            </nav>
            <section>
                <button className="btnTheme" onClick={changeTheme}>
                    <span class="material-symbols-outlined">
                        {theme == 'dark' ? 'dark_mode' : 'light_mode'}
                    </span>
                </button>
            </section>
        </header>
    )
}

export default Header