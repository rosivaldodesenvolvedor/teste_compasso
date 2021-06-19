import React, { PureComponent } from 'react';

const CardUsuario = (props) => {

    return ( 
        <div>
            <p> Usuario: {props.login}</p>
            <p> Repositorios: </p>
            <p> Repositorios mais visitados: </p>
        </div>
     );
}
 
export default CardUsuario;