import React, { useState, useEffect } from 'react';
import useUsuario from '../hooks/Usuario';



const Search = () => {

    const { usuario, buscarUsuario } = useUsuario()

    useEffect(() => {
        console.log("aviso" + usuario.login)
    }, [])

    useEffect(() => {
        console.log(usuario)
    }, [usuario])

    return (
        <div>
            Digite o Usuario:
            <input type="text" />
            <button >  Buscar</button>
        </div>

    );
}

export default Search;