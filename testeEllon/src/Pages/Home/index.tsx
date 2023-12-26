import { useState } from 'react'
import ValorBitcoin24H from '../../Components/ValorBitcoin24H'
import ValorBitcoinLast from '../../Components/ValorBitcoinLast'
import estilo from './Home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {
    const [button, setButton] = useState(' ')

    function Last() {
        setButton('last')
    }

    function Day() {
        setButton('day')
    }

    return (
        <div className={estilo.tela}>
            <div className={estilo.titulo}>
                <h1>Cotação Atual do Bitcoin</h1>
            </div>

            <div className={estilo.container}>

                <div className={estilo.containerButtons}>
                    <div className={estilo.containerButton}>
                        <button onClick={Last} className={estilo.button}>Último preço</button>
                    </div>

                    <div className={estilo.containerButton}>
                        <button onClick={Day} className={estilo.button}>Preço médio 24H</button>
                    </div>
                </div>

                <div className={estilo.containerValorBitcoin}>
                    {button === 'last' ? (
                        <ValorBitcoinLast />
                    ) : button === 'day' ? (
                        <ValorBitcoin24H />
                    ) : (
                        <p></p>
                    )}
                </div>

                <Link to='/Cotacoes' className={estilo.buttonCotMoedas}>
                    <p>Cotações de Moedas</p>
                </Link>

            </div>
        </div>
    )
}