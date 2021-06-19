import { useContext } from 'react'
import { UsuarioContext } from '../contexts/contextApi'

function useUsuario() {
  return useContext(UsuarioContext)
}

export default useUsuario




