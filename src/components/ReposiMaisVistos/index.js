import React, { useState, useEffect } from 'react';
import useUsuario from '../../hooks/Usuario';
import { ContainerRepositorios, ItemContainerRepositorios } from './style'

const ReposiMaisVistos = () => {

  const [repositorysMaisVistos, sepositorysMaisVistos] = useState(() => [])

  const { usuario, repositorioMaisVisto, buscarRepositoriosMaisVistos } = useUsuario()

  useEffect(() => {
    buscarRepository();
    mostrarRepositorios();
    sepositorysMaisVistos(repositorioMaisVisto)
  }, [usuario, repositorioMaisVisto])

  const buscarRepository = () => {
    buscarRepositoriosMaisVistos(usuario.login)
  }

  const mostrarRepositorios = () => {
    return (

      <ContainerRepositorios>
        <ItemContainerRepositorios>
          {repositorysMaisVistos ? repositorysMaisVistos.map(repository => {
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
                     <a href={repository.html_url}>{repository.html_url}</a> 
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
export default ReposiMaisVistos