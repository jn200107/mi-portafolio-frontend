import React, { useEffect,useState }   from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { Box } from '@mui/system';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import './tabla.css'



const TableDense=()=>{

  //////////////////////////////////////////////////// manera de hacer el metodo get ////////////////////////////////////
    const[Data,setdata]=useState([])

    let getData=async()=>{
        try {
        const{data: response}=await axios.get('http://localhost:3006/solicitud')
        setdata(response)
        } catch(error){
        console.log(error.message)
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


    


    //////////////////////////////////////////////////metodo put////////////////////////////////////////////////////////////////////

    //esta funcion hace que cambie el estado del show form a false y cambie el valor del nombre y del tipo con los rows 
    const editar=((obj)=>{
        setshowForm(false)
        SetMostrarBotonGuardar(false)
        setnombre(obj.nombre)
        setcorreo(obj.correo)
        settelefono(obj.telefono)
        setsolicitud(obj.solicitud)
        setcomentario(obj.comentario)
        setid(obj.idsolicitudes)
    })

    const [id,setid]=useState('')

    const actualizar=(()=>{
        if(nombre==='' || correo==='' || telefono==='' || solicitud===''){
        setshowAlert(true)
        }else{
        axios.put(`http://localhost:3006/actualizar-solicitud/${id}`,{
            nombre:nombre,
            correo:correo,
            telefono:telefono,
            solicitud:solicitud,
            comentario:comentario
        }).then(()=>{
            alert('solicitud actualizada con exito')
        setnombre('')
        // settipo('')
        setid('')
        setshowForm(true)
        getData()
        setshowAlert(false)
        SetMostrarBotonGuardar(true)
        })}

    })

    const cancelar=(()=>{
    //esto significa que cuando le demos click al boton de cancelar va ha setear o a reiniciar el valor de todos estos a su valor inicial
        setshowForm(true)
        // setnombre('')
        // settipo('')
        // setid('')
        SetMostrarBotonGuardar(true)
        setshowAlert(false)


    })


    const eliminar=(()=>{
        axios.delete(`http://localhost:3006/eliminar-solicitud/${id}`,{
            nombre:nombre,
            correo:correo,
            telefono:telefono,
            solicitud:solicitud,
            comentario:comentario
        }).then(()=>{
            alert('solicitud eliminada con exito')
        setnombre('')
        // settipo('')
        setid('')
        setshowForm(true)
        getData()
        setshowAlert(false)
        SetMostrarBotonGuardar(true)
        })

    })








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //esta parte es para esconder el menu le decimos que el showform comienze con un valor de true y cuando le demos click al boton se ponga en un valor de false 

  // entonces marcamos en la tabla de que cuando show form sea false nos muestre el formulario y cuando sea true nos muestre lo demas
    const[showForm,setshowForm]=useState(true)


    const[mostrarBotonGuardar,SetMostrarBotonGuardar]=useState(true)

    const [showAlert,setshowAlert]=useState(false)




    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    
    useEffect(()=>{
        getData()
    },[])
        
    
    return(
        <Box>
        
        {
            !showForm&&
            <Box>
                    {
                    showAlert &&
                        <Alert severity="warning">debes llenar todos los campos</Alert>
                    }
                <div className='caja00'>
                    <div className='caja0'>
                        <p className='actu'>actualizar datos</p>
                        <input value={nombre} onChange={onchangenombre} id="outlined-basic" label="nombre" variant="outlined" ></input>
                        <input value={correo} onChange={onchangecorreo} id="outlined-basic" label="correo" variant="outlined" ></input>
                        <input value={telefono} onChange={onchangetelefono} id="outlined-basic" label="telefono" variant="outlined" ></input>
                        <input value={solicitud} onChange={onchangesolicitud} id="outlined-basic" label="solicitud" variant="outlined" ></input>
                        <textarea maxLength="100" value={comentario} onChange={onchangecomentario} id="area" label="comentario" variant="outlined" ></textarea>
                

                    
                        <div className='cent'>

                            <div className='boton10'>
                                <button onClick={()=>{actualizar()}} >
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="#ff0080"></path>
                                    </svg>
                                    </div>
                                </div>
                                <span>actualizar</span>
                                </button>
                            </div>
                                    
                            <div className='botoneliminar'>
                                {/* <button onClick={()=>{eliminar()}} className="noselect"><span className="text">eliminar</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ff0080" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" fill='#ff0080' ></path></svg></span></button> */}
                                <button onClick={()=>{eliminar()}} ><span className="text">eliminar</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-filled" width="24" height="24" viewBox="9 -10 9 44" stroke-width="1.95" stroke="#ff0080" fill="#ff0080" stroke-linecap="black" stroke-linejoin=""><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" stroke-width="0" fill="#ff0080"></path><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" stroke-width="0" fill="#ff0080"></path></svg></span></button>
                            </div>
                            <div className='boton2'>
                                    <button onClick={()=>{cancelar()}} ><span className="text">cancelar</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ff0080" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" fill='#ff0080' ></path></svg></span></button>
                            </div>
                        </div>
                
                    </div> 

                </div>
            </Box>
        }


        {
            showForm&&
            <Grid container>
                <div className='sol'>
                    <hr className='h' ></hr>
                    <p className='p-sol' >solicitudes</p>
                    <Link to={'/'} >
                    <div className='boton3'>
                        <button className='ini'>ir al inicio</button>
                    </div>   
                    </Link>  
                </div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">

                <TableHead>
                    <TableRow>
                    <TableCell><strong>id</strong></TableCell>
                    <TableCell align="left"><strong>nombre</strong></TableCell>
                    <TableCell align="left"><strong>correo</strong></TableCell>
                    <TableCell align="left"><strong>telefono/celular</strong></TableCell>
                    <TableCell align="left"><strong>solicitud</strong></TableCell>
                    <TableCell align="left"><strong>comentario</strong></TableCell>

                    </TableRow>
                </TableHead>

                <TableBody >
                    {Data.map((row) => (
                    //a qui le decimos que hacemos una funcion que cuando le demos click reciba la informacion de los row y cambie a false y cambie los valores de nombre y tipo
                    <TableRow  onClick={()=>{editar(row)}} key={row.idsolicitudes} sx={{ border: 0 }}>       
                        <TableCell  component="th" scope="row">{row.idsolicitudes}</TableCell>
                        <TableCell align="left">{row.nombre}</TableCell>
                        <TableCell align="left">{row.correo}</TableCell>
                        <TableCell align="left">{row.telefono}</TableCell>
                        <TableCell align="left">{row.solicitud}</TableCell>
                        <TableCell className='cell' align="left">{row.comentario}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                    
                    

                </Table>
            </TableContainer>

            <Grid item sx={{pt:2,margin:'auto'}}>

            </Grid>

            </Grid>

        }
        </Box>
    )    


}

export default TableDense