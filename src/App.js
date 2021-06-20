import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import CardUsuario from './components/CardUsuario';
import { UsuarioProvider } from './contexts/contextApi'
import Header from './components/Header'
import Repositorios from './components/Repositorios';
import RepositoriosMaisVistos from './components/ReposiMaisVistos';

function App(props) {

  return (


    <UsuarioProvider>
  <div className="App">
    <Header/>
           <Search />    
           <CardUsuario/>
           <Repositorios/>
           <RepositoriosMaisVistos/>
     </div>
          </UsuarioProvider>
  );
}

export default App;
