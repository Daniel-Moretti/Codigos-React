import estilo from './Anotacoes.module.css'
function Anotacoes(props) {
    return (
        <div className={estilo.boxNote}>
            {props.texto}
        </div>
    )
}

export default Anotacoes