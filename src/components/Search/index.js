import React, { useState, useEffect } from 'react';
import { Button} from 'reactstrap';
import useUsuario from '../../hooks/Usuario';
import { ContainerSearch, ItemSearch, InputSearch } from './styled';



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
                            <InputSearch type="text" onChange={e => { pesquisar(e) }} />
                            
                            <Button  outline color="primary" onClick={() => { finalizar() }}> Buscar</Button >
                          
                        
                </ItemSearch>
            </ContainerSearch>
        </div>

    );
}

export default Search;