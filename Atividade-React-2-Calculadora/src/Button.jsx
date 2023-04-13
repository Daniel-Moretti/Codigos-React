import estilo from './Button.module.css'
function Button(props) {
    return (
        <div className={estilo.conteiner}>
            <p>
                {props.texto}
            </p>
        </div>
    )
}

export default Button