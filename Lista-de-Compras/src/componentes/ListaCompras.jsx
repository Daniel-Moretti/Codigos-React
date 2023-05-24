import { useState } from 'react'
import estilo from './ListaCompras.module.css'
import Itens from './Itens';

function ListaCompras() {

    const [produto, setProduto] = useState('');
    const [quant, setQuant] = useState();
    const [valor, setValor] = useState();
    //const [total, setTotal] = useState();
    const [listaCompras, setListaCompras] = useState([]);


    // Arrow function () => {}

    const adicionarItem = () => {

        setProduto("")
        setQuant('')
        setValor('')
        setListaCompras([
            {
                produto: produto,
                quantidade: quant,
                valor: valor,
                total: quant * valor
            }, ...listaCompras
        ])

    }

    return (
        <main className={estilo.fundo}>
            <section className={estilo.conteinerLista}>
                <div>
                    <h1>LISTA DE COMPRAS</h1>
                </div>

                <div className={estilo.lista}>
                    <label>Informe um produto</label>
                    <input maxLength={25} type="text" value={produto} onChange={(event) => setProduto(event.target.value)} />
                </div>

                <div className={estilo.lista2}>
                    <div >
                        <label>Informe a quantidade</label>
                        <input type="number" value={quant} onChange={(event) => setQuant(parseFloat(event.target.value))} />
                    </div>

                    <div>
                        <label>Informe o valor</label>
                        <input type="number" value={valor} onChange={(event) => setValor(parseFloat(event.target.value))} />
                    </div>
                </div>

                <div className={estilo.button}>
                    <button id={estilo.cadastrar} type='button' onClick={adicionarItem}>Cadastrar</button>
                    <button id={estilo.limpar} type='button' onClick={() => setListaCompras([])}>Limpar</button>
                </div>

                <div>
                    <p className={estilo.a}>Ítens</p>

                    {listaCompras.map(itemProduto => (<Itens item={itemProduto} />))}

                </div>

            </section>
        </main>
    )
}

export default ListaCompras