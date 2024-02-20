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
            
            <div className={estilo.container}>
                <div className={estilo.titulo}>
                    <h1>Cotação Atual do Bitcoin</h1>
                    <h2>em dólar</h2>
                </div>

                <div className={estilo.box}>
                    <div className={estilo.label}>
                        <label >Obter cotação referente:</label>
                    </div>
                    <div className={estilo.containerbuttons}>
                        <div className={estilo.containerButton}>
                            <button className={estilo.button} onClick={Last}>Preço atual</button>
                        </div>

                        <div className={estilo.containerButton}>
                            <button onClick={Day} className={estilo.button}>Preço médio 24H</button>
                        </div>

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
                    <p>Ir para página de</p>
                    <p>Cotações de Moedas</p>
                </Link>

            </div>
        </div>
    )
}