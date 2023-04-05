import estilo from "./Post.module.css"

function Post(props) {
    return (
        <div className={estilo.principal}>
            <header className={estilo.header}>
                {props.titulo}
            </header>
            <section>
                {props.texto}
            </section>
        </div>
    )
}

export default Post
