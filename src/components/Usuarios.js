import React, { useState, useEffect } from 'react';
import Api from '../service/api'
import Axios from 'axios';

function  Usuarios() {
    const [usuario, setUsuario] = useState([]);
    const [usuarios, setUsuarios] = useState([]);


    useEffect(() => {
        users();
        setTimeout(() => {
            console.log(usuarios.users[2].login)
        }, 4000)
    }, [])


    async function users() {
        await Axios.get(Api.baseUrl + '').then(res => {

            setUsuarios({ users: res.data });
        }).catch(e => {
            console.log("erros: e")
        })

    }
    return usuarios;
}

export default Usuarios;