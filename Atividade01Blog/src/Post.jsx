import estilo from './Post.module.css'
function Post(props) {

    return (
        <div className={estilo.conteinerBlog}>

            <h1 className={estilo.pergunta}>{props.pergunta}</h1>

            <div className={estilo.box}>
                <p className={estilo.data}>{props.data}</p>
                <p className={estilo.nome}>{props.nome}</p>
            </div>

            <h5 className={estilo.bordaResposta}>{props.resposta}</h5>

        </div>
    )
}

export default Post