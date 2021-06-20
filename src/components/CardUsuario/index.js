import React, { useState, useEffect } from 'react';
import useUsuario from '../../hooks/Usuario';
import { ContainerUsuario, ItemContainerUsuario } from './styled'
import Repositorios from '../Repositorios';
import RepositoriosMaisVistos from '../ReposiMaisVistos';

const CardUsuario = () => {
    const [mostrarRepositorios, setmostrarRepositorios] = useState(false)
    const [mostrarRepositoriosMaisVistos, setmostrarRepositoriosMaisVistos] = useState(false)

    const { usuario, buscarUsuario } = useUsuario()

    const mostrarRepository = () => {
        setmostrarRepositoriosMaisVistos(false);
        setmostrarRepositorios(true);
    }
    const mostrarRepositoryMaisVisto = () => {
        setmostrarRepositorios(false);
        setmostrarRepositoriosMaisVistos(true);
    }
    return (
        <div>
            <ContainerUsuario>
                <ItemContainerUsuario >
                    {usuario ? (
                        <div>
                            <div>
                                <span>
                                    <b>Usuraio: </b>
                                    {usuario.login}
                                </span>
                                <span>
                                <b>perfil do usuário: </b>
                                    <a href={usuario.html_url}>{usuario.html_url}</a>
                                </span>
                            </div>
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={() => { mostrarRepository() }}>
                                Repositorios
                            </button>
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={() => { mostrarRepositoryMaisVisto() }}>
                                Repositorios mais vistos
                            </button>
                        </div>
                    ) : ''
                    }
                </ItemContainerUsuario>
            </ContainerUsuario>
            <ContainerUsuario>
                {
                    mostrarRepositorios ? <Repositorios /> : ''
                }
                {
                    mostrarRepositoriosMaisVistos ? <RepositoriosMaisVistos /> : ''
                }
            </ContainerUsuario>
        </div>
    );
}

export default CardUsuario;