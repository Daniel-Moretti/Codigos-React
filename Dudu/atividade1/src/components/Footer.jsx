import useCalcContext from "../hooks/useCalcContext";


function Footer() {

    const { valores } = useCalcContext();

    return (
        <footer>
            <hr className="separator" />
            <div className="content">
                Histórico
                <div className="historico">
                    {valores && valores.join(', ')}
                </div>
            </div>
        </footer>
    )
}

export default Footer