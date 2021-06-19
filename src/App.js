import React, { useState, useEffect } from 'react';
import Search from './components/SearchUsuario';
import CardUsuario from './components/CardUsuario';
import { UsuarioProvider } from './contexts/contextApi'



function App(props) {

  return (


    <UsuarioProvider>
  <div className="App">
           <Search />    
           <CardUsuario/>
     </div>
          </UsuarioProvider>
  );
}

export default App;
