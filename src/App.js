import React, { PureComponent } from 'react';
import Search from './components/SearchUsuario';
import UserContext from './UserContext';
import Usuarios from './components/Usuarios';


function App() {
  return (
    <div className="App">
      <UserContext.Provider value={{ nome: 'André' }}>
      <Search />
      <Usuarios />
      </UserContext.Provider>
    </div>
  );
}

export default App;
