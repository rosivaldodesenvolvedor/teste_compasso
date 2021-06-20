import React, { useState, useEffect } from 'react';
import useUsuario from '../../hooks/Usuario';
import { ContainerSearch, ItemSearch } from './styled';

const Search = () => {

    const [buscaUsuario, setBuscaUsuario] = useState('')
    const { usuario, buscarUsuario } = useUsuario()

    const pesquisar = (e) => {
        setBuscaUsuario(e.target.value)
    }

    function finalizar() {
        buscarUsuario(buscaUsuario)
    }
    return (
        <div>
            <ContainerSearch>
                <ItemSearch>
                    <h3>Pesquisar por Usuario do GitHub</h3>
                    <div className="input-group input-group-sm mb-3">
                        <div className="btn btn-primary primary">
                            <button 
                            type="button" 
                            className=" btn btn-primary primary" 
                            onClick={ () => { finalizar() }}> 
                            Buscar
                            </button>
                        </div>
                        <input
                        className="form-control" 
                        type="text" 
                        onChange={e => { pesquisar(e) }} />
                    </div>
                </ItemSearch>
            </ContainerSearch>
        </div>
    );
}
export default Search;