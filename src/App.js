import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import CardUsuario from './components/CardUsuario';
import { UsuarioProvider } from './contexts/contextApi'
import Header from './components/Header'
import Auth from './components/Auth';

function App(props) {
  return (
    <UsuarioProvider>
      <div className="App">
        <Header />
        <Auth/>
        <Search />
        <CardUsuario />
      </div>
    </UsuarioProvider>
  );
}

export default App;
