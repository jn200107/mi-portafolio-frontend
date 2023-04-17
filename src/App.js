import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SobreMi from './components/sobre-mi/SobreMi.js';
import Skills from './components/skills/habilidades'
import Contacto from './components/contacto/contacto';
import Portafolio from './components/portafolio/portafolio';
import Solicitudes from './components/solicitudes/solicitudes';
import Loguin from './components/loguin/loguin'
import {ProtectedRoute} from './components/ruta-protegida/ruta'
import { useState } from 'react';

const App=()=> {



  const [isAllowed,setisAllowed]=useState()

  //si tengo dudas revisar clase 54
  //validateRoute es la data que le enviamos de login le decimos que si la data que esta en el login la que esta escuchando 
  //en los botones de inicio sesion esta vacia(osea que el usuario no existe) para que ponga el allowed en true o false o sea que deje pasar la ruta protegida 
  const funcionObtenerDataHijo=(validateRouteLogin)=>{
    if(validateRouteLogin===''){
      setisAllowed(true)
    }else{
      setisAllowed(false)
    }
  }

  return (
    <BrowserRouter>
      <Routes>
      <Route element={<ProtectedRoute isAllowed={isAllowed}/>}> 
          <Route path='/solicitudes' element={<Solicitudes/>}></Route>
      </Route> 

        <Route path='/login' element={<Loguin childToParent={funcionObtenerDataHijo} />}></Route>
          <Route path='/' element={<SobreMi/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/contacto' element={<Contacto/>}></Route>
          <Route path='/portafolio' element={<Portafolio/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
