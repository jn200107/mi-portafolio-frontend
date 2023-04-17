import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './loguin.css'
import  axios  from 'axios'
import { Button } from '@mui/material'


const Login=({childToParent})=>{

    const navigate=useNavigate()


    const [data,setData]=useState('')


    const send=()=>{
        if(usuario===''||contraseña===''){
            alert('por favor llenar todos los campos')
        }else{
            axios.post('http://localhost:3006/login',{
                usuario:usuario,
                contraseña:contraseña
            }).then((Response)=>{
                // alert('acceso permitido')
                setData(Response.data)
                setUsuario('')
                setContraseña('')
                childToParent(data)   //a esta misma funcion en el padre es al que le vamos a enviar la data
                navigate('/solicitudes') //a qui decimos que si el proceso da perfectamente nos redirija a home
            }).catch((error)=>{
                alert('usuario o contraseña incorrecta')
                setData('')
                setUsuario('')
                setContraseña('')
                childToParent(data)
            })
        }
    }
    

    const onChangeUsuario=(event)=>{setUsuario(event.target.value)}
    const onChangeContraseña=(event)=>{setContraseña(event.target.value)}

    const [usuario,setUsuario]=useState('')
    const [contraseña,setContraseña]=useState('')


    return(
        <div className='loguincontainer' >
            <div className="login-box">
            <form>
            <div className="user-box">
                <input value={usuario} onChange={onChangeUsuario} type="text"></input>
                <label>nombre usuario</label>
            </div>
            <div className="user-box">
                <input value={contraseña} onChange={onChangeContraseña}  type="password"></input>
                <label>contraseña</label>
            </div>
            <div className='center'>
                <Button onClick={()=>{send()}} >
                        acceder
                    <span></span>
                </Button>



            </div>
            </form>
            </div>
        </div>
    )
}

export default Login