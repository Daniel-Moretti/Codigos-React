import { useEffect, useState } from "react"
import estilo from './Cotacoes.module.css'


export default function Cotacoes() {

    const api_Url = 'http://apilayer.net/api'
    const endpoint = '/live'
    const acces_key = 'f55b38b677f522e1430c11e711cd7683'

    const [moedaOrigem, setMoedaOrigem] = useState('')
    const [moedaDestino, setMoedaDestino] = useState('')
    const [resultado, setResultado] = useState<any>([])
    const [inverter, setInverter] = useState(false)
    const [load, setLoad] = useState(false)
    const [loadInv, setLoadInv] = useState(false)


    useEffect(() => {
        if (inverter) {
            ConsultaMoeda()
        } else {
            setInverter(prevInverter => !prevInverter)
        }
    }, [inverter])


    function ConsultaMoeda() {
        setLoad(true)
            setTimeout(() => {
            fetch(api_Url + endpoint + '?access_key=' + acces_key +
                '&source=' + moedaOrigem +
                '&currencies=' + moedaDestino)
                .then(response => response.json())
                .then(data => {
                    setResultado(data.quotes)
                    console.log(data.quotes)
                    setLoad(false)
                    setLoadInv(false)
                })
                .catch(error => {
                    console.error('Erro ao obter a lista de moedas:', error)
                    setLoad(false)
                    setLoadInv(false)
                })
            }, 1500)
    }

    function InverteConsulta() {
        setMoedaOrigem(moedaDestino)
        setMoedaDestino(moedaOrigem)
        setResultado([])
        setInverter(!inverter)
        setLoadInv(!loadInv)
    }

    console.log('Resultado: ' + load)

    return (
        <div className={estilo.tela}>
            <div className={estilo.container}>
                <h1>Taxa de câmbio</h1>
                <div className={estilo.boxTaxas}>
                    
                    <div className={estilo.boxDePara}>
                        <label>De: </label>

                        <select className={estilo.inputDePara} name="Moeda Origem" value={moedaOrigem} onChange={e => setMoedaOrigem(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="USD">USD - Dolar Americano</option>
                            <option value="BRL">BRL - Real Brasileiro</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="BTC">BTC - Bitcoin</option>
                            <option value="CNY">CNY - Yen Chines</option>
                            <option value="PYG">PYG - Guarani Paraguay</option>
                            <option value="ARS">ARS - Peso Argentino</option>
                        </select>

                    </div>

                    <div className={estilo.boxInverter}>
                        {moedaOrigem != '' && moedaDestino != '' ? 
                            <button className={estilo.buttonInverter} onClick={InverteConsulta} disabled={loadInv}>
                                <div>
                                    <span className="material-symbols-outlined">
                                        sync_alt
                                    </span>
                                </div>                        
                            </button> : 
                                <div>
                                    <span className="material-symbols-outlined">
                                        sync_alt
                                    </span>
                            </div>
                        }
                        
                    </div>

                    <div className={estilo.boxDePara}>
                        <label>Para: </label>

                        <select className={estilo.inputDePara} name="Moeda Destino" value={moedaDestino} onChange={e => setMoedaDestino(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="USD">USD - Dolar Americano</option>
                            <option value="BRL">BRL - Real Brasileiro</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="BTC">BTC - Bitcoin</option>
                            <option value="CNY">CNY - Yen Chines</option>
                            <option value="PYG">PYG - Guarani Paraguay</option>
                            <option value="ARS">ARS - Peso Argentino</option>
                        </select> 
                    </div>

                </div>
                <div className={estilo.containerResultado}>
                    <div className={estilo.boxResultado}>
                        <label>Resultado: </label>
                        <div className={estilo.resultado}>
                            { load === true ? 
                                <div className={estilo.spinner}>
                                </div> : moedaDestino != '' && moedaOrigem != '' ? 
                                Object.keys(resultado).map(key => (
                                    <p key={key}> {resultado[key]}</p>
                                )) : 
                                <p></p>}
                        </div>
                    </div>

                    <div className={estilo.containerButton}>

                        <button className={estilo.button} onClick={ConsultaMoeda} disabled={load}>
                            Obter Cotação
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}