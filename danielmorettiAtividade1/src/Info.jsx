import estilo from './Info.module.css'
function Info(props) {
    return (
        <div>
            <section className={estilo.box}>
                {props.texto}
            </section>
        </div>
    )
}

export default Info