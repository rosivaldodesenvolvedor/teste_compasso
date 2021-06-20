import React, { useState, useEffect } from 'react';
import useUsuario from '../../hooks/Usuario';
import {ContainerRepositorios} from './style'


const Repositorios = () => {

  const [repositorios, setRepositorios] = useState(()=>[])
  const { usuario, buscarRepositorios } = useUsuario()

  useEffect(() => {
    buscarRepository();
    mostrarRepositorios();
    setTimeout(()=>{
      console.log(repositorios)
    },10000)
  }, [usuario])

  const buscarRepository = () => {
   buscarRepositorios(usuario.login).then(res => {
        setRepositorios(res)
    })
  }

  const mostrarRepositorios = () => {
    return ( <div><ContainerRepositorios>
      {
      repositorios ? repositorios.map(repository => {
        return (
          
        <div> {repository.name} </div>)
      }) 
       : <div> Nenhum Repositorio Encontrado</div>
      } 
    </ContainerRepositorios>
      </div>  )
  }


  return (
    <div>
      { mostrarRepositorios()}
    </div>
  );
}

export default Repositorios;