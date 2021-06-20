import React, { useState, useEffect } from 'react';
import useUsuario from '../../hooks/Usuario';
import { ContainerRepositorios, ItemContainerRepositorios } from './style'

const Repositorios = () => {

  const [repositorys, setRepositorys] = useState(() => [])

  const { usuario, repositorios, buscarRepositorios } = useUsuario()

  useEffect(() => {
    buscarRepository();
    mostrarRepositorios();
    setRepositorys(repositorios)
  }, [usuario, repositorios])

  const buscarRepository = () => {
    buscarRepositorios(usuario.login)
  }

  const mostrarRepositorios = () => {
    return (
      <ContainerRepositorios>
        <ItemContainerRepositorios>
          {repositorys ? repositorys.map(repository => {
            return (
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <span>
                      <b>Nome do Repositorio:</b>
                    </span>
                    <span>
                      {repository.name}
                    </span>
                  </div>
                  <div className="col-lg-8">
                    <span>
                      <b>Url do Repositorio:</b>
                    </span>
                    <span>
                      {repository.html_url}
                    </span>
                  </div>
                  <hr />
                </div>
              </div>
            )
          })
            : <div> Nenhum Repositorio Encontrado</div>
          }
        </ItemContainerRepositorios>
      </ContainerRepositorios>
    )
  }

  return (
    <div>
      {mostrarRepositorios()}
    </div>
  );
}

export default Repositorios;