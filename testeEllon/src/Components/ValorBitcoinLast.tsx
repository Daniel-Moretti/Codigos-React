import { useEffect, useState } from "react"

export default function ValorBitcoinLast(){
    const [valorAtualBitcoin, setValorAtualBitcoin] = useState('')

    function ObterValorBitcoin(){ 
        fetch('https://blockchain.info/ticker')
        .then(response => response.json())
        .then(data => {
            const valor = data.USD.last
            const valorFormatado = formatarValor(valor)
            console.log(valorFormatado)
            setValorAtualBitcoin(valorFormatado)
        })
        .catch(error => {
            console.error('Erro ao obter valor do bitcoin:', error)
        })
    }

    useEffect(()=> {
        ObterValorBitcoin()
    },[])

    function formatarValor(valor: number): string {
        return valor.toLocaleString('pt-BR')
      }

    

    return(
        <div>
            <p> US$ {valorAtualBitcoin}</p>
        </div>
    )
}