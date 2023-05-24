import estilo from './Itens.module.css'

function Itens(props) {

    return (

        <div className={estilo.conteinerItens}>
            <div className={estilo.prod}>
                <p>{props.item.produto}</p>
            </div>

            <div className={estilo.right}>
                <p><b>Quantidade</b></p>
                <p>{props.item.quantidade} UN</p>
            </div>

            <div className={estilo.left}>
                <p><b>Valor Unitário</b></p>
                <p>R$ {props.item.valor.toFixed(2).replace('.', ',')}</p>
            </div>

            <div className={estilo.left}>
                <p><b>Total</b></p>
                <p>R$ {props.item.total.toFixed(2).replace('.', ',')}</p>
            </div>

        </div>
    )

}

export default Itens