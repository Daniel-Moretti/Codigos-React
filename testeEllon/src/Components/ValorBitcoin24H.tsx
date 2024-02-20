import { useEffect, useState } from "react"
import estilo from "./Components.module.css"

export default function ValorBitcoin24H(){
    const [valorAtualBitcoin, setValorAtualBitcoin] = useState('');
    const [load, setLoad] = useState(true)


    function ObterValorBitcoin(){
        setTimeout(() => { 
            fetch('https://api.blockchain.com/v3/exchange/tickers/BTC-USD')
            .then(response => response.json())
            .then(data => {
                const valor = data.price_24h
                console.log(valor)
                const valorFormatado = formatarValor(valor)
                console.log(valorFormatado)
                setValorAtualBitcoin(valorFormatado)
                setLoad(false)
            })
            .catch(error => {
                console.error('Erro ao obter valor do bitcoin:', error)
                setLoad(false)
            })
        }, 1500)
    }

    useEffect(()=> {
        ObterValorBitcoin()
    },[])

    function formatarValor(valor: number): string {
        return valor.toLocaleString('pt-BR')
      }

    return(
        <div>
            {load === true ? 
                <div className={estilo.spinner}>
                </div>
                 : 
                <p>US$ {valorAtualBitcoin}</p>
            }
        </div>
    )
}