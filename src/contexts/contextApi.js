import React, { createContext, useEffect, useState,   } from 'react';
import PropTypes, { object } from 'prop-types'
import api from '../service/api'
import Axios from 'axios'

const UsuarioContext = createContext();

function UsuarioProvider({Children}) {

    const [usuario, setUsuario] = useState('')

    const buscarUsuario = async (user) => {
        const result = await Axios.get(api.baseUrl  + user)
        setUsuario(result.data)
        console.log("buscarUsuario")
      }


      useEffect(()=>{
        {console.log("metodo UsuarioProvider")}
      },[])

    return ( 
        <UsuarioContext.Provider value={{
            usuario,
            buscarUsuario
            }}>
            {Children}
        </UsuarioContext.Provider>
    )

}

UsuarioProvider.propTypes = {
    children: PropTypes.node.isRequired
  }

 
export { UsuarioProvider, UsuarioContext }