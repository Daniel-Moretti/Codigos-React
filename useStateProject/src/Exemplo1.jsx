function Exemplo1() {

    const [contar, setContar] = useState(0);
    console.log(contar);

    //Criando uma função com o Arrow Function
    const incrementar = () => {
        //contar = contar + 1;
        setContar(contar + 1)
        //console.log(contar)
    }

    const limpar = () => {
        setContar(0);
    }

    return (
        <div>
            <h1>UseState é um Hooks</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={limpar}>Limpar</button>
            <p>O valor é {contar}</p>
        </div>
    )

}

export default Exemplo1