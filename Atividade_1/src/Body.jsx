import estilo from './Body.module.css'
import Square from './Square'


function Body() {
    return (
        <div className={estilo.posicao}>
            <div className={estilo.conteiner}>
                <h1>Body</h1>

            </div>
            <div className={estilo.square_conteiner}>
                <Square texto='1' />
                <Square texto='2' />
                <Square texto='3' />
                <Square texto='4' />

            </div>
        </div>

    )
}
export default Body