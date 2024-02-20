import { useEffect, useState } from "react"
import estilo from './Components.module.css'


export default function ValorBitcoinLast(){
    const [valorAtualBitcoin, setValorAtualBitcoin] = useState('')
    const [load, setLoad] = useState(true)


    function ObterValorBitcoin(){
        setTimeout(() => {
            fetch('https://blockchain.info/ticker')
            .then(response => response.json())
            .then(data => {
                const valor = data.USD.last
                const valorFormatado = formatarValor(valor)
                console.log(valorFormatado)
                setLoad(false)
                setValorAtualBitcoin(valorFormatado)
            })
            .catch(error => {
                setLoad(false)
                console.error('Erro ao obter valor do bitcoin:', error)
            })

        }, 1500) 
        
    }

    useEffect(()=> {
        //setLoad(true)
        ObterValorBitcoin()
    },[])

    function formatarValor(valor: number): string {
        return valor.toLocaleString('pt-BR')
    }

    

    return(
        <div>
            {load === true ? (
                <div className={estilo.spinner}>
                </div>
                ) : 
                <p> US$ {valorAtualBitcoin}</p>
                }
        </div>
    )
}