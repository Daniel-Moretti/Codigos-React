import estilo from './Square.module.css'

function Square(props) {
    return (
        <div className={estilo.conteiner}>
            <p>
                {props.texto}
            </p>
        </div>
    )
}

export default Square