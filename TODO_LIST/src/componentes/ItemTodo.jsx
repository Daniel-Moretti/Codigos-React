function ItemTodo(props) {

    return (
        <div className={props.item.prioridade ? "prioridade" : "naoprioridade"}>
            <p>{props.item.mensagem}</p>
            <p>{props.item.prioridade ? "Prioritário" : "Não Prioritário"}</p>
            <p>{props.item.data}</p>
        </div>
    )

}

export default ItemTodo