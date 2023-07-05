import { useState } from 'react'
import imagem from './img/image9.png'
import logo from './img/logo.png'
import estilo from './Pages.module.css'
import { Link } from "react-router-dom";
import useLoginContext from '../hooks/useLoginContext';
import { useRef } from 'react';
import useEffectFocus from '../hooks/useEffectFocus';

function Login() {

  const { nome, setNome, gravarNome } = useLoginContext();

  const inputRef = useRef(null);

  useEffectFocus(inputRef);

  return (
    <>

      <main className={estilo.conteiner}>

        <div>
          <img className={estilo.imagem} src={imagem} />
        </div>

        <div className={estilo.right}>
          
            <img className={estilo.logo} src={logo} />
            <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Usuário' ref={inputRef}/>
            <input type="password" placeholder='Senha'/>
            <Link className={estilo.botao} to='/Page1'onClick={() => gravarNome(nome)}>Login</Link>
          
        </div>

      </main>

    </>
  )
}

export default Login
