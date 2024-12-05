import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario ] = useState('');

  return (
    <>
      <div className="container search">
        <div className="logo">
          <img src="https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png"/>
          <h2>Repos</h2>
        </div>
        <input className="input" type="text" placeholder="Digite o nome de usuario" onBlur={(e) => setNomeUsuario(e.target.value)} />
      </div>

      { nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
