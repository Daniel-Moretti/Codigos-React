// O nome do componente é igual o do arquivo

import objeto from "./Header.module.css"

function Header() {
    console.log(objeto)
    return <header className={objeto.estilo}>Cesul</header>
}

export default Header
