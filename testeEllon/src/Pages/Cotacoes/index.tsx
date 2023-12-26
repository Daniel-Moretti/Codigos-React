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
    }

    function InverteConsulta() {
        setMoedaOrigem(moedaDestino)
        setMoedaDestino(moedaOrigem)
        setResultado([])
        setInverter(!inverter)
        setLoadInv(!loadInv)
    }

    //console.log('Resultado: ' + resultado)

    return (
        <div>
            <h1>COTAÇÕES DE MOEDAS</h1>
            <div>
                <label>Moeda Origem: </label>

                <select name="Moeda Origem" value={moedaOrigem} onChange={e => setMoedaOrigem(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="USD">USD - Dolar Americano</option>
                    <option value="BRL">BRL - Real Brasileiro</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="BTC">BTC - Bitcoin</option>
                    <option value="CNY">CNY - Yen Chines</option>
                    <option value="PYG">PYG - Guarani Paraguay</option>
                    <option value="ARS">ARS - Peso Argentino</option>
                </select>

                <div>
                    <p>Origem: {moedaOrigem}</p>
                </div>

            </div>

            <div>
                <label>Moeda Destino: </label>

                <select name="Moeda Destino" value={moedaDestino} onChange={e => setMoedaDestino(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="USD">USD - Dolar Americano</option>
                    <option value="BRL">BRL - Real Brasileiro</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="BTC">BTC - Bitcoin</option>
                    <option value="CNY">CNY - Yen Chines</option>
                    <option value="PYG">PYG - Guarani Paraguay</option>
                    <option value="ARS">ARS - Peso Argentino</option>
                </select>

                <div>
                    <p>Destino: {moedaDestino}</p>
                    {Object.keys(resultado).map(key => (
                        <p key={key}>Resultado: {resultado[key]}</p>
                    ))}
                </div>
                <div className={estilo.containerButton}>

                    <button className={estilo.button} onClick={ConsultaMoeda} disabled={load}>
                        {load === true ? (
                            <div className={estilo.spinner}>
                            </div>
                        ) : 'Obter Cotação'}
                    </button>
                </div>
                <div className={estilo.containerButton}>

                    <button className={estilo.inverter} onClick={InverteConsulta} disabled={loadInv}>
                        
                        <span className="material-symbols-outlined">
                            autorenew
                        </span></button>
                </div>

            </div>
        </div>
    )
}