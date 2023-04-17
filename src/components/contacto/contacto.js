
import {Link,useNavigate}  from 'react-router-dom'
import './contacto.css'
import  axios  from 'axios'
import { useState } from 'react'

const Contacto=()=>{
    const navigate=useNavigate()


    const enviar=()=>{
        if(nombre==='' || correo==='' || telefono===''||solicitud===''){
            alert('porfavor llenar todos los campos')
        }else{            
            axios.post('http://localhost:3006/nueva-solicitud',{
                nombre:nombre,
                correo:correo,
                telefono:telefono,
                solicitud:solicitud,
                comentario:comentario
            }).then(response=>{
                navigate('/')
                setnombre('')
                setcorreo('')
                settelefono('')
                setsolicitud('')
                setcomentario('')
                alert('solicitud enviada con exito')
            })
        }
    }
    
    //a qui le decimos que la variable nombre y la variable tipo van a comenzar con un valor de vacio 
    const [nombre,setnombre]=useState('')
    const [correo,setcorreo]=useState('')
    const [telefono,settelefono]=useState('')
    const [solicitud,setsolicitud]=useState('')
    const [comentario,setcomentario]=useState('')
    

    // a qui le decimos que en los imputs valla  escuchando y valla enviando la informacion nueva a nombre y tipo
    const onchangenombre=(event)=>{
        setnombre(event.target.value)
    }
    const onchangecorreo=(event)=>{
        setcorreo(event.target.value)  
    }
    const onchangetelefono=(event)=>{
        settelefono(event.target.value)
    }
    const onchangesolicitud=(event)=>{
        setsolicitud(event.target.value)  
    }
    const onchangecomentario=(event)=>{
        setcomentario(event.target.value)  
    }

    return(
        <div className="body">


        <div className='frm'>
            <form className="form">
                <span className="signup">Contactame</span>
                <input value={nombre} onChange={onchangenombre}  type="text" maxLength='45' placeholder="nombre" className="form--input"></input>
                <input value={correo} onChange={onchangecorreo} type="email" maxLength='45' placeholder="correo-electronico" className="form--input"></input>
                <input value={telefono} onChange={onchangetelefono} type="tel" maxLength='45' placeholder="telefono/celular" className="form--input"></input>
                <input value={solicitud} onChange={onchangesolicitud} type="text" maxLength='45' placeholder="solicitud" className="form--input"></input>
                <textarea value={comentario} onChange={onchangecomentario} maxLength="100"  placeholder='comentario' className="form--input" ></textarea>
    
                <div className='botons'>
                    <div className='boton1'>

                    <button onClick={()=>{enviar()}} >
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="#ff0080"></path>
                            </svg>
                            </div>
                        </div>
                        <span>enviar</span>
                        </button>
                    </div>

                        <Link to={'/'}>
                    <div className='botonele'>
                            <button><span className="text">cancelar</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ff0080" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" fill='#ff0080' ></path></svg></span></button>
                    </div>
                        </Link>
                
                </div>
            </form>
        </div>




        </div>
    )
}

export default Contacto