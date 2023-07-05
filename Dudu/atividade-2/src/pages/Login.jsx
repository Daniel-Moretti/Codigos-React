import { Link, Navigate, Route, useNavigate } from 'react-router-dom';
import imgagemEscolhida from '../assets/entrada.svg'
import useAcessContext from '../hooks/useAcessContext';
import { useEffect, useRef, useState } from 'react';
import useFocus from '../hooks/useFocus';

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { logar, mensagemValidacao, autenticado } = useAcessContext();

    const inputRef = useRef(null);

    useFocus(inputRef);

    useEffect(() => {
        console.log("inicio");
        if (autenticado) {
            navigate("/inicio")
        }
    }, [autenticado]);


    return (
        <div className='container'>
            <img src={imgagemEscolhida} alt='Imagem de login' />
            <div className='container-login'>
                <label className='logo'>SuaLogo #</label>

                <div className='container-dados'>
                    <div className='user container-dados'>
                        <input required ref={inputRef} value={username} className='input-t' placeholder='Usuário' onChange={(e) => setUsername(e.target.value)} />
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div className='password container-dados'>
                        <input required type='password' value={password} className='input-t' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                        <i class="fa fa-key" aria-hidden="true"></i>
                    </div>

                    {mensagemValidacao && <p className='msg-validacao'>{mensagemValidacao}</p>}
                </div>

                <Link className="next-btn" onClick={() => logar(username, password)}>Logar</Link>
            </div>
        </div>
    )
}

export default Login;