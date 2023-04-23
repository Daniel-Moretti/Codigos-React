import estilo from './SectionLeft.module.css'

function Section() {
    return (
        <div className={estilo.styleSection}>
            <div className={estilo.img}>
                <img src="./assets/Rectangle 7.png" alt="" width="380" height="100" />
            </div>

            <div className={estilo.boxText}>
                <h1 className={estilo.h1}>Para ser muito bom amanha é preciso começar a práticar hoje</h1>

                <h5 className={estilo.h5}>Prof. Cleiton</h5>

                <p className={estilo.p}>São nos primeiros anos escolares que as crianças aprendem os fundamentos da
                    matemática, inclusive as quatro operações - soma, subtração, multiplicação e
                    divisão. Qualquer dificuldade que a criança tenha nessa fase se refletirá por
                    toda a sua vida escolar :(
                </p>

                <p className={estilo.p}>
                    Aqui você e seu filho irão encontrar exercícios relacionados ao conteúdo
                    ensinado nós primeiros anos escolares e buscara aperfeiçoar seu conhecimento
                    nas operações básicas.
                </p>

            </div>

        </div>
    )
}

export default Section