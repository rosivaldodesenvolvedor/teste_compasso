import React, { createContext, useEffect, useState, } from 'react';
import PropTypes, { object } from 'prop-types'
import api from '../service/api'

const UsuarioContext = createContext();

function UsuarioProvider({ children }) {

  const [usuario, setUsuario] = useState('')
  const [repositorios, setRepositorios] = useState('')
  const [repositorioMaisVisto, setRepositorioMaisVisto] = useState('')

  const buscarUsuario = async (user) => {
    const result = await api.get("" + user)
    setUsuario(result.data)
    console.log("Resultado", result.data)
  }

  const buscarRepositorios = async (user) => {
    const result = await api.get("" + user + "/repos")
    setRepositorios(result.data)
  }

  const buscarRepositoriosMaisVistos = async (user) => {
    const result = await api.get("" + user + "/starred")
    setRepositorioMaisVisto(result.data)
  }
  return (
    <UsuarioContext.Provider value={{
      usuario,
      repositorios,
      repositorioMaisVisto,
      buscarRepositoriosMaisVistos,
      buscarUsuario,
      buscarRepositorios
    }}>
      {children}
    </UsuarioContext.Provider>
  )
}

UsuarioProvider.propTypes = {
  children: PropTypes.node.isRequired
}
export { UsuarioProvider, UsuarioContext }