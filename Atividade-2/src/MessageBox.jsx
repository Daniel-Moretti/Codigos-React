import estilo from './MessageBox.module.css'

function MesageBox() {
    return (
        <div className={estilo.box}>

            <div className={estilo.titulo}>
                <div>
                    <p>Atendimento</p>
                </div>

            </div>


            <div className={estilo.position}>

                <div className={estilo.esquerda}>
                    <div className={estilo.boxAtendimento}>
                        <p>Olá! Bem-vindo ao nosso chat! Estamos aqui para ajudá-lo e responder a
                            todas as suas perguntas. </p>
                    </div>
                </div>

                <div className={estilo.direita}>
                    <div className={estilo.boxCliente}>
                        <p>Estou com dificuldade para acessar minha plataforma</p>
                    </div>
                </div>

                <div className={estilo.esquerda}>
                    <div className={estilo.boxAtendimento}>
                        <p>Consegue informar o CNPJ vinculado a sua conta? </p>
                    </div>
                </div>

                <div className={estilo.direita}>
                    <div className={estilo.boxCliente}>
                        <p>10.256.236/0001-65</p>
                    </div>
                </div>

                <div className={estilo.esquerda}>
                    <div className={estilo.boxAtendimento}>
                        <p>Aguarde um momento, estamos verificando. </p>
                    </div>
                </div>

            </div>

            <div className={estilo.positioBoxMensagem}>
                
                    <input className={estilo.boxMensagem} type="text" placeholder='Informe sua mensagem' />
                
            </div>


        </div>
    )
}

export default MesageBox