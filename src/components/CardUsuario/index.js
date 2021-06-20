import React, { useState, useEffect } from 'react';
import useUsuario from '../../hooks/Usuario';
import { ContainerUsuario } from './styled'
import Repositorios from './components/Repositorios';
import RepositoriosMaisVistos from './components/ReposiMaisVistos';

const CardUsuario = () => {
    const [mostrarRepositorios, setmostrarRepositorios] = useState(false)
    const [mostrarRepositoriosMaisVistos, setmostrarRepositoriosMaisVistos] = useState(false)

    const { usuario, buscarUsuario } = useUsuario()

    useEffect(() => {
        console.log(usuario)
    })

    return (
        <div>
            <ContainerUsuario>
                <p> Usuario: {usuario.login}</p>
                <button 
                onClick={()=>{setmostrarRepositorios(true) && setmostrarRepositoriosMaisVistos(false)}}
                >Repositorios</button>
                <button 
                onClick={()=>{ setmostrarRepositoriosMaisVistos(true) && setmostrarRepositorios(false)}}
                >Repositorios</button>
            </ContainerUsuario>

            <ContainerUsuario>
                {
                    mostrarRepositorios && !mostrarRepositoriosMaisVistos ? <Repositorios /> : ''
                }
                {
                    mostrarRepositoriosMaisVistos && !mostrarRepositorios ? <RepositoriosMaisVistos /> : ''
                }
            </ContainerUsuario>
        </div>
    );
}

export default CardUsuario;